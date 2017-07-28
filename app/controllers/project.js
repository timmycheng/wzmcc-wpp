var Project = require('../models/project')
// var Catetory = require('../models/catetory')
// var Comment = require('../models/comment')
var _ = require('underscore')

var fs = require("fs")
var path =require("path")

exports.new = function(req, res){
    res.render('project', {
        title: '新增项目',
        project: {}
    })
}

exports.save = function(req, res){
    var id = req.body.project._id
    var projectObj = req.body.project
    var _project

    // console.log(projectObj)
    _project = new Project(projectObj)
    // console.log(_project)
    _project.save(function(err, project){
        if(err){
            console.log(err)
        }
        res.redirect('/')
    })
}