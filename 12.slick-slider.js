function sliderJS() {
  function waitForSlick() {
    if ($.fn.slick) {
      $(".main_slider_container").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: ".thumbnail_slider_container",
        fade: true,
        infinite: false,
      });
      $(".thumbnail_slider_container").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: ".main_slider_container",
        focusOnSelect: true,
        arrows: false,
        autoplay: false,
        infinite: false,
      });
      $('.thumbnail_slider_container').on('touchstart', e => {
        $('.thumbnail_slider_container').slick('slickPlay');
      });
    } else {
      setTimeout(waitForSlick, 25);
    }
  }
  waitForSlick();
}

jQuery("head").append(
  '<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>' +
  '<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"/>' +
  '<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"/>'
);

// Css change ------------------

// .main_slider_container{
//   padding-bottom: 10px;
// }
// .main_slider_container .slick-list{
//   border: 1px solid #dad7d7ad;
// }
// .thumbnail_slider_container img{
//   border: 1px solid #dad7d7ad;
//   margin: 0 3px;
// }
// .main_slider_container .slick-next{
//   right: 5px;
// }
// .main_slider_container .slick-prev{
//   left: 5px;
// }
// .main_slider_container .slick-next,
// .main_slider_container .slick-prev
// {
//   border: 1px solid #dad7d7ad;
//   width: 50px;
//   height: 50px;
//   z-index: 99;
// }
// .main_slider_container .slick-next:before{
//   content: "";
//   display: block;
//   box-sizing: border-box;
//   width: 20px;
//   height: 20px;
//   border-top: 3px solid;
//   border-right: 3px solid;
//   transform: rotate(45deg);
//   background: url();
//   right: 15px;
//   top: 15px;
//   position: absolute;
//   color: black
// }
// .main_slider_container .slick-prev:before{
//   content: "";
//   display: block;
//   box-sizing: border-box;
//   width: 20px;
//   height: 20px;
//   border-bottom: 3px solid;
//   border-left: 3px solid;
//   transform: rotate(45deg);
//   background: url();
//   left: 15px;
//   top: 15px;
//   position: absolute;
//   color: black;
// }

// .main_slider_container .slick-prev.slick-arrow.slick-disabled,
// .main_slider_container .slick-next.slick-arrow.slick-disabled{
//   display: none!important;
// }
