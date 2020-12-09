/*CMD
  command: stats
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 📊 statistics
CMD*/

var all = Bot.getProperty("total_member_bot","0")*1
var server = Libs.DateTimeFormat.format(new Date(), "dd/m/yyyy h:M:s T")+"M"
var wid = Libs.ResourcesLib.userRes("wid")
let tota = Libs.ResourcesLib.anotherChatRes("tota", "global")
//var totWD = Libs.ResourcesLib.anotherUserRes("totWD")
Bot.sendMessage("*📊 Total Users :* "+tota.value()+" Users\n\n🕑 Server Time :* \n     "+server+"*")



//Bot.sendMessage(tota.value())

