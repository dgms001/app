/**
 * Regular Cab (NPC 1012000)
 * Victoria Road: Henesys (Map 100000000)
 *
 * Taxi NPC for Henesys. Teleports players from Henesys to other Victoria Island
 * towns.
 *
 *
 */

let taxiMaps = [104000000, 102000000, 101000000, 103000000, 120000000];
let taxiFares = [800, 1000, 1000, 1200, 1000];

/**
 * Thanks to http://stackoverflow.com/a/2901298/444402!
 * @param x must be an integer.
 */
function groupThousands(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

npc.sayNext("Hi! I drive the #p1012000#. If you want to go from town to town safely and fast, then ride our cab. We'll gladly take you to your destination with an affordable price.");
let prompt;
if (player.getJob() == 0) {
    prompt = "We have a special 90% discount for beginners. Choose your destination, for fees will change from place to place.#b";
    for (let i = 0; i < taxiMaps.length; i++)
        prompt += "\r\n#L" + i + "##m" + taxiMaps[i] + "#(" + groupThousands(taxiFares[i] / 10) + " mesos)#l";
} else {
    prompt = "Choose your destination, for fees will change from place to place.#b";
    for (let i = 0; i < taxiMaps.length; i++)
        prompt += "\r\n#L" + i + "##m" + taxiMaps[i] + "#(" + groupThousands(taxiFares[i]) + " mesos)#l";
}
mapIndex = npc.askMenu(prompt);
let fare = taxiFares[mapIndex];
if (player.getJob() == 0)
    fare /= 10;
selection = npc.askYesNo("You don't have anything else to do here, huh? Do you really want to go to #b#m" + taxiMaps[mapIndex] + "##k? It'll cost you #b" + groupThousands(fare) + " mesos#k.");
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