/* ---- particles.js config ---- */

particlesJS("particles-js", {
  particles: {
    number: {
      value: 10,
      density: {
        enable: false,
        value_area: 58.425128673824,
      },
    },
    color: {
      value: "#000000",
    },
    shape: {
      type: "image",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src:
          "./img/chromosome.png",
        width: 200,
        height: 200,
      },
    },
    opacity: {
      value: 0.4008530152163807,
      random: true,
      anim: {
        enable: true,
        speed: 1.136908097221883,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 13,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 126.26362266116361,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 600,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 407.5924075924076,
        line_linked: {
          opacity: 0.3561858966575193,
        },
      },
      bubble: {
        distance: 1500,
        size: 500,
        duration: 10,
        opacity: 0,
        speed: 3,
      },
      repulse: {
        distance: 87.91208791208791,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: false,
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
