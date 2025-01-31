var status = -1
var txt;
/*------------------------------------------------------------*/
var a1 = "#fItem/Cash/0501.img/05010057/effect/default/3#"; //撒花
var a2 = "#fItem/Cash/0501.img/05010143/effect/default/0#"; //皇冠左
var a3 = "#fItem/Cash/0501.img/05010143/effect/default/4#"; //皇冠右
var a4 = "#fItem/Cash/0501.img/05010150/effect/default/2#"; //嘲笑候
var a5 = "#fItem/Cash/0501.img/05010180/effect/default/0#"; //彩虹书
var a6 = "#fItem/Cash/0501.img/05010129/effect/default/0#"; //初音3
var a7 = "#fEffect/ItemEff.img/1005163/effect/default/0#" //中音符
var a8 = "#fEffect/ItemEff.img/1070069/effect/walk1/0#" //彩虹小云0-7
var a88 = "#fEffect/ItemEff.img/1070069/effect/walk1/4#" //彩虹小云0-7
var a888 = "#fEffect/ItemEff.img/1070069/effect/walk1/6#" //彩虹小云0-7
var a9 = "#fEffect/ItemEff.img/1073056/effect/walk1/0#" //好看的花0-7
var a10 = "#fEffect/ItemEff.img/1102420/effect/default/0#" //彩虹中星星0-5
var a11 = "#fEffect/ItemEff.img/1102919/effect/default/0#" //小黄鸭车0-7
var a12 = "#fEffect/ItemEff.img/1102930/effect/default/0#" //雨点彩虹0-15
var a112 = "#fEffect/ItemEff.img/1102930/effect/default/4#" //雨点彩虹0-15
var a122 = "#fEffect/ItemEff.img/1102930/effect/default/12#" //雨点彩虹0-15
var a1222 = "#fEffect/ItemEff.img/1102930/effect/default/13#" //雨点彩虹0-15
var a13 = "#fEffect/ItemEff.img/1102987/effect/default/0#" //卡片绿水蘑菇
var a14 = "#fEffect/ItemEff.img/1103035/effect/default/0#" //彩虹音符长
var a15 = "#fEffect/ItemEff.img/1103094/effect/default/0#" //长花
var a16 = "#fEffect/ItemEff.img/1103440/effect/default/0#" //石头怪
var a17 = "#fEffect/ItemEff.img/1112013/1/5#" //爱心5-9
var a18 = "#fEffect/ItemEff.img/1082692/effect/default/6#" //彩虹熊14-21
var a19 = "#fEffect/ItemEff.img/1053230/effect/default/2#" //爱心兔长
var a20 = "#fEffect/ItemEff.img/1005102/effect/default/3#" //粉色PB长3-5
var a21 = "#fEffect/ItemEff.img/1005103/effect/default/3#" //绿水灵长3-5
var a22 = "#fEffect/ItemEff.img/1103083/effect/default/0#" //中蝴蝶长3-5
var a23 = "#fEffect/ItemEff.img/1005254/effect/default/4#" //蓝色中小星星
var a25 = "#fEffect/ItemEff.img/1005353/effect/default/0#" //绿芽叶中小
var a26 = "#fEffect/ItemEff.img/1073379/effect/default/0#" //幽灵云长
var a27 = "#fEffect/ItemEff.img/1073435/effect/default/3#" //彩虹细云0-3
var a28 = "#fEffect/ItemEff.img/1005692/effect/default/7#" //彩虹星星爱心1005692-1005697
var a29 = "#fEffect/ItemEff.img/1073498/effect/default/7#" //彩虹爱心蝴蝶1073498-1073503
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a33 = "#fEffect/ItemEff.img/1005163/effect/default/0#" //中音符
var a34 = "#fItem/Cash/0501.img/05010056/effect/walk1/5#"; //小草
var a35 = "#fItem/Cash/0501.img/05010056/effect/walk1/6#"; //草
var a36 = "#fItem/Cash/0501.img/05010056/effect/walk1/7#"; //草

