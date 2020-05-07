var assert = require('chai').assert;
webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');

it( 'Test location' , async() => {
    const driver = new webdriver.Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/');
    const title = await driver.getTitle()
            assert.equal(title, 'React App');

});

it( 'Test header' , async() => {
    const driver = new webdriver.Builder().forBrowser('chrome').build(); 
    await driver.get('http://localhost:3000/');
    const header  = await driver.findElement(By.className('header')).getText();
    assert.equal(header, 'Top Movies 2019');
});

