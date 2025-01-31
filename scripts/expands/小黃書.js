var status = -1
    var txt;
/*------------------------- 表情符號 -------------------------*/
var SR1 = "#fUI/SoulUI.img/DungeonEffect/2350012/2#"; //最上面的
var SR2 = "#fUI/SoulUI.img/DungeonEffect/2350012/4#"; //最上面的
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的
var SR4 = "#fUI/SoulUI.img/DungeonEffect/2350012/3#"; //最上面的
var SR5 = "#fEffect/EffectPL.img/Beautyroid/connect_end/0"; //區隔條
var SR6 = "#fEffect/EventEffect.img/typingDefense/balloonIcon/blind/0#"; //最上面的星星-6
var SR7 = "#fEffect/CharacterEff/1050334/1/2#"; //最上面的星星-7
var SR8 = "#fEffect/CharacterEff/1050334/1/3#"; //最上面的星星-8
var SR9 = "#fEffect/CharacterEff/1050334/2/0#"; //最上面的星星-9
var SR10 = "#fEffect/CharacterEff/1050334/2/1#"; //最上面的星星-10
var SR11 = "#fEffect/CharacterEff/1050334/2/2#"; //最上面的星星-11
var SR12 = "#fEffect/CharacterEff/1050334/2/3#"; //最上面的星星-12
var GC2 = "#fEffect/CharacterEff/1005267/4/0#"; //"+z+"//小選項用
var XD0 = "#fEffect/CharacterEff/1051366/0/0#";
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";

var p9 = "#fMap/MapHelper.img/weather/knitsWithWarmWinter/8#";
var zx50 = "#fMap/MapHelper.img/weather/lovelypartybear/7#";
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
var equipA = player.getInventorySlot(1, 1);
var equipB = player.getInventorySlot(1, 2);
/*
　1162083
1162082　
1162081　　
1162080*/
if (equipA == null || equipB == null) {
    npc.askMenuS("裝備欄第一/二格必須有裝備");
} else if (equipA.getDataId() != 1162083 && equipA.getDataId() != 1162082 && equipA.getDataId() != 1162081 && equipA.getDataId() != 1162080) {
    npc.askMenuS("裝備不符,第一格必須為魔導書");
} else {
    txt = "\t" + Icon[17][1] + "#fs20##fc0xFF00caf2##e小黃書開潛" + Icon[17][1] + "#r#n\r\n";
    txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
    +Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
    +Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
    +Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n";
    txt += "#fs12#材料如下:\r\n";
    txt += "#v4310100# 需要 [ #r 200 #b] 當前擁有:#c4310100#\r\n";
    txt += "#v4000541# 需要 [ #r 200 #b] 當前擁有:#c4000541#\r\n";
    txt += "#v4000540# 需要 [ #r 200 #b] 當前擁有:#c4000540#\r\n";
    txt += "#v4000539# 需要 [ #r 200 #b] 當前擁有:#c4000539#\r\n";
    txt += "#v4021032# 需要 [ #r 3000 #b] 當前擁有:#c4021032#\r\n";
    txt += "#fs12##r說明:\r\n";
    txt += "  第一格必須為主魔導書,第二格為任意顏色魔導書\r\n";
    txt += "  相同顏色的書概率+5%\r\n";
    txt += "  兩個無潛低概率合成有主/副潛[其一]\r\n";
    txt += "  一個主潛一個無潛中概率合成附加潛\r\n";
    txt += "  成功不扣除,失敗扣第二格的書\r\n";
    txt += "  當前合成任意潛能概率:" + gailv() + "%\r\n";
    if ((equipA.getDataId() != 1162083 && equipA.getDataId() != 1162082 && equipA.getDataId() != 1162081 && equipA.getDataId() != 1162080) || (equipB.getDataId() != 1162083 && equipB.getDataId() != 1162082 && equipB.getDataId() != 1162081 && equipB.getDataId() != 1162080)) {
        txt += "  #fs11#" + Icon[103][1] + "#b第一格第二格必須為魔導書才可以開啟潛能#l\r\n\r\n";
    } else {
        txt += "  #fs16##L1#" + Icon[103][1] + "#b禱告吧,潛能開#l\r\n\r\n";
        txt += "  #fs16##L2#" + Icon[103][1] + "#b開附加第三潛#l\r\n\r\n";
    }
    txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
    +Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
    +Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
    +Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n\r\n";
    txt += "";
}
let selection = npc.askMenuS(txt, true);

