// slickで使用するDOMの定義
const $topSliderList = $('#topSliderList');
const $gallery = $('#gallery');
const $arrows = $('#arrows');

const autoplaySpeed = {
  topSliderList: 5000,
  gallery: 8000,
}

let afterChangeFunc; // slickのスライド動作後の関数
let windowWidth = $(window).width();
const breakpointMedium = 767;
