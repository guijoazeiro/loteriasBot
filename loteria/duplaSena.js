const pupeeter = require('puppeteer')
const cheerio = require('cheerio')
const S = require('string')

async function extrairDados() {
    const browser = await pupeeter.launch()
    const page = await browser.newPage()
    await page.goto('http://loterias.caixa.gov.br/wps/portal/loterias/landing/duplasena')
    let html = await page.content()
    const $ = await cheerio.load(html)
    let data = await  $('#resultados > div.content-section.section-text.with-box.no-margin-bottom > div > h2 > span').text()
    let dataFinal = await S(data).collapseWhitespace().s
    let s1num1 = await $('#resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > ul:nth-child(3) > li:nth-child(2)').text()
    let s1num2 = await $('#resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > ul:nth-child(3) > li:nth-child(3)').text()
    let s1num3 = await $('#resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > ul:nth-child(3) > li:nth-child(4)').text()
    let s1num4 = await $('#resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > ul:nth-child(3) > li:nth-child(5)').text()
    let s1num5 = await $('#resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > ul:nth-child(3) > li:nth-child(6)').text()
    let s1num6 = await $('#resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > ul:nth-child(3) > li:nth-child(7)').text()

    let s2num1 = await $('#resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > ul:nth-child(4) > li:nth-child(2)').text()
    let s2num2 = await $('#resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > ul:nth-child(4) > li:nth-child(3)').text()
    let s2num3 = await $('#resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > ul:nth-child(4) > li:nth-child(4)').text()
    let s2num4 = await $('#resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > ul:nth-child(4) > li:nth-child(5)').text()
    let s2num5 = await $('#resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > ul:nth-child(4) > li:nth-child(6)').text()
    let s2num6 = await $('#resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > ul:nth-child(4) > li:nth-child(7)').text()
    

   return `Dupla-Sena: ${dataFinal}\n1º Sorteio: ${s1num1}, ${s1num2}, ${s1num3}, ${s1num4}, ${s1num5}, ${s1num6}\n2º Sorteio: ${s2num1}, ${s2num2}, ${s2num3}, ${s2num4}, ${s2num5}, ${s2num6}` 
      
}

module.exports = extrairDados()