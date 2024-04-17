const eventsHandler = require("./modules/eventsHandler.js");
const loadCommands = require("./modules/loadCommands.js");
const connectMongo = require("./modules/connectMongo.js");
const { Client, Events, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers] });

connectMongo().then(stats => {
	eventsHandler(client, stats);
	loadCommands(client);
});

client.login(token);
