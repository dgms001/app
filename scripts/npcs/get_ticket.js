

/* global npc, player, map */

/**
 *
 *
 */

let event;
let toWait;
let script;
switch (map.getId()) {
    case 104020110:
        script = "ship_ossyria";
        toWait = 104020111;
        break;
    case 200000111:
        script = "ship_ossyria";
        toWait = 200000112;
        break;
    case 200000121:
        script = "ship_train";
        toWait = 200000122;
        break;
    case 220000110:
        script = "ship_train";
        toWait = 220000111;
        break;
    case 200000151:
        script = "ship_geenie";
        toWait = 200000152;
        break;
    case 260000100:
        script = "ship_geenie";
        toWait = 260000110;
        break;

    case 200000131:
        script = "ship_flight";
        toWait = 200000132;
        break;
    case 240000110:
        script = "ship_flight";
        toWait = 240000111;
        break;
}

event = npc.getEvent(script);
if (event == null) {
    npc.say("發生未知錯誤！請同聯絡管理員！");
} else if (event.getVariable("board")) {
    let selection = npc.askYesNo("坐上船之後，需要飛很久才能到達目的地。如果你在這裡有急事要辦的話，請先把事情辦完。怎麼樣？你要上船嗎？");
    if (selection == 0) {
        npc.sayNext("看來你還有事情要辦吧？");
    } else {
        player.changeMap(toWait);
    }
} else if (event.getVariable("0docked")) {
    npc.sayNext("船已經在準備出發。對不起，請乘坐下一班船。執行時間表可以透過售票員確認。");
} else {
    npc.sayNext("出發前5分鐘才能進入。請稍等一下。但是太晚過來也不行。出發前1分鐘必須進行出發準備，因此無法繼續搭乘客人。");
}