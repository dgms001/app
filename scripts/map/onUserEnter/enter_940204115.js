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

player.spawnTempNpc(9400838, 197, -136);
player.setInGameCurNodeEventEnd(true);
player.setStandAloneMode(true);
player.setInGameDirectionMode(true, true, false, false);
npc.sayNextSNoEsc("阿瑯", false);
npc.sayNextNoEsc("是誰……？啊！", 9400838);
npc.sayNextSNoEsc("好久不見，雖然也許你已經忘了我是誰，單我來這裡有樣東西要還給你……", false);
npc.sayNextNoEsc("哇，好神奇啊！！！你，和我的守護精靈長得一模一樣！沒有耳朵和尾巴，眼睛也是一模一樣！", 9400838);
npc.sayNextSNoEsc("你在說什麼？守護精靈，你的守護精靈和我……", false);
npc.sayNextNoEsc("對呀，你想要看看我的守護精靈嗎？", 9400838);
//召喚 自己的模樣？？？
npc.sayNextSNoEsc("（是真的，阿瑯有了守護精靈，而且不知道是出于何種緣故，居然與我長得一模一樣？）", false);
npc.sayNextNoEsc("嘿嘿，我不分晝夜地向狐神大人祈禱，居然也有了自己的守護精靈！而且還要比其他人的守護精靈更帥！現在我也不會孤單了！", 9400838);
npc.sayNextNoEsc("對了你是從哪兒來的啊？為什麼會和我的守護精靈長得這麼像？嗯？", 9400838);

player.spawnTempNpc(3002108, 138, -136);
npc.sayNextNoEsc("阿瑯，有什麼事情嗎？", 3002108);
npc.sayNextNoEsc("爺爺！", 9400838);
npc.sayNextNoEsc("咳咳，我是聽著有點吵就過來看看，居然是有個奇怪的異邦人在！你找我們阿瑯做什麼！", 3002108);
npc.sayNextNoEsc("爺爺，他不是壞人，你看他和我的守護精靈長得一模一樣！", 9400838);
npc.sayNextNoEsc("天啊，是真的啊，我說你，這到底是怎麼回事？", 3002108);
npc.sayNextSNoEsc("我才真的很好奇呢，這到底是怎麼一回事？", false);
npc.sayNextNoEsc("嗯我可沒見過這種情況……", 3002108);
npc.sayNextNoEsc("難道……雖然那一直以來只是個傳說……", 3002108);
npc.sayNextNoEsc("大家都說狐貍的守護精靈會與自己內心深處非常思念的人相像，而且這種精靈的力量會勝過任何精靈的力量。", 3002108);
npc.sayNextNoEsc("不可能，爺爺，我見夠沒見過他，怎麼會思念他呢？", 9400838);
npc.sayNextNoEsc("我就是這個意思，阿瑯，你見過這個大個子嗎？應該叫大塊頭才對嘛……", 3002108);
npc.sayNextNoEsc("沒有啊！我第一次見！啊，話說回來，你來這裡是做什麼的啊！", 9400838);
npc.sayNextSNoEsc("我是來還從你這兒借走的守護精靈的……", false);
npc.sayNextNoEsc("嗯？這是什麼意思？我沒借過啊？而且我已經有了這麼帥氣的守護精靈了，我不需要其他的守護精靈。", 9400838);
npc.sayNextSNoEsc("……好吧。（不知為何，內心既溫暖又有些悲傷，看樣子是沒法繼續再待在這裡了。）", false);
player.setForcedInput(1);//左
npc.setDelay(400);
player.setForcedInput(2);//右
npc.setDelay(300);
player.setForcedInput(0);
npc.setDelay(50);
npc.sayNextNoEsc("等一下，你這就要走了嗎？至少要告訴我你的名字啊！", 9400838);
npc.sayNextSNoEsc("我的名字是你給我起的，阿瑯，以後我會讓你再記起來的。", false);
npc.sayNextNoEsc("嚶嚶……哪有這樣的道理！", 9400838);
npc.sayNextSNoEsc("多虧了你，我找到了今後要繼續前進的原因。", false);
npc.sayNextSNoEsc("我一定會找到方法，讓你記起我來的，你把我看得這麼重要，我也同樣很珍惜你。", false);
npc.sayNextSNoEsc("等我找到了方法，我會再來見你的，你能等到那一天嗎？", false);
npc.sayNextNoEsc("嗯……雖然我不知道你在說些什麼，不過幻影再來玩哦！", 9400838);
npc.sayNextSNoEsc("嗯，謝謝。（我也一直很思念阿瑯……我的守護精靈會不會也越來越像阿瑯了呢？）", false);
player.setForcedInput(1);
player.scriptProgressMessage("可以通過[精靈凝聚最大化]形成思念的阿瑯的模樣。");
player.completeQuest(1542, 0);
npc.setDelay(1000);
player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//回到源地圖
let [mapId, spawnPoint] = npc.resetRememberedMap("RETURN_MAP");
if (mapId == 999999999) { //warped to FM without having previous position saved
        mapId = 105000000; //Perion
        spawnPoint = 0; //market00 on Perion
}
player.changeMap(mapId, spawnPoint);

