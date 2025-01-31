start();
function start() {
    var itemArray = new Array();
    var sql = " SELECT iid, a.itemid, sn, a.meso,number FROM dgms_sale a WHERE type = 3 AND buy_id IS NULL ORDER BY paytime DESC ";
    var resultList = player.customSqlResult(sql);
    var text = "#fs14##b請選擇你要購買的道具(#r#e不能拆分購買#k#n)\r\n";
    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        var itemobj = new Array();
        itemobj.push(result.get("iid"));
        itemobj.push(result.get("itemid"));
        itemobj.push(result.get("meso"));
        itemobj.push(result.get("number"));
        itemArray.push(itemobj);
        text += "#fs16##b#L" + i + "# #v" + result.get("itemid") + "#[#t" + result.get("itemid") + "##b" + result.get("number") + "個]  [#r" + result.get("meso") + "#b楓葉]#l\r\n"
    }

    var index = npc.askMenuA(text);
    var iid = itemArray[index][0];
    var itemid = itemArray[index][1];
    var meso = itemArray[index][2];
    var number = itemArray[index][3];
    var yes = npc.askYesNo("#fs14##b您是否要購買#v" + itemid + "#[#t" + itemid + "#" + "" + number + "] [#r" + meso + "#b個楓葉]?\r\n");
    if (yes == 1) {
        if (!player.canGainItem(itemid, number)) {
            npc.say("#fs14##b請確定好背包是否有空餘位置.");
        } else if (!player.hasItem(4032053, meso)) {
            npc.say("#fs14##b#v4032053##z4032053#*" + meso + "");
        } else {
            //扣除現金
            var sql = " SELECT * from dgms_sale_history where iid = ? limit 1 ";
            var resultList = player.customSqlResult(sql, iid);
            for (var i = 0; i < resultList.size(); i++) {
                var result = resultList.get(i);
                if (result == null) {
                    break;
                }

                if (result.get("status") == "已售出") {

                    player.addEventValue("物品已被出售", 1, 1000);

                    npc.say("#fs14##b物品已被出售\r\n");

                    return;
                }

                if (result.get("status") == "已下架") {

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
                        npc.broadcastNotice("代碼ID:2");
                        */
                    npc.say("#fs14##b你這個操作是要做什麼?\r\n我先記錄起來了,下次再犯,直接BAN\r\n");

                    return;
                }
            }



            //player.loseMesos(meso);
            //loseRMB(-meso,iid);
            //刪除寄售表
            player.loseItem(4032053, meso);
            removeSale(iid);
            //修改購買人
            modifyBuyId(iid);
            player.gainItem(itemid, number);
            npc.say("#fs14##b購買成功!");
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
        if (result.get("status") == "已下架") {
            npc.say("你擱這裡卡bug呢?")
            return;
        }
    }
}*/
function loseRMB(rmb, id) {
    var myAccountName = getAccountName();
    var sql = "insert into dgms_rmb(account, rmb, paytime,remark) values('" + myAccountName + "'," + rmb + ",now(),'購買道具id:" + id + "')";

    //java.lang.System.out.println(sql);
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
        var accountName = result.get("name");
    }
    return accountName;
}

function modifyBuyId(iid) {
    var sql = " update dgms_sale_history set buy_id = ?,status='已售出',time=now() where iid = ? ";
    player.customSqlUpdate(sql, player.getId(), iid);
}

function removeSale(iid) {
    var sql = " delete from dgms_sale where iid = ? ";
    player.customSqlUpdate(sql, iid);
}
