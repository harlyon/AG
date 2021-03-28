/* 1. GLOBAL SCRIPTS */
// 1.1 Remove fader on page load
$(window).ready(function() {
  $("#thefader").removeClass("slideInLeft");
  $("#thefader").addClass("slideOutRight");
});

// 1.2 Add fader on page unload
document.addEventListener("DOMContentLoaded", function() {
  if (!window.AnimationEvent) {
    return;
  }

  var anchors = document.getElementsByTagName("a");

  for (var idx = 0; idx < anchors.length; idx += 1) {
    if (anchors[idx].hostname !== window.location.hostname || anchors[idx].pathname === window.location.pathname) {
      continue;
    }

    anchors[idx].addEventListener("click", function(event) {
      var fader = document.getElementById("thefader"),
        anchor = event.currentTarget;

      var listener = function() {
        window.location = anchor.href;
        fader.removeEventListener("animationend", listener);
      };
      fader.addEventListener("animationend", listener);

      event.preventDefault();
      fader.classList.add("slideInLeft");
      fader.classList.remove("slideOutRight");
    });
  }
});

// 1.3 Remove fader if page cached with the fader on
window.addEventListener("pageshow", function(event) {
  if (!event.persisted) {
    return;
  }
  var fader = document.getElementById("thefader");
  fader.classList.remove("slideInLeft");
  fader.classList.add("slideOutRight");
});

/* 2. MOBILE ONLY SCRIPTS */
var mq = window.matchMedia("@media screen and (max-width: 991px)");
{
  // 2.1 Slide out mobile nav when a link is clicked
  $(".nav-link").click(function() {
    setTimeout(function() {
      $("#navbar-collapse").removeClass("show");
    }, 200);
  });

  // 2.2 Fade in nav links on mobile menu toggle
  $(".navbar-toggler.collapsed").click(function() {
    $(".navbar-toggler.collapsed").addClass("expanded");
    $("li.nav-item").addClass("slideInRightS");
  });
}
