const TelegramBot = require('node-telegram-bot-api')
const megasena = require('./loteria/megasena')
const lotofacil = require('./loteria/lotofacil')
const quina = require('./loteria/quina')

require('dotenv/config')

const token = process.env.TELEGRAM_TOKEN

const bot = new TelegramBot(token, { polling: true })


bot.on('message', (msg) => {
    const oi = 'oi'
    if (msg.text.toString().toLowerCase().indexOf(oi) === 0) {
        bot.sendMessage(msg.chat.id, `Olá ${msg.from.first_name}`)
    }

})

bot.onText(/\/mega/, async (msg) => {
    megasena.then(function (val) {
        bot.sendMessage(msg.chat.id, val)

    }).catch((e) => {
        bot.sendMessage(msg.chat.id, "Erro")
    })
})

bot.onText(/\/loto/, async (msg) => {
    lotofacil.then(function (val) {
        bot.sendMessage(msg.chat.id, val)

    }).catch((e) => {
        bot.sendMessage(msg.chat.id, "Erro")
    })
})

bot.onText(/\/quina/, async (msg) => {
    quina.then(function (val) {
        bot.sendMessage(msg.chat.id, val)

    }).catch((e) => {
        bot.sendMessage(msg.chat.id, "Erro")
    })
})




// bot.onText(/\/start/, async (msg) => {

//    await bot.sendMessage(msg.chat.id, texto.toString())

// });

