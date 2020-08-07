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
        /* .box{
            width:200px;
            height:100px;
            overflow:auto;
            background-color:wheat;

        }
        .box>p{
            width:150%;
        } */
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
<!-- Add or remove class -->
<!-- <button id="btn1">.addClass()</button>
<button id="btn2">.removeclass()</button>
<div id="mydiv" class="old-class">This is my div</div> -->



<!-- <div class="box">
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu ullamcorper risus. Proin congue pulvinar ante eget maximus. Morbi ullamcorper dictum nulla varius finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris scelerisque tortor ut eros venenatis hendrerit. Vestibulum tortor metus, vestibulum nec tortor non, luctus convallis enim. Aenean fermentum ante tortor, eu finibus orci malesuada sed.

Phasellus aliquet purus sit amet velit rutrum, in consequat sem consequat. Nullam et scelerisque ex. Duis auctor justo risus, id lobortis metus elementum sed. Nulla facilisi. Donec vel eleifend enim. Donec venenatis fringilla est, eu consectetur felis iaculis ut. In placerat risus feugiat rhoncus rhoncus. Maecenas sit amet imperdiet leo. Proin vitae egestas diam, in posuere metus. Donec quis pellentesque dolor. Suspendisse ut lacus ex. Vestibulum quam elit, varius accumsan erat in, tristique lobortis lectus. Duis nec pulvinar lorem, non mattis justo. Phasellus fringilla sit amet elit eu bibendum. Phasellus condimentum metus sem, ac suscipit turpis vehicula eget. Donec maximus lorem neque, ac finibus velit suscipit eget.

Cras sed dolor eget arcu consectetur congue. Nam nisl nibh, fringilla in leo non, aliquam sodales nibh. Donec sit amet ante at sem ultricies rutrum ut id leo. Pellentesque vulputate sem in nisi blandit commodo. Donec vestibulum turpis a pretium efficitur. Phasellus semper magna nec quam gravida lacinia. Integer id rhoncus nibh. Curabitur dignissim finibus sapien. Aliquam erat volutpat.

Sed malesuada placerat turpis, porttitor mollis orci tincidunt volutpat. Morbi id sagittis lectus. Etiam volutpat mauris sed nulla auctor vestibulum. Morbi ac massa dignissim, tempor eros a, interdum nulla. Aliquam porttitor facilisis ligula, eget auctor nulla cursus eu. Nam efficitur, velit ut imperdiet egestas, arcu libero malesuada ipsum, non vestibulum lectus velit non turpis. Morbi a elit eu augue laoreet bibendum. Praesent eleifend porta magna.

Praesent vestibulum pellentesque mollis. Cras ac egestas nisi. Phasellus viverra iaculis massa varius iaculis. Suspendisse eu lorem at nulla porta viverra vitae eu justo. Curabitur tristique dolor eu dui fringilla, ut sagittis tortor venenatis. Ut pulvinar tortor quis dolor pulvinar, quis dignissim lectus auctor. Suspendisse hendrerit quam sit amet nisi ornare, non lobortis nunc pretium. Vestibulum egestas, ex fermentum feugiat gravida, nibh eros malesuada dui, quis consectetur orci mi quis quam. Aliquam gravida placerat cursus. Curabitur tempor ligula sed sem bibendum, sed venenatis mauris volutpat. Aliquam porttitor, tellus non interdum facilisis, ex sem convallis dolor, ullamcorper sodales lectus leo vitae neque. Nullam eu libero quis augue luctus dictum. Suspendisse lectus leo, accumsan at efficitur quis, iaculis vitae massa. Aenean sagittis sem ac turpis consectetur pellentesque quis nec risus.
</p>
</div> -->

<div id="wrapper">
<div class="box"></div>
<div class="box-one">Box one</div>
</div>
<script src="jquery-3.5.1.min.js"></script>
    <script src="script.js"></script>
</body>
</html>