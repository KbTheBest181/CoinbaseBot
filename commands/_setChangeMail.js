/*CMD
  command: /setChangeMail
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 📧 Send me your new email:
  keyboard: 
  aliases: 
CMD*/

User.setProperty("email",message,"text")

Bot.sendMessage("📧 Email Set to:\n<email>")
