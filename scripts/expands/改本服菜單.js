var status = -1;
var a1 = "#fItem/Cash/0501.img/05010101/effect/ladder/9#";//蘑菇
var a2 = "#fItem/Cash/0501.img/05010056/effect/walk1/5#";//"+z+"//草
var a3 = "#fItem/Cash/0501.img/05010056/effect/walk1/6#";//草
var a4 = "#fItem/Cash/0501.img/05010056/effect/walk1/7#";//"草"
var a5 = "#fMap/MapHelper.img/weather/knitsWithWarmWinter/9#";
var a6 = "#fMap/MapHelper.img/weather/balloon/1#";//"+z+"//美化
var a7 = "#fUI/CashShop/CSBeauty/hairColor/Disable/3#";//粉色蝴蝶
var b0 = "#fEffect/CharacterEff/1051366/2/0#";//粉色蝴蝶
var a8 = "#fItem/Pet/5000221.img/sleep/5#";//"+z+"
var a9 = "#fItem/Pet/5000221.img/jump/0#";
var a10 = "#fItem/Pet/5000221.img/cry/0#";//"+z+"//美化

var a12 = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"
var a13 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var a14 = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"//美化
var a15 = "#fEffect/CharacterEff/1051296/1/0#";
var a16 = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"
var a17 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var a18 = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"//美化
var a19 = "#fEffect/CharacterEff/1051296/1/0#";
var a20 = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"
var a21 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var a22 = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"//美化
var a23 = "#fEffect/CharacterEff/1051296/1/0#";
var a0 = "#fMap/MapHelper.img/weather/snowbear/5#";//"+z+"
var a77 = "#fEffect/SetEff.img/245/effect/28#";
var a78 = "#fEffect/SetEff.img/245/effect/14#";
var b2 = "#fItem/Cash/0501.img/05010010/effect/default/0#";//雙人相框
var b3 = "#fUI/CashShop/CSEffect/lunaCrystal/0#"; //音符1
var b4 = "#fEffect/CharacterEff/1112949/3/0#"; //音符2
var b5 = "#fEffect/CharacterEff/1022223/6/0#"
var b6 = "#fEffect/CharacterEff/1022223/7/0#"
var b7 = "#fEffect/CharacterEff/1022223/8/0#"
var b8 = "#fEffect/CharacterEff/1022223/9/0#"
var b9 = "#fItem/Cash/0501.img/05010056/effect/walk1/6#"; //小草
var b10 = "#fItem/Cash/0501.img/05010056/effect/walk1/4#"; //紅色小草
var a20 = "#fEffect/CharacterEff/1050334/1/0#"
var a11 = "#fUI/CashShop/CSBeauty/hairColor/Disable/3#";//粉色蝴蝶
var c11 = "#fEffect/CharacterEff/1082565/4/0#";//粉色兔子
var c12 = "#fUI/Basic/CheckBox1/1#";//粉色兔子8

var s1 = "#fUI/CashShop/CSBeauty/hairColor/Disable/0#"
var s1 = "#fUI/CashShop/CSBeauty/hairColor/Disable/1#"
var s2 = "#fUI/CashShop/CSBeauty/hairColor/Disable/2#"
var s3 = "#fUI/CashShop/CSBeauty/hairColor/Disable/3#"
var s4 = "#fUI/CashShop/CSBeauty/hairColor/Disable/4#"
var s5 = "#fUI/CashShop/CSBeauty/hairColor/Disable/5#"
var s6 = "#fUI/CashShop/CSBeauty/hairColor/Disable/6#"
var s7 = "#fUI/CashShop/CSBeauty/hairColor/Disable/7#"

var f1 = "#fUI/CashShop/CSBeauty/hairColor/Enable/0#"
var f1 = "#fUI/CashShop/CSBeauty/hairColor/Enable/1#"
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"
var f6 = "#fUI/CashShop/CSBeauty/hairColor/Enable/6#"
var f7 = "#fUI/CashShop/CSBeauty/hairColor/Enable/7#"

var qq1 = "#fUI/EventShop/adventureShop/GradeBuyer/0#"
var qq2 = "#fUI/EventShop/adventureShop/GradeBuyer/1#"
var qq3 = "#fUI/EventShop/adventureShop/GradeBuyer/2#"
var qq4 = "#fUI/EventShop/adventureShop/GradeBuyer/3#"
var qq5 = "#fUI/EventShop/adventureShop/GradeBuyer/4#"
var qq6 = "#fEffect/CharacterEff/1051294/1/0#"


var e3 = "#fUI/CashShop.img/CSIcon/0#"




var push = player.customSqlResult("select count(0) as onlines from accounts where loggedin = 3;");
var onlines = push.get(0).get("onlines");

