let body = {
    "method": "getSessionUser"
}
$.post('mesageAppAPI.php', body, function (response) {
        if (response.length > 0) {
            window.location.replace("/messageAppLoginPage.html")
        } else {
            console.log(response)
        }
    }
);


$(function () {

    $("#jumboimage").attr("src",Math.floor(Math.random() * (4 ) + 1)+".jpg")

    $("#returnBtnSignup").click(function () {
        window.location.replace("/messageAppLoginPage.html");
    })

    $("#signupBtn").click(function () {

        let form_inputs = ["firstname", "surname", "email", "username"]
        let failed_inputs = 0
        form_inputs.forEach(function (inputID) {

            failed_inputs = failed_inputs + validateInputByID(inputID)

        })

        let psword_inputs = ["password", "password_confirm"]


        psword_inputs.forEach(function (inputID) {


            let format = /[()_\[\]{};':"\\|<>]+/;

            if ($("#" + inputID).val().length == 0) {
                $("#" + inputID).val("")
                $("#output").empty();
                let startHTML = `<div class="d-flex justify-content-center" >
                                <div class="row text-center">`;
                let innerHTML = "Field was left empty";
                let outputHTML = startHTML + innerHTML + "</div></div>";
                $("#output").append(outputHTML);
                $("#" + inputID).addClass(' border-danger')
                failed_inputs = failed_inputs + 1

            } else if ($("#" + inputID).val().length > 20) {
                $("#" + inputID).val("")
                $("#output").empty();
                let startHTML = `<div class="d-flex justify-content-center" >
                                <div class="row text-center">`;
                let innerHTML = "Too many characters in the feild please limit it to 20 in total";
                let outputHTML = startHTML + innerHTML + "</div></div>";
                $("#output").append(outputHTML);
                $("#" + inputID).addClass(' border-danger')
                failed_inputs = failed_inputs + 1


            } else if (format.test($("#" + inputID).val())) {


                $("#" + inputID).val("")
                $("#output").empty();
                let startHTML = `<div class="d-flex justify-content-center" >
                                <div class="row text-center">`;
                let innerHTML = "Field contained shitty characters";
                let outputHTML = startHTML + innerHTML + "</div></div>";
                $("#output").append(outputHTML);
                $("#" + inputID).addClass(' border-danger')
                failed_inputs = failed_inputs + 1
            } else {
                try {
                    $("#" + inputID).removeClass(' border-danger')
                } catch (e) {
                    console.log(e)
                }

            }







        })

        if ($("#password").val() !== $("#password_confirm").val()) {
            $("#password_confirm").val("")
            failed_inputs = failed_inputs + validateInputByID("password_confirm")
        }


        let body = {
            "method": "getUsernames"
        }
        $.post('mesageAppAPI.php', body, function (response) {
            let persons = JSON.parse(response);
            persons.forEach(function (row) {
                if (row["username"] === $("#username").val()) {
                    $("#username").val("")
                    failed_inputs = failed_inputs + validateInputByID("username")
                }
            });


            if (failed_inputs == 0) {
                let body = {
                    "method": "createPerson",
                    "firstname": $("#firstname").val(),
                    "surname": $("#surname").val(),
                    "email": $("#email").val().replace(/\s+/g, ''),
                    "username": $("#username").val().replace(/\s+/g, ''),
                    "password": $("#password").val()
                }

                $.post('mesageAppAPI.php', body, function (response) {

                        if (response == 0) {
                            window.location.replace("/messageAppLoginPage.html")
                        } else {
                            console.log(response)
                            form_inputs.forEach(function (inputID) {

                                // $("#"+inputID).val("")
                                //  validateInputByID(inputID)

                            })
                        }

                    }
                );


            }


        });


    })

})

function validateInputByID(inputID) {
    console.log("validoit")
    let format = /[()_+\-=\[\]{};':"\\|<>\/]/;

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
    } else if ($("#" + inputID).val().length > 40) {
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

function mainpage() {
    let body = {
        "method": "getSessionUser"
    }
    $.post('mesageAppAPI.php', body, function (response) {
            if (response.length != 0) {
                window.location.replace("/messageAppMainPage.html");            }
        }
    );



}