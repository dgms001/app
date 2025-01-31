/**
 * Bomack: Lens Broker (NPC 9201061)
 * New Leaf City Town Street: NLC Mall (Map 600000001)
 *
 * New Leaf City face changer - random face, eye color only.
 *
 *
 */

function getRandomColor() {
    let array = npc.getAllEyeColors();
    return array[Math.floor(Math.random() * array.length)];
}

let selection = npc.askYesNo("What's up! I'm Bomack. If you use the regular coupon, you'll be hooked up with a random pair of cosmetic lenses. You wanna use #b#t5152035##k and go forward with the procedure?");
if (selection == 1) {
    if (player.hasItem(5152035, 1)) {
        player.loseItem(5152035, 1);
        player.setFace(getRandomColor());
        npc.sayNext("Enjoy your new and improved cosmetic lenses!");
    } else {
        npc.sayNext("Ah, it looks like you don't have the right coupon for this place. Sorry, but that means it's a no-go with the procedure. ");
    }
} else if (selection == 0) {
    npc.sayNext("For real? Nah, that's fine. Some people get the cold feet, I can sympathize. When you decide to make the change, you just let me know.");
}