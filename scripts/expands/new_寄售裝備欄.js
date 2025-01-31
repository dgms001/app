var itemlist = new Array(
    Array(1062289, 1),
    Array(1062288, 1),
    Array(1062287, 1),
    Array(1062286, 1),
    Array(1062285, 1),
    Array(1042435, 1),
    Array(1042436, 1),
    Array(1042437, 1),
    Array(1042434, 1),
    Array(1042433, 1),
    Array(1005984, 1),
    Array(1005983, 1),
    Array(1005982, 1),
    Array(1005981, 1),
    Array(1005980, 1),
    Array(1582017, 1),
    Array(1232109, 1),
    Array(1402251, 1),
    Array(1302333, 1),
    Array(1312199, 1),
    Array(1322250, 1),
    Array(1412177, 1),
    Array(1422184, 1),
    Array(1432214, 1),
    Array(1442268, 1),
    Array(1542108, 1),
    Array(1213017, 1),
    Array(1212115, 1),
    Array(1372222, 1),
    Array(1382259, 1),
    Array(1552110, 1),
    Array(1252093, 1),
    Array(1262017, 1),
    Array(1282016, 1),
    Array(1522138, 1),
    Array(1592019, 1),
    Array(1452252, 1),
    Array(1462239, 1),
    Array(1214017, 1),
    Array(1242116, 1),
    Array(1332274, 1),
    Array(1342101, 1),
    Array(1362135, 1),
    Array(1472261, 1),
    Array(1292017, 1),
    Array(1272016, 1),
    Array(1222109, 1),
    Array(1482216, 1),
    Array(1492231, 1),
    Array(1532144, 1),
    Array(1403017, 1),
    Array(1004422, 1),
    Array(1004423, 1),
    Array(1004424, 1),
    Array(1004425, 1),
    Array(1004426, 1),
    Array(1073030, 1),
    Array(1073032, 1),
    Array(1073033, 1),
    Array(1073034, 1),
    Array(1073035, 1),
    Array(1082636, 1),
    Array(1082637, 1),
    Array(1082638, 1),
    Array(1082639, 1),
    Array(1082640, 1),
    Array(1102775, 1),
    Array(1102794, 1),
    Array(1102795, 1),
    Array(1102796, 1),
    Array(1102797, 1),
    Array(1152174, 1),
    Array(1152176, 1),
    Array(1152177, 1),
    Array(1152178, 1),
    Array(1152179, 1),
    Array(1012438, 1),
    Array(1022211, 1),
    Array(1212120, 1),
    Array(1222113, 1),
    Array(1232113, 1),
    Array(1242121, 1),
    Array(1242122, 1),
    Array(1252098, 1),
    Array(1262039, 1),
    Array(1302343, 1),
    Array(1312203, 1),
    Array(1322255, 1),
    Array(1332279, 1),
    Array(1342104, 1),
    Array(1362140, 1),
    Array(1372228, 1),
    Array(1382265, 1),
    Array(1402259, 1),
    Array(1412181, 1),
    Array(1422189, 1),
    Array(1432218, 1),
    Array(1442274, 1),
    Array(1452257, 1),
    Array(1462243, 1),
    Array(1472265, 1),
    Array(1482221, 1),
    Array(1492235, 1),
    Array(1522143, 1),
    Array(1532150, 1),
    Array(1542117, 1),
    Array(1552119, 1),
    Array(1582023, 1),
    Array(1272017, 1),
    Array(1282017, 1),
    Array(1592020, 1),
    Array(1213018, 1),
    Array(1292018, 1),
    Array(1214018, 1),
    Array(1403018, 1),
    Array(1004808, 1),
    Array(1004809, 1),
    Array(1004810, 1),
    Array(1004811, 1),
    Array(1004812, 1),
    Array(1053063, 1),
    Array(1053064, 1),
    Array(1053065, 1),
    Array(1053066, 1),
    Array(1053067, 1),
    Array(1073158, 1),
    Array(1073159, 1),
    Array(1073160, 1),
    Array(1073161, 1),
    Array(1073162, 1),
    Array(1082695, 1),
    Array(1082696, 1),
    Array(1082697, 1),
    Array(1082698, 1),
    Array(1082699, 1),
    Array(1102940, 1),
    Array(1102941, 1),
    Array(1102942, 1),
    Array(1102943, 1),
    Array(1102944, 1),
    Array(1152197, 1),
    Array(1152198, 1),
    Array(1152199, 1),
    Array(1152200, 1),
    Array(1152196, 1),
    Array(1162080, 1),
    Array(1162081, 1),
    Array(1162082, 1),
    Array(1162083, 1),
    Array(1032316, 1),
    Array(1132308, 1),
    Array(1012632, 1),
    Array(1022278, 1),
    Array(1122430, 1),
    Array(1113306, 1),
    Array(1182285, 1),
    Array(1190555, 1),
    Array(1190556, 1),
    Array(1190557, 1),
    Array(1190558, 1),
    Array(1190559, 1),
);
var text = "#fs21##e#r請選擇你要寄售的物品\r\n#fs16##r只能寄售未強化過的乾淨裝備,強化過上架屬性會初始化,不予補償#k\r\n#fs14#";

