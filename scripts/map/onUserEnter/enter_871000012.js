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

player.spawnTempNpc(9400929, -830, 300, 0);
player.setNpcSpecialAction(9400929, "summon", 0, false);

player.spawnTempNpc(9400928, -350, 300, 0);
player.setNpcSpecialAction(9400928, "summon", 0, false);

player.spawnTempNpc(9400933, 70, 300, 0);
player.setNpcSpecialAction(9400933, "summon", 0, false);


player.spawnTempNpc(9400932, 500, 300, 0);
player.setNpcSpecialAction(9400932, "summon", 0, false);

player.setNpcSpecialAction(9400933, "special", 0, false);


player.spawnTempNpc(9400935, 1300, 300, 0);
player.setNpcSpecialAction(9400935, "summon", 0, false);

player.spawnTempNpc(9400936, 1300, 300, 0);
player.setNpcSpecialAction(9400936, "summon", 0, false);

npc.setCameraScaleAbsMove(0, 0, 1000, 600, -800, 150);


player.showTextEffect("#fs20#凱蘭西亞廣場", 2000, 6);
npc.setCameraRelMove(0, 5000, 1500, 0);

player.setLayerBlind(true, 255, 0, 0, 0, 0, 0);
npc.setDelay(1200);

player.setLayerBlind(false, 0, 0, 0, 0, 1000, 0);
npc.setDelay(1400);


npc.setDelay(4000);

player.setLayerBlind(true, 255, 0, 0, 0, 500, 0);
npc.setDelay(500);

player.setLayerBlind(false, 0, 0, 0, 0, 1000, 0);
npc.setCameraScaleAbsMove(0, 0, 500, 1000, 900, -450);


npc.setDelay(2000);


player.setLayerBlind(true, 255, 0, 0, 0, 500, 0);
npc.setDelay(500);
player.setLayerBlind(false, 0, 0, 0, 0, 1000, 0);

npc.setCameraAbsMove(0, 0, 800, 150);

npc.setDelay(2000);

player.setLayerBlind(true, 255, 0, 0, 0, 500, 0);
npc.setDelay(500);
player.setLayerBlind(false, 0, 0, 0, 0, 1000, 0);
npc.setCameraAbsMove(0, 0, -290, 150);
npc.setDelay(2000);

npc.setCameraScaleAbsMove(0, 0, 1000, 2000, -330, 320);
npc.setDelay(500);


//player.showPlayerEffectPlay("Effect/OnUserEff.img/emotion/oh", 0, 0, 0, true, 0, false, 0);
npc.setDelay(500);


npc.sayNextENoEsc("#b!!!", true);
npc.setCameraRelMove(0, 0, -300, 0);

npc.sayNextENoEsc("#b等，等一下？！", true);

player.setForcedMove(2, 400);
npc.setDelay(500);

npc.setCameraRelMove(0, 2000, 300, 0);

player.setNpcForceFlip(9400928, -1);


////player.showNpcEffectPlay(9400928, "Effect/OnUserEff.img/emotion/whatl", 0, 0, 0, true, 0, false, 0);

npc.setDelay(1500);
//player.showNpcEffectPlay(9400928, "Effect/OnUserEff.img/emotion/oh", 0, 0, 0, true, 0, false, 0);

npc.setDelay(1000);

player.setNpcForceFlip(9400928, 1);
npc.setDelay(500);

player.setNpcForceMove(9400928, 1, 100, 100);

npc.sayNextENoEsc("#b哎，哎！我們來聊一下！", true);

npc.sayNextENoEsc("#face3#你……你干嘛呀！怎麼了？！", 9400920);

player.setNpcForceFlip(9400928, -1);
npc.setDelay(500);

player.setNpcForceFlip(9400928, 1);
npc.setDelay(500);

player.setNpcForceMove(9400928, 1, 50, 100);

player.setForcedMove(2, 170);
npc.setCameraRelMove(0, 2000, 150, 0);
npc.setDelay(2000);
npc.sayNextENoEsc("#b抓住了！", true);

player.setNpcForceFlip(9400928, -1);
npc.sayNextENoEsc("#face3#哼，哼。怎麼了？", 9400920);

npc.sayNextENoEsc("#b你還記得我吧？\r\n這房屋和宣傳單上的也太不一樣了！", true);

player.destroyTempNpc(9400929);

player.spawnTempNpc(9400929, -550, 300, 0);
player.setNpcSpecialAction(9400929, "summon", 0, false);
npc.setDelay(300);

player.setNpcForceMove(9400929, 1, 250, 100);

npc.sayNextENoEsc("#face3#雖然照片裡看起來有點~大……但我不是說過了是個小巧樸素的家嘛！ ", 9400920);
npc.setDelay(1000);

npc.sayNextENoEsc("#face3#艾米……？把房屋賣給#h0#的人是艾米？", 9400921);
//player.showNpcEffectPlay(9400928, "Effect/OnUserEff.img/emotion/ddam", 0, 0, 0, true, 0, false, 0);
npc.sayNextENoEsc("#face3#哥……哥哥？！哥哥你怎麼在這裡！？", 9400920);

