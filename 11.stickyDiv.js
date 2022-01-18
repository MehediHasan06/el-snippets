var filterDiv = document.querySelector("#test-div");
var filterTop = filterDiv.getBoundingClientRect().top;

window.onscroll = function(){
  if (window.scrollY >= filterTop) {
    filterDiv.classList.add("hh_sticky");
  } else {
    filterDiv.classList.remove("hh_sticky");
  }
}

// css --------------------

// .hh_sticky {
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   width: 100%;
//   z-index: 99999;
//   background: white;
//   padding: 15px;
// }
