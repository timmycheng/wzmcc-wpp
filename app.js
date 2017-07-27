// 声明
var express = require('express')
var path = require('path')
var port = process.env.PORT || 3000
var app = express()

// 设置
app.set('views', './app/views/pages')
app.set('view engine', 'jade')
app.use(express.static(path.join(__dirname, 'public')))

// 启动服务
app.listen(port)


// routes
// index: /


// app.get('/', function(req, res){
// 	console.log('get')
// 	// res.send('hello world.')
// 	res.render('index', {
// 		title: '首页',
// 	})
// })
require('./config/routes')(app)
console.log('start web server at ', port, '...')