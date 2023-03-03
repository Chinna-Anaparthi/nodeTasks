var puppeteer=require('puppeteer');
(async function ()
{
    try{
     const browser=await puppeteer.launch();
     const page =await browser.newPage();
     await page.setContent('<h1>chinna</h1>')
     await page.pdf({
        path:'output.pdf',
        format:'A4',
        printBackground:true
     })
     console.log("Done Process");
     await browser.close();
     process.exit();
    }
    catch(e)
    {
     console.log(e);
    }
})
