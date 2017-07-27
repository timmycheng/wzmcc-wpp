// 声明
var express = require('express')
var path = require('path')
var port = process.env.PORT || 3000
var app = express()

// 设置
app.set('views', './views')
app.set('view engine', 'jade')
app.use(express.static(path.join(__dirname, 'bower_components')))

// 启动服务
app.listen(port)
console.log('start web server at ', port, '...')


// routes
// index: /


app.get('/', function(req, res){
	console.log('get')
	// res.send('hello world.')
	res.render('index')
})