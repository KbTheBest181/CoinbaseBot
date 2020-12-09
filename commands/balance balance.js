/*CMD
  command: balance balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("balance")
res.add(1)
Bot.sendMessage("⚡ *Today you received 1 BTC*\n\n_Come back tommorow and try again 🎁_")
