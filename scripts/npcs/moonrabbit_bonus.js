/**
 * Tommy (NPC 1012113)
 * Hidden Street: Shortcut (Map 910010100),
 *   Hidden Street: Pig Town (Map 910010200),
 *   Hidden Street: Back to Town (Map 910010300)
 *
 * Admits players who have completed the Henesys PQ into its bonus stage and
 * teleports quitters back to Henesys Park.
 *
 *
 */

switch (map.getId()) {
    case 910010100: {
        npc.sayNext("Hello, there! I'm Tommy. There's a Pig Town nearby where we're standing. The pigs there are rowdy and uncontrollable to the point where they have stolen numerous weapons from travelers. They were kicked out from their towns, and are currently hiding out at the Pig Town.");
        if (player.getId() == party.getLeader()) {
            let selection = npc.askMenu("What do you think about making your way there with your party members and teach those rowdy pigs a lesson?\r\n#b"
                + "#L0# Yeah, that sounds good! Take me there!#l");

            switch (selection) {
                case 0:
                    let members = npc.getEvent("moonrabbit").getVariable("members");
                    for (let i = 0; i < members.length; i++)
                        if (members[i].getHp() > 0)
                            members[i].changeMap(910010200);
                    break;
            }
        } else {
            //TODO: GMS-like line
            npc.say("If you really want to teach a lesson to these pigs, tell your party leader.");
        }
        break;
    }
    case 910010200: {
        let selection = npc.askMenu("Would you like to stop hunting and leave this place?\r\n#b"
            + "#L0# Yes. I would like to leave this place.#l");

        switch (selection) {
            case 0:
                player.changeMap(910010400, "st00");
                break;
        }
        break;
    }
    case 910010300: {
        //TODO: GMS-like line
        let selection = npc.askMenu("It looks like you are done here. Would you like to leave this place?\r\n#b"
            + "#L0# Yes. I would like to leave this place.#l");
        switch (selection) {
            case 0:
                player.loseItem(4001095);
                player.loseItem(4001096);
                player.loseItem(4001097);
                player.loseItem(4001098);
                player.loseItem(4001099);
                player.loseItem(4001100);
                player.loseItem(4001101);
                player.changeMap(100000200);
                break;
        }
        break;
    }
}