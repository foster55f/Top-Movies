var assert = require('chai').assert;
webdriver = require('selenium-webdriver');

describe( 'Test Suite' , () => {

    before(async()=>{

    const driver = new webdriver.Builder().forBrowser('chrome').build();
        
    await driver.get('http://www.google.com');
    await driver.findElement(webdriver.By.name('q')).sendKeys('hello world');
    await driver.findElement({ name: 'q' }).sendKeys(webdriver.Key.ENTER);

        
    return driver.findElement({ xpath: '//*[@id="rso"]/div[1]/div[1]/div[1]/div[1]/div/div[1]/div[2]/div/div/div/div[2]/h3/a' }).click();
    });

    after(function () {
    const driver = new webdriver.Builder().forBrowser('chrome').build();
        
        driver.quit();
    });

    it( 'Test Case' , async()=>{
        const driver = new webdriver.Builder().forBrowser('chrome').build();
        // const title = await driver.getTitle().then(function (title) { title});
        // assert.equal(title, 'foster');
            var title = await driver.getTitle()
            assert.equal(title, "Google");
        
        // driver.sleep();
    })
});



