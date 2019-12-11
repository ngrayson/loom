// avatar.js
module.exports.run = async(bot, message, args) => {
	let msg = await message.channel.send("generating avatar...")

	await message.channel.send({files: [
		{
			attachment: message.author.displayAvatarURL,
			name: "avatar.png"
		}
	]})

	msg.delete();
}

module.exports.help = {
	name: 'avatar'
}

module.exports.permissions = {
	admin: true,
	dm: true,
	player: true
}