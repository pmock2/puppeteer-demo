const puppeteer = require('puppeteer');

//create a new browser page and set its conditions
var browser = await puppeteer.launch({
    headless: false
});

var page = await browser.newPage();

await page.setViewport({
    width: 1600,
    height: 800
});

var results = {};

//end browser session
let close = () => {
    browser.close();
}

//start puppeteer
let start = async () => {

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