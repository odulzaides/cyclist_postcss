$(document).ready(function () {
  //your code here

  console.log($);
  $(window).scroll(function () {
    console.log("Events loaded");
    console.log("Scrolled");
    if ($(this).scrollTop() > 100) {
      console.log(this.scrollTop);
      $('nav').addClass('nav-sticky');
    }
    else {
      $('nav').removeClass('nav-sticky');
    }
  });
});
// TODO: Fix nav sticky