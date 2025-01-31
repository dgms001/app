//
// Quest ID:17618
// [凱梅爾茲共和國] 初次見面


if (npc.askYesNoS("#b(交易品的量很多,自己一箇人運的話,應該還沒走遠。現在追上去,應該還能抓住他。)#k", true)) {
    // Response is Yes
    npc.sayNextSNoEsc("他說是貝里村的反方向。那我只要往我來時的相反方向走就行了。", true);
    npc.startQuest();
} else {
    // Response is No
    npc.saySNoEsc("還需要準備下。", true);
}