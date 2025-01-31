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

var BGMS = Array(
        Array("弓箭手村", "Bgm00.img/FloralLife"),
        Array("勇士之村", "Bgm00.img/Nightmare"),
        Array("奇幻村", "Bgm00.img/SleepyWood"),
        Array("墮落城市", "Bgm01.img/BadGuys"),
        Array("魔法森林", "Bgm02.img/WhenTheMorningComes"),
        Array("維多利亞港", "Bgm02/AboveTheTreetops"),
        Array("櫻花處", "Bgm25/WindAndFlower"),
        Array("鯨魚號", "Bgm15/Nautilus"),
        Array("黃金海岸", "Bgm17/GoldBeach"),
        Array("耶雷弗", "Bgm18/QueensGarden"),
        Array("天空之城", "Bgm04/Shinin'Harbor"),
        Array("冰原雪域", "Bgm03/SnowyVillage"),
        Array("埃德爾斯坦", "Bgm22/EdelsteinCity"),
        Array("水世界", "Bgm11/Aquarium"),
        Array("瑞恩村", "Bgm19/RienVillage"),
        Array("玩具城", "Bgm06/FantasticThinking"),
        Array("地球防衛總部", "Bgm08/LetsMarch"),
        Array("童話村", "Bgm11/DownTown"),
        Array("艾靈森林", "Bgm15/ElinForest"),
        Array("桃花仙境", "Bgm15/MureungHill"),
        Array("靈藥幻境", "Bgm15/WhiteHerb"),
        Array("納希沙漠", "Bgm14/Ariant"),
        Array("瑪迦提亞", "Bgm12/Dispute"),
        Array("神木村", "Bgm13/Leafre"),
        Array("萬神殿", "Bgm27/Pantheon")
);
var anser = "";


var event = npc.getEvent();
if (event != null) {
        //判斷第幾個問題
        var value = parseInt(event.getVariable("stage24_Value"));//第幾個問題 0 第一個
        var index = 0;
        if (event.getVariable("stage24_" + value + "_index") == null) {//未初始化問題
                //初始化問題 獲得問題的 Idx
                index = parseInt(java.lang.Math.random() * BGMS.length);
                event.setVariable("stage24_" + value + "_index", String(index));
                var wzPath = BGMS[index][1];
                player.playSoundWithMuteBGM(wzPath);//播放背景音樂
        } else {
                //獲得問題的 Idx
                index = parseInt(event.getVariable("stage24_" + value + "_index"));
        }
        anser = BGMS[index][0];
        let xxx = npc.askTextS("你要仔細想想現在聽到的音樂是哪一個村莊的背景音樂\r\n然後將村莊的名字寫在下面的空格內。\r\n對了，我可是務必嚴格的女人哦。哈哈哈！", "", 2, 13);
        var check = xxx;
        if (anser == check) {
                var value = parseInt(event.getVariable("stage24_Value")) + 1;//第幾個問題 0 第一個
                event.setVariable("stage24_Value", String(value));
                event.setVariable("stage24_up0" + value, "1");
                npc.sayNext("挺厲害的嘛，竟然答對了。", 2540002);
                if (anser == check) {
                        var value = parseInt(event.getVariable("stage24_Value"));//第幾個問題 0 第一個
                        player.teleportToPortalId(value + 1);
                        if (value == 4) {
                                var stage = parseInt(event.getVariable("stage"));
                                event.setVariable("stage" + stage, "clear");
                                player.screenEffect("quest/party/clear");
                                event.getVariable("map" + stage).blowWeatherEffectNotice("你現在可以前往下一層了。", 147, 15000);
                        }
                } else {
                        npc.sayNext("要在音樂結束前盡快解答", 2540002);
                }
        } else {
                npc.sayNextNoEsc("哈哈哈！答錯了。我要按照處罰規定減去你的時間了，怎麼樣？減少5分鐘的話。你應該不會不滿吧？不過不滿也沒有辦法。哈哈哈。", 2540002);
                let remaine = reduceTime(5 * 60 * 1000);
                event.startTimer("kick", remaine);
        }
}

function reduceTime(reduce) {
        var rData = player.getQuestRecordEx(42011, "time");
        var tData = player.getQuestRecordEx(42011, "totalTime");
        var startData = player.getQuestRecordEx(42011, "start");

        var remainTime = parseInt(rData);//剩余時間
        var totalTime = parseInt(tData);//初始總時間
        var startTime = parseInt(startData);//階段開始的時間
        var nStageTime = (totalTime - remainTime) / 1000;//從開始到當前階段所花費時間

        var diffTime = java.lang.System.currentTimeMillis() - startTime;//當前階段消耗的時間（毫秒）
        remainTime -= diffTime;//剩余時間 計算
        remainTime -= reduce;
        player.updateQuestRecordEx(42011, "time", String(remainTime));//更新剩余時間
        player.updateQuestRecordEx(42011, "start", String(java.lang.System.currentTimeMillis()));
        player.showLobbyTimer(2, remainTime, totalTime, 42011);
        return Math.max(remainTime, 0);
}
