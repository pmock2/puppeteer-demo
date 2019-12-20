const puppeteer = require('puppeteer');

var results = {};
var browser;
var page;

//end browser session
let close = () => {
    browser.close();
}

//start puppeteer
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
    // close();
    
    console.log('--------------------------------')
    console.log(JSON.stringify(results, null, 2))
    console.log('--------------------------------')
}

let login = async () => {
    //username, password, click log in
}

let getUserInfo = async () => {
   //grab spotlight user and save it to our results JSON
}

let logout = async () => {
    //logout using /logout
}


start();