/*
裝備出售
 */
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"
var d1 = "使用說明" //說明
var d2 = "通用分解" //通用
var d3 = "副手分解" //副手
var d4 = "深淵分解" //深淵
var d5 = "航海分解" //航海
var d6 = "培羅德分解" //裴樂德
var d7 = "神秘分解" //神秘
var d8 = "漆黑分解" //漆黑
//var d9 = "永恆分解" //永恆
//var d10 = "創世分解" //創世
var d11 = "返回" //返回选单
var txt;
var itemList = new Array();
var inventoryType = 1;
var deleteSlot;
var deleteQuantity;
var typed = 0;
var beDeletedArr = new Array();
var itemlist = Array();
var tyitemlist = Array(//通用系列分解
    1162009,//永生之石
    1113149, //銀花戒指
    1032241, //戴雅希杜斯耳環
    1022277, //拉圖斯標誌
    1022231, //水中信紙
    1012478, //凝聚的力量結晶石
    1122076, //混沌暗黑龍王的項鍊
    1182087, //水晶溫杜斯胸章
    1152170, //皇家暗黑合金護肩
    1113020, //戰神祝福
    1022232,//黑豆
    1032136,//地獄火
    1113282,//高貴的伊
    1113313,//守護者天
    1122000,//黑龍項鏈
    1122254,//梅克奈
    1122150,//支配著
    1132272,//金花草
    1132296,//憤怒的
    1112952,
    1162025//粉紅



);
var fsitemlist = Array(//副手系列分解
    1099018,
    1352013,
    1352213,
    1352209,
    1352219,
    1352229,
    1352239,
    1352249,
    1352259,
    1352269,
    1352279,
    1352289,
    1352299,
    1352410,
    1352510,
    1352610,
    1352711,
    1352819,
    1352909,
    1352919,
    1352948,
    1352978,
    1353010,
    1353405,
    1552133,
    1354007,
    1353807,
    1353606,
    1353505,
    1353306,
    1352933,
    1353105,
    1098006,
    1353205,
    1352867,
    1353707,
    1354027,
    1352266,
    1354017,
    1352831,
    1352981,
    1353900,
    1352990,
    1352938,
    1352113,
    1352276,
    1352807,
    1352928,
    1352957,
    1352967,
    1352935,
    1352109,
    1342095);
var plditemlist = Array(//培羅德系列分解
    1113073,
    1113074,
    1113075,
    1032221,
    1032222,
    1032223,
    1132244,
    1132245,
    1132246,
    1122265,
    1122266,
    1122267);
var syitemlist = Array(//深淵系列分解
    1232057,
    1312153,
    1322203,
    1302275,
    1402196,
    1412135,
    1422140,
    1432167,
    1442223,
    1582016,
    1542063,
    1213016,
    1212063,
    1262016,
    1372177,
    1382208,
    1252015,
    1552063,
    1282015,
    1452205,
    1462193,
    1522094,
    1592018,
    1214016,
    1242060,
    1332225,
    1342082,
    1362090,
    1472214,
    1292016,
    1272015,
    1222058,
    1242061,
    1482168,
    1492179,
    1532098,
    1403016,
    1003797, //高貴的戰士頭盔
    1003798, //高貴的敦威治帽
    1003799, //高貴的守護者貝雷帽
    1003800, //高貴的暗殺者頭套帽
    1003801,
    1042254, //高貴的戰士上衣
    1042255, //高貴的敦威治上衣
    1042256, //高貴的守護者上衣
    1042257, //高貴的暗殺者上衣
    1042258,
    1062165, //高貴的戰士褲子
    1062166, //高貴的敦威治褲子
    1062167, //高貴的守護者褲子
    1062168, //高貴的暗殺者褲子
    1062169 //高貴的漫遊者上衣
);
var hhitemlist = Array(//航海系列分解
    1582017,
    1232109,
    1402251,
    1302333,
    1312199,
    1322250,
    1412177,
    1422184,
    1432214,
    1442268,
    1542108,
    1213017,
    1212115,
    1372222,
    1382259,
    1552110,
    1252093,
    1262017,
    1282016,
    1522138,
    1592019,
    1452252,
    1462239,
    1214017,
    1242116,
    1332274,
    1342101,
    1362135,
    1472261,
    1292017,
    1272016,
    1222109,
    1482216,
    1492231,
    1532144,
    1403017,
    1004422,
    1004423,
    1004424,
    1004425,
    1004426,
    1073030,
    1073032,
    1073033,
    1073034,
    1073035,
    1082636,
    1082637,
    1082638,
    1082639,
    1082640,
    1102775,
    1102794,
    1102795,
    1102796,
    1102797,
    1152174,
    1152176,
    1152177,
    1152178,
    1152179,
    1012438,
    1022211);
