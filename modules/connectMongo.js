const { MongoClient } = require("mongodb");
const { mongoPass } = require("../config.json");

module.exports = async function() {
	const client = new MongoClient(mongoPass);
	try {
		const database = client.db("quickMaths");
		const stats = database.collection("stats");
		return stats;
	} catch (error) {
		console.log(error);
	}
};
