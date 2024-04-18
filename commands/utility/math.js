const { evaluate } = require("mathjs");
const { questions } = require("../../modules/mathQuestions.js");

module.exports = {
	name: "math",
	description: "Start Math Game",
	execute(client, message, args, stats) {
		let highscore;
		(async function() {
			await stats.findOne({ userID: message.author.id }).then(user => {
				highscore = user.highscore;
			});
		})();

		const collectorFilter = m => m.author.id == message.author.id;
		let points = 0;
		let answer = 0;

		function run() {
			let i = Math.floor(Math.random() * 11) + 0; //0 to 10 inclusive
			let a = Math.floor(Math.random() * 10) + 1; //1 to 10 inclusive
			let b = Math.floor(Math.random() * 10) + 1; //1 to 10 inclusive
			let questionToSend = questions[i].replace(/a/g, a).replace(/b/g, b);
			answer = evaluate(questionToSend);

			message.channel.send(questionToSend);
		}
		run();
		const collector = message.channel.createMessageCollector({ filter: collectorFilter, time: 15000 });
		collector.on('collect', m => {
			if (m.content == answer) {
				m.react("✅");
				points += 10;
				collector.resetTimer();
				run();
			} else if (m.content == "STOP") {
				collector.stop();
			} else {
				m.react("❌");
				run();
				collector.resetTimer();
			}
		});

		collector.on("end", m => {
			message.channel.send(`You got ${points} points! Good Job!`);
			if (points > highscore) {
				message.channel.send("NEW RECORD!!!");
				(async function() {
					await stats.updateOne({ userID: message.author.id }, { $set: { highscore: points } });
				})();
			}
		});
	},
}
