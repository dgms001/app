let itemID1 = Array(
    4032216,
    2430915,
    2431893,
    2431894,
    4000232,
    4000233,
    4000234,
    4000034,
    2022709,
    4034044,
    2432140,
    2432141,
    2432142,
    4036167,
    4036169,
    4033853,
    4310107,
    4033734,
    4033642,
    2432143,
    2432144,
    2432145,
    2023721,
    2450158,
    4009411,
    4000002,
    4000763,
    4000004,
    4310158,
    2432246,
    2633336,
    4310020,
    2630512,
    4000016,
    4000000,
    4000114,
    4000622,
    4000112,
    4000672,
    4000039,
    4000013,
    4000758,
    2633609,
    4000753,
    4000010,
    4000006,
    4000033,
    4000023,
    4000012,
    4000003,
    4000265,
    4000230,
    4000238,
    4000159,
    4000182,
    4000167,
    4000153,
    4000052,
    4000057,
    4000053,
    4000054,
    4000069,
    4000095,
    4000127,
    4000099,
    4000106,
    4000646,
    4000647,
    4000648,
    4000643,
    4000831,
    4000829,
    4000826,
    4000832,
    4000834,
    4000836,
    4000651,
    4000652,
    4000653,
    4000654,
    4000655,
    4000229,
    4000835,
);
//通貨
let itemID2 = Array(
    4001832, //咒文
    2022709, //掉寶半小時
    2023132, //掉寶一小時
    4034085,
    4034086,
    4034087,
    4034088,
    4034089,
    4034090,
    4034091,
    4034092,
    4031065,
    4031491,
);

let itemID3 = Array(
    //硬幣
    4310086, //自由專職幣
    4310154,//ffn幣硬幣 #c裝備分解可以獲得該硬幣#\n強化本系列裝備專用
    4310156,//航海硬幣 #c裝備分解可以獲得該硬幣#\n強化本系列裝備專用
    4310107,//漆黑硬幣 #c裝備分解可以獲得該硬幣#\n強化本系列裝備專用
    4310249,//神秘硬幣 #c裝備分解可以獲得該硬幣#\n強化本系列裝備專用
    4310288,//貝勒德硬幣 #c裝備分解可以獲得該硬幣#\n強化本系列裝備專用
    4310330,//永恆硬幣 #c裝備分解可以獲得該硬幣#\n強化本系列裝備專用
    4310144,//創世硬幣 #c裝備分解可以獲得該硬幣#\n強化本系列裝備專用
    4310178,//通用硬幣 #c裝備分解可以獲得該硬幣#\n強化本系列裝備專用
    4001626,//副手硬幣 #c裝備分解可以獲得該硬幣#\n強化本系列裝備專用
);

txt = "#fs16##b系統倉庫";
txt += "#k#fs12#";
txt += "";
txt += "\r\n#r#L3#【通貨取出】#l\r\n\r\n";
k = 0;
for (var i = 0; i < itemID2.length; i++) {
    if (player.getEventValue("倉庫" + itemID2[i]) >= 1) {
        txt += "#b#i" + itemID2[i] + "#:[#r" + player.getEventValue("倉庫" + itemID2[i]) + "#b] ";
        k++;
        if (k % 3 == 0 && k != 0) {
            txt += "\r\n";
        }
    }
}
txt += "\r\n\r\n#r#L5#【硬幣取出】#l\r\n\r\n";
l = 0;
for (var i = 0; i < itemID3.length; i++) {
    if (player.getEventValue("倉庫" + itemID3[i]) >= 1) {
        txt += "#b#i" + itemID3[i] + "#:[#r" + player.getEventValue("倉庫" + itemID3[i]) + "#b] ";
        l++;
        if (l % 3 == 0 && l != 0) {
            txt += "\r\n";
        }
    }
}
txt += "\r\n\r\n#r#L1#【跑環取出】#l\r\n\r\n";
j = 0;
for (var i = 0; i < itemID1.length; i++) {
    if (player.getEventValue("倉庫" + itemID1[i]) >= 1) {
        txt += "#b#i" + itemID1[i] + "#:[#r" + player.getEventValue("倉庫" + itemID1[i]) + "#b] ";
        j++;
        if (j % 3 == 0 && j != 0) {
            txt += "\r\n";
        }
    }
}

txt += " \r\n";

let sel = npc.askMenuS(txt, true);
if (sel == 0) {
    storesave(itemID1);
} else if (sel == 1) {
    getstore(itemID1);
} else if (sel == 2) {
    storesave(itemID2);
} else if (sel == 3) {
    getstore(itemID2);
} else if (sel == 4) {
    storesave(itemID3);
} else if (sel == 5) {
    getstore(itemID3);
} else if (sel == 30) {
    allstoresave(itemID2);
} else if (sel == 31) {
    allstoresave(itemID3);
} else if (sel == 32) {
    allstoresave(itemID1);
}

function storesave(itemID) {
    txt = "請選擇要存入的道具 : \r\n";
    j = 0;
    for (var i = 0; i < itemID.length; i++) {
        if (player.hasItem(itemID[i], 1)) {
            txt += "#r#L" + i + "##i" + itemID[i] + "##l";
            j++;
            if (j % 5 == 0 && j != 0) {
                txt += "\r\n";
            }
        }
    }
    txt += "\r\n";
    txt += "\r\n";

    sel = npc.askMenuS(txt, true);
    if (player.hasItem(itemID[sel], 1)) {
        numberITEM = player.getAmountOfItem(itemID[sel]);
        number = npc.askNumber("#fs16#可存入數量#r" + numberITEM + "", numberITEM, 1, numberITEM);
        if (!player.hasItem(itemID[sel], number)) {
            npc.say("已記錄,再搞這種萬門邪道直接BAN!")
        } else {
            player.addEventValue("倉庫" + itemID[sel], number, 999);
            player.loseItem(itemID[sel], number);
        }
    }

}

function getstore(itemID) {
    txt = "請選擇要取出的道具 : \r\n";
    for (var i = 0; i < itemID.length; i++) {
        if (player.getEventValue("倉庫" + itemID[i]) >= 1) {
            txt += "#r#L" + i + "##i" + itemID[i] + "##l";
        }
    }
    txt += "\r\n";
    txt += "\r\n";

    sel = npc.askMenuS(txt, true);
    if (player.getEventValue("倉庫" + itemID[sel]) >= 1) {
        numberITEM = player.getEventValue("倉庫" + itemID[sel]);
        number = npc.askNumber("#fs16#可取出數量 #r" + numberITEM + " ", 1, 1, numberITEM);
        if (player.getFreeSlots(4) < (number / 9999) + 1) {
            npc.say("其他欄不足已上你提出這麼多,9999*? ?=欄位數");
        } else if (player.getEventValue("倉庫" + itemID[sel]) < number) {
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM,倉庫");
            player.addEventValue("賬號倉庫BUG", number, 3000);
            npc.say("傻逼你沒了 難受想哭");
        } else {
            player.addEventValue("倉庫" + itemID[sel], -number, 999);
            player.gainItem(itemID[sel], number);
            player.runScript("賬號倉庫取出");
        }
    }
}

function allstoresave(itemID) {

    for (var i = 0; i < itemID.length; i++) {

        if (player.hasItem(itemID[i], 1) >= 1) {
            number = player.getAmountOfItem(itemID[i]);
            player.addEventValue("倉庫" + itemID[i], number, 999);
            player.loseItem(itemID[i], number);
            player.showSystemMessage("系統執行一鍵存倉");
        } else {
            //player.showSystemMessage("身上沒有符合的物品");
        }

    }

}
