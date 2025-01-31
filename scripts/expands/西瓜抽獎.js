date = new Date();
let week = date.getDay();
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
var needItem = 4032216; //需要物品
var needNum = 5000;
if ((hour == 00) && (minute < 2)) {
    npc.say("每天00:00-00:02刷新物品,無法打開");
} else if (player.getEventValue("西瓜抽獎") > 20 && date.getDay() != 0) {
    npc.say("今日已經抽了20次,請明日再來!\r\n週日抽獎次數無限制");
} else {
    var npcSpeak = "#e#r#fs21#\t\t蒐集活動#fs13#\r\n";
    npcSpeak += "#b每次需提交#r#v" + needItem + "# x" + needNum + "#b個[#r每日最高20次#b]\r\n"
    npcSpeak += "#b每次繳納隨機獲得道具[#r每天0點重置#b]\r\n"
	npcSpeak += "#b每次抽取後道具從內容物減少，直至內容物清空\r\n"
    npcSpeak += "#k#b內容物伺候器共享:\r\n"
    var rewards = getHaveRewards();
    if (rewards.size() == 0) {
        npc.askMenuS("所有內容物都被抽完啦！！！\r\n\r\n每天[00:00]重置！！！\r\n\r\n請準備好#v" + needItem + "# 5000個抽一次");
    } else {
        for (var i = 0; i < rewards.size(); i++) {
            npcSpeak += "#v" + rewards.get(i).get("itemId") + "#X" + rewards.get(i).get("itemNum") + " ";
        }
        //npcSpeak += "\r\n#r是否花費#v" + needItem + "# x " + needNum + "抽獎?"
    }
    if (npc.askYesNo(npcSpeak) == 1) {
        if (!player.hasItem(needItem, needNum)) {
            npc.say("#v" + needItem + "#不足")
        } else if (player.getFreeSlots(1) < 1 || player.getFreeSlots(2) < 1 || player.getFreeSlots(3) < 1 || player.getFreeSlots(4) < 1 || player.getFreeSlots(5) < 1) {
            npc.say("包裹空間不足，請確保包裹每個欄位有至少 " + 1 + " 格空間");
        } else {
            player.loseItem(needItem, needNum)
            var maxChance = getHaveRewardsMaxChance();
            var rand = Math.random() * maxChance;
            var finalyRewards = [];
            for (var i = 0; i < rewards.size(); i++) {
                if (Number(rewards.get(i).get("chance")) >= rand) {
                    finalyRewards.push(rewards.get(i));
                }
            }
            var rand1 = Math.floor(Math.random() * finalyRewards.length);
            player.gainItem(finalyRewards[rand1].get("itemId"), finalyRewards[rand1].get("itemNum"));
            updateHaveReward(finalyRewards[rand1].get("id"));
            delvalue(finalyRewards[rand1].get("id"));
            if (maxChance <= 600) {
                npc.broadcastGachaponMsgEx( "蒐集活動  : 玩家 " + player.getName() + " 中獲得了< " + player.makeItemWithId(finalyRewards[rand1].get("itemId")).getItemName() + "> x" + finalyRewards[rand1].get("itemNum") + "");
                npc.say("抽取成功 獲得#v" + finalyRewards[rand1].get("itemId") + "# x " + finalyRewards[rand1].get("itemNum"))
            }
            player.addEventValue("西瓜抽獎", 1, 1)
        }
    } else {
        npc.say("好喔,歡迎下次光臨!")
    }
}
player.runScript("西瓜抽獎")

function getHaveRewards() {
    //get have not
    var sql = "select * from dgms_luck_jackpot jlj1 where id not in (select jlj.id from dgms_luck_jackpot jlj where jlj.isDel = 1) order by chance asc";
    var resultList = player.customSqlResult(sql);

    return resultList;
}

function getHaveRewardsMaxChance() {
    //get have not

    var sql = "select max(chance) as maxChance from dgms_luck_jackpot jlj1 where id not in (select jlj.id from dgms_luck_jackpot jlj where jlj.isDel = 1) order by chance asc";
    var resultList = player.customSqlResult(sql);

    return resultList.get(0).get("maxChance");
}
function delvalue(id) {
    //var sql = "delete from dgms_luck_jackpot where id = '"+id+"'";
    var sql = "update dgms_luck_jackpot set isDel='1' where id = '" + id + "'";
    player.customSqlUpdate(sql);

}
function updateHaveReward(id) {

    var sql = "select * from dgms_luck_jackpot_acc where accountId = '" + player.getAccountId() + "'";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var sql = "update dgms_luck_jackpot_acc  set jackpot_ids = CONCAT(jackpot_ids,'," + id + "') where accountId = " + player.getAccountId();
        player.customSqlUpdate(sql);
    } else {
        player.customSqlInsert("INSERT INTO `dgms_luck_jackpot_acc` (`characterName`, `accountId`,`jackpot_ids`) VALUES ('" + player.getName() + "', '" + player.getAccountId() + "','" + id + "')");
        return getHyPay(1);
    }

}

function getAccountName() {
    var i = -1;
    var sql = "select name,id from accounts where id=" + player.getAccountId() + " order by name limit 1;";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        var name = result.get("name");
    }

    return name;
}

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

function gainHyPay(count) {
    var sql = "update hypay set pay =pay+? where accname = '" + getAccountName() + "';";
    player.customSqlUpdate(sql, count);
}
