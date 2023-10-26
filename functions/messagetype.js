const resolveMessage = (info) => {
	const type = Object.keys(info.message)[0]
	const message = info.message

	return type == 'conversation' ? message.conversation :
		type == 'imageMessage' ? message.imageMessage?.caption :
		type == 'videoMessage' ? message.videoMessage?.caption :
		type == 'extendedTextMessage' ? message.extendedTextMessage?.text :
		type == 'buttonResponseMessage' ? message.buttonsResponseMessage?.selectedButtonId :
		type == 'listResponseMessage' ? message.listResponseMessage?.singleSelectReply?.selectedRowId :
		type == 'templateButtonReplyMessage' ? message.templateButtonReplyMessage?.selectedId :
		type == 'messageContextInfo' ? message.buttonsResponseMessage?.selectedButtonId : ''
}

const getMessageType = (info) => {
	const type = Object.keys(info.message)[0]
	const message = info.message

	const isImage = type === 'imageMessage'
	const isVideo = type === 'videoMessage'
	const isAudio = type === 'audioMessage'
	const isSticker = type === 'stickerMessage'
	const isContact = type === 'contactMessage'
	const isLocation = type === 'locationMessage'
	const isDocument = type === 'documentMessage'

	const messageType = isImage ? 'image' :
		isVideo ? 'video' :
		isAudio ? 'audio' :
		isSticker ? 'sticker' :
		isContact ? 'contact' :
		isLocation ? 'location' :
		isDocument ? 'document' :
		'text'

	return messageType
}

const getQuotent = (type, content) => ({
	isMessage: type === 'extendedTextMessage' && content.includes('textMessage'),
	isImage: type === 'extendedTextMessage' && content.includes('imageMessage'),
	isVideo: type === 'extendedTextMessage' && content.includes('videoMessage'),
	isAudio: type === 'extendedTextMessage' && content.includes('audioMessage'),
	isSticker: type === 'extendedTextMessage' && content.includes('stickerMessage'),
	isContact: type === 'extendedTextMessage' && content.includes('contactMessage'),
	isLocation: type === 'extendedTextMessage' && content.includes('locationMessage'),
	isDocument: type === 'extendedTextMessage' && content.includes('documentMessage')
})

module.exports = {
	resolveMessage,
	getMessageType,
	getQuotent
}
