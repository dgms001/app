/**
 *
 *
 */

let sel = npc.askMenu("你想做什麼？#b\r\n\r\n #L0#離開這裡。#l");
let ret = npc.askYesNo("你確定你要離開嗎？離開之後就不能再回到這裡來了。");
if (ret == 1) {
    player.changeMap(990001100, 0);
} else {
    npc.say("祝你能順利的透過家族任務！");
}
