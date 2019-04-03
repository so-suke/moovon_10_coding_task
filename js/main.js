import * as doms from './doms';
import * as variables from './variables';
import { slideByTimeDifference, toggleAfterChangeFunc } from './mySlickModules';

$(function () {
  // 画面読み込み時の画面幅に応じたafterChangeFuncを設定します。
  toggleAfterChangeFunc(doms.$window.width());

  // 画面サイズ変更時にafterChangeFuncを再設定します。
  doms.$window.resize(function () {
    const windowWidth = doms.$window.width();
    toggleAfterChangeFunc(windowWidth);
    // 動いている最中にリサイズされると、表示が変になる気がするので、最初のスライドに戻しています。
    doms.$gallery.slick('slickGoTo', 0);
  });

  // ギャラリーのスライド後の動作を設定しています。
  doms.$gallery.on('afterChange', variables.afterChangeFunc);

  // slickの設定
  // ------------------------------------
  doms.$topSliderList.slick({
    appendArrows: doms.$arrows,
    autoplay: true,
    autoplaySpeed: variables.autoplaySpeed.topSliderList,
    centerMode: true,
    slidesToShow: 1,
    variableWidth: true,
  });

  doms.$gallery.slick({
    autoplay: true,
    autoplaySpeed: variables.autoplaySpeed.gallery,
    slidesToScroll: 4,
    variableWidth: true,
    waitForAnimate: false,// afterChangeでスライドを動かす際に必要。
    responsive: [
      {
        breakpoint: variables.BREAKPOINT_MEDIUM + 1,
        settings: {
          slidesToScroll: 3
        }
      }
    ],
  });

});
