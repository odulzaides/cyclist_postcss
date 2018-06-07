$(document).ready(function () {
  //your code here

  console.log($);
  $(window).scroll(function () {
    console.log("Events loaded");
    console.log("Scrolled");
    if ($(this).scrollTop() > 100) {
      console.log(this.scrollTop);
      $('.nav-pages').addClass('nav-pages-sticky').fadeIn();
      $('#about').css('padding-top', '6em');
      $('#rules').css('padding-top', '2.5em');
      $('#weather').css('padding-top', '5em');
      $('#rides').css('padding-top', '5em');
      $('#misc').css('padding-top', '8em');
    }
    else {
      $('.nav-pages').removeClass('nav-pages-sticky');
    }
  });
});
// TODO: Fix nav sticky style
// TODO: Fix section top padding