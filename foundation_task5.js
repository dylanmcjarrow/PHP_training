function postRequest() {

    const endNumberElement = document.getElementById("endNumber")

    var request = new XMLHttpRequest();
    request.open("GET", "foundation_task5.php?q=" + endNumberElement.value, true);


    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.onload = function () {

        let data = request.response;
        const outputDiv = document.getElementById("output")
        outputDiv.innerHTML = data

    }
    request.send();

}