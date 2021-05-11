const webdriver = require('selenium-webdriver');
const { until } = require('selenium-webdriver');
const { By } = require('selenium-webdriver');
const {describe, it} = require('mocha');
const assert = require('chai').assert;

describe('webdriver', () => {
    let driver;
    before(async () => {
      driver = new webdriver.Builder().forBrowser('chrome').usingServer('http://localhost:4444/wd/hub')
      .build();

      await driver.get(`https://google.com`);
    }, 30000);

    after(async () => {
      await driver.quit();
    }, 40000);

    it('test google search', async () => {

        await driver.findElement(webdriver.By.name('q')).sendKeys('webdriver\n')

        const title = await driver.getTitle()
        console.log(title)
        assert.equal(title, "webdriver - Google Search")
    }, 35000);
  });
