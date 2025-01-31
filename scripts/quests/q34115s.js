/*     
 *
 *  功能：[消亡旅途]安息洞穴
 *

 */

npc.sayNext("#ho#，你醒了啊，啊……能掉在沙子上可真是萬幸啊……");
npc.sayNext("額，墜落時受的傷……沒，沒什麼，你不用放在心上，只要想一想該如何逃出這個洞穴吧。");
npc.sayNextS("（雖然卡奧的事很叫人放心不下，可眼下似乎也沒有空閒可以考慮這些了。）#k");
npc.sayNext("這裡是消亡旅途的終點站……安息洞穴，這個洞穴的盡頭與消亡旅途的盡頭相連，現在差不多快到頭了。");
let selection = npc.askYesNo("這地方雖然像迷路一般複雜……但我知道通往洞穴出口的捷徑，來，跟我走吧。");
if (selection == 1) {
    npc.sayNext("但是不用擔心，只要我也在這裡，就不會發生這種事的。");
    npc.startQuest();
    npc.completeQuest();
} else {
    npc.say("我們不能一直待在洞穴裡，我說這些倒不是為了讓#ho#惶恐不安……但這裡是那些消亡之物安息的地方……若是被這裡吞噬，便永世不得超生了。");
}