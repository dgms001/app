// 
// Quest ID:17648
// [凱梅爾茲共和國] 重返桑凱梅爾茲


if (npc.askYesNo("好了,海盜王也剿滅了,現在可以回程了吧。得趕緊跟爸..首領大人報告這好訊息才行。")) {
    npc.sayNextNoEsc("調轉船頭!目的地桑凱梅爾茲!!");
    npc.sayNextNoEsc("是,遵命!!", 9390217);
    npc.startQuest();

    player.changeMap(865000000, 5);
} else {
    npc.say("怎麼了?你在這茫茫大海上還有事要辦嗎?");
}
