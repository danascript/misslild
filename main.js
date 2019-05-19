
$('.carousel').carousel({
  interval: 2500
});

$(".portfolio-item").hover(function () {
    $(this).toggleClass("hoverIt");
 });

//Animate the progress bars on scroll

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
  $('.progress').each(function() {
    if ($(this).isInViewport()) {
      var bar = $(this).find('.progress-bar');
      bar.addClass('progress-animate');
      bar.css('width', bar.attr('aria-valuenow') + '%');
    }
  });
});

//Smooth scroll from nav

var $root = $('html, body');

$('a[href^="#"]').click(function() {
    var href = $.attr(this, 'href');

    $root.animate({
        scrollTop: $(href).offset().top
    }, 1000, function () {
        window.location.hash = href;
    });

    return false;
});

// Navbar transparency:

window.addEventListener('scroll', function () {
  document.body.classList[
    window.scrollY > window.innerHeight / 2 ? 'add': 'remove'
  ]('scrolled');
});