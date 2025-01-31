var status = -1
var txt;
date = new Date();
let week = date.getDay();
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
/*------------------------------------------------------------*/
//var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
//var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //紅心桃心
ifSQL();
//delvalue();
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
let AS;

var items = Array(
    Array(1112952, 1000, 1, "沒用的"),
    //       ID  價格 數量  名稱   楓點or樂豆[2/1] 限購次數 限購NAME
    Array(4032053, 1, 1, "[擋視線用的]", 2, 0, "全服限購15"),
    Array(5062026, 200000, 1, "[結合魔方]", 2, 60, "全服限購5"),
    Array(2650004, 1000000, 1, "[捲軸收納箱]", 2, 10, "全服限購1"),
    Array(4330019, 1000000, 1, "[硬幣收納箱]", 2, 10, "全服限購2"),
    Array(2438531, 2000000, 1, "[坐騎抽獎箱]", 2, 6, "全服限購3"),
    Array(3080016, 1000000, 1, "[椅子收納箱]", 2, 10, "全服限購6"),
    Array(2022709, 1000000, 1, "[掉寶率加倍]", 2, 25, "全服限購11"),

    //下面是樂豆區域
    Array(2022709, 10, 1, "[掉寶率加倍]", 1, 25, "全服限購12"),
    Array(4310237, 500, 1, "[NOVA幣]", 1, 1, "全服限購18"),
    Array(5062026, 4, 1, "[結合魔方]", 1, 60, "全服限購4"),
    Array(5060028, 15, 1, "[潘朵拉]", 1, 20, "全服限購16"),
    Array(4330019, 15, 1, "[硬幣收納箱]", 1, 10, "全服限購20"),
    Array(2438531, 30, 1, "[坐騎抽獎箱", 1, 20, "全服限購17"),
    Array(2433575, 88, 1, "[榮耀自選卷]", 1, 10, "全服限購9"),
    Array(2650004, 15, 1, "[捲軸收納箱]", 1, 10, "全服限購19"),
    Array(2630649, 50, 1, "[暗黑自選卷]", 1, 10, "全服限購8"),
    Array(3080016, 15, 1, "[椅子收納箱]", 1, 10, "全服限購7"),
    Array(2644006, 66, 1, "[追加30%1星]", 1, 10, "全服限購10"),

    /*
    Array(5062500, 2, 1, "[附加方塊]",2,20,"全服限購13"),
    Array(5062500, 2, 1, "[附加方塊]",2,20,"全服限購14"),
    Array(5062500, 2, 1, "[附加方塊]",2,20,"全服限購15"),
     */
);
if (hour >= 21 && minute >= 5) {
    txt = "\r\n";
    txt = "\t" + Icon[17][1] + "#fs20##fc0xFF00caf2#全服限購商店" + Icon[17][1] + "#r#n\r\n";
    txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
        + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
        + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
        + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n";
    txt += "#fs11##b";
    txt += "當前樂豆:#r[" + player.getCashShopCurrency(1) + "] 當前楓點:#r[" + player.getCashShopCurrency(2) + "]\r\n";

    for (var i = 1; i < items.length; i++) {
        AS = "楓點";
        if (items[i][4] == 1) {
            AS = "#r樂豆";
        }
        txt += "#L" + i + "##b#v" + items[i][0] + "# #k#z" + items[i][0] + "##b #r" + items[i][1] + "#b " + AS + " 剩餘次數:" + (items[i][5] - getvalue(items[i][6])) + "#n\r\n";
    }
    let selection = npc.askMenuS(txt, true);
    i = selection;
} else {
    npc.say("每天的 21:05 才會開啟限購商店喲,限購是全服限購,別人購買了就會少一次機會,所以手慢無");
}

selection = npc.askNumber("購買道具為：#v" + items[i][0] + "# #z" + items[i][0] + "##k\r\n請輸入購買個數：", 1, 1, 1);

if (i) {
    GS = selection;
    QSS = GS * items[i][1];
    if ((items[i][5] - getvalue(items[i][6])) <= 0) {
        npc.say("全服次數已用完,無法購買");
    } else if (player.getCashShopCurrency(items[i][4]) < QSS) {
        npc.say("#fs16##b#e樂豆或楓點不足，無法購買");
    } else if (player.getFreeSlots(2) < 1 || player.getFreeSlots(4) < 1 || player.getFreeSlots(5) < 1) {
        npc.say("#fs14##b請先確保所有背包欄1個以上格子!");
    } else {
        player.modifyCashShopCurrency(items[i][4], -QSS);
        player.gainItem(items[i][0], items[i][2] * GS);
        updateitems(items[i][6], +1);
        player.addEventValue("累積消耗限購樂豆額數", QSS, 999)
        player.addEventValue("限購" + items[i][3], 1, 1);
        npc.broadcastPlayerNotice(37, "恭喜這個B " + player.getName() + " 購買到了 " + items[i][3] + " ！！！");
        npc.say("#fs16##b#e購買成功");
    }
}

function updateitems(name, value) {
    var sql = "update dgms_worldshop SET AllValue = AllValue+" + value + " where AllName = '" + name + "';"; //疑問 有兩個分號;
    player.customSqlUpdate(sql);
}

function getvalue(NAME) {
    var sql = "select AllValue from dgms_worldshop where AllName = ? ";
    var result = player.customSqlResult(sql, "" + NAME + "");
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("AllValue");
        }
    } else {
        return 0;
    }

}

function insertitems() {
    for (var i = 1; i < 21; i++) {
        var sql = "insert into dgms_worldshop(AllValue,AllName,ID) values('0','全服限購" + i + "','" + i + "')";
        player.customSqlInsert(sql);
    }
}

function insertitem() {
    var sql = "insert into dgms_worldshop(AllValue,AllName,ID) values('1','全服限購LOG','21')";
    player.customSqlInsert(sql);

}
function ifSQL() {
    if (getvalue("全服限購LOG") == 0) {
        insertitems();
        insertitem();
    } else { }
}
