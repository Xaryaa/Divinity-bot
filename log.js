module.exports = class log {
  static match (message){
    return message.content.startsWith('!log')
  }
  
  static action (message){
    let args = message.content.split(' ')
    args.shift()
    message.reply('https://www.warcraftlogs.com/character/eu/archimonde/' + args.join('%20'))
  }
}
