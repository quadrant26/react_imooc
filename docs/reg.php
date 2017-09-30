<?php



$array = array("code"=>0, "msg"=>"请求成功");


// 指定允许其他域名访问 
header('Access-Control-Allow-Origin:*'); 
// 响应类型 
header('Access-Control-Allow-Methods:GET'); 
// 响应头设置 
header('Access-Control-Allow-Headers:x-requested-with,content-type');
$table_is_exits = false;


if( isset($_GET['g_username']) && isset($_GET['g_password']) && isset($_GET['g_confrimPassword']) )  
{  
    $user = $_GET["g_username"];  
    $psw = $_GET["g_password"];  
    $psw_confirm = $_GET["g_confrimPassword"];  

    if($psw == $psw_confirm) {  
        $conn = mysqli_connect("localhost:3306","root", "");   //连接数据库

        if( !$conn ){
            $array = array("code"=>1, "error_msg"=>"无法连接到数据库!");
            echo json_encode($array);
            die('Could not connect: ' . mysqli_error());
        }

        $dbname = 'react';
        $dbval = mysqli_select_db($conn, $dbname);

        if( !$dbval ){
            // 数据库不存在 创建数据库
            $sql = 'CREATE DATABASE react';
            mysqli_query($conn,$sql);
            $dbval = mysqli_select_db($conn, $dbname);
        }
        mysqli_query($conn, "set names 'utf8'");

        // 判断表是否存在
        // 判断表是否存在
        $table = 'user';
        if(mysqli_num_rows(mysqli_query($conn, "SHOW TABLES LIKE '". $table."'"))==1) {
            // echo "Table exists";
            $table_is_exits = true;

        } else {
            // 表不存在，创建该表
            // echo "Table does not exist";
            $sql = "CREATE TABLE user( ".
            "user_id INT NOT NULL AUTO_INCREMENT, ".
            "username VARCHAR(100) NOT NULL, ".
            "password VARCHAR(40) NOT NULL, ".
            "create_time DATETIME, ".
            "PRIMARY KEY ( user_id ))ENGINE=InnoDB DEFAULT CHARSET=utf8; ";
            $retval = mysqli_query( $conn, $sql );
            if(! $retval )
            {
                die('数据表创建失败: ' . mysqli_error($conn));
            };

        };

        if( $table_is_exits ){

            $sql = "select username from user where username = '$user'"; //SQL语句  
            $result = mysqli_query($conn, $sql);    //执行SQL语句  
            $num = mysqli_num_rows($result); //统计执行结果影响的行数  
            if($num)    //如果已经存在该用户  
            {  
                $array = array("code"=>1, "error_msg"=>"用户名已存在!");
                echo json_encode($array);
            }  
            else    //不存在当前注册用户名称  
            {  
                $createtime = date("Y-m-d h:i:s");
                $sql_insert = "insert into user (username, password, create_time) values('$user','$psw','$createtime')";  
                $res_insert = mysqli_query($conn, $sql_insert);  
                if($res_insert)  
                {  
                    $array = array("code"=>0, "msg"=>"注册成功!");
                    echo json_encode($array); 
                }
                else  
                {  
                    $array = array("code"=>1, "error_msg"=>"系统繁忙，请稍候!");
                    echo json_encode($array);
                }  
            }
        };
  
    }  
    else  
    {  
        $array = array("code"=>1, "msg"=>"密码不一致!");
		echo json_encode($array); 
    }
}  
else  
{   
    $array = array("code"=>1, "error_msg"=>"请确认信息完整性！");
	echo json_encode($array);
}

?>