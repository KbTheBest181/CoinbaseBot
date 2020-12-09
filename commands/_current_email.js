/*CMD
  command: /current_email
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ⚙️set email
CMD*/

var email = User.getProperty("email")
var change = [
[{title:"Set/Change",command:"/setChangeMail"}]
]

if(!email){
  Bot.sendInlineKeyboard(change,"📧 *Current Coinbase Email:*\nnone\n\n⚠️ _You must set Coinbase Email for receive Payment or you can't withdraw anything from this bot!_")
} else {
  Bot.sendInlineKeyboard(change,"📧 *Current Coinbase Email:*\n"+email+"\n\n⚠️ _You must set Coinbase Email for receive Payment or you can't withdraw anything from this bot!_")
}
