const Builder = require('selenium-webdriver').Builder;
require('dotenv').config();

function loadDriver() {
  const browser = process.env.BROWSER;
  switch(browser) {
    case 'chrome':
      require('chromedriver');
      break;
    default:
      throw new Error(`Does not currently support browser "${browser}".`);
  }
}

module.exports = () => {
  loadDriver();

  return new Builder()
    .forBrowser(process.env.BROWSER)
    .build()
}