for (var i = 1; i < 96; i++) {
    var item = player.getInventorySlot(1, i);
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
var text = "#fs21##e#b您將上架物品信息#fs16#\r\n";
var item = player.getInventorySlot(1, pos);
text += "#v" + item.getDataId() + ":##z" + item.getDataId() + "#\r\n#r注意:請將滑鼠放在上架物品上,查看屬性,強化過上架屬性會初始化,不予補償\r\n\r\#r注意:請將滑鼠放在上架物品上,查看屬性,強化過上架屬性會初始化,不予補償\r\n\r\注意:請將滑鼠放在上架物品上,查看屬性,強化過上架屬性會初始化,不予補償\r\n";
text += "#b當前持有數量:[#r#c" + item.getDataId() + "##b]\r\n";
var number = npc.askNumber(text + "請輸入您要寄售的總數量", 1, 1, 1);
var meso = npc.askNumber("#fs14##b#v" + item.getDataId() + "##z" + item.getDataId() + "#[#r" + number + "#b]個\r\n請輸入您出售的#r總價#b(單位為#v4009411#)#b\r\n", 1, 1, 200000);
var yes = npc.askYesNo("#fs14##b您確定要上架#v" + item.getDataId() + "##z" + item.getDataId() + "#總價格#r" + meso + "#b個#v4009411#嗎?\r\n#r上架默認同意裝備屬性初始化!無法回溯/補償");
if (yes == 1) {
    //將道具信息插入寄售裡
    var entid = getEntId(item);
    if (player.hasItem(item.getDataId(), number)) {
        var iid = getKeyId();
        addSale(entid, item.getDataId(), meso, number, iid); //
        addSaleHistory(entid, item.getDataId(), meso, number, iid); //記錄歷史流水
        player.loseItem(item.getDataId(), number);
        npc.say("#fs14##b上架成功");
        player.runScript("new_寄售裝備欄");
    } else {
        npc.say("#fs14##b您要上架的道具數量不足");
    }
}

function addSale(entid, itemid, meso, number, iid) {
    var sql = " insert into dgms_sale(iid,characters_id,type,sn,itemid,number,paytime,meso)VALUES(?,?,1,?,?,?,now(),?) ";
    player.customSqlInsert(sql, iid, player.getId(), entid, itemid, number, meso);
}

function addSaleHistory(entid, itemid, meso, number, iid) {
    var sql = " insert into dgms_sale_history(iid,characters_id,type,sn,itemid,number,paytime,remark,meso,status)VALUES(?,?,1,?,?,?,now(),'" + player.getName() + "上架了" + player.makeItemWithId(itemid).getItemName() + "',?,'正在出售') ";
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
