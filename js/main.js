$(document).ready(function() {
  "use strict";

  var particle = document.getElementById("particles-js");
  if (typeof(particle) != 'undefined' && particle != null)
{
    particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });
}



  var window_width = $(window).width(),
    window_height = window.innerHeight,
    header_height = $(".default-header").height(),
    header_height_static = $(".site-header.static").outerHeight(),
    fitscreen = window_height - header_height;

  $(".fullscreen").css("height", window_height);
  $(".fitscreen").css("height", fitscreen);

  //-------- Active Sticky Js ----------//
  $(".default-header").sticky({ topSpacing: 0 });

  if (document.getElementById("default-select")) {
    $("select").niceSelect();
  }

  $(".img-pop-up").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    }
  });

  // $('.navbar-nav>li>a').on('click', function(){
  //     $('.navbar-collapse').collapse('hide');
  // });

  $(".play-btn").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $(".active-works-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 100,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      768: {
        items: 1
      }
    }
  });

  $(".active-gallery").owlCarousel({
    items: 6,
    loop: true,
    dots: true,
    autoplay: true,
    nav: true,
    navText: [
      "<span class='lnr lnr-arrow-up'></span>",
      "<span class='lnr lnr-arrow-down'></span>"
    ],
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 6
      }
    }
  });

  // Select all links with hashes
  $('.navbar-nav a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .on("click", function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 50
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  $(document).ready(function() {
    $("#mc_embed_signup")
      .find("form")
      .ajaxChimp();
  });
});
