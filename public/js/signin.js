$(function(){
    $('#signin').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        message: '请输入值',
        fields: {
            'user[username]': {
                // selector: '#signinUsername',
                validators: {
                    notEmpty: {
                        message: '用户名必须非空'
                    }
                }
            },
            'user[password]': {
                // selector: '#signinPassword',
                validators: {
                    notEmpty: {
                        message: '密码必须非空'
                    },
                    stringLength: {
                        min: 6,
                        message: '密码位数必须大于6'
                    }
                }
            }
        }
    })
})