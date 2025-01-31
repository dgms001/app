/**
 * Exit (NPC 1052011)
 * Line 3 Construction Site: B1 <Area 1> (Map 103000900),
 *   Line 3 Construction Site: B1 <Area 2> (Map 103000901),
 *   Line 3 Construction Site: B2 <Area 1> (Map 103000903),
 *   Line 3 Construction Site: B2 <Area 2> (Map 103000904),
 *   Line 3 Construction Site: B3 <Area 1> (Map 103000906),
 *   Line 3 Construction Site: B3 <Area 2> (Map 103000907),
 *   Line 3 Construction Site: B3 <Area 3> (Map 103000908)
 *
 * Exit sign in Kerning City subway constructions sites.
 * Forfeits Shumi's jump quests.
 *
 *
 */

if (npc.askYesNo("This device is connected to outside. Are you going to give up and leave this place? You'll have to start from scratch the next time you come in...") == 1)
    player.changeMap(103000100);