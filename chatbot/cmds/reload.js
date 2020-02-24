const log = require('../../util/util.js').log;
const util = require('../../util/util.js');
const clearCommandCache = require('../../util/util.js').clearCommandCache;
const userManager = require('../../GuildHall/userManager.js')
const characterManager = require('../../GuildHall/characterManager.js')

let name = `reload`;

module.exports.help = {
	name: name,
	description: 'command used to reload bot Commands',
	format: `!${name}`,
	note: ''
}

module.exports.permissions = {
	userPermissions: {
		admin: false,
		dm: false,
		player: false
	},
	locationPermissions: {
		activeGuild: false,
		passiveGuild: false,
		inactiveGuild: false,
		directMessage: false
	}
}

module.exports.run = async(bot, message, args) => {
	await clearCommandCache(bot);
	let msg = await message.channel.send("reloading commands...")
	// parse args and test them
	try{
		// do the actual operation
		let numCmds = await bot.loadCommands()
		// update reply and log it
		let txt = `successfully reloaded ${numCmds} commands`;
		msg.edit(txt);
		log(txt,true)
	}
	catch(err){

		// if there is a problem, log it and inform the user
		log(err,true)
		let txt = `use the format ${exports.help.format}\n`+ err;
		msg.edit(txt);
	}
}