var event = npc.getEvent();
var mapRoot = parseInt(map.getId() / 1000);
if (mapRoot >= 992001 && mapRoot <= 992050 && event != null) {
    let str = "妳有什麼事嗎？只要是我力所能及的，我都願意幫忙。#b\r\n\r\n"
        + "#L0#我想離開這裡了。#l\r\n\r\n"
        + (map.getId() == 992023000 ? "#L1#我掉下去了。#l\r\n" : "")
        + (map.getId() == 992004000 ? "#L3#我掉下去了。#l\r\n" : "")
        + (map.getId() == 992022000 ? "#L4#我掉下去了。#l\r\n" : "")
        + (map.getId() == 992033000 ? "#L2#鑰匙全部用完了。#l\r\n" : "");
    if (player.isGm()) {
        if (map.getId() < 992041000) {
            str += "#L9998#(測試專用)跳過10個階段。#l\r\n";
        }
        if (map.getId() < 992046000) {
            str += "#L9999#(測試專用)跳過5個階段。#l\r\n";
        }
        if (map.getId() < 992050000) {
            str += "#L10000#(測試專用)跳過1個階段。#l\r\n";
        }
    }
    var sel = npc.askMenu(str);
    switch (sel) {
        case 0:
            npc.sayNext("妳壹刻也不想在這裡待下去了？那就送妳回去吧！");
            player.changeMap(992000000, 0);
            break;
        case 1:
            npc.sayNext("哎呀呀，妳怎麽那麽笨呢！那我送妳回到原來的地方吧！");
            var s23_try = parseInt(event.getVariable("stage23_Value"));
            s23_try += 1;
            event.setVariable("stage23_Value", String(s23_try));
            player.teleportToPortalId(3, 1);
            break;
        case 2:
            npc.sayNext("鑰匙都已經用完了，還沒能走到最後嗎？");
            npc.sayNext("哎呀。看來這次是妳運氣不好，不然就是妳沒動腦筋。妳要慎重使用鑰匙。如果妳支付#b666點數#k的話，我就讓妳重新進入第33層。那麼妳想重新進入嗎？");
            if (getQuestPoint(42003) < 666) {
                npc.say("起源點數好像不夠了呢~！");
            } else {
                player.loseItem(2432459);
                player.loseItem(2432460);
                modifyQuestPoint(42003, -666);
                player.changeMap(event.getVariable("map" + event.getVariable("stage")));
            }
            break;
        case 3:
            npc.sayNext("哎呀呀，妳怎麽那麽笨呢！那我送妳回到原來的地方吧！");
            player.teleportToPortalId(1, 1);
            break;
        case 4:
            npc.sayNext("哎呀呀，妳怎麽那麽笨呢！那我送妳回到原來的地方吧！");
            player.teleportToPortalId(1, 1);
            break;
        case 9998:
            if (player.isGm()) {
                warpStage(10);
            } else {
                npc.logSuspicious("Player used gm option whithout gm!");
            }
            break;
        case 9999:
            if (player.isGm()) {
                warpStage(5);
            } else {
                npc.logSuspicious("Player used gm option whithout gm!");
            }
            break;
        case 10000:
            if (player.isGm()) {
                warpStage(1);
            } else {
                npc.logSuspicious("Player used gm option whithout gm!");
            }
            break;
        default:
            break;
    }
} else if (map.getId() == 992000000) {
    npc.say("不就在這裡嗎？有什麼事情不能當面說的！！");
}

function warpStage(count) {
    let stage = parseInt(event.getVariable("stage")); //獲取當前階段
    let nextStage = stage + count; //下個階段
    for (let i = stage; i < stage + count; i++) {
        event.setVariable("stage" + i, "clear"); //設置事件階段已完成
    }
    updateTime(); //更新計時器時間
    event.setVariable("stage", String(nextStage)); //設置事件新階段記錄
    if (stage % 10 == 5) {//處於休息階段
        event.startTimer("kick", player.getIntQuestRecordEx(42011, "time")); //啟動事件計時器
    }
    if (nextStage % 10 == 5) {//新的階段處於休息階段
        event.stopTimer("kick"); //停止計時器
    }
    switch (stage) {
        case 7:
            event.stopTimer("s7_time");
            break;
        case 13:
            event.stopTimer("spawnMob");
            break;
        case 38:
            event.stopTimer("changeMobS38");
            break;
        case 40:
            event.stopTimer("S40_bosscheck");
            break;
    }
    player.changeMap(event.getVariable("map" + event.getVariable("stage"))); //傳送到新階段
}


function updateTime() {
    var rData = player.getQuestRecordEx(42011, "time");
    var tData = player.getQuestRecordEx(42011, "totalTime");
    var startData = player.getQuestRecordEx(42011, "start");
    var remainTime = parseInt(rData); //剩余時長
    var totalTime = parseInt(tData); //初始總時長
    var startTime = parseInt(startData); //階段開始的時間
    var nStageTime = (totalTime - remainTime) / 1000; //從開始到當前階段所花費時間

    var diffTime = java.lang.System.currentTimeMillis() - startTime; //當前階段消耗的時間（毫秒）
    remainTime -= diffTime; //剩余時間 計算

    player.updateQuestRecordEx(42011, "time", String(remainTime)); //更新剩余時間
}


function getQuestPoint(questId) {
    return player.getIntQuestRecordEx(questId, "point");
}

function modifyQuestPoint(questId, num) {
    player.updateQuestRecordEx(questId, "point", String(getQuestPoint(questId) + num));
    player.showSystemMessage((num < 0 ? "消耗了 " : "增加了 ") + Math.abs(num) + " 起源點數，剩餘起源點數：" + getQuestPoint(questId));
}