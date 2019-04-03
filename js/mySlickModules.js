import { $gallery } from './doms';
import { MEDIA_QUERIES } from './constants';
import { autoplaySpeed } from './slickSettingVaribles';
import { mediaQueries } from './resetMediaQueries';

/**
 * slickのスライド動作後の関数
 * @type {Object}
 */
export let afterChangeFunc;

/**
 * ギャラリー部のスライドを時間差でスライドさせる。
 * @param {gotoNumber} num - 何枚目のスライドにスライドさせるか。
 */
const slideGalleryByTimeDifference = (gotoNumber) => {
  setTimeout(() => {
    $gallery.slick('slickGoTo', gotoNumber);
  }, autoplaySpeed.gallery);
}

/**
 * 画面サイズによって、ギャラリー部のスライド動作を切り替えます。
 */
export const toggleGalleryAfterChange = () => {
  if (mediaQueries === MEDIA_QUERIES.MEDIUM) {
    afterChangeFunc = (event, slick, currentSlide) => {
      if (currentSlide === 4) {
        slideGalleryByTimeDifference(0);
      }
    }
  } else {
    // 767px以下の場合。スライド数が一定ではありません。
    afterChangeFunc = (event, slick, currentSlide) => {
      // 1回目は、3枚スライドさせています。
      if (currentSlide === 3) {
        // 2回目は、2枚しかスライドさせません。
        slideGalleryByTimeDifference(5);
      }
      if (currentSlide === 5) {
        // 3回目のスライドで元に戻ります。
        slideGalleryByTimeDifference(0);
      }
    }
  }
  // 新しくイベントをセットし直します。onだと追加されてしまうので、一旦offして解除しています。
  $gallery.off('afterChange');
  $gallery.on('afterChange', afterChangeFunc);
}
