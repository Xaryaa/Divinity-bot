module.exports = class raiderio {
  static match (message){
    return message.content.startsWith('!log')
  }
  
  static action (message){
    let args = message.content.split(' ')
    args.shift()
    message.reply('https://raider.io/characters/eu/archimonde/' + args.join('%20'))
  }
}
