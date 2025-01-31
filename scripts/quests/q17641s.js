// 
// Quest ID:17641
// [凱梅爾茲共和國] 遠征隊起航


npc.sayNext("搞什麼。怎麼這麼遲才來。");
npc.sayNextS("啊,對不起,出了點小事。");
if (npc.askYesNo("小事兒?嗯,算了。趕緊上船吧。都準備好了吧?這次離開很長時間回不來的,需要的東西可都帶齊了。")) {
    // Response is Yes
    npc.sayNextE("好了,我作為船長有事要處理就先進去了。");
    npc.startQuest();
    npc.sayNextE("沒問題。去吧。", true);
    npc.sayNextE("喔啦啦,這真巧啊。", 9390204);
    npc.sayNextE("............", true);
} else {
    npc.say("還沒有準備好嗎?那麼再去準備準備再來吧。");
}