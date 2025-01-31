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

let sel = npc.askMenu("#e<蘭丸小隊>#n\r\n\r\n 請選擇你想要挑戰的小隊。\r\n#b#L0#蘭丸小隊#l\r\n#L1#CRAZY蘭丸小隊#l");
npc.rememberMap("RETURN_MAP");
player.changeMap(sel == 0 ? 807300200 : 807300100);
