/**
 * Insignificant Being (NPC 1061012)
 * Dungeon: Another Entrance (Map 105090200)
 *
 * Finishes Extreme Temptation - Junior Balrog in a Different World (Quest 6108)
 * by warping to Another World: Practice Field (Map 910500000).
 *
 *
 */

if (player.isQuestActive(6108)) {
    if (party == null) {
        npc.say("You don't have a party. You can challenge with party.");
    } else if (player.getId() == party.getLeader()) {
        if (party.getMembersCount() != 2) {
            npc.say("You can make a quest when you have a party with two. Please make your party with two members.");
        } else {
            let eligible = 0;
            let members = party.getLocalMembers();
            for (let i = 0; i < members.length; i++) {
                let member = members[i];
                if (member.getLevel() < 120) {
                    eligible = -1;
                    break;
                }
                if (Math.floor(member.getJob() / 100) == 3 && Math.floor((member.getJob() - 300) / 10) == 2 && member.getMapId() == map.getId()) // Only want 4th job bowmen
                    eligible++;
            }
            if (eligible == -1) {
                npc.say("There is a character among your party whose level is not eligible. You should be level 120 above. Please adjust level.");
            } else if (eligible != 2) {
                npc.say("You can't enter. Your party member's job is not Bow Master or Marksman or Your party doesn't consist of two members.");
            } else {
                //TODO: write event script
                //in init, warp party to map 910500000 and start 20 minute timer
                if (npc.makeEvent("snipe4th", true, party) == null)
                    npc.say("Other parties are challenging on quest clear now. Try again later.");
            }
        }
    } else {
        npc.say("After two Bowmans who made 4th advancement make a party, party leader can take to me.");
    }
} else {
    npc.say("I don't know what you're talking about.");
}