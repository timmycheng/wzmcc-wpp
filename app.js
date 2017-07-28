// 声明
var express = require('express')
var session = require('express-session')
var path = require('path')
var port = process.env.PORT || 3000
var app = express()

var bodyParser = require('body-parser')
var serveStatic = require('serve-static')
var cookieParser = require('cookie-parser')

var mongoose = require('mongoose')
var mongoStore = require('connect-mongo')(session)
var mongoUrl = 'mongodb://timmycheng.cn:27017/wzmcc-projects'

// 设置
mongoose.Promise = global.Promise
mongoose.connect(mongoUrl, {useMongoClient: true})

app.set('views', './app/views/pages')
app.set('view engine', 'jade')
app.use(bodyParser.json())

app.use(cookieParser())
app.use(require('connect-multiparty')())

app.use(session({
	secret:'wzmcc',
	store:new mongoStore({
		url:mongoUrl,
		collection:'sessions'
	}),
	resave:false,
    saveUninitialized:true
}))

app.use(bodyParser.urlencoded({
    extended: true,
}))

app.use(express.static(path.join(__dirname, 'public')))
app.locals.moment = require('moment')

// 启动服务
app.listen(port)


// app.get('/', function(req, res){
// 	// console.log('get from browser 123')
// 	// res.send('hello world.')
// 	res.render('index', {
// 		title: '首页',
// 	})
// })
require('./config/routes')(app)
console.log('start web server at ', port, '...')