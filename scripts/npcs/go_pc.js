/**
 * Mong from Kong: Internet Cafe Worker (NPC 1052012)
 * Victoria Road: Kerning City (Map 103000000)
 *
 * Maple Internet Cafe bouncer.
 *
 *
 */

let selection = npc.askYesNo("Aren't you connected through the Internet Cafe? If so, then go in here ... you'll probably head to a familiar place. What do you think? Do you want to go in?");
if (selection == 1)
    npc.sayNext("Hey, hey ... I don't think you're logging on from the internet cafe. You can't enter this place if you are logging on from home ...");
else
    npc.sayNext("You must be busy, huh? But if you're loggin on from the internet cafe, then you should try going in. You may end up in a strange place once inside.");