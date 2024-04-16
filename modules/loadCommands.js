const fs = require("fs");
const path = require("path");
const { Collection } = require("discord.js");

module.exports = function(client) {
	client.commands = new Collection();

	const foldersPath = path.join(__dirname, "../commands");
	const commandFolders = fs.readdirSync(foldersPath);

	for (const folder of commandFolders) {
		const commandsPath = path.join(foldersPath, folder);
		const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));
		for (const file of commandFiles) {
			const filePath = path.join(commandsPath, file);
			const command = require(filePath);
			client.commands.set(command.name, command);
		}
	}
};
