/*CMD
  command: broadcast message
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Message - 
  keyboard: 
  aliases: 
CMD*/

let msg = "💌 Admin Message : \n\n" + message
if (user.telegramid == 1043729713 | user.telegramid == 631985341){
Bot.sendMessageToAllPrivateChats(msg)
Bot.sendMessage("✅Message sent to all active members")
}else{
Bot.sendMessage("Not Admin")
}
