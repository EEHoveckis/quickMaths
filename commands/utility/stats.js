module.exports = {
	name: "stats",
	description: "Retrieve your stats!",
	execute(client, message, args, stats) {
		(async function() {
			await stats.findOne({ userID: message.author.id }).then(user => {
				message.channel.send(`\`\`\`\nUserID: ${user.userID}\nUsername: ${user.username}\nPoints: ${user.points}\`\`\``);
			});
		})();
	},
}
