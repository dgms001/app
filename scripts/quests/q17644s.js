//
// Quest ID:17644
// [凱梅爾茲共和國] 追擊！


npc.sayNextS("是因為是海盜,所以航海技術果然更勝一籌嗎?");
npc.sayNext("就是那樣。比起商船移動起來迅猛地多了。");
npc.sayNextS("看見普賽依的船了!!");
if (npc.askYesNo("普賽依果然出現了。準備好了嗎?")) {
    npc.startQuest();
    for (let i = 0; i < 45; i++) {
        map.spawnMob(9390815, -332 + i * 10, 198);
    }
    npc.sayNextNoEsc("海盜們從普賽依的船湧來了!!", 9390217);
    npc.sayNextNoEsc("好的,痛快地幹一場吧!!");
} else {
    npc.say("你在幹什麼呀。趕快準備啊。");
}

