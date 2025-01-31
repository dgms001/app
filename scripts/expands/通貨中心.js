var status = -1
var txt;
/*------------------------------------------------------------*/
var ltz45 = "#fMap/MapHelper.img/weather/starPlanet2/5#";
var ltz47 = "#fMap/MapHelper.img/weather/starPlanet/4#";

var itemid = 4032053;
var currentItemQuantity = player.getAmountOfItem(itemid);
var amount = currentItemQuantity;
var GC2 = "#fEffect/CharacterEff/1022223/2/0#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1112924/0/0#"; //"+z+"//小選項用
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var XD0 = "#fEffect/CharacterEff/1051366/0/0#";
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
txt = "#b#fs21#你好！在這裡可以進行中介兌換\r\n#b";//

txt += "#r楓點中介貨幣#v4032053#     餘額中介貨幣#v4009411#\r\n\r\n\r\n";

txt += "\t\t\t#L2##b楓點兌換#l    #L1#兌換楓點#l\r\n\r\n\r\n";
txt += "\t\t\t#L3##r兌換餘額#l    #L4#餘額兌換#l \r\n";


let selection = npc.askMenuA(txt);

switch (selection) {
    case 1:
        var currentItemQuantity = player.getAmountOfItem(4032053);
		        txt = "\r\n\r\n#fs16##b#e您當前使用的功能是:\r\n\r\n中介兌換\r\n\r\n\r\n當前擁有中介#r#v4032053##c4032053##b個\r\n\r\n#r比值1:1000\r\n\r\n\r\n#b請輸入兌換的數量:";
        

        txt += "";
        var number = npc.askNumber(txt, 1, 1, currentItemQuantity);
        if (!player.hasItem(4032053, number)) {
            player.addEventValue("刷楓點", number, 3000)
            npc.say("你擱這裡玩呢???");
        } else if ((player.getCashShopCurrency(2) + 1000 * number) > 2000000000) {
            npc.say("#fs16##b#e楓點超過20E,請先兌換楓葉後再兌換");
        } else {
            player.loseItem(4032053, number);
            player.modifyCashShopCurrency(2, 1000 * number);
            player.addEventValue("今天兌換的楓點", number, 3000)
        }
        break;
    case 2:
        var currentItemQuantity = player.getCashShopCurrency(2);
        txt = "\r\n\r\n#fs16##b#e您當前使用的功能是:\r\n\r\n楓點兌換\r\n\r\n\r\n當前擁有楓點#r" + currentItemQuantity + "#b點\r\n\r\n#r比值1000:1\r\n\r\n\r\n#b請輸入兌換的數量:";
        txt += "";
        var number = npc.askNumber(txt, 1, 1, currentItemQuantity / 100);
        if (player.getCashShopCurrency(2) < number * 1000) {
            player.addEventValue("刷楓葉", number, 3000)
            npc.say("你擱這裡玩呢???");
        } else {
            if (player.getFreeSlots(4) < (number / 9999) + 1) {
                npc.say("背包不足,無法兌換");
            } else {
                player.gainItem(4032053, number);
                player.modifyCashShopCurrency(2, -1000 * number);
                player.addEventValue("今天兌換的楓葉", number, 3000)
            }
        }
        break;
		    case 3:
			var yue = player.getAmountOfItem(4009411);
            number = npc.askNumberS("\r\n\r\n#fs16##b#e您當前使用的功能是:\r\n\r\n餘額幣兌換餘額\r\n\r\n\r\n當前擁有餘額:#r#v4009411##c4009411##b個\r\n\r\n比值1:1\r\n\r\n#d請輸入你需要兌換的餘額數量：", 1, 1, yue);
            if (number > yue) {
                npc.say("#e#fs17##v4009411# #z4009411#不足，請重新輸入");
            } else {
                addHyPay(number);
                player.loseItem(4009411, number);
                player.addEventValue("兌換中介幣數量", number, 3000)
                npc.say("#fs16##b#e兌換成功，共獲得 " + number + " 餘額");
            }
        break;
		    case 4:
			            var yue = getHyPay();
            number = npc.askNumberS("\r\n\r\n#fs16##b#e您當前使用的功能是:\r\n\r\n餘額兌換餘額幣\r\n\r\n\r\n當前擁有餘額:#r" + getHyPay() + "#b\r\n\r\n比值1:1\r\n\r\n#d請輸入你需要兌換的餘額幣數量：", 1, 1, yue);
            addHyPay(-number * 1);
            if (getHyPay() < 0) {
                player.loseItem(4009411);
                player.addEventValue("刷餘額", number, 999)
                npc.say("?");
            } else {
                player.gainItem(4009411, number);
                player.addEventValue("兌換中介幣數量", -number, 3000)
                if (number > 5000) {
                    npc.broadcastWeatherEffectNotice(235, "玩家 " + player.getName() + " 兌換了 " + number + " 餘額幣", 1500);
                }
                npc.say("#fs16##b#e兌換成功");
            }
			        break;
    case 10:
        player.runScript("本服菜單");
        break;
}

function getMeso() {
    var sql = "select money from characters where name = ? ";
    var result = player.customSqlResult(sql, player.getName());
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("money");
        }
    } else {
        return 0;
    }
}

function getHyPay() {
    var sql = "select pay from hypay where accountid = ? ";
    var result = player.customSqlResult(sql, player.getAccountId());
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("pay");
        }
    } else {
        return 0;
    }

}


function addHyPay(price) {
    if (price < 0) {
        price = price * +1;
    }
    var sql = "update hypay set pay=pay+?,payused=payused+" + price + " where accountId=?";
    var result = player.customSqlUpdate(sql, price, player.getAccountId());

}

function addHyPayleji(price) {
    if (price < 0) {
        price = price * -1;
    }
    var sql = "update hypay set leiji=leiji+?,payused=payused+" + price + " where accountId=?";
    var result = player.customSqlUpdate(sql, price, player.getAccountId());

}
