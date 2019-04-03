const BREAKPOINT_MEDIUM = 767;

/**
 * slickで使用する自動スライドの速さ。
 * @type {Object}
 */
const autoplaySpeed = {
  topSliderList: 5000,
  gallery: 8000,
}

/**
 * slickのスライド動作後の関数
 * @type {Object}
 */
let afterChangeFunc;

export {
  BREAKPOINT_MEDIUM,
  autoplaySpeed,
  afterChangeFunc,
};
