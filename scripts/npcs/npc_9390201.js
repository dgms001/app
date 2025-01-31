// 
// [村長貝里]  |  [9390201]
// MapName:貝里


let selection = npc.askMenu("什麼事?\r\n#b\r\n#L0# 說關於捕魚的事情。#l\r\n#L1# 說關於凱梅爾茲共和國的事情。#l");
if (selection == 0) {
    if (!"1".equals(player.getQuestEntryData(17910))) {
        player.setQuestData(17910, "1"); //Quest Name:[任務]跟村長貝里談起抓魚的事
    }
    npc.sayNext("雖然這裡只是偏僻的小漁村,但我們村子裡的人捕到的魚都是最好的。你面前的都是純收益呢。");
} else if (selection == 1) {
    npc.sayNext("這裡就是凱梅爾茲共和國。從這裡沿著東南海岸下去,就能看到首都 #e#b桑凱梅爾茲#k#n了。");
    npc.say("桑凱梅爾茲是凱梅爾茲全境首屈一指的城市。從一箇小小的漁村成長為現在這麼一箇大城市，這都是多虧了吉爾伯特·達尼爾拉首領。多虧了他，像我這樣的漁夫也能高價出售魚肉，我真是感激不盡啊。");
}