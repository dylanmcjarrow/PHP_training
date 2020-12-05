<!DOCTYPE html>
<html lang="en">
<head>


    <link rel="stylesheet" href="pageStyles.css">
    <style>
        body {
            font-family: 'Lora', serif;
        }

        h2, h3, h4, h5, h6 {
            font-family: 'Montserrat', sans-serif;
            font-weight: 300;
            text-transform: uppercase;
        }

        @media screen and (max-width: 600px) {
            .mediQ {
                width: 100%
            }
        }

        .scroll::-webkit-scrollbar {
            display: none;
        }

        .logoutBtnMainPage:hover {
            background-color: red;
            color: #ECECEE;
        }

        .profileTitle {
            color: black;
            font-family: 'Roboto Mono', monospace;
            text-align: center;
            vertical-align: center;
            font-size: 2vw;
            padding-left: 0.5rem;
        }
    </style>


    <meta charset="UTF-8">
    <title>MSG</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>


<div id="navbar" class="text-center">

    <div class="d-flex justify-content-center">
        <a id="homeBtn" class="navBtn" onclick="" style="cursor: pointer; font-size: 2em;padding: 1em">Home</a>




        <div class="d-flex">
            <a id="profileBtn" class="navBtn " onclick=""
               style="cursor: pointer; font-size: 2em;padding: 1em">Profile</a>
            <div class="col" id="shizwanidropdown" style="display: none;">

                <div class="row">
                    <a  href="messageAppProfilePage.php?user=personalprofileload" style="font-family: 'Montserrat', sans-serif">Go to profile</a>
                </div>
                <div class="row logoutBtnMainPage">
                    <a class="logoutBtnMainPage" href="" onclick="logout()" style="font-family: 'Montserrat', sans-serif">Logout</a>

                </div>


            </div>
        </div>


    </div>

</div>




<div class="container-fluid " style="padding: 15px">
    <div class="row ">
        <div class="col-sm text-center"></div>
        <div class="col text-center">

            <div class="container" style="border: 5px solid black;height: 14vw;width: 33vw;vertical-align: center">


                <ul style="     list-style-type: none; /* Remove bullets */
                                padding: 0; /* Remove padding */
                                margin: 0;
                                text-align: left;

                                ">
                    <li class="profileTitle">

                        <?php
                        session_start();
                        $requestuser = $_GET["user"];
                        if ($requestuser == "personalprofileload") {
                            $requestuser = $_SESSION["username"];
                        }
                        ?>

                        <div class="usernameProfilepage" id="<?php echo $requestuser; ?>"
                             style="padding: 0;text-align: left">


                            <?php
                            echo "@".$requestuser;
                            ?>


                        </div>
                    </li>

                    <li class="profileTitle">

                        <div style="padding: 0;text-align: left">
                            <?php

                            echo "Firstname";

                            ?>
                        </div>
                    </li>
                    <li class="profileTitle">

                        <div style="padding: 0;text-align: left">
                            <?php

                            echo "Last name";

                            ?>
                        </div>
                    </li>


                    <li class="profileTitle">


                        <div style="float: left;padding: 0;display: inline-block">
                            <?php

                            echo "name@gmail.com";

                            ?>
                        </div>
                        <div style="float: right">
                            <a href="" style="color: black;">&#9874;</a>
                        </div>
                    </li>

                </ul>

            </div>

        </div>
        <div class="col-sm text-center"></div>
    </div>
</div>


</body>
<script type="text/javascript" src="messageAppProfile.js"></script>
</html>