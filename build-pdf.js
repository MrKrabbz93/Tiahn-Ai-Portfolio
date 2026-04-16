const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        
        // Load the HTML file
        const htmlPath = `file://${path.resolve(__dirname, 'resume.html')}`;
        await page.goto(htmlPath, { waitUntil: 'networkidle0' });
        
        // Emulate screen to force exact CSS rendering (dark mode, etc)
        await page.emulateMediaType('screen');
        
        // Generate PDF
        const outputPath = path.resolve(__dirname, 'public', 'Tiahn_AI_Architect_Resume.pdf');
        await page.pdf({
            path: outputPath,
            format: 'A4',
            printBackground: true,
            margin: { top: '0', right: '0', bottom: '0', left: '0' }
        });
        
        console.log(`PDF successfully generated at: ${outputPath}`);
        await browser.close();
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();
