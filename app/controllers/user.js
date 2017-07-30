var User = require('../models/user')


//signup
exports.signup = function(req,res){
	var _user = req.body.user
	
	User.findOne({username: _user.username},function(err,user){
		if(err){
			console.log(err)

		}
		if(user){
			console.log('用户已注册，请直接登录')
			return res.redirect('/signin')//已注册的用户在注册时候重定向到登录页面
		}else{
			var user  = new User(_user)
			console.log(user)
			user.save(function(err,user){
				if(err){
					console.log(err)
				}
				
				res.redirect('/')
			})
		}
	})
}

exports.showSignup = function(req,res){
	res.render('signup',{
		title:'注册页面'
	})
}

exports.showSignin = function(req,res){
	res.render('signin',{
		title:'登录页面'
	})
}

//userlist page
exports.list = function(req,res){
	
	User.fetch(function(err,users){
		if(err){
			console.log(err)
		}
		res.render('userlist',{
			title:'imooc 用户列表页',
			users:users
		})
	})	
		
}




//signin
exports.signin = function(req, res){
	var _user = req.body.user
	var username = _user.username
	var password = _user.password

	User.findOne({username: username},function(err, user){
		if(err){
			console.log(err)
		}
		if(!user){
			console.log('用户不存在')
			return res.redirect('/signup')
		}
		
		user.comparePassword(password, function(err, isMatch){
			if(err){
				console.log(err)
			}
			if(isMatch){
				req.session.user = user
                console.log('密码匹配')
                // console.log(req.session.user)
				return res.redirect('/')
			}else{
				console.log('密码不匹配')
				return res.redirect('/signin')
				
			}
		})
	})
}

//logout
exports.logout = function(req, res){
	delete req.session.user
	//delete app.locals.user
	res.redirect('/')
}


//midware for user
exports.signinRequired = function(req,res,next){
	var user = req.session.user
	if(!user){
		req.method = 'GET'
		console.log(req.method)
		return res.redirect('/signin')
		// return res.render('index')
	}
	next()
		
}

exports.adminRequired = function(req,res,next){
	var user = req.session.user
	console.log(req.session.user)
	if(user.role <= 10 ){
		// req.method = 'GET'
		return res.redirect('/signin')
	}
	next()
		
}


