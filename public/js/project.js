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
})