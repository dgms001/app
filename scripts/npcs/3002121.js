var epp = "#fEffect/CharacterEff/1082312/0/0#"; //彩光
var ax = "#fEffect/CharacterEff/1112902/0/1#";  //藍色愛心
var ax2 = "#fEffect/CharacterEff/1112903/0/1#";  //紅色愛心
var tz6 = "#fEffect/CharacterEff/1112906/0/1#";//粉紅心 


var text = "#d#n#g" + ax + "" + tz6 + "" + ax2 + "" + tz6 + "" + ax + "" + ax + "" + tz6 + "" + ax2 + "森嶼交易平臺" + ax + "" + tz6 + "" + ax2 + "" + tz6 + "" + ax + "" + ax + "" + tz6 + "" + ax2 + "" + tz6 + "" + ax + "\r\n\r\n#r- - - - - - - - - - - - - - - -#l#n\r\n";

text += "" + ax + "" + tz6 + "" + ax2 + "" + tz6 + "#b誠信交易，杜絕行騙。#r注意如利用BUG等第三方軟體" + ax + "" + tz6 + "" + ax2 + "" + tz6 + "進行金錢交易將取消該使用者RMB提現功能，並凍結賬" + ax + "" + tz6 + "" + ax2 + "" + tz6 + "號，封停機械碼及閘道器IP！！！#d\r\n\r\n";
text += "" + ax + "" + tz6 + "" + ax2 + "" + tz6 + "#b涉及現金交易，請提防詐騙，也請妥善保管自己的賬號。如傻呵呵的被騙裝備，以及被騙洗號，GM 概不負責找回，也不會給予賠償。請誠信交易！#d\r\n\r\n";
text += "#L1#我要購買#l    #L2#我要寄售#l\r\n\r\n";
text += "#L3#交易記錄#l    #L4#我的出售#l\r\n\r\n";
// text+="#L5#提現申請#l    #L6#申請撤回#l\r\n\r\n";
if (player.isGm()) {
    text += "#L923#管理員稽覈#l"
}
var sel = npc.askMenu(text);
var commission = 0.3;
if (sel == 1) {
    var text = "請選擇你要購買的道具型別:\r\n";
    text += "#L1#裝備#l #L2#卷軸#l #L3#材料#l";
    var type = npc.askMenu(text);
    if (type == 1) {
        player.runScript("new_購買裝備")
    } else if (type == 2) {
        player.runScript("new_購買卷軸")
    } else if (type == 3) {
        player.runScript("new_購買材料")
    }
} else if (sel == 2) {
    var text = "請選擇你要寄售的道具型別:\r\n";
    text += "#L1#裝備#l #L2#卷軸#l #L3#材料#l";
    var type = npc.askMenu(text);
    if (type == 1) {
        player.runScript("new_寄售裝備")
    } else if (type == 2) {
        player.runScript("new_寄售卷軸")
    } else if (type == 3) {
        player.runScript("new_寄售材料")
    }
} else if (sel == 3) {
    var text = "請選擇你要檢視的交易型別:\r\n";
    text += "#L1#裝備#l #L2#卷軸#l #L3#材料#l";
    var type = npc.askMenu(text);
    if (type == 1) {
        player.runScript("new_裝備成交記錄")
    } else if (type == 2) {
        player.runScript("new_卷軸成交記錄")
    } else if (type == 3) {
        player.runScript("new_材料成交記錄")
    }
} else if (sel == 4) {
    var text = "請選擇你要檢視的交易型別:\r\n";
    text += "#L1#裝備#l #L2#卷軸#l #L3#材料#l";
    var type = npc.askMenu(text);
    if (type == 1) {
        player.runScript("new_我的裝備出售")
    } else if (type == 2) {
        player.runScript("new_我的卷軸出售")
    } else if (type == 3) {
        player.runScript("new_我的材料出售")
    }

} else if (sel == 5) {
    var number = npc.askNumber("請輸入你要提現的現金,您目前的現金為:" + getRMB() + "\r\n提現需要扣除" + commission * 100 + "%手續費。\r\n", 1, 1, getRMB());
    if (number <= getRMB()) {
        var yes = npc.askYesNo("您是否要進行申請提現" + number + ",\r\n扣除手續費" + parseInt(number * commission) + ",\r\n可得" + number * (1 - commission) + "RMB。");
        if (yes == 1) {
            loseRMB(-number, number * (1 - commission));
            npc.say("申請成功!");
        }
    } else {
        npc.say("操作出現問題.");
    }
} else if (sel == 6) {
    var sql = " select * from zz_rmb where account = ? and rmb<0 and remark like '提現申請%' ";
    var resultList = player.customSqlResult(sql, getAccountName());
    var text = "日期\t\t金額\t\t備註\t\t操作\r\n";
    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        text += "#r#L" + result.get("id") + "#" + result.get("paytime") + "\t￥" + result.get("rmb") + "\t" + result.get("remark") + "\t" + "\t#r撤回#k#l\r\n";
    }
    var id = npc.askMenu(text);

    deleteRmb(id);
    npc.say("撤銷成功!");

} else if (sel == 923) {
    if (player.isGm()) {
        var sql = " select * from zz_rmb where rmb<0 and remark like '提現申請%' ";
        var resultList = player.customSqlResult(sql);
        var maps = [];
        var text = "日期\t\t金額\t\t賬戶\t\t備註\t\t操作\r\n";
        for (var i = 0; i < resultList.size(); i++) {
            var result = resultList.get(i);
            if (result == null) {
                break;
            }

            text += "#r#L" + result.get("id") + "#" + result.get("paytime") + "\t￥" + result.get("rmb") + "\t賬戶：" + result.get("account") + "\t" + result.get("remark") + "\t" + "\t#r稽覈透過#k#l\r\n";
        }
        var id = npc.askMenu(text);
        var yes = npc.askYesNo("是否要將此提現稽覈透過");
        if (yes == 1) {
            modifyRmb(id);
            npc.say("稽覈透過！");
        }
    }
}

function modifyRmb(id) {
    var sql = "update  zz_rmb set remark = '" + player.getName() + "透過了此提現稽覈' where id = ? and remark like '提現申請%' ";
    player.customSqlUpdate(sql, id);
}

function deleteRmb(id) {
    var sql = "delete from zz_rmb where account = ? and id = ? and remark like '提現申請%' ";
    player.customSqlUpdate(sql, getAccountName(), id);
}

function loseRMB(rmb, coin) {
    var myAccountName = getAccountName();
    var sql = "insert into zz_rmb(account, rmb, paytime,remark) values('" + myAccountName + "'," + rmb + ",now(),'提現申請" + rmb + "現金為" + coin + "RMB')";
    player.customSqlInsert(sql);
}


function getRMB() {
    var sql = " select sum(rmb) rmb from zz_rmb where    account =  '" + getAccountName() + "' ";
    var resultList = player.customSqlResult(sql);
    var coin = 0;
    if (null != resultList) {
        for (var i = 0; i < resultList.size(); i++) {
            var result = resultList.get(i);
            if (result == null) {
                break;
            }
            coin = result.get("rmb");
            break;
        }
    }
    if (coin == null) {
        coin = 0;
    }
    return coin;
}

function getAccountName() {
    var sql = "select name from accounts where id = (select accountid accounts_id from characters where id = " + player.getId() + ");";
    var resultList = player.customSqlResult(sql);
    var accountName = 0;
    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        var accountName = result.get("name");
    }
    return accountName;
}

