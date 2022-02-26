window.onload = function (){
    // for email
    var emailElt = document.getElementById("email");
    var emailSpan = document.getElementById("emailError");
    emailElt.onblur = function (){
        var email = emailElt.value;
        var emailRegExp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (emailRegExp.test(email)){

        }
        else {
            emailSpan.innerText = "email invalid";
        }
    }

    emailElt.onfocus = function (){
        if(emailSpan.innerText != ""){
            emailElt.value = "";
        }
        emailSpan.innerText = "";
    }

    // for username
    var usernameElt = document.getElementById("username");
    var usernameSpan = document.getElementById("usernameError");
    usernameElt.onblur = function (){
        var username = usernameElt.value;
        var usernameRegExp = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/ ;
        if (usernameRegExp.test(username)){

        }
        else {
            usernameSpan.innerText = "Username should start with a letter, allow 5-16 bytes, allow letters, numbers, underscores";
        }
    }

    usernameElt.onfocus = function (){
        if(usernameSpan.innerText != ""){
            usernameElt.value = "";
        }
        usernameSpan.innerText = "";
    }
    // for pwd
    var pwdElt = document.getElementById("userpwd");
    var pwdSpan = document.getElementById("pwdError");
    pwdElt.onblur = function (){
        var pwd = pwdElt.value;
        var pwdRegExp = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/ ;
        if (pwdRegExp.test(pwd)){

        }
        else {
            pwdSpan.innerText = "Your password should be.\n" +
                "- At least 1 upper case letter of the alphabet\n" +
                "- At least 1 lowercase letter of the alphabet\n" +
                "- At least 1 digit\n" +
                "- At least 1 special character\n" +
                "- At least 8 lengths";
        }
    }

    pwdElt.onfocus = function (){
        if(pwdSpan.innerText != ""){
            pwdElt.value = "";
        }
        pwdSpan.innerText = "";
    }

    // for confpwd
    var pwdErrorSpan = document.getElementById("pwdConfError");
    var userpwd2Elt = document.getElementById("userpwd_conf");
    userpwd2Elt.onblur = function (){
        var userpwdElt = document.getElementById("userpwd");
        var userpwd = userpwdElt.value;
        var userpwd2 = userpwd2Elt.value;
        if (userpwd2 != userpwd){
            pwdErrorSpan.innerText = "password dosen't match";
        }
        else{

        }
    }
    userpwd2Elt.onfocus = function (){
        if(pwdErrorSpan.innerText != ""){
            userpwd2Elt.value = "";
        }
        pwdErrorSpan.innerText = "";
    }




}
