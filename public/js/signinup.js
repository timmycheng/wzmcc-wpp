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
                validators: {
                    notEmpty: {
                        message: '用户名必须非空'
                    }
                }
            },
            'user[password]': {
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

    $('#signup').bootstrapValidator({
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