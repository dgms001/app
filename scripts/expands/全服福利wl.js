//全服排行獎勵 by


let str = "#b武陵大會排行獎勵\r\n每週五重新整理！#n\r\n"
str += "#L1##r檢視可以領取的獎勵#l\r\n"
if (player.isGm()) {
    str += "#L2#管理員發放排行獎勵#l";
}
let selected = npc.askMenu(str, 9310072);

if (selected == 1) {
    //領取排行獎勵
    while (true) {
        let sql = "SELECT * FROM jili_world_gifts_wl WHERE accountName = '" + getAccountName() + "' and state = 0";
        let push = player.customSqlResult(sql);
        if (push.size() == 0) {
            npc.say("#b暫無可領取排行獎勵！", 9310072);
        } else {
            str = "#b請選擇領取哪一箇排行獎勵:\r\n";
            for (let i = 0; i < push.size(); i++) {
                let signle = push.get(i);
                str += "#L" + i + "# #r排行獎勵 本期發放日期:" + signle.get("date").toString().substring(0, 19) + "#l\r\n";
            }
            selected = npc.askMenu(str, 9310072);
            let gift = push.get(selected);
            let giftId = gift.get("id");
            let giftItemId = gift.get("itemId");
            let giftItemNumber = gift.get("itemNumber");
            let giftDate = gift.get("date").toString().substring(0, 19);

            str = "是否領取#v" + giftItemId + "##z" + giftItemId + "# x " + giftItemNumber;
            let YN = npc.askYesNo(str);
            if (YN == 1) {

                if (player.canGainItem(giftItemId, giftItemNumber)) {
                    player.customSqlUpdate("UPDATE jili_world_gifts_wl SET state = 1,getDate = NOW() WHERE id = '" + giftId + "';");
                    player.gainItem(giftItemId, giftItemNumber);
                    npc.broadcastPlayerNotice(3, "[武陵]：玩家" + player.getName() + "領取了武陵排行獎勵！")
                    npc.say("領取成功。");
                } else {
                    npc.say("請清理揹包");
                }

            } else {
                npc.say("想好再來吧");
            }
        }
    }
} else {
    //發放福利
    while (true) {
        str = "請輸入發放的物品程式碼";
        let type = npc.askNumber(str, "1", 1, 9999999);
        let items = player.makeItemWithId(type);
        if (items == null) {
            npc.say("物品程式碼不存在 請重新輸入！");
            continue;
        }
        typeTxt = "#v" + type + "# #z" + type + "#"
        str = "請輸入發放" + typeTxt + "的每一份數量（每個人可以獲得多少個）";
        let num = npc.askNumber(str, "1", 1, 9999999);
        player.customSqlInsert("INSERT INTO jili_world_gifts_wl (accountName,itemId,itemNumber,date) SELECT `name` AS accountName,'" + type + "' as itemId,'" + num + "' as itemNumber,now() as date from accounts where loggedin = 3 ");
        map.blowWeather(5120004, "趕緊去<自由市場-冰淇淋獎品發放部>領取全服福利吧！");
        npc.broadcastPlayerNotice(1, "[天下第一武陵大會]：玩家" + player.getName() + "領取了武陵排行獎勵！")
        npc.broadcastPlayerNotice(2, "[天下第一武陵大會]：玩家" + player.getName() + "領取了武陵排行獎勵！")
        npc.broadcastPlayerNotice(3, "[天下第一武陵大會]：玩家" + player.getName() + "領取了武陵排行獎勵！")
        npc.say("發放成功！");
    }
}


function getAccountName() {
    var i = -1;
    var sql = "SELECT name,id FROM accounts WHERE id=" + player.getAccountId() + " order by name limit 1;";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        var name = result.get("name");
    }

    return name;
}