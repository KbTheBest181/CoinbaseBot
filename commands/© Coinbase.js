/*CMD
  command: © Coinbase
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var btc = Libs.ResourcesLib.userRes("balance")

if(btc.value()>0.0000005){
  Bot.sendMessage("💰 *You have "+btc.value().toFixed(8)+" BTC*")
  Bot.runCommand("© Coinbase2")
} else {
  Bot.sendMessage("❌ You don't have sufficient BTC to withdraw!\n\n💳 Minimum: *0.000005 BTC*")
}
