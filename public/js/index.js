$(function(){
    // alert('in')
    // $('#calendar').fullCalendar({
    //     locale: 'zh-cn',
    //     // height: 600,
    //     // weekNumbers: true,
    // })
    // alert('/')
    $('#indexTable').bootstrapTable({
        // columns: 
        pagination: true,
        paginationLoop: true,
        showRefresh: true,
        search: true,
        searchOnEnterKey: true,
        showExport: true,
        exportTypes: ['xlsx','excel'],
        
    })
    
    $('.del').click(function(e){
        var target = $(e.target)
        var id = target.data('id')
        var w = target.data('week')
        var tr = $('.item-id-' + id)
        // alert(id)
        // console.log(e)
        $.ajax({
            type: 'DELETE',
            url: '/user/project?id=' + id + '&week=' + w,
        }).done(function(results){
            if(results.success === 1){
                if(tr.length > 0){
                    tr.remove()
                }
            }
        })
    })

// ----- repeat in every public pages -----
    $('#modalSignup').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh',
        },
        message: '请输入值',
        fields: {
            'user[username]': {
                validators: {
                    notEmpty: {
                        message: '必须为非空',
                    },
                },
            },
            'user[nickname]': {
                validators: {
                    notEmpty: {
                        message: '必须为非空',
                    },
                },
            },
            'user[password]': {
                validators: {
                    notEmpty: {
                        message: '必须为非空',
                    },
                    stringLength: {
                        min: 6,
                        message: '必须大于6个字符',
                    },
                },
            },
        },
    })

    $('#modalSignin').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh',
        },
        message: '请输入值',
        fields: {
            'user[username]': {
                validators: {
                    notEmpty: {
                        message: '必须为非空',
                    },
                },
            },
            'user[password]': {
                validators: {
                    notEmpty: {
                        message: '必须为非空',
                    },
                    stringLength: {
                        min: 6,
                        message: '必须大于6个字符',
                    },
                },
            },
        },
    })
// ----- repeat ends -----

        
})