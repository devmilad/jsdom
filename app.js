const { chromium } = require('playwright');
require("dotenv").config();

// Function to fetch and parse gold data
const gold = async () => {
    try {
        // Launch the browser
        const browser = await chromium.launch();
        const page = await browser.newPage();

        // Go to the website
        await page.goto('https://www.bonbast.com/', { waitUntil: 'networkidle' });

        // Ensure the element with the data is loaded
        await page.waitForSelector('#eur1');
 

        // Extract the relevant element's content
        const data = await page.evaluate(() => {
            const ounceElement = document.querySelector('#eur1');
            console.log(ounceElement)
            return ounceElement ? ounceElement.textContent.trim() : null;
        });

        console.log(data)

        await browser.close();

        return 'Data updated successfully';

    } catch (error) {
        console.error('Error occurred:', error);
    }
};

gold();
