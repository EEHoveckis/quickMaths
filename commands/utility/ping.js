module.exports = {
	name: "ping",
	description: "Replies with Pong!",
	execute(client, message, args) {
		message.channel.send("Pong!");
	},
};
