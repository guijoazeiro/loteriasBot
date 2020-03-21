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
        const mensagem = `${val.data1}\nDezenas: ${val.dezena1}, ${val.dezena2}, ${val.dezena3}, ${val.dezena4}, ${val.dezena5}, ${val.dezena6}`

        bot.sendMessage(msg.chat.id, mensagem)

    })
    

});




// bot.onText(/\/start/, async (msg) => {

//    await bot.sendMessage(msg.chat.id, texto.toString())

// });

