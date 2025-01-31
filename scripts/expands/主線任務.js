/* This is a piece of code

 * author dgms

 * global player

 * Contact QQ 381991414 DC dgms#6650

 * function 战令系统
 
 */

var eff3 = "#fEffect/CharacterEff/1112924/0/0#";
var eff4 = "#fEffect/CharacterEff/1112925/0/0#"; //小红心
let cat1 = "#fItem/Pet/5000000.img/alert/0#";
let cat2 = "#fItem/Pet/5000000.img/fly/0#";
let cat3 = "#fItem/Pet/5000000.img/cry/0#";
let tu1 = "#fItem/Cash/0501.img/05010045/effect/stand1/1#"
let tu2 = "#fItem/Cash/0501.img/05010002/effect/default/7#"
let tu3 = "#fUI/NameTag/medal/758/w#"
let tu4 = "#fEffect/SetEff.img/245/effect/28#"
let tu5 = "#fUI/NameTag/medal/758/e#"
let tu6 = "#fUI/NameTag/medal/758/c#"
let fy = "#fUI/RunnerGame.img/RunnerGameUI/UI/Point/1#";
let fy1 = "#fUI/RunnerGame.img/RunnerGameUI/UI/Point/2#";
let dz = "#fUI/GuildMark/Mark/Etc/00009020/1#";
let dz1 = "#fEffect/CharacterEff/1003393/1/0#";
let star = "#fEffect/CharacterEff/1051294/1/1#"
let eff2 = "#fEffect/CharacterEff/1112925/0/0#";
var eff1 = "#fEffect/CharacterEff/1112924/0/0#";
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的
var XD0 = "#fEffect/CharacterEff/1051366/0/0#"
var chenghao;
reset();
var selStr = "\t\t   " + SR3 + "#fs32##fc0xFF00caf2##e《圓夢任務》" + SR3 + "\r\n";
selStr += "" + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + "\r\n";
selStr += "#e#fs17##fc0xFFFFF300#";


if (getlevelUp() == 0) {
    chenghao = "#b普通模式";
} else {
    chenghao = "#r進階模式";
}
selStr += "\t#g#nBecause of your support, we will do better!\r\n";
selStr += "\t#b  本賽季截止日期:" + getFormatDate() + "-" + getNowFormatDate() + "\r\n";
selStr += "  #b" + Ranking(getvalue()) + " 當前模式:" + chenghao + "\r\n";
selStr += "#fc0xFFFFF300#\t\t\t#L1#圓夢任務說明#l\t#L2#購買經驗值#l\r\n";
selStr += "\t\t\t#L3#普通任務#l\t\t#L4#普通獎勵#l\r\n";
selStr += "\t\t\t#L5#每周任務#l\t\t#L6#進階獎勵#l\r\n";
selStr += "\t\t\t#L7#特殊任務#l\r\n";//\t\t#L8#升級系統#l
selStr += "\r\n\t\t\t\t\t #fs20##r#e#L9#【返回】#l\r\n";
let selected = npc.askMenuA(selStr, true);

switch (selected) {
    case 1:
        npc.say("#fs15##b每個月都會重置任務經驗!");
        break;
    case 2:
        shop();
        break;
    case 3:
        player.runScript("普通任務");
        break;
    case 4:
        common();
        break;
    case 5:
        player.runScript("跑環任務");
        break;
    case 6:
        if (getlevelUp() == 1) {
            advanced();
        } else {
            npc.say("你還不是進階玩家,請先開通");
        }
        break;
    case 7:
        npc.say("#b新年活動已結束.待下次活動"); //api addvalue(+50)
        //player.runScript("新年活動");
        break;
    case 8:
        buylevelUp();
        break;
    case 9:
        player.runScript("本服菜單");
        break;
    default:
        npc.say("暫未開放")
        break;

}

