var status = -1
var txt;
/*------------------------------------------------------------*/
var ltz45 = "#fMap/MapHelper.img/weather/starPlanet2/5#";
var ltz47 = "#fMap/MapHelper.img/weather/starPlanet/4#";
//var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
//var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用
//var GC2 = "#fEffect/ItemEff/1070069/effect/walk1/2#"
var zx24 = "#fMap/MapHelper.img/weather/nightMarket/5#";
var qq1 = "#fUI/EventShop/adventureShop/GradeBuyer/0#"
var qq2 = "#fUI/EventShop/adventureShop/GradeBuyer/1#"
var qq3 = "#fUI/EventShop/adventureShop/GradeBuyer/2#"
var qq4 = "#fUI/EventShop/adventureShop/GradeBuyer/3#"
var qq5 = "#fUI/EventShop/adventureShop/GradeBuyer/4#"
var qq6 = "#fUI/EventShop/adventureShop/GradeBuyer/5#"
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
var itemList = [
    // 物品id & 中獎概率越大越好出 & 數量1 & 0為不提示1提示 & 是否為大獎
    //小獎
    Array(4021032, 10000, 3, 0),//魔力結晶
    Array(4021032, 10000, 4, 0),
    Array(4021032, 10000, 5, 0),

    Array(1232057, 2000, 1, 0),
    Array(1312153, 2000, 1, 0),
    Array(1322203, 2000, 1, 0),
    Array(1302275, 2000, 1, 0),
    Array(1402196, 2000, 1, 0),
    Array(1412135, 2000, 1, 0),
    Array(1422140, 2000, 1, 0),
    Array(1432167, 2000, 1, 0),
    Array(1442223, 2000, 1, 0),
    Array(1582016, 2000, 1, 0),
    Array(1542063, 2000, 1, 0),
    Array(1213016, 2000, 1, 0),

    Array(1212063, 2000, 1, 0),
    Array(1262016, 2000, 1, 0),
    Array(1372177, 2000, 1, 0),
    Array(1382208, 2000, 1, 0),
    Array(1252015, 2000, 1, 0),
    Array(1552063, 2000, 1, 0),
    Array(1282015, 2000, 1, 0),

    Array(1452205, 2000, 1, 0),
    Array(1462193, 2000, 1, 0),
    Array(1522094, 2000, 1, 0),
    Array(1592018, 2000, 1, 0),
    Array(1214016, 2000, 1, 0),

    Array(1242060, 2000, 1, 0),
    Array(1332225, 2000, 1, 0),
    Array(1342082, 2000, 1, 0),
    Array(1362090, 2000, 1, 0),
    Array(1472214, 2000, 1, 0),
    Array(1292016, 2000, 1, 0),
    Array(1272015, 2000, 1, 0),

    Array(1222058, 2000, 1, 0),
    Array(1242061, 2000, 1, 0),
    Array(1482168, 2000, 1, 0),
    Array(1492179, 2000, 1, 0),
    Array(1532098, 2000, 1, 0),
    Array(1403016, 2000, 1, 0),


    Array(1003797, 2000, 1, 0),
    Array(1003798, 2000, 1, 0),
    Array(1003799, 2000, 1, 0),
    Array(1003800, 2000, 1, 0),
    Array(1003801, 2000, 1, 0),

    Array(1042254, 2000, 1, 0),
    Array(1042255, 2000, 1, 0),
    Array(1042256, 2000, 1, 0),
    Array(1042257, 2000, 1, 0),
    Array(1042258, 2000, 1, 0),

    Array(1062165, 2000, 1, 0),
    Array(1062166, 2000, 1, 0),
    Array(1062167, 2000, 1, 0),
    Array(1062168, 2000, 1, 0),
    Array(1062169, 2000, 1, 0),

    Array(1582017, 500, 1, 0),
    Array(1232109, 500, 1, 0),
    Array(1402251, 500, 1, 0),
    Array(1302333, 500, 1, 0),
    Array(1312199, 500, 1, 0),
    Array(1322250, 500, 1, 0),
    Array(1412177, 500, 1, 0),
    Array(1422184, 500, 1, 0),
    Array(1432214, 500, 1, 0),
    Array(1442268, 500, 1, 0),
    Array(1542108, 500, 1, 0),
    Array(1213017, 500, 1, 0),

    Array(1212115, 500, 1, 0),
    Array(1372222, 500, 1, 0),
    Array(1382259, 500, 1, 0),
    Array(1552110, 500, 1, 0),
    Array(1252093, 500, 1, 0),
    Array(1262017, 500, 1, 0),
    Array(1282016, 500, 1, 0),

    Array(1522138, 500, 1, 0),
    Array(1592019, 500, 1, 0),
    Array(1452252, 500, 1, 0),
    Array(1462239, 500, 1, 0),
    Array(1214017, 500, 1, 0),

    Array(1242116, 500, 1, 0),
    Array(1332274, 500, 1, 0),
    Array(1342101, 500, 1, 0),
    Array(1362135, 500, 1, 0),
    Array(1472261, 500, 1, 0),
    Array(1292017, 500, 1, 0),
    Array(1272016, 500, 1, 0),

    Array(1222109, 500, 1, 0),
    Array(1482216, 500, 1, 0),
    Array(1492231, 500, 1, 0),
    Array(1532144, 500, 1, 0),
    Array(1403017, 500, 1, 0),

    Array(1004422, 500, 1, 0),
    Array(1004423, 500, 1, 0),
    Array(1004424, 500, 1, 0),
    Array(1004425, 500, 1, 0),
    Array(1004426, 500, 1, 0),
    Array(1073030, 500, 1, 0),
    Array(1073032, 500, 1, 0),
    Array(1073033, 500, 1, 0),
    Array(1073034, 500, 1, 0),
    Array(1073035, 500, 1, 0),
    Array(1082636, 500, 1, 0),
    Array(1082637, 500, 1, 0),
    Array(1082638, 500, 1, 0),
    Array(1082639, 500, 1, 0),
    Array(1082640, 500, 1, 0),
    Array(1102775, 500, 1, 0),
    Array(1102794, 500, 1, 0),
    Array(1102795, 500, 1, 0),
    Array(1102796, 500, 1, 0),
    Array(1102797, 500, 1, 0),
    Array(1152174, 500, 1, 0),
    Array(1152176, 500, 1, 0),
    Array(1152177, 500, 1, 0),
    Array(1152178, 500, 1, 0),
    Array(1152179, 500, 1, 0),

];
var itemList1 = [


    Array(1232057, 2000, 1, 0),
    Array(1312153, 2000, 1, 0),
    Array(1322203, 2000, 1, 0),
    Array(1302275, 2000, 1, 0),
    Array(1402196, 2000, 1, 0),
    Array(1412135, 2000, 1, 0),
    Array(1422140, 2000, 1, 0),
    Array(1432167, 2000, 1, 0),
    Array(1442223, 2000, 1, 0),
    Array(1582016, 2000, 1, 0),
    Array(1542063, 2000, 1, 0),
    Array(1213016, 2000, 1, 0),

    Array(1212063, 2000, 1, 0),
    Array(1262016, 2000, 1, 0),
    Array(1372177, 2000, 1, 0),
    Array(1382208, 2000, 1, 0),
    Array(1252015, 2000, 1, 0),
    Array(1552063, 2000, 1, 0),
    Array(1282015, 2000, 1, 0),

    Array(1452205, 2000, 1, 0),
    Array(1462193, 2000, 1, 0),
    Array(1522094, 2000, 1, 0),
    Array(1592018, 2000, 1, 0),
    Array(1214016, 2000, 1, 0),

    Array(1242060, 2000, 1, 0),
    Array(1332225, 2000, 1, 0),
    Array(1342082, 2000, 1, 0),
    Array(1362090, 2000, 1, 0),
    Array(1472214, 2000, 1, 0),
    Array(1292016, 2000, 1, 0),
    Array(1272015, 2000, 1, 0),

    Array(1222058, 2000, 1, 0),
    Array(1242061, 2000, 1, 0),
    Array(1482168, 2000, 1, 0),
    Array(1492179, 2000, 1, 0),
    Array(1532098, 2000, 1, 0),
    Array(1403016, 2000, 1, 0),


    Array(1003797, 2000, 1, 0),
    Array(1003798, 2000, 1, 0),
    Array(1003799, 2000, 1, 0),
    Array(1003800, 2000, 1, 0),
    Array(1003801, 2000, 1, 0),

    Array(1042254, 2000, 1, 0),
    Array(1042255, 2000, 1, 0),
    Array(1042256, 2000, 1, 0),
    Array(1042257, 2000, 1, 0),
    Array(1042258, 2000, 1, 0),

    Array(1062165, 2000, 1, 0),
    Array(1062166, 2000, 1, 0),
    Array(1062167, 2000, 1, 0),
    Array(1062168, 2000, 1, 0),
    Array(1062169, 2000, 1, 0),

    Array(1582017, 500, 1, 0),
    Array(1232109, 500, 1, 0),
    Array(1402251, 500, 1, 0),
    Array(1302333, 500, 1, 0),
    Array(1312199, 500, 1, 0),
    Array(1322250, 500, 1, 0),
    Array(1412177, 500, 1, 0),
    Array(1422184, 500, 1, 0),
    Array(1432214, 500, 1, 0),
    Array(1442268, 500, 1, 0),
    Array(1542108, 500, 1, 0),
    Array(1213017, 500, 1, 0),

    Array(1212115, 500, 1, 0),
    Array(1372222, 500, 1, 0),
    Array(1382259, 500, 1, 0),
    Array(1552110, 500, 1, 0),
    Array(1252093, 500, 1, 0),
    Array(1262017, 500, 1, 0),
    Array(1282016, 500, 1, 0),

    Array(1522138, 500, 1, 0),
    Array(1592019, 500, 1, 0),
    Array(1452252, 500, 1, 0),
    Array(1462239, 500, 1, 0),
    Array(1214017, 500, 1, 0),

    Array(1242116, 500, 1, 0),
    Array(1332274, 500, 1, 0),
    Array(1342101, 500, 1, 0),
    Array(1362135, 500, 1, 0),
    Array(1472261, 500, 1, 0),
    Array(1292017, 500, 1, 0),
    Array(1272016, 500, 1, 0),

    Array(1222109, 500, 1, 0),
    Array(1482216, 500, 1, 0),
    Array(1492231, 500, 1, 0),
    Array(1532144, 500, 1, 0),
    Array(1403017, 500, 1, 0),

    Array(1004422, 500, 1, 0),
    Array(1004423, 500, 1, 0),
    Array(1004424, 500, 1, 0),
    Array(1004425, 500, 1, 0),
    Array(1004426, 500, 1, 0),
    Array(1073030, 500, 1, 0),
    Array(1073032, 500, 1, 0),
    Array(1073033, 500, 1, 0),
    Array(1073034, 500, 1, 0),
    Array(1073035, 500, 1, 0),
    Array(1082636, 500, 1, 0),
    Array(1082637, 500, 1, 0),
    Array(1082638, 500, 1, 0),
    Array(1082639, 500, 1, 0),
    Array(1082640, 500, 1, 0),
    Array(1102775, 500, 1, 0),
    Array(1102794, 500, 1, 0),
    Array(1102795, 500, 1, 0),
    Array(1102796, 500, 1, 0),
    Array(1102797, 500, 1, 0),
    Array(1152174, 500, 1, 0),
    Array(1152176, 500, 1, 0),
    Array(1152177, 500, 1, 0),
    Array(1152178, 500, 1, 0),
    Array(1152179, 500, 1, 0),

];
var Jackpot1 = [ //大獎第1期
    // 物品id , 中獎概率越大越好出 , 數量 , 0為不提示1提示 
    Array(1212120, 100, 1, 1),
    Array(1222113, 100, 1, 1),
    Array(1232113, 100, 1, 1),
    Array(1242121, 100, 1, 1),
    Array(1242122, 100, 1, 1),
    Array(1252098, 100, 1, 1),
    Array(1262039, 100, 1, 1),
    Array(1302343, 100, 1, 1),
    Array(1312203, 100, 1, 1),
    Array(1322255, 100, 1, 1),
    Array(1332279, 100, 1, 1),
    Array(1342104, 100, 1, 1),
    Array(1362140, 100, 1, 1),
    Array(1372228, 100, 1, 1),
    Array(1382265, 100, 1, 1),
    Array(1402259, 100, 1, 1),
    Array(1412181, 100, 1, 1),
    Array(1422189, 100, 1, 1),
    Array(1442274, 100, 1, 1),
    Array(1452257, 100, 1, 1),
    Array(1462243, 100, 1, 1),
    Array(1432218, 100, 1, 1),
    Array(1472265, 100, 1, 1),
    Array(1482221, 100, 1, 1),
    Array(1492235, 100, 1, 1),
    Array(1522143, 100, 1, 1),
    Array(1532150, 100, 1, 1),
    Array(1542117, 100, 1, 1),
    Array(1552119, 100, 1, 1),
    Array(1582023, 100, 1, 1),
    Array(1272017, 100, 1, 1),
    Array(1282017, 100, 1, 1),
    Array(1592020, 100, 1, 1),
    Array(1403018, 100, 1, 1),
    Array(1213018, 100, 1, 1),
    Array(1292018, 100, 1, 1),
    Array(1214018, 100, 1, 1),

    Array(1004808, 100, 1, 1),
    Array(1004809, 100, 1, 1),
    Array(1004810, 100, 1, 1),
    Array(1004811, 100, 1, 1),
    Array(1004812, 100, 1, 1),

    Array(1073158, 100, 1, 1),
    Array(1073159, 100, 1, 1),
    Array(1073160, 100, 1, 1),
    Array(1073161, 100, 1, 1),
    Array(1073162, 100, 1, 1),

    Array(1082695, 100, 1, 1),
    Array(1082696, 100, 1, 1),
    Array(1082697, 100, 1, 1),
    Array(1082698, 100, 1, 1),
    Array(1082699, 100, 1, 1),

    Array(1102940, 100, 1, 1),
    Array(1102941, 100, 1, 1),
    Array(1102942, 100, 1, 1),
    Array(1102943, 100, 1, 1),
    Array(1102944, 100, 1, 1),

    Array(1152197, 100, 1, 1),
    Array(1152198, 100, 1, 1),
    Array(1152199, 100, 1, 1),
    Array(1152200, 100, 1, 1),
    Array(1152196, 100, 1, 1),

];


