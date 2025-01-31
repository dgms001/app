
/* global npc, player, map */

if (map.getId() == 865000000) {
    let selection = npc.askMenu("你要去達尼爾拉商團的艦船嗎?\r\n#b\r\n#L0#進入艦船。#l");
    if (selection == 0) {
        npc.makeEvent("berry_quest", false, [player, [865010001]]);
    }
} else {
    let selection = npc.askMenu("你要回凱梅爾茲嗎??\r\n#b\r\n#L0#前往村莊。#l");
    if (selection == 0) {
        player.changeMap(865000000, 2);
    }
}
