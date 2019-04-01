// slickを時間差でスライドさせる。
const setTimeoutSlickGoTo = (gotoNumber) => {
  setTimeout(() => {
    $gallery.slick('slickGoTo', gotoNumber);
  }, 8000);
}

// 画面サイズによって、スライドの動作を変更します。
const toggleAfterChangeFunc = (windowWidth) => {
  if (windowWidth > breakpointMedium) {
    afterChangeFunc = (event, slick, currentSlide) => {
      if (currentSlide === 4) {
        setTimeoutSlickGoTo(0);
      }
    }
  } else {
    // 767px以下の場合。スライド数が一定ではありません。
    afterChangeFunc = (event, slick, currentSlide) => {
      // 1回目は、3枚スライドさせています。
      if (currentSlide === 3) {
        // 2回目は、2枚しかスライドさせません。
        setTimeoutSlickGoTo(5);
      }
      if (currentSlide === 5) {
        // 3回目のスライドで元に戻ります。
        setTimeoutSlickGoTo(0);
      }
    }
  }
  // 反映させるためにセットし直します。
  $gallery.on('afterChange', afterChangeFunc);
}
