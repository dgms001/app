/**
 *
 *
 */

if (player.getJob() / 100 == 101 && player.getLevel() < 130 || player.getLevel() < 60) {// isZero
    npc.say("你好，#b勇士#k~見到你很高興~，你現在的能力還不夠使用<冒險島聯盟>！");
} else {
    if (!player.isQuestCompleted(16013)) {
        player.completeQuest(16013, 0);
        player.actionMapleUnion();
        npc.say("你好，#b勇士#k~見到你很高興~你現在可以開始使用<冒險島聯盟>啦！");
    } else {
        let sel = npc.askMenu("今天可是個適合去屠龍的好日子！\r\n關於#b冒險島聯盟#k的工作，有什麼我可以幫忙的嗎？\r\n\r\n\r\n#L0##b<檢視我的冒險島聯盟資訊。>#l\r\n#L1##b<提升冒險島聯盟級別。>#l\r\n#L2##b<瞭解有關冒險島聯盟的說明。>#k#l\r\n#L3##b<每週獲得聯盟幣排名>#k#l");
        switch (sel) {
            case 0:
                player.openUI(1148);
                break;
            case 1:
                let nowRank = player.getNowMapleUnionRank();
                let nextRank = player.getNextMapleUnionRank();
                if (nowRank != null && nextRank != null) {
                    let str = player.getMapleUnionUpdateDec();
                    str += "\r\n\r\n現在就要對冒險島聯盟進行#e升級#n嗎？";
                    let ret = npc.askYesNo(str);
                    if (ret == 1) {
                        var nRank = player.getMapleUnionNextLevel();
                        if (player.getMapleUnionLevel() >= nRank) {
                            if (player.doMapleUnionLevelUp()) {//還需要判斷時有足夠聯盟幣
                                //var newRank = qm.getMapleUnionRank();
                                //qm.sendOk("恭喜你！，現在的冒險島聯盟等級提高了，#e當前級別：#n#b#e<" + newRank.toString() + ">#n#k");
                                npc.say("恭喜你！，現在的冒險島聯盟等級提高了#k");
                            } else {
                                npc.say("當前冒險島聯盟已經達到最高等級！");
                            }
                        } else {
                            if (nRank != 0xFFFFFFFF) {
                                npc.say("升級失敗，請確認是否達到了#n#b<聯盟等級>#e" + nRank + "#n#k");
                            } else {
                                npc.say("當前冒險島聯盟已經達到最高等級！");
                            }

                        }
                    }
                } else {
                    npc.say("你好，#b勇士#k~你的<冒險島聯盟>已經不能在升級了！");
                }
                break;
        }
    }
}

