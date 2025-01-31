/*
 * NeroMS MapleStory server emulator written in Java
 * Copyright (C) 2017-2018  dgms
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**技術村-採礦
 * 
 * @author dgms
 */

let selStr = "我是採礦達人 #b諾布#k，找我有事嗎？\r\n\r\n";
if (player.getMakingSkillLevel(92010000) > 0) {
    selStr += "#L2##b提升#e採礦#n等級。#l\r\n#L4##b交換#t4011010#。#k#l";//#L3#採礦初始化。#k#l\r\n
} else {
    selStr += "#L0##b聽取有關#e採礦#n的說明。#l\r\n#L1#學習#e採礦#n。#k#l";
}
let sel = npc.askMenu(selStr);
switch (sel) {
    case 0:
        npc.sayNext("採礦是用十字鎬之類的工具，採集地圖上的礦石的技能。採集到的礦石，可以用#p9031007#出售的鐵砧進行冶煉，獲得裝備、飾品、煉金術所需的材料。");
        break;
    case 1:
        if (player.getLevel() < 30) {
            npc.say("小毛孩！你還不夠強，還不能學習專業技術。#b至少必須達到30級2轉以上，龍神必須3轉以上，暗影雙刀必須2轉+以上#k，才能學習專業技術。等達到條件之後再來找我吧。");
        } else if (player.getMakingSkillLevel(92010000) > 0) {
            npc.say("你已經學些過#e採礦#n，難道還想學？");
        } else if (!player.isQuestCompleted(3199)) {
            npc.say("你對採礦感興趣嗎？想學的話，必須先去見見#b希梅爾#k～在村子入口處就能見到希梅爾了。");
        } else if (getMakingSkillSize() > 2) {
            npc.say("嗯，你好像已經學習了3種專業技術。真想學習的話，就必須先放棄一種技術。");
        } else {
            let ret = npc.askYesNo("學習#b採礦#k。確定要進行學習嗎？需要#b5000金幣#k的費用。這些錢你應該有的吧？#b");
            if (ret == 1) {
                if (player.hasMesos(5000)) {
                    player.loseMesos(5000);
                    player.setSkillLevel(92010000, 0x1000000, 10, false);
                    player.soundEffect("profession/levelup");
                    player.showAvatarOriented("Effect/OnUserEff.img/professions/equip_product_levelup");
                    npc.say("好了，我已經把採礦的基本知識傳授給你了。熟練度積滿後提升至下一等級，就可以學習新的內容。等你積滿熟練度後，再來找我吧。");
                } else {
                    npc.say("你的錢不夠啊。想要學習的話，需要#b5000金幣#k才行。這可是規矩。");
                }
            } else {
                npc.say("你還挺謹慎啊。好吧，想清楚後再來找我吧。");
            }
        }
        break;
    case 2:
        if (player.checkMakingSkillExpFull(92010000)) {
            let ret = npc.askYesNo("你的熟練度積滿了呀，現在是否要提升至下一等級，學習新的內容？");
            if (ret == 1) {
                let nLevel = Math.min(10, player.getMakingSkillLevel(92010000) + 1);
                player.setSkillLevel(92010000, nLevel << 24, 10, false);
                player.soundEffect("profession/levelup");
                player.showAvatarOriented("Effect/OnUserEff.img/professions/equip_product_levelup");
                npc.sayNext("好了，我已經幫你提升了採礦等級。熟練度積滿後可再提升至下一等級，就可以學習新的內容。等你積滿熟練度後，再來找我吧。");
            } else {
                npc.sayNext("看來你很慎重。好的，你先仔細考慮一下，然後再來找我。");
            }
        } else {
            npc.sayNext("哎呀！你可真貪心。熟練度還不夠。你再去練習練習吧。");
        }
        break;
    case 3:
        if (player.getMakingSkillLevel(92020000) > 0) {
            npc.sayNext("你學習了裝備制作，現在無法初始化。真想初始化的話，就得先對裝備制作或飾品制作進行初始化。");
        } else {
            let ret = npc.askYesNo("你想放棄#e採礦#n？是厭倦了嗎？之前積累的等級和熟練度……付出的努力和金錢……都將會變成泡影……你真的要初始化嗎？");
            if (ret == 1) {
                player.setSkillLevel(92010000, -1, -1, false);
                if (player.isQuestStarted(3197)) {
                    player.forfeitQuest(3197);
                }
                if (player.isQuestStarted(3198)) {
                    player.forfeitQuest(3198);
                }
                npc.sayNext("採礦技術已經初始化。如果想重新學習，請再來找我。");
            } else {
                npc.sayNext("看來你很慎重。好的，你先仔細考慮一下，然後再來找我。");
            }
        }
        break;
    case 4:
        if (!player.hasItem(4011010, 100)) {
            npc.say("#b#t4011010#100個#k可以交換#i2028067:##b#t2028067#1個#k。請再去搜集一些#t4011010#。");
        } else if (!player.canGainItem(2028067, 1)) {
            npc.say("背包空間不足。");
        } else {
            player.loseItem(4011010, 100);
            player.gainItem(2028067, 1);
            npc.say("兌換成功.");
        }
        break;
}


function getMakingSkillSize() {
    let ret = 0;
    for (let i = 9200; i <= 9204; i++) {
        if (player.getMakingSkillLevel(i * 10000) > 0) {
            ret++;
        }
    }
    return ret;
} 