npc.sayNextENoEsc("#b你們倆認識？", true);
npc.sayNextENoEsc("#face3#這是我雙胞胎妹妹。", 9400921);
npc.sayNextENoEsc("#face4#等一下，艾米！那根本不是我們的房子，你怎麼能賣給其他人呢？", 9400921);
npc.sayNextENoEsc("#face4#是我的房子！我買下來的！", 9400920);
npc.sayNextENoEsc("#face4#你哪裡來的房屋……", 9400921);
npc.sayNextENoEsc("#face4#之前買了這房屋的姐姐以5萬金幣的價格私下轉手賣給了我呢！", 9400920);
npc.sayNextENoEsc("#b5萬金幣……？5萬金幣買進然後50萬金幣賣出嗎？", true);
npc.sayNextENoEsc("#face4#你這人看來不明白啊！不動產投資本來就是這樣的！", 9400920);
npc.sayNextENoEsc("#face3#艾米……我可不是這麼養育你的啊……", 9400921);
npc.sayNextENoEsc("#face4#等一下，哥哥你又在說什麼啊！我是自己長大的，可不是哥哥養我長大的哦？啊，又來了！別做出這種悲傷的表情啊！", 9400920);
npc.sayNextENoEsc("#face4#艾米……把錢還給人家。", 9400921);
npc.sayNextENoEsc("#face4#…", 9400920);
npc.sayNextENoEsc("#face4#…", 9400921);
npc.sayNextENoEsc("#b…", true);
npc.sayNextENoEsc("#face3#等一下，這可是正當交易啊~！還寫了合同呢！", 9400920);
npc.sayNextENoEsc("#face4#但是……哥哥我還是覺得應該把差額還給人家。", 9400921);

let sel = npc.askMenuENoEsc("#face3#… \r\n#b#L0#把差額45萬金幣還給我。#l\r\n#L1#合同就是合同，即使不返還45萬金幣也可以。#l");

if (sel == 1) {
        npc.sayNextENoEsc("#face2#真的嗎？果然！勇士大人太帥了！我最初看到你的時候，就一下子感覺到了你的帥氣哦！", 9400920);
        npc.sayNextENoEsc("#face2#以後我一定會對你很好的！", 9400921);
} else {
        npc.sayNextENoEsc("#face2#合同就是合同，反正我是不會還的啦！不過，之後我會對你好的咯！", 9400920);
}
npc.sayNextENoEsc("#face3#……不用對我很好也沒關系。", 9400920);
npc.sayNextENoEsc("#face2#啊！你是來參觀廣場的吧？讓我來帶路吧！我們一起去！", 9400920);

player.setNpcForceFlip(9400928, 1);
npc.setDelay(300);
player.setNpcForceMove(9400928, 1, 100, 100);
npc.setDelay(300);

player.setForcedMove(2, 110);

npc.setDelay(300);

player.setNpcForceMove(9400929, 1, 100, 100);
npc.setCameraRelMove(0, 1000, 150, 0);

npc.setDelay(2000);



npc.sayNextENoEsc("#face1#你好，米蘭達。你今天也在畫素描啊！今天的天氣讓人很容易迸發靈感吧？", 9400921);
npc.sayNextENoEsc("#face0#你好，艾爾賓。你好，艾米。 \n\r多虧了你們，我想到了一個好主意。你們覺得說謊警示鐘怎麼樣？", 9400924);
npc.sayNextENoEsc("#face3#呃……呃……你都看到了啊！", 9400920);

npc.sayNextENoEsc("#face1#能，能幫到米蘭達的工作可真好呢……如果你畫好了，一定要給我看看。", 9400920);

npc.sayNextENoEsc("#face1#對了，來打個招呼吧！這位是#h0#。今天剛搬到我們隔壁。", 9400921);

npc.sayNextENoEsc("#face1##h0#，這位是米蘭達。她是個多才多藝的藝術家，最近正在制作裝修物品，對吧？", 9400921);
npc.sayNextENoEsc("#face0#(點頭) ", true);

npc.sayNextENoEsc("#face0#很高興見到你，#h0#", 9400924);

npc.sayNextENoEsc("#face1#你有新做什麼嗎？我很喜歡米蘭達的作品，讓我們看看吧！", 9400921);
npc.sayNextENoEsc("#face0#今天沒有呢。", 9400924);
npc.sayNextENoEsc("#face1#可惜了，那就下次再參觀吧！再見", 9400921);


player.setNpcForceMove(9400928, 1, 380, 100);
npc.setDelay(300);

player.setForcedMove(2, 420);
npc.setDelay(300);

player.setNpcForceMove(9400929, 1, 350, 100);
npc.setDelay(300);

npc.setCameraRelMove(0, 3000, 450, 0);
npc.setDelay(3000);

npc.sayNextENoEsc("#face1#咳，今天米蘭達也很漂亮吧？", 9400923);
npc.sayNextENoEsc("#face0#要是被米蘭達聽見了，你就要被打了~", 9400920);
npc.sayNextENoEsc("#face2#真是的，才不會呢。", 9400923);
npc.sayNextENoEsc("#face0#別幼稚了，打個招呼吧！這是新搬到我們隔壁的#h0#。", 9400920);

