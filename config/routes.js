var Index = require('../app/controllers/index')
var User = require('../app/controllers/user')
var Project = require('../app/controllers/project')


// routes
/*
index
project
user
comment
*/

module.exports = function(app){
    app.use(function(req, res, next){
        var _user = req.session.user
        app.locals.user = _user
        next()
    })

    app.get('/', Index.index)

    app.post('/user/signup', User.signup)
	app.post('/user/signin', User.signin)
	app.get('/signin', User.showSignin)
	app.get('/signup', User.showSignup)
	app.get('/logout', User.logout)
    app.get('/admin/user/list', User.signinRequired ,User.adminRequired ,User.list)
    
    app.get('/user/project/new', User.signinRequired, Project.new)
    app.get('/user/project/:id', User.signinRequired, Project.new)
    app.post('/user/project', User.signinRequired, Project.save)
    

}