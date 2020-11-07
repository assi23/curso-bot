const env = require('../.env')// coneta com a chave de segurança
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)//conecta com o bot

bot.start(ctx => {
    const from = ctx.update.message.from
    console.log(from)
    if(from.username === 'Guilherme Assi') {
        ctx.reply('Ao seu dispor, mestre!')
    } else {
        ctx.reply('Sinto muito, mas eu só falo com o meu mestre!')
    }
})

bot.startPolling()