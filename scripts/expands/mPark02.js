/*
 * AuroMS MapleStory server emulator written in Java
 * Copyright (C) 2018 dgms
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/* global npc, player, map */

var XC01 = "#fUI/NameTag.img/medal/175/w#"; // - BURNING(左)
var XC02 = "#fUI/NameTag.img/medal/175/c#"; // - BURNING(中)
var XC03 = "#fUI/NameTag.img/medal/175/e#"; // - BURNING(右)

let itemIdss = Array(//勳章
    Array(1142921, 1), //0 日
    Array(1142915, 1), //1 禮拜一
    Array(1142916, 1),
    Array(1142917, 1),
    Array(1142918, 1),
    Array(1142919, 1),
    Array(1142920, 1),);

date = new Date();
let BossName = "怪物公園";
let day = Array(0, 1, 2, 3, 4, 5, 6);
let name11 = Array("周日-廢棄的都市", "周一-死亡森林", "周二-城堡入口", "周三-龍之森林", "周四-悔恨之路", "周五-要塞入口", "周六-幽靈峽谷");
let maps = Array(954000000, 954010000, 954020000, 954030000, 954040000, 954050000, 954060000);
//let minLevel = Array(155, 165, 170, 175, 180, 185, 195);
//let maxLevel = Array(300, 175, 180, 185, 190, 195, 301);
let minLevel = Array(150, 150, 150, 150, 150, 150, 150);
let maxLevel = Array(300, 300, 300, 300, 300, 300, 300);
let minPlayers = 1;
let maxPlayers = 1; //6
let maxenter = 999; //7
var selStr = "\t\t\t#v3994016##v3994000##v3994006##v3994006##v3994010#  #v3994025##v3994000##v3994012##v3994001#\r\n";



selStr += "#fs16##e#r每日怪物公園次數無限制\r\n";
selStr += "#b每次完成獲得獎勵:#v4001714#5個,#v4032053#50個,#v4032216#100個,#v4310020#10個\\r\n";


for (let i = 0; i < maps.length; i++) {
    if (date.getDay() == day[i])
        selStr += "\t\t\t\t  #L" + i + "#" + name11[i] + "(" + minLevel[i] + "-" + maxLevel[i] + ")#l\r\n";
}
//selStr += "#r#L10#兌換#v1142922#勳章#l  #L12#強化#v1142922#勳章#l\r\n";

selStr += "#L22##s80000565#獲取挑戰：攻擊力/魔力#l    #L27#分身共享[1000萬楓點]#l\r\n";//#L16#軍官技能#l
selStr += "#L26##s80000566#獲取挑戰：爆擊機率#l       #L28#分身共享[1000萬楓點]#l\r\n";
selStr += "#L25##s80000568#獲取挑戰：Boss怪物傷害#l   #L30#分身共享[1000萬楓點]#l\r\n";
selStr += "#L24##s80000567#獲取挑戰：爆擊傷害#l       #L29#分身共享[1000萬楓點]#l\r\n";
selStr += "#L31##s80000570#獲取挑戰：加持持續時間#l   #L32#分身共享[1000萬楓點]#l\r\n";
selStr += "#L34##s80000616#獲取GLORY小隊力量#l #L16#技能強化#l #L33#分身共享[1000萬楓點]#l\r\n";
selStr += "#L35##s80000654#獲取挑戰：NEO力量#l   #L36#分身共享[1000萬楓點]#l\r\n";


//selStr += "\t\t\t  #L20#楓點共享[500W]#l #L21#樂豆共享[100]#l\r\n";

//#L20#獎勵說明#l #L11#分解勳章#l #L13#兌換勳章#l

