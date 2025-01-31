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


//player.setMapTagedObjectVisible("chair02", 0);
//player.setMapTagedObjectVisible("chair03", 0);

npc.setDelay(300);

npc.setCameraFreeFromUser();
player.setForcedMove(2, 720);

npc.setCameraRelMove(0, 2500, 400, 0);
npc.setDelay(4500);

player.setLayerBlind(true, 255, 0, 0, 0, 500, 0);
npc.setDelay(500);

npc.setCameraScaleAbsMove(0, 0, 1000, 2000, -80, 120);
player.teleportToPos(3, player.getId(), new java.awt.Point(-270, 110));

player.setLayerBlind(true, 255, 0, 0, 0, 0, 0);
npc.setDelay(1200);

player.setLayerBlind(false, 0, 0, 0, 0, 1000, 0);
npc.setDelay(1400);
npc.setDelay(500);
npc.sayNextENoEsc("#b…?", true);

player.soundEffect("Sound/PL_Sound.img/myHome/wind");

player.setForcedMove(2, 250);
npc.sayNextENoEsc("#b難道是我走錯了？", true);

//player.showNpcEffectPlay(0, "Effect/OnUserEff.img/emotion/whatl", 0, 0, 0, true, 0, false, 0);
npc.setDelay(1500);
player.setForcedFlip(-1);
npc.setDelay(500);
player.setForcedMove(1, 10);
//player.showNpcEffectPlay(0, "Effect/OnUserEff.img/emotion/what", 0, 0, 0, true, 0, false, 0);
npc.setDelay(1500);

player.setLayerBlind(true, 200, 0, 0, 0, 1300, 0);
npc.setDelay(1600);

npc.setMonologue("非常#fs30#小巧#fs20#，有點#fs30#樸素#fs20#……", true);
npc.setMonologue("為了讓#fs20#新的主人的用回憶填滿這個地方，\r\n#fs30#家裡已經留下了#fs20#一些~#fs30#~空閑的地方。", true);

player.setLayerBlind(false, 0, 0, 0, 0, 1300, 0);
npc.setDelay(1600);

npc.sayNextENoEsc("#b…", true);

//player.showNpcEffectPlay(0, "Effect/OnUserEff.img/emotion/shade", 0, 0, 0, true, 0, false, 0);
npc.sayNextENoEsc("#b……我的50萬金幣！！！", true);

//player.showNpcEffectPlay(0, "Effect/OnUserEff.img/emotion/shade", 3000, 0, 0, true, 0, false, 0);
npc.setDelay(500);

player.setForcedMove(1, 50);
npc.setDelay(1000);

player.setForcedAction(29, 1000);
npc.setDelay(1000);

//player.setMapTagedObjectVisible("chair01", 0);
//player.setMapTagedObjectVisible("chair02", 1);
player.setMapTaggedObjectAnimation("chair02", 0);
player.soundEffect("Sound/PL_Sound.img/myHome/crash");

player.setForcedInput(4);
//player.showNpcEffectPlay(0, "Effect/OnUserEff.img/emotion/shade", 0, 0, 0, true, 0, false, 0);

//player.showSpeechBalloon(true, 0, 0, "...", 2000, 0, 0);
npc.sayNextENoEsc("#b…", true);



player.spawnTempNpc(9400929, -270, 100, 0);
player.setNpcSpecialAction(9400929, "summon", 0, false);

npc.setDelay(300);

player.setNpcForceMove(9400929, 1, 100, 100);
npc.setDelay(300);

//player.showNpcEffectPlay(9400929, "Effect/OnUserEff.img/emotion/oh", 0, 0, 0, true, 0, false, 0);
npc.setDelay(1000);

npc.sayNextENoEsc("#face3#嚇死我了，你是誰啊？ ", 9400921);

player.setForcedInput(0);
npc.setDelay(1000);

npc.sayNextENoEsc("#b嗯……我是剛搬過來的人。", true);
npc.sayNextENoEsc("#face3#搬家？嗯……我還以為這房屋沒有主人呢，看來不是啊。", 9400921);
npc.sayNextENoEsc("#face1#我是住在旁邊的人，叫艾爾賓。相見就是緣分，既然我們成了鄰居，那就好好相處吧。很高興見到你！", 9400921);
npc.sayNextENoEsc("#b我也很高興……雖然不知道這個房屋能不能住人，但是以後也請多多指教了。", true);
npc.sayNextENoEsc("#face2#嗯~~看起來很小巧，你一個人生活的話應該夠了啊？只要整理一下就好了！我會幫忙的，你不用擔心。", 9400921);
npc.sayNextENoEsc("#face1#首先把這個破椅子拿開吧。", 9400921);
npc.sayNextENoEsc("#face1#這個我來收拾，你把床搬到日照充足的地方去吧？", 9400921);

//player.setLayerOn(900, "0", 0, -80, 12, "Effect/DirectionWz2.img/effect/myHomeTuto/2", 4);
npc.sayNextENoEsc("#face1#點擊我的小屋菜單的#i3801392##t3801392#就能進入可以搬動家具的放置模式。", 9400921);
npc.sayNextENoEsc("#face1#在放置模式狀態中，點擊床後再點擊你想要放置的位置即可！", 9400921);
player.setLayerOff(300, "0");
npc.sayNextENoEsc("#face2#你要不要試試？將床放到你想要放的地方後再和我對話吧。", 9400921);

player.completeQuest(64591, 0);
player.startQuest(64592, 0);

player.updateQuestRecordEx(500767, "3", "1");
player.updateQuestRecordEx(500767, "managerXpos", "100");
player.updateQuestRecordEx(500767, "managerYpos", "100");
player.updateWorldShareRecord(500767, player.getQuestRecordEx(500767));
npc.setCameraScale(0, 0, 2000, 1000);
npc.setCameraReturnToUser(0, 0);


player.destroyTempNpc(9400929);

player.setInGameDirectionMode(false, true, false, false);


		player.createMyHome();//創建我的家
		player.goMyHome();//回家
// if (npc.makeEvent("myhome", false, player) == null) {
        // npc.sayNextE("#face0#發生未知錯誤！", 9400920);
// }
