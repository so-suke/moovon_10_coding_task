import { $window, $topSliderList, $gallery, $arrows } from './doms';
import { BREAKPOINT_MEDIUM } from './constants';
import { autoplaySpeed } from './slickSettingVaribles';
import { resetMediaQueries } from './resetMediaQueries';
import { toggleGalleryAfterChange } from './mySlickModules';

$(function () {
  /**
   * slickスライドを最初のものに戻す。
   */
  const returnToFirstSlide = () => {
    $gallery.slick('slickGoTo', 0);
  }

  $window.on('load resize', () => {
    // 順番に注意して下さい。メディアクエリの再設定を最初に行って下さい。
    // toggleGalleryAfterChange内で再設定後のメディアクエリを使用しています。
    resetMediaQueries();
    toggleGalleryAfterChange();
  })

  $window.on('resize', () => {
    // スライドアニメーション中にリサイズされると、表示が変になるので、最初のスライドに戻しています。
    returnToFirstSlide();
  })

  // slickの設定
  // ------------------------------------
  $topSliderList.slick({
    appendArrows: $arrows,
    autoplay: true,
    autoplaySpeed: autoplaySpeed.topSliderList,
    centerMode: true,
    slidesToShow: 1,
    variableWidth: true,
  });

  $gallery.slick({
    autoplay: true,
    autoplaySpeed: autoplaySpeed.gallery,
    slidesToScroll: 4,
    variableWidth: true,
    waitForAnimate: false,// afterChangeでスライドを動かす際に必要。
    responsive: [
      {
        breakpoint: BREAKPOINT_MEDIUM + 1,
        settings: {
          slidesToScroll: 3
        }
      }
    ],
  });

});
