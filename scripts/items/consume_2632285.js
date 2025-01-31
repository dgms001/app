/**
 * 首充獎勵
 **/
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
// 首充所需金額
var condition = 1000;
// 禮包內容
var reward = [Array(2434038, 1, ""),//
Array(2633918, 20, ""),
Array(5062026, 50, ""),
Array(5060048, 50, ""),
Array(5680503, 100, "")];



let sel = "Welcome to the special trip              " + a38 + "\r\n";

sel += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n"


sel += "#b贊助千元大禮包\r\n";
sel += "#b贊助金額達到" + condition + "元可領取千元贊助禮包\r\n";
sel += "#b累計消費達1000無法領取,需通過贊助達1000#n\r\n";
sel += "#r有額外活動的時候請先領取這個禮包在去兌換額外禮包,否則領完額外會歸零就領取不了這個禮盒了#n\r\n";
sel += "#b已贊助:" + getHyPay(2) + "\r\n";


if (getHyPay(2) >= 1000) {
    sel += "#b\t\t\t#L" + 0 + "# [#r可領取#d]領取千元禮  #l\r\n\r\n";
} else {
    sel += "#r\t\t\t#L" + 0 + "# [未完成]贊助千元禮 #l\r\n\r\n";

}
let selected = npc.askMenu(sel, 9900000);
if (selected == 10086) {
    player.runScript("贊助中心")
} else {

    sel = "是否領取禮包？\r\n"
    //sel += "#r#v2434038##z2434038#全屬性100/10%無視/10%B傷/10%總傷\r\n"
    for (var i = 0; i < reward.length; i++) {
        sel += "#b#i" + reward[i][0] + "# #z" + reward[i][0] + "#[ #r" + reward[i][1] + "#b ]個#b " + reward[i][2] + " \r\n#k";
    }

    let YN = npc.askYesNo(sel, 9900000);
    if (YN == 1) {

        //判斷是否已經領取
        if (player.getEventValue("首充禮包") == 1) {
            player.loseItem(2632285, 1);
            npc.say("您的賬號已經領取過該禮包，無法再次領取", 9900000);
        } else if (getHyPay(2) < condition) {
            npc.say("金額未達標，無法領取", 9900000);
        } else {
            var rewardlist = reward;
            if (player.getFreeSlots(1) < rewardlist.length || player.getFreeSlots(2) < rewardlist.length || player.getFreeSlots(3) < rewardlist.length || player.getFreeSlots(4) < rewardlist.length || player.getFreeSlots(5) < rewardlist.length) {
                npc.say("包裹空間不足，請確保包裹每個欄位有至少 " + rewardlist.length + " 格空間", 9900000);
            } else {
                for (var i = 0; i < rewardlist.length; i++) {
                    player.gainItem(rewardlist[i][0], rewardlist[i][1]);
                }

                player.addEventValue("首充禮包", 1, 3000);
                npc.broadcastPlayerNotice(8, "【千元禮】 : 玩家【" + player.getName() + "】贊助達千元,領取了千元禮!!"); player.loseItem(2632285, 1);
                npc.say("領取成功", 9900000);
            }
        }
    }
}


function format(val, lenA) {
    var len = 0;
    for (var i = 0; i < val.length; i++) {
        var a = val.charAt(i);
        if (a.match("/[^\x00-\xff]/ig") != null) {
            len += 2;
        } else {
            len += 1;
        }
    }
    if (17 - len > 0) {
        for (var j = 17 - len; j > 0; j--) {
            val += " ";
        }
    }
    return val;
}

function getHyPay(type) {
    var sql = "select * from hypay where accname = '" + getAccountName() + "'";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        if (type == 1) {
            var pay = result.get("pay");
        } else if (type == 2) {
            var pay = result.get("paihangbang");
        }
    } else {
        player.customSqlInsert("INSERT INTO `hypay` (`accname`, `name`) VALUES ('" + getAccountName() + "', '" + player.getName() + "')");
        return getHyPay(1);
    }

    return pay;
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
