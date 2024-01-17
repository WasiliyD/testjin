const { Builder } = require("selenium-webdriver");
exports.mochaHooks = {
  beforeEach: async function () {
     driver = await new Builder().forBrowser("chrome").build();
     await driver.manage().window().maximize();
  },
  afterEach: async function () {
    await driver.quit();
  },
};
