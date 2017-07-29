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
})