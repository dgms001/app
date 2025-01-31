/**
 * Ari: Hair Salon Assistant (NPC 9201063)
 * New Leaf City Town Street: NLC Mall (Map 600000001)
 *
 * New Leaf City hair changer - random hair.
 *
 *
 */

function getRandomStyle(gender, currentHair) {
    let color = currentHair % 10;
    let styles;
    if (gender == 0)
        styles = [30400, 30360, 30440, 30410, 30200, 30050, 30230, 30160, 30110, 30250];
    else if (gender == 1)
        styles = [31560, 31720, 31450, 31150, 31160, 31300, 31260, 31220, 31410, 31270];
    let style = styles[Math.floor(Math.random() * styles.length)];
    if (npc.isHairValid(style + color)) //prefer current hair color
        style += color;
    return style;
}

function getRandomColor() {
    let array = npc.getAllHairColors();
    return array[Math.floor(Math.random() * array.length)];
}

let selection = npc.askMenu("I'm Brittany the assistant. If you have #b#t5150030##k or #b#t5151025##k by any chance, then how about letting me change your hairdo?\r\n#b"
    + "#L0# Haircut(EXP coupon)#l\r\n"
    + "#L1# Dye your hair(REG coupon)#l");
let item;
let hair;
if (selection == 0) {
    item = 5150030;
    selection = npc.askYesNo("If you use the EXP coupon your hair will change RANDOMLY with a chance to obtain a new experimental style that even you didn't think was possible. Are you going to use #b#t5150030##k and really change your hairstyle?");
    hair = getRandomStyle(player.getGender(), player.getHair());
} else if (selection == 1) {
    item = 5151025;
    selection = npc.askYesNo("If you use a regular coupon your hair will change RANDOMLY. Do you still want to use #b#t5151025##k and change it up?");
    hair = getRandomColor();
}
if (selection == 1) {
    if (player.hasItem(item, 1)) {
        player.loseItem(item, 1);
        player.setHair(hair);
        npc.say("Enjoy!");
    } else {
        npc.sayNext("Hmmm...it looks like you don't have our designated coupon...I'm afraid I can't give you a haircut without it. I'm sorry.");
    }
} else if (selection == 0) {
    npc.sayNext("I understand...think about it, and if you still feel like changing come talk to me.");
}