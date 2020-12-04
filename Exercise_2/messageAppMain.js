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
        "numberOfPosts": "10"
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
            posts.forEach(function (row) {
                console.log(row)
                let postText = row["postText"]
                let username = row["username"]
                let fname = row["fisrtname"]
                let sname = row["lastname"]
                let postTimeStmp = row["postTimeStmp"]
                let userPIC = (fname.charAt(0) + sname.charAt(0)).toUpperCase()
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
                let tempHTML_R = `
                
                <tr>
                <td rowspan="3">
                        
                           <div style="max-width:40rem;
                                        word-wrap:break-word;">
                                ${postText}
                            </div> 
                        
                    </td>
                    
                    <td  valign="top" style="border-bottom:0px  #FFF">
                        <p style="font-family: 'Roboto Mono', monospace;">@${username}</p> 
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
                
                    
                     <td  valign="bottom" >
                        
                         
                            ${postTimeStmp}
                     

                    </td>
                    
                </tr>
                `


                innerHTML = innerHTML + tempHTML_R
            });

            let outputHTML = startHTML_R + innerHTML + "";

            $("#postsTableMainPage").html(outputHTML)
        }
    );

    $("#homeBtn").click(function () {
        window.location.replace("/messageAppMainPage.html")
    })

    $("#mainPagePostBtn").click(function (){
        let body = {
            "method": "makePost",
            "postText": ($("#postTextInput").val()).replace(/[#$%^&*<>']/, "")
        }
        $.post('mesageAppAPI.php', body, function (response) {


            if(response == 0){
                window.location.reload()
            }else{
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


