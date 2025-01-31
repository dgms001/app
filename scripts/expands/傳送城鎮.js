/* global npc, player, map */
/*------------------------- 表情符號 -------------------------*/
var a1 = "#fItem/Cash/0501.img/05010057/effect/default/3#"; //撒花
var a2 = "#fItem/Cash/0501.img/05010143/effect/default/0#"; //皇冠左
var a3 = "#fItem/Cash/0501.img/05010143/effect/default/4#"; //皇冠右
var a4 = "#fItem/Cash/0501.img/05010150/effect/default/2#"; //嘲笑候
var a5 = "#fItem/Cash/0501.img/05010180/effect/default/0#"; //彩虹书
var a6 = "#fItem/Cash/0501.img/05010129/effect/default/0#"; //初音3
var a7 = "#fEffect/ItemEff.img/1005163/effect/default/0#"//中音符
var a8 = "#fEffect/ItemEff.img/1070069/effect/walk1/0#"//彩虹小云0-7
var a88 = "#fEffect/ItemEff.img/1070069/effect/walk1/4#"//彩虹小云0-7
var a888 = "#fEffect/ItemEff.img/1070069/effect/walk1/6#"//彩虹小云0-7
var a9 = "#fEffect/ItemEff.img/1073056/effect/walk1/0#"//好看的花0-7
var a10 = "#fEffect/ItemEff.img/1102420/effect/default/0#"//彩虹中星星0-5
var a11 = "#fEffect/ItemEff.img/1102919/effect/default/0#"//小黄鸭车0-7
var a12 = "#fEffect/ItemEff.img/1102930/effect/default/0#"//雨点彩虹0-15
var a112 = "#fEffect/ItemEff.img/1102930/effect/default/4#"//雨点彩虹0-15
var a122 = "#fEffect/ItemEff.img/1102930/effect/default/12#"//雨点彩虹0-15
var a1222 = "#fEffect/ItemEff.img/1102930/effect/default/13#"//雨点彩虹0-15
var a13 = "#fEffect/ItemEff.img/1102987/effect/default/0#"//卡片绿水蘑菇
var a14 = "#fEffect/ItemEff.img/1103035/effect/default/0#"//彩虹音符长
var a15 = "#fEffect/ItemEff.img/1103094/effect/default/0#"//长花
var a16 = "#fEffect/ItemEff.img/1103440/effect/default/0#"//石头怪
var a17 = "#fEffect/ItemEff.img/1112013/1/5#"//爱心5-9
var a18 = "#fEffect/ItemEff.img/1082692/effect/default/6#"//彩虹熊14-21
var a19 = "#fEffect/ItemEff.img/1053230/effect/default/2#"//爱心兔长
var a20 = "#fEffect/ItemEff.img/1005102/effect/default/3#"//粉色PB长3-5
var a21 = "#fEffect/ItemEff.img/1005103/effect/default/3#"//绿水灵长3-5
var a22 = "#fEffect/ItemEff.img/1103083/effect/default/0#"//中蝴蝶长3-5
var a23 = "#fEffect/ItemEff.img/1005254/effect/default/4#"//蓝色中小星星
var a25 = "#fEffect/ItemEff.img/1005353/effect/default/0#"//绿芽叶中小
var a26 = "#fEffect/ItemEff.img/1073379/effect/default/0#"//幽灵云长
var a27 = "#fEffect/ItemEff.img/1073435/effect/default/3#"//彩虹细云0-3
var a28 = "#fEffect/ItemEff.img/1005692/effect/default/7#"//彩虹星星爱心1005692-1005697
var a29 = "#fEffect/ItemEff.img/1073498/effect/default/7#"//彩虹爱心蝴蝶1073498-1073503
var a30 = "#fEffect/CharacterEff/1022223/6/0#"//跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#"//跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#"//跑马灯
var a33 = "#fEffect/ItemEff.img/1005163/effect/default/0#"//中音符
var a34 = "#fItem/Cash/0501.img/05010056/effect/walk1/5#"; //小草
var a35 = "#fItem/Cash/0501.img/05010056/effect/walk1/6#";//草
var a36 = "#fItem/Cash/0501.img/05010056/effect/walk1/7#";//草

var c1 = "#fEffect/ItemEff.img/1005765/effect/default/0#"//小图标
var c2 = "#fEffect/ItemEff.img/1112001/0/0#"//小图标
var c3 = "#fEffect/ItemEff.img/1112002/0/0#"//小图标
var c4 = "#fEffect/ItemEff.img/1032328/effect/default/0#"//小图标
var c5 = "#fEffect/ItemEff.img/1032328/effect/backDefault/0#"//小图标
var c6 = "#fEffect/ItemEff.img/1032329/effect/default/0#"//小图标
var c7 = "#fEffect/ItemEff.img/1032329/effect/backDefault/0#"//小图标
var c8 = "#fEffect/ItemEff.img/1112006/0/1#"//小图标
var c9 = "#fEffect/ItemEff.img/1112806/0/0#"//小图标
var c10 = "#fEffect/ItemEff.img/1112807/0/0#"//小图标
var c11 = "#fEffect/ItemEff.img/1112809/0/0#"//小图标
var c12 = "#fEffect/ItemEff.img/1005799/effect/backDefault/0#"//小图标
var c13 = "#fEffect/ItemEff.img/1112024/0/5#"//小图标

let taxiMaps = [
    910000000,
    931000500,
    100000000,
    101000000,
    102000000,
    103000000,
    120000000,
    104000000,
    105000000,
    200000000,
    211000000,
    230000000,
    220000000,
    250000000,
    260000000,
    240000000,
    261000000,
    221000000,
    251000000,
    300000000,
    270000000,
    800000000,
    130000000,
    310000000,
    800040000,
    865000000,
    310070000,
    105300000,
    252000000,
    240090000,
    101050000,
    101072000,
    106030000,
    120040000,
    410000000,
    450001000,
    400000000,
    401000000,
    801000000,
    224000000,
    103041000,
    867118200,
    222100000,
    450003000,
    450005000,
    866000000,
    807000000,
    860000000,
    241000000,
    610050000,
    271010000,
    273000000,
    867116900];

//npc.sayNext("你好~!我是#p1012000#。你想快速又安全地移動到其他村莊嗎? 那麼就請使用令客戶百分百滿意的#b#p1012000##k吧。這次我給你免費優待!我將會送你去想去的地方。");

let prompt = "";
prompt += "#fs21##r#e請選擇你要接連的地方。#r";
for (let i = 0; i < taxiMaps.length; i++) {
    if (taxiMaps[i] != map.getId()) {
        prompt += "\r\n\r\n#fs16##r#e#L" + i + " # #e#b#m" + taxiMaps[i] + "##l";
    }
}
let mapIndex = npc.askMenuA(prompt);
let selection = npc.askYesNo("看樣子, 你好像已經沒有什麼事情需要在這裡做了。確定要移動到#b#m" + taxiMaps[mapIndex] + "##k村莊嗎?");
if (selection == 1) {
    player.changeMap(taxiMaps[mapIndex]);
} else if (selection == 0) {
    npc.say("如果你想移動到其他村莊, 請隨時使用我們的計程車~");
}

