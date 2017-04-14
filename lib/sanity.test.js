const expect = require('chai').expect;
const loadDriver = require('./driver');
const By = require('selenium-webdriver').By;
require('dotenv').config();

describe('Sanity check on application', function() {
  let driver;
  before(function(done) {
    this.timeout(10000);
    driver = loadDriver();
    driver.then(()=>done());
  })
  after(function(done) {
    this.timeout(10000);
    driver.quit().then(done);
  })

  it('#Front page loads.', function(done) {
    this.timeout(10000);
    driver.get(process.env.BASE_URL);
    //Check that the logo rendered.
    driver.findElement({id: 'logo'})
      .then(el => {
        done();
      });
  })
});
