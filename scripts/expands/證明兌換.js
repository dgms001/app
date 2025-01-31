var status = -1
var txt;
/*------------------------------------------------------------*/
var ltz45 = "#fMap/MapHelper.img/weather/starPlanet2/5#";
var ltz47 = "#fMap/MapHelper.img/weather/starPlanet/4#";

var itemid = 4032053;
var currentItemQuantity = player.getAmountOfItem(itemid);
var amount = currentItemQuantity;
var GC2 = "#fEffect/CharacterEff/1022223/2/0#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1112924/0/0#"; //"+z+"//小選項用
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var XD0 = "#fEffect/CharacterEff/1051366/0/0#";
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的
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
txt = "\t" + Icon[17][1] + "#fs20##fc0xFF00caf2##e證明兌換" + Icon[17][1] + "#r#n\r\n";
txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
    + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
    + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
    + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n";
txt += "#fs11##b";
txt += "\t  #L1#" + Icon[103][1] + "#v4001439# 換 【#z2048721#】#l\r\n";
txt += "\t  #L2#" + Icon[103][1] + "#v4031306# 換 【#z2438531#】#l\r\n";
txt += "\t  #L3#" + Icon[103][1] + "#v4031307# 換 【#z4310260#】#l\r\n";
/*
txt += "#b【深淵系列】:獲得#r#v##z4001439#*1\r\n";
    txt += "#b【航海系列】:獲得#r#v##z#*1\r\n";
    txt += "#b【神秘系列】:獲得#r#v##z#*1\r\n";
*/


txt += "\t\t\t\t#fs14##e#fc0xFF66CCCC##L10#返回選單#l\r\n\r\n";

txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
    + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
    + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
    + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n\r\n";
let selection = npc.askMenu(txt);

switch (selection) {
    case 1:
        var currentItemQuantity = player.getAmountOfItem(4001439);
        txt = "\r\n\t\t  #fs24##r#e【250防具星火交換】\r\n";
        txt += "#fs16##g#v4001439##z4001439#X50#b 換 #z2048721#X1\r\n\r\n";
        txt += "請輸入兌換的數量:";
        txt += "";
        var number = npc.askNumber(txt, 1, 1, currentItemQuantity / 50);
        if (!player.hasItem(4001439, number * 50)) {
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GMA00");
            npc.say("???????");
        } else {
            player.loseItem(4001439, number * 50);
            player.gainItem(2048721, number);
            npc.say("成功");
        }
        break;
    case 2:
        var currentItemQuantity = player.getAmountOfItem(4031306);
        txt = "\r\n\t\t  #fs24##r#e【坐騎箱交換】\r\n";
        txt += "#fs16##g#v4031306##z4031306#X50#b 換 #z2438531#X1\r\n\r\n";
        txt += "請輸入兌換的數量:";
        txt += "";
        var number = npc.askNumber(txt, 1, 1, currentItemQuantity / 50);
        if (!player.hasItem(4031306, number * 50)) {
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GMA01");
            npc.say("???????");
        } else {
            player.loseItem(4031306, number * 50);
            player.gainItem(2438531, number);
            npc.say("成功");
        }
        break;
    case 3:
        var currentItemQuantity = player.getAmountOfItem(4031307);
        txt = "\r\n\t\t  #fs24##r#e【證明交換】\r\n";
        txt += "#fs16##g#v4031307##z4031307#X50#b 換 #z4310260#X50\r\n\r\n";
        txt += "請輸入兌換的數量:";
        txt += "";
        var number = npc.askNumber(txt, 1, 1, currentItemQuantity / 50);
        if (!player.hasItem(4031307, number * 50)) {
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GMA02");
            npc.say("???????");
        } else {
            player.loseItem(4031307, number * 50);
            player.gainItem(4310260, number * 50);
            npc.say("成功");
        }
        break;

    case 10:
        player.runNpc("1013510");
        break;
}
