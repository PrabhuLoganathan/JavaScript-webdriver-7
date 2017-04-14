const By = require('selenium-webdriver').By;

module.exports = function(driver, opts) {
  driver.get(opts.baseUrl);
  //Check that the logo rendered.
  driver.findElement(By.id('logo'));
}
