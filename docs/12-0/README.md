1. 项目构建

    package

        "antd": "^2.1.0",
        "babel-core": "^6.26.0",
        "babel-loader": "^7.1.2",
        "babel-plugin-react-html-attrs": "^2.0.0",
        "babel-preset-es2015": "^6.24.1",
        "babel-preset-react": "^6.24.1",
        "babelify": "^7.3.0",
        "path": "^0.12.7",
        "react": "^15.3.2",
        "react-dom": "^15.3.2",
        "react-responsive": "^1.2.1",
        "react-router": "^2.8.1",
        "sockjs-client": "^1.1.4",
        "webpack": "^2.2.0",
        "webpack-dev-server": "^2.2.0",
        "webpack-sources": "^1.0.1"

    Build Setup

        # install dependencies
        npm install

        # serve with hot reload at localhost:8080
        npm run dev

        # build for production with minification
        npm run build

2. react-responsive ( Media queries in react for responsive design )

    install 

        $ npm install react-responsive --save

    Usage

        <MediaQuery query='(min-device-width: 1224px)'>
          <div>You are a desktop or laptop</div>
          <MediaQuery query='(min-device-width: 1824px)'>
            <div>You also have a huge screen</div>
          </MediaQuery>
          <MediaQuery query='(max-width: 1224px)'>
            <div>You are sized like a tablet or mobile phone though</div>
          </MediaQuery>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
          <div>You are a tablet or mobile phone</div>
        </MediaQuery>
        <MediaQuery query='(orientation: portrait)'>
          <div>You are portrait</div>
        </MediaQuery>
        <MediaQuery query='(orientation: landscape)'>
          <div>You are landscape</div>
        </MediaQuery>
        <MediaQuery query='(min-resolution: 2dppx)'>
          <div>You are retina</div>
        </MediaQuery>
      </div>

3. 

4. FAQ

    A: antd.css not found

        q: error => not found 'antd/dist/antd.css'
        a: 



