/*
 * Author: Daisuke Takayama
 */

'use strict';
var e = eval, global: NodeJS.Global = e('this');

import Utility from './Utility';

declare namespace NodeJS {
  interface Global {
    document: Document;
    window: Window;
    navigator: Navigator;
    AP: {
      common: {
        utility: Utility
      }
    };
  }
}

// npm & node
if (typeof module !== 'undefined') {
  module.exports = Utility;
}

// browser
if (typeof (global) !== 'undefined') {
  if (typeof global.AP === 'undefined') {
    Object.assign(global, { AP: {} });
  }
  if (typeof global.AP.common === 'undefined') {
    Object.assign(global.AP, { common: {} });
  }
  if (typeof global.AP.common.utility === 'undefined') {
    Object.assign(global.AP.common, { utility: Utility });
  }
}