npc.sayNextENoEsc("#face1#哈哈哈，你好，我是凱蘭西亞最棒的木匠，我叫艾丹，哈哈", 9400923);
npc.sayNextENoEsc("#b哇！ 很高興見到你，我叫#h0#。正好我家裡需要很多家具，比如桌子……", true);
npc.sayNextENoEsc("#face0#……啊！對了！我忘記了我還有事兒呢。那你們就慢慢參觀，注意安全啊。哈哈。", 9400923);
player.setNpcForceMove(9400932, -1, 500, 100);
npc.setDelay(500);

player.setNpcForceFlip(9400928, -1);



npc.setDelay(300);

player.setNpcForceMove(9400936, 1, 200, 100);
npc.sayNextENoEsc("#face3#艾丹這個傻瓜，說謊也太明顯了！", 9400920);
npc.sayNextENoEsc("#face0#艾米，你可不能這麼說。", 9400921);

player.setNpcForceFlip(9400928, 1);
npc.setDelay(500);

player.setNpcForceMove(9400928, 1, 450, 100);
npc.setDelay(600);

player.setForcedMove(2, 500);
player.setNpcForceMove(9400936, 1, 450, 100);
npc.setDelay(300);

npc.setCameraRelMove(0, 4000, 500, 0);
npc.setDelay(1000);
npc.sayNextENoEsc("#face1#很遺憾，艾丹還只是個學徒，所以不能制作家具售賣。", 9400921);

npc.sayNextENoEsc("#face0#他的師父卡朋特現在不在工坊，所以暫時由艾丹運營，修理一些破家具。", 9400921);
npc.sayNextENoEsc("#b真是可惜呢。", true);
npc.sayNextENoEsc("#face1#這裡是特魯迪家的面包店。 ", 9400921);
npc.sayNextENoEsc("#face0#這裡是建筑家凱尼斯的家。是向居民們開放的空間。", 9400921);

npc.setCameraRelMove(0, 3000, 0, -650);

npc.setDelay(2000);
npc.sayNextENoEsc("#face0#嗯~~現在凱尼斯好像不在，之後再給你介紹吧。", 9400921);
npc.setDelay(1000);

npc.setCameraRelMove(0, 0, 0, 650);

npc.sayNextENoEsc("#face0#只要再走一點就是艾丹家的家具工坊，過了工坊就是前往森林的入口。廣場就差不多是這樣了！", 9400921);
player.setNpcForceMove(9400935, -1, 250, 100);

npc.setCameraRelMove(0, 2000, 100, 0);
npc.sayNextENoEsc("#face1#哥哥啊啊啊啊~！姐姐啊啊啊啊~~！ 凱蒂~~！ ", 9400926);
npc.sayNextENoEsc("#face2#特魯迪~小心不要跌倒了~", 9400921);
npc.setDelay(1000);
npc.sayNextENoEsc("#face0#這是誰~？", 9400926);
npc.sayNextENoEsc("#face1#這是今天搬到哥哥家隔壁的勇士大人。", 9400921);
npc.sayNextENoEsc("#face0#勇……士大人？", 9400926);


player.setNpcSpecialAction(9400935, "eye", 0, false);
npc.sayNextENoEsc("#b見到你很高興，特魯迪？", true);
//player.showNpcEffectPlay(9400935, "Effect/OnUserEff.img/emotion/flower", 0, 0, 0, true, 0, false, 0);
npc.sayNextENoEsc("#face1#啊啊啊", 9400926);

npc.setDelay(1000);
player.setNpcForceFlip(9400935, 1);
npc.setDelay(500);



player.setNpcForceMove(9400935, 1, 500, 100);
player.setNpcForceMove(9400936, 1, 1000, 100);

npc.sayNextENoEsc("#face2#怎，怎麼了。特魯迪現在是在害羞嗎？啊啊啊！真可愛！", 9400920);
npc.sayNextENoEsc("#face1#看來是因為你是陌生人吧。這個村子已經很久沒有外人來過了。我也覺得很激動，很開心呢！總覺得會有什麼更開心的事情發生呢。", 9400921);

player.setNpcForceFlip(9400928, -1);
npc.setCameraRelMove(0, 2000, -100, 0);

npc.sayNextENoEsc("#face2#這~都是因為我啊。", 9400920);
npc.sayNextENoEsc("#face2#哈哈，那就重新回到家裡去吧？", 9400921);

npc.setDelay(1000);

player.setForcedFlip(1);
player.setNpcForceFlip(9400928, -1);
npc.setCameraRelMove(0, 3000, -1000, 0);

npc.setDelay(2000);


player.setLayerBlind(true, 255, 0, 0, 0, 500, 0);
npc.setDelay(500);
player.completeQuest(64595, 0);

player.destroyTempNpc(9400929);
player.destroyTempNpc(9400928);
player.destroyTempNpc(9400933);
player.destroyTempNpc(9400932);
player.destroyTempNpc(9400935);
player.destroyTempNpc(9400936);

player.setInGameDirectionMode(false, true, false, false);
player.changeMap(871000000,0);

