const TelegramBot = require('node-telegram-bot-api')

require('dotenv/config')

const token = process.env.TELEGRAM_TOKEN

const bot = new TelegramBot(token, { polling: true })


bot.on('message', (msg) => {
    const oi = 'oi'
    if (msg.text.toString().toLowerCase().indexOf(oi) === 0) {
        bot.sendMessage(msg.chat.id, `Olá ${msg.from.first_name}`)
    }

})