var smitemlist = Array(//神秘系列分解
    1212120,
    1222113,
    1232113,
    1242121,
    1242122,
    1252098,
    1262039,
    1302343,
    1312203,
    1322255,
    1332279,
    1342104,
    1362140,
    1372228,
    1382265,
    1402259,
    1412181,
    1422189,
    1432218,
    1442274,
    1452257,
    1462243,
    1472265,
    1482221,
    1492235,
    1522143,
    1532150,
    1542117,
    1552119,
    1582023,
    1272017,
    1282017,
    1592020,
    1213018,
    1292018,
    1214018,
    1403018,
    1004808,
    1004809,
    1004810,
    1004811,
    1004812,
    1053063,
    1053064,
    1053065,
    1053066,
    1053067,
    1073158,
    1073159,
    1073160,
    1073161,
    1073162,
    1082695,
    1082696,
    1082697,
    1082698,
    1082699,
    1102940,
    1102941,
    1102942,
    1102943,
    1102944,
    1152197,
    1152198,
    1152199,
    1152200,
    1152196);
var qhitemlist = Array(//漆黑系列分解
    1162080,
    1162081,
    1162082,
	1162083,
    1032316, //指揮官  耳環
    1132308, //夢幻的腰帶
    1012632, //口紅控制氣
    1022278, //魔力的眼罩
    1122430, //苦痛的根源
    1113306, //巨大的恐怖
    1182285,
    1190555,
    1190556,
    1190557,
    1190558,
    1190559);

var yhitemlist = Array(//永痕系列分解
    1062289,
    1062288,
    1062287,
    1062286,
    1062285,
    1042435,
    1042436,
    1042437,
    1042434,
    1042433,
    1005984,
    1005983,
    1005982,
    1005981,
    1005980);
var csitemlist = Array(//創世系列分解
    1442284,
    1312212,
    1382273,
    1252105,
    1582043,
    1452265,
    1322263,
    1522151,
    1262050,
    1592021,
    1462251,
    1332288,
    1532156,
    1402267,
    1403021,
    1272039,
    1472274,
    1212128,
    1213021,
    1214021,
    1542127,
    1412188,
    1282039,
    1482231,
    1222121,
    1552129,
    1422196,
    1292021,
    1492244,
    1362148,
    1232121,
    1432226,
    1302354,
    1372236,
    1242138,
    1242140,
);
var pgitemlist = Array(//蘋果裝備
    1122296,
    1113211,
    1012174,
    1032219,
    1182136,
    1113132,
    1182158,
    1112956,
    1113083,
    1202161,
    1202162,
    1202163,
    1202162,
    1113195,
    1202164,
    1113196,
    1202163,
    1113211,
    1152155,
    1202161,
    1672075,
    1032216,
    1202164,
    1113070,
    1202160,
    1662073,
    1202287,
    1672069,
    1182158,
    1202299,


);

var pgdzitemlist = Array(//蘋果點裝
    1113220,
    1114402,
    1114401,
    1033000,
    1114400,
    1032261,
    1053427,
    1053704,
    1005349,
    1005782,
    1082736,
    1702618,
);
var txt;

txt = "Welcome to the special trip              " + a38 + "\r\n";

txt += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n"
txt += "\t\t\t\t   #L0#" + d1 + "#l\r\n\r\n";
txt += "#L1#" + f4 + "#b通用分解#l#L2#" + f2 + "副手分解#l#L3#" + f4 + "#b培羅德分解#l\r\n\r\n";
txt += "#L4#" + f4 + "深淵分解#l#L5#" + f2 + "航海分解#l#L6#" + f4 + "#b神秘分解#l\r\n\r\n";
txt += "#L7#" + f4 + "漆黑分解#l\r\n\r\n";//#L8#" + f2 + "永恆分解#l#L9#" + f4 + "創世分解#l
txt += "#L10#" + f5 + "魔法馬車裝備分解#l#L11#" + f5 + "魔法馬車點裝分解#l\r\n\r\n";



