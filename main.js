
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

$(window).on('resize scroll', function () {
  $('.df--tech--progress').each(function() {
    if ($(this).isInViewport()) {
      const bar = $(this).find('.progress-circle');
      
      let current = 0;
      const percentage = bar.attr('data-percentage') 

      const increment = () => {
        if (current >= percentage) {
          clearInterval(interval)
          return;
        }

        bar.removeClass(`progress-${current}`);
        current++;
        bar.addClass(`progress-${current}`)
      }

      const interval = setInterval(increment, 10);
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