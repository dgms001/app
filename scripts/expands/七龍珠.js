//椅子 抽獎
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
var itemList = [//大獎

[4001551, 1],
[4001870, 1],
    [4001715, 1],
    [4001872, 1],
    [4001871, 1],
    [4001226, 1],
    [4001227, 1],
    [4001228, 1],
    [4001229, 1],
    [4001230, 1],
	[4001715, 2],
    [4001872, 2],
    [4001871, 2],
    [4001226, 2],
    [4001227, 2],
    [4001228, 2],
    [4001229, 2],
	[4001785, 2],
     [4001551, 2],
    [4001870, 2],
    [4001230, 1],
    [5060032, 10],
    [5060048, 10],
	[5060086, 5],
	[5060068, 2],
	[2633609, 1],
    [2635039, 5],
    [2635038, 3],
    [2635037, 2],
	[2635032, 1],
	
    [2049384, 1],	
	[2049385, 1],
	[2049386, 1],
	[2049387, 1],
	[2049388, 1],
	
	[2022531, 1],
	[2023721, 1],
	[2450158, 1],
	[2023380, 1],
	[2022531, 2],
	[2023721, 2],
	[2450158, 2],
	[2023380, 2],
	
	[5062020, 10],
	[5062017, 10],
    [5062019, 10],
    [5062026, 10],
    [5062503, 10],
    [5064400, 10],
	[5062500, 10],
	[5062009, 10],
	[5062010, 10],
	
	[5064502, 2],
	[2048721, 5],
	[2048760, 5],
	[2472000, 5],
	[2472000, 10],
	[4032216, 999],
	[4032053, 500],
	[4001785, 1],
	[2644006, 1],
	[2644007, 1],
	[2632486, 1],
    [4021019, 1]


];

let 轉蛋所需物品1 = 3994200;
let 轉蛋所需物品2 = 3994201;
let 轉蛋所需物品3 = 3994202;
let 轉蛋所需物品4 = 3994203;
let 轉蛋所需物品5 = 3994204;
let 轉蛋所需物品6 = 3994205;
let 轉蛋所需物品7 = 3994206;

txt = "#fs21##e#r你好,這裡是龍珠獎勵中心\r\n";

txt += "#fs16##b神龍只會在準點的0-10分出現,請快去找它領取龍珠吧\r\n";
txt += "\t\t\t\t\t\t#v" + 轉蛋所需物品1 + "#\r\n\r\n";
txt += "\t\t\t\t\t#v" + 轉蛋所需物品2 + "#     #v" + 轉蛋所需物品3 + "#\r\n\r\n";
txt += "\t\t\t  #v" + 轉蛋所需物品4 + "#    #v" + 轉蛋所需物品5 + "#   #v" + 轉蛋所需物品6 + "#    #v" + 轉蛋所需物品7 + "#\r\n";


txt += "\t\t\t#L0##fs21##e點我許願#l         #L1#願望單#l\r\n\r\n";

let selection = npc.askMenuA(txt);

switch (selection) {
    case 0:
        if (player.hasItem(轉蛋所需物品1, 1) < 1 || player.hasItem(轉蛋所需物品2, 1) < 1 || player.hasItem(轉蛋所需物品3, 1) < 1 || player.hasItem(轉蛋所需物品4, 1) < 1 || player.hasItem(轉蛋所需物品5, 1) < 1 || player.hasItem(轉蛋所需物品6, 1) < 1 || player.hasItem(轉蛋所需物品7, 1) < 1) {
            npc.say("#fs17##e#b玩家持有的物品不足");
        } else if (player.getFreeSlots(1) < 1 || player.getFreeSlots(2) < 1 || player.getFreeSlots(3) < 1 || player.getFreeSlots(4) < 1 || player.getFreeSlots(5) < 1 || player.getFreeSlots(6) < 1) {
            npc.say("#fs17##e#b身上背包空間不足1。");
        } else {
            var Jackpotchance = Math.floor(Math.random() * itemList.length);;
            player.gainItem(itemList[Jackpotchance][0], itemList[Jackpotchance][1]);
            //npc.broadcastPlayerNotice(37,"恭喜玩家 " + player.getName() + " 獲得椅子大獎");
            player.loseItem(轉蛋所需物品1, 1);
            player.loseItem(轉蛋所需物品2, 1);
            player.loseItem(轉蛋所需物品3, 1);
            player.loseItem(轉蛋所需物品4, 1);
            player.loseItem(轉蛋所需物品5, 1);
            player.loseItem(轉蛋所需物品6, 1);
            player.loseItem(轉蛋所需物品7, 1);
            npc.say("#fs17##e#b\t\t\t獲得#v" + itemList[Jackpotchance][0] + "# X " + itemList[Jackpotchance][1] + "");
        }
        break;
    case 1:
        txt = "";
        txt += "\t\t\t\t\t\t#fs28##r#e願望清單#fs16#";
        for (var i = 0; i <= itemList.length; i++) {
            if (i % 12 == 0) {
                txt += "\r\n\r\n";
            }
            txt += " #v" + itemList[i] + "##l"
        }
        let selection1 = npc.askMenuA(txt);
        break;
}
