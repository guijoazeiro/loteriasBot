const pupeeter = require('puppeteer')
const cheerio = require('cheerio')
const S = require('string')

async function extrairDados () {
    const browser = await pupeeter.launch()
    const page = await browser.newPage()
    await page.goto('http://loterias.caixa.gov.br/wps/portal/loterias/landing/lotofacil/')
    let html = await page.content()
    const $ = await cheerio.load(html)
    let data = await  $('#resultados > div.content-section.section-text.with-box.no-margin-bottom > div > h2 > span').text()
    let dataFinal = await S(data).collapseWhitespace().s
    let num1 = await $('#resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > div:nth-child(3) > table > tbody > tr:nth-child(1) > td:nth-child(1)').text()
    let num2 = await $('#resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > div:nth-child(3) > table > tbody > tr:nth-child(1) > td:nth-child(2)').text()
    let num3 = await $('#resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > div:nth-child(3) > table > tbody > tr:nth-child(1) > td:nth-child(3)').text()
    let num4 = await $('#resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > div:nth-child(3) > table > tbody > tr:nth-child(1) > td:nth-child(4)').text()
    let num5 = await $('#resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > div:nth-child(3) > table > tbody > tr:nth-child(1) > td:nth-child(5)').text()
    let num6 = await $('#resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > div:nth-child(3) > table > tbody > tr:nth-child(2) > td:nth-child(1)').text()
    let num7 = await $('#resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > div:nth-child(3) > table > tbody > tr:nth-child(2) > td:nth-child(2)').text()
    let num8 = await $('#resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > div:nth-child(3) > table > tbody > tr:nth-child(2) > td:nth-child(3)').text()
    let num9 = await $('#resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > div:nth-child(3) > table > tbody > tr:nth-child(2) > td:nth-child(4)').text()
    let num10 = await $('#resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > div:nth-child(3) > table > tbody > tr:nth-child(2) > td:nth-child(5)').text()
    let num11 = await $('#resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > div:nth-child(3) > table > tbody > tr:nth-child(3) > td:nth-child(1)').text()
    let num12 = await $('#resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > div:nth-child(3) > table > tbody > tr:nth-child(3) > td:nth-child(2)').text()
    let num13 = await $('#resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > div:nth-child(3) > table > tbody > tr:nth-child(3) > td:nth-child(3)').text()
    let num14 = await $('#resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > div:nth-child(3) > table > tbody > tr:nth-child(3) > td:nth-child(4)').text()
    let num15 = await $('#resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > div:nth-child(3) > table > tbody > tr:nth-child(3) > td:nth-child(5)').text()

    browser.close()

    return `LOTOFÁCIL: ${dataFinal}\nNúmeros:\n${num1}, ${num2}, ${num3}, ${num4}, ${num5}\n${num6}, ${num7}, ${num8}, ${num9}, ${num10}\n${num11}, ${num12}, ${num13}, ${num14}, ${num15}.`

    
    
}

module.exports = extrairDados()





