(function () {
  "use strict";

  let share = document.querySelector("#share-btn"),
    social = document.querySelector("#social"),
    rulesToggler = document.querySelector("#rulesToggler"),
    rules = document.querySelector("#rules"),
    appToggler = document.querySelector("#appToggler"),
    appWrap = document.querySelector("#appWrap");

  function fadeIn(elem) {
    elem.classList.remove("d-none");
    elem.classList.remove("animation-fadeOut");
    elem.classList.add("animation-fadeIn");
  }

  function fadeOut(elem) {
    elem.classList.remove("animation-fadeIn");
    elem.classList.add("animation-fadeOut");
    setTimeout(() => {
      elem.classList.add("d-none");
    }, 200);
  }

  share.addEventListener("click", () => {
    if (social.classList.contains("animation-fadeIn")) {
      fadeOut(social);
    } else {
      fadeIn(social);
    }
    document.addEventListener("click", (e) => {
      let isSocial = e.target == social;
      if (!isSocial && !share.contains(e.target)) {
        fadeOut(social);
      }
    });
  });

  rulesToggler.addEventListener("click", () => {
    if (rules.classList.contains("animation-fadeIn")) {
      fadeOut(rules);
    } else {
      fadeIn(rules);
    }
  });

  appToggler.addEventListener("click", () => {
    if (appWrap.classList.contains("animation-fadeIn")) {
      fadeOut(appWrap);
    } else {
      fadeIn(appWrap);
    }
    document.addEventListener("click", (e) => {
      let isAppWrap = e.target == appWrap;
      if (!isAppWrap && !appToggler.contains(e.target)) {
        fadeOut(appWrap);
      }
    });
  });
})();
