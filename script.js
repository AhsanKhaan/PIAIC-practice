// Key press vs key down
// $("#input-box").keydown(function(event){
//    var  value=$(this).val();
//    console.log("Key Down"+event.which);
//    $("#output1").html("key down"+value); 
// });


// $("#input-box").keypress(function(event){
//     var  value=$(this).val();
//     $("#output2").html("key press"+value); 
//     console.log("Key press"+event.which);
//  });
//key press event delete k saTh trigger nhi hotaa 
//is lye key down use hota hai
//KEY DOWN ALPHA NUMERIC K ELAWA BHI TRIGGER KARTA HAI
//JAB K KEY PRESS SIRF ALPHA NUMERIC KARTA HAI
//  KEY Press vs key down

/* Resize */
// $(window).resize(function () {
//     alert("window resized");
//     var width = $(this).width();
//     var height = $(this).height();
//     console.log("Width" + width);
//     console.log("Height" + height);
// });

/* scroll */
// $("#wrapper").scroll(function(){
//     console.log($(this).scrollTop());
// });
/* focus*/
// $("#input-box").focus(function(){
    
//     $(this).css('color','red');
// });

/* Promise*/
//jQuery is alias of $
// jQuery.when($.ready).then(function(){});


// /*Document load hony se pehly script run karny k liye*/ 
// /*jitni ziad bar true likhengy utni hi bar false likhengy*/ 
// $.holdReady( true );

// /* script start karny k liye use hoti hai */
// $.getScript("test.js",function(){
//     $.holdReady( false );
// });
// $(function(){
//     console.log("Document is loaded");
// });

//$("#print-date").on('click',function(){
//console.log(Date());
//Event ko detatched karny k liye use hota hai
//$("#print-date").off('click');
//});
//occurs event at once
//$().one();
//event delegation
// var $wrapper=$($wrapper);
// $($wrapper).on('click','.box',function(event){
//     var content=$(this).text();
//     console.log(content);
//     event.stopPropagation();
// })
// $('.box').on('click',{name:"Ahsan Khan"},function(event){
//      var content=$(this).text();
//      console.log(content);
//     event.stopPropagation();
//      cosole.log(event.data.name);
// });

/* trigger*/
//trigger is used to forcefully occur an event
// $('#btn').on('click',function(){
// console.log("You just clicked ME");
// });
// $('#btn').trigger('click');
/*Trigger vs Trigger handler */
/*Trigger handler bas pehly waaly py trigger karta hai action */
/*Trigger sab py click karta hai */   
/*Trigger mein event bubbling hoti hai*/   
/*Trigger handler mein bas jahaan py event call hua
udhar bubbling hogi jesy #btn2 baaqi jagaa nhi hogi */
/*trigger object return karta hai Jab k handler null */
/*trigger use karengy to aap  original submit use karengy  */
/*trigger handler k sath submit use nhi karskty */   
// $('.box').on('click',function(event){
//     var content=$(this).text();
//     console.log(content);
    
// });

// $('#btn1').click(function(){
//     $('.box').trigger('click');
//     console.log("Trigger()");
// });
// $('#btn2').click(function(){
//     $('.box').triggerHandler('click');
//     console.log("TriggerHandler()");
// });
// $('#body').click(function(){
//     console.log("body");
// });
// $('#form').on('submit',function(event){
//     var content=$(this).text();
//     console.log(content);
    
// });

// $('#btn1').click(function(){
//     $('#form').trigger('submit');
//     console.log("Trigger()");
// });
// $('#btn2').click(function(){
//     $('#form').triggerHandler('submit');
//     console.log("TriggerHandler()");
// });
//newfunction that use scope as object and manupulate it
//$.proxy(function,scope)

// /*Changing postion on mousemove */
// $('body').on("mousemove",function( event ){
//     var x=event.pageX;
//     var y=event.pageY;
//     $('.box').css({
//         left:x-20,
//         top:y-20

//     });
// });
// $("#send-btn").on('click',function(){
//     var text=$("#input").val();
//     //$("<p>"+text +"</p>").insertAfter('#send-btn');
//     $("body").append("<p>"+text +"</p>");
// });
/*add or remove class */
// $("#btn1").on('click',function(){
//     $("#mydiv").addClass("green");
// });
// $("#btn2").on('click',function(){
//     $("#mydiv").removeClass("green");
// });
/* inner height and width*/
// inner height and width mein padding bhi add hojaati hain
//jitni width or height browswer ki run time hogi wohi show hogi
// syntax: $().innerHeight();
//inner=height=content+ padding
/*outer width and height*/
//syntax:$().outerHeight();
//outer_height=content+padding+margin
//syntax:$().outerHeight( true ); //by default false
//outer_height=content+padding+margin+border

/*Scrolling */
//().scrollLeft();
//().scrollTop(param);
//param: is a parameter for starting position of scroll by deafult ts zero
$(document).ready(function(){
   $('.box').scroll(function(){
    var scrollleft=$('.box').scrollLeft();
    var scrollTop=$('.box').scrollTop();
    console.log(scrollleft);
    console.log("Scroll Top:"+scrollTop);
    if(scrollleft>50){
        $('.box').css('background','pink');
    }else{
        $('.box').css('background','wheat');
    }
    if(Math.ceil(scrollTop)%10==2){
        $('.box').css('color','red');
        $('.box').css('fontweight','200');
    }else{
        $('.box').css('color','blue');
    }
   });

});
//offset is relative to document object
//wheras position is relative to it's parent
//it gives position of container
// gettter:$(selector).offset();
//setter : $(selector).offset({
//     top:50px,
//     left:50px
// });
// $.cssNumber css kaa object hai jo styling karny py
//px attached kardeta hai auto maticaally agr false assign huaa to
// Ex: $.cssNumber.width= false to assign kardega 50 px agar hum width:50 dengy
//Ex2:  $.cssNumber.opacity=true to px attach nhi hoga is mein