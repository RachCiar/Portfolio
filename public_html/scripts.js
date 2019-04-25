/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function(){

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
});

