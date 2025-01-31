/**
 * VIP Cab (NPC 1002004),
 *   VIP Cab (NPC 1032005)
 * Victoria Road: Lith Harbor (Map 104000000),
 *   Victoria Road: Ellinia (Map 101000000)
 *
 * Teleports player from Lith Harbor to Ant Tunnel Park.
 *
 *
 */

npc.sayNext("Hi there! This cab is for VIP customers only. Instead of just taking you to different towns like the regular cabs, we offer a much better service worthy of VIP class. It's a bit pricey, but... for only 10,000 mesos, we'll take you safely to the #bant tunnel#k.");
let prompt, price;
if (player.getJob() == 0) {
    prompt = "We have a special 90% discount for beginners. The ant tunnel is located deep inside in the dungeon that's placed at the center of the Victoria Island, where #p1061001# is. Would you like to go there for #b1,000 mesos #k?";
    price = 1000;
} else {
    prompt = "The regular fee applies for all non-beginners. The ant tunnel is located deep inside in the dungeon that's placed at the center of the Victoria Island, where #p1061001# is. Would you like to go there for #b10,000 mesos #k?.";
    price = 10000;
}
let selection = npc.askYesNo(prompt);
if (selection == 1) {
    if (player.hasMesos(price)) {
        player.loseMesos(price);
        player.changeMap(105070001);
    } else {
        npc.sayNext("It looks like you don't have enough mesos. Sorry but you won't be able to use this without it.");
    }
} else {
    npc.sayNext("This town also has a lot to offer. Find us if and when you feel the need to go to the ant tunnel park.");
}