/*
 * AuroMS MapleStory server emulator written in Java
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



function getStyleChoices(gender, currentHair) {
        let color = currentHair % 10;
        let styles;
        if (gender == 0)
                styles = [41140, 46040, 48040, 30310, 30330, 30060, 30150, 30410, 30210, 30140, 30120, 30200];
        else if (gender == 1)
                styles = [31050, 31040, 31000, 31150, 31310, 31300, 31160, 31100, 31410, 31030, 31080, 31070];
        for (let i = 0; i < styles.length; i++)
                if (npc.isHairValid(styles[i] + color)) //prefer current hair color
                        styles[i] += color;
        return styles;
}
let res;
let isAngel = false;
let isBeta = false;
if (player.getBeginner() == 6001) {
        isAngel = npc.askAngelicBuster() != 0;
} else if (player.getBeginner() == 10000) {
        isBeta = npc.askMenu("請選擇：\r\n#b#L0#神之子：阿爾法#l\r\n#L1#神之子：蓓塔#l") != 0;
}
let selection = npc.askMenu("我是美發店店長#b#p" + npc.getNpcId() + "##k,如果你有#b#t5150052##k或#b#t5151036##k，就來我這裡做個頭髮吧？請選擇你要做的項目。\r\n#b#L0#更換髮型（使用高級理發券）#l\r\n#L1#染色（使用高級染色卡）#l");
switch (selection) {
        case 0:
                hairs = getStyleChoices(isBeta ? 1 : player.getGender(), player.getHair());
                res = npc.askAvatar("我能把你現在的髮型變成全新的髮型。你對現在的髮型不厭倦嗎?只要你有#b#t5150052##k,我就幫你換髮型。慢慢挑選你想要的髮型吧~", hairs, 5150052, isAngel, isBeta);
                item = 5150052;
                take = true;
                styleChange = true;
                break;
        case 1:
                hairs = npc.getAllHairColors();
                res = npc.askAvatar("我能把你現在的頭髮換個顏色。你對現在的發色不厭倦嗎? 只要你有#b#t5151036##k,我就幫你染發。慢慢挑選你想要的發色吧！", hairs, 5151036, isAngel, isBeta);
                item = 5151036;
                take = true;
                styleChange = false;
                break;
}
selection = res[0];
let buy = res[1];

if (player.hasItem(item, 1)) {
        player.loseItem(item, 1);
        modify();
} else if (buy == 1) {
        if (player.getCashShopCurrency(2) >= 980) {
                player.modifyCashShopCurrency(2, -980);
                modify();
        } else {
                npc.sayNext("嗯……你的抵用券好像不夠哦，那我無法為你進行服務。");
        }
} else {
        npc.sayNext("呃……你好像沒有我們美發店的專用理發卡啊？很抱歉，沒有理發券的話，我不能給你做頭髮。");
}

function modify() {
        if (isAngel) {
                player.modifiedDressUp();
                player.setSubHair(hairs[selection]);
        } else if (isBeta) {
                player.setSubHair(hairs[selection]);
        } else {
                player.setHair(hairs[selection]);
        }
        player.zeroTag(isBeta);
        npc.sayNext("完成了,享受你的" + styleChange ? "新髮型吧!" : "新發色吧!");
}