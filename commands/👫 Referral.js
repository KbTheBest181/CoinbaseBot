/*CMD
  command: 👫 Referral
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban*");
}else{

let res = Libs.ResourcesLib.userRes("referral");
let reflink=Libs.ReferralLib.currentUser.getRefLink(bot.name,"Bot");
let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
var conRef= Libs.ResourcesLib.userRes("conRef")
Bot.sendMessage("👤 Your Referral Link\n\n📌 Your Total Referrals = "+refList.length+"\n\n🃏 Total Confirmed referrals - "+conRef.value().toFixed(0)+"\n\n🎁 Invite your friends and get a bonus of 0.0000001 BTC\n\n✨ Your Referral Link : \n"+reflink+"\n\nYour referral must be a member of our channel to get your bonus");

}
