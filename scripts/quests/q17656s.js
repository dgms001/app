// 
// Quest ID:17656
// [凱梅爾茲共和國] 與狼共舞（1）


npc.sayNext("即使知道了我是誰好像也不能改變各位的處境啊。");
npc.sayNextS("雖然是那樣,但也得搞清楚是誰幫助了我們呀,不是嗎。");
npc.sayNext("那就這樣吧。如果你告訴我你是誰,我給你雙倍的謝禮。", 9390202);
npc.sayNext("吼哦..那可真是很有吸引力哦。可是你現在有能力支付那筆金額嗎?");
npc.sayNext("呃..其實現在眼前是有點困難..好像只能給你一半的金額。", 9390202);
npc.sayNext("好吧。其實我是...");
if (npc.askYesNoS("等會!!我感到這附近有很重的殺氣!是狼群!快做好準備!!")) {
    npc.startQuest();
    npc.sayNext("這裡有狼群??先趕緊消滅掉吧!得把女性的安全放在第一位!", 9390202);
} else {
    npc.say("在幹嘛呢?現在還有什麼這理由那理由的!趕快準備啊!", 9390202);
}