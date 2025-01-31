var aa = "#fMap/MapHelper.img/weather/starPlanet2/5#";
var selectionectedMap = -1;
var selectionectedArea = -1;
var a = 0;
var a3 = "#fEffect/ItemEff/1070069/effect/walk1/2#"
var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
var GC2 = "#fEffect/CharacterEff/1022223/2/0#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1112924/0/0#"; //"+z+"//小選項用
var SR1 = "#fEffect/CharacterEff/1050334/0/0#"; //最上面的星星-1
var SR2 = "#fEffect/CharacterEff/1050334/0/1#"; //最上面的星星-2
var SR3 = "#fEffect/CharacterEff/1050334/0/2#"; //最上面的星星-3
var SR4 = "#fEffect/CharacterEff/1050334/0/3#"; //最上面的星星-4
var SR5 = "#fEffect/CharacterEff/1050334/1/0#"; //最上面的星星-5
var SR6 = "#fEffect/CharacterEff/1050334/1/1#"; //最上面的星星-6
var SR7 = "#fEffect/CharacterEff/1050334/1/2#"; //最上面的星星-7
var SR8 = "#fEffect/CharacterEff/1050334/1/3#"; //最上面的星星-8
var SR9 = "#fUI/AllianceUI.img/AllianceUI/rowActive/0#"; //1234
var SR10 = "#fUI/AutoPvP.img/charSlot/element/flash/0#"; //12345
var STAR = "#fUI/UIWindow/ToolTip/WorldMap/StarForce#"; //星力需求
var ARC = "#fUI/UIWindow/ToolTip/WorldMap/ArcaneForce#"; //ARC需求
var AUT = "#fUI/UIWindow/ToolTip/WorldMap/AuthenticForce#"; //AUT需求
//var LV = "#fUI/UIWindow2/LevelUpGuide/lvNum/lv#"; //等級需求
var LV = "#fUI/UIWindowPL2/Familiar/@InfoWnd/level/Lv.#"; //等級需求
//var LV = "#fUI/UIGuild/guildMain/pages/normalCategory/categoryTitle/sub/level#"; //等級需求
var yellow = "#fc0xFFffd700#"; //黃色
var pink = "#fc0xFFff6781#"; //粉色
var green = "#fc0xFF7FFFAA#"; //綠色
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
var bosswarp = Array(//BOSS傳送
    //Array(0, "巴洛古#l  ", 50, 105100100, true, "巴洛谷進場"),
    Array(0, "巴洛古#l", 50, 105100100, true, "巴洛谷進場"),
    Array(1, "炎魔#l  ", 50, 211042401, true, "炎魔進場"),
    Array(2, "闇黑龍王#l", 130, 240050400, true, "闇黑龍王進場"),
    Array(22, "拉圖斯#l  ", 115, 220080000, true, "拉圖斯進場"),
    Array(8, "凡雷恩#l", 50, 211070000, true, "凡雷恩進場"),
    Array(3, "希拉#l  ", 120, 262030000, true, "希拉進場"),
    Array(11, "皮卡啾#l  ", 160, 270050000, true, "皮卡啾進場"),
    Array(12, "西格諾斯#l", 140, 271040000, true, "西格諾斯進場"),
    Array(9, "阿卡伊農#l", 50, 272030300, true, "阿卡伊農進場"),
    Array(17, "森蘭丸#l", 120, 807300100, true, "森蘭丸進場"),
    Array(21, "卡翁#l    ", 190, 863010000, true, "卡翁進場"),

    Array(4, "比艾樂#l", 125, 105200000, true, "比艾樂進場"),
    Array(5, "斑斑#l    ", 125, 105200000, true, "斑斑進場"),
    Array(6, "血腥女王#l", 125, 105200000, true, "血腥皇后進場"),
    Array(7, "貝倫#l    ", 125, 105200000, true, "貝倫進場"),
    Array(10, "梅格耐斯#l", 115, 401060000, true, "梅格耐斯進場"),
    Array(18, "濃姬#l    ", 140, 811000999, true, "濃姬進場"),

    Array(16, "培羅德#l  ", 180, 863010000, true, "培羅德進場"),
    Array(13, "史烏#l    ", 190, 350060300, true, "史烏進場"),
    Array(15, "戴米安#l  ", 190, 105300303, true, "戴米安進場"),
    Array(19, "露希妲#l  ", 220, 450003600, true, "露希妲進場"),

    Array(23, "威爾#l  ", 235, 450007240, true, "威爾進場"),
    Array(26, "戴斯克#l  ", 245, 450009301, true, "戴斯克進場"),
    Array(24, "真·希拉#l ", 250, 450011990, true, "真希拉進場"),
    Array(27, "頓凱爾#l  ", 255, 450012200, true, "頓凱爾進場"),
    Array(25, "黑魔法師#l", 255, 450012500, true, "黑魔法師進場"));
var txt = "#b";
txt += "\t" + Icon[17][1] + "#fs15##fc0xFF00caf2##e  初  階  " + Icon[17][1] + "#r#n\r\n";
txt += "#b#fs11##e";
txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
    + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
    + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
    + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n";
txt += "#L1##fUI/UIWindow2.img/UserList/Main/Boss/BossList/" + bosswarp[1][0] + "/Icon/" + (bosswarp[1][4] ? "normal" : "disabled") + "/0#" + bosswarp[1][1] + "#l  ";
txt += "#L2##fUI/UIWindow2.img/UserList/Main/Boss/BossList/" + bosswarp[2][0] + "/Icon/" + (bosswarp[2][4] ? "normal" : "disabled") + "/0#" + bosswarp[2][1] + "#l  ";
txt += "#L3##fUI/UIWindow2.img/UserList/Main/Boss/BossList/" + bosswarp[3][0] + "/Icon/" + (bosswarp[3][4] ? "normal" : "disabled") + "/0#" + bosswarp[3][1] + "#l\r\n";
txt += "#L4##fUI/UIWindow2.img/UserList/Main/Boss/BossList/" + bosswarp[4][0] + "/Icon/" + (bosswarp[4][4] ? "normal" : "disabled") + "/0#" + bosswarp[4][1] + "#l  ";
txt += "#L5##fUI/UIWindow2.img/UserList/Main/Boss/BossList/" + bosswarp[5][0] + "/Icon/" + (bosswarp[5][4] ? "normal" : "disabled") + "/0#" + bosswarp[5][1] + "#l  ";
txt += "#L6##fUI/UIWindow2.img/UserList/Main/Boss/BossList/" + bosswarp[6][0] + "/Icon/" + (bosswarp[6][4] ? "normal" : "disabled") + "/0#" + bosswarp[6][1] + "#l\r\n";
txt += "#L7##fUI/UIWindow2.img/UserList/Main/Boss/BossList/" + bosswarp[7][0] + "/Icon/" + (bosswarp[7][4] ? "normal" : "disabled") + "/0#" + bosswarp[7][1] + "#l ";
txt += "#L8##fUI/UIWindow2.img/UserList/Main/Boss/BossList/" + bosswarp[8][0] + "/Icon/" + (bosswarp[8][4] ? "normal" : "disabled") + "/0#" + bosswarp[8][1] + "#l ";
txt += "#L9##fUI/UIWindow2.img/UserList/Main/Boss/BossList/" + bosswarp[9][0] + "/Icon/" + (bosswarp[9][4] ? "normal" : "disabled") + "/0#" + bosswarp[9][1] + "#l\r\n\r\n";

txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
    + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
    + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
    + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n";
let selection = npc.askMenu(txt);
if (selection) {
    player.runScript(bosswarp[selection][5]);
}
