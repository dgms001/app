/*
    原創作者AND358122354
    優化版中介兌換
*/
var status = -1;
var beauty = 0;
var tosend = 0;
var sl;
var item;
var z = "#fEffect/ItemEff/1112811/0/0#"; //"+z+"//美化
var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用
var XD0 = "#fEffect/CharacterEff/1051366/0/0#"
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的

var item1 = Array( //普通玩家比例
    Array(1, 1),
    Array(1, 8000)
);
var item2 = Array( //會員玩家比例
    Array(1, 10000),
    Array(1, 8000)
);

var txt = "";
if (player.hasItem(2430815, 1)) {
    item = item2;
} else {
    item = item1;
}

txt = "";
txt += "\t\t\t  " + SR3 + "#fs32##fc0xFF00caf2##e《轉換餘額》" + SR3 + "\r\n";
txt += "" + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + "\r\n";
txt += "#e#fs17##fc0xFFFFF300#";
txt += "\t\t#L0##v4009411# 換【餘額】#l #L1#【餘額】換 #v4009411##l";
txt += "\r\n";
/* txt += "當前#b餘額#k數量：#d" + getHyPay() + "\r\n";
txt += "#r當前點卷數量：#d" + player.getCashShopCurrency(1) + "#r\r\n";
txt += "當前貨幣數量：#d" + player.getAmountOfItem(4000463) + "\r\n"; */
getpayLog();
let selection = npc.askMenuA(txt, true);
let number;
if (selection == 0) {
    var yue = player.getAmountOfItem(4009411);
    number = npc.askNumber("\r\n\t\t\t\t  #e#fs16##fc0xFF43EABE#【轉換餘額】\r\n\r\n#b兌換比例:\r\n【#v4009411##z4009411#*1:100餘額點數】\r\n\r\n#d請輸入你要消耗的雪花：", 1, 1, yue);
    if (number > yue) {
        npc.say("#e#fs17##v3801159# #z3801159#不足，請重新輸入");
    } else {
        addHyPay(number * 100);
        player.loseItem(4009411, number);
        //npc.broadcastNotice("" + player.getName() + " 用 " + number + " 個星星 兌換 " + number * 1 + " 餘額點數");
        npc.say("#fs16##b#e兌換成功，共獲得 " + number * 100 + " 餘額");
    }
} else if (selection == 1) {
    var yue = getHyPay();
    number = npc.askNumber("\r\n\t\t\t\t  #e#fs17##fc0xFF43EABE#【轉換餘額】\r\n\r\n#b兌換比例:\r\n【100餘額點數:#v4009411##z4009411#*1】\r\n\r\n#d請輸入你要獲取的雪花：", 1, 1, yue / 100);
    addHyPay(-number * 100);
    player.gainItem(4009411, number);
    //npc.broadcastNotice("" + player.getName() + " 用 " + number + " 餘額點數 購買 " + number * 1 + " 個星星");
    npc.say("#fs16##b#e兌換成功");

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

function getpayLog() {
    if (player.getEventValue("餘額") == 0) {
        var sql = "insert into hypay(accountid,name,accname) values('" + player.getAccountId() + "','" + player.getName() + "','" + getIDname() + "')";
        player.customSqlInsert(sql);
        player.addEventValue("餘額", 1, 999);
    }
}