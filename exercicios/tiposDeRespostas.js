const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(async ctx => {
    await ctx.reply(`Seja bem vindo, ${ctx.update.message.from.first_name} `)
    await ctx.replyWithHTML (`Destacando mensagem <b> HTML </b>
    <i> de varias </i> <code> formas </code> <pre> possiveis </pre>
    <a href="http://www.google.com"> Google </a>`)
    await ctx.replyWithMarkdown('Destacando mensagem *Markdown*'
    + '_de várias_ `formas` ```possiveis```'
    + ' [Google] (http://www.google.com')
    await ctx.replyWithPhoto({source: `${__dirname}/hackerman.jpg`})
    await ctx.replyWithPhoto('https://m.media-amazon.com/images/M/MV5BMzgxMmQxZjQtNDdmMC00MjRlLTk1MDEtZDcwNTdmOTg0YzA2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UY1200_CR85,0,630,1200_AL_.jpg',
        { caption: 'You have been hacked!' })
    await ctx.replyWithPhoto({ url: 'https://ofelm.com.br/wp-content/uploads/2016/10/mr-robot.jpg'})
    await ctx.replyWithLocation(29.9773008, 31.1303068)
    await ctx.replyWithVideo('https://i.pinimg.com/originals/8b/e4/ef/8be4efc0a8e5bc4903aae00db82cb982.gif')
})


bot.startPolling()