if (player.isGm()) {
    selStr += "#bgm\r\n";
    selStr += "#L17#測試領獎#l\r\n";
}
let sel = npc.askMenuA(selStr, true); //9071004
switch (sel) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        if (party == null || player.getId() != party.getLeader()) {
            npc.sayNext("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.並且等級在" + minLevel[sel] + "~" + maxLevel[sel] + "范圍,\r\n那麼請讓你的組隊長和我對話吧!", 9071004);
        } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
            npc.sayNext("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.!", 9071004);
        } else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
            npc.sayNext("你隊員的等級要在#r" + minLevel[sel] + "~" + maxLevel[sel] + "#k范圍!請確認!", 9071004);
        } else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
            npc.sayNext("好像有隊員在其他地方，請把隊員都召集到這裡！", 9071004);
        } else if (!party.isAllMembersAllowedPQ("mPark", maxenter)) {
            npc.sayNext("你隊員#r#e" + party.getNotAllowedMember("mPark", maxenter) + "#n#k次數已經達到上限了。", 9071004);
        } else if (npc.makeEvent("mPark", false, [party, maps[sel], minLevel[sel]]) == null) {
            npc.sayNextS("#fs17##e#b已經有隊伍在進行了,請更換其他頻道嘗試。", true);
        }
        //npc.broadcastPlayerNotice(49, "【" + BossName + "】 " + player.getName() + "  開始攻略了！！");
        break;

    case 10:
        npc.sayS("#fs14##b#v1142921##z1142921##r持有 " + player.getAmountOfItem(1142921) + " 個\r\n#b#v1142915##z1142915##r持有 " + player.getAmountOfItem(1142915) + " 個\r\n#b#v1142916##z1142916##r持有 " + player.getAmountOfItem(1142916) + " 個\r\n#b#v1142917##z1142917##r持有 " + player.getAmountOfItem(1142917) + " 個\r\n#b#v1142918##z1142918##r持有 " + player.getAmountOfItem(1142918) + " 個\r\n#b#v1142919##z1142919##r持有 " + player.getAmountOfItem(1142919) + " 個\r\n#b#v1142920##z1142920##r持有 " + player.getAmountOfItem(1142920) + " 個\r\n\r\n#b當玩家集齊7種勳章時便可合成:\r\n#r#v1142922##z1142922#");
        if (player.hasItem(1142921, 1) < 1) {
            npc.sayS("#fs17##e#b玩家持有的#v1142921#不足");
        } else if (player.hasItem(1142915, 1) < 1) {
            npc.sayS("#fs17##e#b玩家持有的#v1142915#不足");
        } else if (player.hasItem(1142916, 1) < 1) {
            npc.sayS("#fs17##e#b玩家持有的#v1142916#不足");
        } else if (player.hasItem(1142917, 1) < 1) {
            npc.sayS("#fs17##e#b玩家持有的#v1142917#不足");
        } else if (player.hasItem(1142918, 1) < 1) {
            npc.sayS("#fs17##e#b玩家持有的#v1142918#不足");
        } else if (player.hasItem(1142919, 1) < 1) {
            npc.sayS("#fs17##e#b玩家持有的#v1142919#不足");
        } else if (player.hasItem(1142920, 1) < 1) {
            npc.sayS("#fs17##e#b玩家持有的#v1142920#不足");
        } else {
            player.loseItem(1142921, 1);
            player.loseItem(1142915, 1);
            player.loseItem(1142916, 1);
            player.loseItem(1142917, 1);
            player.loseItem(1142918, 1);
            player.loseItem(1142919, 1);
            player.loseItem(1142920, 1);

            player.gainItem(1142922, 1);
            npc.sayNextS("兌換#v1142922#成功", true);
        }
        break;

    case 11:
        player.runScript("分解怪物公園");
        break;
    case 12:
        player.runScript("怪物公園強化");
        break;
    case 13:
        player.runScript("怪物公園兌換");
        break;
    case 14:
        onoff = player.getEventValue("怪物公園勳章onoff");

        txt = "";
        txt += "完成怪物公園時是否取得勳章:" + ((onoff == 0) ? "#b開啟" : "#r關閉") + "\r\n\r\n";
        txt += "#L0##b開關按紐#l";

        let sel14 = npc.askMenu(txt, true); //9071004
        if (sel14 == 0) {
            if (onoff == 0) {
                player.addEventValue("怪物公園勳章onoff", 1, 1000); //關閉
                player.dropAlertNotice("已為你設置關閉"); //彈出窗口
            } else {
                player.addEventValue("怪物公園勳章onoff", -1, 1000); //開
                player.dropAlertNotice("已為你設置開啟");
            }
        }
        break;
    case 15:
        //player.addPQLog("怪物公園獎勵禮拜2",10,1000);
        day = Array(1, 2, 3, 4, 5, 6, 0);
        skill = Array(8000, 8001, 8002, 8003, 8004, 8005, 8006);
        txt = "禮拜一到日各別完成10場可學習技能\r\n";
        for (i = 0; i < day.length; i++) {
            txt += "#b禮拜" + day[i] + "，技能:#r#s" + skill[i] + "##q" + skill[i] + "#\r\n";
        }
        txt += "\r\n\t\t#fs20##b#e#L0#點我獲取#l\r\n\r\n";
        txt += "#n#fs12#";
        for (i = 0; i < day.length; i++) {
            onoff = player.getPQLog("怪物公園獎勵禮拜" + day[i]);
            txt += "#k禮拜" + day[i] + "已達成#r" + onoff + "#k次，";
            if ((i + 1) % 2 == 0) {
                txt += "\r\n";
            }
        }
        let sel15 = npc.askMenu(txt, true); //9071004
        if (sel15 == 0) {
            text = "恭喜獲得:";
            for (i = 0; i < day.length; i++) {
                onoff = player.getPQLog("怪物公園獎勵禮拜" + day[i]);
                if (player.getSkillLevel(skill[i]) == 1) {
                    //npc.say("123");
                    //這裡追加if job{獲得速度激發}
                } else if (onoff >= 10) {
                    Gift = (Math.floor(player.getJob() / 1000));
                    skillnew = Gift * 10000000;
                    skillnew += skill[i];
                    if (player.getJob() == 16200 || player.getJob() == 16210 || player.getJob() == 16211 || player.getJob() == 16212 || //拉拉
                        player.getJob() == 15500 || player.getJob() == 15510 || player.getJob() == 15511 || player.getJob() == 15512 || //亞克
                        player.getJob() == 2200 || player.getJob() == 2211 || player.getJob() == 2214 || player.getJob() == 2217 || //龍魔島
                        player.getJob() == 3101 || player.getJob() == 3120 || player.getJob() == 3121 || player.getJob() == 3122 || //惡復仇
                        player.getJob() == 3100 || player.getJob() == 3110 || player.getJob() == 3111 || player.getJob() == 3112 || //惡殺
                        player.getJob() == 6500 || player.getJob() == 6510 || player.getJob() == 6511 || player.getJob() == 6512 || //天破
                        player.getJob() == 4100 || player.getJob() == 4110 || player.getJob() == 4111 || player.getJob() == 4112 //劍豪
                    ) {
                        skillnew += 10000;
                    }
                    if (player.getJob() == 6300 || player.getJob() == 6310 || player.getJob() == 6311 || player.getJob() == 6312 || //凱因
                        player.getJob() == 2400 || player.getJob() == 2410 || player.getJob() == 2411 || player.getJob() == 2412 //幻影俠盜
                    ) {
                        skillnew += 30000;
                    }
                    if (player.getJob() == 15100 || player.getJob() == 15110 || player.getJob() == 15111 || player.getJob() == 15112 || //阿戴爾
                        player.getJob() == 6400 || player.getJob() == 6410 || player.getJob() == 6411 || player.getJob() == 6412 || //卡蒂娜
                        player.getJob() == 3600 || player.getJob() == 3610 || player.getJob() == 3611 || player.getJob() == 3612 || //捷諾
                        player.getJob() == 2300 || player.getJob() == 2310 || player.getJob() == 2311 || player.getJob() == 2312 || //精靈
                        player.getJob() == 4200 || player.getJob() == 4210 || player.getJob() == 4211 || player.getJob() == 4212 //陰陽
                    ) {
                        skillnew += 20000;
                    }
                    if (player.getJob() == 2700 || player.getJob() == 2710 || player.getJob() == 2711 || player.getJob() == 2712 //夜光
                    ) {
                        skillnew += 40000;
                    }
                    if (player.getJob() == 2500 || player.getJob() == 2510 || player.getJob() == 2511 || player.getJob() == 2512 //隱月
                    ) {
                        skillnew += 50000;
                    }
                    player.setSkillLevel(skillnew, 1, 1, false);
                    text += " 禮拜" + day[i] + " 技能:#s" + skill[i] + "##q" + skill[i] + "#\r\n";
                    player.addPQLog("怪物公園技能" + skill[i] + "", 1, 1000); //腳色是否領取
                }
            }
            npc.say(text);
        }
        break;
    case 16:
        //player.addPQLog("怪物公園獎勵禮拜2",10,1000);
        day = Array(1, 2, 3, 4, 5, 6, 0);
        skill = Array(80000612, 80000613, 80000614, 80000615, 80000616);
        //player.addPQLog("怪物公園獎勵禮拜1",100,1000);//紀錄
        con = 0;
        for (i = 0; i < day.length; i++) {
            con += player.getPQLog("怪物公園獎勵禮拜" + day[i]); //將log合計為con
        }
        txt = "\r\n";
        if (player.getSkillLevel(80000616) == 1) { //已是最高階技能 不在顯示選項
            txt += "#fs21##e#b#b你的角色已持有最高階#s" + skill[4] + "##q" + skill[4] + "#\r\n";
        }
        if (player.getSkillLevel(skill[0]) == 0 && player.getSkillLevel(skill[1]) == 0 && player.getSkillLevel(skill[2]) == 0 && player.getSkillLevel(skill[3]) == 0 && player.getSkillLevel(skill[4]) == 0) { //軍官技能全部為0 才可顯示取得最低階技能
            // txt += "\t#L0##fs21##e#b點我取得#s" + skill[0] + "##q" + skill[0] + "##l\r\n\r\n";
        }
        txt += "#fs21##e#b使用#r100#b個#b#v4310020##b強化技能\r\n\r\n";

        for (i = 0; i < 4; i++) { //自動陣列選項L(i+1)
            if (player.getSkillLevel(skill[i]) == 1 && player.getSkillLevel(skill[(i + 1)]) == 0) {
                //當技能skill[0]==1&&技能skill[1]==0
                txt += "\t\t\t#L" + [(i + 1)] + "##fs21##e#b#b強化技能階段#s" + skill[i] + "#獲得#s" + skill[(i + 1)] + "##l#fs16##e#b\r\n";
                //顯示L(1) 強化 +技能0+ 既能獲得更好屬性的 +技能1+
            }
        }


        //txt +="技能:#s"+skill[0]+"##q"+skill[0]+"#\r\n";
        //txt +="獲取的技能可以使用#b#v4310020##z4310020##k強化技能\r\n";
        txt += "#s" + skill[0] + "#第一階\r\n";
        txt += " 攻擊一般怪物時傷害+30%\r\n\r\n";
        txt += "#s" + skill[1] + "#第二階 \r\n";
        txt += " 攻擊一般怪物時傷害+30%";
        txt += " 增加全屬性100，最大HP5000\r\n\r\n";
        txt += "#s" + skill[2] + "#第三階 \r\n";
        txt += " 攻擊一般怪物時傷害+30%";
        txt += " 增加全屬性100，最大HP5000\r\n";
        txt += " 增加爆擊機率30%，增加攻擊力30、魔力30\r\n\r\n";
        txt += "#s" + skill[3] + "#第四階 \r\n";
        txt += " 攻擊一般怪物時傷害+30%";
        txt += " 增加全屬性100，最大HP5000\r\n";
        txt += " 增加爆擊機率30%，增加攻擊力30、魔力30\r\n";
        txt += " 攻擊BOSS怪物時傷害增加30% 增加怪物無視防禦率30%\r\n\r\n";
        txt += "#s" + skill[4] + "#第五階 \r\n";
        txt += " 攻擊一般怪物時傷害+30%";
        txt += " 增加全屬性100，最大HP5000\r\n";
        txt += " 增加爆擊機率30%，增加攻擊力30、魔力30\r\n";
        txt += " 攻擊BOSS怪物時傷害增加30% 增加怪物無視防禦率30%\r\n";
        txt += " 增加爆擊傷害10%\r\n\r\n";

        //txt += "為你統計該角色完成次數:#r" + con + "#k次#k\r\n";

        let sel16 = npc.askMenuA(txt, true); //9071004
        if (sel16 == 0) {
            if (!player.hasItem(4310020, 500)) {
                npc.say("材料不足。");
                text = "恭喜獲得:";
                player.setSkillLevel(skill[0], 1, 1, false);
                text += "技能:#s" + skill[0] + "##q" + skill[0] + "#\r\n";
                player.addPQLog("怪物公園技能" + skill[0] + "", 1, 1000); //紀錄
                player.loseItem(4310020, 500);
                npc.askMenuA("成功製作。");
            }
        }
        if (sel16 == 1 || sel16 == 2 || sel16 == 3 || sel16 == 4) {

            if (!player.hasItem(4310020, 100)) { //		!強化道具,數量
                npc.say("強化道具不足");
            } else {

                if (player.getPQLog("怪物公園技能" + skill[sel16] + "") >= 15) {
                    sendwin = Array(0, 1000, 1000, 1000, 1000); //		成功機率
                } else {
                    sendwin = Array(0, 350, 250, 150, 99); //		成功機率
                }
                player.loseItem(4310020, 100); //		消耗,數量
                send = Math.floor(Math.random() * 1000); //		骰
                if (send <= sendwin[sel16]) {
                    player.setSkillLevel(skill[(sel16 - 1)], 0, 1, false); //移除原有
                    player.setSkillLevel(skill[sel16], 1, 1, false); //獲取新技能
                    player.addPQLog("怪物公園技能" + skill[sel16] + "", 1, 1000); //紀錄
                    player.showSystemMessage("強化成功");
                } else {
                    player.addPQLog("怪物公園技能" + skill[sel16] + "", 1, 1000); //紀錄
                    player.showSystemMessage("失敗");

                }
            }

        }
        break;
    case 17:
        player.runScript("怪物公園獎勵");
        break;
    case 23:
        sel0 = "\r\n";

        sel0 += "#fs20##b#e【機率獎勵】#n\r\n\r\n#fs14##r95% #b強化道具\r\n#v4001523# 1個\r\n\r\n";
        sel0 += "#r5% #b勳章\r\n";

        for (let i = 0; i < itemIdss.length; i++) {
            sel0 += "#v" + itemIdss[i] + "# ";
        }

        sel0 += "\r\n\r\n#fs20##e#b【保底隨機出一項】#n\r\n#fs12#";
        sel0 += "周日 - #v2450175##v2450164##v5121104#\r\n";
        sel0 += "周一 - #v4001832##v4009454#\r\n";
        sel0 += "周二 - #v4000539##v4000540##v4000541##v4000850#\r\n";
        sel0 += "周三 - #v2631877#\r\n";
        sel0 += "周四 - #v2434638#\r\n";
        sel0 += "周五 - #v4001714##v2028048#\r\n";
        sel0 += "周六 - 上面全都有機會\r\n";
        //sel0 += "#L" + i + "#" + name11[i] + " - 獎勵查詢#l\r\n";

        let sel1 = npc.askMenuS(sel0, true);
        break;
    case 27:
        if (player.getCashShopCurrency(2) < 10000000) {
            npc.say("楓點不足");
        } else if (player.getEventValue("攻擊力") > 0) {
            npc.say("你已經永久共享過了,無需咋再次共享");
        } else if (player.getSkillLevel(80000565) == 0) {
            npc.say("當前未擁有技能");
        } else {
            player.modifyCashShopCurrency(2, -10000000);
            player.addEventValue("攻擊力", 1, 3000);
            npc.say("賬號永久共享");
        }

        break;
    case 28:
        if (player.getCashShopCurrency(2) < 10000000) {
            npc.say("楓點不足");
        } else if (player.getEventValue("爆擊機率") > 0) {
            npc.say("你已經永久共享過了,無需咋再次共享");
        } else if (player.getSkillLevel(80000566) == 0) {
            npc.say("當前未擁有技能");
        } else {
            player.modifyCashShopCurrency(2, -10000000);
            player.addEventValue("爆擊機率", 1, 3000);
            npc.say("賬號永久共享");
        }

        break;
    case 29:
        if (player.getCashShopCurrency(2) < 10000000) {
            npc.say("楓點不足");
        } else if (player.getEventValue("暴擊傷害") > 0) {
            npc.say("你已經永久共享過了,無需咋再次共享");
        } else if (player.getSkillLevel(80000567) == 0) {
            npc.say("當前未擁有技能");
        } else {
            player.modifyCashShopCurrency(2, -10000000);
            player.addEventValue("暴擊傷害", 1, 3000);
            npc.say("賬號永久共享");
        }

        break;
    case 30:
        if (player.getCashShopCurrency(2) < 10000000) {
            npc.say("楓點不足");
        } else if (player.getEventValue("無視傷害") > 0) {
            npc.say("你已經永久共享過了,無需咋再次共享");
        } else if (player.getSkillLevel(80000568) == 0) {
            npc.say("當前未擁有技能");
        } else {
            player.modifyCashShopCurrency(2, -10000000);
            player.addEventValue("無視傷害", 1, 3000);
            npc.say("賬號永久共享");
        }

        break;
    case 32:
        if (player.getCashShopCurrency(2) < 10000000) {
            npc.say("楓點不足");
        } else if (player.getEventValue("BUFF持續") > 0) {
            npc.say("你已經永久共享過了,無需咋再次共享");
        } else if (player.getSkillLevel(80000570) == 0) {
            npc.say("當前未擁有技能");
        } else {
            player.modifyCashShopCurrency(2, -10000000);
            player.addEventValue("BUFF持續", 1, 3000);
            npc.say("賬號永久共享");
        }

        break;
    case 33:
        if (player.getCashShopCurrency(2) < 10000000) {
            npc.say("楓點不足");
        } else if (player.getEventValue("軍需官技能") > 0) {
            npc.say("你已經永久共享過了,無需咋再次共享");
        } else if (player.getSkillLevel(80000616) == 0) {
            npc.say("當前未擁有技能");
        } else {
            player.modifyCashShopCurrency(2, -10000000);
            player.addEventValue("軍需官技能", 1, 3000);
            npc.say("賬號永久共享");
        }

        break;
    case 36:
        if (player.getCashShopCurrency(2) < 10000000) {
            npc.say("楓點不足");
        } else if (player.getEventValue("NEO力量轉移") > 0) {
            npc.say("你已經永久共享過了,無需咋再次共享");
        } else if (player.getSkillLevel(80000661) == 0) {
            npc.say("當前未擁有技能");
        } else {
            player.modifyCashShopCurrency(2, -10000000);
            player.addEventValue("NEO力量轉移", 1, 3000);
            npc.say("賬號永久共享");
        }

        break;
    case 22:
        player.runScript("挑戰攻擊");
        break;
    case 26:
        player.runScript("挑戰暴擊");
        break;
    case 24:
        player.runScript("挑戰爆傷");
        break;
    case 25:
        player.runScript("挑戰BOSS");
        break;
    case 31:
        player.runScript("挑戰加持");
        break;
    case 34:
        player.runScript("軍官");
        break;
    case 35:
        player.runScript("neo");
        break;

}
