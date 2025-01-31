/**
 * Magician Job Instructor (NPC 1072005)
 * Hidden Street: Magician's Tree Dungeon (Map 108000200),
 *   Hidden Street: Magician's Tree Dungeon (Map 108000201),
 *   Hidden Street: Magician's Tree Dungeon (Map 108000202)
 *
 * Lets players out of magicians 2nd job advancement quest, whether it be for
 * forfeit or completion.
 *
 *
 */

if (player.hasItem(4031013, 30)) {
    npc.sayNext("Ohhhhh...you collected all 30 Dark Marbles!! It should have been difficult...just incredible! You've passed the test and for that, I'll reward you #b#t4031012##k. Take that and go back to Ellinia.");
    player.loseItem(4031013);
    player.loseItem(4031009);
    //there should already be at least two empty slots in the ETC inventory by now
    player.gainItem(4031012, 1);
    player.changeMap(101000000);
} else {
    let selection = npc.askYesNo("What's going on? Doesn't look like you have collected 30 #b#t4031013##k, yet...If you're having problems with it, then you can leave, come back and try it again. So...do you want to give up and get out of here?");

    if (selection == 0) {
        npc.sayNext("That's right! Stop acting weak and start collecting the marbles. Talk to me when you have collected 30 #b#t4031013##k.");
    } else if (selection == 1) {
        npc.sayNext("Really... alright, I'll let you out. Please don't give up, though. You can always try again, so do not give up. Until then, bye...");
        player.changeMap(101020000);
    }
}