import './setup';

window.matchMedia = window.matchMedia || function matchMedia() {
  return {
    matches: false,
    addListener() {},
    removeListener() {},
  };
};

Object.defineProperty(window.navigator, 'userAgent', (value => ({
  get: function _get() {
    return value;
  },
  set: function _set(v) {
    value = v; // eslint-disable-line no-param-reassign
  },
}))('node.js'));

window.EDM = window.EDM || {};
window.EDM.Venom = window.EDM.Venom || {};
