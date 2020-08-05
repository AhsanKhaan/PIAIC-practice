<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JQUERY</title>
    <style>
        .box{border:solid;margin:5px}
        /* .one{background-color: wheat;}
        .two{background-color: green;}
        .three{background-color: pink;}
        .four{background-color:lightblue;} */
    </style>
</head>
<body>
    
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


<div id="wrapper">
<?php for($i=1;$i<100;$i++):?>
    <div class="box">POst<?=$i;?></div>
<?php endfor;?>

</div>

<script src="jquery-3.5.1.min.js"></script>
    <script src="script.js"></script>
</body>
</html>