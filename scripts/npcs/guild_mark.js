/**
 * Lea: Guild Emblem Creator (NPC 2010008)
 * Orbis: Guild Head Quarters<Hall of Fame> (Map 200000301)
 *
 * Allows guild masters to add or remove an emblem for their guild.
 *
 *
 */

if (player.getGuildRank() != 1) {
    npc.sayNext("oh... You are not a guild master. Guild Emblem can be made, deleted or modified, only by #rGuild Master#k...");
} else {
    let selection = npc.askMenu("Hi? My name is #bLea#k. I am in charge of #bGuild Emblem#k.\r\n#b"
        + "#L0#I'd like to register a guild emblem.#l\r\n"
        + "#L1#I'd like to delete a guild emblem.#l");

    switch (selection) {
        case 0:
            if (player.hasGuildEmblem()) {
                npc.sayNext("Guild Emblem has already been made. Please delete the guild emblem, first and make it, again.");
            } else {
                selection = npc.askYesNo("You need #r5,000,000 Mesos#k to make a guild emblem. To explain it more, guild emblem is an unique pattern for each guild. It will appear right next to the guild name in the game\r\nSo are you going to make a guild emblem?");

                if (selection == 1)
                    if (!player.hasMesos(5000000)) {
                        npc.say("Oh... You don't have enough mesos to create an emblem...");
                    } else {
                        player.setGuildEmblem(npc.askGuildEmblem());
                        player.loseMesos(5000000);
                    }
                else if (selection == 0)
                    npc.say("Oh... okay... A guild emblem would make the guild more unified. Do you need more time for preparing for the guild emblem? Please come back to me when you are ready...");
            }
            break;
        case 1:
            if (!player.hasGuildEmblem()) {
                npc.say("huh? weird... you don't have a guild emblem to delete...");
            } else {
                selection = npc.askYesNo("If you delete the current guild emblem, you can make a new guild emblem. You will need #r1,000,000 Mesos#k to delete a guild emblem. Would you like to do it?");

                if (selection == 1)
                    if (!player.hasMesos(1000000))
                        npc.sayNext("You don't have enough Mesos for deleting a guild emblem. You need #b1,000,000 Mesos#k to delete a guild emblem.");
                    else
                        player.setGuildEmblem([0, 0, 0, 0]);
                else if (selection == 0)
                    npc.say("Please come back to me, when you are ready.");
            }
            break;
    }
}