let body = {
    "method": "getSessionUser"
}
$.post('mesageAppAPI.php', body, function (response) {
        if (response.length == 0) {
            alert("You are not logged in are are gonna be redirected.")

            window.location.replace("/messageAppLoginPage.html")
        } else {
            console.log(response)
        }
    }
);

function mainpage() {
    let body = {
        "method": "getSessionUser"
    }
    $.post('mesageAppAPI.php', body, function (response) {
            if (response.length == 0) {
                window.location.replace("/messageAppLoginPage.html")
            } else {
                window.location.replace("/messageAppMainPage.html");
            }
        }
    );


}


$(function () {

    let body = {
        "method": "getPosts",
        "numberOfPosts": "50"
    }
    $.post('mesageAppAPI.php', body, function (response) {

            let posts = JSON.parse(response);


            let startHTML_F = `<tr >
                                <th style="text-align: center">User</th>
                                <th style="width: 75%;text-align: center">Post</th>
                             </tr>`
            let startHTML_R = `<tr >
                                <th style="width: 60%;text-align: center">Post</th>
                                <th style="text-align: center">User</th>
                               </tr>`

            let innerHTML = "";
            let flip = 0;

            let body = {
                "method": "getSessionUser"
            }
            $.post('mesageAppAPI.php', body, function (response) {
                    let currentUser = ""
                    currentUser = response

                    posts.forEach(function (row) {
                        // console.log(row)


                        let username = row["username"]
                        let deleteDisplay = "none"

                        if (currentUser === username) {
                            deleteDisplay = "inline"
                        }

                        let postText = row["postText"]
                        let fname = row["fisrtname"]
                        let sname = row["lastname"]
                        let postID = row["postOrder"]
                        let postTimeStmp = row["postTimeStmp"]
                        let userPIC = (fname.charAt(0) + sname.charAt(0)).toUpperCase()
                        let pageLayout = ""
                        if ($(window).height() >= $(window).width()) {
                            pageLayout = "vw"
                        } else {
                            pageLayout = "vh"
                        }


                        let tempHTML_F = `
                
                <tr>
                    <td  valign="top" style="border-bottom:0px  #FFF">
                        <p style="font-family: 'Roboto Mono', monospace;">@${username}</p> 
                        
                       
                        
                    </td>
                    
                    
                    <td rowspan="3">
                        <div class="container">
                            ${postText}
                        </div> 
                    </td>
                    
                   

                </tr>
                <tr>
                   
                     <td valign="center" valign="top" style="border-bottom:0px  #FFF">
                         <div class="make_text_center_container">

                            <img  src="userImage.png" style="width:75%;height:75%">
                            <div class="make_text_center">
                                <h1 class=" display-4 " style="font-family: 'Major Mono Display', monospace;"> ${userPIC} </h1>
                            </div>
                        </div>
                    </td>
                   
                </tr>
                <tr>
                
                    
                     <td  valign="bottom">
                        
                         ${postTimeStmp}
                    </td>
                    
                </tr>
                `
                        let heptNum = Math.floor(Math.random() * 36) + ".jpg"
                        let tempHTML_R = `
                
                <tr>
                <td rowspan="3">
                        
                           <div style="max-width:40vw;
                                        word-wrap:break-word;">
                                ${postText}
                            </div> 
                        
                    </td>
                    
                    <td  valign="top" style="border-bottom:0px  #FFF">
                        <a  href="messageAppProfilePage.php?user=${username}" style="cursor: pointer;font-family: 'Roboto Mono', monospace;font-size: 100%;color: black">@${username}</a> 
                    </td>
                </tr>
                <tr>
                     <td valign="center" valign="top" style="border-bottom:0px  #000">
                         <div class="make_text_center_container">
                            <img  src="heptopodLan/` + heptNum + `" style="width:25${pageLayout};">
                            <div class="make_text_center">
                                <h1 class=" display-4 " style="font-family: 'Major Mono Display', monospace;color: black;font-size: 8${pageLayout}"> ${userPIC} </h1>
                            </div>
                        </div>
                    </td>
                   
                </tr>
                <tr>
                
                    
                     <td  valign="bottom" >
                        
                         
                           <div style="float: left">${postTimeStmp}</div> 
                           <div style="float: right; display: ${deleteDisplay};"><a onclick="deletePost('${postID}')" style="cursor: pointer">&times;</a></div> 

                    </td>
                    
                </tr>
                `


                        innerHTML = innerHTML + tempHTML_R
                    });

                    let outputHTML = startHTML_R + innerHTML + "";

                    $("#postsTableMainPage").html(outputHTML)

                }
            );

        }
    );

    $("#navbar").hover(function () {
            $(".navBtn").css("color", "#000")
        },
        function () {
            $(".navBtn").css("color", "#FFF")
        })

    $("#homeBtn").click(function () {
        window.location.replace("/messageAppMainPage.html")
    })

    $("#profileBtn").click(function () {

        $("#shizwanidropdown").show(100)

    })
    $("#postTextInput").keyup("input", function () {
        $("#postTextInput").css("height", ""); //reset the height
        $("#postTextInput").css("height", Math.min($("#postTextInput").prop('scrollHeight'), 200) + "px");

        let postText = $("#postTextInput").val()


        if (postText.length > 0) {
            if ((280 - postText.length) <= 0) {
                $("#charactersLeft").html("0/280")
            } else {
                $("#charactersLeft").html(280 - postText.length+"/280")
            }

        } else {
            $("#charactersLeft").html("")
        }

        if (postText.length > 280) {

            $("#postTextInput").val(postText.slice(0, 280))

        }

    });
    $("#mainPagePostBtn").click(function () {

        let inputText = $("#postTextInput").val()

        let charsToRemove = ["<", ">", "#", "$", "@", "%", "^", "{", "}", "\"", "`", ":", "=", "'", "–", "[", "]", "'"]
        charsToRemove.forEach(function (character) {
            inputText = inputText.replaceAll(character, "")
        })


        if (inputText.length > 280) {

            inputText = inputText.slice(0, 280)

        }

        inputText = inputText.replaceAll("\n", "<br>")


        let body = {
            "method": "makePost",
            "postText": inputText
        }
        $.post('mesageAppAPI.php', body, function (response) {


            if (response == 0) {
                $("#postTextInput").val("")
                window.location.reload()
            } else {
                console.log(response)
            }

        })
    })

    $("#jumboimage").attr("src", Math.floor(Math.random() * (4) + 1) + ".jpg")

    let offset = $("#navbar").offset()
    console.log(offset)
    window.onscroll = function () {

        if (window.pageYOffset >= offset["top"]) {
            $("#navbar").addClass("sticky")
            $("#pinputOnmainpage").css("margin-top", "7em")
        } else {
            $("#navbar").removeClass("sticky");
            $("#pinputOnmainpage").css("margin-top", "3em")

        }

    };
})


window.onclick = function (e) {
    if (!$(e.target).is('#profileBtn')) {
        $("#shizwanidropdown").hide(100)
    }

}

function logout() {
    let body = {"method": "logout"}
    $.post('mesageAppAPI.php', body, function () {
        window.location = "/messageAppLoginPage.html"
    });
}

function deletePost(postID) {
    let body = {
        "method": "deletePost",
        "postID": postID
    }
    $.post('mesageAppAPI.php', body, function (response) {
        if (response == 0) {
            window.location.reload()
        } else {
            console.log(response)
        }
    });
}