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

    // $('#modalSignup').bootstrapValidator({
    //     feedbackIcons: {
    //         valid: 'glyphicon glyphicon-ok',
    //         invalid: 'glyphicon glyphicon-remove',
    //         validating: 'glyphicon glyphicon-refresh',
    //     },
    //     // live: 'enabled',
    //     message: '请输入值',
    //     fields: {
    //         signupUsername: {
    //             selector: '#signupUsername',
    //             validators: {
    //                 notEmpty: {
    //                     message: '必须为非空',
    //                 },
    //             },
    //         },
    //         signupNickname: {
    //             validators: {
    //                 notEmpty: {},
    //             },
    //         },
    //         signupPassword: {
    //             validators: {
    //                 notEmpty: {},
    //                 stringLength: {
    //                     min: 6,
    //                     max: 30,
    //                 },
    //             },
    //         },
    //     },
    // })

        
})