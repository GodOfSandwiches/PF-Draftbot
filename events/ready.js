const { Events } = require('discord.js');

///send a message to log when bot is online and ready for inputs

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};