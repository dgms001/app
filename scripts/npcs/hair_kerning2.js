/**
 * Andre: Hair Salon Assistant (NPC 1052101)
 * Victoria Road: Kerning City Hair Salon (Map 103000005)
 *
 * Kerning City hair changer - random hair.
 *
 *
 */

function getRandomStyle(gender, currentHair) {
    let color = currentHair % 10;
    let styles;
    if (gender == 0)
        styles = [30130, 30350, 30190, 30110, 30180, 30050, 30040, 30160, 30770, 30620, 30550, 30520];
    else if (gender == 1)
        styles = [31060, 31090, 31020, 31130, 31120, 31140, 31330, 31010, 31520, 31440, 31750, 31620];
    let style = styles[Math.floor(Math.random() * styles.length)];
    if (npc.isHairValid(style + color)) //prefer current hair color
        style += color;
    return style;
}

function getRandomColor() {
    let array = npc.getAllHairColors();
    return array[Math.floor(Math.random() * array.length)];
}

let selection = npc.askMenu("I'm Andre, Don's assistant. Everyone calls me Andre, though. If you have a #b#t5150011##k or a #b#t5151002##k, please let me change your hairdo!\r\n"
    + "#L0# Haircut(EXP coupon)#l\r\n"
    + "#L1# Dye your hair(REG coupon)#l");
let item;
let hair;
if (selection == 0) {
    item = 5150011;
    selection = npc.askYesNo("If you use the EXP coupon your hair will change RANDOMLY with a chance to obtain a new experimental style that I came up with. Are you going to use #b#t5150011##k and really change your hairstyle?");
    hair = getRandomStyle(player.getGender(), player.getHair());
} else if (selection == 1) {
    item = 5151002;
    selection = npc.askYesNo("If you use a regular coupon your hair will change RANDOMLY. Do you still want to use #b#t5151002##k and change it up?");
    hair = getRandomColor();
}
if (selection == 1) {
    if (player.hasItem(item, 1)) {
        player.loseItem(item, 1);
        player.setHair(hair);
        npc.say("Enjoy your new and improved hairstyle!");
    } else {
        npc.sayNext("Hmmm...it looks like you don't have our designated coupon...I'm afraid I can't give you a haircut without it. I'm sorry...");
    }
} else if (selection == 0) {
    npc.sayNext("I understand...think about it, and if you still feel like changing come talk to me.");
}