function getlevelUp() { //是否是進階玩家
    var sql = "select vip from dgms_zhanling where name = ? ";
    var result = player.customSqlResult(sql, getAccountName());
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("vip");
        }
    } else {
        return 0;
    }

}
function addlevelUp() { //給與進階玩家稱號
    var sql = "update dgms_zhanling set vip=1 where name=?";
    player.customSqlUpdate(sql, "" + getAccountName() + "");

}
function getvalue() { //獲取經驗值
    var sql = "select value from dgms_zhanling where name = ? ";
    var result = player.customSqlResult(sql, getAccountName());
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("value");
        }
    } else {
        return 0;
    }

}
function addvalue(level) { //給予經驗值
    var sql = "update dgms_zhanling set value=value+? where name=?";
    player.customSqlUpdate(sql, level, "" + getAccountName() + "");

}
function reset() { //每月01號重置數據庫
    let date = new Date();
    let day = date.getDate() - 1;
    if (player.getPQLog("季票系統") == 0) {
        player.addPQLog("季票系統", 1, (getfordays() - day));
        if (getvalue() == 0) {
            var sql = "update dgms_zhanling set value=?,vip=? where name=?";
            player.customSqlUpdate(sql, '0', 0, "" + getAccountName() + "");
            var sql = "insert into dgms_zhanling(name,value,vip) values('" + getAccountName() + "','0','0')";
            player.customSqlInsert(sql);
            //這裡resetEventValue
            npc.say("加載數據庫成功。");
        } else {
            var sql = "update dgms_zhanling set value=?,vip=? where name=?";
            player.customSqlUpdate(sql, '0', 0, "" + getAccountName() + "");
            //這裡resetEventValue
            npc.say("加載數據庫成功。");

        }
    }
}
//获取当前时间，格式YYYY-MM-DD
function getFormatDate() {
    let date = new Date();
    let kouhao = "<";
    let kouhao1 = ">";
    let seperator1 = "-";
    let year = date.getFullYear();
    let month = date.getMonth();
    let strDate = 30;
    if (month == 2) {
        strDate = "28";

    }

    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }

    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        strDate = "31";

    }
    let currentdate = kouhao + year + seperator1 + month + seperator1 + strDate + kouhao1;
    return currentdate;
}
function getNowFormatDate() {
    let date = new Date();
    let kouhao = "<";
    let kouhao1 = ">";
    let seperator1 = "-";
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let strDate = 30;
    if (month == 2) {
        strDate = "28";

    }

    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }

    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        strDate = "31";

    }
    let currentdate = kouhao + year + seperator1 + month + seperator1 + strDate + kouhao1;
    return currentdate;
}

