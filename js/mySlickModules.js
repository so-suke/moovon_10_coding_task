import * as doms from './doms';
import * as variables from './variables';

/**
 * slickを時間差でスライドさせる。
 * @param {gotoNumber} num - 何枚目のスライドにスライドさせるか。
 */
const slideByTimeDifference = (gotoNumber) => {
  setTimeout(() => {
    doms.$gallery.slick('slickGoTo', gotoNumber);
  }, 8000);
}

/**
 * 画面サイズによって、スライド動作を切り替えます。
 * @param {windowWidth} num - スライド動作の切り替えのために用いる。
 */
export const toggleAfterChangeFunc = (windowWidth) => {
  if (windowWidth > variables.BREAKPOINT_MEDIUM) {
    variables.afterChangeFunc = (event, slick, currentSlide) => {
      if (currentSlide === 4) {
        slideByTimeDifference(0);
      }
    }
  } else {
    // 767px以下の場合。スライド数が一定ではありません。
    variables.afterChangeFunc = (event, slick, currentSlide) => {
      // 1回目は、3枚スライドさせています。
      if (currentSlide === 3) {
        // 2回目は、2枚しかスライドさせません。
        slideByTimeDifference(5);
      }
      if (currentSlide === 5) {
        // 3回目のスライドで元に戻ります。
        slideByTimeDifference(0);
      }
    }
  }
  // 反映させるためにセットし直します。
  doms.$gallery.on('afterChange', variables.afterChangeFunc);
}
