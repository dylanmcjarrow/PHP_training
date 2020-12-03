$(function () {
    $("#registerBtn").click(function () {

        window.location.replace("/messageAppSignUp.html");

    })
    let loggedin = 0;
    $("#loginBtn").click(function () {
        if (loggedin == 1) {
            let body = {"method": "logout"}
            $.post('mesageAppAPI.php', body,function () {
                window.location.reload()
            });


        } else {

        let failed_inputs = 0
        let psword_inputs = ["LoginUsername", "LoginPassword"]
        let format = /[()_\[\]{};':"\\|<>]+/;

        psword_inputs.forEach(function (inputID) {


            if ($("#" + inputID).val().length == 0) {
                $("#" + inputID).val("")
                $("#" + inputID).addClass(' border-danger')
                failed_inputs = failed_inputs + 1

            } else if ($("#" + inputID).val().length > 20) {
                $("#" + inputID).val("")

                $("#" + inputID).addClass(' border-danger')
                failed_inputs = failed_inputs + 1


            } else if (format.test($("#" + inputID).val())) {
                let format = /[()_\[\]{};':"\\|<>]+/;

                $("#" + inputID).val("")
                $("#output").empty();

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



            if (failed_inputs == 0) {
                let body = {
                    "method": "login",
                    "username": $("#LoginUsername").val().replace(/\s+/g, ''),
                    "password": $("#LoginPassword").val()
                }
                $.post('mesageAppAPI.php', body, function (response) {
                    if (response == 0) {
                        window.location.replace("/messageAppMainPage.html");
                    } else {
                        $("#LoginUsername").addClass(' border-danger')
                        $("#LoginPassword").val("")
                        $("#LoginPassword").addClass(' border-danger')
                    }

                });
            }

        }
    })

    let body = {
        "method": "getSessionUser"
    }
    $.post('mesageAppAPI.php', body, function (response) {
            if (response.length > 0) {
                loggedin = 1
                $("#loginBtn").html("Logout")
                $("#LoginUsername").prop( "disabled", true );
                $("#LoginPassword").prop( "disabled", true );
            }
        }
    );


    setTimeout(function () {


        $("html, body").animate({
            scrollTop: $(
                'html, body').get(0).scrollHeight
        }, 3500);

    }, 2000)


})

function mainpage() {
    window.location.replace("/messageAppMainPage.html");

}

