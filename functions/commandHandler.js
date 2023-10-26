const { readdirSync } = require('fs')
const { join } = require('path')

class CommandManager {
	commands = new Map()

	create({ name, run }) {
		this.commands.set(name, { name, run })
	}

	run(name, options) {
		const command = this.commands.get(name)

		if (command) {
			command.run(options)
			return true
		} else {
			return false
		}
	}

	initCommandsPath(commandsPath) {
		const path = commandsPath
		const commandsFolder = readdirSync(path)

		commandsFolder.forEach(file => {
			const filePath = join(path, file)
			const isDirectory = !file.includes('.')
    
			if (isDirectory) {
				const subcommandsFolder = readdirSync(filePath)

				subcommandsFolder.forEach(filee => {
					if (filee.endsWith('.js')) {
						const subcommandPath = join(filePath, filee)
						require(subcommandPath)
					}
				})
			} else if (file.endsWith('.js')) {
				require(filePath)
			}
		})
	}
}

const Command = new CommandManager()

module.exports = Command