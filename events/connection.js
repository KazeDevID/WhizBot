const connectionUpdate = (update, restart) => {
	const { connection, lastDisconnect } = update

	if (connection == 'close') {
		const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== 401

		console.log('Connection closed:', lastDisconnect.error)

		if (shouldReconnect) {
			restart()
		}
	} else if (connection == 'open') {
		console.log('Bot connected!')
	}
}

module.exports = connectionUpdate
