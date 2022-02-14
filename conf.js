exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/spec.js']
}
//Test Commands
// sudo webdriver-manager update
// sudo webdriver-manager start
// protractor conf.js

//Public Commands
//./node_modules/.bin/gh-pages -d public