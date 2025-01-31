/**
 * Shanks (NPC 22000)
 * Maple Road: Southperry (Map 60000)
 *
 * Teleports player from Southperry to Lith Harbor.
 *
 *
 */

function warp() {
    player.changeMap(104000000);
}

let response = npc.askYesNo("Take this ship and you'll head off to a bigger continent.#e For 150 mesos#n, I'll take you to #bVictoria Island#k. "
    + "The thing is, once you leave this place, you can't ever come back. What do you think? Do you want to go to Victoria Island?");
if (response == 1) {
    if (player.getLevel() >= 7) {
        if (player.hasItem(4031801, 1)) {
            npc.sayNext("Okay, now give me 150 mesos... Hey, what's that? Is that the recommendation letter from Lucas, the chief of Amherst? "
                + "Hey, you should have told me you had this. I, Shanks, recognize greatness when I see one, and since you have been recommended by Lucas, "
                + "I see that you have a great, great potential as an adventurer. No way would I charge you for this trip!");
            npc.sayNext("Since you have the recommendation letter, I won't charge you for this. "
                + "Alright, buckle up, because we're going to head to Victoria Island right now, and it might get a bit turbulent!!");
            player.loseItem(4031801, 1);
            warp();
        } else {
            npc.sayNext("Bored of this place? Here... Give me 150 mesos first...");
            if (player.hasMesos(150)) {
                npc.sayNext("Awesome! #e150 mesos#n accepted! Alright, off to Victoria Island!");
                player.loseMesos(150);
                warp();
            } else {
                npc.sayNext("What? You're telling me you wanted to go without any money? You're one weirdo...");
            }
        }
    } else {
        npc.sayNext("Let's see... I don't think you are strong enough. You'll have to be at least #bLevel 7#k to go to Victoria Island.");
    }
} else if (response == 0) {
    npc.sayNext("Hmm... I guess you still have things to do here?");
}