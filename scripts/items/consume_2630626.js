var List = Array(
    Array("力量", "Str"),
    Array("敏捷", "Dex"),
    Array("智力", "Int"),
    Array("運氣", "Luk")
);
var Code = [-1600, -1601, -1602, -1603, -1604, -1605];

text = "請選擇神祕徽章槽位：\r\n";
for (i = 1; i < 7; i++) {
    text += "#L" + i + "# #b神祕徽章欄位第" + i + "格#k#l\r\n";
}
let selMenu1 = npc.askMenu(text);
/ ------------------------------------------------------------ /
let item = player.getInventorySlot(-1, Code[selMenu1 - 1]);
if (item != null) {
    var str1 = "'" + item + "'";
    var num1 = str1.replace(/[^0-9]/g, '');
    if (num1 > 24) {
        var num差距 = (num1.length - 24);
        var ItemID = num1.substr((num差距 - 1), 7);
    } else {
        var ItemID = num1.substr(0, 7);
    }
    text = "請選擇升級模式：\r\n";
    for (i = 0; i < List.length; i++) {
        text += "#L" + i + "##r" + List[i][0] + "#b 轉換 其他屬性#k#l\r\n";
    }
    text += "\r\n";
    let selMenu2 = npc.askMenu(text);
    / ------------------------------------------------------------ /
    text = "請選擇 #r" + List[selMenu2][0] + "#k 要轉換成哪個屬性？：\r\n";
    for (i = 0; i < List.length; i++) {
        if (List[i][0] != List[selMenu2][0]) {
            text += "#L" + i + "##b" + List[i][0] + "#k#l\r\n";
        }
    }
    text += "\r\n";
    let selMenu3 = npc.askMenu(text);
    / ------------------------------------------------------------ /
    text = "#b您需要互換您的裝備的#r" + List[selMenu2][0] + List[selMenu3][0] + "#b嗎？\r\n";
    text += "說明：只支援神祕徽章,請將裝備放到神祕徽章槽位中\r\n"
    text += "#g重點說明#r:您需要 1 餘額才可以使用這個功能\r\n"
    text += "\r\n#L1##b我要互換！#l#k";
    npc.askMenu(text);
    / ------------------------------------------------------------ /
    text = "#b您確定要將#v" + ItemID + "# #z" + ItemID + "##r 當前屬性：\r\n";
    if (List[selMenu2][1] == "Str") {
        get = item.getStr();
    }
    if (List[selMenu2][1] == "Dex") {
        get = item.getDex();
    }
    if (List[selMenu2][1] == "Int") {
        get = item.getInt();
    }
    if (List[selMenu2][1] == "Luk") {
        get = item.getLuk();
    }
    if (List[selMenu3][1] == "Str") {
        get1 = item.getStr();
    }
    if (List[selMenu3][1] == "Dex") {
        get1 = item.getDex();
    }
    if (List[selMenu3][1] == "Int") {
        get1 = item.getInt();
    }
    if (List[selMenu3][1] == "Luk") {
        get1 = item.getLuk();
    }
    text += List[selMenu2][0] + ":" + get + "\r\n";
    text += List[selMenu3][0] + ":" + get1 + "\r\n";
    text += "#b確定互換？\r\n";
    text += "#L1#我確定#l";
    npc.askMenu(text);
    if (getHyPay(1) < 1) {
        npc.say("您的餘額不足！");
    } else if (get <= 0) {
        npc.say("您選擇的神祕徽章升級模式屬性為 0");
    } else {
        if (List[selMenu3][1] == "Str") {
            item.setStr(get);
            item.setDex(0);
            item.setInt(0);
            item.setLuk(0);
        }
        if (List[selMenu3][1] == "Dex") {
            item.setStr(0);
            item.setDex(get);
            item.setInt(0);
            item.setLuk(0);
        }
        if (List[selMenu3][1] == "Int") {
            item.setStr(0);
            item.setDex(0);
            item.setInt(get);
            item.setLuk(0);
        }
        if (List[selMenu3][1] == "Luk") {
            item.setStr(0);
            item.setDex(0);
            item.setInt(0);
            item.setLuk(get);
        }
        player.updateItem(Code[selMenu1 - 1], item);
        gainHyPay(-1);
        npc.say("您已互換#v" + ItemID + "# #z" + ItemID + "#的" + List[selMenu2][0] + List[selMenu3][0] + "");
    }
    / ------------------------------------------------------------ /
} else {
    npc.say("您選擇的神祕徽章槽位中並未配戴神祕徽章。");
}
/ ------------------------------------------------------------ /

/* 查詢帳號 */
function getAccountName() {
    var sql = "select name,id from accounts where id=" + player.getAccountId() + " order by name limit 1;";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        var name = result.get("name");
    }
    return name;
}

/* 獲取餘額 */
function getHyPay(type) {
    var sql = "select * from hypay where accname = '" + getAccountName() + "'";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        if (type == 1) {
            var pay = result.get("pay");
        } else if (type == 2) {
            var pay = result.get("payUsed");
        } else if (type == 3) {
            var pay = result.get("payReward");
        }
    } else {
        player.customSqlInsert("INSERT INTO `hypay` (`accname`, `name`) VALUES ('" + getAccountName() + "', '" + player.getName() + "')");
        return getHyPay(1);
    }
    return pay;
}

/* 給予餘額 */
function gainHyPay(count) {
    var sql = "update hypay set pay = pay+? where accname = '" + getAccountName() + "';";
    player.customSqlUpdate(sql, count);
}