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
});
