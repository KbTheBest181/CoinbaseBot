/*CMD
  command: 🎁 Bonus
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

function canRun(){
  var last_run_at = User.getProperty("last_run_at");
  if(!last_run_at){ return true }
  
  var minutes = (Date.now() - last_run_at) /1000/60;
  
 var minutes_in_day = 24 * 60
          var next = minutes_in_day - minutes
          var wait_hours = Math.floor(next / 60)
          next -= wait_hours * 60
          var wait_minutes = Math.floor(next)
          var seconds = Math.floor((next - wait_minutes) * 60)
          if (minutes < minutes_in_day) {
   Bot.sendMessage("🚫 *You have received your Bonus today!*\n\n_Come back again after:_\n⏱️ _"+wait_hours+"H "+wait_minutes+"M " 
 + seconds+ "S_" );
   return
 }
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_at", Date.now(), "integer");

let res = Libs.ResourcesLib.userRes("balance")
res.add(0.0000001)
Bot.sendMessage("⚡ *Today you received 0.0000001 BTC*\n\n_Come back tommorow and try again 🎁_")
