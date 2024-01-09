const {
	default: makeWASocket,
	makeInMemoryStore,
	PHONENUMBER_MCC,
	useMultiFileAuthState
} = require('@whiskeysockets/baileys')
const { pino } = require('pino')
const readline = require("readline");
const NodeCache = require("node-cache")

const msgRetryCounterCache = new NodeCache()

const config = require('./config')
const connectionUpdate = require('./events/connection')
const onMessageUpsert = require('./events/messages')
const renderLogs = require('./functions/show-logs')
const Exif = require('./functions/Exif')

const exif = new Exif()
exif.create(
	config.owner_name,
	config.bot_name,
	'stickers'
)

// Pairing
const pairingCode = process.argv.includes("-pairing");
const useQr = process.argv.includes("-qr")

if (!pairingCode && !useQr) {
  console.log("If you want to use code pairing, type node . -pairing");
  console.log("If you want to use a qr code, type node . -qr");
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const question = (text) => new Promise((resolve) => rl.question(text, resolve));



const start = async () => {
	const store = makeInMemoryStore({
		logger: pino().child({
			level: 'debug'
		})
	})
	const { state, saveCreds } = await useMultiFileAuthState(
		config.qrcode_path
	)
	const bot = makeWASocket({
    ...(!pairingCode && !useQr && {
        printQRInTerminal: false
    }),
    ...(pairingCode && {
        printQRInTerminal: !pairingCode
    }),
    ...(useQr && {
        printQRInTerminal: true
    }),
      logger: pino({
        level: "silent",
      }),
      browser: ["Chrome (Linux)", "", ""], 
     // printQRInTerminal: true,
      auth: state,
      msgRetryCounterCache
    });
	bot.ev.on('creds.update', saveCreds)
	
/*	if (pairingCode && !bot.authState.creds.registered) {
    console.log(`Please type your WhatsApp number`);
    let phoneNumber = await question(`Number: `);
    phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
    if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
        console.log(`Start with your country's WhatsApp code, Example 62xxx`);
        console.log(`Please type your WhatsApp number`);
        phoneNumber = await question(`Number: `);
        phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
    }
    let code = await bot.requestPairingCode(phoneNumber)
    code = code?.match(/.{1,4}/g)?.join("-") || code
    console.log(`Your Pairing Code: ${code}`);
    rl.close()
}*/
if (pairingCode && !bot.authState.creds.registered) {
    const autopairing = config.pairing_number;
    console.log(`Please type your WhatsApp number`);
    let phoneNumber = await question(`Number: `);
    phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
    if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
        console.log(`Start with your country's WhatsApp code, Example 62xxx`);
        console.log(`Please type your WhatsApp number`);
        phoneNumber = await question(`Number: `);
        phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
    }
    let code = await bot.requestPairingCode(autopairing || phoneNumber);
    code = code?.match(/.{1,4}/g)?.join("-") || code;
    console.log(`Your Pairing Code: ${code}`);
    rl.close();
}

	store.bind(bot.ev)
	bot.ev.on('connection.update', (update) => {
		connectionUpdate(update, start)
		renderLogs()
	})
	bot.ev.on('messages.upsert', (message) => {
		onMessageUpsert(message, bot)
	})
	bot.ev.on('group-participants.update', (update) => {})
}
start()
