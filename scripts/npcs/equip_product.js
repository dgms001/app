/**
 *
 *
 */

let selStr = "我是裝備製作達人#b埃珅#k。找我有事嗎？\r\n";
if (player.getMakingSkillLevel(92020000) > 0) {
    selStr += "#k#l\r\n#L2##b提升#e裝備製作#n等級。#l\r\n#L3#裝備製作技術初始化。#k#l";
} else {
    selStr += "#L0##b聽取有關#e裝備製作#n的說明。#l\r\n#L1#學習#e裝備製作#n技術。#k#l";
}
let sel = npc.askMenu(selStr);
switch (sel) {
    case 0:
        npc.sayNext("裝備製作是用採礦提煉好的礦物或寶石，在巨大的熔爐裡融化，製作成自己需要的防具或武器的技術。只要在我這裡學會了裝備製作技術，就可以製作出以前從未見過的武器和防具。");
        break;
    case 1:
        if (player.getLevel() < 30) {
            npc.say("哎呀……你好像還不夠強，還不能學些專業技術。#b至少必須達到30級2轉以上，龍神必須3轉以上，暗影雙刀必須2轉+以上#k，才能學習專業技術。等達到條件之後再來找我吧。");
        } else if (player.getMakingSkillLevel(92020000) > 0) {
            npc.say("你已經學些過#e裝備製作#n，難道還想學？");
            // } else if (!player.isQuestCompleted(3199)) {
            //     npc.say("你對裝備製作感興趣嗎？想學的話，必須先去見見#b希梅爾#k～在村子入口處就能見到希梅爾了。");
        } else if (getMakingSkillSize() > 0) {
            npc.say("嗯，你好像已經學習了其他的製作技術。真想學習的話，就必須先放棄當前的製作技術。");
        } else if (player.getMakingSkillLevel(92010000) <= 0) {
            npc.say("沒學習採礦的人，是無法學習裝備製作的。沒有材料的話，就不可能堅持下去……你先到旁邊的採礦大師#b諾布#k那裡去學習採礦吧。");
        } else {
            let ret = npc.askYesNo("你真的要學習#b裝備製作#k嗎？\r\n學費是#b5000金幣#k。\r\n#b");
            if (ret == 1) {
                if (player.hasMesos(5000)) {
                    player.loseMesos(5000);
                    player.setSkillLevel(92020000, 0x1000000, 10, false);
                    player.soundEffect("profession/levelup");
                    player.showAvatarOriented("Effect/OnUserEff.img/professions/equip_product_levelup");
                    npc.say("好！非常好！太棒了！！好了～我已經把裝備製作知識全部傳授給你了。熟練度滿了之後，可以提升裝備製作等級。別忘了到時再來找我。");
                } else {
                    npc.say("你的錢不夠啊。想要學習的話，需要#b5000金幣#k才行。這可是規矩。");
                }
            } else {
                npc.say("什麼！！！裝備製作是非常有用的技術。這都還要考慮？你也太慎重了吧？");
            }
        }
        break;
    case 2:
        if (player.getMakingSkillLevel(92020000) >= 12) {
            npc.sayNext("你已經達到最高等級了，不需要在提升了！");
        } else if (player.checkMakingSkillExpFull(92020000)) {
            let ret = npc.askYesNo("你的熟練度積滿了呀，現在是否要提升至下一等級，學習新的內容？");
            if (ret == 1) {
                let nLevel = Math.min(12, player.getMakingSkillLevel(92020000) + 1);
                player.setSkillLevel(92020000, nLevel << 24, 12, false);
                player.soundEffect("profession/levelup");
                player.showAvatarOriented("Effect/OnUserEff.img/professions/equip_product_levelup");
                npc.sayNext("好了，我已經幫你提升了裝備製作等級。熟練度積滿後可再提升至下一等級，就可以學習新的內容。等你積滿熟練度後，再來找我吧。");
            } else {
                npc.sayNext("看來你很慎重。好的，你先仔細考慮一下，然後再來找我。");
            }
        } else {
            npc.sayNext("哎呀！你可真貪心。熟練度還不夠。你再去練習練習吧。");
        }
        break;
    case 3:
        let ret = npc.askYesNo("你想放棄裝備製作？是厭倦了嗎？之前積累的等級和熟練度……付出的努力和金錢……都將會變成泡影……你真的要初始化嗎？");
        if (ret == 1) {
            player.setSkillLevel(92020000, -1, -1, false);
            player.checkMakingSkillEff();
            npc.sayNext("全部初始化了……真可惜。如果你想重新學習的話，可以隨時來找我。");
        } else {
            npc.sayNext("看來你很慎重。好的，你先仔細考慮一下，然後再來找我。");
        }
        break;
}

function getMakingSkillSize() {
    let ret = 0;
    for (let i = 9202; i <= 9204; i++) {
        if (player.getMakingSkillLevel(i * 10000) > 0) {
            ret++;
        }
    }
    return ret;
} 