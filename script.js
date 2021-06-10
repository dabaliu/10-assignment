$(document).ready(function() {
    $("#submit").click(function(e) {
        e.preventDefault();
        var username = $("#username").val();
        var password = $("#password").val();

        /* Login credentials */
        const user = "new_user";
        const pass = "123456789";

        /* Username validation */
        if (username == null || username == '') {
            $('input[type="text"]').addClass("is-invalid");
            $('#username-empty').removeAttr('hidden');
            $('#user-invalid').removeAttr('hidden');
        } else if (username !== user) {
            $('input[type="text"]').addClass("is-invalid");
            $('#username-valid').removeAttr('hidden');
            $('#user-invalid').removeAttr('hidden');
        } else {
            $('input[type="text"]').addClass("is-valid");
            $('#user-valid').removeAttr('hidden');
        }

        /* Password validation */
        if (password == null || password == '') {
            $('input[type="password"]').addClass("is-invalid");
            $('#password-empty').removeAttr('hidden');
            $('#pass-invalid').removeAttr('hidden');
        } else if (password !== pass) {
            $('input[type="password"]').addClass("is-invalid");
            $('#password-valid').removeAttr('hidden');
            $('#pass-invalid').removeAttr('hidden');
        } else {
            $('input[type="password"]').addClass("is-valid");
            $('#pass-valid').removeAttr('hidden');
        }

        /* Successful login */
        if (username == user && password == pass) {
            $('input[type="text"]').addClass("is-valid");
            $('input[type="password"]').addClass("is-valid");
            $('#success-login').removeAttr('hidden');
            $('#user-valid').removeAttr('hidden');
            $('#pass-valid').removeAttr('hidden');
        }
    });
});