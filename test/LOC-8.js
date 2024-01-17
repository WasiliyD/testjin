const {productEntry, openPage} = require("../helperLOC")
const { expect } = require("chai");
const { Builder, By, until, error } = require("selenium-webdriver");

describe.only("Главная страница", async function () {
  it("LOC-8 Количество авто не равно 0", async function () {
    openPage("https://ya.ru/");
    await driver.sleep(150000);
    await driver.findElement(By.css("tr-car-new-card"));
    await driver.sleep(5000);
  });
});
