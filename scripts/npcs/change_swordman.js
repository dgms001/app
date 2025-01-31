/**
 * Warrior Job Instructor (NPC 1072000)
 * Victoria Road: West Rocky Mountain IV (Map 102020300)
 *
 * Admits warriors into the second job advancement challenge.
 *
 *
 */

if (player.hasItem(4031008, 1) && player.hasItem(4031013, 0)) {
    npc.sayNext("Hmmm...it is definitely the letter from #b#p1022000##k...so you came all the way here to take the test and make the 2nd job advancement as the warrior. Alright, I'll explain the test to you. Don't sweat it too much, it's not that complicated.");
    npc.sayNext("I'll send you to a hidden map. You'll see monsters you don't normally see. They look the same like the regular ones, but with a totally different attitude. They neither boost your experience level nor provide you with item.");
    npc.sayNext("You'll be able to acquire a marble called #b#t4031013##k while knocking down those monsters. It is a special marble made out of their sinister, evil minds. Collect 30 of those, then go talk to a colleague of mine in there. That's how you pass the test.");
    let selection = npc.askYesNo("Once you go inside, you can't leave until you take care of your mission. If you die, your experience level will decrease...so you better really buckle up and get ready...well, do you want to go for it now?");
    if (selection == 0) {
        npc.sayNext("You don't seem too prepared for this. Find me when you ARE ready. There are neither portals or stores inside, so you better get 100% ready for it.");
    } else if (selection == 1) {
        npc.sayNext("Alright I'll let you in! Defeat the monsters inside, collect 30 Dark Marbles, then strike up a conversation with a colleague of mine inside. He'll give you the #b#t4031013##k, the proof that you've passed the test. Best of luck to you.");
        //create an event. the playerDisconnected and playerChangedMap handlers
        //make it easier to destroy the instance map when it is no longer needed
        npc.makeEvent("change_job", false, [player, 108000300]);
    }
} else if (player.hasItem(4031008, 1) && player.hasItem(4031013, 1)) {
    let selection = npc.askYesNo("So you've given up in the middle of this before. Don't worry about it, because you can always retake the test. Now...do you want to go back in and try again?");
    if (selection == 0) {
        npc.sayNext("You don't seem too prepared for this. Find me when you ARE ready. There are neither portals or stores inside, so you better get 100% ready for it.");
    } else if (selection == 1) {
        npc.sayNext("Alright! I'll let you in! Sorry to say this, but I have to take away all your marbles beforehand. Defeat the monsters inside, collect 30 Dark Marbles, then strike up a conversation with a colleague of mine inside. He'll give you the #b#t4031013##k, the proof that you've passed the test. Best of luck to you.");
        player.loseItem(4031013);
        //create an event. the playerDisconnected and playerChangedMap handlers
        //make it easier to destroy the instance map when it is no longer needed
        npc.makeEvent("change_job", false, [player, 108000300]);
    }
} else if (player.getJob() == 100 && player.getLevel() >= 30) {
    npc.sayNext("Do you want to be a stronger warrior? Let me take care of that for you, then. You look definitely qualified for it. For now, go see #b#p1022000##k of Perion first.");
}