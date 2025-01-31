/**
 * Nautilus' Mid-Sized Taxi (NPC 1092014)
 * Victoria Road: Nautilus Harbor (Map 120000000)
 *
 * Taxi NPC for Nautilus. Teleports players from Nautilus to other Victoria
 * Island towns.
 *
 *
 */

let taxiMaps = [104000000, 102000000, 100000000, 103000000, 101000000];
let taxiFares = [1200, 1000, 1000, 1200, 1000];

npc.sayNext("How's it going? I drive the #p1092014#. If you want to go from town to town safely and fast, then ride our cab. We'll gladly take you to your destination with an affordable price.");
let prompt;
if (player.getJob() == 0) {
    prompt = "We have a special 90% discount for beginners. Choose your destination, for fees will change from place to place.#b";
    for (let i = 0; i < taxiMaps.length; i++)
        prompt += "\r\n#L" + i + "##m" + taxiMaps[i] + "#(" + taxiFares[i] / 10 + " mesos)#l";
} else {
    prompt = "Choose your destination, for fees will change from place to place.#b";
    for (let i = 0; i < taxiMaps.length; i++)
        prompt += "\r\n#L" + i + "##m" + taxiMaps[i] + "#(" + taxiFares[i] + " mesos)#l";
}
mapIndex = npc.askMenu(prompt);
let fare = taxiFares[mapIndex];
if (player.getJob() == 0)
    fare /= 10;
selection = npc.askYesNo("You don't have anything else to do here, huh? Do you really want to go to #b#m" + taxiMaps[mapIndex] + "##k? It'll cost you #b" + fare + " mesos#k.");
if (selection == 1) {
    if (player.hasMesos(fare)) {
        player.loseMesos(fare);
        player.changeMap(taxiMaps[mapIndex]);
    } else {
        npc.say("You don't have enough mesos. Sorry to say this, but without them, you won't be able to ride this cab.");
    }
} else if (selection == 0) {
    npc.say("There's a lot to see in this town, too. Come back and find me when you need to go to a different town.");
}