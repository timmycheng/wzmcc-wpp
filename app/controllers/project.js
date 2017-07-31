var Project = require('../models/project')
var Week = require('../models/week')
// var Catetory = require('../models/catetory')
// var Comment = require('../models/comment')
var moment = require('moment')
var _ = require('underscore')

var fs = require("fs")
var path =require("path")

exports.new = function(req, res){
    res.render('project', {
        title: '新增项目',
        project: {start: Date.now()}
    })
}

exports.saveAndUpdate = function(req, res){
    var id = req.body.project._id
    var projectObj = req.body.project
    var _project, _week
    var w = moment(req.body.project.start).format('ww')

    // console.log(projectObj)
    // _week = new Week()
    
    // console.log(_project)
    if(id){
        // console.log(projectObj)
        // console.log('update')
        Project.findById(id, function(err, project){
            if(err){
                console.log(err)
            }
            _project = _.extend(project, projectObj)
            _project.save(function(err, project){
                if(err){
                    console.log(err)
                }
                res.redirect('/')
            })
        })
    }else{
        // console.log('save')
        Week.findOneAndUpdate(
            {weeknumber: w}, 
            {$inc: {count: 1}}, 
            {upsert: true}, 
            function(err, week){
                if(err){
                    console.log(err)
                }
                // console.log(week)
                // projectObj.week = week.count
                if(week){
                    projectObj.pid = week.weeknumber + '-' + (week.count + 1)
                }else{
                    projectObj.pid = w + '-1'
                }
                // console.log(projectObj)
                _project = new Project(projectObj)
                _project.save(function(err, project){
                    if(err){
                        console.log(err)
                    }
                    res.redirect('/')
                })
        })
    }

}

exports.del = function(req, res){
    var id = req.query.id
    var week = req.query.week
    // console.log(id)
    if (id) {
        Project.remove({_id: id}, function(err){
            if(err){
                console.log(err)
            }else{
                Week.findOneAndUpdate(
                    {weeknumber: week},
                    {$inc: {count: -1}},
                    function(err){
                        if(err){
                            console.log(err)
                        }
                        res.json({success: 1})
                    }
                )
            }
        })
    }
}

exports.list = function(req, res, next){
    Project
        .find({})
        .populate('responser', 'nickname')
        .sort('deadline meta.updateAt')
        .exec(function(err, projects){
            if(err){
                console.log(err)
            }
            req.projects = projects
            next()
        })
}

exports.listJSON = function(req, res){
    Project
        .find({})
        .populate('responser', 'nickname')
        .exec(function(err, projects){
            if(err){
                console.log(err)
            }
            res.send(projects)
        })
}

exports.detail = function(req, res){
    var id = req.params.id
    // console.log(id)
    if(id) {
        Project
            .findById({_id: id}, function(err, project){
                // console.log(project)
                if(err){
                    console.log(err)
                }
                res.render('project', {
                    title: project.name,
                    project: project,
                })
            })
    }
}