轉蛋所需物品 = 5060028;
date = new Date();
let week = date.getDay();
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
var timeStamp = java.lang.System.currentTimeMillis();
var min = 3; //一分鐘 這裡自己改時間
var time = parseInt(min - (((timeStamp - parseInt(player.getQuestRecordEx(100000002))) / 1000)));
if (time > 0) {
    //player.showProgressMessageFont("你按太快了哦," + time + "秒後才能開啟!", 3, 30, 4, 10 * 1000);
} else {
    player.updateQuestRecordEx(100000002, timeStamp);

    //txt = "\r\n";
    //txt += "\t\t   #e#fs20##r#v"+轉蛋所需物品+"##z"+轉蛋所需物品+"#\r\n#n";
    //txt += ""+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+"\r\n";
    var itemsl = 5060028;
    txt = "\t" + Icon[17][1] + "#fs20##fc0xFF00caf2#潘朵拉轉蛋" + Icon[17][1] + "#r#n\r\n";
    txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
        + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
        + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
        + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n";
    txt += "";
    txt += "";

    txt += "#fs11##b";
    txt += "使用此台轉蛋機,會消耗1顆#v" + 轉蛋所需物品 + "#,\r\n";
    txt += "玩家請務必留意身上空間是否充足,\r\n";
    txt += "\t\t\t\t  持有#v" + itemsl + "#:[#r#c" + itemsl + "#個#b]\r\n";
    txt += "\t\t#L1#" + Icon[103][1] + "點我抽獎#l      #L3#" + Icon[103][1] + "查看內容物#l\r\n\r\n";

    txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
        + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
        + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
        + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n\r\n";
    let selection = npc.askMenu(txt, 9330114);

    switch (selection) {
        case 1:
            while (true) {
                var Jackpotchance = Math.floor(Math.random() * 10000);//獎池總機率
                if (player.hasItem(轉蛋所需物品, 1) < 1) {
                    npc.say("#fs17##e#b玩家持有的#v" + 轉蛋所需物品 + "#不足");
                } else if (player.getFreeSlots(1) < 1 || player.getFreeSlots(2) < 1 || player.getFreeSlots(3) < 1 || player.getFreeSlots(4) < 1 || player.getFreeSlots(5) < 1) {
                    npc.say("#fs17##e#b身上背包空間不足。");
                } else {
                    if (Jackpotchance <= 75) {//開啟轉蛋機 計算機率 並進入大獎獎池 1000=10%
                        if (true) { //第1期
                            var chance = Math.floor(Math.random() * 100);
                            var finalitem = Array();
                            for (var i = 0; i < Jackpot1.length; i++) {
                                if (Jackpot1[i][1] >= chance) {
                                    finalitem.push(Jackpot1[i]);
                                }
                            }
                            var random = new java.util.Random();
                            var finalchance = random.nextInt(finalitem.length);
                            var itemId = Jackpot1[finalchance][0];
                            var quantity = Jackpot1[finalchance][2];
                            if (finalitem.length != 0) {
                                player.gainItem(itemId, quantity);
                                //player.gainItem(2630612,1);
                                npc.broadcastPlayerNotice(37, "恭喜玩家 " + player.getName() + " 獲得潘朵拉箱子大獎");
                                npc.say("你獲得了 #b#t" + itemId + "##k " + quantity + "個。");
                            }
                        } else {
                            npc.broadcastNotice("出現異常，請通知管理員~!");
                        }
                        break;
                    } else {
                        var chance = Math.floor(Math.random() * 10000);
                        var finalitem = Array();
                        for (var i = 0; i < itemList.length; i++) {
                            if (itemList[i][1] >= chance) {
                                finalitem.push(itemList[i]);
                            }
                        }
                        if (finalitem.length != 0) {
                            var item;
                            var random = new java.util.Random();
                            var finalchance = random.nextInt(finalitem.length);
                            var itemId = finalitem[finalchance][0];
                            var quantity = finalitem[finalchance][2];
                            if (item != -1) {
                                player.gainItem(itemId, quantity);
                                player.loseItem(轉蛋所需物品, 1);
                                npc.say("你獲得了 #b#t" + itemId + "##k " + quantity + "個。");
                            } else {
                                npc.say("請你確認在背包的裝備，消耗，其他窗口中是否有一格以上的空間。");
                            }
                        } else {
                            player.loseItem(轉蛋所需物品, 1);
                            npc.say("今天的運氣太差了，什麼都沒有= =");
                        }
                    }
                }
            }
            break;

        case 2:
            var txt = "";
            txt += "#fs14##b大獎如下\r\n";
            //第七期
            for (var i = 0; i < Jackpot1.length; i++) {
                txt += "#i" + Jackpot1[i] + "#"
            }
            selection = npc.askMenu(txt, 9062459);
            break;
        case 3:
            var txt = "";
            txt += "#fs17##e#b內容物如下:\r\n";
            for (var i = 0; i < Jackpot1.length; i++) {
                txt += "#i" + Jackpot1[i] + "#"
            }
            for (var i = 0; i < itemList1.length; i++) {
                txt += "#i" + itemList1[i] + "#"
            }

            txt += "#v4021032#";
            selection = npc.askMenu(txt, 9062459);
            break;
    }
}