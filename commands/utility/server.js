module.exports = {
	name: "server",
	description: "Provides information about the server.",
	execute(client, message, args) {
		message.channel.send(`This server is ${message.guild.name} and has ${message.guild.memberCount} members.`);
	},
};
