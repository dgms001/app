var status = -1
var txt;
/*------------------------------------------------------------*/
var ltz45 = "#fMap/MapHelper.img/weather/starPlanet2/5#";
var ltz47 = "#fMap/MapHelper.img/weather/starPlanet/4#";
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
    Array("蓝点", "#fEffect/CharacterEff/1082588/3/0#"),  //蓝点
    Array("黄星", "#fEffect/CharacterEff/1112924/0/0#"), //黄星
    Array("蓝星", "#fEffect/CharacterEff/1112925/0/0#"), //蓝星
    Array("红星", "#fEffect/CharacterEff/1112926/0/0#"), //红星
    Array("黄星星", "#fUI/UIPVP.img/MiniMapIcon/star#"),  //黄星星
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
var itemList = [


Array(1182136, 10, 1 ),
Array(1113083, 10, 1 ),
Array(1113132, 10, 1 ),
Array(1202161, 10, 1 ),
Array(1202162, 10, 1 ),
Array(1202163, 10, 1 ),
Array(1202164, 10, 1 ),
Array(4132001, 10, 1 ),
Array(1113195, 10, 1 ),
Array(1122319, 10, 1 ),
Array(1122318, 10, 1 ),
Array(1092049, 100, 1),
Array(1092089, 100, 1),
Array(1092088, 100, 1),
Array(1092087, 100, 1),
Array(5062026, 100, 1),
Array(5064502, 100, 1),
Array(5064400, 100, 1),
Array(2048760, 100, 1),
Array(2702008, 100, 1),

    Array(1582017, 300, 1),//航海武器
    Array(1232109, 300, 1),//航海武器
    Array(1402251, 300, 1),//航海武器
    Array(1302333, 300, 1),//航海武器
    Array(1312199, 300, 1),//航海武器
    Array(1322250, 300, 1),//航海武器
    Array(1412177, 300, 1),//航海武器
    Array(1422184, 300, 1),//航海武器
    Array(1432214, 300, 1),//航海武器
    Array(1442268, 300, 1),//航海武器
    Array(1542108, 300, 1),//航海武器
    Array(1213017, 300, 1),//航海武器
    Array(1212115, 300, 1),//航海武器
    Array(1372222, 300, 1),//航海武器
    Array(1382259, 300, 1),//航海武器
    Array(1552110, 300, 1),//航海武器
    Array(1252093, 300, 1),//航海武器
    Array(1262017, 300, 1),//航海武器
    Array(1282016, 300, 1),//航海武器
    Array(1522138, 300, 1),//航海武器
    Array(1592019, 300, 1),//航海武器
    Array(1452252, 300, 1),//航海武器
    Array(1462239, 300, 1),//航海武器
    Array(1214017, 300, 1),//航海武器
    Array(1242116, 300, 1),//航海武器
    Array(1332274, 300, 1),//航海武器
    Array(1342101, 300, 1),//航海武器
    Array(1362135, 300, 1),//航海武器
    Array(1472261, 300, 1),//航海武器
    Array(1292017, 300, 1),//航海武器
    Array(1272016, 300, 1),//航海武器
    Array(1222109, 300, 1),//航海武器
    Array(1482216, 300, 1),//航海武器
    Array(1492231, 300, 1),//航海武器
    Array(1532144, 300, 1),//航海武器
    Array(1403017, 300, 1),//航海武器
    Array(1342090, 300, 1),//波
    Array(1004422, 300, 1),//航海防具
    Array(1004423, 300, 1),//航海防具
    Array(1004424, 300, 1),//航海防具
    Array(1004425, 300, 1),//航海防具
    Array(1004426, 300, 1),//航海防具
    Array(1073030, 300, 1),//航海防具
    Array(1073032, 300, 1),//航海防具
    Array(1073033, 300, 1),//航海防具
    Array(1073034, 300, 1),//航海防具
    Array(1073035, 300, 1),//航海防具
    Array(1082636, 300, 1),//航海防具
    Array(1082637, 300, 1),//航海防具
    Array(1082638, 300, 1),//航海防具
    Array(1082639, 300, 1),//航海防具
    Array(1082640, 300, 1),//航海防具
    Array(1102775, 300, 1),//航海防具
    Array(1102794, 300, 1),//航海防具
    Array(1102795, 300, 1),//航海防具
    Array(1102796, 300, 1),//航海防具
    Array(1102797, 300, 1),//航海防具
    Array(1152174, 300, 1),//航海防具
    Array(1152176, 300, 1),//航海防具
    Array(1152177, 300, 1),//航海防具
    Array(1152178, 300, 1),//航海防具
    Array(1152179, 300, 1),//航海防具
    Array(1012438, 300, 1),//航海防具
    Array(1022211, 300, 1),//航海防具


    Array(1232057, 500, 1),//FFN武器
    Array(1312153, 500, 1),//FFN武器
    Array(1322203, 500, 1),//FFN武器
    Array(1302275, 500, 1),//FFN武器
    Array(1402196, 500, 1),//FFN武器
    Array(1412135, 500, 1),//FFN武器
    Array(1422140, 500, 1),//FFN武器
    Array(1432167, 500, 1),//FFN武器
    Array(1442223, 500, 1),//FFN武器
    Array(1582016, 500, 1),//FFN武器
    Array(1542063, 500, 1),//FFN武器
    Array(1213016, 500, 1),//FFN武器
    Array(1212063, 500, 1),//FFN武器
    Array(1262016, 500, 1),//FFN武器
    Array(1372177, 500, 1),//FFN武器
    Array(1382208, 500, 1),//FFN武器
    Array(1252015, 500, 1),//FFN武器
    Array(1552063, 500, 1),//FFN武器
    Array(1282015, 500, 1),//FFN武器
    Array(1452205, 500, 1),//FFN武器
    Array(1462193, 500, 1),//FFN武器
    Array(1522094, 500, 1),//FFN武器
    Array(1592018, 500, 1),//FFN武器
    Array(1214016, 500, 1),//FFN武器
    Array(1242060, 500, 1),//FFN武器
    Array(1332225, 500, 1),//FFN武器
    Array(1342082, 500, 1),//FFN武器
    Array(1362090, 500, 1),//FFN武器
    Array(1472214, 500, 1),//FFN武器
    Array(1292016, 500, 1),//FFN武器
    Array(1272015, 500, 1),//FFN武器
    Array(1222058, 500, 1),//FFN武器
    Array(1242061, 500, 1),//FFN武器
    Array(1482168, 500, 1),//FFN武器
    Array(1492179, 500, 1),//FFN武器
    Array(1532098, 500, 1),//FFN武器
    Array(1403016, 500, 1),//FFN武器
    Array(1003797, 500, 1),//FFN防具
    Array(1003798, 500, 1),//FFN防具
    Array(1003799, 500, 1),//FFN防具
    Array(1003800, 500, 1),//FFN防具
    Array(1003801, 500, 1),//FFN防具
    Array(1042254, 500, 1),//FFN防具
    Array(1042255, 500, 1),//FFN防具
    Array(1042256, 500, 1),//FFN防具
    Array(1042257, 500, 1),//FFN防具
    Array(1042258, 500, 1),//FFN防具
    Array(1062165, 500, 1),//FFN防具
    Array(1062166, 500, 1),//FFN防具
    Array(1062167, 500, 1),//FFN防具
    Array(1062168, 500, 1),//FFN防具
    Array(1062169, 500, 1),//FFN防具
    Array(1003797, 500, 1),//FFN防具
    Array(1003798, 500, 1),//FFN防具
    Array(1003799, 500, 1),//FFN防具
    Array(1003800, 500, 1),//FFN防具
    Array(1003801, 500, 1),//FFN防具
    Array(1042254, 500, 1),//FFN防具
    Array(1042255, 500, 1),//FFN防具
    Array(1042256, 500, 1),//FFN防具
    Array(1042257, 500, 1),//FFN防具
    Array(1042258, 500, 1),//FFN防具
    Array(1062165, 500, 1),//FFN防具
    Array(1062166, 500, 1),//FFN防具
    Array(1062167, 500, 1),//FFN防具
    Array(1062168, 500, 1),//FFN防具
    Array(1062169, 500, 1),//FFN防具
	
	    Array(1033000, 10, 1),//大獎
    Array(1114402, 10, 1),//大獎
    Array(1113211, 10, 1),//大獎

    Array(1162080, 1, 1),//漆黑
    Array(1162081, 1, 1),//漆黑
    Array(1162082, 1, 1),//漆黑
    Array(1162083, 1, 1),//漆黑
    Array(1032316, 1, 1),//漆黑
    Array(1132308, 1, 1),//漆黑
    Array(1012632, 1, 1),//漆黑
    Array(1022278, 1, 1),//漆黑
    Array(1122430, 1, 1),//漆黑
    Array(1113306, 1, 1),//漆黑
    Array(1182285, 1, 1),//漆黑
	
	



];


