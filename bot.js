const Telegraf = require('telegraf');

const bot = new Telegraf(process.env.TOKEN, { username: process.env.BOT_USERNAME });
bot.command('start', (ctx) => ctx.reply(`
你好，我是ZEN中文机器人，我可以告诉你一些ZEN的情况，发送"/zencommands"来看看我知道什么。
`));
bot.command('zenwechat', (ctx) => ctx.replyWithHTML('<b>ZEN官方微信</b>：ZenCashOfficial'));
bot.command('website', (ctx) => ctx.reply('https://horizen.global/zh/'));


//--------------------------------------------
bot.command('zencommands', (ctx) => ctx.replyWithHTML(`
/zencommands - 全部机器人指令
/zenwechat - ZEN官方微信
/website - ZEN官网

更多功能我正在努力学习中,敬请期待。
`));

function run () {
	if(process.env.NODE_ENV === 'production') {
		bot.telegram.setWebhook(process.env.ENDPOINT_HEROKU_URL + process.env.SECURE_PATH);
		bot.startWebhook(`/${process.env.SECURE_PATH}`, null, process.env.PORT);
	}
	else {
		bot.startPolling();
	}
}

module.exports = { run };
