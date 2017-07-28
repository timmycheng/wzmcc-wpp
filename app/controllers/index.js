var Project = require('../models/project')

exports.index = function(req, res){
    Project
        .find({})
        .populate('responser', 'nickname')
        .exec(function(err, projects){
            if(err){
                console.log(err)
            }
            // console.log(projects)
            res.render('index', {
                title: '首页',
                projects: projects
            })
        })
}