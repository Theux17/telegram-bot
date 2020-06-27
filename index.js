const TelegramBot = require("node-telegram-bot-api")
const token = "AquiVaioToken"

const bot = new TelegramBot(token, {polling: true})

const { Random } = require('random-js')
const random = new Random


bot.on('new_chat_members', msg => {
    bot.sendMessage(
        msg.chat.id, 
        `Olá ${msg.from.first_name}, bem vindo ao chat Positivo!! Desabafe conosco, somos amigos!` 
    )
})

bot.on("message", msg => {
    const chatdId = msg.chat.id
    let randomMessage = positivity[random.integer(0, positivity.length - 1)]
    bot.sendMessage(chatdId, randomMessage)
})

const positivity = [
    'Foque nos objetivos',
    'Você vai alcançar',
    'Basta ter fé!',
    'Foco sempre!'
]
