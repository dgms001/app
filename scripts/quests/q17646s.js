// 
// Quest ID:17646
// [凱梅爾茲共和國] 海里的暴徒


if (npc.askYesNo("#h0#!!快來幫忙!!")) {
    npc.sayNextNoEsc("大家都鎮定點兒!!", 9390202);
    npc.sayNextSNoEsc("萊文!!沒事吧?那些令人作嘔的腿腳都是什麼呀");
    npc.sayNextNoEsc("深海巨妖是海洋的霸主！請小心，不要死了哦！");
    map.spawnMob(9390835, 33, 250);
    npc.startQuest();
} else {
    npc.sayS("喂,你在磨蹭什麼呢!!");
}
