// navbar
$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
            $('#navbutton').addClass('text-dark');
        } else {
            $('.navbar').removeClass('active');
            $('#navbutton').removeClass('text-dark');
        }
    });
});

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


$(function() {
  AOS.init({
    duration: 1200,
  });
});