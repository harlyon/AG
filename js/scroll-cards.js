// Listen for mouse scroll over scroll cards
var screenWidth = window.matchMedia("(min-width: 992px)");
myFunction(screenWidth); // Call listener function at run time
screenWidth.addListener(myFunction); // Attach listener function on state changes
function myFunction(screenWidth) {
  if (screenWidth.matches) {
    // If media query matches
    const slider = document.querySelector(".scroll-cards");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", e => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1;
      slider.scrollLeft = scrollLeft - walk;
    });
  } else {
  }
}

/* Fade In Scroll Cards */
$(".scroll-cards .card").each(function(i, el) {
  var $this = $(this);
  setTimeout(function() {
    $this.addClass("animated fadeInLeftS");
  }, i * 200); // milliseconds
});
