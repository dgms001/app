var status = -1
var txt;
/*------------------------------------------------------------*/
//var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
//var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //紅心桃心
var Icon = [
    Array("星星", "#fEtc/ChatEmoticon/expression/1/0#"),
    Array("彩虹", "#fEffect/ItemEff/1102877/effect/default/0#"),
    Array("猫咪", "#fUI/NameTag/190/w#"),
    Array("猫咪", "#fUI/NameTag/190/c#"),
    Array("猫咪", "#fUI/NameTag/190/e#"),
    Array("兔子", "#fEffect/CharacterEff/1112960/0/1#"),
    Array("星空", "#fUI/GuildMark/BackGround/00001013/16#"),
    Array("骷髅", "#fUI/GuildMark/Mark/Etc/00009000/15#"),
    Array("红心", "#fUI/GuildMark/Mark/Etc/00009001/1#"),
    Array("白脸", "#fUI/GuildMark/Mark/Etc/00009002/4#"),
    Array("皇冠", "#fUI/GuildMark/Mark/Etc/00009004/3#"),
    Array("红灯", "#fUI/GuildMark/Mark/Etc/00009020/1#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/11#"),
    Array("水滴", "#fEffect/BasicEff/MainNotice/Gamsper/Notify/4#"),
    Array("红旗", "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"),
    Array("红心", "#fEffect/CharacterEff/1112905/0/0#"),
    Array("云朵", "#fEffect/ItemEff/1102877/effect/default/1#"),
    Array("翅膀", "#fEffect/ItemEff/1102874/effect/ladder/0#"),
    Array("箭矢", "#fEffect/ItemEff/1112003/0/2#"),
    Array("黄鸭", "#fEffect/ItemEff/1004122/effect/default/8#"),
    Array("红点", "#fEffect/CharacterEff/1082588/0/0#"), //红点
    Array("蓝点", "#fEffect/CharacterEff/1082588/3/0#"), //蓝点
    Array("黄星", "#fEffect/CharacterEff/1112924/0/0#"), //黄星
    Array("蓝星", "#fEffect/CharacterEff/1112925/0/0#"), //蓝星
    Array("红星", "#fEffect/CharacterEff/1112926/0/0#"), //红星
    Array("黄星星", "#fUI/UIPVP.img/MiniMapIcon/star#"), //黄星星
    Array("星星", "#fEtc/ChatEmoticon/expression/1/0#"),
    Array("兔子", "#fEffect/CharacterEff/1112960/0/1#"),
    Array("星空", "#fUI/GuildMark/BackGround/00001013/16#"),
    Array("骷髅", "#fUI/GuildMark/Mark/Etc/00009000/15#"),
    Array("红心", "#fUI/GuildMark/Mark/Etc/00009001/1#"),
    Array("白脸", "#fUI/GuildMark/Mark/Etc/00009002/4#"),
    Array("皇冠", "#fUI/GuildMark/Mark/Etc/00009004/3#"),
    Array("红灯", "#fUI/GuildMark/Mark/Etc/00009020/1#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/11#"),
    Array("水滴", "#fEffect/BasicEff/MainNotice/Gamsper/Notify/4#"),
    Array("红旗", "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"),
    Array("红心", "#fEffect/CharacterEff/1112905/0/0#"),
    Array("云朵", "#fEffect/ItemEff/1102877/effect/default/1#"),
    Array("翅膀", "#fEffect/ItemEff/1102874/effect/ladder/0#"),
    Array("箭矢", "#fEffect/ItemEff/1112003/0/2#"),
    Array("黄鸭", "#fEffect/ItemEff/1004122/effect/default/8#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/10#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/2#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/3#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/4#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/5#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/6#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/7#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/8#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/9#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/10#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/11#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/12#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/13#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/14#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/15#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/16#"),
    Array("条件", "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"),
    Array("信封", "#fUI/GuildMark/BackGround/00001003/5#"),
    Array("信封", "#fUI/GuildMark/BackGround/00001003/12#"),
    Array("钻石", "#fUI/NameTag/medal/556/w#"),
    Array("钻石", "#fUI/NameTag/medal/556/c#"),
    Array("钻石", "#fUI/NameTag/medal/556/e#"),
    Array("三角", "#fUI/piggyBarMinigame/crunch/5#"),
    Array("蓝点", "#fUI/piggyBarMinigame/crunch/1#"),
    Array("女神", "#fUI/RunnerGame/RunnerGameUI/Effect/ItemEffect_Protect1/3#"),
    Array("拇指", "#fUI/NameTag/medal/10/w#"),
    Array("拇指", "#fUI/NameTag/medal/10/c#"),
    Array("拇指", "#fUI/NameTag/medal/10/e#"),
    Array("成功", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/dear/7#"),
    Array("失败", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/fail/7#"),
    Array("星星", "#fUI/UIWindowGL/FeedbackSystem/Star#"),
    Array("蓝星", "#fEffect/CharacterEff/1003393/1/0#"),
    Array("花朵", "#fEffect/CharacterEff/1050334/2/0#"),
    Array("蓝星", "#fEffect/CharacterEff/1003393/0/0#"),
    Array("淡星", "#fEffect/CharacterEff/moveRandomSprayEff/eunwol_seal/effect/0/2#"),
    Array("花朵", "#fEffect/CharacterEff/1051294/1/0#"),
    Array("花朵", "#fEffect/CharacterEff/1051296/1/0#"),
    Array("金菇", "#fUI/NameTag/medal/74/w#"),
    Array("金菇", "#fUI/NameTag/medal/74/c#"),
    Array("金菇", "#fUI/NameTag/medal/74/e#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/w#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/c#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/e#"),
    Array("胡子", "#fUI/NameTag/124/w#"),
    Array("胡子", "#fUI/NameTag/124/c#"),
    Array("胡子", "#fUI/NameTag/124/e#"),
    Array("帽子", "#fUI/NameTag/nick/312/w#"),
    Array("帽子", "#fUI/NameTag/nick/312/c#"),
    Array("帽子", "#fUI/NameTag/nick/312/e#"),
    Array("圣诞", "#fUI/NameTag/medal/728/w#"),
    Array("圣诞", "#fUI/NameTag/medal/728/c#"),
    Array("圣诞", "#fUI/NameTag/medal/728/e#"),
    Array("红钻", "#fUI/UIWindowPL/DuoEvent/Maximum/DuoInfo/icon/GoodF/0#"),
    Array("王冠", "#fUI/NameTag/medal/468/w#"),
    Array("王冠", "#fUI/NameTag/medal/468/c#"),
    Array("王冠", "#fUI/NameTag/medal/468/e#"),
    Array("确认", "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/ladder/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/7#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/walk1/3#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/jump/0#"),
    Array("音符", "#fEffect/ItemEff/1112811/0/0#"),
    Array("红心", "#fEffect/CharacterEff/1112905/0/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/1#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/2#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/3#"),
    Array("金左指标", "#fUI/UIWindow/MonsterBook/arrowLeft/normal/0#"),
    Array("金右指标", "#fUI/UIWindow/MonsterBook/arrowRight/normal/0#"),
    Array("简单", "#fEffect/ItemEff/1102877/effect/default/0#")

];
var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用
var items = Array(
    Array(1112952, 1000, 1, "沒用的"),

    Array(2023128, 10, 15, "[紅色方塊]", "15個"),
    Array(5062503, 2, 5, "[恢復卡]", "5個"),
    Array(5062026, 10, 15, "[閃炫方塊]", "15個"),
    Array(5530001, 3, 2, "[閃耀方塊]", "2個"),
    Array(5064400, 5, 3, "[終極經驗藥水]", "3個"),
    Array(5060032, 9, 3, "[結合方塊]", "3個"),
    Array(5060048, 10, 5, "[黃金蘋果]", "5個"),
    Array(5060068, 50, 1, "[終極經驗藥水]", "1個"),

    Array(5060046, 5, 2, "[終極經驗藥水]", "1個"),
    Array(2022531, 5, 1, "[終極經驗藥水]", "1個"),
    Array(2023721, 10, 1, "[終極經驗藥水]", "1個"),
    Array(2450158, 10, 1, "[終極經驗藥水]", "1個"),
    Array(2023380, 3, 1, "[終極經驗藥水]", "1個"),
    Array(2633609, 90, 1, "[終極經驗藥水]", "1個"),

    Array(2635034, 10, 1, "[終極經驗藥水]", "1個"),
    Array(2635039, 15, 1, "[終極經驗藥水]", "1個"),
    Array(2635038, 20, 1, "[終極經驗藥水]", "1個"),
    Array(2635037, 50, 1, "[終極經驗藥水]", "1個"),

    Array(2437563, 100, 1, "[終極經驗藥水]", "1個"),
    Array(2000054, 100, 1, "[終極經驗藥水]", "1個"),
    Array(2644008, 100, 1, "[終極經驗藥水]", "1個"),
    Array(2049385, 100, 1, "[終極經驗藥水]", "1個"),
    Array(2049386, 100, 1, "[終極經驗藥水]", "1個"),
    Array(2049387, 200, 1, "[終極經驗藥水]", "1個"),
    Array(2632655, 200, 1, "[終極經驗藥水]", "1個"),
    Array(2049388, 300, 1, "[終極經驗藥水]", "1個"),
    Array(2049389, 400, 1, "[終極經驗藥水]", "1個"),

    Array(3700724, 400, 1, "[終極經驗藥水]", "1個"),
    Array(3700717, 999, 1, "[終極經驗藥水]", "1個"),
    Array(3700713, 666, 1, "[終極經驗藥水]", "1個"),



    Array(3700666, 666, 1, "[五子棋]", "1個"),);

//txt = "" + GC1 + GC1 + GC1 + GC1 + "\r\n";
txt = "\r\n";
txt = "#fs21##r#e你好,這裡是餘額商店!!!#n\r\n";
txt += "#fs16##b#e當前餘額:[#r" + getHyPay(1) + "#b] \r\n";
for (var i = 1; i < items.length; i++) {
    txt += "#L" + i + "##fs16##b#e#b#v" + items[i][0] + "# #z" + items[i][0] + "##b #r" + items[i][1] + "#b 餘額 #r" + items[i][4] + "#n\r\n";
}
let selection = npc.askMenuA(txt, true);
i = selection;
selection = npc.askNumber("購買道具為：#v" + items[i][0] + "# #z" + items[i][0] + "##k\r\n請輸入購買個數：", 1, 1, 999);

if (i) {
    GS = selection;
    QSS = GS * items[i][1];
    if (getHyPay(1) < QSS) {
        npc.say("#fs16##b#e餘額不足，無法購買");
    } else if (player.getFreeSlots(2) < 3 || player.getFreeSlots(4) < 3 || player.getFreeSlots(5) < 10) {
        npc.say("#fs14##b請先確保所有消耗,其他都空3格以上並且特殊欄空出10個以上格子!");
    } else {
        //player.showSystemMessage("消耗 [ " + (QSS) + " ] 餘額");
        addHyPay(-QSS);
        player.gainItem(items[i][0], items[i][2] * GS);
        //player.addEventLog("累積消耗樂餘額數", QSS, 999)
        //player.addEventLog("限購" + items[i][3], 1, 1);
        npc.say("#fs16##b#e購買成功");
        //player.runScript("餘額商店");
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
function getHyPayleiji() {
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
function getpayLog() {
    if (player.getEventLog("餘額") == 0) {
        var sql = "insert into hypay(accountid,name,accname) values('" + player.getAccountId() + "','" + player.getName() + "','" + getIDname() + "')";
        player.customSqlInsert(sql);
        player.addEventLog("餘額", 1, 999);
    }
}
