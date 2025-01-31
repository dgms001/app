/**
 * Scarf Snowman (NPC 2001004)
 * Hidden Street: The Hill of Christmas (Map 209000001),
 *   Hidden Street: The Hill of Christmas (Map 209000002),
 *   Hidden Street: The Hill of Christmas (Map 209000003),
 *   Hidden Street: The Hill of Christmas (Map 209000004),
 *   Hidden Street: The Hill of Christmas (Map 209000005),
 *   Hidden Street: The Hill of Christmas (Map 209000006),
 *   Hidden Street: The Hill of Christmas (Map 209000007),
 *   Hidden Street: The Hill of Christmas (Map 209000008),
 *   Hidden Street: The Hill of Christmas (Map 209000009),
 *   Hidden Street: The Hill of Christmas (Map 209000010),
 *   Hidden Street: The Hill of Christmas (Map 209000011),
 *   Hidden Street: The Hill of Christmas (Map 209000012),
 *   Hidden Street: The Hill of Christmas (Map 209000013),
 *   Hidden Street: The Hill of Christmas (Map 209000014),
 *   Hidden Street: The Hill of Christmas (Map 209000015)
 *
 * Lets the player out of the Christmas tree decorating map in Happyville.
 *
 *
 */

let selection = npc.askYesNo("Have you decorated your tree nicely? It's an interesting experience, to say the least, decorating a Christmas tree with other people. Don't cha think?  Oh yeah ... are you suuuuure you want to leave this place?");
if (selection == 1)
    player.changeMap(209000000);
else
    npc.sayNext("You need more time decorating trees, huh? If you ever feel like leaving this place, feel free to come talk to me~");