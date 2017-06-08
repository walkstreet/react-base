var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var WebpackDevServer = require("webpack-dev-server");
var compiler = webpack(config);
var child_process = require('child_process');
var url = 'http://localhost:3000';
var server = new WebpackDevServer(compiler, {
    contentBase: './build/',
    hot: true,
    stats: {
      colors: true
    }
});
server.listen(3000, 'localhost', function (err, result) {
    if (err) {
      return console.log(err);
    }

    console.log('Listening at http://localhost:3000/');

    // 打开浏览器，跳转到指定地址
    if (process.platform == 'wind32') {
        cmd = 'start "%ProgramFiles%\Internet Explorer\iexplore.exe"';
    } else if (process.platform == 'linux') {
        cmd = 'xdg-open';
    } else if (process.platform == 'darwin') {
        cmd = 'open';
    }
    child_process.exec(`${cmd} "${url}"`);
});