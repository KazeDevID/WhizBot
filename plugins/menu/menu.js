const { bot_name, prefix } = require('../../config')
const Command = require('../../functions/commandHandler')
const moment = require('moment-timezone')
const speed = require('performance-now')
const { join } = require('path')

const hour = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const date = moment.tz('Asia/Jakarta').format('DD/MM/yyyy')

const timestamp = speed()
const botSpeed = speed() - timestamp

const menu = () => `
	*Info Bot*

Name: ${bot_name}
Speed: ${botSpeed.toFixed(4)}
Hour: ${hour}
Date: ${date}
Version: 1.0.0
Library: Baileys
Commands: ${Command.commands.size}


	Menu Available 

${prefix}speed
${prefix}totalcmd

`

Command.create({
	name: 'menu',
	run({ bot, from }) {
		const image = join(__dirname, '../../media/image/menu.jpg')

		bot.sendMessage(from, {
			image: { url: image },
			caption: menu()
		})
	}
})