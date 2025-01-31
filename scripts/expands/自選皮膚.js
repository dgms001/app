/*
 * NeroMS MapleStory server emulator written in Java
 * Copyright (C) 2017-2018  dgms
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* global npc, player */

/**
 * Ms. Tan: Dermatologist (NPC 1012105)
 * Victoria Road: Henesys Skin-Care (Map 100000105)
 *
 * Henesys skin changer.
 *
 * @author dgms (content from Vana r3171)
 */
//var GC1 = "#fEffect/CharacterEff/1050312/0/0#";//最上面的亮粉
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
var d1 = "#fUI/UIWindow2.img/Arbeit/171#"//皮肤
var item = 2893001; //所需物品
let skinColorChoices = [
    1,
    2,
    3,
    4,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29];
//let skinColorChoices = npc.getAllSkinColors();
let isAngel = false;
let isBeta = false;

if (player.getBeginner() == 6001) {
    isAngel = npc.askAngelicBuster() != 0;
} else if (player.getBeginner() == 10000) {
    isBeta = npc.askMenu("請選擇：\r\n#b#L0#神之子：阿爾法#l\r\n#L1#神之子：蓓塔#l") != 0;
}
//npc.askMenuS("" + a8 + " " + a888 + "" + a888 + "" + a888 + " " + a88 + "\r\n\r\n#b請在下方輸入[#r代碼#b]即可更換\r\n\r\n\r\n\t\t\t\t#L0##fs11#" + d1 + "#l\r\n\r\n" + a8 + " " + a888 + "" + a888 + "" + a888 + " " + a88 + "", true);

let res = npc.askAvatar("#r#e請在楓點商店購買#v2893001#我就幫你換皮膚!\r\n#r#e#e請在楓點商店購買#v2893001#我就幫你換皮膚!!!!\r\n    #r#e", skinColorChoices, 2893001, isAngel, isBeta);
let selection = res[0];
let buy = res[1];

if (player.hasItem(item, 1)) {
    player.loseItem(2893001, 1);
    modify();
    npc.sayNext("#fs18##e#b更換成功!");
} else if (buy == 1) {
    if (player.getCashShopCurrency(2) >= 480) {
        player.modifyCashShopCurrency(2, -480);
        modify();
        npc.sayNext("#fs18##e#b更換成功!");
    } else {
        npc.sayNext("嗯……我無法為你進行服務。");
    }
} else {
	 npc.sayNext("呃……你好像沒有 #v" + item + "# 啊？很抱歉，沒有 #v" + item + "# 的話，我不能給你護理皮膚。");

}

function modify() {
    if (isAngel) {
        player.setSubSkin(skinColorChoices[selection]);
		player.modifiedDressUp();
    } else if (isBeta) {
        player.setSubSkin(skinColorChoices[selection]);
    } else {
        player.setSkin(skinColorChoices[selection]);
    }
    player.zeroTag(isBeta);
    //npc.sayNext("#fs18##e#b如果無套用,請更換頻道在檢查!");
}
