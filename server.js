// start with npm run dev to run in development mode (refresh on save)
require('dotenv').config()

const WEBSERVER_ENABLED = true;
const CHATBOT_ENABLED = true;
const CONSOLE_CHAT_OVERRIDE = true;

// express bits
if(WEBSERVER_ENABLED) {
	const express = require('express');
	const webApp = express();
	const PORT = 3000;
	const router = require('./server/webserver');

	webApp.listen(PORT, function() {
		console.log(
			'\n==============================\n' +
			'listening to webserver on ' + PORT +
			'\n==============================\n') ;
	})

	webApp.set('view engine', 'ejs')

	webApp.use(router);
}


if(CHATBOT_ENABLED) {
	const Discord = require('discord.js');
	const client = new Discord.Client();
	const token = process.env.DBOT_TOKEN;
	const chatbot = require('./chatbot/botserver.js');

	client.on('ready', () => {
		console.log('Discord Bot logged in as ' + client.user.tag +'!');
	});

	client.on('message', msg => {
		chatbot.message(msg);
	})

	client.login(token).then(console.log).catch(console.error);
}