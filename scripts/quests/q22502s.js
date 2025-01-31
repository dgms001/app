/**
 *
 *
 */

let ret = npc.askYesNo("蜥蜴不都吃草的嘛，你去旁邊的草堆拿些草喂喂他");
if (ret == 1) {
    npc.startQuest();
} else {
    npc.sayNext("你真的不試試嗎？");
}