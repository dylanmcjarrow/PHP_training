let body = {
    "method": "getSessionUser"
}
$.post('mesageAppAPI.php', body, function (response) {
        if (response.length == 0) {
            window.location.replace("/messageAppLoginPage.html")
        } else {
            console.log(response)
        }
    }
);

function mainpage() {
    window.location.replace("/messageAppMainPage.html");

}