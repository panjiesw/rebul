import { BuraBaseTheme } from '@bura/theme';
import { cssRaw } from 'typestyle';

declare module '@bura/theme/lib/base/theme' {
  // tslint:disable-next-line:interface-name
  interface BuraBaseTheme {
    withMiniReset(): BuraBaseTheme;
  }
}

declare module 'typestyle/lib/types' {
  // tslint:disable-next-line:interface-name
  interface CSSProperties {
    textSizeAdjust?: number | string;
  }
}

/* tslint:disable */
BuraBaseTheme.prototype.withMiniReset = function() {
  cssRaw(
    `
    /*! minireset.css v0.0.3 | MIT License | github.com/jgthms/minireset.css */
    blockquote,body,dd,dl,dt,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,html,iframe,legend,li,ol,p,pre,textarea,ul{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:400}ul{list-style:none}button,input,select,textarea{margin:0}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}audio,embed,iframe,img,object,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0;text-align:left}
    `.trim(),
  );
  /* tslint:enable */
  return this;
};
