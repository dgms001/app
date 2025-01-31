//
// Quest ID:17637
// [凱梅爾茲共和國] 這次的事也由我來解決吧


npc.sayNext("好吧,希望這次你也能助我們一臂之力。");
npc.sayNext("謝謝。首領!", 9390202);
npc.sayNext("你可以藉助他的力量,但不可依賴於他的力量。");
npc.sayNext("好的,我會牢記的。我一定會憑我的力量打倒普賽依的。", 9390202);
npc.sayNextS("太好了。萊文。謝謝。首領。");
npc.sayNext("嗯?這次就拜託你了。我還有很多事情要告訴你,準備好的話就跟我說。", 9390202);
npc.sayNext("好，你拿著這個，這禮物給你是為了讓我們一起好好加油。", 9390202);
let itemId = 1082607 + player.getJobCategory();
if (player.gainItem(itemId, 1)) {
    npc.completeQuest();
    player.gainExp(953667);
    npc.sayNextNoEsc("萊文就拜託給你了。也許是因為還小所以好像有些慾望高脹。");
    npc.sayNextSNoEsc("請別擔心。根據我一直在旁的觀察來看,我覺得他一定能出色地完成任務的。");
} else {
    npc.sayNextE("你的揹包滿了，清理下吧！", 9390201);
}
