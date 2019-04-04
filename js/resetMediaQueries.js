import { $window } from './doms';
import { BREAKPOINT_MEDIUM, MEDIA_QUERIES } from './constants';

/**
 * メディアクエリの条件分岐に用いるグローバル変数。
 * @type {string}
 */
export let mediaQueries;

/**
 * 現在の画面サイズに応じたメディアクエリを再設定します。
 */
export const resetMediaQueries = () => {
  const windowSize = $window.width();
  windowSize > BREAKPOINT_MEDIUM ? mediaQueries = MEDIA_QUERIES.MEDIUM : mediaQueries = MEDIA_QUERIES.SMALL;
}

/**
 * 初期設定としてwindowにイベントを設定します。
 */
export const init = () => {
  $window.on('load resize', () => {
    resetMediaQueries();
  });
}

