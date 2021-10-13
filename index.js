const puppeteer = require('puppeteer');

var comments = 0;

mainComment = async () =>{
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
  
    // Login flow
    await page.goto('https://www.instagram.com/accounts/login/?source=auth_switcher');
    await page.waitForSelector('input[name="username"]');
    await page.type('input[name="username"]', 'usuario');
    await page.type('input[name="password"]', 'senha');
    await page.click('button[type="submit"]');
  
    // Waiting for page to refresh
    await page.waitForNavigation();
  
    // Navigate to post and submitting the comment
    await page.goto('https://www.instagram.com/p/CM_InIypqtY/');

    setInterval(async () => {
        comment()
    },36000)

    const comment = async () => {
            comments++ 
            console.log(`_taineforneck comentou: ${comments} vezes.`)
            await page.waitForSelector('textarea');
            await page.type('textarea', randomize());
            await page.click('button[type="submit"]');
    }
}

function randomize() {
    const randomimicos = [
        '🔥 Sarah',
        'Sarah 🔥',
        '🔥 Sarah 🔥',
        'A Sarah Sai',
        '🐍 Sarah',
        'Sarah 🐍🐍🐍',
        'Vem passar chapinha aqui fora SARAH 🐍',
        'SARAH 💥',
        'Sarah',
        'Sarah! 💥🔥🐍'
    ]

    const palavras = Math.floor(Math.random() * 10);

    return randomimicos[palavras]
}


mainComment()
