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

let n = player.getIntQuestRecordEx(500773, "manager");
let npcId = 9400920 + n;
if(n==2){
	npcId+=238;
}
let old = player.getQuestRecordEx(500763, "name");
if (old == null) {
        old = player.getName() + "'的我的小屋";
}
let menu = "#face0#我能幫你做什麼？\r\n\r\n#L0##b查看我的小屋信息#k#l\r\n#L1##b變更我的小屋名稱#k#l\r\n#L2##b變更訪問權限設定#k#l\r\n#L99##b我的小屋說明#k#l";
let sel = npc.askMenuA(menu, npcId);
switch (sel) {
        case 0:
                let text = "#face0#我的小屋名稱 : #b" + old;
                // text += "#k\r\n最多訪問人數 : #b";
                // text += "#k\r\n收到的點贊數 : #b";
                // text += "#k\r\n最多訪問人數 : #b";
                //text += "#k\r\n購買剩餘時間 : #b";
                text += "#k\r\n\r\n#L0##b確認#k#l";
                npc.askMenuA(text, npcId);
                break;
        case 1:
                let name = npc.askTextE("#face0#當前的我的小屋名字為 #b" + old + "#k。你要變更為什麼名字呢？\r\n\r\n ", "", 4, 30, npcId);
                player.updateQuestRecordEx(500763, "name", name);
				player.updateWorldShareRecord(500763, player.getQuestRecordEx(500763));
                npc.sayNextE("#face1#我的小屋的名字已變為#b" + name + "#k！", npcId);
                break;
        case 2:
                npc.sayNextE("#face0#當前不支持！", 9400920);
                break;
        case 99:
                        infos();
                break;
}


function infos() {
        let qSel = npc.askMenuA("#face0#你想知道什麼？\r\n\r\n#L0##b我的小屋是？#k#l\r\n#L1##b權限#k#l\r\n#L2##b家具#k#l\r\n#L3##b邀請/訪問#k#l\r\n#L4##b管理人#k#l", npcId);
        switch (qSel) {
                case 0:
                        npc.sayNextE("#face0#我的小屋是可以自己親手裝飾的，專屬於我的珍貴空間！\r\n請利用各種各樣的#b建築樣式#k和#b家具#k來打造專屬於我的小屋吧！", npcId);
                        npc.sayNextE("#face0#我的小屋是#b世界中所有角色共享#k的空間。一旦裝飾好之後，不僅世界中的所有角色都能使用，而且還能邀請其他人來到我的小屋。", npcId);
                        break;
                case 1:
                        npc.sayNextE("#face0#點擊我的小屋菜單的#b#i3801390##t3801390##k按鍵，就能更改我的家的#b建築樣式#k和#b建築外形#k。", npcId);
                        npc.sayNextE("#face0#在選擇自己喜歡的屋頂或者牆壁，窗戶的建築外形後，點擊#b應用#k按鍵，就能立刻應用外形。請綜合各種建築外形，創造出專屬風格", npcId);
                        npc.sayNextE("#face0#變更#b建築樣式#k，就能改變整個家的風格和形態！點擊你喜歡的建築圖紙後，選定建築外形，然後點擊#b確認#k按鍵就可以了。", npcId);
                        npc.sayNextE("#face0#但是，在選擇新的圖紙時，需要重新翻新建築，所以需要#b0分鐘#k的完成時間，另外請注意，所有家具都會被取消設置！", npcId);
                        break;
                case 2:
                        npc.sayNextE("#face0#點擊我的小屋菜單的#b#i3801391##t3801391##k按鍵，打開#b家具保管箱#k時，就能查看擁有的家具。\r\n請利用收集到的各種家具來裝飾自己的家吧！", npcId);
                        npc.sayNextE("#face0#在#b家具保管箱#k中選擇喜歡的家具後，點擊#b放置#k按鍵，或者點擊我的小屋菜單的#b#i3801392##t3801392##k按鍵，進入#b放置家具#k模式。", npcId);
                        npc.sayNextE("#face0#你可以在#b放置家具#k模式自由地放置你喜歡的家具。請不要忘記，掛在牆上的家具和放在地上的家具是可以重疊放置的！", npcId);
                        npc.sayNextE("#face0##b點擊#k特定家具或者按下#b空格#k鍵就能更改#b特別功能#k。親自去探尋一下每個家具都隱藏有什麼樣的功能吧，是不是很有趣？s", npcId);
                        break;
                case 3:
                        npc.sayNextE("#face0#可以邀請好友或者訪客進入自己精心裝飾的我的小屋。通過我的小屋菜單的#b#i3801393##t3801393##k按鍵，輸入自己想要邀請的角色名字吧。", npcId);
                        npc.sayNextE("#face0#在楓之谷世界中查看#b角色信息#k，或者#b右鍵點擊角色#k就能訪問該角色的我的小屋。\r\n而且在#b好友名單#k或者#b聊天窗口#k #b右鍵點擊角色名字#k也能訪問我的小屋！", npcId);
                        npc.sayNextE("#face0#你是不是偶爾也想去全新的地方看看？點擊我的小屋菜單的#b#i3801394##t3801394##k按鍵，就能隨機訪問其他玩家精心裝飾的我的小屋哦！", npcId);
                        npc.sayNextE("#face0#但是，請注意每個我的小屋都有同時可訪問人數的上限，有的玩家還會禁止訪客的訪問哦！", npcId);
                        break;
                case 4:
                        npc.sayNextE("#face0#精心裝飾的我的小屋，在#h0#出門的時候，需要人來管理吧？這就是我們這樣的#b管理人#k存在的理由。", npcId);
                        npc.sayNextE("#face0#管理人會在我的小屋中待很長時間，\r\n#b1. 每天提供有用的增益或者\r\n2. 購買新的家具又或者\r\n3.為了迎接訪客而做準備#k\r\n等，承擔著多種角色。", npcId);
                        npc.sayNextE("#face0#通過#b管理人的幫助增益#k，每天可以獲得一次增益，可以對在楓之谷世界的生活起到幫助。雖然可以選擇你想要的增益種類，但是強度和持續時間都會根據#b管理人的能力#k而產生變化。", npcId);
                        npc.sayNextE("#face0##b家具選購#k是為了獲得新家具的管理人的重要任務。為了讓#h0#的家變得更加美麗和豐富，肯定需要更多的家具吧？\r\n但是家具的下單，制作，購買都需要不少時間，需要經常查看選購情況哦。", npcId);
                        npc.sayNextE("#face0#為了迎接#b訪客#k，需要管理人的幫助。需要和管理人討論並確定是否允許訪客的訪問，管理人的能力還將決定可以同時訪問的人數。", npcId);
                        npc.sayNextE("#face0#雖然這能力屬于不起眼的管理人，但是否能夠成長為更加熟練的樣子，很大程度取決于#h0#能否給予不斷的關心。\r\n如果每天都#b和管理人對話#k，關心管理人，管理人就會更加努力，能力也會成長得更快！", npcId);
                        break;
        }
}