document.querySelectorAll(".container.u-pb-double .button--tundora").forEach(function (item) {
  item.addEventListener('click', function () {
    DY.API("event", {
      name: "Click_On_Filter_Button",
    })
    console.log("clicked !");
  });
});