//Jackpotchance 大獎機率是這個
var Jackpot1 = [ //榮耀

    Array(1033000, 10, 1),//大獎
    Array(1114402, 10, 1),//大獎
    Array(1113211, 10, 1),//大獎

    Array(1162080, 1, 1),//漆黑
    Array(1162081, 1, 1),//漆黑
    Array(1162082, 1, 1),//漆黑
    Array(1162083, 1, 1),//漆黑
    Array(1032316, 1, 1),//漆黑
    Array(1132308, 1, 1),//漆黑
    Array(1012632, 1, 1),//漆黑
    Array(1022278, 1, 1),//漆黑
    Array(1122430, 1, 1),//漆黑
    Array(1113306, 1, 1),//漆黑
    Array(1182285, 1, 1),//漆黑
	




];
var Jackpot2 = [ //究極B
    Array(1032219, 8, 1),//高貝
    Array(1113132, 8, 1),//高貝
    Array(1112956, 8, 1),//高貝
    Array(1012174, 5, 1),//高貝
    Array(1342090, 8, 1),//波
	    Array(1182017, 8, 1),//波
Array(4310218, 1000, 1),//波
Array(2633634, 1000, 1),//波
Array(4310218, 1000, 1),//波
Array(2633634, 1000, 1),//波
Array(4310218, 1000, 1),//波
Array(2633634, 1000, 1),//波
Array(4310218, 1000, 1),//波
Array(2633634, 1000, 1),//波
Array(4310218, 1000, 1),//波
Array(2633634, 1000, 1),//波
Array(4310218, 1000, 1),//波
Array(2633634, 1000, 1),//波
Array(4310218, 1000, 1),//波
Array(2633634, 1000, 1),//波
Array(4310218, 1000, 1),//波
Array(2633634, 1000, 1),//波
Array(4310218, 1000, 1),//波
Array(2633634, 1000, 1),//波
Array(4310218, 1000, 1),//波
Array(2633634, 1000, 1),//波
];