let selection = npc.askMenuS(txt, true);
if (selection == 0) {
    sayStr();
} else if (selection == 1) {
    resolve1();
} else if (selection == 2) {
    resolve2();
} else if (selection == 3) {
    resolve3();
} else if (selection == 4) {
    resolve4();
} else if (selection == 5) {
    resolve5();
} else if (selection == 6) {
    resolve6();
} else if (selection == 7) {
    resolve7();
} else if (selection == 8) {
    resolve8();
} else if (selection == 9) {
    resolve9();
} else if (selection == 10) {
    resolve10();
} else if (selection == 11) {
    resolve11();
}
function resolve1() {
    var index_a = 0;
    var txt = "\t\t\t\t#b請選擇要分解的裝備\r\n#b";
    var indexof = 1;
    var newItemList = Array();
    for (var j = 1; j <= 96; j++) {
        var item = player.getInventorySlot(1, j);
        if (item == null) {
            continue;
        }
        for (var i = 0; i < tyitemlist.length; i++) {
            if (tyitemlist[i] == item.getDataId()) {
                newItemList[j] = item.getDataId();
                break;
            }
        }
    }
    for (var key in newItemList) {
        txt += "#L" + key + "##v" + newItemList[key] + "##z" + newItemList[key] + "#";
        index_a++;
        if (indexof > 1 && indexof % 2 == 0) {
            txt += "\r\n";
        }
        indexof++;
    }
    if (index_a <= 0) {
        npc.say("#r您沒有可以分解的裝備。");
    } else {
        var selection = npc.askMenuS(txt, true);
        var item = player.getInventorySlot(parseInt(inventoryType), parseInt(selection));
        deleteSlot = selection;
        deleteQuantity = 1;
        itemq = getType(item.getDataId());
        var str = item.getTitle();
        var CUC = item.getCUC();
        if (bag(4) < 2) {
            npc.say("#b其他欄格子不足，請整理後分解。");

        } else if (CUC > 0) {
            npc.say("#r砸過卷的裝備不能進行分解,如需分解請回真裝備!");
        } else {
            player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
            player.gainItem(4250100, 2);
            txt = "#r分解成功，獲得了#v4250100#X2個";
            npc.say(txt);
        }
    }
    resolve1();
}
function resolve2() {
    var index_a = 0;
    var txt = "\t\t\t\t#b請選擇要分解的裝備\r\n#b";
    var indexof = 1;
    var newItemList = Array();
    for (var j = 1; j <= 96; j++) {
        var item = player.getInventorySlot(1, j);
        if (item == null) {
            continue;
        }
        for (var i = 0; i < fsitemlist.length; i++) {
            if (fsitemlist[i] == item.getDataId()) {
                newItemList[j] = item.getDataId();
                break;
            }
        }
    }
    for (var key in newItemList) {
        txt += "#L" + key + "##v" + newItemList[key] + "##z" + newItemList[key] + "#";
        index_a++;
        if (indexof > 1 && indexof % 2 == 0) {
            txt += "\r\n";
        }
        indexof++;
    }
    if (index_a <= 0) {
        npc.say("#r您沒有可以分解的裝備。");
    } else {
        var selection = npc.askMenuS(txt, true);
        var item = player.getInventorySlot(parseInt(inventoryType), parseInt(selection));
        deleteSlot = selection;
        deleteQuantity = 1;
        itemq = getType(item.getDataId());
        var str = item.getTitle();
        var CUC = item.getCUC();
        if (bag(4) < 2) {
            npc.say("#b其他欄格子不足，請整理後分解。");

        } else if (CUC > 0) {
            npc.say("#r砸過卷的裝備不能進行分解,如需分解請回真裝備!");
        } else {
            player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
            player.gainItem(4250101, 1);
            txt = "#r分解成功，獲得了#v4250101 #X1個";
            npc.say(txt);
        }
    }
    resolve2();
}
function resolve3() {
    var index_a = 0;
    var txt = "\t\t\t\t#b請選擇要分解的裝備\r\n#b";
    var indexof = 1;
    var newItemList = Array();
    for (var j = 1; j <= 96; j++) {
        var item = player.getInventorySlot(1, j);
        if (item == null) {
            continue;
        }
        for (var i = 0; i < plditemlist.length; i++) {
            if (plditemlist[i] == item.getDataId()) {
                newItemList[j] = item.getDataId();
                break;
            }
        }
    }
    for (var key in newItemList) {
        txt += "#L" + key + "##v" + newItemList[key] + "##z" + newItemList[key] + "#";
        index_a++;
        if (indexof > 1 && indexof % 2 == 0) {
            txt += "\r\n";
        }
        indexof++;
    }
    if (index_a <= 0) {
        npc.say("#r您沒有可以分解的裝備。");
    } else {
        var selection = npc.askMenuS(txt, true);
        var item = player.getInventorySlot(parseInt(inventoryType), parseInt(selection));
        deleteSlot = selection;
        deleteQuantity = 1;
        itemq = getType(item.getDataId());
        var str = item.getTitle();
        var CUC = item.getCUC();
        if (bag(4) < 2) {
            npc.say("#b其他欄格子不足，請整理後分解。");

        } else if (CUC > 0) {
            npc.say("#r砸過卷的裝備不能進行分解,如需分解請回真裝備!");
        } else {
            if (item.getDataId() == 1113073 || item.getDataId() == 1032221 || item.getDataId() == 1132244 || item.getDataId() == 1122265) {
                player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
                player.gainItem(4250102, 1);
                txt = "#r中級分解成功，獲得了#v4250102 #X1個";
                npc.say(txt);
            } else if (item.getDataId() == 1113074 || item.getDataId() == 1032222 || item.getDataId() == 1132245 || item.getDataId() == 1122266) {
                player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
                player.gainItem(4250102, 2);
                txt = "#r高級分解成功，獲得了#v4250102 #X2個";
                npc.say(txt);
            } else if (item.getDataId() == 1113075 || item.getDataId() == 1032223 || item.getDataId() == 1132246 || item.getDataId() == 1122267) {
                player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
                player.gainItem(4250102, 3);
                txt = "#r頂級分解成功，獲得了#v4250102 #X3個";
                npc.say(txt);
            }
        }
    }
    resolve3();
}
function resolve4() {
    var index_a = 0;
    var txt = "\t\t\t\t#b請選擇要分解的裝備\r\n";
    var indexof = 1;
    var newItemList = Array();
    for (var j = 1; j <= 96; j++) {
        var item = player.getInventorySlot(1, j);
        if (item == null) {
            continue;
        }
        for (var i = 0; i < syitemlist.length; i++) {
            if (syitemlist[i] == item.getDataId()) {
                newItemList[j] = item.getDataId();
                break;
            }
        }
    }
    for (var key in newItemList) {
        txt += "#L" + key + "##v" + newItemList[key] + "##z" + newItemList[key] + "#";
        index_a++;
        if (indexof > 1 && indexof % 2 == 0) {
            txt += "\r\n";
        }
        indexof++;
    }
    if (index_a <= 0) {
        npc.say("#r您沒有可以分解的裝備。");
    } else {
        var selection = npc.askMenuS(txt, true);
        var item = player.getInventorySlot(parseInt(inventoryType), parseInt(selection));
        deleteSlot = selection;
        deleteQuantity = 1;
        itemq = getType(item.getDataId());
        var str = item.getTitle();
        var CUC = item.getCUC();
        if (bag(4) < 2) {
            npc.say("#b其他欄格子不足，請整理後分解。");

        } else if (CUC > 0) {
            npc.say("#r砸過卷的裝備不能進行分解,如需分解請回真裝備!");
        } else {
            player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
            player.gainItem(4250000, 2);
            txt = "#r分解成功，獲得了#v4250000 #X2個";
            npc.say(txt);
        }
    }
    resolve4();
}
function resolve5() {
    var index_a = 0;
    var txt = "\t\t\t\t#b請選擇要分解的裝備\r\n#b";
    var indexof = 1;
    var newItemList = Array();
    for (var j = 1; j <= 96; j++) {
        var item = player.getInventorySlot(1, j);
        if (item == null) {
            continue;
        }
        for (var i = 0; i < hhitemlist.length; i++) {
            if (hhitemlist[i] == item.getDataId()) {
                newItemList[j] = item.getDataId();
                break;
            }
        }
    }
    for (var key in newItemList) {
        txt += "#L" + key + "##v" + newItemList[key] + "##z" + newItemList[key] + "#";
        index_a++;
        if (indexof > 1 && indexof % 2 == 0) {
            txt += "\r\n";
        }
        indexof++;
    }
    if (index_a <= 0) {
        npc.say("#r您沒有可以分解的裝備。");
    } else {
        var selection = npc.askMenuS(txt, true);
        var item = player.getInventorySlot(parseInt(inventoryType), parseInt(selection));
        deleteSlot = selection;
        deleteQuantity = 1;
        itemq = getType(item.getDataId());
        var str = item.getTitle();
        var CUC = item.getCUC();
        if (bag(4) < 2) {
            npc.say("#b其他欄格子不足，請整理後分解。");

        } else if (CUC > 0) {
            npc.say("#r砸過卷的裝備不能進行分解,如需分解請回真裝備!");
        } else {
            player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
            player.gainItem(4250001, 2);
            txt = "#r分解成功，獲得了#v4250001 #X2個";
            npc.say(txt);
        }
    }
    resolve5();
}
function resolve6() {
    var index_a = 0;
    var txt = "\t\t\t\t#b請選擇要分解的裝備\r\n#b";
    var indexof = 1;
    var newItemList = Array();
    for (var j = 1; j <= 96; j++) {
        var item = player.getInventorySlot(1, j);
        if (item == null) {
            continue;
        }
        for (var i = 0; i < smitemlist.length; i++) {
            if (smitemlist[i] == item.getDataId()) {
                newItemList[j] = item.getDataId();
                break;
            }
        }
    }
    for (var key in newItemList) {
        txt += "#L" + key + "##v" + newItemList[key] + "##z" + newItemList[key] + "#";
        index_a++;
        if (indexof > 1 && indexof % 2 == 0) {
            txt += "\r\n";
        }
        indexof++;
    }
    if (index_a <= 0) {
        npc.say("#r您沒有可以分解的裝備。");
    } else {
        var selection = npc.askMenuS(txt, true);
        var item = player.getInventorySlot(parseInt(inventoryType), parseInt(selection));
        deleteSlot = selection;
        deleteQuantity = 1;
        itemq = getType(item.getDataId());
        var str = item.getTitle();
        var CUC = item.getCUC();
        if (bag(4) < 2) {
            npc.say("#b其他欄格子不足，請整理後分解。");

        } else if (CUC > 0) {
            npc.say("#r砸過卷的裝備不能進行分解,如需分解請回真裝備!");
        } else {
            player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
            player.gainItem(4250002, 1);
            txt = "#r分解成功，獲得了#v4250002 #X1個";
            npc.say(txt);
        }
    }
    resolve6();
}
function resolve7() {
    var index_a = 0;
    var txt = "\t\t\t\t#b請選擇要分解的裝備\r\n#b";
    var indexof = 1;
    var newItemList = Array();
    for (var j = 1; j <= 96; j++) {
        var item = player.getInventorySlot(1, j);
        if (item == null) {
            continue;
        }
        for (var i = 0; i < qhitemlist.length; i++) {
            if (qhitemlist[i] == item.getDataId()) {
                newItemList[j] = item.getDataId();
                break;
            }
        }
    }
    for (var key in newItemList) {
        txt += "#L" + key + "##v" + newItemList[key] + "##z" + newItemList[key] + "#";
        index_a++;
        if (indexof > 1 && indexof % 2 == 0) {
            txt += "\r\n";
        }
        indexof++;
    }
    if (index_a <= 0) {
        npc.say("#r您沒有可以分解的裝備。");
    } else {
        var selection = npc.askMenuS(txt, true);
        var item = player.getInventorySlot(parseInt(inventoryType), parseInt(selection));
        deleteSlot = selection;
        deleteQuantity = 1;
        itemq = getType(item.getDataId());
        var str = item.getTitle();
        var CUC = item.getCUC();
        if (bag(4) < 2) {
            npc.say("#b其他欄格子不足，請整理後分解。");

        } else if (CUC > 0) {
            npc.say("#r砸過卷的裝備不能進行分解,如需分解請回真裝備!");
        } else {
            player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
            player.gainItem(4250302, 2);
            txt = "#r分解成功，獲得了#v4250302 #X2個";
            npc.say(txt);
        }
    }
    resolve7();
}
function resolve8() {
    var index_a = 0;
    var txt = "\t\t\t\t#b請選擇要分解的裝備\r\n#b";
    var indexof = 1;
    var newItemList = Array();
    for (var j = 1; j <= 96; j++) {
        var item = player.getInventorySlot(1, j);
        if (item == null) {
            continue;
        }
        for (var i = 0; i < yhitemlist.length; i++) {
            if (yhitemlist[i] == item.getDataId()) {
                newItemList[j] = item.getDataId();
                break;
            }
        }
    }
    for (var key in newItemList) {
        txt += "#L" + key + "##v" + newItemList[key] + "##z" + newItemList[key] + "#";
        index_a++;
        if (indexof > 1 && indexof % 2 == 0) {
            txt += "\r\n";
        }
        indexof++;
    }
    if (index_a <= 0) {
        npc.say("#r您沒有可以分解的裝備。");
    } else {
        var selection = npc.askMenuS(txt, true);
        var item = player.getInventorySlot(parseInt(inventoryType), parseInt(selection));
        deleteSlot = selection;
        deleteQuantity = 1;
        itemq = getType(item.getDataId());
        var str = item.getTitle();
        var CUC = item.getCUC();
        if (bag(4) < 2) {
            npc.say("#b其他欄格子不足，請整理後分解。");

        } else if (CUC > 0) {
            npc.say("#r砸過卷的裝備不能進行分解,如需分解請回真裝備!");
        } else {
            if (player.getEventValue("永恆強化分解次數") > 0) {
                player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
                player.gainItem(4310330, 1);
                player.resetEventValue("永恆強化分解次數");
                txt = "#r分解成功，獲得了#v4310330 #X1個";
                npc.say(txt);
            } else {
                player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
                player.addEventValue("永恆強化分解次數", 1, 3000);
                txt = "#b分解成功，下次分解獲得硬幣";
                npc.say(txt);
            }
        }
    }
    resolve8();
}
function resolve9() {
    var index_a = 0;
    var txt = "\t\t\t\t#b請選擇要分解的裝備\r\n#b";
    var indexof = 1;
    var newItemList = Array();
    for (var j = 1; j <= 96; j++) {
        var item = player.getInventorySlot(1, j);
        if (item == null) {
            continue;
        }
        for (var i = 0; i < csitemlist.length; i++) {
            if (csitemlist[i] == item.getDataId()) {
                newItemList[j] = item.getDataId();
                break;
            }
        }
    }
    for (var key in newItemList) {
        txt += "#L" + key + "##v" + newItemList[key] + "##z" + newItemList[key] + "#";
        index_a++;
        if (indexof > 1 && indexof % 2 == 0) {
            txt += "\r\n";
        }
        indexof++;
    }
    if (index_a <= 0) {
        npc.say("#r您沒有可以分解的裝備。");
    } else {
        var selection = npc.askMenuS(txt, true);
        var item = player.getInventorySlot(parseInt(inventoryType), parseInt(selection));
        deleteSlot = selection;
        deleteQuantity = 1;
        itemq = getType(item.getDataId());
        var str = item.getTitle();
        var CUC = item.getCUC();
        if (bag(4) < 2) {
            npc.say("#b其他欄格子不足，請整理後分解。");

        } else if (CUC > 0) {
            npc.say("#r砸過卷的裝備不能進行分解,如需分解請回真裝備!");
        } else {
            if (player.getEventValue("創世強化分解次數") > 0) {
                player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
                player.gainItem(4310144, 1);
                player.resetEventValue("創世強化分解次數");
                txt = "#r分解成功，獲得了#v4310144 #X1個";
                npc.say(txt);
            } else {
                player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
                player.addEventValue("創世強化分解次數", 1, 3000);
                txt = "#b分解成功，下次分解獲得硬幣";
                npc.say(txt);
            }
        }
    }
    resolve9();
}
function resolve10() {
    var index_a = 0;
    var txt = "\t\t\t\t#b請選擇要分解的裝備\r\n#b";
    var indexof = 1;
    var newItemList = Array();
    for (var j = 1; j <= 96; j++) {
        var item = player.getInventorySlot(1, j);
        if (item == null) {
            continue;
        }
        for (var i = 0; i < pgitemlist.length; i++) {
            if (pgitemlist[i] == item.getDataId()) {
                newItemList[j] = item.getDataId();
                break;
            }
        }
    }
    for (var key in newItemList) {
        txt += "#L" + key + "##v" + newItemList[key] + "##z" + newItemList[key] + "#";
        index_a++;
        if (indexof > 1 && indexof % 2 == 0) {
            txt += "\r\n";
        }
        indexof++;
    }
    if (index_a <= 0) {
        npc.say("#r您沒有可以分解的裝備。");
    } else {
        var selection = npc.askMenuS(txt, true);
        var item = player.getInventorySlot(parseInt(inventoryType), parseInt(selection));
        deleteSlot = selection;
        deleteQuantity = 1;
        itemq = getType(item.getDataId());
        var str = item.getTitle();
        var CUC = item.getCUC();
        if (bag(4) < 2) {
            npc.say("#b其他欄格子不足，請整理後分解。");

        } else if (CUC > 0) {
            npc.say("#r砸過卷的裝備不能進行分解,如需分解請回真裝備!");
        } else {
            player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
            player.gainItem(4009396, 100);
            player.resetEventValue("魔法馬車分解次數");
            txt = "#r分解成功，獲得了#v4009396 #X100個";
            npc.say(txt);
        }
    }
    resolve10();
}
function resolve11() {
    var index_a = 0;
    var txt = "\t\t\t\t#b請選擇要分解的裝備\r\n#b";
    var indexof = 1;
    var newItemList = Array();
    for (var j = 1; j <= 96; j++) {
        var item = player.getInventorySlot(6, j);
        if (item == null) {
            continue;
        }
        for (var i = 0; i < pgdzitemlist.length; i++) {
            if (pgdzitemlist[i] == item.getDataId()) {
                newItemList[j] = item.getDataId();
                break;
            }
        }
    }
    for (var key in newItemList) {
        txt += "#L" + key + "##v" + newItemList[key] + "##z" + newItemList[key] + "#";
        index_a++;
        if (indexof > 1 && indexof % 2 == 0) {
            txt += "\r\n";
        }
        indexof++;
    }
    if (index_a <= 0) {
        npc.say("#r您沒有可以分解的裝備。");
    } else {
        var selection = npc.askMenuS(txt, true);
        var item = player.getInventorySlot(parseInt(6), parseInt(selection));
        deleteSlot = selection;
        deleteQuantity = 1;
        itemq = getType(item.getDataId());
        var str = item.getTitle();
        var CUC = item.getCUC();
        if (bag(4) < 2) {
            npc.say("#b其他欄格子不足，請整理後分解。");
        } else if (CUC > 0) {
            npc.say("#r砸過卷的裝備不能進行分解,如需分解請回真裝備!");
        } else {
            player.loseInvSlot(parseInt(6), parseInt(deleteSlot));
            player.gainItem(4009396, 100);
            player.resetEventValue("魔法馬車點裝分解次數");
            txt = "#r分解成功，獲得了#v4009396 #X100個";
            npc.say(txt);
        }
    }
    resolve11();
}
function sayStr() {
    var txt = "";
    txt += "#b【通用系列】:  獲得#v4250100##z4250100##r*2#b個\r\n";
    txt += "#b【副手系列】:  獲得#v4250101##z4250101##r*1#b個\r\n";
    txt += "#b【深淵系列】:  獲得#v4250000##z4250000##r*2#b個\r\n";
    txt += "#b【航海系列】:  獲得#v4250001##z4250001##r*2#b個\r\n";
    txt += "#b【神秘系列】:  獲得#v4250002##z4250002##r*1#b個\r\n";
    txt += "#b【培羅德系列】:獲得#v4250102##z4250102##r*1-3#b個\r\n";
    txt += "#b【魔法馬車系列】:獲得#v4009396##z4009396##r*100#b個\r\n";
    txt += "#b【漆黑系列】:  獲得#v4250302##z4250302##r*2#b個\r\n";
    //txt += "#b【永恆系列】:  獲得#v4310330##z4310330##r*0.5#b個\r\n";
    //txt += "#b【創世系列】:  獲得#v4310144##z4310144##r*0.5#b個\r\n";
    npc.say(txt);
}

function getType(itemID) {
    var itemq = 20;
    for (var i = 0; i < itemlist.length; i++) {
        if (itemlist[i] == itemID) {
            itemq = 10;
        }
    }
    return itemq;
}

function bag(type) {
    let bagCount = 0;
    for (var slot = 1; slot < 129; slot++) {
        let item = player.getInventorySlot(type, slot);
        if (item == null) {
            bagCount++
        }
    }
    return bagCount;
}
