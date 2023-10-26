const { downloadMediaMessage } = require("@whiskeysockets/baileys")
const { writeFile } = require("fs/promises")

const downloadMedia = async (message, filePath) => {
	const buffer = await downloadMediaMessage(message, 'buffer')
	await writeFile(filePath, buffer)
}

module.exports = downloadMedia
