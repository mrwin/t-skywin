/**
 * Created with JetBrains PhpStorm.
 * User: tilast
 * Date: 12.11.12
 * Time: 20:38
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){
    for(var i = 1; i <= 9; i++)
    {
        $.ajax({
            url: "ajax.php",
            type: 'POST',
            data: "id=" + i,
            dataType: 'json',
            success: function(ms)
            {
                $("#content").append("<div class='item' data-id='" + ms.id + "'><a href='#'><div class='title'><span>" + ms.name + "</span></div><img src='" + ms.img + "' alt=''></a></div>");
            }
        });
    }

    $(".item").live("click", function(){
        var $id = $(this).data("id");
        $.ajax({
            url: "ajax.php",
            type: 'POST',
            data: "id=" + $id,
            dataType: 'json',
            success: function(ms)
            {
                $("#content").html("").append("<img src='" + ms.img + "' alt='' class='img_desc'>" + "<div class='description'>" + "<b>" + ms.name + "</b><br>" + ms.description + "</div>");
            }
        });
    });

    $(".logo").live("click", function(){
        $("#content").html("").css({display:"none"});
        for(var i = 1; i <= 9; i++)
        {
            $.ajax({
                url: "ajax.php",
                type: 'POST',
                data: "id=" + i,
                dataType: 'json',
                success: function(ms)
                {
                    $("#content").append("<div class='item' data-id='" + ms.id + "'><a href='#'><div class='title'><span>" + ms.name + "</span></div><img src='" + ms.img + "' alt=''></a></div>");
                },
            });
        }
        $("#content").fadeIn(500);
    });
    // Desing
    $(".item").live("mouseenter", function(){
        $(this).find(".title").fadeIn(500);
    });
    $(".item").live("mouseout", function(){
        $(this).find(".title").fadeOut(500);
    });
    $(".logo").live("mouseenter", function(){
        $(this).find(".logo_upon").fadeIn(200);
    });
    $(".logo").live("mouseout", function(){
        $(this).find(".logo_upon").fadeOut(200);
    });
    $(".copyright").live("mouseenter", function(){
        $(this).animate({bottom: "2.5px"}, 200);
    });
    $(".copyright").live("mouseout", function(){
        $(this).animate({bottom: "0px"}, 200);
    });
});