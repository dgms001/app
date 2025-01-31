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
 * Casey: Master of MiniGame (NPC 1012008),
 *   Chico: Master of MiniGame (NPC 2040014)
 * Victoria Road: Henesys Game Park (Map 100000000),
 *   Ludibrium: Ludibrium Village (Map 220000300)
 *
 * Creates minigame items and gives info on them.
 *
 * @author dgms (content from KiniroMS r227)
 */

let selection = npc.askMenu("嘿，你看起來好像需要休息一下。你應該像我一樣享受生活。好吧，如果你有一些東西，我可以和你交易一個你可以玩小游戲的東西。現在。。。我能為你做什麼？\r\n#b"
        + "#L0#制作小游戲道具#l\r\n"
        + "#L1#什麼是小游戲#l");
if (selection == 0) {
    selection = npc.askMenu("你想做小游戲嗎？小游戲不是你可以直接玩的東西。你需要一組特定的物品來制作一個特定的小游戲。你想做哪種小游戲？\r\n#b"
            + "#L0#五子棋#l\r\n"
            + "#L1#記憶大考驗#l");
    if (selection == 0) {
        npc.sayNext("你想要制作#b五子棋#k, 哈哈? 要想玩它，你需要五子棋道具。只有那些有這個道具的人才能開玩五子棋游戲的房間，你幾乎可以在任何地方玩這個游戲，除了自由市場上的一些地方。");
        let sets = [4080000, 4080001, 4080002, 4080003, 4080004, 4080005];
        let mat1 = [4030000, 4030000, 4030000, 4030010, 4030011, 4030011];
        let mat2 = [4030001, 4030010, 4030011, 4030001, 4030010, 4030001];
        let menuText = "不同的棋子可以制作不同的五子棋。你想做哪一套?#b";
        for (let i = 0; i < sets.length; i++)
            menuText += "\r\n#L" + i + "##t" + sets[i] + "##l";
        selection = npc.askMenu(menuText);
        if (player.hasItem(mat1[selection], 99) && player.hasItem(mat2[selection], 99) && player.hasItem(4030009, 1) && player.canGainItem(sets[selection], 1)) {
            player.loseItem(mat1[selection], 99);
            player.loseItem(mat2[selection], 99);
            player.loseItem(4030009, 1);
            player.gainItem(sets[selection], 1);
        } else {
            npc.sayNext("#b你想要制作#t" + sets[selection] + "##k? 額... 把材料給我，我就能做到. 仔細聽，你需要的材料是: #r99個#t" + mat1[selection] + "#, 99個#t" + mat2[selection] + "#, 1個#t4030009##k. 怪物們可能會時不時地會掉落...");
        }
    } else if (selection == 1) {
        if (player.hasItem(4030012, 99)) {
            player.loseItem(4030012, 99);
            if (player.canGainItem(4080100, 1))
                player.gainItem(4080100, 1);
            else //TODO: GMS-like line
                npc.say("請檢查您的背包是否已滿.");
        } else {
            npc.sayNext("你想要#b#t4080100##k? 嗯... 想要#t4080100#, 你需要一些#b#t4030012#s#k. #t4030012#可以通過清除島上所有的怪物來獲得. 收集99個#t4030012#就可以制作記憶大考驗.");
        }
    }
} else if (selection == 1) {
    selection = npc.askMenu("你想進一步了解小游戲嗎？好的沒問題。你想了解哪個迷你游戲？\r\n#b"
            + "#L0#五子棋#l\r\n"
            + "#L1#記憶大考驗#l");
    if (selection == 0) {
        npc.sayNext("這是五子棋的規則。仔細聽。五子棋是一個游戲，你和你的對手將輪流把一塊放在桌子上，直到有人找到一條線上連續放5塊，不管是水平的，對角線的還是垂直的。那個人將是獲勝者。對于初學者來說，只有擁有五子棋道具的人才能打開游戲室。");
        npc.sayNext("每次五子棋游戲將花費#r100金幣#k.即使你沒有 #b五子棋道具#k, 你也可以進入五子棋游戲室進行游戲. 但是，如果你沒有100個金幣，那麼你就不能進入房間。創建愛你游戲室也需要100個金幣，否則就無法游戲了。如果你在游戲中沒有金幣，那麼你會自動被踢出房間！");
        //npc.sayNext("Enter the room, and when you're ready to play, click on #bReady#k. Once the visitor clicks on #bReady#k, the owner of the room can press #bStart#k to start the game. If an unwanted visitor walks in, and you don't want to play with that person, the owner of the room has the right to kick the visitor out of the room. There will be a square box with x written on the right of that person. Click on that for a cold goodbye, ok?");
        //npc.sayNext("When the first game starts, #bthe owner of the room goes first#k. Be ware that you'll be given a time limit, and you may lose your turn if you don't make your move on time. Normally, 3 x 3 is not allowed, but if there comes a point that it's absolutely necessary to put your piece there or face a game over, then you can put it there. 3 x 3 is allowed as the last line of defense! Oh, and it won't count if it's #r6 or 7 straight#k. Only 5!");
        //npc.sayNext("If you know your back is up against the wall, you can request a #bRedo#k. If the opponent accepts your request, then the opponent's last move, along with yours, will be canceled out. If you ever feel the need to go to the bathroom, or take an extended break, you can request a #btie#k. The game will end in a tie if the opponent accepts the request. This may be a good way to keep your friendship intact with your buddy.");
        //npc.sayNext("Once the game is over, and the next game starts, the loser will go first. Oh, and you can't leave in the middle of the game. If you do, you may need to request either a #bforfeit#k, or a #btie#k. Of course, if you request a forfeit, you'll lose the game, so be careful of that. And if you click on \"Leave\" in the middle of the game and call to leave after the game, you'll leave the room right after the game is over, so this will be a much more useful way to leave.");
    } else if (selection == 1) {
        npc.sayNext("這是記憶大考驗游戲的規則。仔細聽。在桌上的紙牌數量中找到一對匹配的紙牌。找到所有匹配對後，擁有更多匹配對的人將贏得比賽。你需要#b#t4080100##k來打開游戲室。");
        npc.sayNext("每次記憶大考驗游戲將花費#r100金幣#k.即使你沒有 #b記憶大考驗道具#k, 你也可以進入五子棋游戲室進行游戲. 但是，如果你沒有100個金幣，那麼你就不能進入房間。創建愛你游戲室也需要100個金幣，否則就無法游戲了。如果你在游戲中沒有金幣，那麼你會自動被踢出房間！");
        //npc.sayNext("Enter the room, and when you're ready to play, click on #bReady#k. Once the visitor clicks on #bReady#k, the owner of the room can press #bStart#k to start the game. If an unwanted visitor walks in, and you don't want to play with that person, the owner of the room has the right to kick the visitor out of the room. There will be a square box with x written on the right of that person. Click on that for a cold goodbye, ok?");
        //npc.sayNext("Oh, and unlike Omok, on Match Cards, when you create the game room, you'll need to set your game on the number of cards you'll use for the game. There are three modes available: 3x4, 4x5, and 5x6, which will require 12, 20, and 30 cards. Remember, though, you won't be able to change it up once the game room is open, so if you really wish to change it up, you may have to close the room and open another one.");
        //npc.sayNext("When the first game starts, #bthe owner of the room goes first#k. Beware that you'll be given a time limit, and you may lose your turn if you don't make your move on time. When you find a matching pair on your turn, you'll get to keep your turn, as long as you keep finding a pair of matching cards. Use your memorizing skills for a devestating combo of turns.");
        //npc.sayNext("If you and your opponent have the same number of matched pairs, then whoever had a longer streak of matched pairs will win. If you ever feel the need to go to the bathroom, or take an extended break, you can request a #btie#k. The game will end in a tie if the opponent accepts the request. This may be a good way to keep your friendship intact with your buddy.");
        //npc.say("Once the game is over, and the next game starts, the loser will go first. Oh, and you can't leave in the middle of the game. If you do, you may need to request either a #bforfeit#k, or a #btie#k. Of course, if you request a forfeit, you'll lose the game, so be careful of that. And if you click on \"Leave\" in the middle of the game and call to leave after the game, you'll leave the room right after the game is over, so this will be a much more useful way to leave.");
    }
}