/*player.runScript("賽蓮獎勵");*/
if (player.getEventValue("綠水靈困難全員獎勵") >= 1) { }
else {
    /*let tt=party.getMembersCount(map.getId(), 1, 300);
    if (tt >=4){
    partycount = 1.5;
    } else {
    partycount = 1;
    }*/
    /*player.dropMessage(6,"隊伍人數 " + tt + " , 加成 " + partycount + "倍");*/
    player.addEventValue("綠水靈困難全員獎勵", 1, 1);
    player.gainItem(4032053, 100);
    player.gainItem(4001713, 25);
    player.gainItem(2633336, 1); //真實符文
    player.gainItem(4310260, 10);
    player.gainItem(5062503, 30);
    player.addEventValue("BOSS里程", 1, 3000);
    player.addEventValue("總BOSS里程", 1, 3000);
    modifyQuestPoint(3885, 80);
    player.showSystemMessage("獲得 [80] 創世強化點");
}
function getQuestPoint(questId) {
    return player.getIntQuestRecordEx(questId, "point");
}

function modifyQuestPoint(questId, num) {
    player.updateQuestRecordEx(questId, "point", String(getQuestPoint(questId) + num));
}
