/*
裝備出售
 */
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";

var text;
var itemList = new Array();
var inventoryType;
var deleteSlot;
var deleteQuantity;
var typed = 0;
var beDeletedArr = new Array();
var beDeletedArr1 = new Array();
var beDeletedArr2 = new Array();
var beDeletedArr3 = new Array();
var beDeletedArr4 = new Array();
var listq = Array(
    5000, 7000, 10000
);

var itemlist = Array(
    1212120,
    1222113,
    1232113,
    1562009,
    1242121,
    1242122,
    1572009,
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
    1403018


);

var itemlist1 = Array(
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
    1152196
);

var chance = 0;

var itemq = 0;



var newItemList = Array();
inventoryType = 1;
var indexof = 1;
var item = null;
var text = "\t#r#e- 注意這是一鍵回收你裝備欄所有神秘裝備 -#n\r\n#r";
text += "\t#e- 注意這是一鍵回收你裝備欄所有神秘裝備 -#n\r\n#r";
text += "\t#e- 注意這是一鍵回收你裝備欄所有神秘裝備 -#n\r\n#r";
for (var j = 1; j <= 128; j++) {
    item = player.getInventorySlot(1, j);
    if (item == null) {
        continue;
    }

    if (null != itemlist && itemlist.length > 0) {
        var flag = null;
        for (var i = 0; i < itemlist.length; i++) {
            flag = true;
            if (itemlist[i] == item.getDataId()) {
                flag = false;
                break;
            }
        }
    }
    if (flag) {
        if (null != itemlist1 && itemlist1.length > 0) {
            var flag = null;
            for (var i = 0; i < itemlist1.length; i++) {
                flag = true;
                if (itemlist1[i] == item.getDataId()) {
                    flag = false;
                    break;
                }

            }
        }
    }



    if (item.getCUC() > 0) {
        continue;//說明強化過
    }
    if (item.getGrade() > 17) {
        continue;//說明有潛能
    }
    if (flag) {
        continue;
    }


    newItemList.push(item.getDataId());
    beDeletedArr.push(j);

}

for (var key in newItemList) {
    text += "#v" + newItemList[key] + "#";
    indexof++;
}
text += "\r\n#r#e回收操作不可逆，請確認是否要回收以上裝備？#n#k\r\n可以獲得:#v4310218# x " + newItemList.length * 1 + "個可以獲得:#v4023025# x " + newItemList.length * 1 + "個";

if (newItemList.length <= 0 || beDeletedArr.length == 0) {
    npc.say("您沒有可以回收的裝備。" + newItemList);
} else if (bag(1) < 1 || bag(2) < 1 || bag(3) < 1 || bag(4) < 1) {
    npc.say("請將裝備，消耗，其他欄空出一格空間！");
} else {
    var ys = npc.askYesNo(text);
    if (ys == 1) {
        var count = beDeletedArr.length * 1;
        var count1 = beDeletedArr.length * 1;

        var indexPosi = 0;
        for (var key in beDeletedArr) {
            if (beDeletedArr[key] > 128) {
                indexPosi = beDeletedArr[key];
            }
        }
        for (var key in beDeletedArr) {
            player.loseInvSlot(1, beDeletedArr[key]);
        }
        player.gainItem(4310218, count);
        player.gainItem(4023025, count1);

        text = "回收成功，獲得了" + count + "x個#v4310218#個 " + count1 + "x個#v4023025#";
        npc.say(text);
    }

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
