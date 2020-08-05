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
$("#input-box").focus(function(){
    
    $(this).css('color','red');
});