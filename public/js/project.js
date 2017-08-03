$(function(){
    // alert('in')
    $('#inputDeadline').flatpickr({
        "locale": "zh",
        "weekNumbers": true,
        "dateFormat": 'Y/m/d',
    })
    $('#inputStart').flatpickr({
        "locale": "zh",
        // "defaultDate": Date.now(),
        "weekNumbers": true,
        "dateFormat": 'Y/m/d',
    })
    // $('#newCommentForm').submit(function(e){
    //     console.log(e)
    //     e.preventDefault()
    //     // alert('in')
    //     $.ajax({
    //         url: '/user/project/comment',
    //         type: 'POST',
    //         data: e,
    //     }).done(function(result){
    //         if(result.success == 1){
    //             alert('save in')
    //         }
    //     })
    // })
})