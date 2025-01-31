/**
 * Kyrin: Pirate Instructor (NPC 1072008)
 * Hidden Street: Pirate Test Room (Map 108000500),
 *   Hidden Street: Pirate Test Room (Map 108000501),
 *   Hidden Street: Pirate Test Room (Map 108000502),
 *   Hidden Street: Pirate Test Room (Map 108000503)
 *
 * Lets players out of pirates 2nd job advancement quest, whether it be for
 * forfeit or completion.
 *
 *
 */


if (player.hasItem(4031013, 30)) {
    npc.sayNext("哇, 這麼快就狩獵到30顆#b黑珠#k了! 恭喜你, 我現在就把你傳送出去吧。");
    player.changeMap(120000101);
} else {
    npc.sayNext("走吧, 去狩獵30顆#b黑珠#k");
}
   