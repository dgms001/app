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
var itemlist140 = Array();
var itemlist = Array();
var itemlist1 = Array(
    1003797, //高貴的戰士頭盔
    1003798, //高貴的敦威治帽
    1003799, //高貴的守護者貝雷帽
    1003800, //高貴的暗殺者頭套帽
    1003801,
    1042254, //高貴的戰士上衣
    1042255, //高貴的敦威治上衣
    1042256, //高貴的守護者上衣
    1042257, //高貴的暗殺者上衣
    1042258,
    1062165, //高貴的戰士褲子
    1062166, //高貴的敦威治褲子
    1062167, //高貴的守護者褲子
    1062168, //高貴的暗殺者褲子
    1062169 //高貴的漫遊者上衣
);
var itemlist2 = Array(
    1232057,
    1312153,
    1322203,
    1302275,
    1402196,
    1412135,
    1422140,
    1432167,
    1442223,
    1582016,
    1542063,
    1213016,
    1212063,
    1262016,
    1372177,
    1382208,
    1252015,
    1552063,
    1282015,
    1452205,
    1462193,
    1522094,
    1592018,
    1214016,
    1242060,
    1332225,
    1342082,
    1362090,
    1472214,
    1292016,
    1272015,
    1222058,
    1242061,
    1482168,
    1492179,
    1532098,
    1403016);
var itemlist3 = Array(
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
    1152179);
