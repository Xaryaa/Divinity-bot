const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('message', function(message){
	
	if (message.content === '!dk'){
		message.reply('Discord : https://bit.ly/2Lp0hgt')
		message.reply('Wowhead : https://www.wowhead.com/classes#deathknight')
	}
	
	if (message.content === '!dh'){
		message.reply('Discord : https://bit.ly/2uTFo2S && https://bit.ly/2Aoq2Zt')
		message.reply('Wowhead : https://www.wowhead.com/classes#demonhunter')
	}
	
	if (message.content === '!druide' || message.content === '!druid'){
		message.reply('Discord : https://bit.ly/2LBI1jr')
		message.reply('Wowhead : https://www.wowhead.com/classes#druid')
	}
	
	if (message.content === '!hunter' || message.content === '!chasseur' || message.content === '!hunt' || message.content === '!huntard'){
		message.reply('Discord : https://bit.ly/2AewDFy && https://bit.ly/2NPDMOG')
		message.reply('Wowhead : https://www.wowhead.com/classes#shaman')
	}
	
	if (message.content === '!mage'){
		message.reply('Discord : https://bit.ly/2uTyxGB')
		message.reply('Wowhead : https://www.wowhead.com/classes#mage')
	}
	
	if (message.content === '!monk' || message.content === '!moine'){
		message.reply('Discord : https://bit.ly/2uYPL5B &&  https://bit.ly/2NNs1rL')
		message.reply('Wowhead : https://www.wowhead.com/classes#monk')
	}
	
	if (message.content === '!paladin'){
		message.reply('Discord : https://bit.ly/2LDIn91')
		message.reply('Wowhead : https://www.wowhead.com/classes#paladin')
	}
	
	if (message.content === '!priest' || message.content === '!pretre'){
		message.reply('Discord : https://bit.ly/2N58vLG &&  https://bit.ly/2LtT7aU &&  https://bit.ly/2LMbo2F')
		message.reply('Wowhead : https://www.wowhead.com/classes#priest')
	}
	
	if (message.content === '!rogue' || message.content === '!voleur'){
		message.reply('Discord : http://urlz.fr/7OBA')
		message.reply('Wowhead : https://www.wowhead.com/classes#rogue')
	}
	
	if (message.content === '!shaman' || message.content === '!chaman' || message.content === '!sham' || message.content === '!cham'){
		message.reply('Discord : https://bit.ly/2AewDFy && https://bit.ly/2NPDMOG')
		message.reply('Wowhead : https://www.wowhead.com/classes#shaman')
	}
	
	if (message.content === '!warlock' || message.content === '!demoniste' || message.content === '!lock' || message.content === '!demo'){
		message.reply('Discord : https://bit.ly/2LEzBHX')
		message.reply('Wowhead : https://www.wowhead.com/classes#warlock')
	}
	
	if (message.content === '!warrior' || message.content === '!guerrier' || message.content === '!war'){
		message.reply('Discord : https://bit.ly/2O5U86l')
		message.reply('Wowhead : https://www.wowhead.com/classes#warrior')
	}
	
	if (message.content.startsWith('!log'){
		let args = message.content.split(' ')
		if (args.lenght > 1){
			message.reply('https://www.warcraftlogs.com/character/eu/archimonde/'+args[1])
		}
		else {
			message.reply('Entrez un pseudo')
		}	
	}
})

bot.login('NDkzMzQzMjgxNDY0MjEzNTE1.Do3zkQ.DJ0fPWzshWZHVW1f74Oaj-1QBUM')
