var Index = require('../app/controllers/index')
var User = require('../app/controllers/user')
var Project = require('../app/controllers/project')

// var moment = require('moment')
// routes
/*
index
project
user
comment
*/

module.exports = function(app){
    // session
    app.use(function(req, res, next){
        var _user = req.session.user
        app.locals.user = _user
        next()
    })

    // debug
    app.use(function(req, res, next){
        var date = app.locals.moment(Date.now()).format('hh:mm:ss')
        console.log(date, req.method, req.originalUrl)
        next()
    })

    // app.get('/', Index.index)
    app.get('/', Project.list, Index.newInd)

    app.post('/user/signup', User.signup)
	app.post('/user/signin', User.signin)
	app.get('/signin', User.showSignin)
	app.get('/signup', User.showSignup)
	app.get('/logout', User.logout)
    app.get('/admin/user/list', User.signinRequired ,User.adminRequired ,User.list)
    app.delete('/admin/user/list', User.adminRequired, User.del)
    
    app.get('/user/project/new', User.signinRequired, Project.new)
    app.get('/user/project/list', User.signinRequired, Project.listJSON)
    app.get('/user/project/:id', User.signinRequired, Project.detail)
    app.post('/user/project', User.signinRequired, Project.saveAndUpdate)
    app.delete('/user/project', User.signinRequired, Project.del)
    

}