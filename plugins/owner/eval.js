const Command = require('../../functions/commandHandler')
const { exec } = require('child_process');

Command.create({
	name: '$',
	run({ q, reply, fromMe }) {
		if (!fromMe) return 
		if (!q) return reply('undepined')
        reply('_Executing..._')
        exec(q, async (err, stdout) => {
        if (err) return reply(`${err}`)
        if (stdout) {
        reply(`${stdout}`)
        }
      })
	}
})


Command.create({
	name: '>',
	run({ q, reply, fromMe }) {
		if (!fromMe) return 
		if (!q) return reply('undepined')
        try {
        let evaled = eval(q)
        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
        reply(evaled)
        } catch (err) {
        reply(String(err))
      }
	}
})