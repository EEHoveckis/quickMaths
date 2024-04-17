const { prefix } = require("../config.json");

module.exports = function(client, stats) {
	client.once("ready", readyClient => {
		console.log(`Bot is Ready!`);
	});

	client.on("messageCreate", function(message) {
		if (!message.content.startsWith(prefix) || message.author.bot) return;
		const args = message.content.slice(prefix.length).split(/ +/);
		const commandName = args.shift().toLowerCase();
		const command = client.commands.get(commandName);
		if (!command) return embeds.noCommand(message, commandName);

		try {
			command.execute(client, message, args, stats);
		} catch (error) {
			console.error(error);
		}
	});
};