var c1 = "#fEffect/ItemEff.img/1005765/effect/default/0#" //小图标
var c2 = "#fEffect/ItemEff.img/1112001/0/0#" //小图标
var c3 = "#fEffect/ItemEff.img/1112002/0/0#" //小图标
var c4 = "#fEffect/ItemEff.img/1032328/effect/default/0#" //小图标
var c5 = "#fEffect/ItemEff.img/1032328/effect/backDefault/0#" //小图标
var c6 = "#fEffect/ItemEff.img/1032329/effect/default/0#" //小图标
var c7 = "#fEffect/ItemEff.img/1032329/effect/backDefault/0#" //小图标
var c8 = "#fEffect/ItemEff.img/1112006/0/1#" //小图标
var c9 = "#fEffect/ItemEff.img/1112806/0/0#" //小图标
var c10 = "#fEffect/ItemEff.img/1112807/0/0#" //小图标
var c11 = "#fEffect/ItemEff.img/1112809/0/0#" //小图标
var c12 = "#fEffect/ItemEff.img/1005799/effect/backDefault/0#" //小图标
var c13 = "#fEffect/ItemEff.img/1112024/0/5#" //小图标
var items = Array(
    Array(2430704, 99, 1, "AP成長+1"),//空值

    Array(4002000, 1, 5, "捲軸升級材料低"),//空值
    Array(4002001, 2, 5, "捲軸升級材料中"),//空值
    Array(4002002, 3, 5, "捲軸升級材料高"),//空值


    Array(80000565, 100, 1, 2, "攻擊力增加30", 5),
    Array(80000566, 300, 3, 4, "爆率概率增加45%", 5),
    Array(80000567, 600, 3, 4, "暴擊傷害增加24%", 5),
    Array(80000568, 600, 3, 4, "BOSS傷害增加45%", 5),
    Array(80000569, 600, 3, 4, "無視防禦率增加45%", 5),
    Array(80000570, 600, 3, 4, "BUFF持續時間增加45%", 5),
);

var itemsl = player.getPQLog("BOSS里程");
txt = "" + a8 + "  " + a888 + "" + a888 + "" + a888 + " " + a88 + "";

txt += "#r說明:#b多人組隊通關BOSS後傷害第一名獲取BOSS里程\r\n";

txt += "#r說明:#b當前擁有 [ #r" + itemsl + "#b ] 里程\r\n";
for (var i = 1; i <= 3; i++) {
    txt += "#L" + i + "##b#v" + items[i][0] + "##z" + items[i][0] + "# X" + items[i][2] + "#b  需要:#r" + items[i][1] + "里程#n\r\n";
}
for (var i = 4; i <= 9; i++) {

    txt += "#L" + i + "##b#s" + items[i][0] + "##b  需要:#r" + items[i][1] + "里程 介紹:[" + items[i][4] + "]#n\r\n";
}
let selection = npc.askMenuS(txt, true);
i = selection;

selection = npc.askNumber("#fs14##b購買道具為：#v" + items[i][0] + "# #z" + items[i][0] + "#\r\n\r\n#b請輸入購買個數：", 1, 1, 99);

if (i) {
    GS = selection;
    QSS = GS * items[i][1];
    if (itemsl < QSS) {
        npc.say("#b你並沒有足夠的BOSS里程");
    } else {
        if (items[i][5] == 5) {
            player.setSkillLevel(items[i][0], items[i][2], items[i][3], false);
            player.addPQLog("BOSS里程", -QSS, 3000);
            npc.say("#b購買成功1");
            player.runScript("里程商店");
        } else {
            if (!player.canGainItem(items[i][0], (items[i][2] * GS))) {
                npc.say("#b背包空間不足");
            }
            player.gainItem(items[i][0], items[i][2] * GS);
            player.addPQLog("BOSS里程", -QSS, 3000);
            npc.say("#b購買成功");
            player.runScript("里程商店");
        }
    }
}