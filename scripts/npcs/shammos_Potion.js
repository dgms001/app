/**
 *
 *
 */
let event = npc.getEvent("shammos");
if (event != null) {
    if (player.hasItem(2022698, 1)) {
        npc.say("你已經擁有一箇萬年冰河水.");
    } else if (!player.gainItem(2022698, 1)) {
        npc.say("揹包空間不足，請清理後再試！");
    } else {
        event.setVariable("water", true);
    }
}