var addOnlines = 40;
var 虛擬人氣 = 6;
var sss = "";
if (player.isGm()) {
    //sss += "管理員：線上人數" + onlines + "\r\n";
}
player.useSkillEffect(80011039, 1);
sss += "#fs13##d";
sss += "\t\t樂豆點:" + format(player.getCashShopCurrency(1)) + "" + "\t\t\t楓點:" + format(player.getCashShopCurrency(2)) + "\r\n" + "\t#r餘額:[" + getHyPay(1) + "]\t\t在線時間#n:" + player.getOnlineTime() + "\t在線人數：" + (online() + 虛擬人氣) + "\r\n";
sss += "\t#L0##b" + e3 + "     自由市場#l #L1#" + qq3 + "#b森嶼戰令#l#L17#" + qq3 + "#b戰力排行#l\r\n";
sss += "\t#L2#" + qq1 + "我的日記#l #L3#" + qq2 + "萬能傳送#l#L4#" + qq3 + "全部商店#l\r\n";
sss += "" + b7 + "" + b5 + "" + b6 + "" + b6 + "" + b6 + "" + b5 + "" + b5 + "" + b5 + "" + b6 + "" + b6 + "" + b6 + "" + b5 + "" + b5 + "" + b5 + "" + b6 + "" + b6 + "" + b5 + "" + b5 + "" + b5 + "" + b6 + "" + b5 + "" + b5 + "" + b5 + "" + b6 + "" + b6 + "" + b5 + "#fs12##n\r\n";
sss += "#L5##r" + f3 + "提升中心#l#L7##d" + f5 + "理財月卡#k#l#n#L8##k#r" + f2 + "贊助中心#k#l#n#l#L6##k" + f4 + "在線獎勵#k#l\r\n\r\n";
sss += "#k#L9##d" + f3 + "每日任務#l#L10#" + f5 + "中介銀行#l#L11#" + f2 + "特色系統#l#L12##d" + f4 + "森嶼榜單#l\r\n\r\n";
sss += "#k#L13##r" + f3 + "萌新天地#l#d#L14#" + f4 + "轉職核心#l#L15##d" + f5 + "做件裝備#b#l#L16#" + f2 + "綜合服務#l\r\n\r\n";

let selection = npc.askMenu(sss);

switch (selection) {
    case 999:
        player.useSkillEffect(400051081, 1);
        //player.gainItem(1712006, 124);
        //player.gainItem(2437726, 1);
        //npc.say("購買成功4");
        break;
    case 0:
        player.changeMap(876006000);
        break;
    case 1:

        player.runScript("戰令系統");
        break;
    case 2:
        player.runScript("每日手冊");
        break;
    case 3:
        player.runScript("萬能傳送2.0");
        break;
    case 4:
        player.runScript("全部商店");
        break;
    case 5:
        player.runScript("新提升中心");
        break;
    case 6:
        player.runScript("線上獎勵");//該抽獎
        break;
    case 7:
        player.runScript("月卡辦理");
        break;
    case 8:
        player.runScript("贊助中心");
        break;
    case 9:
        player.runScript("每日專區");
        break;
    case 10:
        player.runScript("中介兌換");
        break;
    case 11:
        player.runScript("特色系統");
        break;
    case 12:
        player.runScript("槍手榜");
        break;
    case 13:
        player.runScript("新手認證書2.0");
        break;
    case 14:
        player.runScript("轉職中心");
        break;
    case 15:
        player.runScript("新裝備製作");
        break;
    case 16:
        player.runScript("更多內容");
        break;
    case 17:
        player.runScript("戰力排行");
        break;
    case 8:
        player.runScript("搬磚副本");
        break;
    case 21:
        player.runScript("福利中心");
        break;
    case 22:
        player.runScript("所有活動");
        break;
    case 23:
        player.runScript("有獎遊戲");
        break;
    case 51:
        player.changeMap(749050501);//釣魚
        npc.say("已經抵達釣魚場，請點選NPC#r【釣魚場保管人】#d購買相關漁具")
        break;

    case 300:
        player.runScript("萬能NPC3.0");
        break;
    case 999:
        player.runScript("百日慶典");
        break;

    case 991:
        player.runScript("內測功能");
        break;
}

function getHyPay(type) {


    /*
    var sql = "select * from hypayxs where accname = '" + getAccountName() + "'";
    var push = player.customSqlResult(sql);
    if (push.size() == 0) {
        player.customSqlInsert("INSERT INTO `hypayxs` (`accname`, `name`) VALUES ('" + getAccountName() + "', '" + player.getName() + "')");
    }
    sql = "select * from hypayxs1 where accname = '" + getAccountName() + "'";
    push = player.customSqlResult(sql);
    if (push.size() == 0) {
        player.customSqlInsert("INSERT INTO `hypayxs1` (`accname`, `name`) VALUES ('" + getAccountName() + "', '" + player.getName() + "')");
    }
    */

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

function gainHyPay(count) {
    var sql = "update hypay set pay =pay+? where accname = '" + getAccountName() + "';";
    player.customSqlUpdate(sql, count);
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

function checkDouble() {
    var date1 = new Date();
    var week1 = date1.getDay();
    var hour1 = date1.getHours();
    if (week1 == doubleWeek && hour1 == doubleHour) return true;
    return false;
}

function format(val) {
    var len = 0;
    for (var i = 0; i < val.length; i++) {
        var a = val.charAt(i);
        if (a.match("/[^\x00-\xff]/ig") != null) {
            len += 2;
        } else {
            len += 1;
        }
    }
    if (1 - len > 0) {
        for (var j = 1 - len; j > 0; j--) {
            val += " ";
        }
    } else {
        val = val.substring(0, val.length - 4);
        val += "萬"
        format(val);
    }
    return val;
}


function getAccount() {
    var i = -1;
    var sql = "select name,id,createdat from accounts where id=" + player.getAccountId() + " order by name limit 1;";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
    }

    return result;
}
function online() {
    var i = -1;
    var sql = "SELECT Count(accounts.loggedin) FROM accounts WHERE accounts.loggedin = 2";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        var name = result.get("Count(accounts.loggedin)");
    }

    return name;
}