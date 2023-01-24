const puppeteer = require('puppeteer'); 
//inclui a Biblioteca Puppeteer
puppeteer.launch({headless:true}).then(async browser => { const pageNew = await browser.newPage(); 
// Inicia o navegador 
console.log('Step1 - Open Browser'); 
//Exibir mensagem 
await pageNew .setViewport({ width: 1280, height: 800 }) 
await pageNew .goto('https://lambdageeks.com/'); 
//Abrir LambdaGeeks 
//Capturar captura de tela 
await pageNew .screenshot({ path : 'screenshot_lambda.png' }); 
console.log('Passo2 - Navegue no LambdaGeeks e faça a captura de tela'); 
await browser.close(); console.log('Passo3 - Navegador fechado'); });