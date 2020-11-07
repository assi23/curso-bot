const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const from = ctx.update.message.from
    console.log(from)
    ctx.reply(`Seja bem vindo, ${from.first_name}!`)
})

bot.on('text', async (ctx, next) => {
    await ctx.reply('Ohayo')
    next()
})

bot.on('text', async ctx => {
    await ctx.reply('Obrigado pelo ip')
})

bot.startPolling()

//para inciar, clique em novo terminal e adicione o seguinte comando,
// node exercicios/primeirobot.js