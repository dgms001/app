/**
 * Pason: Tour Guide (NPC 1002002),
 *   Shuri: Tour Guide (NPC 2010005),
 *   Nara: Tour Guide (NPC 2040048)
 * Victoria Road: Lith Harbor (Map 104000000),
 *   Orbis: Orbis (Map 200000000),
 *   Ludibrium: Ludibrium (Map 220000000)
 *
 * Teleports player from Lith Harbor to Florina Beach.
 *
 *
 */

function warp() {
    npc.rememberMap("FLORINA")
    player.changeMap(110000000);
}

function declineResponse() {
    npc.sayNext("You must have some business to take care of here. You must be tired from all that traveling and hunting. Go take some rest, and if you feel like changing your mind, then come talk to me.");
}

let selection = npc.askMenu("Have you heard of the beach with a spectacular view of the ocean called #b#m110000000##k, located near #m104000000#? I can take you there right now for either #b1500 mesos#k, or if you have #b#t4031134##k with you, in which case you'll be in for free.\r\n"
    + "#b#L0# I'll pay #b1500 mesos#k.#l\r\n"
    + "#b#L1# I have #b#t4031134##k.#l\r\n"
    + "#b#L2# What is a #b#t4031134##k?#l");
switch (selection) {
    case 0:
        selection = npc.askYesNo("So you want to pay #b1500 mesos#k and leave for #m110000000#? Alright, then, but just be aware that you may be running into some monsters around there, too. Okay, would you like to head over to #m110000000# right now?");
        if (selection == 1) {
            if (player.hasMesos(1500)) {
                player.loseMesos(1500);
                warp();
            } else {
                npc.sayNext("I think you're lacking mesos. There are many ways to gather up some money, you know, like... selling your armor... defeating monsters... doing quests... you know what I'm talking about.");
            }
        } else {
            declineResponse();
        }
        break;
    case 1:
        selection = npc.askYesNo("So you have #b#b#t4031134##k? You can always head over to #m110000000# with that Alright, then, but just be aware that you may be running into some monsters there, too. Okay, would you like to head over to #m110000000# right now?");
        if (selection == 1) {
            if (player.hasItem(4031134, 1)) {
                warp();
            } else {
                npc.sayNext("Hmmm, so where exactly is your #b#t4031134##k? Are you sure you have one? Please double-check.");
            }
        } else {
            declineResponse();
        }
        break;
    case 2:
        npc.sayNext("You must be curious about a #b#t4031134##k. Haha, that's very understandable. A #t4031134# is an item where as long as you have in possession, you may make your way to #m110000000# for free. It's such a rare item that even we had to buy those, but unfortunately I lost mine a few weeks ago during my precious summer break.");
        npc.sayNext("I came back without it, and it just feels awful not having it. Hopefully someone picked it up and put it somewhere safe. Anyway, this is my story and who knows, you may be able to pick it up and put it to good use. If you have any questions, feel free to ask.");
        break;
}