module.exports = class armory {
  static match (message){
    return message.content.startsWith('!armory')
  }
  
  static action (message){
    let args = message.content.split(' ')
    args.shift()
    message.reply('https://worldofwarcraft.com/en-gb/character/archimonde/' + args.join('%20'))
  }
}
