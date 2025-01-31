/* global npc, player */

/**
 *
 * NpcId 9310101
 *
 */
let goods = Array(
    //Array(5201002, 3000, 2800),//3000個
    Array(5201000, 2000, 1900),//2000個
    //Array(5201001, 500, 500),//500個
    Array(5201005, 500, 50),//50
    Array(5201004, 20, 20)//20
);
let response = npc.askMenu("你需要什麼服務?\r\n\r\n#b#L0#充值豆豆#l\r\n#L1#領取獎品#l\r\n");
switch (response) {
    case 0: {
        let text = "你想要玩豆豆機嗎，你需要先要購買豆豆箱來充值豆豆哦，你想要購買多少豆豆?\r\n\r\n"
        for (let i = 0; i < goods.length; i++) {
            text += "\r\n#b#L" + i + "##i" + goods[i][0] + "##z" + goods[i][0] + "#(" + goods[i][2] + "個豆豆) 價格:" + goods[i][2] + "點券";
        }
        let response = npc.askMenu(text);
        let itemId = goods[response][0]
        let cost = goods[response][2]
        if (itemId > 0) {
            if (player.getCashShopCurrency(1) >= cost) {
                if (player.canGainItem(itemId, 1)) {
                    player.modifyCashShopCurrency(1, -cost);
                    player.gainItem(itemId, 1);
                    npc.sayNext("購買成功，請收好！");
                } else {
                    npc.sayNext("清理下你的揹包吧，已經放不下了！");
                }
            } else {
                npc.sayNext("你的點券不夠，無法購買#i" + itemId + "##z" + itemId + "#！");
            }
        }
        break;
    }
    case 1: {
        let idx = player.getIntQuestRecordEx(9900001, "idx");
        let count = 0;
        let rewards = [];
        let str = "當前獲得的獎品:\r\n";
        if (idx > 0) {
            for (let i = 0; i < idx; i++) {
                let itemId = player.getIntQuestRecordEx(9900001, String(i));
                if (itemId > 0) {
                    count++;
                    rewards[i] = itemId;
                    str += "#b#i" + itemId + "##t" + itemId + "# x 1#k\r\n";
                }
            }
        }
        if (count > 0) {
            let answer = npc.askYesNo(str + "\r\n#r 是否現在領取全部獎品？\r\n");
            if (answer > 0) {
                for (let i in rewards) {
                    player.gainParcel(rewards[i], 1, "來自於豆豆屋的獎品快遞。");
                }
                player.updateQuestRecordEx(9900001, "");
                npc.say("好的，獎品領取申請已經處理，稍後將以#b快遞#k送達！請注意查收");
            } else {
                npc.say("好吧要領取獎品的時候再來找我吧！");
            }
        } else {
            npc.say("你好像沒有中獎呀！請繼續努力吧！");
        }
        break;
    }
}
