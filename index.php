<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JQUERY</title>
    <style>
        /* .box{
            width:50px;
            height:50px;
            background-color:red;
            position:absolute;
        }
        body{height:100vh;} */
        /* .one{background-color: wheat;}
        .two{background-color: green;}
        .three{background-color: pink;}
        .four{background-color:lightblue;} */
        /* .green{
            color:green;
            border:solid green 3px;
            font-size:3em
        } */
        .box{
            height:200px;
            width:200px;
            background-color:lightblue;
        }
    </style>
</head>
<body id="body">
    
<!-- keydown() vs key press()-->
<!-- <input type="text" name="" id="input-box"><br/>
<span id="output1"></span><br/>
<span id="output2"></span><br/>
     -->

 <!-- scroll event    -->
<!-- <div id="wrapper">
    <div class="box one"></div>
    <div class="box two"></div>
    <div class="box three"></div>
    <div class="box four"></div>
</div> -->

<!-- <input type="text" name="" id="input-box">
<input type="button" id="print-date" value="Print Date"> -->


<!-- <div id="wrapper">
<?php //for($i=1;$i<100;$i++):?>
    <div class="box">POst
        <?=$var;//$i;?></div> 
<?php //endfor;?>

</div> -->
<!-- <input type="button" id="btn" value="click me"><br/> -->
<!-- Trigger vs trigger handler -->
<!-- <button id="btn1">.trigger()</button> -->
<!-- <button id="btn2">.triggerHandler()</button> -->
<?php $a;//if(isset($_POST["fullname"])):?>
<pre>
   <?php $a; //print_r($_POST);?>
</pre>
<?php $a; //endif;?>
<?php $p;// for($i=1;$i<3;$i++):?>
<!-- <div class="box">BOX<?= $p;//$i?></div> -->
<?php $p;// endfor ?>
<!-- <form action="" method="post" id="form">
<input type="text" name="fullname" id="name">
<input type="submit" value="submit">
</form> -->


<!-- changing box position on cursor movement -->
<!-- <div class="box"></div> -->
<!-- <input type="text"  id="input">
<button id="send-btn">Send</button> -->

<!-- <button id="btn1">.addClass()</button>
<button id="btn2">.removeclass()</button>
<div id="mydiv" class="old-class">This is my div</div> -->


<!-- height get and set -->
<div class="box">This is my Box</div>
<script src="jquery-3.5.1.min.js"></script>
    <script src="script.js"></script>
</body>
</html>