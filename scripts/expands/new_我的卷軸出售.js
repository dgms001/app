var discount = 0.95; //改手續費 目前8折   0.9995=1e收5萬楓幣
start();
function start() {
    var sql = "SELECT ";
    sql += " (select name from characters b where b.id = a.characters_id) sale, ";
    sql += " (select name from characters b where b.id = a.buy_id) buy,status,  ";
    sql += " a.itemid,a.meso,a.iid,a.number FROM dgms_sale_history a where characters_id = ? order by iid desc "
    //java.lang.System.out.println(sql);
    var resultList = player.customSqlResult(sql, player.getId());
    //var text = "道具\t\t價格\t\t出售\t\t購買\t\t操作\r\n";
    var text = "";
    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        //"+result.get("sale")+"
        if (result.get("status") == "已售出") {
            text += "#b#L" + result.get("iid") + "##v" + result.get("itemid") + "# [" + result.get("meso") + "楓葉] " + (result.get("buy") == null ? "-" : result.get("buy")) + "  #b領取現金#k#l\r\n";
        } else if (result.get("status") == "正在出售") {
            text += "#r#L" + result.get("iid") + "##v" + result.get("itemid") + "# [" + result.get("meso") + "楓葉] " + (result.get("buy") == null ? "-" : result.get("buy")) + "  #r道具下架#l\r\n";
        } else if (result.get("status") == "已下架") {
            text += "#r#L" + result.get("iid") + "##v" + result.get("itemid") + "# [" + result.get("meso") + "楓葉] " + (result.get("buy") == null ? "-" : result.get("buy")) + "  #r已下架#k#l\r\n";
        } else if (result.get("status") == "領過現金") {
            text += "#r#L" + result.get("iid") + "##v" + result.get("itemid") + "# [" + result.get("meso") + "楓葉] " + (result.get("buy") == null ? "-" : result.get("buy")) + "  #r領過現金#k#l\r\n";

        }
    }
    var iid = npc.askMenu(text)
    findEquipAttr(iid);
}

function findEquipAttr(iid) {
    var text = "";
    var sql = " SELECT * from dgms_sale_history where iid = ? limit 1 ";
    var resultList = player.customSqlResult(sql, iid);

    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        if (result.get("buy_id") > 0 && result.get("status") == "已售出") {
            text = "#fs14##b物品售出價格:[#r" + Math.floor(result.get("meso") * 100) / 100 + "#b楓葉]\r\t扣除系統手續費#r" + Math.floor((result.get("meso") * (1 - discount)) * 100) / 100 + "#b\r\n可獲得[#r" + Math.floor((result.get("meso") * discount) * 100) / 100 + "楓葉#b]\r\n您是否要領取?";
            var yes = npc.askYesNo(text);
            if (yes == 1) {
                //修改狀態
                player.gainItem(4032053, result.get("meso") * discount);
                modifyBuyIdRMB(iid);
                //增加現金
                gainRMB(result.get("meso") * discount, iid);
                npc.say("#fs14##b成功領取:[#r" + Math.floor((result.get("meso") * discount) * 100) / 100 + "楓葉#b]");
                player.runScript("new_我的卷軸出售");
            }
        } else if (result.get("status") == "正在出售") {

            text += "#fs14##b您是否要下架:#v" + result.get("itemid") + "# [" + result.get("number") + "個]";
            var sel = npc.askYesNo(text);
            if (sel == 1) {
                if (player.canGainItem(result.get("itemid"), result.get("number"))) {
                    //刪除寄售表
                    var sql = " SELECT * from dgms_sale_history where iid = ? limit 1 ";
                    var resultList = player.customSqlResult(sql, iid);

                    for (var i = 0; i < resultList.size(); i++) {
                        var result = resultList.get(i);
                        if (result == null) {
                            break;
                        }
                        if (result.get("status") == "已售出") {
                            player.addEventValue("拍賣卡BUG玩家", 1, 1000);
                            /*
                        npc.broadcastNotice("嚴重警告1次,非常嚴重,注意點!!!!!!!!!!!!!!!!!!");
                        npc.broadcastNotice("看到的玩家,立刻截圖給Gm!!!!!!!!!!!!!!!!!!!!");
                        npc.broadcastNotice("嚴重警告1次,非常嚴重,注意點!!!!!!!!!!!!!!!!!!");
                        npc.broadcastNotice("看到的玩家,立刻截圖給Gm!!!!!!!!!!!!!!!!!!!!");
                        npc.broadcastNotice("嚴重警告1次,非常嚴重,注意點!!!!!!!!!!!!!!!!!!");
                        npc.broadcastNotice("看到的玩家,立刻截圖給Gm!!!!!!!!!!!!!!!!!!!!");
                        npc.broadcastNotice("嚴重警告1次,非常嚴重,注意點!!!!!!!!!!!!!!!!!!");
                        npc.broadcastNotice("看到的玩家,立刻截圖給Gm!!!!!!!!!!!!!!!!!!!!");
                        npc.broadcastNotice("代碼ID:1");
                        */
                            npc.say("#fs14##b你這個操作是要做什麼?\r\n我先記錄起來了,下次再犯,直接BAN\r\n");
                            return;

                        }
                    }
                    removeSale(iid);
                    modifyBuyIdStatus(iid);
                    player.gainItem(result.get("itemid"), result.get("number"));
                    npc.say("#fs14##b下架成功!");
                    player.runScript("new_我的卷軸出售");
                } else {
                    npc.say("#fs14##b請整理下背包!");
                }
            }
        } else {
            npc.say("#v" + result.get("itemid") + "# x " + result.get("number") + " " + result.get("status"));
            player.runScript("new_我的卷軸出售");
        }
    }
}
/*
function query(iid) {
    var sql = " SELECT * from dgms_sale_history where iid = ? limit 1 ";
    var resultList = player.customSqlResult(sql, iid);

    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        if (result.get("status") == "已售出") {
            npc.say("你擱這裡卡bug呢?")
            return;

        }
    }
}*/

function removeSale(iid) {
    var sql = " delete from dgms_sale where iid = ? ";
    player.customSqlUpdate(sql, iid);
}
function modifyBuyIdRMB(iid) {
    var sql = " update dgms_sale_history set status = '領過現金' where iid = ? ";
    player.customSqlUpdate(sql, iid);
}

function modifyBuyIdStatus(iid) {
    var sql = " update dgms_sale_history set status = '已下架' where iid = ? ";
    player.customSqlUpdate(sql, iid);
}

function gainRMB(rmb, id) {
    var myAccountName = getAccountName();
    var sql = "insert into dgms_rmb(account, rmb, paytime,remark) values('" + myAccountName + "'," + rmb + ",now(),'出售道具id:" + id + "')";
    player.customSqlInsert(sql);
}

function getAccountName() {
    var sql = "select name from accounts where id = (select accounts_id from characters where id = " + player.getId() + ");";
    var resultList = player.customSqlResult(sql);
    var accountName = 0;
    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        accountName = result.get("name");
    }
    return accountName;
}
