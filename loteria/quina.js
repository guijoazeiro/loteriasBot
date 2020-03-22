const pupeeter = require('puppeteer')
const cheerio = require('cheerio')
const S = require('string')

async function extrairDados() {
    const browser = await pupeeter.launch()
    const page = await browser.newPage()
    await page.goto('http://loterias.caixa.gov.br/wps/portal/loterias/landing/quina/')
    let html = await page.content()
    const $ = await cheerio.load(html)
    let data = await  $('#conteudoresultado > div.content-section.section-text.with-box.no-margin-bottom > div > h2 > span').text()
    let dataFinal = await S(data).collapseWhitespace().s
    let num1 = await $('#ulDezenas > li:nth-child(1)').text()
    let num2 = await $('#ulDezenas > li:nth-child(2)').text()
    let num3 = await $('#ulDezenas > li:nth-child(3)').text()
    let num4 = await $('#ulDezenas > li:nth-child(4)').text()
    let num5 = await $('#ulDezenas > li:nth-child(5)').text()
    

   return `QUINA: ${dataFinal}\nNúmeros: ${num1}, ${num2}, ${num3}, ${num4}, ${num5},` 
      
}

module.exports = extrairDados()