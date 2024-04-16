module.exports = {
	name: "user",
	description: "Provides information about the user.",
	execute(client, message, args) {
		message.channel.send(`This command was run by ${message.author.username}, who joined on ${message.member.joinedAt}.`);
	},
};