var zx24 = "#fMap/MapHelper.img/weather/nightMarket/5#";
var qq1 = "#fUI/EventShop/adventureShop/GradeBuyer/0#"
var qq2 = "#fUI/EventShop/adventureShop/GradeBuyer/1#"
var qq3 = "#fUI/EventShop/adventureShop/GradeBuyer/2#"
var qq4 = "#fUI/EventShop/adventureShop/GradeBuyer/3#"
var qq5 = "#fUI/EventShop/adventureShop/GradeBuyer/4#"
var qq6 = "#fUI/EventShop/adventureShop/GradeBuyer/5#"
轉蛋所需物品 = 5060048;
date = new Date();
let week = date.getDay();
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
var timeStamp = java.lang.System.currentTimeMillis();
var min = 3; //一分鐘 這裏自己改時間
var time = parseInt(min - (((timeStamp - parseInt(player.getQuestRecordEx(100000002))) / 1000)));
if (time > 0) {
    player.showProgressMessageFont("你按太快了哦," + time + "秒後才能開啟!", 3, 30, 4, 10 * 1000);
} else {
    player.updateQuestRecordEx(100000002, timeStamp);


    //txt = "\r\n";
    var itemsl = 5060048;
    txt = "\t\t\t\t#fs21##r#e黃金蘋果轉蛋#fs12##n\r\n";
    txt += "#b每次需要消耗 #r1#b個#v5060048#\r\n"

    //txt += "\t\t   #e#fs20##r#v"+轉蛋所需物品+"##z"+轉蛋所需物品+"#\r\n#n";
    //txt += ""+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+"\r\n";
    txt += "";
    txt += "\t\t\t\t\t#L1#快速抽獎#l \r\n\r\n";//#L2#"+Icon[103][1]+"查看內容物#l

    txt += "#fs16##e#b本期大獎\r\n#v1033000##v1114402##v1113211#\r\n漆黑大獎\r\n#v1162080##v1162081##v1162082##v1162083##v1032316##v1132308##v1012632##v1022278##v1122430##v1113306##v1182285#\r\n內容物\r\n#v4310218##v2633634##v1182017##v1182136##v1113083##v1032219##v1112956##v1012174##v1113132##v1202161##v1202162##v1202163##v1202164##v4132001##v1113195##v1122319##v1122318##v1092049##v1092089##v1092088##v1092087##v5062026##v5064502##v5064400##v2048760##v2702008#\r\n航海大獎\r\n#v1582017##v1232109##v1302333##v1312199##v1322250##v1412177##v1422184##v1432214##v1442268##v1542108##v1213017##v1212115##v1372222##v1382259##v1552110##v1252093##v1262017##v1282016##v1522138##v1592019##v1452252##v1462239##v1214017##v1242116##v1332274##v1342101##v1362135##v1472261##v1292017##v1272016##v1222109##v1482216##v1492231##v1532144##v1403017##v1004422##v1004423##v1004424##v1004425##v1004426##v1073030##v1073032##v1073033##v1073034##v1073035##v1082636##v1082637##v1082638##v1082639##v1082640##v1102775##v1102794##v1102795##v1102796##v1102797##v1152174##v1152176##v1152177##v1152178##v1152179##v1012438##v1022211##v1342090#\r\n深淵大獎\r\n#v1232057##v1312153##v1322203##v1302275##v1402196##v1412135##v1422140##v1432167##v1442223##v1582016##v1542063##v1213016##v1212063##v1262016##v1372177##v1382208##v1252015##v1552063##v1282015##v1452205##v1462193##v1522094##v1592018##v1214016##v1242060##v1332225##v1342082##v1362090##v1472214##v1292016##v1272015##v1222058##v1242061##v1482168##v1492179##v1532098##v1403016##v1003797##v1003798##v1003799##v1003800##v1003801##v1042254##v1042255##v1042256##v1042257##v1042258##v1062165##v1062166##v1062167##v1062168##v1062169#";


    //txt += "\t\t\t\t  持有#v"+itemsl+"#:[#r#c"+itemsl+"#個#b]\r\n";
    //txt += "\t\t\t\t  榮耀次數"+player.getEventValue("艾比榮耀")+"/10 B卷次數:"+player.getEventValue("艾比究極")+"/30\r\n";

    //txt += "\t\t#L2#查看本期大獎#l";

    txt += "";

    let selection = npc.askMenu(txt);

    switch (selection) {
        case 2:
            npc.say("#fs14##b獎品如下:\r\n#v2613070##v2613071##v2612082##v2612083##v2616218##v2616219##v2615054##v2615055##v2048830##v2048831#\r\n#v2613068##v2613069##v2612080##v2612081##v2616216##v2616217##v2615051##v2615052##v2048825##v2048826##v2613062##v2613063##v2612074##v2612075##v2616072##v2616073##v2615041##v2615042##v2048819##v2048820##v2613048##v2613049##v2612055##v2612056##v2616059##v2616060##v2615029##v2615030##v2048815##v2048816##v2613012##v2613013##v2612019##v2612020##v2616000##v2616001##v2615005##v2615006##v2048812##v2048813#");
            break;

        case 1:
            while (true) {
                Jackpotchance = Math.floor(Math.random() * 10000);//獎池總機率
                if (player.hasItem(轉蛋所需物品, 1) < 1) {
                    npc.say("#fs17##e#b玩家持有的#v" + 轉蛋所需物品 + "#不足");
                } else if (player.getFreeSlots(1) < 1 || player.getFreeSlots(2) < 1 || player.getFreeSlots(3) < 1 || player.getFreeSlots(4) < 1 || player.getFreeSlots(5) < 1) {
                    npc.say("#fs17##e#b身上背包空間不足。");
                } else {
                    if (Jackpotchance <= 1) {
                        if (player.getEventValue("艾比榮耀") < 100000) {
                            finalitem = Array();
                            for (var i = 0; i < Jackpot1.length; i++) {
                                finalitem.push(Jackpot1[i]);
                            }
                            random = new java.util.Random();
                            finalchance = random.nextInt(finalitem.length);
                            itemId = finalitem[finalchance][0];
                            quantity = finalitem[finalchance][2];
                            player.gainItem(itemId, quantity);
                            player.addEventValue("艾比榮耀", 1, 1);
                            // player.showSystemMessage("艾比榮耀"+player.getEventValue("艾比榮耀")+"次");
                            player.loseItem(轉蛋所需物品, 1);
                            npc.say("你獲得了 #b#t" + itemId + "##k " + quantity + "個。");
                        } else {
                            itemId = 2631487;
                            quantity = 1;
                            player.gainItem(itemId, quantity);
							player.gainItem(2630612,1)
                            player.loseItem(轉蛋所需物品, 1);
                            npc.say("榮耀捲次數已滿,你獲得了 #b#t" + itemId + "##k " + quantity + "個。");
                        }

                    } else if (Jackpotchance <= 100) {
                        if (player.getEventValue("艾比究極") < 300000) {
                            finalitem = Array();
                            for (var i = 0; i < Jackpot2.length; i++) {
                                finalitem.push(Jackpot2[i]);
                            }
                            random = new java.util.Random();
                            finalchance = random.nextInt(finalitem.length);
                            itemId = finalitem[finalchance][0];
                            quantity = finalitem[finalchance][2];
                            player.gainItem(itemId, quantity);
                            player.addEventValue("艾比究極", 1, 1);
                            // player.showSystemMessage("艾比究極");
                            player.loseItem(轉蛋所需物品, 1);
                            npc.say("你獲得了 #b#t" + itemId + "##k " + quantity + "個。");
                        } else {
                            itemId = 2631487;
                            quantity = 1;
                            player.gainItem(itemId, quantity);
							player.gainItem(2630612,1)
                            player.loseItem(轉蛋所需物品, 1);
                            npc.say("究極捲次數已滿,你獲得了 #b#t" + itemId + "##k " + quantity + "個。");
                        }

                    } else {
                        chance = Math.floor(Math.random() * 10000);
                        finalitem = Array();
                        for (var i = 0; i < itemList.length; i++) {
                            if (itemList[i][1] >= chance) {
                                finalitem.push(itemList[i]);
                            }
                        }
                        if (finalitem.length != 0) {
                            var item;
                            random = new java.util.Random();
                            finalchance = random.nextInt(finalitem.length);
                            itemId = finalitem[finalchance][0];
                            quantity = finalitem[finalchance][2];
                            if (item != -1) {
                                player.gainItem(itemId, quantity);
                                //player.gainItem(2630612,1);
								player.gainItem(2630612,1)
                                player.loseItem(轉蛋所需物品, 1);
                                npc.say("你獲得了 #b#t" + itemId + "##k " + quantity + "個。");
                            } else {
                                npc.say("請你確認在背包的裝備，消耗，其他窗口中是否有一格以上的空間。");
                            }
           
                        }
                    }

                }
            }
            break;
    }
}
