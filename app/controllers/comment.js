var Comment = require('../models/comment')
var Project = require('../models/project')
var moment = require('moment')
var _ = require('underscore')

exports.list = function(req, res, next){
    Comment
        .find({})
        .populate('project from to')
        .sort('cearteAt')
        .exc(function(err, comments){
            if(err){
                console.log(err)
            }
            req.comments = comments
        })
}

exports.listJSON = function(req, res){
    Comment
        .find({})
        .populate('projects from to')
        .sort('cearteAt')
        .exc(function(err, comments){
            if(err){
                console.log(err)
            }
            res.send(comments)
        })
}

exports.save = function(req, res){
    // var id = req.body.comment._id
    var commentObj = req.body.comment
    console.log(commentObj)
    var _comment = new Comment(commentObj)
    
    _comment.save(function(err, comment){
        if(err){
            console.log(err)
        }
        console.log('success')
        console.log(comment)
        if(!comment.to){
            Project
                .update(
                    {_id: comment.project},
                    {$set: {latest: comment._id}},
                    function(err, ret){
                        if(err){
                            console.log('err', err)
                        }
                        console.log('ret', ret)
                    }
                )
        }
        res.redirect('/user/project/'+comment.project)
        
    })
}