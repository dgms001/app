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

/**
 *
 * @author dgms
 */


player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(true, false, false, false);
player.changeBGM("Bgm00.img/Silence");

player.spawnTempNpc(9400928, 3900, 115, 1);
player.setNpcSpecialAction(9400928, "summon", 0, false);
player.changeBGM("Bgm00/FloralLife");

npc.setCameraStickToUser();


player.setForcedMove(2, 230);
npc.setDelay(1000);

player.setNpcForceMove(9400928, -1, 100, 100);
npc.setDelay(2000);


npc.sayNextENoEsc("#face3#哎呀……你是看了宣傳單後來的嗎？真的？", 9400920);

player.setNpcForceFlip(9400928, 1);
npc.setDelay(300);

player.setNpcForceMove(9400928, 1, 150, 100);
npc.setDelay(1000);

npc.sayNextENoEsc("#face2#哎呀呀！別站著了，快點坐在這裡吧！", 9400920);
npc.setDelay(1000);

player.setForcedMove(2, 120);

npc.setCameraScaleRelMove(0, 1000, 1000, 2000, 150, 100);
npc.setDelay(1000);

player.setNpcForceFlip(9400928, -1);
npc.setDelay(300);

npc.sayNextENoEsc("#face2#雖然你已經看過宣傳單了，但你應該知道這不是什麼華麗的大宅子哦。它非常小巧，有點樸素但是非常溫馨~，真的是很舒適的家哦。", 9400920);
npc.sayNextENoEsc("#face1#請想象一下在結束了疲憊的一天後，躺在床上休息的樣子。遠處的鳥叫聲，從窗子外面吹來的微風。可以在其中舒舒服服地休息！這不就是幸福嗎！", 9400920);
npc.sayNextENoEsc("#face1#家是回憶的場所，為了能讓新的主人用回憶填滿這個地方，家裡已經留下了一些~空閑的地方。這樣的留白總是讓人激動呢。", 9400920);
let falg = true;
while (falg) {
        let sel = npc.askMenuANoEsc("#face2#這樣的房屋只要50萬金幣！怎麼樣？現在就馬上簽合同吧？\r\n#b#L0#我要簽合同。#l\r\n#L1#給我一點時間考慮一下。#l\r\n#L2#這個價格是不是太便宜了。#l\r\n#L3#你這話說的有點奇怪啊。#l", 9400920);
        switch (sel) {
                case 0:
                        falg = false;
                        npc.sayNextENoEsc("#face2#好的！請在這個合同上簽字吧！ ", 9400920);
                        break;
                case 1:
                        npc.sayNextENoEsc("#face2#這麼便宜的房子還要在考慮什麼？", 9400920);
                        break;
                case 2:
                        npc.sayNextENoEsc("#face2#太便宜了？你不會擔心這個是騙人的吧！這個絕對不騙人", 9400920);
                        break;
                case 3:
                        npc.sayNextENoEsc("#face2#怎麼會奇怪呢？你不想要的話，別人等著要呢！ ", 9400920);
                        break;
        }
}

player.setLayerBlind(true, 200, 0, 0, 0, 1300, 0);
npc.setDelay(1600);

npc.setMonologue("#fs30##e[蘑菇屋買賣合同]", false);
npc.setMonologue("#fs15#買賣雙方就以下標記的不動產按照下述內容結成買賣契約。", false);
npc.setMonologue("#fs20#\r\n所在地：楓之谷世界金銀島凱蘭西亞村蘑菇路1-1", false);
npc.setMonologue("#fs20#買賣金額：500,000 金幣", false);
var myDate = new Date();
var s = myDate.getFullYear() + "/" + appendZero(myDate.getMonth() + 1) + "/" + appendZero(myDate.getDate());
var sDate = s.substr(2);
npc.setMonologue("#fs20#簽約日期：" + sDate, false);
npc.setMonologue("#fs12#(絕對！絕對！禁止因為變心而退款！)", false);
npc.setMonologue("#fs15#\r\n賣方：艾米", false);
npc.setMonologue("#fs15#買方：#h0#", true);
player.setLayerBlind(true, 0, 0, 0, 0, 1000, 0);
npc.setDelay(1600);

if (player.gainItem(2630583, 1)) {
        npc.sayNextENoEsc("#face1#我給你能夠馬上前往家中的#i2630583:##t2630583#，使用它就能回到家裡！", 9400920);
} else {
        npc.sayNextENoEsc("#face1#啊，我本來打算給你能夠馬上前往家中的#i2630583:##t2630583#，但是背包裡似乎沒有空間了呢！", 9400920);
}
npc.sayNextENoEsc("#face2#請不要擔心，即使沒有#t2630583#，還有很多可以前往家中的方法！", 9400920);
player.showSystemMessage("不會出現實際的金幣支出和減少。");
//player.setLayerOn(900, "0", 0, -80, 12, "Effect/DirectionWz2.img/effect/myHomeTuto/0", 4);
npc.sayNextENoEsc("#face1#第一，點擊角色快捷欄的[前往我的小屋]按鍵後移動。", 9400920);
npc.sayNextENoEsc("#face1#第二，在我的角色信息欄中點擊[前往我的小屋]按鍵後移動。", 9400920);
player.setLayerOff(600, "0");
npc.sayNextENoEsc("#face1#我接下來還有事情，就不能和你一起去了……你應該能找到吧？", 9400920);

npc.sayNextENoEsc("#face3#那就請好好享受楓之谷生活吧！ 下次再見……#fs8#(別再見)……#fs12#了！", 9400920);

player.updateQuestRecordEx(64612, "housing", "4");
player.updateQuestRecordEx(64612, "furniture", "2");

player.completeQuest(500763, 0);
player.completeQuest(64590, 0);
player.startQuest(64591, 0);
player.updateQuestRecordEx(500767, "7", "1");
player.updateWorldShareRecord(500767, player.getQuestRecordEx(500767));
//房屋信息管理
player.updateQuestRecordEx(500773, "askR", "0");
player.updateQuestRecordEx(500773, "managerHide", "1");
player.updateQuestRecordEx(500773, "bonusTalk", "0");
player.updateQuestRecordEx(500773, "s5", "-45");
player.updateQuestRecordEx(500773, "resetDate", sDate);
player.updateQuestRecordEx(500773, "affDown", "19/12/31");
player.updateWorldShareRecord(500773, player.getQuestRecordEx(500773));

//房屋名稱
player.updateQuestRecordEx(500763, "name", player.getName());
player.updateWorldShareRecord(500763, player.getQuestRecordEx(500763));
player.createMyHome();
player.showSystemMessage("[我的小屋]入場方法");
player.showSystemMessage("1. 點擊角色快捷欄的[前往我的小屋]按鍵即可進入。");
player.showSystemMessage("2. 點擊我的角色信息欄的[前往我的小屋]按鍵即可進入。");
player.showSystemMessage("※ 完成所有的教程任務後，帳號內的所有角色都能使用[我的小屋]。");

player.destroyTempNpc(9400920);

player.setInGameDirectionMode(false, true, false, false);
let rMap = player.getIntQuestRecordEx(64590, "rMap");
player.changeMap(rMap, 0);


function appendZero(s) {
        return ("00" + s).substr((s + "").length);
}

