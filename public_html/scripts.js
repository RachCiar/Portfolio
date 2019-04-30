/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function () {

    $.fn.scrollView = function () {
        alert();
        return this.each(function () {
            $('html, body').animate({
                scrollTop: $(this).offset().top
            }, 1000);
        });
    };


    $('#portfolio').scroll(function (event) {
        event.preventDefault();
        $('.navbar').scrollView();
    });

    "use strict";
    $('.next').click(function () {
        $('.carousel').carousel('next');
        return false;
    });
    $('.prev').click(function () {
        $('.carousel').carousel('prev');
        return false;
    });
    // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 116 || document.documentElement.scrollTop > 116) {
    document.getElementById("navbar").style.padding = "0px 0px";
    document.getElementById("logo").style.height = "53px";
    document.getElementById("logo").style.width = "306px";
  } else {
    document.getElementById("navbar").style.padding = "5px 5px";
    document.getElementById("logo").style.height = "106px";
    document.getElementById("logo").style.width = "609px";}
}


})(jQuery);



