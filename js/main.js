$(function () {
  // 画面読み込み時の画面幅に応じたafterChangeFuncを設定します。
  toggleAfterChangeFunc(windowWidth);

  // 画面サイズ変更時にafterChangeFuncを再設定します。
  $(window).resize(function () {
    const windowWidth = $(window).width();
    toggleAfterChangeFunc(windowWidth);
    // 動いている最中にリサイズされると、表示が変になる気がするので、最初のスライドに戻しています。
    $gallery.slick('slickGoTo', 0);
  });

  // ギャラリーのスライド後の動作を設定しています。
  $gallery.on('afterChange', afterChangeFunc);

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
        breakpoint: breakpointMedium + 1,
        settings: {
          slidesToScroll: 3
        }
      }
    ],
  });

});
