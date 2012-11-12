/**
 * Created with JetBrains PhpStorm.
 * User: tilast
 * Date: 12.11.12
 * Time: 20:38
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){
    $(".item").hover(function(){
        $(this).find(".title").fadeIn(500);
    },function(){
        $(this).find(".title").fadeOut(500);
    });
    $(".logo").hover(function(){
        $(this).find(".logo_upon").fadeIn(200);
    },function(){
        $(this).find(".logo_upon").fadeOut(200);
    });
    $(".copyright").hover(function(){
        $(this).animate({bottom: "2.5px"}, 200);
    },function(){
        $(this).animate({bottom: "0px"}, 200);
    });
});