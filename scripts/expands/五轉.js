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
 * V核心大師
 * NpcId 1540945
 * @author dgms
 */

var GC2 = "#fEffect/CharacterEff/1022223/2/0#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1112924/0/0#"; //"+z+"//小選項用
//var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var GC1 = "";
var XD0 = "#fEffect/CharacterEff/1051366/0/0#";
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的

var p9 = "#fMap/MapHelper.img/weather/knitsWithWarmWinter/8#";
var zx50 = "#fMap/MapHelper.img/weather/lovelypartybear/7#";
var qq1 = "#fUI/EventShop/adventureShop/GradeBuyer/0#"
    var qq2 = "#fUI/EventShop/adventureShop/GradeBuyer/1#"
    var qq3 = "#fUI/EventShop/adventureShop/GradeBuyer/2#"
    var qq4 = "#fUI/EventShop/adventureShop/GradeBuyer/3#"
    var qq5 = "#fUI/EventShop/adventureShop/GradeBuyer/4#"
    var qq6 = "#fUI/EventShop/adventureShop/GradeBuyer/5#"


if (player.isQuestCompleted(1465)) {
    //txt = ""+GC1+GC1+GC1+GC1+"\r\n";
    txt = "\t#fs20##fc0xFF00caf2##e前置任務解除#r#n\r\n";



    txt += "#fs16##e#b";

    //txt += "#L2##b解鎖#r神秘徽章#b後面3格裝備欄#l";
    /*txt += "" + (player.completeQuest(34100) ? "" : "#L5#"+GC1+"200解除-[消逝的旅途]#l\t\t\t\t\t\t\t\t\t\t") + "" + (player.completeQuest(37601) ? "" : "#L6#"+GC1+"205解除-[反轉城市]#l\t\t\t\t\t\t\t\t\t\t") + "" + (player.completeQuest(34200) ? "" : "#L7#"+GC1+"210解除-[啾啾艾爾蘭]#l\t\t\t\t\t\t\t\t\t\t") + "" + (player.completeQuest(37701) ? "" : "#L8#"+GC1+"215解除-[嚼嚼艾爾蘭]#l\t\t\t\t\t\t\t\t\t\t") + "" + (player.completeQuest(34300) ? "" : "#L9#"+GC1+"220解除-[拉契爾恩]#l\t\t\t\t\t\t\t\t\t\t") + "" + (player.completeQuest(34450) ? "" : "#L10#"+GC1+"225解除-[阿爾卡娜]#l\t\t\t\t\t\t\t\t\t\t") + "" + (player.completeQuest(34230) ? "" : "#L11#"+GC1+"230解除-[魔菈斯]#l\t\t\t\t\t\t\t\t\t\t") + "" + (player.completeQuest(34561) ? "" : "#L12#"+GC1+"235解除-[艾斯佩拉]#l\t\t\t\t\t\t\t\t\t\t") + "" + (player.completeQuest(37901) ? "" : "#L13#"+GC1+"240解除-[賽拉斯]#l\t\t\t\t\t\t\t\t\t\t") + "" + (player.completeQuest(35600) ? "" : "#L14#"+GC1+"245解除-[月之橋]#l\t\t\t\t\t\t\t\t\t\t") + "" + (player.completeQuest(35700) ? "" : "#L15#"+GC1+"250解除-[苦痛迷宮]#l\t\t\t\t\t\t\t\t\t\t") + "" + (player.completeQuest(35800) ? "" : "#L16#"+GC1+"255解除-[利曼]#l\t\t\t\t\t\t\t\t\t\t") + """;*/
    txt += "" + (player.isQuestCompleted(34100) ? "" : "#L11#" + GC1 + "200解除-[消逝的旅途]#l") + "";
    txt += "\r\n" + (player.isQuestCompleted(37601) ? "" : "#L12#" + GC1 + "等級達標#r 205 #b解除任務 - [反轉城市]#l") + "";
    txt += "\r\n" + (player.isQuestCompleted(34200) ? "" : "#L13#" + GC1 + "等級達標#r 210 #b解除任務 - [啾啾艾爾蘭]#l") + "";
    txt += "\r\n" + (player.isQuestCompleted(37701) ? "" : "#L14#" + GC1 + "等級達標#r 215 #b解除任務 - [嚼嚼艾爾蘭]#l") + "";
    txt += "\r\n" + (player.isQuestCompleted(34300) ? "" : "#L15#" + GC1 + "等級達標#r 220 #b解除任務 - [拉契爾恩]#l") + "";
    txt += "\r\n" + (player.isQuestCompleted(34450) ? "" : "#L16#" + GC1 + "等級達標#r 225 #b解除任務 - [阿爾卡娜]#l") + "";
    txt += "\r\n" + (player.isQuestCompleted(34230) ? "" : "#L17#" + GC1 + "等級達標#r 230 #b解除任務 - [魔菈斯]#l") + "";
    txt += "\r\n" + (player.isQuestCompleted(34561) ? "" : "#L18#" + GC1 + "等級達標#r 235 #b解除任務 - [艾斯佩拉]#l") + "";
    txt += "\r\n" + (player.isQuestCompleted(37901) ? "" : "#L19#" + GC1 + "等級達標#r 240 #b解除任務 - [賽拉斯]#l") + "";
    txt += "\r\n" + (player.isQuestCompleted(35600) ? "" : "#L20#" + GC1 + "等級達標#r 245 #b解除任務 - [月之橋]#l") + "";
    txt += "\r\n" + (player.isQuestCompleted(35700) ? "" : "#L21#" + GC1 + "等級達標#r 250 #b解除任務 - [苦痛迷宮]#l") + "";
    txt += "\r\n" + (player.isQuestCompleted(35800) ? "" : "#L22#" + GC1 + "等級達標#r 255 #b解除任務 - [利曼]#l") + "";
    txt += "\r\n" + (player.isQuestCompleted(35801) ? "" : "#L23#" + GC1 + "225ARC消失點我,否則別點#l") + "";

    txt += "" + (player.isGm() ? "\r\n\r\nGM才能看到\r\n#L3#設置#r核心碎片9999#b#l\r\n#L4#完成#r五轉#b#l" : "");
    txt += "";
    txt += "";

    let response = npc.askMenuA(txt, true);
    if (response == 0) {
        player.openUI(1131);
    } else if (response == 10087) {

        //購買碎片
        var needNX = 50; //多少點券=1碎片
        var number = npc.askNumber("#b#fs18##e#b楓葉點數*#r" + needNX + "#b= 核心碎片*#r1\r\n#d請輸入要購買的碎片數量\r\n", "1", 1, 99999);
        if (needNX * number > player.getCashShopCurrency(2)) {
            npc.askMenuA("楓葉點數不足", 3003307);
        } else {
            player.updateQuestRecordEx(1477, "count", player.getIntQuestRecordEx(1477, "count") + number);
            player.modifyCashShopCurrency(2,  - (needNX * number));
            npc.askMenuA("#b#fs18##e購買成功獲得 " + number + " 個核心碎片", 3003307);
        }
    } else if (response == 100) {

        player.runScript("改版一鍵轉職");

    } else if (response == 1) {
        if (player.getPQLog("FREE_VCORE") <= 0) {
            if (player.canGainItem(2435902, 5)) {
                player.addPQLog("FREE_VCORE");
                player.gainItem(2435902, 5);
                npc.askMenuA("恭喜您成功領取#r5#k個核心寶石，我們明天見。", 3003307);
            } else {
                npc.askMenuA("背包消耗欄空間不足！請清理！", 3003307);
            }
        } else {
            npc.askMenuA("你今天已經領取過核心寶石了。", 3003307);
        }
    } else if (response == 2) {
        if (player.isQuestCompleted(34478)) {
            npc.askMenuA("你已經增加過#r神秘徽章#b裝備欄了！", 3003307);
        } else {
            let anser = npc.askYesNo("#b增加#r神秘徽章#b裝備欄需要 5E楓幣。確認是否要開啟？");
            if (anser == 1) {
                if (player.hasMesos(500000000)) {
                    player.loseMesos(500000000);
                    player.completeQuest(34478, 0);
                    npc.askMenuA("#r神秘徽章#b裝備欄已增加！", 3003307);
                } else {
                    npc.askMenuA("您的金幣不足！", 3003307);
                }
            }
        }
    } else if (response == 3) {
        player.updateQuestRecordEx(1477, "count", "9999");
    } else if (response == 4) {
        player.completeQuest(1465, 0);
    } else if (response == 5) {
        player.runScript("戰地聯盟");
    } else if (response == 11) {
        if (player.isQuestCompleted(34100)) {
            npc.askMenuA("該角色已一鍵完成#r【消逝的旅途】相關前置任務");
        } else if (player.getLevel() <= 199) {
            npc.askMenuA("角色尚未達到200等");
        } else if (player.getPQLog("失去記憶的神官卡歐") == 0) {
            player.completeQuest(34100, 0);
            player.completeQuest(34100, 0);
            player.completeQuest(34101, 0);
            player.completeQuest(34102, 0);
            player.completeQuest(34103, 0);
            player.completeQuest(34104, 0);
            player.completeQuest(34105, 0);
            player.completeQuest(34106, 0);
            player.completeQuest(34107, 0);
            player.completeQuest(34108, 0);
            player.completeQuest(34109, 0);
            player.completeQuest(34110, 0);
            player.completeQuest(34111, 0);
            player.completeQuest(34112, 0);
            player.completeQuest(34113, 0);
            player.completeQuest(34114, 0);
            player.completeQuest(34115, 0);
            player.completeQuest(34116, 0);
            player.completeQuest(34117, 0);
            player.completeQuest(34118, 0);
            player.completeQuest(34119, 0);
            player.completeQuest(34120, 0);
            player.completeQuest(34164, 0);
            player.completeQuest(34165, 0);
            player.completeQuest(34166, 0);
            player.completeQuest(34167, 0);
            player.completeQuest(39364, 0);
            player.addPQLog("失去記憶的神官卡歐", 1, 1000);

        } else {
            npc.askMenuA("出現未知錯誤!請回報管理員!");
        }
    } else if (response == 12) {
        if (player.isQuestCompleted(37601)) {
            npc.askMenuA("該角色已一鍵完成#r【反轉城市】相關前置任務");
        } else if (player.getLevel() <= 204) {
            npc.askMenuA("角色尚未達到205等");
        } else if (player.getPQLog("順著河水流下來的物品") == 0) {
            player.completeQuest(37601, 0);
            player.completeQuest(37602, 0);
            player.completeQuest(37603, 0);
            player.completeQuest(37604, 0);
            player.completeQuest(37605, 0);
            player.completeQuest(37606, 0);
            player.completeQuest(37607, 0);
            player.completeQuest(37608, 0);
            player.completeQuest(37609, 0);
            player.completeQuest(37610, 0);
            player.completeQuest(37611, 0);
            player.completeQuest(37612, 0);
            player.completeQuest(37613, 0);
            player.completeQuest(37614, 0);
            player.completeQuest(37615, 0);
            player.completeQuest(37616, 0);
            player.completeQuest(37617, 0);
            player.completeQuest(37618, 0);
            player.completeQuest(37619, 0);
            player.completeQuest(37620, 0);
            player.addPQLog("順著河水流下來的物品", 1, 1000);

        } else {
            npc.askMenuA("出現未知錯誤!請回報管理員!");
        }
    } else if (response == 13) {
        if (player.isQuestCompleted(34200)) {
            npc.askMenuA("該角色已一鍵完成#r【啾啾艾爾蘭】相關前置任務");
        } else if (player.getLevel() <= 209) {
            npc.askMenuA("角色尚未達到210等");
        } else if (player.getPQLog("阻隔的奧術之河") == 0) {
            player.completeQuest(34200, 0);
            player.completeQuest(34201, 0);
            player.completeQuest(34202, 0);
            player.completeQuest(34203, 0);
            player.completeQuest(34204, 0);
            player.completeQuest(34205, 0);
            player.completeQuest(34206, 0);
            player.completeQuest(34207, 0);
            player.completeQuest(34208, 0);
            player.completeQuest(34209, 0);
            player.completeQuest(34210, 0);
            player.completeQuest(34211, 0);
            player.completeQuest(34212, 0);
            player.completeQuest(34213, 0);
            player.completeQuest(34214, 0);
            player.completeQuest(34215, 0);
            player.completeQuest(34216, 0);
            player.completeQuest(34217, 0);
            player.completeQuest(34218, 0);
            player.completeQuest(34227, 0);
            player.completeQuest(34228, 0);
            player.completeQuest(39365, 0);
            player.completeQuest(37702, 0);
            player.addPQLog("阻隔的奧術之河", 1, 1000);

        } else {
            npc.askMenuA("出現未知錯誤!請回報管理員!");
        }
    } else if (response == 14) {
        if (player.isQuestCompleted(37701)) {
            npc.askMenuA("該角色已一鍵完成#r【嚼嚼艾爾蘭】相關前置任務");
        } else if (player.getLevel() <= 214) {
            npc.askMenuA("角色尚未達到215等");
        } else if (player.getPQLog("來自啾啾村的口信") == 0) {
            player.completeQuest(37701, 0);
            player.completeQuest(37702, 0);
            player.completeQuest(37703, 0);
            player.completeQuest(37704, 0);
            player.completeQuest(37705, 0);
            player.completeQuest(37706, 0);
            player.completeQuest(37707, 0);
            player.completeQuest(37708, 0);
            player.completeQuest(37709, 0);
            player.completeQuest(37710, 0);
            player.completeQuest(37711, 0);
            player.completeQuest(37712, 0);
            player.completeQuest(37713, 0);
            player.completeQuest(37714, 0);
            player.completeQuest(37715, 0);
            player.completeQuest(37716, 0);
            player.completeQuest(37717, 0);
            player.completeQuest(37718, 0);
            player.completeQuest(37719, 0);
            player.completeQuest(37720, 0);
            player.completeQuest(37721, 0);
            player.completeQuest(37722, 0);
            player.completeQuest(37723, 0);
            player.completeQuest(37724, 0);
            player.completeQuest(37725, 0);
            player.completeQuest(37726, 0);
            player.addPQLog("來自啾啾村的口信", 1, 1000);

        } else {
            npc.askMenuA("出現未知錯誤!請回報管理員!");
        }
    } else if (response == 15) {
        if (player.isQuestCompleted(34300)) {
            npc.askMenuA("該角色已一鍵完成#r【拉契爾恩】相關前置任務");
        } else if (player.getLevel() <= 219) {
            npc.askMenuA("角色尚未達到220等");
        } else if (player.getPQLog("長期進行慶典的都市") == 0) {
            player.completeQuest(34300, 0);
            player.completeQuest(34301, 0);
            player.completeQuest(34302, 0);
            player.completeQuest(34303, 0);
            player.completeQuest(34304, 0);
            player.completeQuest(34305, 0);
            player.completeQuest(34306, 0);
            player.completeQuest(34307, 0);
            player.completeQuest(34308, 0);
            player.completeQuest(34309, 0);
            player.completeQuest(34310, 0);
            player.completeQuest(34311, 0);
            player.completeQuest(34312, 0);
            player.completeQuest(34313, 0);
            player.completeQuest(34314, 0);
            player.completeQuest(34315, 0);
            player.completeQuest(34316, 0);
            player.completeQuest(34317, 0);
            player.completeQuest(34318, 0);
            player.completeQuest(34319, 0);
            player.completeQuest(34320, 0);
            player.completeQuest(34321, 0);
            player.completeQuest(34322, 0);
            player.completeQuest(34323, 0);
            player.completeQuest(34324, 0);
            player.completeQuest(34325, 0);
            player.completeQuest(34326, 0);
            player.completeQuest(34327, 0);
            player.completeQuest(34328, 0);
            player.completeQuest(34329, 0);
            player.completeQuest(34330, 0);
            player.completeQuest(34331, 0);
            player.completeQuest(34333, 0);
            player.completeQuest(34334, 0);
            player.completeQuest(34335, 0);
            player.completeQuest(34336, 0);
            player.completeQuest(37006, 0);
            player.addPQLog("長期進行慶典的都市", 1, 1000);

        } else {
            npc.askMenuA("出現未知錯誤!請回報管理員!");
        }
    } else if (response == 16) {
        if (player.isQuestCompleted(34450)) {
            npc.askMenuA("該角色已一鍵完成#r【阿爾卡娜】相關前置任務");
        } else if (player.getLevel() <= 224) {
            npc.askMenuA("角色尚未達到225等");
        } else if (player.getPQLog("再見，惡夢的都市") == 0) {
            player.completeQuest(34450, 0);
            player.completeQuest(34451, 0);
            player.completeQuest(34452, 0);
            player.completeQuest(34453, 0);
            player.completeQuest(34454, 0);
            player.completeQuest(34455, 0);
            player.completeQuest(34456, 0);
            player.completeQuest(34457, 0);
            player.completeQuest(34458, 0);
            player.completeQuest(34459, 0);
            player.completeQuest(34460, 0);
            player.completeQuest(34461, 0);
            player.completeQuest(34462, 0);
            player.completeQuest(34463, 0);
            player.completeQuest(34464, 0);
            player.completeQuest(34465, 0);
            player.completeQuest(34466, 0);
            player.completeQuest(34467, 0);
            player.completeQuest(34468, 0);
            player.completeQuest(34469, 0);
            player.completeQuest(34470, 0);
            player.completeQuest(34471, 0);
            player.completeQuest(34472, 0);
            player.completeQuest(34473, 0);
            player.completeQuest(34474, 0);
            player.completeQuest(34475, 0);
            player.completeQuest(34476, 0);
            player.completeQuest(34477, 0);
            player.completeQuest(34478, 0);
            player.completeQuest(34491, 0);
            player.completeQuest(34492, 0);
            player.completeQuest(39368, 0);
            player.addPQLog("再見，惡夢的都市", 1, 1000);

        } else {
            npc.askMenuA("出現未知錯誤!請回報管理員!");
        }
    } else if (response == 17) {
        if (player.isQuestCompleted(34230)) {
            npc.askMenuA("該角色已一鍵完成#r【魔菈斯】相關前置任務");
        } else if (player.getLevel() <= 229) {
            npc.askMenuA("角色尚未達到230等");
        } else if (player.getPQLog("飛魚所傳達的話") == 0) {
            player.completeQuest(34230, 0);
            player.completeQuest(34231, 0);
            player.completeQuest(34232, 0);
            player.completeQuest(34233, 0);
            player.completeQuest(34234, 0);
            player.completeQuest(34235, 0);
            player.completeQuest(34236, 0);
            player.completeQuest(34237, 0);
            player.completeQuest(34238, 0);
            player.completeQuest(34239, 0);
            player.completeQuest(34240, 0);
            player.completeQuest(34241, 0);
            player.completeQuest(34242, 0);
            player.completeQuest(34243, 0);
            player.completeQuest(34244, 0);
            player.completeQuest(34249, 0);
            player.completeQuest(34250, 0);
            player.completeQuest(34251, 0);
            player.completeQuest(34252, 0);
            player.completeQuest(34253, 0);
            player.completeQuest(34254, 0);
            player.completeQuest(34255, 0);
            player.completeQuest(34256, 0);
            player.completeQuest(34257, 0);
            player.completeQuest(34258, 0);
            player.completeQuest(34259, 0);
            player.completeQuest(34260, 0);
            player.completeQuest(34261, 0);
            player.completeQuest(34262, 0);
            player.completeQuest(34263, 0);
            player.completeQuest(34264, 0);
            player.completeQuest(39265, 0);
            player.completeQuest(34266, 0);
            player.completeQuest(34267, 0);
            player.completeQuest(34268, 0);
            player.completeQuest(34269, 0);
            player.completeQuest(34272, 0);
            player.completeQuest(34595, 0);
            player.addPQLog("飛魚所傳達的話", 1, 1000);

        } else {
            npc.askMenuA("出現未知錯誤!請回報管理員!");
        }
    } else if (response == 18) {
        if (player.isQuestCompleted(34561)) {
            npc.askMenuA("該角色已一鍵完成#r【艾斯佩拉】相關前置任務");
        } else if (player.getLevel() <= 234) {
            npc.askMenuA("角色尚未達到235等");
        } else if (player.getPQLog("陌生人們") == 0) {
            player.completeQuest(34561, 0);
            player.completeQuest(34562, 0);
            player.completeQuest(34563, 0);
            player.completeQuest(34564, 0);
            player.completeQuest(34565, 0);
            player.completeQuest(34566, 0);
            player.completeQuest(34567, 0);
            player.completeQuest(34568, 0);
            player.completeQuest(34569, 0);
            player.completeQuest(34570, 0);
            player.completeQuest(34571, 0);
            player.completeQuest(34572, 0);
            player.completeQuest(34573, 0);
            player.completeQuest(34574, 0);
            player.completeQuest(34575, 0);
            player.completeQuest(34576, 0);
            player.completeQuest(34577, 0);
            player.completeQuest(34578, 0);
            player.completeQuest(34579, 0);
            player.completeQuest(34580, 0);
            player.completeQuest(34581, 0);
            player.completeQuest(34582, 0);
            player.completeQuest(34583, 0);
            player.completeQuest(34584, 0);
            player.completeQuest(34585, 0);
            player.completeQuest(34586, 0);
            player.completeQuest(34591, 0);
            player.completeQuest(34772, 0);
            player.completeQuest(35152, 0);
            player.completeQuest(35602, 0);
            player.addPQLog("陌生人們", 1, 1000);

        } else {
            npc.askMenuA("出現未知錯誤!請回報管理員!");
        }
    } else if (response == 19) {
        if (player.isQuestCompleted(37901)) {
            npc.askMenuA("該角色已一鍵完成#r【賽拉斯】相關前置任務");
        } else if (player.getLevel() <= 239) {
            npc.askMenuA("角色尚未達到240等");
        } else if (player.getPQLog("修理無線電的方法") == 0) {
            player.completeQuest(37901, 0);
            player.completeQuest(37902, 0);
            player.completeQuest(37903, 0);
            player.completeQuest(37904, 0);
            player.completeQuest(37905, 0);
            player.completeQuest(37906, 0);
            player.completeQuest(37907, 0);
            player.completeQuest(37908, 0);
            player.completeQuest(37909, 0);
            player.completeQuest(37910, 0);
            player.completeQuest(37911, 0);
            player.completeQuest(37912, 0);
            player.completeQuest(37913, 0);
            player.completeQuest(37914, 0);
            player.completeQuest(37915, 0);
            player.completeQuest(37916, 0);
            player.completeQuest(37917, 0);
            player.completeQuest(37918, 0);
            player.completeQuest(37919, 0);
            player.completeQuest(37920, 0);
            player.completeQuest(37921, 0);
            player.completeQuest(100651, 0);
            player.addPQLog("修理無線電的方法", 1, 1000);

        } else {
            npc.askMenuA("出現未知錯誤!請回報管理員!");
        }
    } else if (response == 20) {
        if (player.isQuestCompleted(35600)) {
            npc.askMenuA("該角色已一鍵完成#r【月之橋】相關前置任務");
        } else if (player.getLevel() <= 244) {
            npc.askMenuA("角色尚未達到245等");
        } else if (player.getPQLog("為了拯救世界") == 0) {
            player.completeQuest(35600, 0);
            player.completeQuest(35601, 0);
            player.completeQuest(35602, 0);
            player.completeQuest(35603, 0);
            player.completeQuest(35604, 0);
            player.completeQuest(35605, 0);
            player.completeQuest(35606, 0);
            player.completeQuest(35607, 0);
            player.completeQuest(35608, 0);
            player.completeQuest(35609, 0);
            player.completeQuest(35610, 0);
            player.completeQuest(35611, 0);
            player.completeQuest(35612, 0);
            player.completeQuest(35613, 0);
            player.completeQuest(35614, 0);
            player.completeQuest(35615, 0);
            player.completeQuest(35616, 0);
            player.completeQuest(35617, 0);
            player.completeQuest(35618, 0);
            player.completeQuest(35619, 0);
            player.completeQuest(35620, 0);
            player.completeQuest(35621, 0);
            player.completeQuest(35622, 0);
            player.completeQuest(35623, 0);
            player.completeQuest(35624, 0);
            player.completeQuest(35625, 0);
            player.completeQuest(35626, 0);
            player.completeQuest(35627, 0);
            player.completeQuest(35628, 0);
            player.completeQuest(35629, 0);
            player.completeQuest(35630, 0);
            player.completeQuest(35631, 0);
            player.completeQuest(35632, 0);
            player.completeQuest(35635, 0);
            player.addPQLog("為了拯救世界", 1, 1000);

        } else {
            npc.askMenuA("出現未知錯誤!請回報管理員!");
        }
    } else if (response == 21) {
        if (player.isQuestCompleted(35700)) {
            npc.askMenuA("該角色已一鍵完成#r【苦痛迷宮】相關前置任務");
        } else if (player.getLevel() <= 249) {
            npc.askMenuA("角色尚未達到250等");
        } else if (player.getPQLog("出征時刻") == 0) {
            player.completeQuest(35700, 0);
            player.completeQuest(35701, 0);
            player.completeQuest(35702, 0);
            player.completeQuest(35703, 0);
            player.completeQuest(35704, 0);
            player.completeQuest(35705, 0);
            player.completeQuest(35706, 0);
            player.completeQuest(35707, 0);
            player.completeQuest(35708, 0);
            player.completeQuest(35709, 0);
            player.completeQuest(35710, 0);
            player.completeQuest(35711, 0);
            player.completeQuest(35712, 0);
            player.completeQuest(35713, 0);
            player.completeQuest(35714, 0);
            player.completeQuest(35715, 0);
            player.completeQuest(35716, 0);
            player.completeQuest(35717, 0);
            player.completeQuest(35718, 0);
            player.completeQuest(35719, 0);
            player.completeQuest(35720, 0);
            player.completeQuest(35721, 0);
            player.completeQuest(35722, 0);
            player.completeQuest(35723, 0);
            player.completeQuest(35724, 0);
            player.completeQuest(35725, 0);
            player.completeQuest(35726, 0);
            player.completeQuest(35727, 0);
            player.completeQuest(35728, 0);
            player.completeQuest(35729, 0);
            player.completeQuest(35730, 0);
            player.completeQuest(35731, 0);
            player.completeQuest(35740, 0);
            player.completeQuest(35756, 0);
            player.addPQLog("出征時刻", 1, 1000);

        } else {
            npc.askMenuA("出現未知錯誤!請回報管理員!");
        }
    } else if (response == 22) {
        if (player.isQuestCompleted(35800)) {
            npc.askMenuA("該角色已一鍵完成#r【利曼】相關前置任務");
        } else if (player.getLevel() <= 254) {
            npc.askMenuA("角色尚未達到255等");
        } else if (player.getPQLog("前往黑魔法師所在之地") == 0) {
            player.completeQuest(35800, 0);
            player.completeQuest(35801, 0);
            player.completeQuest(35802, 0);
            player.completeQuest(35803, 0);
            player.completeQuest(35804, 0);
            player.completeQuest(35805, 0);
            player.completeQuest(35806, 0);
            player.completeQuest(35807, 0);
            player.completeQuest(35808, 0);
            player.completeQuest(35809, 0);
            player.completeQuest(35810, 0);
            player.completeQuest(35811, 0);
            player.completeQuest(35812, 0);
            player.completeQuest(35813, 0);
            player.completeQuest(35814, 0);
            player.completeQuest(35815, 0);
            player.completeQuest(35817, 0);
            player.addPQLog("前往黑魔法師所在之地", 1, 1000);

        } else {
            npc.askMenuA("出現未知錯誤!請回報管理員!");
        }
    } else if (response == 23) {
        if (player.getPQLog("ARC解鎖") >= 1) {
            npc.askMenuA("已經完成過了");
		 } else if (player.getLevel() <= 224) {
            npc.askMenuA("角色尚未達到225等");
        } else {
            player.completeQuest(37701, 0);
            player.completeQuest(37702, 0);
            player.completeQuest(37703, 0);
            player.completeQuest(37704, 0);
            player.completeQuest(37705, 0);
            player.completeQuest(37706, 0);
            player.completeQuest(37707, 0);
            player.completeQuest(37708, 0);
            player.completeQuest(37709, 0);
            player.completeQuest(37710, 0);
            player.completeQuest(37711, 0);
            player.completeQuest(37712, 0);
            player.completeQuest(37713, 0);
            player.completeQuest(37714, 0);
            player.completeQuest(37715, 0);
            player.completeQuest(37716, 0);
            player.completeQuest(37717, 0);
            player.completeQuest(37718, 0);
            player.completeQuest(37719, 0);
            player.completeQuest(37720, 0);
            player.completeQuest(37721, 0);
            player.completeQuest(37722, 0);
            player.completeQuest(37723, 0);
            player.completeQuest(37724, 0);
            player.completeQuest(37725, 0);
            player.completeQuest(37726, 0);
            player.completeQuest(34300, 0);
            player.completeQuest(34301, 0);
            player.completeQuest(34302, 0);
            player.completeQuest(34303, 0);
            player.completeQuest(34304, 0);
            player.completeQuest(34305, 0);
            player.completeQuest(34306, 0);
            player.completeQuest(34307, 0);
            player.completeQuest(34308, 0);
            player.completeQuest(34309, 0);
            player.completeQuest(34310, 0);
            player.completeQuest(34311, 0);
            player.completeQuest(34312, 0);
            player.completeQuest(34313, 0);
            player.completeQuest(34314, 0);
            player.completeQuest(34315, 0);
            player.completeQuest(34316, 0);
            player.completeQuest(34317, 0);
            player.completeQuest(34318, 0);
            player.completeQuest(34319, 0);
            player.completeQuest(34320, 0);
            player.completeQuest(34321, 0);
            player.completeQuest(34322, 0);
            player.completeQuest(34323, 0);
            player.completeQuest(34324, 0);
            player.completeQuest(34325, 0);
            player.completeQuest(34326, 0);
            player.completeQuest(34327, 0);
            player.completeQuest(34328, 0);
            player.completeQuest(34329, 0);
            player.completeQuest(34330, 0);
            player.completeQuest(34331, 0);
            player.completeQuest(34333, 0);
            player.completeQuest(34334, 0);
            player.completeQuest(34335, 0);
            player.completeQuest(34336, 0);
            player.completeQuest(37006, 0);
            player.completeQuest(34450, 0);
            player.completeQuest(34451, 0);
            player.completeQuest(34452, 0);
            player.completeQuest(34453, 0);
            player.completeQuest(34454, 0);
            player.completeQuest(34455, 0);
            player.completeQuest(34456, 0);
            player.completeQuest(34457, 0);
            player.completeQuest(34458, 0);
            player.completeQuest(34459, 0);
            player.completeQuest(34460, 0);
            player.completeQuest(34461, 0);
            player.completeQuest(34462, 0);
            player.completeQuest(34463, 0);
            player.completeQuest(34464, 0);
            player.completeQuest(34465, 0);
            player.completeQuest(34466, 0);
            player.completeQuest(34467, 0);
            player.completeQuest(34468, 0);
            player.completeQuest(34469, 0);
            player.completeQuest(34470, 0);
            player.completeQuest(34471, 0);
            player.completeQuest(34472, 0);
            player.completeQuest(34473, 0);
            player.completeQuest(34474, 0);
            player.completeQuest(34475, 0);
            player.completeQuest(34476, 0);
            player.completeQuest(34477, 0);
            player.completeQuest(34478, 0);
            player.completeQuest(34491, 0);
            player.completeQuest(34492, 0);
            player.completeQuest(39368, 0);
			player.addPQLog("ARC解鎖", 1, 1000);
        }
	}

    } else {
        if (player.getLevel() < 200) {
            npc.askMenuA("#d當你達到 #r200 #d級時再來找我吧！！", 3003307);
        } else {
            player.completeQuest(1465, 0);
            player.completeQuest(1484, 0);
            player.completeQuest(1466, 0);
            player.completeQuest(6500, 0);
            npc.askMenuA("#d恭喜你突破了自己的極限！\r\n現在#r我已讓你完成第五次轉職,加油吧，修煉者！", 3003307);
            player.runScript("改版五轉");
        }
    }
