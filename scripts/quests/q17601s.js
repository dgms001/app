// 
// Quest ID:17601
// [凱梅爾茲共和國] 以女皇的名義


npc.sayNextE("我正在等你。這麼突然地把#e#b#h0##k#n\r\n叫來，我很抱歉。但是這件事非常重要。#h0#，你聽說過叫凱梅爾茲的地方嗎？", 1540450);
npc.sayNextE("從很久以前開始，凱梅爾茲就是個小漁村。只是偶爾和冒險島世界有往來。但是，最近凱梅爾茲派出了大型的交易船在冒險島世界各地進行交易，自稱是[凱梅爾茲共和國]。凱梅爾茲的商船已經在明珠港等冒險島世界各地進行來往。", 1540450);
npc.sayNextE("#face0#我作為冒險島世界的女皇，不能不考慮這樣迅速成長的凱梅爾茲對我們會產生什麼影響。如果我們能和他們建立良好的關係，那我們就能獲得一箇一起建設冒險島世界未來的可靠友軍。但是，如果凱梅爾茲和冒險島聯盟敵對，站到黑魔法師的那邊……雖然我不希望發生這種事，但這將成為我們的巨大威脅。", 1540450);
if (npc.askYesNoE("#face0##h0#，我需要你的幫助。你是我最信任的勇士。而且，你比誰都更加珍惜冒險島世界。請你去凱梅爾茲，向他們傳達我的意思。冒險島世界希望和凱梅爾茲結成友好的關係，並且希望今後能夠一直進行合作……你能幫我吧？", 1540450)) {
    // Response is Yes
    npc.sayNextE("#face2#謝謝你。我想你肯定會答應的。", 1540450);
    npc.sayNextE("我已經拜託南哈特為你準備一切。希望你一切順利。", 1540450);
    npc.completeQuest();
    player.gainExp(556227);
} else {
    npc.sayE("#face0#這可能是冒險島世界的新危機,請不要拒絕。 ", 1540450);
}