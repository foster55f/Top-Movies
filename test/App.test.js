var assert = require('chai').assert;
webdriver = require('selenium-webdriver');
const { Builder, By, Key, until } = require('selenium-webdriver');

it( 'Test Suite' , async() => {
    const driver = new webdriver.Builder().forBrowser('chrome').build();
        
    await driver.get('http://localhost:3000/');
    var title = await driver.getTitle()
            assert.equal(title, 'React App');

    // await driver.findElement(webdriver.By.name('q')).sendKeys('hello world');
    // await driver.findElement({ name: 'q' }).sendKeys(webdriver.Key.ENTER);
 
    // await driver.findElement({ xpath: '//*[@id="rso"]/div[2]/div/div[1]/a/h3' }).click();
    //     var title = await driver.getTitle()
    //         assert.equal(title, '"Hello, World!" program - Wikipedia');
});

it( 'Test Suite' , async() => {
    const driver = new webdriver.Builder().forBrowser('chrome').build();
        
    await driver.get('http://localhost:3000/');
    const header  = await driver.findElement(By.className('header')).getText();
    assert.equal(header, 'Top Movies 2019');
});

    