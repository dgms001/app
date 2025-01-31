
/*	player.completeQuest(16023,0);  	可以跳出q16022s每10秒
q100904s 可能只有到 06/21
 */
//T人 #kick Name
//#who 查看路線人
//傳送全服玩家頻道
//重啟1用   game0
//if(player.getChannel() == 1) {  player.changeChannel(player.getChannel()+getMinAndMax(4,5))	}

//重啟2-5用 game2 1
//if(player.getChannel() >= 2 && player.getChannel() <= 5){player.changeChannel(getMinAndMax(6,10))}

//重啟6-7用 game3
//if(player.getChannel() >= 6 && player.getChannel() <= 7){  player.changeChannel(getMinAndMax(8,10))}

//重啟8-10用 game4
//if(player.getChannel() >= 8 && player.getChannel() <= 10){  player.changeChannel(getMinAndMax(6,7))	}
/*
date = new Date();
let week = date.getDay();
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
//player.completeQuest(16028, 0);//解決028報錯
//player.completeQuest(16019, 0);//	q16018s
if (player.getChannel() == 1) {
    if (minute == 0 && ifopenA() == 1) { //0
        player.runScript("虛擬幣自動開啟");
    }
    if (minute == 1 && ifopenA() == 0) {
        player.runScript("虛擬幣自動開啟");
    }
}
JBCE();
//deletejiance();
let jiabeika = player.getAmountOfItem(4034032);
if (jiabeika == 0) { //加倍卡才能進//
    if (player.getChannel() >= 2 && player.getChannel() <= 3) {
        //player.runScript("虛擬幣自動開啟");
        player.changeChannel(4);
        player.showProgressMessageFont("2-3分流為歡樂加倍路線,您沒有加倍卡無法進入!!", 3, 30, 4, 10 * 1000);
    }
}
if (getHyPay() < 0) {
    player.loseItem(4009411);
    //player.addEventValue("刷餘額",1,999)
    npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
    npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
    npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
    npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
    npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
    npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
    npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
    npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
    npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
    npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM003");
    npc.say("傻逼你沒了 難受想哭");

}
let mapA = map.getId();
if (mapA != 993010000) { //新手地圖提示
    if (!player.hasItem(2430373, 1)) { //補發新手盒子
        player.gainItem(2430373, 1);
    }
    if (!player.hasItem(2432628, 1)) { //補發拍賣盒子
        player.gainItem(2432628, 1);
    }
}
if (player.getSkillLevel(2311002) > 0) { //5311013
    player.setSkillLevel(2311002, 0, 0, false); //移除原有
    npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "這技能有點問題,等待修復,當前地圖:" + mapA + " 分流:" + player.getChannel() + "S");
}
if (mapA == 993010000) { //新手地圖提示
    player.showProgressMessageFont("請進入一個星球開啟圓夢世界吧!!", 3, 30, 4, 10 * 1000);
}
function ifopenA() { //判斷開啟 0為開啟
    var sql = "select ifopen from dgms_usdt where ID = ? ";
    var result = player.customSqlResult(sql, 1);
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("ifopen");
        }
    } else {
        return 0;
    }

}
function getMinAndMax(minVal, maxVal) { //隨機 最大值 最小值
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}

function deletejiance() {
    var sql = "delete from zlog_infractions where assignertype = 'machine detected'";
    player.customSqlUpdate(sql);
}
function getHyPay() {
    var sql = "select pay from hypay where accountid = ? ";
    var result = player.customSqlResult(sql, player.getAccountId());
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("pay");
        }
    } else {
        return 0;
    }

}
function JBCE() {
    var timeStamp = java.lang.System.currentTimeMillis();
    var min = 1800; //一分鐘 這裡自己改時間
    let mapA = map.getId();
    let mapB = map.getEventMobCount();
    let mobs = 10; //自選修改 建議大於5+
    var time = parseInt(min - (((timeStamp - parseInt(player.getQuestRecordEx(100000006))) / 1000)));
    if ((time >= 1780 && time <= 1800)) {
        player.showProgressMessageFont("" + time + "秒後將有腳本檢測出現,請及時打提示密碼!", 3, 30, 4, 10 * 1000);
    } else if ((time < 0 && mapB >= mobs) && (mapA != 865030121 && mapA != 980001701 && mapA != 980001601 && mapA != 980001001 && mapA != 980001001 && mapA != 980000901 && mapA != 993029200 && mapA != 940021000 && mapA != 865010001 && mapA != 321110000 && mapA != 321111000 && mapA != 321112000 && mapA != 321113000 && mapA != 321114000 && mapA != 321115000 && mapA != 321116000 && mapA != 940200300 && mapA != 940200310 && mapA != 940200320 && mapA != 940200330 && mapA != 401071000 && mapA != 865000300 && mapA != 921171200 && mapA != 220080200 && mapA != 220080300 && mapA != 120010100 && mapA != 450013100 && mapA != 450013300 && mapA != 450013500 && mapA != 450013700 && mapA != 910010000) && player.getIntQuestRecordEx(16700, "count") > 2000) {
        var A = getMinAndMax(1, 6);
        player.updateQuestRecordEx(100000006, timeStamp);
        txt = "腳本檢測,我需要#r蘋果 請選擇蘋果#k\r\n";
        if (A == 1) {
            txt += "#L3#香蕉";
            txt += "#L1#鳳梨";
            txt += "#L0#蘋果";
            txt += "#L2#西瓜";
            txt += "#L4#芒果";
            txt += "#L5#榴蓮";
        }
        if (A == 2) {
            txt += "#L1#鳳梨";
            txt += "#L0#蘋果";
            txt += "#L2#西瓜";
            txt += "#L3#香蕉";
            txt += "#L4#芒果";
            txt += "#L5#榴蓮";
        }
        if (A == 3) {
            txt += "#L1#鳳梨";
            txt += "#L2#西瓜";
            txt += "#L0#蘋果";
            txt += "#L3#香蕉";
            txt += "#L4#芒果";
            txt += "#L5#榴蓮";
        }
        if (A == 4) {
            txt += "#L1#鳳梨";
            txt += "#L2#西瓜";
            txt += "#L3#香蕉";
            txt += "#L0#蘋果";
            txt += "#L4#芒果";
            txt += "#L5#榴蓮";
        }
        if (A == 5) {
            txt += "#L1#鳳梨";
            txt += "#L2#西瓜";
            txt += "#L3#香蕉";
            txt += "#L4#芒果";
            txt += "#L0#蘋果";
            txt += "#L5#榴蓮";
        }
        if (A == 6) {
            txt += "#L1#鳳梨";
            txt += "#L2#西瓜";
            txt += "#L3#香蕉";
            txt += "#L4#芒果";
            txt += "#L5#榴蓮";
            txt += "#L0#蘋果";
        }
        let selection = npc.askMenuSNoEsc(txt);
        switch (selection) {
            case 0:
                player.updateQuestRecordEx(16700, "0")
                player.updateQuestRecordEx(100000006, timeStamp);
                npc.say("成功過檢測,半小時後還會有檢測");
                break;
            case 1:
                player.updateQuestRecordEx(100000006, 500);
                npc.say("選擇失敗");
                break;
            case 2:
                player.updateQuestRecordEx(100000006, 500);
                npc.say("選擇失敗");
                break;
            case 3:
                player.updateQuestRecordEx(100000006, 500);
                npc.say("選擇失敗");
                break;
            case 4:
                player.updateQuestRecordEx(100000006, 500);
                npc.say("選擇失敗");
                break;
            case 5:
                player.updateQuestRecordEx(100000006, 500);
                npc.say("選擇失敗");
                break;
        }
    }
}
*/