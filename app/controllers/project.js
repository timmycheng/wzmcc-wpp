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
        project: {}
    })
}

exports.save = function(req, res){
    var id = req.body.project._id
    var projectObj = req.body.project
    var _project, _week
    var w = moment(req.body.project.start).format('ww')

    // console.log(projectObj)
    // _week = new Week()
    
    // console.log(_project)
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