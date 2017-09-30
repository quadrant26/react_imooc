<?php



$array = array("code"=>0, "msg"=>"请求成功");


// 指定允许其他域名访问 
header('Access-Control-Allow-Origin:*'); 
// 响应类型 
header('Access-Control-Allow-Methods:GET'); 
// 响应头设置 
header('Access-Control-Allow-Headers:x-requested-with,content-type');

$table_is_exits = false;

if( isset($_GET['g_username']) && isset($_GET['g_password']) )  
{  
    $user = $_GET["g_username"];  
    $psw = $_GET["g_password"];

    $conn = mysqli_connect("localhost:3306","root","");   //连接数据库


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
		echo json_encode(array("code"=>1, "error_msg"=>"请注册后后再进行登录！"));
		exit();

	};

	// 查找数据库
	if( $table_is_exits ){

		$sql = "select username,password from user where username = '$user' and password = '$psw'";  
    	$result = mysqli_query($conn, $sql);

    	if(! $result )
		{
		    die('无法读取数据: ' . mysqli_error($conn));
		}
		// 检索数据库中的数据条数
		$num = mysqli_num_rows($result);

	    if($num) {  
	        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);  //将数据以索引方式储存在数组中
	        echo json_encode(array("code"=>0, "message"=>"登录成功！"));
	        // echo json_encode($row);
	    }  
	    else  
	    {  
	        $array = array("code"=>1, "error_msg"=>"用户名不存在或密码错误！");
	    	echo json_encode($array);
	    }   

	}

    mysqli_close($conn);

}  
else  {  
	$array = array("code"=>1, "error_msg"=>"请输入用户名或密码！");
    echo json_encode($array);
}

?>