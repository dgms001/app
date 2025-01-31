var itemlist = new Array(
    //需要上架的物品放入 禁止上架裝備
    //Array(2049116,1),//强化混沌
    /*Array(4009454,1),//楓之谷世界的元素 草原
    //跑環
    Array(4000000,1),
    Array(4000001,1),
    Array(4000014,1),
    Array(4000034,1),
    Array(4000048,1),
    Array(4000331,1),
    Array(4000330,1),
    Array(4000296,1),
    Array(4000002,1),
    Array(4000011,1),
    Array(4000622,1),
    Array(4000028,1),
    Array(4000242,1),
    Array(4000051,1),
    Array(4000595,1),
    Array(4000596,1),
    Array(4000597,1),
    Array(4000598,1),
    Array(4000601,1),
    Array(4000602,1),
    Array(4000156,1),
    Array(4000155,1),
    Array(4000167,1),
    Array(4000106,1),
    Array(4000073,1),
    Array(4000232,1),
    Array(4000233,1),
    Array(4000238,1),
    Array(4000050,1),
    Array(4000060,1),
    Array(4000069,1),
    Array(4000083,1),
    Array(4000106,1),
    Array(4000107,1),
    Array(4000277,1),
    Array(4000295,1),
    Array(4000328,1),
    Array(4000325,1),
    Array(4000236,1),
    Array(4000447,1),
    Array(4000068,1),
    Array(4000295,1),
    Array(4000334,1),
    Array(4000360,1),
    Array(4000115,1),
    Array(4000112,1),*/
    //卷軸
    Array(2048812, 1), //寵物裝備物攻
    Array(2048813, 1), //魔攻
    Array(2612019, 1), //雙手武器物攻
    Array(2612020, 1), //魔攻
    Array(2613012, 1), //單手武器物攻
    Array(2613013, 1), //魔攻
    Array(2615005, 1), //飾品物攻
    Array(2615006, 1), //魔攻
    Array(2616000, 1), //防具物攻
    Array(2616001, 1), //魔攻
    //V  2630648,1),自選
    Array(2048819, 1), //寵物裝備物攻
    Array(2048820, 1), //魔攻
    Array(2612074, 1), //雙手武器物攻
    Array(2612075, 1), //魔攻
    Array(2613062, 1), //單手武器物攻
    Array(2613063, 1), //魔攻
    Array(2615041, 1), //飾品物攻
    Array(2615042, 1), //魔攻
    Array(2616072, 1), //防具物攻
    Array(2616072, 1), //魔攻
    //X
    Array(2048815, 1), //寵物裝備物攻
    Array(2048816, 1), //魔攻
    Array(2612055, 1), //雙手武器物攻
    Array(2612056, 1), //魔攻
    Array(2613048, 1), //單手武器物攻
    Array(2613049, 1), //魔攻
    Array(2615029, 1), //飾品物攻
    Array(2615030, 1), //魔攻
    Array(2616059, 1), //防具物攻
    Array(2616060, 1), //魔攻
    //B黑捲
    Array(2048825, 1),
    Array(2048826, 1),
    Array(2612080, 1),
    Array(2612081, 1),
    Array(2613068, 1),
    Array(2613069, 1),
    Array(2615051, 1),
    Array(2615052, 1),
    Array(2616216, 1),
    Array(2616217, 1),
	    //ry
 Array(2613070, 1),
 Array(2613071, 1),
 Array(2612082, 1),
 Array(2612083, 1),
 Array(2616218, 1),
 Array(2616219, 1),
 Array(2615054, 1),
 Array(2615055, 1),
 Array(2048830, 1),
 Array(2048831, 1),
 
 Array(2612089, 1),
 Array(2612090, 1),
 Array(2613076, 1),
 Array(2613077, 1),
 Array(2615060, 1),
 Array(2615061, 1),
 Array(2616224, 1),
 Array(2616225, 1),
 Array(2048848, 1),
 Array(2048849, 1),
 
 
 

    //自定義物品



 
);
var text = "#fs21##e#b請選擇你要寄售的物品\r\n";

