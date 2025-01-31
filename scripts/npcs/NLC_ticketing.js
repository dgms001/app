/**
 *
 *
 */

let msg = ["克拉齊亞的新葉都市", "廢棄都市", "廢棄都市", "新葉城"];
let ticket = [4031711, 4031713];
let cost = 5000;
let returnMap = [103020000, 600010001];

let selection;
switch (map.getId()) {
    case 103020000:
        selection = 0;
        break;
    case 600010001:
        selection = 1;
        break;
    case 600010004:
        selection = 2;
        break;
    case 600010002:
        selection = 3;
        break;
}
if (selection < 2) {
    let sel = npc.askMenu("你好,請問是要一張地鐵票嗎?\r\n#L0##b" + msg[selection] + "#l");
    let ret = npc.askYesNo("前往" + msg[selection] + "從整點開始每 10 分鐘一列, 車票價格為#b" + cost + " 金幣#k. 確定要購買#b#t" + ticket[selection] + "#嗎#k?");
    if (ret == 1) {
        if (!player.hasMesos(cost) || !player.canGainItem(ticket[selection], 1)) {
            npc.sayNext("你確定你有 #b" + cost + " 金幣嗎#k? 如果有, 請確認你的物品欄是否已滿.");
        } else {
            player.loseMesos(cost);
            player.gainItem(ticket[selection], 1);
            npc.sayNext("這是你的票，請收好。");
        }
    } else {
        npc.sayNext("你到那裡肯定不是去旅遊的，對不對？");
    }
} else {
    let ret = npc.askYesNo("你現在想要回到#b" + msg[selection] + "#k地鐵站嗎?");
    if (ret == 1) {
        player.changeMap(returnMap[selection - 2]);
    } else {
        npc.sayNext("好的,請耐心等候~!");
    }
}