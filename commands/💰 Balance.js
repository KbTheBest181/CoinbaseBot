/*CMD
  command: 💰 Balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")

Bot.sendMessage("👤 User ["+user.telegramid+"](tg://user?id="+user.telegramid+")\n\n💰 Current Balance: *"+balance.value().toFixed(8)+" BTC*")
