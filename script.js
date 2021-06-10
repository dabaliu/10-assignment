$(document).ready(function() {
    $("#submit").click(function(e) {
        e.preventDefault();
        var username = $("#username").val();
        var password = $("#password").val();

        /* Username validation */
        if (username == null || username == '') {
            $('input[type="text"]').css("border","1px solid red");
            $('#username-empty').removeAttr('hidden');
            $('#user-invalid').removeAttr('hidden');
        } else if (username !== 'new_user') {
            $('input[type="text"]').css("border","1px solid red");
            $('#username-valid').removeAttr('hidden');
            $('#user-invalid').removeAttr('hidden');
        } else {
            $('input[type="text"]').css("border","1px solid green");
            $('#user-valid').removeAttr('hidden');
        }

        /* Password validation */
        if (password == null || password == '') {
            $('input[type="password"]').css("border","1px solid red");
            $('#password-empty').removeAttr('hidden');
            $('#pass-invalid').removeAttr('hidden');
        } else if (password !== '123456789') {
            $('input[type="password"]').css("border","1px solid red");
            $('#password-valid').removeAttr('hidden');
            $('#pass-invalid').removeAttr('hidden');
        } else {
            $('input[type="password"]').css("border","1px solid green");
            $('#pass-valid').removeAttr('hidden');
        }

        /* Successful login */
        if (username == 'new_user' && password == '123456789') {
            $('input[type="text"]').css("border","1px solid green");
            $('input[type="password"]').css("border","1px solid green");
            $('#success-login').removeAttr('hidden');
            $('#user-valid').removeAttr('hidden');
            $('#pass-valid').removeAttr('hidden');
        }
    });
});