var itemlist4 = Array(
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
var itemlist5 = Array(
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
var itemlist6 = Array(
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
    1403018);
var itemlist7 = Array(
    1672069,
    1672069);
var itemlist8 = Array(
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
var itemlist9 = Array(
    1012438,
    1022211);
var itemlist10 = Array(
    1113196,
    1113196);
var itemlist11 = Array(
    1032223,
    1122267,
    1132246,
    1113075);
var itemlist12 = Array(
    1113211,
    1113211);
var itemlist13 = Array(
    1062289, //无尽辉耀海盗裤
    1062288, //无尽辉耀飞侠裤
    1062287, //无尽辉耀弓箭手裤
    1062286, //无尽辉耀魔法师裤
    1062285, //无尽辉耀骑士裤
    1042437, //无尽辉耀海盗大衣
    1042436, //无尽辉耀飞侠衬衫
    1042435, //无尽辉耀弓箭手斗篷
    1042434, //无尽辉耀魔法师长袍
    1042433, //无尽辉耀骑士盔甲
    1005984, //无尽辉耀海盗帽
    1005983, //无尽辉耀飞侠头巾
    1005982, //无尽辉耀弓箭手帽
    1005981, //无尽辉耀魔法师帽
    1005980, //无尽辉耀骑士头
);

var txt;
var zx24 = "#fMap/MapHelper.img/weather/nightMarket/5#";
var qq1 = "#fUI/EventShop/adventureShop/GradeBuyer/0#";
var qq2 = "#fUI/EventShop/adventureShop/GradeBuyer/1#";
var qq3 = "#fUI/EventShop/adventureShop/GradeBuyer/2#";
var qq4 = "#fUI/EventShop/adventureShop/GradeBuyer/3#";
var qq5 = "#fUI/EventShop/adventureShop/GradeBuyer/4#";
var qq6 = "#fUI/EventShop/adventureShop/GradeBuyer/5#";
txt = "";
txt = "\t" + Icon[17][1] + "#fs20##fc0xFF00caf2##e裝備回真" + Icon[17][1] + "#r#n\r\n";
txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
    + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
    + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
    + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n";
txt += "#fs11##k";
txt += "\t\t\t#L0#" + Icon[103][1] + "回真中心說明#l\r\n\r\n";
txt += "#L1#" + Icon[103][1] + "回真[深淵防具]#r剩" + (4 - player.getEventValue("深淵防具")) + "次#k#l#L2#" + Icon[103][1] + "回真[深淵武器]#r#r剩" + (1 - player.getEventValue("深淵武器")) + "次#k#k#l\r\n\r\n";
txt += "#L3#" + Icon[103][1] + "回真[航海防具]#r剩" + (4 - player.getEventValue("航海防具")) + "次#k#l#L4#" + Icon[103][1] + "回真[航海武器]#r剩" + (1 - player.getEventValue("航海武器")) + "次#k#l\r\n\r\n";
txt += "#L5#" + Icon[103][1] + "回真[神秘防具]#r剩" + (4 - player.getEventValue("神秘防具")) + "次#k#l#L6#" + Icon[103][1] + "回真[神秘武器]#r剩" + (1 - player.getEventValue("神秘武器")) + "次#l#k\r\n\r\n";
txt += "#L7#" + Icon[103][1] + "回真[女 武 神]#r剩" + (1 - player.getEventValue("女武神")) + "次#k#l#L8#" + Icon[103][1] + "回真[ 漆  黑 ]#r剩" + (4 - player.getEventValue("漆黑")) + "次#k#l\r\n\r\n";
txt += "#L9#" + Icon[103][1] + "回真[波 賽 頓]#r剩" + (2 - player.getEventValue("波塞頓")) + "次#k#l#L10#" + Icon[103][1] + "回真[大魔戒指]#r剩" + (1 - player.getEventValue("大魔戒指")) + "次#k#l\r\n\r\n";
txt += "#L11#" + Icon[103][1] + "回真[培 羅 德]#r剩" + (4 - player.getEventValue("培羅德")) + "次#k#l#L12#" + Icon[103][1] + "回真[天上氣息]#r剩" + (1 - player.getEventValue("天上氣息")) + "次#k#l\r\n\r\n";
txt += "#L13#" + Icon[103][1] + "回真[永    恆]#r剩" + (4 - player.getEventValue("永恆")) + "次#k#l\r\n\r\n";
txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
    + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
    + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
    + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n\r\n";
let selection = npc.askMenuS(txt, true);
if (selection == 0) {
    sayStr();
} else if (selection == 1) { //深淵防具
    resolve1();
} else if (selection == 2) { //深淵武器
    resolve2();
} else if (selection == 3) { //航海防具
    resolve3();
} else if (selection == 4) { //航海武器
    resolve4();
} else if (selection == 5) { //神秘防具
    resolve5();
} else if (selection == 6) { //神秘武器
    resolve6();
} else if (selection == 7) { //女武神
    resolve7();
} else if (selection == 8) { //漆黑
    resolve8();
} else if (selection == 9) { //波塞頓
    resolve9();
} else if (selection == 10) { //大魔戒指
    resolve10();
} else if (selection == 11) { //培羅德
    resolve11();
} else if (selection == 12) { //天上氣息
    resolve12();
} else if (selection == 13) { //永恆系列
    resolve13();
}
function resolve1() {
    var index_a = 0;
    var txt = "\t\t\t\t#fs24##e#fc0xFFFFF300#請選擇要回真的裝備 \r\n#b#fs17#";
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
        npc.say("#fs18##b#e您沒有可以回真的裝備。");
    } else {
        var selection = npc.askMenuA(txt, true);
        var item = player.getInventorySlot(parseInt(inventoryType), parseInt(selection));
        var str = item.getTitle();
        if (item.getTitle() == "") { }
        else {
            var get = str.substring(3, 4);
        }
        deleteSlot = selection;
        deleteQuantity = 1;
        itemq = getType(item.getDataId());
        if (bag(4) < 6) { //這裡也要改一下
            npc.say("#fs18##b#e其他欄格子不足6，請整理後分解。");;
        } else if (player.getEventValue("深淵防具") >= 4) {
            npc.say("#fs18##b#e回真次數已上限,無法回真。");
        } else if (item.getAttribute() == 1) {
            npc.say("#fs18##b#e帶鎖的裝備不能進行操作。");
        } else if (get == 0 || get == null) {
            npc.say("#fs18##b#e沒有強化的裝備不可進行操作。");
        } else {
            player.gainItem(item.getDataId(), 1);
            player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
            //這裡給強化道具
            player.gainItem(4001439, 5 * get);
            player.gainItem(4000540, 80 * get);
            player.gainItem(4032053, 500 * get);
            player.gainItem(4021032, 80 * get);
            //這裡給強化道具
            player.addEventValue("深淵防具", 1, 3000);
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "回真了深淵防具!");
            txt = "#fs18##b#e回真成功,返還強化道具*強化次數=真實道具";
            npc.say(txt);


        }
    }
    resolve1();
}
function resolve2() {
    var index_a = 0;
    var txt = "\t\t\t\t#fs24##e#fc0xFFFFF300#請選擇要回真的裝備 \r\n#b#fs17#";
    var indexof = 1;
    var newItemList = Array();
    for (var j = 1; j <= 128; j++) {
        var item = player.getInventorySlot(1, j);
        if (item == null) {
            continue;
        }
        for (var i = 0; i < itemlist2.length; i++) {
            if (itemlist2[i] == item.getDataId()) {
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
        npc.say("#fs18##b#e您沒有可以回真的裝備。");
    } else {
        var selection = npc.askMenuA(txt, true);
        var item = player.getInventorySlot(parseInt(inventoryType), parseInt(selection));
        var str = item.getTitle();
        if (item.getTitle() == "") { }
        else {
            var get = str.substring(3, 4);
        }
        deleteSlot = selection;
        deleteQuantity = 1;
        itemq = getType(item.getDataId());
        if (bag(4) < 6) { //這裡也要改一下
            npc.say("#fs18##b#e其他欄格子不足6，請整理後分解。");;
        } else if (player.getEventValue("深淵武器") >= 1) {
            npc.say("#fs18##b#e回真次數已上限,無法回真。");
        } else if (item.getAttribute() == 1) {
            npc.say("#fs18##b#e帶鎖的裝備不能進行操作。");
        } else if (get == 0 || get == null) {
            npc.say("#fs18##b#e沒有強化的裝備不可進行操作。");
        } else {
            player.gainItem(item.getDataId(), 1);
            player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
            //這裡給強化道具
            player.gainItem(4001439, 10 * get);
            player.gainItem(4000540, 180 * get);
            player.gainItem(4032053, 1000 * get);
            player.gainItem(4021032, 180 * get);
            //這裡給強化道具
            player.addEventValue("深淵武器", 1, 3000);
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "回真了深淵武器!");
            txt = "#fs18##b#e回真成功,返還強化道具*強化次數=真實道具";
            npc.say(txt);

        }
    }
    resolve2();
}
function resolve3() {
    var index_a = 0;
    var txt = "\t\t\t\t#fs24##e#fc0xFFFFF300#請選擇要回真的裝備 \r\n#b#fs17#";
    var indexof = 1;
    var newItemList = Array();
    for (var j = 1; j <= 128; j++) {
        var item = player.getInventorySlot(1, j);
        if (item == null) {
            continue;
        }
        for (var i = 0; i < itemlist3.length; i++) {
            if (itemlist3[i] == item.getDataId()) {
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
        npc.say("#fs18##b#e您沒有可以回真的裝備。");
    } else {
        var selection = npc.askMenuA(txt, true);
        var item = player.getInventorySlot(parseInt(inventoryType), parseInt(selection));
        var str = item.getTitle();
        if (item.getTitle() == "") { }
        else {
            var get = str.substring(3, 4);
        }
        deleteSlot = selection;
        deleteQuantity = 1;
        itemq = getType(item.getDataId());
        if (bag(4) < 8) { //這裡也要改一下
            npc.say("#fs18##b#e其他欄格子不足8，請整理後分解。");;
        } else if (player.getEventValue("航海防具") >= 4) {
            npc.say("#fs18##b#e回真次數已上限,無法回真。");
        } else if (item.getAttribute() == 1) {
            npc.say("#fs18##b#e帶鎖的裝備不能進行操作。");
        } else if (get == 0 || get == null) {
            npc.say("#fs18##b#e沒有強化的裝備不可進行操作。");
        } else {
            player.gainItem(item.getDataId(), 1);
            player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
            //這裡給強化道具
            player.gainItem(4031306, 5 * get);
            player.gainItem(4000541, 80 * get);
            player.gainItem(4032053, 1500 * get);
            player.gainItem(4021032, 300 * get);
            player.gainItem(4021036, 100 * get);
            player.gainItem(4310100, 50 * get);
            //這裡給強化道具
            player.addEventValue("航海防具", 1, 3000);
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "回真了航海防具!");
            txt = "#fs18##b#e回真成功,返還強化道具*強化次數=真實道具";
            npc.say(txt);

        }
    }
    resolve3();
}
function resolve4() {
    var index_a = 0;
    var txt = "\t\t\t\t#fs24##e#fc0xFFFFF300#請選擇要回真的裝備 \r\n#b#fs17#";
    var indexof = 1;
    var newItemList = Array();
    for (var j = 1; j <= 128; j++) {
        var item = player.getInventorySlot(1, j);
        if (item == null) {
            continue;
        }
        for (var i = 0; i < itemlist4.length; i++) {
            if (itemlist4[i] == item.getDataId()) {
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
        npc.say("#fs18##b#e您沒有可以回真的裝備。");
    } else {
        var selection = npc.askMenuA(txt, true);
        var item = player.getInventorySlot(parseInt(inventoryType), parseInt(selection));
        var str = item.getTitle();
        if (item.getTitle() == "") { }
        else {
            var get = str.substring(3, 4);
        }
        deleteSlot = selection;
        deleteQuantity = 1;
        itemq = getType(item.getDataId());
        if (bag(4) < 8) { //這裡也要改一下
            npc.say("#fs18##b#e其他欄格子不足8，請整理後分解。");;
        } else if (player.getEventValue("航海武器") >= 1) {
            npc.say("#fs18##b#e回真次數已上限,無法回真。");
        } else if (item.getAttribute() == 1) {
            npc.say("#fs18##b#e帶鎖的裝備不能進行操作。");
        } else if (get == 0 || get == null) {
            npc.say("#fs18##b#e沒有強化的裝備不可進行操作。");
        } else {
            player.gainItem(item.getDataId(), 1);
            player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
            //這裡給強化道具
            player.gainItem(4031306, 10 * get);
            player.gainItem(4000541, 180 * get);
            player.gainItem(4032053, 3000 * get);
            player.gainItem(4021032, 700 * get);
            player.gainItem(4021036, 100 * get);
            player.gainItem(4310100, 50 * get);
            //這裡給強化道具
            player.addEventValue("航海武器", 1, 3000);
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "回真了航海武器!");
            txt = "#fs18##b#e回真成功,返還強化道具*強化次數=真實道具";
            npc.say(txt);

        }
    }
    resolve4();
}
function resolve5() {
    var index_a = 0;
    var txt = "\t\t\t\t#fs24##e#fc0xFFFFF300#請選擇要回真的裝備 \r\n#b#fs17#";
    var indexof = 1;
    var newItemList = Array();
    for (var j = 1; j <= 128; j++) {
        var item = player.getInventorySlot(1, j);
        if (item == null) {
            continue;
        }
        for (var i = 0; i < itemlist5.length; i++) {
            if (itemlist5[i] == item.getDataId()) {
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
        npc.say("#fs18##b#e您沒有可以回真的裝備。");
    } else {
        var selection = npc.askMenuA(txt, true);
        var item = player.getInventorySlot(parseInt(inventoryType), parseInt(selection));
        var str = item.getTitle();
        if (item.getTitle() == "") { }
        else {
            var get = str.substring(3, 4);
        }
        deleteSlot = selection;
        deleteQuantity = 1;
        itemq = getType(item.getDataId());
        if (bag(4) < 7) { //這裡也要改一下
            npc.say("#fs18##b#e其他欄格子不足7，請整理後分解。");;
        } else if (player.getEventValue("神秘防具") >= 4) {
            npc.say("#fs18##b#e回真次數已上限,無法回真。");
        } else if (item.getAttribute() == 1) {
            npc.say("#fs18##b#e帶鎖的裝備不能進行操作。");
        } else if (get == 0 || get == null) {
            npc.say("#fs18##b#e沒有強化的裝備不可進行操作。");
        } else {
            player.gainItem(item.getDataId(), 1);
            player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
            //這裡給強化道具
            player.gainItem(4031307, 10 * get);
            player.gainItem(4000850, 80 * get);
            player.gainItem(4032053, 2200 * get);
            player.gainItem(4021032, 900 * get);
            player.gainItem(4021036, 200 * get);
            //這裡給強化道具
            player.addEventValue("神秘防具", 1, 3000);
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "回真了神秘防具!");
            txt = "#fs18##b#e回真成功,返還強化道具*強化次數=真實道具";
            npc.say(txt);

        }
    }
    resolve5();
}
function resolve6() {
    var index_a = 0;
    var txt = "\t\t\t\t#fs24##e#fc0xFFFFF300#請選擇要回真的裝備 \r\n#b#fs17#";
    var indexof = 1;
    var newItemList = Array();
    for (var j = 1; j <= 128; j++) {
        var item = player.getInventorySlot(1, j);
        if (item == null) {
            continue;
        }
        for (var i = 0; i < itemlist6.length; i++) {
            if (itemlist6[i] == item.getDataId()) {
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
        npc.say("#fs18##b#e您沒有可以回真的裝備。");
    } else {
        var selection = npc.askMenuA(txt, true);
        var item = player.getInventorySlot(parseInt(inventoryType), parseInt(selection));
        var str = item.getTitle();
        if (item.getTitle() == "") { }
        else {
            var get = str.substring(3, 4);
        }
        deleteSlot = selection;
        deleteQuantity = 1;
        itemq = getType(item.getDataId());
        if (bag(4) < 7) { //這裡也要改一下
            npc.say("#fs18##b#e其他欄格子不足7，請整理後分解。");;
        } else if (player.getEventValue("神秘武器") >= 1) {
            npc.say("#fs18##b#e回真次數已上限,無法回真。");
        } else if (item.getAttribute() == 1) {
            npc.say("#fs18##b#e帶鎖的裝備不能進行操作。");
        } else if (get == 0 || get == null) {
            npc.say("#fs18##b#e沒有強化的裝備不可進行操作。");
        } else {
            player.gainItem(item.getDataId(), 1);
            player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
            //這裡給強化道具
            player.gainItem(4031307, 10 * get);
            player.gainItem(4000850, 80 * get);
            player.gainItem(4032053, 5000 * get);
            player.gainItem(4021032, 2000 * get);
            player.gainItem(4021036, 200 * get);
            //這裡給強化道具
            player.addEventValue("神秘武器", 1, 3000);
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "回真了神秘武器!");
            txt = "#fs18##b#e回真成功,返還強化道具*強化次數=真實道具";
            npc.say(txt);

        }
    }
    resolve6();
}
function resolve7() {
    var index_a = 0;
    var txt = "\t\t\t\t#fs24##e#fc0xFFFFF300#請選擇要回真的裝備 \r\n#b#fs17#";
    var indexof = 1;
    var newItemList = Array();
    for (var j = 1; j <= 128; j++) {
        var item = player.getInventorySlot(1, j);
        if (item == null) {
            continue;
        }
        for (var i = 0; i < itemlist7.length; i++) {
            if (itemlist7[i] == item.getDataId()) {
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
        npc.say("#fs18##b#e您沒有可以回真的裝備。");
    } else {
        var selection = npc.askMenuA(txt, true);
        var item = player.getInventorySlot(parseInt(inventoryType), parseInt(selection));
        var str = item.getTitle();
        if (item.getTitle() == "") { }
        else {
            var get = str.substring(3, 4);
        }
        deleteSlot = selection;
        deleteQuantity = 1;
        itemq = getType(item.getDataId());
        if (bag(4) < 7) { //這裡也要改一下
            npc.say("#fs18##b#e其他欄格子不足7，請整理後分解。");;
        } else if (player.getEventValue("女武神") >= 1) {
            npc.say("#fs18##b#e回真次數已上限,無法回真。");
        } else if (item.getAttribute() == 1) {
            npc.say("#fs18##b#e帶鎖的裝備不能進行操作。");
        } else if (get == 0 || get == null) {
            npc.say("#fs18##b#e沒有強化的裝備不可進行操作。");
        } else {
            player.gainItem(item.getDataId(), 1);
            player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
            //這裡給強化道具
            player.gainItem(4001488, 25 * get);
            player.gainItem(4032053, 1000 * get);
            player.gainItem(4021032, 500 * get);
            player.gainItem(4021036, 250 * get);
            player.gainItem(4001489, 30 * get);
            //這裡給強化道具
            player.addEventValue("女武神", 1, 3000);
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "回真了女武神!");
            txt = "#fs18##b#e回真成功,返還強化道具*強化次數=真實道具";
            npc.say(txt);

        }
    }
    resolve7();
}
function resolve8() {
    var index_a = 0;
    var txt = "\t\t\t\t#fs24##e#fc0xFFFFF300#請選擇要回真的裝備 \r\n#b#fs17#";
    var indexof = 1;
    var newItemList = Array();
    for (var j = 1; j <= 128; j++) {
        var item = player.getInventorySlot(1, j);
        if (item == null) {
            continue;
        }
        for (var i = 0; i < itemlist8.length; i++) {
            if (itemlist8[i] == item.getDataId()) {
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
        npc.say("#fs18##b#e您沒有可以回真的裝備。");
    } else {
        var selection = npc.askMenuA(txt, true);
        var item = player.getInventorySlot(parseInt(inventoryType), parseInt(selection));
        var str = item.getTitle();
        if (item.getTitle() == "") { }
        else {
            var get = str.substring(3, 4);
        }
        deleteSlot = selection;
        deleteQuantity = 1;
        itemq = getType(item.getDataId());
        if (bag(4) < 15) { //這裡也要改一下
            npc.say("#fs18##b#e其他欄格子不足15，請整理後分解。");;
        } else if (player.getEventValue("漆黑") >= 4) {
            npc.say("#fs18##b#e回真次數已上限,無法回真。");
        } else if (item.getAttribute() == 1) {
            npc.say("#fs18##b#e帶鎖的裝備不能進行操作。");
        } else if (get == 0 || get == null) {
            npc.say("#fs18##b#e沒有強化的裝備不可進行操作。");
        } else {
            player.gainItem(item.getDataId(), 1);
            player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
            //這裡給強化道具
            player.gainItem(2633634, 300 * get);
            player.gainItem(4032053, 50000 * get);
            player.gainItem(4021032, 1000 * get);
            player.gainItem(4009156, 10 * get);
            //這裡給強化道具
            player.addEventValue("漆黑", 1, 3000);
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "回真了漆黑系列!");
            txt = "#fs18##b#e回真成功,返還強化道具*強化次數=真實道具";
            npc.say(txt);

        }
    }
    resolve8();
}
function resolve9() {
    var index_a = 0;
    var txt = "\t\t\t\t#fs24##e#fc0xFFFFF300#請選擇要回真的裝備 \r\n#b#fs17#";
    var indexof = 1;
    var newItemList = Array();
    for (var j = 1; j <= 128; j++) {
        var item = player.getInventorySlot(1, j);
        if (item == null) {
            continue;
        }
        for (var i = 0; i < itemlist9.length; i++) {
            if (itemlist9[i] == item.getDataId()) {
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
        npc.say("#fs18##b#e您沒有可以回真的裝備。");
    } else {
        var selection = npc.askMenuA(txt, true);
        var item = player.getInventorySlot(parseInt(inventoryType), parseInt(selection));
        var str = item.getTitle();
        if (item.getTitle() == "") { }
        else {
            var get = str.substring(3, 4);
        }
        deleteSlot = selection;
        deleteQuantity = 1;
        itemq = getType(item.getDataId());
        if (bag(4) < 5) { //這裡也要改一下
            npc.say("#fs18##b#e其他欄格子不足5，請整理後分解。");;
        } else if (player.getEventValue("波塞頓") >= 2) {
            npc.say("#fs18##b#e回真次數已上限,無法回真。");
        } else if (item.getAttribute() == 1) {
            npc.say("#fs18##b#e帶鎖的裝備不能進行操作。");
        } else if (get == 0 || get == null) {
            npc.say("#fs18##b#e沒有強化的裝備不可進行操作。");
        } else {
            player.gainItem(item.getDataId(), 1);
            player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
            //這裡給強化道具
            player.gainItem(4310100, 50 * get);
            player.gainItem(4032053, 1000 * get);
            player.gainItem(4021032, 750 * get);
            //這裡給強化道具
            player.addEventValue("波塞頓", 1, 3000);
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "回真了波塞頓!");
            txt = "#fs18##b#e回真成功,返還強化道具*強化次數=真實道具";
            npc.say(txt);

        }
    }
    resolve9();
}
function resolve10() {
    var index_a = 0;
    var txt = "\t\t\t\t#fs24##e#fc0xFFFFF300#請選擇要回真的裝備 \r\n#b#fs17#";
    var indexof = 1;
    var newItemList = Array();
    for (var j = 1; j <= 128; j++) {
        var item = player.getInventorySlot(1, j);
        if (item == null) {
            continue;
        }
        for (var i = 0; i < itemlist10.length; i++) {
            if (itemlist10[i] == item.getDataId()) {
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
        npc.say("#fs18##b#e您沒有可以回真的裝備。");
    } else {
        var selection = npc.askMenuA(txt, true);
        var item = player.getInventorySlot(parseInt(inventoryType), parseInt(selection));
        var str = item.getTitle();
        if (item.getTitle() == "") { }
        else {
            var get = str.substring(3, 4);
        }
        deleteSlot = selection;
        deleteQuantity = 1;
        itemq = getType(item.getDataId());
        if (bag(4) < 5) { //這裡也要改一下
            npc.say("#fs18##b#e其他欄格子不足5，請整理後分解。");;
        } else if (player.getEventValue("大魔戒指") >= 1) {
            npc.say("#fs18##b#e回真次數已上限,無法回真。");
        } else if (item.getAttribute() == 1) {
            npc.say("#fs18##b#e帶鎖的裝備不能進行操作。");
        } else if (get == 0 || get == null) {
            npc.say("#fs18##b#e沒有強化的裝備不可進行操作。");
        } else {
            player.gainItem(item.getDataId(), 1);
            player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
            //這裡給強化道具
            player.gainItem(4032053, 888 * get);
            player.gainItem(4021032, 400 * get);
            player.gainItem(4021036, 500 * get);
            //這裡給強化道具
            player.addEventValue("大魔戒指", 1, 3000);
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "回真了大魔戒指!");
            txt = "#fs18##b#e回真成功,返還強化道具*強化次數=真實道具";
            npc.say(txt);

        }
    }
    resolve10();
}
function resolve11() {
    var index_a = 0;
    var txt = "\t\t\t\t#fs24##e#fc0xFFFFF300#請選擇要回真的裝備 \r\n#b#fs17#";
    var indexof = 1;
    var newItemList = Array();
    for (var j = 1; j <= 128; j++) {
        var item = player.getInventorySlot(1, j);
        if (item == null) {
            continue;
        }
        for (var i = 0; i < itemlist11.length; i++) {
            if (itemlist11[i] == item.getDataId()) {
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
        npc.say("#fs18##b#e您沒有可以回真的裝備。");
    } else {
        var selection = npc.askMenuA(txt, true);
        var item = player.getInventorySlot(parseInt(inventoryType), parseInt(selection));
        var str = item.getTitle();
        if (item.getTitle() == "") { }
        else {
            var get = str.substring(3, 4);
        }
        deleteSlot = selection;
        deleteQuantity = 1;
        itemq = getType(item.getDataId());
        if (bag(4) < 7) { //這裡也要改一下
            npc.say("#fs18##b#e其他欄格子不足7，請整理後分解。");;
        } else if (player.getEventValue("培羅德") >= 4) {
            npc.say("#fs18##b#e回真次數已上限,無法回真。");
        } else if (item.getAttribute() == 1) {
            npc.say("#fs18##b#e帶鎖的裝備不能進行操作。");
        } else if (get == 0 || get == null) {
            npc.say("#fs18##b#e沒有強化的裝備不可進行操作。");
        } else {
            player.gainItem(item.getDataId(), 1);
            player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
            //這裡給強化道具
            player.gainItem(4310097, 20 * get);
            player.gainItem(4000539, 200 * get);
            player.gainItem(4032053, 1000 * get);
            player.gainItem(4021032, 400 * get);
            for (var i = 0; i <= get; i++) {
                player.gainItem(4001893, i);
            }
            //這裡給強化道具
            player.addEventValue("培羅德", 1, 3000);
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "回真了培羅德系列道具!");
            txt = "#fs18##b#e回真成功,返還強化道具*強化次數=真實道具";
            npc.say(txt);

        }
    }
    resolve11();
}
function resolve12() {
    var index_a = 0;
    var txt = "\t\t\t\t#fs24##e#fc0xFFFFF300#請選擇要回真的裝備 \r\n#b#fs17#";
    var indexof = 1;
    var newItemList = Array();
    for (var j = 1; j <= 128; j++) {
        var item = player.getInventorySlot(1, j);
        if (item == null) {
            continue;
        }
        for (var i = 0; i < itemlist12.length; i++) {
            if (itemlist12[i] == item.getDataId()) {
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
        npc.say("#fs18##b#e您沒有可以回真的裝備。");
    } else {
        var selection = npc.askMenuA(txt, true);
        var item = player.getInventorySlot(parseInt(inventoryType), parseInt(selection));
        var str = item.getTitle();
        if (item.getTitle() == "") { }
        else {
            var get = str.substring(3, 4);
        }
        deleteSlot = selection;
        deleteQuantity = 1;
        itemq = getType(item.getDataId());
        if (bag(4) < 6) { //這裡也要改一下
            npc.say("#fs18##b#e其他欄格子不足6，請整理後分解。");;
        } else if (player.getEventValue("天上氣息") >= 1) {
            npc.say("#fs18##b#e回真次數已上限,無法回真。");
        } else if (item.getAttribute() == 1) {
            npc.say("#fs18##b#e帶鎖的裝備不能進行操作。");
        } else if (get == 0 || get == null) {
            npc.say("#fs18##b#e沒有強化的裝備不可進行操作。");
        } else {
            player.gainItem(item.getDataId(), 1);
            player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
            //這裡給強化道具
            player.gainItem(4034124, 200 * get);
            player.gainItem(4032053, 3000 * get);
            player.gainItem(4021032, 1000 * get);
            player.gainItem(4021036, 300 * get);
            player.gainItem(2630612, 300 * get);
            //這裡給強化道具
            player.addEventValue("天上氣息", 1, 3000);
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "回真了天上氣息!");
            txt = "#fs18##b#e回真成功,返還強化道具*強化次數=真實道具";
            npc.say(txt);

        }
    }
    resolve12();
}
function resolve13() {
    var index_a = 0;
    var txt = "\t\t\t\t#fs24##e#fc0xFFFFF300#請選擇要回真的裝備 \r\n#b#fs17#";
    var indexof = 1;
    var newItemList = Array();
    for (var j = 1; j <= 128; j++) {
        var item = player.getInventorySlot(1, j);
        if (item == null) {
            continue;
        }
        for (var i = 0; i < itemlist13.length; i++) {
            if (itemlist13[i] == item.getDataId()) {
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
        npc.say("#fs18##b#e您沒有可以回真的裝備。");
    } else {
        var selection = npc.askMenuA(txt, true);
        var item = player.getInventorySlot(parseInt(inventoryType), parseInt(selection));
        var str = item.getTitle();
        if (item.getTitle() == "") { }
        else {
            var get = str.substring(0, 2);
        }
        deleteSlot = selection;
        deleteQuantity = 1;
        itemq = getType(item.getDataId());
        if (bag(1) < 1) { //這裡也要改一下
            npc.say("#fs18##b#e其他欄格子不足6，請整理後分解。");;
        } else if (player.getEventValue("永恆") >= 4) {
            npc.say("#fs18##b#e回真次數已上限,無法回真。");
        } else if (item.getAttribute() == 1) {
            npc.say("#fs18##b#e帶鎖的裝備不能進行操作。");
        } else if ((get != "稀有" && get != "傳說" && get != "神級") || get == null) {
            npc.say("#fs18##b#e沒有強化的裝備不可進行操作" + get + "。");
        } else {
            //player.gainItem(item.getDataId(), 1);
            //player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
            //這裡給強化道具
            if (get == "稀有") {
                item.setStr(150);
                item.setDex(150);
                item.setInt(150);
                item.setLuk(150);
                item.setPad(150);
                item.setMad(150);
                item.setBossDamageR(20);
                item.setIgnorePDR(20);
                item.setDamR(20);
                item.setMaxHp(3000);
                item.setMaxMp(1000);
                item.setCHUC(0); //星級
                item.setRUC(7); //回真捲數保留以敲捲數
                item.setCUC(0); //卷軸已用歸零
                item.setIUC(0); //黃金槌子
                item.setIUC2(0); //白金槌子
                item.setTitle("稀有");
                player.updateItem(1, item);
            } else if (get == "傳說") {
                item.setStr(250);
                item.setDex(250);
                item.setInt(250);
                item.setLuk(250);
                item.setPad(250);
                item.setMad(250);
                item.setBossDamageR(35);
                item.setIgnorePDR(35);
                item.setDamR(35);
                item.setMaxHp(5000);
                item.setMaxMp(2000);
                item.setCHUC(0); //星級
                item.setRUC(7); //回真捲數保留以敲捲數
                item.setCUC(0); //卷軸已用歸零
                item.setIUC(0); //黃金槌子
                item.setIUC2(0); //白金槌子
                item.setTitle("傳說");
                player.updateItem(1, item);
            } else if (get == "神級") {
                item.setStr(350);
                item.setDex(350);
                item.setInt(350);
                item.setLuk(350);
                item.setPad(350);
                item.setMad(350);
                item.setBossDamageR(50);
                item.setIgnorePDR(50);
                item.setDamR(50);
                item.setMaxHp(6000);
                item.setMaxMp(3000);
                item.setCHUC(0); //星級
                item.setRUC(7); //回真捲數保留以敲捲數
                item.setCUC(0); //卷軸已用歸零
                item.setIUC(0); //黃金槌子
                item.setIUC2(0); //白金槌子
                item.setTitle("神級");
                player.updateItem(1, item);
            }
            //這裡給強化道具
            player.addEventValue("永恆", 1, 3000);
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "回真了永恆系列!");
            txt = "#fs18##b#e回真成功,保留潛能其他全無";
            npc.say(txt);

        }
    }
    resolve13();
}

/*分隔符*/
function sayStr() {
    var txt = "";
    txt += "#fs14##b#e";
    txt += "#b該回真只有乾淨裝備,和強化的材料[不包含樂豆]\r\n\r\n";
    txt += "#b根據強化等級來返還對於的強化材料,其他的全部回乾淨[強化歸零]\r\n\r\n";
    txt += "#b意味著潛能 星級 捲軸 金錘子等這些全部不返還[注意沒有提到的也一樣不返還]\r\n\r\n";
    txt += "#b此回真主要針對部分玩家 前期沒有榮耀 隨意打捲軸而誕生的功能\r\n\r\n";
    txt += "#b次數是賬號限定\r\n\r\n";
    txt += "#b回真返還的只有強化材料,不包含NV幣[別傻傻的去搞NV得裝備]\r\n\r\n";
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
