// Make Enzyme functions available in all test files without importing
import 'raf/polyfill';
import { shallow, render, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;

function throwAndLogErrors(message) {
  /*
    Make sure we still log all of the errors because otherwise the last error shown will be from
    node_modules/react-dom/cjs/react-dom.development.js:9748 which does not provide the full message
    logged in node_modules/fbjs/lib/warning.js:33 (and other places).
   */
  console.warn(message);
  throw new Error('Your test has failed because `console.error` was called.  Please read through the console outputs ' +
    'and fix the scenarios that are causing `console.error` to be called`.');
}

global.logger = {
  error: throwAndLogErrors,
  warn: () => {},
  info: () => {},
  debug: () => {},
};

global.EDM = {
  Venom: {},
};

// Fail tests on any logged errors
console.error = throwAndLogErrors;

