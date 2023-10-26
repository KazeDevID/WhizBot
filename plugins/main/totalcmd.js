const Command = require('../../functions/commandHandler')

Command.create({
	name: 'totalcmd',
	run({ bot, from }) {
		bot.sendMessage(from, {
			text: `Total commands: ${Command.commands.size}`
		})
	}
})
