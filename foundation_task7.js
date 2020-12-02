$(function () {

    $("#btnGetAll").click(function () {

        if (validateInputByID("loadName") == 0) {

            let body = {
                "method": "loadPerson",
                "column": "name",
                "value": $("#loadName").val()
            }
            $.post('foundation_task7.php', body, function (response) {
                let persons = JSON.parse(response);
                $("#loadName").val("")
                $("#output").empty();


                try {
                    persons.forEach(addMembers);
                } catch (err) {
                    let startHTML = `<div class="d-flex justify-content-center" >
                                <div class="row text-center">`;
                    let innerHTML = "No person(s) were found.";
                    let outputHTML = startHTML + innerHTML + "</div></div>";
                    $("#output").append(outputHTML);
                }

            });


        }

    })

    $("#btnREMOVE").click(function () {

        if (validateInputByID("deleteName") == 0) {
            let body = {
                "method": "deletePerson",
                "column": "name",
                "value": $("#deleteName").val()
            }
            $.post('foundation_task7.php', body, function (response) {
                $("#deleteName").val("")

                $("#output").empty();

                    let startHTML = `<div class="d-flex justify-content-center" >
                                <div class="row text-center">`;
                    let innerHTML = response;
                    let outputHTML = startHTML + innerHTML + "</div></div>";
                    $("#output").append(outputHTML);
                }
            );
        }
    })

    $("#btnADD").click(function () {

        let form_inputs = ["name", "surname", "birth", "email", "age"]
        let failed_inputs = 0
        form_inputs.forEach(function (inputID) {

            failed_inputs = failed_inputs + validateInputByID(inputID)

        })

        if (failed_inputs == 0) {


            let body = {
                "method": "createPerson",
                "name": $("#name").val(),
                "surname": $("#surname").val(),
                "dateOfBirth": $("#birth").val(),
                "email": $("#email").val(),
                "age": $("#age").val()

            }
            form_inputs.forEach(function (inputID) {

                $("#" + inputID).val("")

            })

            $.post('foundation_task7.php', body, function (response) {
                    $("#output").empty();

                    let startHTML = `<div class="d-flex justify-content-center" >
                                <div class="row text-center">`;
                    let innerHTML = response;
                    let outputHTML = startHTML + innerHTML + "</div></div>";
                    $("#output").append(outputHTML);
                }
            );
        }
    })

    $("#btnUpdate").click(function () {

        let form_inputs = ["updateName", "updateColumn", "updateValue"]
        let failed_inputs = 0
        form_inputs.forEach(function (inputID) {

            failed_inputs = failed_inputs + validateInputByID(inputID)

        })

        if (failed_inputs == 0) {


            let body = {
                "method": "updatePerson",
                "column2": "name",
                "value2": $("#updateName").val(),
                "column1": $("#updateColumn").val(),
                "value1": $("#updateValue").val()

            }
            form_inputs.forEach(function (inputID) {

                $("#" + inputID).val("")

            })

            $.post('foundation_task7.php', body, function (response) {
                    $("#output").empty();

                    let startHTML = `<div class="d-flex justify-content-center" >
                                <div class="row text-center">`;
                    let innerHTML = response;
                    let outputHTML = startHTML + innerHTML + "</div></div>";
                    $("#output").append(outputHTML);
                }
            );
        }
    })

})

function addMembers(item, index) {
    let startHTML = `<div class="d-flex justify-content-center" >
                                <div class="row text-center">`;
    let innerHTML = `${item.name} was born ${item.dateOfBirth}. Has The email adress ${item.email} and is ${item.age} years old.`  ;
    let outputHTML = startHTML + innerHTML + "</div>";
    $("#output").append(outputHTML);
}

function validateInputByID(inputID) {
    let format = /[!#$%^&*()_+=\[\]{};':"\\|,<>?]+/;

    if ($("#" + inputID).val().length == 0) {
        $("#output").empty();
        let startHTML = `<div class="d-flex justify-content-center" >
                                <div class="row text-center">`;
        let innerHTML = "Field was left empty";
        let outputHTML = startHTML + innerHTML + "</div></div>";
        $("#output").append(outputHTML);
        $("#" + inputID).addClass(' border-danger')
        return 1
    } else if ($("#" + inputID).val().length > 20) {
        $("#output").empty();
        let startHTML = `<div class="d-flex justify-content-center" >
                                <div class="row text-center">`;
        let innerHTML = "Too many characters in the feild please limit it to 20 in total";
        let outputHTML = startHTML + innerHTML + "</div></div>";
        $("#output").append(outputHTML);
        $("#" + inputID).addClass(' border-danger')
        return 1
    } else if (format.test($("#" + inputID).val())) {
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