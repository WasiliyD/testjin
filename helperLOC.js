const { Builder, By, until, error } = require("selenium-webdriver");

async function productEntry() {

}

async function openPage(url) {
  await driver.get(url);
}

module.exports = { productEntry, openPage };

// --parallel --jobs=2
