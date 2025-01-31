/*
裝備出售
 */
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
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
var txt;
var itemList = new Array();
var inventoryType = 1;
var deleteSlot;
var deleteQuantity;
var typed = 0;
var beDeletedArr = new Array();
var listq = Array(
        2, 5, 20);
var itemq = 0;

var itemlist140 = Array(
        1099011, //	銀河之咒盾
        1099012, //	銀河之盾
        1342095, //	銀河之刃
        1352009, //	銀河之箭矢
        1352109, //	銀河之卡片
        1352206, //	銀河之吊墜
        1352216, //	銀河之念珠
        1352226, //	銀河之鎖鏈
        1352236, //	銀河之赤銅之書
        1352246, //	銀河之青銀之書
        1352256, //	銀河之白金之書
        1352266, //	銀河之風暴羽毛
        1352276, //	銀河之扳指
        1352286, //	銀河之劍鞘
        1352296, //	銀河之靈符
        1352406, //	銀河之魂珠
        1352506, //	銀河之精髓
        1352606, //	銀河之靈魂手鐲
        1352707, //	銀河之麥林彈
        1352815, //	銀河之私語
        1352906, //	銀河之腕輪
        1352916, //	銀河之鷹眼
        1352928, //	銀河之火藥桶
        1352935, //	銀河之天龍錘
        1352945, //	銀河之龍神的遺產
        1352957, //	銀河之極限球
        1352967, //	銀河之狂野之矛
        1352975, //	銀河之圣地之光
        1353006, //	銀河之控制器
        1353105, //	銀河之狐貍珠
        1353405, //	銀河之爆破彈
        1353606, //
        1353306, //
        1353505);

var itemlist = Array(
        2613012,
        2613013,
        2612019,
        2612020,
        2616000,
        2616001,
        2615005,
        2615006,
        2048812,
        2048813);

var itemlist1 = Array(
        1032316, //指揮官  耳環
        1132308, //夢幻的腰帶
        1012632, //口紅控制氣
        1022278, //魔力的眼罩
        1122430, //苦痛的根源
        1113306, //巨大的恐怖
        1182285,
        1190555,
        1190556,
        1190557,
        1190558,
        1190559);

var itemlist2 = Array(
        1004422,
        1004423,
        1004424,
        1004425,
        1004426,
        1073030,
        1073032,
        1073033,
        1073034,
        1073035,
        1082636,
        1082637,
        1082638,
        1082639,
        1082640,
        1102775,
        1102794,
        1102795,
        1102796,
        1102797,
        1152174,
        1152176,
        1152177,
        1152178,
        1152179,
        1582017,
        1232109,
        1402251,
        1302333,
        1312199,
        1322250,
        1412177,
        1422184,
        1432214,
        1442268,
        1542108,
        1213017,

        1212115,
        1372222,
        1382259,
        1552110,
        1252093,
        1262017,
        1282016,

        1522138,
        1592019,
        1452252,
        1462239,
        1214017,

        1242116,
        1332274,
        1342101,
        1362135,
        1472261,
        1292017,
        1272016,

        1222109,
        1482216,
        1492231,
        1532144,
        1403017);

var itemlist3 = Array(
        1212120,
        1222113,
        1232113,
        1242121,
        1242122,
        1252098,
        1262039,
        1302343,
        1312203,
        1322255,
        1332279,
        1342104,
        1362140,
        1372228,
        1382265,
        1402259,
        1412181,
        1422189,
        1432218,
        1442274,
        1452257,
        1462243,
        1472265,
        1482221,
        1492235,
        1522143,
        1532150,
        1542117,
        1552119,
        1582023,
        1272017,
        1282017,
        1592020,
        1213018,
        1292018,
        1214018,
        1403018,
        1004808,
        1004809,
        1004810,
        1004811,
        1004812,
        1053063,
        1053064,
        1053065,
        1053066,
        1053067,
        1073158,
        1073159,
        1073160,
        1073161,
        1073162,
        1082695,
        1082696,
        1082697,
        1082698,
        1082699,
        1102940,
        1102941,
        1102942,
        1102943,
        1102944,
        1152197,
        1152198,
        1152199,
        1152200,
        1152196);

var itemlist4 = Array(
        2613068,
        2613069,
        2612080,
        2612081,
        2616216,
        2616217,
        2615051,
        2615052,
        2048825,
        2048826);

var itemlist11 = Array(
        5062009,
        5062010);

var itemlist22 = Array(
        Array(4001714, 1),
        Array(5062024, 3),
        Array(2049116, 20),
        Array(2049610, 20));

