$(function () {

    $("#returnBtnSignup").click(function () {
        window.location.replace("/messageAppLoginPage.html");
    })

    $("#signupBtn").click(function () {
        let form_inputs = ["firstname", "surname", "email", "username", "password","password_confirm"]
        let failed_inputs = 0
        form_inputs.forEach(function (inputID) {

            failed_inputs = failed_inputs + validateInputByID(inputID)

        })

        if($("#password").val() !== $("#password_confirm").val()){
            $("#password_confirm").val("")
            failed_inputs = failed_inputs + validateInputByID("password_confirm")
        }

        if(failed_inputs==0){
            let body = {
                "method": "createPerson",
                "firstname":$("#firstname").val(),
                "surname":$("#surname").val(),
                "email":$("#email").val(),
                "username":$("#firstname").val(),
                "password":$("#password").val()
            }

            $.post('mesageAppAPI.php', body, function (response) {

                    if(response == 0){
                        window.location.replace("/messageAppLoginPage.html")
                    }else{
                        console.log(response)
                        form_inputs.forEach(function (inputID) {

                           // $("#"+inputID).val("")
                           //  validateInputByID(inputID)

                        })
                    }

                }
            );


            }




    })

})

function validateInputByID(inputID) {
   console.log( "validoit")
    let format = /[!#$%^&*()_+=\[\]{};':"\\|,<>?]+/;

    if ($("#" + inputID).val().length == 0) {
        $("#" + inputID).val("")
        $("#output").empty();
        let startHTML = `<div class="d-flex justify-content-center" >
                                <div class="row text-center">`;
        let innerHTML = "Field was left empty";
        let outputHTML = startHTML + innerHTML + "</div></div>";
        $("#output").append(outputHTML);
        $("#" + inputID).addClass(' border-danger')
        return 1
    } else if ($("#" + inputID).val().length > 20) {
        $("#" + inputID).val("")
        $("#output").empty();
        let startHTML = `<div class="d-flex justify-content-center" >
                                <div class="row text-center">`;
        let innerHTML = "Too many characters in the feild please limit it to 20 in total";
        let outputHTML = startHTML + innerHTML + "</div></div>";
        $("#output").append(outputHTML);
        $("#" + inputID).addClass(' border-danger')
        return 1
    } else if (format.test($("#" + inputID).val())) {
        $("#" + inputID).val("")
        $("#output").empty();
        let startHTML = `<div class="d-flex justify-content-center" >
                                <div class="row text-center">`;
        let innerHTML = "Field contained shitty characters";
        let outputHTML = startHTML + innerHTML + "</div></div>";
        $("#output").append(outputHTML);
        $("#" + inputID).addClass(' border-danger')
        return 1

    } else {
        try {
            $("#" + inputID).removeClass(' border-danger')
        } catch (e) {
            console.log(e)
        }
        return 0
    }

}