for (var i = 1; i < 129; i++) {
    var item = player.getInventorySlot(2, i);
    if (item == null) {
        continue;
    } else if (isCashItem(item.getDataId())) {
        continue;
    } else {
        var flag = false;
        for (var j = 0; j < itemlist.length; j++) {
            if (itemlist[j][0] == item.getDataId()) {
                flag = true;
                break;
            }
        }
        if (!flag) {
            continue;
        } else {
            text += "#b#L" + i + "# #v" + item.getDataId() + "##t" + item.getDataId() + "# 持有:[#r#c" + item.getDataId() + "##b]#l\r\n";
        }
    }
}

text += "\r\n#r當前可寄售物品一覽:\r\n";
text += "#fs14##b";
for (var i = 0; i < itemlist.length; i++) {
    text += "#v" + itemlist[i][0] + "##z" + itemlist[i][0] + "#\r\n";
}

var pos = npc.askMenuA(text);
var text = "#fs14##b您將上架物品信息\r\n";
var item = player.getInventorySlot(2, pos);
text += "#v" + item.getDataId() + "##z" + item.getDataId() + "#\r\n";
text += "當前持有數量:[#r#c" + item.getDataId() + "##b]\r\n";
var number = npc.askNumber(text + "請輸入您要寄售的總數量", 1, 1, 5000);
var meso = npc.askNumber("#fs14##b#v" + item.getDataId() + "##z" + item.getDataId() + "#[#r" + number + "#b]個\r\n請輸入您出售的#r總價#b(單位為#v4009411#)#b\r\n", 1, 1, 200000);
var yes = npc.askYesNo("#fs14##b您確定要上架#v" + item.getDataId() + "##z" + item.getDataId() + "#[#r" + number + "#b]個\r\n總價格#r" + meso + "#b個#v4009411#嗎?");
if (yes == 1) {
    //將道具信息插入寄售裡
    var entid = getEntId(item);
    if (player.hasItem(item.getDataId(), number)) {
        var iid = getKeyId();
        addSale(entid, item.getDataId(), meso, number, iid); //
        addSaleHistory(entid, item.getDataId(), meso, number, iid); //記錄歷史流水
        player.loseItem(item.getDataId(), number);
        npc.say("#fs14##b上架成功");
        player.runScript("new_寄售卷軸");
    } else {
        npc.say("#fs14##b您要上架的道具數量不足");
    }
}

function addSale(entid, itemid, meso, number, iid) {
    var sql = " insert into dgms_sale(iid,characters_id,type,sn,itemid,number,paytime,meso)VALUES(?,?,2,?,?,?,now(),?) ";
    player.customSqlInsert(sql, iid, player.getId(), entid, itemid, number, meso);
}

function addSaleHistory(entid, itemid, meso, number, iid) {
    var sql = " insert into dgms_sale_history(iid,characters_id,type,sn,itemid,number,paytime,remark,meso,status)VALUES(?,?,2,?,?,?,now(),'" + player.getName() + "上架了" + player.makeItemWithId(itemid).getItemName() + "',?,'正在出售') ";
    player.customSqlInsert(sql, iid, player.getId(), entid, itemid, number, meso);
}

function getKeyId() {
    var sql = " SELECT (CASE WHEN max(iid) IS NULL THEN 1 ELSE max(iid) end ) id FROM dgms_sale_history LIMIT 1 ";
    var resultList = player.customSqlResult(sql);

    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        return parseInt(result.get("id")) + 1;
    }
    return 1;
}

function hasEquip(entid) {
    var sql = "SELECT itemid from inventoryitems_equip a where a.id = ? ";
    var resultList = player.customSqlResult(sql, entid);
    var itemid = -1;
    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        itemid = result.get("itemid");
    }
    return itemid;
}

function getEntId(item) {
    return item.toString().indexOf("EntId");
}

function isCashItem(itemid) {
    return player.makeItemWithId(itemid).getSN() > -1;
}
