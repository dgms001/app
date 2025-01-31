//
// Quest ID:17672
// [凱梅爾茲共和國] 洗脫嫌疑


npc.sayNextE("您好嗎。首領。我有話對您說。", true);
npc.sayNextE("你這些傢伙還有什麼臉面到這地方來啊!", 9390206);
npc.sayNextE("你有什麼想說的?");
npc.sayNextE("吉爾伯特首領,沒有必要聽他的。還不趕緊逮捕他們,幹嘛呢。", 9390206);
if (npc.askYesNoE("就算該抓的時候就抓,先聽聽他們說什麼有何不妥。你說說什麼事情?")) {
    npc.sayNextE("西溫一開始實際上並沒死，他是在裝死。", true);
    npc.sayNextE("他是裝死？");
    npc.sayNextE("是的，這都是為了孤立凱梅爾茲共和國而計劃的陰謀。", true);
    npc.sayNextE("孤立的陰謀？");
    npc.sayNextE("是的，對外說海本王國提出了和約，但是凱梅爾茲反對，還殺死了使節團。最終，凱梅爾茲共和國就會被冒險島世界的各個地方責難和孤立。", true);
    npc.sayNextE("那是什麼荒唐的陰謀論啊!", 9390206);
    npc.sayNextE("呃嗯...那叫西溫的人現在在哪?");
    npc.sayNextE("雖已成功抓捕.. 但最終又被海本的暗殺者殺死了。", true);
    npc.sayNextE("那麼你的意思是現在是真的死了嗎?");
    npc.sayNextE("是的,是那樣的。", true);
    npc.sayNextE("這種謊話王!毫無證據空口無憑來騙我", 9390206);
    npc.startQuest();
} else {
    npc.sayE("再無話可說的話我就只能把你抓起來..?");
}