function getAccountName() {
    var sql = "select name from characters where id=  " + player.getId() + " ";
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
function getfordays() {
    let date = new Date();
    let month = date.getMonth() + 1;
    let strDate = 30;
    if (month == 2) {
        strDate = "28";
    }
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        strDate = "31";
    }
    let currentdate = strDate;
    return currentdate;
}
function Ranking(level) {
    if (level >= 0 && level <= 1000) {
        return "當前等級:<1級> 當前經驗:<" + getvalue() + "/1000>";
    }
    if (level >= 1001 && level <= 3000) {
        return "當前等級:<2級> 當前經驗:<" + getvalue() + "/3000>";
    }
    if (level >= 3001 && level <= 5000) {
        return "當前等級:<3級> 當前經驗:<" + getvalue() + "/5000>";
    }
    if (level >= 5001 && level <= 8000) {
        return "當前等級:<4級> 當前經驗:<" + getvalue() + "/8000>";
    }
    if (level >= 8001 && level <= 15000) {
        return "當前等級:<5級> 當前經驗:<" + getvalue() + "/15000>";
    }
    if (level >= 15001 && level <= 20000) {
        return "當前等級:<6級> 當前經驗:<" + getvalue() + "/20000>";
    }
    if (level >= 20001 && level <= 30000) {
        return "當前等級:<7級> 當前經驗:<" + getvalue() + "/30000>";
    }
    if (level >= 30001 && level <= 40000) {
        return "當前等級:<8級> 當前經驗:<" + getvalue() + "/40000>";
    }
    if (level >= 40001 && level <= 50000) {
        return "當前等級:<9級> 當前經驗:<" + getvalue() + "/50000>";
    }
    if (level >= 50001) {
        return "當前等級:<10級> 當前經驗:<" + getvalue() + "/60000>";
    }
}
function shop() {
    var honor = 10
    var cc = player.getEventValue("主線任務經驗");
    var gg = 50 - cc
    var choice = npc.askNumber("\r\n#b#fs17#目前兌換比值：1餘額:" + honor + "經驗值\r\n\r\n一天可購買500經驗\r\n\r\n請輸入要消耗多少餘額", 1, 1, gg);
    var GS = choice;
    if (player.getEventValue("主線任務經驗") >= 500) {
        npc.say("當日不能再購買了!");
    } else if (getHyPay() > GS) {
        addvalue(honor * GS);
        addHyPayleji(GS); //累計
        addHyPay(-GS); //計算消耗總量
        player.addEventValue("主線任務經驗", GS, 1);
        //自己+公告
        npc.say("購買成功,獲得" + GS * honor + "經驗值");
    } else {
        npc.say("餘額不足");
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
function buylevelUp() {
    var text1 = "";
    text1 += "#fs18##b#e花費1000餘額即可開通進階模式";
    text1 += "詳細獎勵，請至dc群查看。";
    text1 += "";
    npc.askYesNo(text1);


    if (getlevelUp() > 0) {
        npc.say("你已經是進階玩家了");
    } else if (getHyPay() >= 1000) {
        addHyPay(-1000);
        //addHyPayleji(1000);
        addlevelUp();
        npc.say("開通成功");
    } else {
        npc.say("餘額不足");
    }
}

function common() {
    var tt = "#fEffect/CharacterEff/1082565/0/0#"; //餅幹兔子
    var fenge = "#fEffect/ItemEff/1004122/effect/default/8#";

    // 每個階段禮包所需的儲值額度
    var condition = new Array(1001, 3001, 5001, 8001, 15001, 20001, 30001, 40001, 50001, 60000);
    //力量, 敏捷, 智力, 幸運, HP,物攻, 魔攻, B傷, 總傷,無視
    // 禮包內容
    var reward = new Array(
        Array(// 1001
            Array(4021032, 20),//魔力結晶
            Array(4032053, 200),//黃金楓葉
            Array(4001713, 100),//定居金
            Array(2048761, 5)//覺醒星火

        ),
        Array(
            // 3001
            Array(4021032, 50),//魔力結晶
            Array(4032053, 300),//黃金楓葉
            Array(4001713, 250),//定居金
            Array(2048761, 15)//覺醒星火
        ),
        Array(
            // 5001
            Array(4021032, 50),//魔力結晶
            Array(4032053, 300),//黃金楓葉
            Array(4001713, 250),//定居金
            Array(5062009, 10),//紅色方塊
            Array(2630646, 10, "R卷自選")//R卷自選
        ),
        Array(
            // 8001
            Array(4021032, 50),//魔力結晶
            Array(4032053, 300),//黃金楓葉
            Array(4001713, 250),//定居金
            Array(5062009, 10),//紅色方塊
            Array(2630646, 10, "R卷自選")//R卷自選
        ),
        Array(
            // 15001
            Array(4021032, 50),//魔力結晶
            Array(4032053, 300),//黃金楓葉
            Array(4001713, 250),//定居金
            Array(5062009, 10),//紅色方塊
            Array(4310100, 10),//航海金幣
            Array(2630646, 10, "R卷自選"),//R卷自選
            Array(5062017, 5)//閃耀方塊

        ),
        Array(
            // 20001
            Array(4021032, 50),//魔力結晶
            Array(4032053, 300),//黃金楓葉
            Array(4001713, 250),//定居金
            Array(5062009, 10),//紅色方塊
            Array(1022211, 1),//眼鏡
            Array(4310100, 10),//航海金幣
            Array(2630647, 10, "X卷自選"),//X卷自選
            Array(5062017, 10)//閃耀方塊
        ),
        Array(
            // 30001
            Array(4021032, 50),//魔力結晶
            Array(4032053, 300),//黃金楓葉
            Array(4001713, 250),//定居金
            Array(5062009, 10),//紅色方塊
            Array(1012438, 1),//眼鏡
            Array(4310100, 10),//航海金幣
            Array(2630647, 10, "X卷自選"),//X卷自選
            Array(5062017, 15)//閃耀方塊
        ),
        Array(
            //40001
            Array(5062009, 10),//紅色方塊
            Array(4310100, 15),//航海金幣
            Array(2630647, 10, "X卷自選"),//X卷自選
            Array(5062017, 15),//閃耀方塊
            Array(5062500, 10)//附加方塊

        ),
        Array(
            // 50001
            Array(4310100, 15),//航海金幣
            Array(5062020, 20),//閃炫方塊
            Array(5062500, 10),//附加方塊
            Array(2049376, 1),//20星力
            Array(2644006, 2)//30%追加

        ),
        Array(
            // 60000
            Array(4310100, 20),//航海金幣
            Array(5062020, 30),//閃炫方塊
            Array(5062500, 15),//附加方塊
            Array(2644007, 2),//50%追加
            Array(4009411, 100, "1:10樂豆")//樂豆

        )
    );

    var text;
    var ljname;
    var revenue;
    var ltz46 = "#fMap/MapHelper.img/weather/starPlanet/4#"; //
    var a3 = "#fEffect/ItemEff/1070069/effect/walk1/2#"

    revenue = getvalue();
    text = "";
    text += "\t\t\t\t\t#fs26##e#fc0xFFFF4EFF#【普通獎勵】#fs18##n#l\r\n";
    text += "" + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + "\r\n";
    text += "#e#fs17##fc0xFFFFF300#";
    text += "   #b#e當前經驗值：#r" + revenue + " #b EXP\r\n";

    var txt = "";

    for (var i = 0; i <= condition.length - 1; i++) {
        if (player.getEventValue("等級達標" + condition[i]) == 1) {
            txt = "[#r已領取#b]";
        } else {
            if (player.getEventValue("等級達標" + condition[i]) == 0 && revenue >= condition[i]) {
                txt = "[#b待領取#b]";
            } else if (player.getEventValue("等級達標" + condition[i]) == 0 && revenue < condition[i]) {
                txt = "[#r未達標#b]";
            }
        }
        text += "#b#L" + i + "#" + tt + txt + " 需要 " + condition[i] + " 經驗值#l\r\n";
    }
    text += "#k";
    let selection = npc.askMenuA(text, true);

    if (selection == 999) {
        player.runScript("充值鏈接123");
    } else {
        text = "\t\t\t\t#e#r- " + condition[selection] + "經驗值禮包 -#k#n\r\n\r\n";
        for (var i = 0; i < reward[selection].length; i++) {
            text += "\t\t#i" + reward[selection][i][0] + "# #z" + reward[selection][i][0] + "#[" + reward[selection][i][1] + "個]";
            if (reward[selection][i].length > 2) {
                text += "[#r" + reward[selection][i][2] + "#k]\r\n";
            } else {
                text += "\r\n";
            }
        }

        let sel = npc.askYesNo(text);
        if (sel == 1) {
            if (player.getEventValue("等級達標" + condition[selection]) == 1) {
                npc.say("#e#r\r\n\r\n\t\t您已經領取過了");
                //player.runScript("累計兌換");
            } else if (revenue < condition[selection]) {
                npc.say("當前經驗值未達標！");
                //player.runScript("累計兌換");
            } else if (player.getFreeSlots(1) < 5 || player.getFreeSlots(2) < 5 || player.getFreeSlots(3) < 5 || player.getFreeSlots(4) < 5 || player.getFreeSlots(5) < 5) {
                npc.say("每個欄位至少要保持5個空位以上才能領取");
                //player.runScript("累計兌換");
            } else {
                for (var i = 0; i < reward[selection].length; i++) {
                    if (reward[selection][i][3] >= 0) {
                        let newItem = player.makeItemWithId(reward[selection][i][0]);
                        //player.gainItem(reward[selection][i][0], reward[selection][i][1]);
                        newItem.setStr(reward[selection][i][3]);
                        newItem.setDex(reward[selection][i][4]);
                        newItem.setInt(reward[selection][i][5]);
                        newItem.setLuk(reward[selection][i][6]);
                        newItem.setMaxHp(reward[selection][i][7]);
                        newItem.setPad(reward[selection][i][8]);
                        newItem.setMad(reward[selection][i][9]);
                        newItem.setBossDamageR(reward[selection][i][10]);
                        newItem.setIgnorePDR(reward[selection][i][11]);
                        newItem.setDamR(reward[selection][i][12]);
                        player.gainItem(newItem);
                    } else {
                        player.gainItem(reward[selection][i][0], reward[selection][i][1]);
                    }
                    //player.gainItem(reward[selection][i][0], reward[selection][i][1]);
                }
                player.addEventValue("等級達標" + condition[selection], 1, 1000);
                //npc.broadcastNotice("恭喜玩家 " + player.getName() + " 領取了超值 " + condition[selection ] + " 經驗值的禮包禮包！！！");
                npc.say("領取成功");
                //player.runScript("累計兌換");
            }
        }

    }

}

function advanced() {
    var tt = "#fEffect/CharacterEff/1082565/0/0#"; //餅幹兔子
    var fenge = "#fEffect/ItemEff/1004122/effect/default/8#";

    // 每個階段禮包所需的儲值額度
    var condition = new Array(1001, 3001, 5001, 8001, 15001, 20001, 30001, 40001, 50001, 60000);
    //力量, 敏捷, 智力, 幸運, HP,物攻, 魔攻, B傷, 總傷,無視
    // 禮包內容
    var reward = new Array(
        Array(// 1001
            Array(4021032, 20),//魔力結晶
            Array(4032053, 200),//黃金楓葉
            Array(4001713, 100),//定居金
            Array(2048761, 5)//覺醒星火

        ),
        Array(
            // 3001
            Array(4021032, 50),//魔力結晶
            Array(4032053, 300),//黃金楓葉
            Array(4001713, 250),//定居金
            Array(2048761, 15)//覺醒星火
        ),
        Array(
            // 5001
            Array(4021032, 50),//魔力結晶
            Array(4032053, 300),//黃金楓葉
            Array(4001713, 250),//定居金
            Array(5062009, 10),//紅色方塊
            Array(2630647, 10, "X卷自選")//X卷自選
        ),
        Array(
            // 8001
            Array(4021032, 50),//魔力結晶
            Array(4032053, 300),//黃金楓葉
            Array(4001713, 250),//定居金
            Array(5062009, 10),//紅色方塊
            Array(2630647, 10, "X卷自選")//X卷自選
        ),
        Array(
            // 15001
            Array(4021032, 50),//魔力結晶
            Array(4032053, 300),//黃金楓葉
            Array(4001713, 250),//定居金
            Array(5062009, 10),//紅色方塊
            Array(4310100, 10),//航海金幣
            Array(2630647, 10, "X卷自選"),//X卷自選
            Array(5062017, 5)//閃耀方塊

        ),
        Array(
            // 20001
            Array(4021032, 50),//魔力結晶
            Array(4032053, 300),//黃金楓葉
            Array(4001713, 250),//定居金
            Array(5062009, 10),//紅色方塊
            Array(1022211, 1),//眼鏡
            Array(4310100, 10),//航海金幣
            Array(2630648, 10, "V卷自選"),//V卷自選
            Array(5062017, 10)//閃耀方塊
        ),
        Array(
            // 30001
            Array(4021032, 50),//魔力結晶
            Array(4032053, 300),//黃金楓葉
            Array(4001713, 250),//定居金
            Array(5062009, 10),//紅色方塊
            Array(1012438, 1),//眼鏡
            Array(4310100, 10),//航海金幣
            Array(2630648, 10, "V卷自選"),//V卷自選
            Array(5062017, 15)//閃耀方塊
        ),
        Array(
            //40001
            Array(5062009, 10),//紅色方塊
            Array(4310100, 15),//航海金幣
            Array(2630649, 10, "B卷自選"),//B卷自選
            Array(5062017, 15),//閃耀方塊
            Array(5062500, 10)//附加方塊

        ),
        Array(
            // 50001
            Array(4310100, 15),//航海金幣
            Array(5062020, 20),//閃炫方塊
            Array(5062500, 10),//附加方塊
            Array(2049376, 1),//20星力
            Array(2644007, 2)//50%追加

        ),
        Array(
            // 60000
            Array(4310100, 20),//航海金幣
            Array(5062020, 30),//閃炫方塊
            Array(5062500, 15),//附加方塊
            Array(2644007, 2),//50%追加
            Array(2644008, 1),//100%追加
            Array(4009411, 200, "1:10樂豆")//樂豆

        )
    );

    var text;
    var ljname;
    var revenue;
    var ltz46 = "#fMap/MapHelper.img/weather/starPlanet/4#"; //
    var a3 = "#fEffect/ItemEff/1070069/effect/walk1/2#"

    revenue = getvalue();
    text = "";
    text += "\t\t\t\t\t#fs26##e#fc0xFFFF4EFF#【進階獎勵】#fs18##n#l\r\n";
    text += "" + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + "\r\n";
    text += "#e#fs17##fc0xFFFFF300#";
    text += "   #b#e當前經驗值：#r" + revenue + " #b EXP\r\n";

    var txt = "";

    for (var i = 0; i <= condition.length - 1; i++) {
        if (player.getEventValue("進階等級達標" + condition[i]) == 1) {
            txt = "[#r已領取#b]";
        } else {
            if (player.getEventValue("進階等級達標" + condition[i]) == 0 && revenue >= condition[i]) {
                txt = "[#b待領取#b]";
            } else if (player.getEventValue("進階等級達標" + condition[i]) == 0 && revenue < condition[i]) {
                txt = "[#r未達標#b]";
            }
        }
        text += "#b#L" + i + "#" + tt + txt + " 需要 " + condition[i] + " 經驗值#l\r\n";
    }
    text += "#k";
    let selection = npc.askMenuA(text, true);

    if (selection == 999) {
        player.runScript("充值鏈接");
    } else {
        text = "\t\t\t\t#e#r- " + condition[selection] + "經驗值禮包 -#k#n\r\n\r\n";
        for (var i = 0; i < reward[selection].length; i++) {
            text += "\t\t#i" + reward[selection][i][0] + "# #z" + reward[selection][i][0] + "#[" + reward[selection][i][1] + "個]";
            if (reward[selection][i].length > 2) {
                text += "[#r" + reward[selection][i][2] + "#k]\r\n";
            } else {
                text += "\r\n";
            }
        }

        let sel = npc.askYesNo(text);
        if (sel == 1) {
            if (player.getEventValue("進階等級達標" + condition[selection]) == 1) {
                npc.say("#e#r\r\n\r\n\t\t您已經領取過了");
                //player.runScript("累計兌換");
            } else if (revenue < condition[selection]) {
                npc.say("當前經驗值未達標！");
                //player.runScript("累計兌換");
            } else if (player.getFreeSlots(1) < 5 || player.getFreeSlots(2) < 5 || player.getFreeSlots(3) < 5 || player.getFreeSlots(4) < 5 || player.getFreeSlots(5) < 5) {
                npc.say("每個欄位至少要保持5個空位以上才能領取");
                //player.runScript("累計兌換");
            } else {
                for (var i = 0; i < reward[selection].length; i++) {
                    if (reward[selection][i][3] >= 0) {
                        let newItem = player.makeItemWithId(reward[selection][i][0]);
                        //player.gainItem(reward[selection][i][0], reward[selection][i][1]);
                        newItem.setStr(reward[selection][i][3]);
                        newItem.setDex(reward[selection][i][4]);
                        newItem.setInt(reward[selection][i][5]);
                        newItem.setLuk(reward[selection][i][6]);
                        newItem.setMaxHp(reward[selection][i][7]);
                        newItem.setPad(reward[selection][i][8]);
                        newItem.setMad(reward[selection][i][9]);
                        newItem.setBossDamageR(reward[selection][i][10]);
                        newItem.setIgnorePDR(reward[selection][i][11]);
                        newItem.setDamR(reward[selection][i][12]);
                        player.gainItem(newItem);
                    } else {
                        player.gainItem(reward[selection][i][0], reward[selection][i][1]);
                    }
                    //player.gainItem(reward[selection][i][0], reward[selection][i][1]);
                }
                player.addEventValue("進階等級達標" + condition[selection], 1, 1000);
                //npc.broadcastNotice("恭喜玩家 " + player.getName() + " 領取了超值 " + condition[selection ] + " 經驗值的禮包禮包！！！");
                npc.say("領取成功");
                //player.runScript("累計兌換");
            }
        }

    }

}

