/* global npc, player, map */

if (player.getLevel() >= 50) {
    let sel = npc.askMenu("哦......很好。看來你們已經完全具備了資格。你們打算做什麼呢? \r\n#b#L0#去調查廢礦洞穴。#l\r\n#b#L1#探察扎昆副本。#l\r\n#b#L2#領取要獻給扎昆的祭品。#l\r\n#b#L3#移動到冰峰雪域。#l");
    switch (sel) {
        case 0:
            npc.sayNext("任務已關閉。");
            break;
        case 1:
            npc.sayNext("很好!現在開始，你們將會移動到充滿許多艱難險阻的地圖。祝你們好運!!");
            player.changeMap(280020000);
            break;
        case 2:
            let mode = npc.askMenu("你需要把祭品獻給哪個扎昆呢? \r\n#b#L0#簡單扎昆#l\r\n#L1#普通/進階扎昆#l");
            let itemId = mode == 0 ? 4001796 : 4001017;
            if (player.hasItem(itemId, 1)) {
                npc.sayNext("你已經擁有要獻給簡單扎昆的祭品#b#t" + itemId + "##k了啊......等你用完了再來告訴我吧。");
            } else {
                if (mode == 0) {
                    npc.sayNext("不過, 我有很多在召喚扎昆時所需的祭品--#b#t4001796##k, 所以就給你一些吧。");
                } else {
                    npc.sayNext("不過, 我所擁有的可在召喚普通/進階扎昆時使用的祭品--#b#t4001017##k並不是很多, 就這麼給你的話有點......");
                }
                if (player.canGainItem(itemId, 1)) {
                    player.gainItem(itemId, 1);
                    npc.say("你把這個放入簡單扎昆的祭壇中, 就可以了。");
                } else {
                    npc.sayNext("請清理下你的揹包。");
                }
            }
            break;
        case 3:
            npc.sayNext("那麼, 讓我來送你去冰峰雪域吧。");
            npc.sayNext("如過你想再次來到這裡，那就請和冰峰雪域的長老對話吧。");
            player.changeMap(211000000, 0);
            break;
    }

} else {
    npc.sayNext("按照你目前的情況，你還不能滿足進行這項任務的能力，當你變的強大的時候，再來找我吧！");
}