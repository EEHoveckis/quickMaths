const { evaluate } = require("mathjs");
const generateQuestion = require("../../modules/generateQuestion.js");

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
			let i = Math.floor(Math.random() * 20); //0 to 10 inclusive
			let questionToSend = generateQuestion(i);
			answer = evaluate(questionToSend);
			if (answer == "NaN") answer = 0;
			//console.log(`${questionToSend} = ${answer}`);

			message.channel.send(questionToSend);
		}
		run();
		const collector = message.channel.createMessageCollector({ filter: collectorFilter, time: 30000 });
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
