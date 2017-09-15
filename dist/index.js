'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var CHARS = {
    a: 'ა',
    b: 'ბ',
    g: 'გ',
    d: 'დ',
    e: 'ე',
    v: 'ვ',
    z: 'ზ',
    T: 'თ',
    i: 'ი',
    k: 'კ',
    l: 'ლ',
    m: 'მ',
    n: 'ნ',
    o: 'ო',
    p: 'პ',
    J: 'ჟ',
    r: 'რ',
    s: 'ს',
    t: 'ტ',
    u: 'უ',
    f: 'ფ',
    q: 'ქ',
    R: 'ღ',
    y: 'ყ',
    S: 'შ',
    C: 'ჩ',
    c: 'ც',
    Z: 'ძ',
    w: 'წ',
    W: 'ჭ',
    x: 'ხ',
    j: 'ჯ',
    h: 'ჰ'
  };

  return text.split('').map(function (char) {
    return CHARS[char] ? CHARS[char] : char;
  }).join('');
};