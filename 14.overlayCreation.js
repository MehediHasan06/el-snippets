/** CSS */
/** 
 .parent{position:relative;} 
  .overlay{
    background: rgba(0,0,0,0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9;
    display: none;
  } 
  .overlay_active{display: block!important;}
*/

let overlayDiv = bocHeaderProminance.createElem("div", "overlay");
document.querySelector(selector).appendChild(overlayDiv);

document.querySelector(selector).addEventListener("click", function (e) {
  document.querySelector(selector).classList.toggle("overlay_active");
  document.querySelectorAll(".overlay").forEach(function (elem) {
    elem.classList.toggle("overlay_active");
  });
});
