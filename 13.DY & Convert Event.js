document.querySelectorAll(".container.u-pb-double .button--tundora").forEach(function (item) {
  item.addEventListener('click', function () {
    DY.API("event", {
      name: "Click_On_Filter_Button",
    })
    console.log("clicked !");
  });
});

// Use js "Code (JavaScript) triggered goal" from Convert

// demo page submit goal
if(window.location.href.includes("demo")){
  console.log("Demo page");
  (function pollFor() {
    var submitBtn = document.querySelector(".jquery-modal.blocker.current #book-a-demo-new .modal__book__hs-form form .hs_submit.hs-submit input");

    if (submitBtn) {
      convert.$(".jquery-modal.blocker.current #book-a-demo-new .modal__book__hs-form form .hs_submit.hs-submit input").click(function () {
        console.log("clicked !");
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100025730"]);
      });
    } else {
      setTimeout(pollFor, 25);
    }
  })();
}
