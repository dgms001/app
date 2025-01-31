var status = -1
var txt;
var sel;
let number;
var ca = java.util.Calendar.getInstance();
var month = ca.get(java.util.Calendar.MONTH) + 1; //獲得月份
var day = ca.get(java.util.Calendar.DATE);//獲取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //獲得小時
var days = 19;//額外多久結束 0為不開啟
/*------------------------------------------------------------*/
var eff = "#fEffect/CharacterEff/1082565/2/0#";
var vvv = "#fUI/Basic/BtHide3/mouseOver/0#";
var vvv4 = "#fUI/UIWindow4/PQRank/rank/gold#";
var z1 = "#fEffect/ItemEff/1112811/0/0#";//黃金音符
var z5 = "#fEffect/CharacterEff/1112904/2/1#";//五角花
var eff1 = "#fEffect/CharacterEff/1112924/0/0#"
var eff2 = "#fEffect/CharacterEff/1112925/0/0#";
var eff3 = "#fEffect/CharacterEff/1114000/1/0#"
var ttt2 = " #fItem/Cash/0501.img/05010002/effect/default/7#"
var ttt = "#fUI/UIWindow2.img/ValuePack/title/0#";//
var a1 = "#fUI/UIWindow2.img/ValuePack/title/0#";//贊助u
var a3 = "#fUI/CashShop/CSDiscount/bonus#"
var a4 = "#fUI/UIWindowBT/WorldMap/NoticeIcon/4#"
var a5 = "#fUI/UIWindow2/FadeForEvent/icon1#"
var a6 = "#fUI/CashShop/CSEffect/event/0#"
var a7 = "#fUI/UISpinOff/spinOff1/new#"
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"
var d1 = "#fUI/UIWindow2.img/Arbeit/68#"//赞助网址
var d2 = "#fUI/UIWindow2.img/Arbeit/59#"//累计赞助奖励
var d4 = "#fUI/UIWindow2.img/Arbeit/175#"//开通基金
var d5 = "#fUI/UIWindow2.img/Arbeit/12#"; //开通会员
var d3 = "#fUI/UIWindow2.img/Arbeit/229#"; //額外
var d10 = "#fUI/UIWindow2.img/Arbeit/7#"//返回选单
txt = "#fs21##e#r    			贊助中心#fs12#\r\n";

txt += "\t#fs16##b  ▲贊助比值 [ 1臺=1累計額度+1餘額 ] ▲\r\n"
txt += "\t  #r當前餘額:" + getHyPay() + "點     累積額度:" + getLeiji() + "  \r\n";
txt += "\t\t\t\t#L1##r#b#e" + a7 + " 前往贊助#r#l#b \r\n\r\n"//#L4##b" + a7 + "餘額兌換餘額幣#l\r\n\r\n"//#L10087##r" + a5 + "現金點交易系統#l
txt += "\t\t\t\t  #d#b[商家服務中心]#l\r\n"
txt += "#L6##d" + a6 + "#r餘額商城#l  #L7#" + a6 + "#r辦理理財#l  #L2#" + a6 + "#b理財福利#l #L3#" + a6 + "#b贊助獎勵#l\r\n"//#L8#" + a6 + "#b限購商店#l

//txt += "\t\t#L1#" + f4 + "#b點我進行贊助#l #L2#" + f3 + "累計消費禮包#l\r\n\r\n";

//txt += "\t\t#L5#" + f4 + "  開通會員#l   #L4#" + f3 + "餘額換累計#l\r\n\r\n";

//txt += "\t\t\t#L3#" + f3 + "贊助禮包[" + days + "號結束]#l\r\n\r\n";

//if (day >= 1 && day < days) {
    //txt += "\t\t\t#L3#" + f3 + "贊助禮包[" + days + "號結束]#l\r\n\r\n";
//}
//txt += "\t\t\t\t  #r#L10#返回選單#l\r\n\r\n";

let selection = npc.askMenuA(txt, true);

switch (selection) {
    case 1:
        let url = "https://web-hosts.net/%E5%9C%93%E5%A4%A2%E8%B0%B7.html";
        player.addEventValue("檢測總次數", 1, 999);
        player.addEventValue("檢測次數", 1, 1);
        player.openURL(url); //開這個就行兒子
        break;
    case 2:

        player.runScript("理財福利");
        break;
    case 3:
        player.runScript("每日累計禮包");
        break;
    case 4:


        txt = "#e#fs21##b";
		txt += "\t  #b當前餘額:" + getHyPay() + "\r\n";
		txt += "\t  #b當前擁有:#c4009411#個#v4009411#\r\n\r\n\r\n";
        txt += "    #L0##v4009411# #r換【餘額】#l #L1#【餘額】換 #v4009411##l \r\n";//    #L2#【餘額】換【累計】

        txt += "\r\n";
        sel = npc.askMenuA(txt, true);
        if (sel == 0) {
            var yue = player.getAmountOfItem(4009411);
            number = npc.askNumberS("\r\n\r\n#fs16##b#e您當前使用的功能是:\r\n\r\n餘額幣兌換餘額\r\n\r\n\r\n當前擁有餘額:#r#c4009411##b個\r\n\r\n比值1:1\r\n\r\n#d請輸入你需要兌換的餘額數量：", 1, 1, yue);
            if (number > yue) {
                npc.say("#e#fs17##v4009411# #z4009411#不足，請重新輸入");
            } else {
                addHyPay(number);
                player.loseItem(4009411, number);
                player.addEventValue("兌換中介幣數量", number, 3000)
                npc.say("#fs16##b#e兌換成功，共獲得 " + number + " 餘額");
            }
        } else if (sel == 1) {
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

        } else if (sel == 2) {
            var yue = getHyPay();
            number = npc.askNumber("\r\n\t\t\t\t  #e#fs17##fc0xFF43EABE#【轉換累計】\r\n\r\n#b兌換比例:\r\n【1餘額點數:1累計+1樂豆幣】\r\n\r\n#d請輸入你要獲取的累計：", 1, 1, yue);
            addHyPay(-number);
            if (getHyPay() < 0) {
                player.loseItem(4009411);
                player.addEventValue("刷餘額", number, 999)
                npc.say("?");
            } else {
                player.gainItem(4310066, number);
                addHyPayleji(number)
                //player.modifyCashShopCurrency(1, number);
                player.addEventValue("兌換中介幣數量", -number, 3000)
            }
            npc.say("#fs16##b#e兌換成功");
        }
        break;
    case 5:
        player.runScript("開通會員");
        break;
		    case 6:
        player.runScript("餘額商店");
        break;
		    case 7:
        player.runScript("開通會員");
        break;
		    case 8:
        player.runScript("限購商店");
        break;
    case 10:
        player.runScript("本服菜單");
        break;
}
function getHyPayLeiji() {
    var sql = "select leiji from hypay where accountid = ? ";
    var result = player.customSqlResult(sql, player.getAccountId());
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("leiji");
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
function getLeiji() {
	var sql = "select leiji from hypay where accountid = ? ";
	var result = player.customSqlResult(sql, player.getAccountId());
	if (result.size() > 0) {
		if (result.get(0) != null) {
			return result.get(0).get("leiji");
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

function getIDname() {
    var sql = "select name from accounts where id = ? ";
    var result = player.customSqlResult(sql, player.getAccountId());
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("name");
        }
    } else {
        return 0;
    }

}

