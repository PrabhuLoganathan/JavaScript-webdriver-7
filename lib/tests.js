const Builder = require('selenium-webdriver').Builder;
//This adds the chrome driver to the path.
const chromedriver = require('chromedriver');

const internalRun = (driver, opts) => {
  require('./sanity/view-index')(driver, opts);
}

module.exports = function(opts) {
  const driver = new Builder()
    .forBrowser('chrome')
    .build();

  internalRun(driver, opts);

  driver.quit();
}
