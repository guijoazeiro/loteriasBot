const TelegramBot = require('node-telegram-bot-api')
const loteria = require('./loteria/megasena')

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
    loteria.then(function (val) {
        bot.sendMessage(msg.chat.id, val)

    }).catch((e) => {
        bot.sendMessage(msg.chat.id, "Erro")
    })
    

});




// bot.onText(/\/start/, async (msg) => {

//    await bot.sendMessage(msg.chat.id, texto.toString())

// });

