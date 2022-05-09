document.querySelectorAll(".container.u-pb-double .button--tundora").forEach(function (item) {
  item.addEventListener('click', function () {
    DY.API("event", {
      name: "Click_On_Filter_Button",
    })
    console.log("clicked !");
  });
});


(function pollForSecondLevelElem1() {
  if (document.querySelector(".navbar-nav.second_layer .nav-item .dropdown-menu .nav-link.mob-landing")) {
    convert.$(".navbar-nav.second_layer .nav-item .dropdown-menu .nav-link.mob-landing").click(function () {
      window._conv_q = window._conv_q || [];
      _conv_q.push(["triggerConversion", "100024205"]);
    });
  } else {
    setTimeout(pollForSecondLevelElem1, 25);
  }
})();