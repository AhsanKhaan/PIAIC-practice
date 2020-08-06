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
$('#body').click(function(){
    console.log("body");
});
$('#form').on('submit',function(event){
    var content=$(this).text();
    console.log(content);
    
});

$('#btn1').click(function(){
    $('#form').trigger('submit');
    console.log("Trigger()");
});
$('#btn2').click(function(){
    $('#form').triggerHandler('submit');
    console.log("TriggerHandler()");
});