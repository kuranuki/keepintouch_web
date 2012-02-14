$(function(){
  // smooth scroll  
  $('a[href^=#]').click(function(){
    $.smoothScroll($(this));
    $.removeActiveClass();
    $(this).addClass("active");  
    return false;  
  });
  $.smoothScroll = function(anchor){
    var speed = 400;
    var href = anchor.attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - $("#header").height();
    $($.browser.safari? 'body' : 'html').animate({scrollTop:position}, speed, 'swing');
  }
  $.removeActiveClass = function(){
    $("#header li a").removeClass("active");
  };      
});