switch (selection) {
case 1:

    if (!player.hasItem(4310100, 200)) {
        npc.say("材料不足,請確認好材料是否滿足條件");
    } else if (!player.hasItem(4000541, 200)) {
        npc.say("材料不足,請確認好材料是否滿足條件");
    } else if (!player.hasItem(4000540, 200)) {
        npc.say("材料不足,請確認好材料是否滿足條件");
    } else if (!player.hasItem(4000539, 200)) {
        npc.say("材料不足,請確認好材料是否滿足條件");
    } else if (!player.hasItem(4021032, 3000)) {
        npc.say("材料不足,請確認好材料是否滿足條件");
    } else if (gailv() == 20 || gailv() == 25) {
        gailv1();
    } else if (gailv() == 30 || gailv() == 35) {
        gailv1();
    } else if (gailv() == 40 || gailv() == 45) {
        gailv1();
    }
    break;
case 2:
    var equipA = player.getInventorySlot(1, 1);
    if (equipA.getOption(1, true) != 0 && equipA.getOption(2, true) != 0) {
        var item = player.getInventorySlot(1, 1);
        item.setOption(3, 12019, true);
        player.updateItem(1, item);
		npc.say("成功拉,舒服了");
    } else {
        npc.say("當前裝備附加潛能1-2無潛能.你擱這裡想白嫖呢?");
    }
    break;
}

function gailv() {
    var SS;
    var equipA = player.getInventorySlot(1, 1);
    var equipB = player.getInventorySlot(1, 2);
    if (equipA.getDataId() == equipB.getDataId()) {
        SS = 5;
    } else {
        SS = 0;
    }
    var SSS;
    if (equipA.getGrade() == 0 && equipB.getGrade() == 0) {
        SSS = 20 + SS;
    } else if (equipA.getOption(1, true) == 0 && equipB.getOption(1, true) == 0) { //1有主無副
        SSS = 20 + SS;
    } else if (equipA.getOption(1, false) != 0 && equipB.getOption(1, true) == 0) { //1有主無副
        SSS = 30 + SS;
    } else if (equipA.getOption(1, false) == 0 && equipB.getOption(1, true) != 0) { //1有副無主
        SSS = 30 + SS;
    } else if (equipB.getOption(1, false) != 0 && equipA.getOption(1, true) == 0) { //2有主無副
        SSS = 30 + SS;
    } else if (equipB.getOption(1, false) == 0 && equipA.getOption(1, true) != 0) { //2有副無主
        SSS = 30 + SS;
    } else if (equipA.getOption(1, true) != 0 && equipB.getOption(1, false) != 0) { //12有副主
        SSS = 40 + SS;
    } else if (equipA.getOption(1, false) != 0 && equipB.getOption(1, true) != 0) { //21有副主
        SSS = 40 + SS;
    }
    return SSS;
}
function gailv1() {
    var GL = getMinAndMax(0, 100);
    var XZ = getMinAndMax(1, 2);
    var JZ = getMinAndMax(0, 10);
    if (GL <= gailv()) {
        var item = player.getInventorySlot(1, XZ);
        if (JZ <= 2) {
            item.setGrade(18);
            item.setOption(1, 20206, false);
            player.showTopScreenEffect("Map/Effect.img/Visitor/RankS"); //S
        } else {
            item.setOption(1, 12019, true);
            player.showTopScreenEffect("Map/Effect.img/Visitor/RankA"); //A
        }
        player.updateItem(XZ, item);
        player.loseItem(4310100, 200);
        player.loseItem(4000541, 200);
        player.loseItem(4000540, 200);
        player.loseItem(4000539, 200);
        player.loseItem(4021032, 3000);
        npc.say("恭喜你,成功獲得某一項潛能");
    } else {
        player.loseInvSlot(1, 2);
        player.loseItem(4310100, 200);
        player.loseItem(4000541, 200);
        player.loseItem(4000540, 200);
        player.loseItem(4000539, 200);
        player.loseItem(4021032, 3000);
        player.showTopScreenEffect("Map/Effect.img/crossHunter/bomb"); //BOOM
        npc.say("失敗,第二格裝備爆炸~");

    }
}
function getMinAndMax(minVal, maxVal) { //隨機 最大值 最小值
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}
