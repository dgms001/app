// 
// Quest ID:17630
// [凱梅爾茲共和國] 擊退阿庫旁多（5）


npc.sayNextE("那是... 什麼?");
npc.sayNextE("嗯?這些該死的阿庫旁多們!", true);
npc.sayNextE("數量真是驚人。那後面又是什麼啊。");
npc.sayNextE("就是說,是些見都沒見過,聽都沒聽過的傢伙。雖然看模樣好像很普通。", true);
npc.sayNextE("這些傢伙。欺負我們種族的傢伙們。", 9390208);
npc.sayNextE("你是誰?欺負這詞用得很奇怪!是你們一直在襲擊我們商團啊。", true);
npc.sayNextE("我是江河之子。襲擊你們是對你們惡行的懲罰。", 9390208);
npc.sayNextE("你說惡行?我們做了什麼,為什麼你要這麼說?", true);
if (npc.askYesNoE("你應該很清楚。我應該不用再跟你浪費口舌了吧。", 9390208)) {
    // Response is Yes
    npc.startQuest();
    npc.makeEvent("berry_quest", false, [player, [865020051]]);
} else {
    // Response is No
    npc.sayE("這是在幹嘛。反正現在已經沒有退路了。");
}
