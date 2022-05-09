document.querySelectorAll(".container.u-pb-double .button--tundora").forEach(function (item) {
  item.addEventListener('click', function () {
    DY.API("event", {
      name: "Click_On_Filter_Button",
    })
    console.log("clicked !");
  });
});

// Use js "Code (JavaScript) triggered goal" from Convert
(function pollForGoal() {
  var submitBtn = document.querySelector(".jquery-modal.blocker.current #book-a-demo-new .modal__book__hs-form form .hs_submit.hs-submit input");
  console.log("Into the goal Poll function");
  
  if (submitBtn) {
    convert.$(".navbar-nav.second_layer .nav-item.active .dropdown-menu.active .subnav:not(.active) span.inline-item").click(function () {
      	 console.log("clicked !");
         window._conv_q = window._conv_q || [];
		_conv_q.push(["triggerConversion", "100025730"]);
     });
  } else {
    setTimeout(pollForGoal, 25);
  }
})();
