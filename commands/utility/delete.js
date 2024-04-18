module.exports = {
	name: "delete",
	description: "Deletes 100 messages",
	execute(client, message) {
		message.channel.bulkDelete(100)
			.then(messages => console.log(`Deleted ${messages.size} messages`))
			.catch(console.error);
	}
}
