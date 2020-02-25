// $(document).ready(function() {
//     $("#cl1").click(function() {
//         $("#design").toogle();
//         $("#de-showing").toogle();
//     });
//     $("#cl2").click(function() {
//         $("#development").toggle();
//         $("#d-showing").toggle();
//     });
//     $("#cl3").click(function() {
//         $("#product").toogle();
//         $("#p-showing").toogle();
//     });
// });
$(document).ready(function() {
    $("#cl1").click(function() {
        $("#design").toggle();
        $("#de-showing").toggle();
    });
});
$(document).ready(function(){   
    $("#cl2").click(function() {
        $("#development").toggle();
        $("#d-showing").toggle();
    });
});
$(document).ready(function(){
    $("#cl3").click(function() {
        $("#product").toggle();
        $("#p-showing").toggle();
    });
    $(".image1").hover(function(){
        $("#t1").toggle()
    })
    $(".image2").hover(function(){
        $("#t2").toggle()
    })
    $(".image3").hover(function(){
        $("#t3").toggle()
    })
    $(".image4").hover(function(){
        $("#t4").toggle()
    })
    $(".image5").hover(function(){
        $("#t5").toggle()
    })
    $(".image6").hover(function(){
        $("#t6").toggle()
    })
    $(".image7").hover(function(){
        $("#t7").toggle()
    })
    $(".image8").hover(function(){
        $("#t8").toggle()
    })


});
