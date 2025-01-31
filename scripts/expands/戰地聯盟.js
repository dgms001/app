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

/**
 *
 * @author dgms
 */

if (player.getJob() / 100 == 101 && player.getLevel() < 130 || player.getLevel() < 60) { // isZero
    npc.say("你好，#b勇士#k~見到你很高興~，你現在的能力還不夠使用<楓之谷聯盟>！");
} else {
    if (!player.isQuestCompleted(16013)) {
        player.completeQuest(16013, 0);
        player.actionMapleUnion();
        npc.say("你好，#b勇士#k~見到你很高興~你現在可以開始使用<楓之谷聯盟>啦！");
    } else {
        //let sel = npc.askMenu("今天可是個適合去屠龍的好日子！\r\n關於#b楓之谷聯盟#k的工作，有什麼我可以幫忙的嗎？\r\n#L0##b<查看我的楓之谷聯盟信息。>#l\r\n#L1##b<提升楓之谷聯盟級別。>#l\r\n#L2##b<了解有關楓之谷聯盟的說明。>#k#l\r\n#L3##b<每周獲得聯盟幣排名>#k#l");
        let sel = npc.askMenuA("今天可是個適合去屠龍的好日子！\r\n關於#b楓之谷聯盟#k的工作，有什麼我可以幫忙的嗎？\r\n#L0##b 查看我的楓之谷聯盟資訊#l\r\n#L1##b 提升楓之谷聯盟等級#k#l", 9010106);
        switch (sel) {
            case 0:
                player.openUI(1148);
                break;
            case 1:
                let nowRank = player.getNowMapleUnionRank();
                let nextRank = player.getNextMapleUnionRank();
                let nRank = player.getMapleUnionNextLevel();
                if (nowRank != null && nextRank != null) {
                    let str = "你想要使#e楓之谷聯盟#n升級嗎？\r\n\r\n#e目前等級：#n#b#e<" + nowRank + ">#n#k\r\n#e下個等級：#n#b#e<" + nextRank + ">#n#k\r\n\r\n要升級的話必須達成以下條件：\r\n\r\n#e<聯盟等級> #r#e" + nRank + " 以上#n#k #n#k";
                    str += "\r\n\r\n現在就要對楓之谷聯盟進行#e升級#n嗎？";
                    let ret = npc.askYesNo(str);
                    if (ret == 1) {
                        var nRank = player.getMapleUnionNextLevel();
                        if (player.getMapleUnionLevel() >= nRank) {
                            if (player.doMapleUnionLevelUp()) { //還需要判斷時有足夠聯盟幣 
                                //var newRank = qm.getMapleUnionRank();
                                //qm.sendOk("恭喜你！，現在的楓之谷聯盟等級提高了，#e當前級別：#n#b#e<" + newRank.toString() + ">#n#k");
                                npc.say("恭喜你！，現在的楓之谷聯盟等級提高了#k");
                            } else {
                                npc.say("當前楓之谷聯盟已經達到最高等級！");
                            }
                        } else {
                            if (nRank != 0xFFFFFFFF) {
                                npc.say("升級失敗，請確認是否達到了#n#b<聯盟等級>#e" + nRank + "#n#k");
                            } else {
                                npc.say("當前楓之谷聯盟已經達到最高等級！");
                            }

                        }
                    }
                } else {
                    npc.say("你好，#b勇士#k~你的<楓之谷聯盟>已經不能在升級了！");
                }
                break;
        }
    }
}