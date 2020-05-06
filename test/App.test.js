var assert = require('chai').assert;
webdriver = require('selenium-webdriver');

it( 'Test Suite' , async() => {
    const driver = new webdriver.Builder().forBrowser('chrome').build();
        
    await driver.get('http://www.google.com');
    await driver.findElement(webdriver.By.name('q')).sendKeys('hello world');
    await driver.findElement({ name: 'q' }).sendKeys(webdriver.Key.ENTER);
 
    await driver.findElement({ xpath: '//*[@id="rso"]/div[2]/div/div[1]/a/h3' }).click();
        var title = await driver.getTitle()
        it( 'Test Case' , async()=>{
            assert.equal(title, '"Hello, World!" program - Wikipedia');
        })      
        driver.quit();
    });

    