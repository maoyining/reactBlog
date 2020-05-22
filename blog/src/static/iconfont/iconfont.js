import {createGlobalStyle} from 'styled-components'
export const GlobalStyledIcon = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1590129072438'); /* IE9 */
  src: url('./iconfont.eot?t=1590129072438#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1590129072438') format('woff'),
  url('./iconfont.ttf?t=1590129072438') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1590129072438#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconrili:before {
  content: "\e600";
}

.iconwenjian:before {
  content: "\e7ab";
}

.iconhuojian:before {
  content: "\e608";
}

.iconpan_icon:before {
  content: "\e678";
}

.iconfangdajing:before {
  content: "\e69d";
}

.iconqiehuan:before {
  content: "\e605";
}

`
