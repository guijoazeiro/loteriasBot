const pupeeter = require('puppeteer')
const cheerio = require('cheerio')
const S = require('string')

const extrairDados = async function () {
    const browser = await pupeeter.launch()
    const page = await browser.newPage()
    await page.goto('http://loterias.caixa.gov.br/wps/portal/loterias/landing/megasena/')
    let html = await page.content()
    const $ = await cheerio.load(html)
    let data = await  $('#conteudoresultado > div.content-section.section-text.with-box.no-margin-bottom > div > h2 > span').text()
    let data1 = await S(data).collapseWhitespace().s
    let dezena1 = await $('#ulDezenas > li:nth-child(1)').text()
    let dezena2 = await $('#ulDezenas > li:nth-child(2)').text()
    let dezena3 = await $('#ulDezenas > li:nth-child(3)').text()
    let dezena4 = await $('#ulDezenas > li:nth-child(4)').text()
    let dezena5 = await $('#ulDezenas > li:nth-child(5)').text()
    let dezena6 = await $('#ulDezenas > li:nth-child(6)').text()

    

    return {
        data1,
        dezena1,
        dezena2,
        dezena3,
        dezena4,
        dezena5,
        dezena6,


    }
    

    
}

module.exports = extrairDados()



