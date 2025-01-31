// 
// [貿易專家]  |  [9390220]
// MapName:交易所


let lastCoin = player.getIntQuestRecordEx(17012, "base_coin");
let income = player.getIntQuestRecordEx(17012, "base_income");
let done = "1".equals(player.getQuestRecordEx(17011, "S"));
let gain = done ? lastCoin + income : lastCoin;

if (player.isQuestCompleted(17004) && !player.isQuestCompleted(17007) && !player.hasItem(4310100, 1)) {
    npc.sayNext("貌似你在沒有完成引導任務的狀態下就把硬幣給扔了呢.唉..拿著，別再丟了");
    npc.sayNext("把硬幣丟了就不能正常貿易了,以後要注意啊.");
    if (player.gainItem(4310100, 10)) {
        npc.say("已發放了缺少的硬幣,開啟物品欄確認吧");
    } else {
        npc.sayNext("揹包空間不足，無法獲得金幣，請清理揹包其他欄！");
    }
} else if (!player.isQuestCompleted(17007)) {
    npc.say("只有完成了教程任務,才能進行交易!");
} else {
    let sel = npc.askMenu("你好, #e#b#h0##k#n。歡迎來到凱梅爾茲交易所。\r\n#b\r\n#L0#進行貿易。#l#b\r\n#L1#個人回生系統#l#b\r\n#L3#手動充能艦船能量#l#b\r\n#L4#手動補充貿易品#l");
    switch (sel) {
        case 0:

            if (income > 0) {
                if (done) {
                    npc.sayNext("最近,你透過交易所獲得的金幣是 #b#e" + gain + "#k#n個。");
                } else {
                    npc.sayNext("上次貿易沒有順利完成,我可以返還給你貨物的金幣,但是貨物不會給你。");
                }
                let ret = npc.askYesNo("你現在要領取金幣嗎?");
                if (ret == 1) {
                    if (player.gainItem(4310100, gain)) {
                        player.updateQuestRecordEx(17012, "base_coin", "0");
                        player.updateQuestRecordEx(17012, "base_income", "0");
                        npc.sayNext("獲得了金幣 #b#e" + gain + "#k#n個。");
                    } else {
                        npc.sayNext("揹包空間不足，無法獲得金幣，請清理揹包其他欄！");
                        break;
                    }
                } else {
                    npc.sayNext("可以重新和我對話領取金幣！");
                    break;
                }
            }
            player.openUI(0x22A);
            break;
        case 1:
            if (lastCoin > 0 || income > 0 || player.hasItem(4310100, 1)) {
                npc.say("你無法使用個人回生系統。");
            } else {
                if (player.gainItem(4310100, 10)) {
                    npc.say("使用個人回生系統獲得了#r10個#k的硬幣,開啟物品欄確認吧");
                } else {
                    npc.sayNext("揹包空間不足，無法獲得金幣，請清理揹包其他欄！");
                }
            }
            break;
        case 2:
            break;
        case 3:

            let shipType = player.getIntQuestRecordEx(17008, "T");
            let maxEnergy = shipType == 2 ? 120 : 100;
            let uEnergy = player.getPQLog("SAIL_ENERGY");
            if (uEnergy <= 0) {
                npc.sayNext("能量處於已滿狀態");
            } else {
                if (player.getPQLog("RESET_SAIL_ENERGY") <= 0) {
                    if (npc.askYesNo("手動充能艦船能量需要花費金幣#r5000000#k，是否需要進行？")) {
                        if (player.hasMesos(5000000)) {
                            player.loseMesos(5000000);
                            player.addPQLog("RESET_SAIL_ENERGY");
                            player.resetPQLog("SAIL_ENERGY");
                            player.updateSailBoatInfo();
                            npc.sayNext("艦船能量充能成功。");
                        } else {
                            npc.sayNext("金幣不足需要金幣#r5000000#k。");
                        }
                    }
                } else {
                    npc.sayNext("今天已經手動充能過艦船的能量了。");
                }
            }
            break;
        case 4:
            npc.sayNext("正常補充了貿易品或者已透過手動進行了補充.無法補充更多的貿易品");
            break;
    }
}
