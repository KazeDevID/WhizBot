const Command = require('../../functions/commandHandler')
const speed = require('performance-now')

Command.create({
	name: 'speed',
	run({ bot, from }) {
		const timestamp = speed()
		const performance = speed() - timestamp 

		bot.sendMessage(from, {
			text: `${performance.toFixed(4)}ms!`
		})
	}
})