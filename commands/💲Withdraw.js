/*CMD
  command: 💲Withdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var email = User.getProperty("email")

if(!email){
  Bot.runCommand("⚙️Set Email")
} else {
  Bot.runCommand("© Coinbase")
}
