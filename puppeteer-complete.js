const puppeteer = require('puppeteer');

var browser;
var page;
var results = {};

//wait for 1 second

let close = () => {
    browser.close();
    console.log('--------------------------------')
    console.log(JSON.stringify(results, null, 2))
    console.log('--------------------------------')
}

let start = async () => {
    //create a new browser page and set its conditions
    browser = await puppeteer.launch({
        headless: false
    });

    page = await browser.newPage();

    await page.setViewport({
        width: 1600,
        height: 800
    });
    
    //navigate to CMS
    await page.goto('http://dev.cms.sjvassoc.com');
    
    //login to the CMS
    await login();

    //populate results
    await getUserInfo();
    
    //logout of CMS
    await logout();

    //end session
    close();
}

let login = async () => {
    //your email to login
    await page.type('#txtEmail', 'payton.mock@sjvassoc.com');

    //your password
    await page.type('#txtPassword', 'Robot1234');

    await page.click('#btnLogin');
}

let getUserInfo = async () => {
    await page.waitFor('#employee-about > div.widget-header > h2 > strong');

    results.username = await page.evaluate(() => document.querySelector('#employee-about > div.widget-header > h2 > strong').innerHTML.replace('About ', ''));
}

let logout = async () => {
 await page.goto('http://dev.cms.sjvassoc.com/logout')
}


start();