var itemlist33 = Array(
        Array(4001715, 10),
        Array(5062024, 1),
        Array(2430673, 1),
        Array(2049116, 4),
        Array(2049610, 4),
        Array(2048717, 40)
        //Array(2431996, 60)
    );
var txt;
var zx24 = "#fMap/MapHelper.img/weather/nightMarket/5#";
var qq1 = "#fUI/EventShop/adventureShop/GradeBuyer/0#"
    var qq2 = "#fUI/EventShop/adventureShop/GradeBuyer/1#"
    var qq3 = "#fUI/EventShop/adventureShop/GradeBuyer/2#"
    var qq4 = "#fUI/EventShop/adventureShop/GradeBuyer/3#"
    var qq5 = "#fUI/EventShop/adventureShop/GradeBuyer/4#"
    var qq6 = "#fUI/EventShop/adventureShop/GradeBuyer/5#"

    txt = "";
txt = "\t" + Icon[17][1] + "#fs20##fc0xFF00caf2##e裝備分解" + Icon[17][1] + "#r#n\r\n";
txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
+Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
+Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
+Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n";
//txt += "\t\t \t   #e#fs20##r分解中心\r\n#n";
//txt += ""+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+"\r\n";
txt += "";
txt += "#fs11##b";
txt += "";
txt += "";
txt += "";
txt += "";
txt += "";
txt += "#L0#" + Icon[103][1] + "分解中心說明#l  #L1#" + Icon[103][1] + "分解[漆黑系列]#l\r\n\r\n#fs11#";
txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
+Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
+Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
+Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n\r\n";
if (player.isGm()) {
    //txt += "#L7#分解RXV捲#l\r\n";
}
let selection = npc.askMenuS(txt, true);
if (selection == 0) {
    sayStr();
} else if (selection == 1) {
        resolve1();
}

function resolve1() {
    var index_a = 0;
    var txt = "\t\t\t\t#fs24##e#fc0xFFFFF300#請選擇要分解的裝備[鎖定也可被分解] \r\n#b#fs17#";
    var indexof = 1;
    var newItemList = Array();
    for (var j = 1; j <= 128; j++) {
        var item = player.getInventorySlot(1, j);
        if (item == null) {
            continue;
        }
        for (var i = 0; i < itemlist1.length; i++) {
            if (itemlist1[i] == item.getDataId()) {
                newItemList[j] = item.getDataId();
                break;
            }
        }
    }
    for (var key in newItemList) {
        txt += "#L" + key + "##v" + newItemList[key] + "##z" + newItemList[key] + "#";
        index_a++;
        if (indexof > 1 && indexof % 2 == 0) {
            txt += "\r\n";
        }
        indexof++;
    }
    if (index_a <= 0) {
        npc.say("#fs18##b#e您沒有可以分解的裝備。");
    } else {
        var selection = npc.askMenuA(txt, true);
        var item = player.getInventorySlot(parseInt(inventoryType), parseInt(selection));
        deleteSlot = selection;
        deleteQuantity = 1;
        itemq = getType(item.getDataId());
        var str = item.getTitle();
        if (str == "") {
            var get = 0;
        } else {
            var get = str.substring(3, 4);
        }
        if (bag(4) < 2) {
            npc.say("#fs18##b#e其他欄格子不足，請整理後分解。"); ;
        } else if (get >= 1) {
            npc.say("#fs18##b#e強化過裝備不能進行操作。");
        } else if (item.getAttribute() == 8) {
            npc.say("#fs18##b#e封印的裝備無法分解。");
        } else {
            player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
            player.gainItem(4009156, 1);
            txt = "#fs18##b#e分解成功，獲得了#v4009156#X1個";
            npc.say(txt);

        }
    }
	resolve1();
}

function sayStr() {
    var txt = "";
    txt += "#fs17##b#e";
    txt += "#b【漆黑系列】:獲得#r#v4009156##z4009156#*1\r\n";
    npc.say(txt);
}

function getType(itemID) {
    var itemq = 20;
    for (var i = 0; i < itemlist.length; i++) {
        if (itemlist[i] == itemID) {
            itemq = 10;
        }
    }
    for (var i = 0; i < itemlist140.length; i++) {
        if (itemlist140[i] == itemID) {
            itemq = 10;
        }
    }

    return itemq;
}

function bag(type) {
    let bagCount = 0;
    for (var slot = 1; slot < 129; slot++) {
        let item = player.getInventorySlot(type, slot);
        if (item == null) {
            bagCount++
        }
    }
    return bagCount;
}
