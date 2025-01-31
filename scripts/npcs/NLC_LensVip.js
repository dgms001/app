/**
 * J.J.: Lens Magician (NPC 9201062)
 * New Leaf City Town Street: NLC Mall (Map 600000001)
 *
 * <insert description here>
 *
 *
 */
let res;
let isAngel = false;
let isBeta = false;
if (player.getBeginner() == 6001) {
    isAngel = npc.askAngelicBuster() != 0;
} else if (player.getBeginner() == 10000) {
    isBeta = npc.askMenu("請選擇：\r\n#b#L0#神之子：阿爾法#l\r\n#L1#神之子：貝塔#l") != 0;
}
let faces = npc.getAllEyeColors();
selection = npc.askAvatar("Hi there! I'm J.J., the one in charge of the cosmetic lenses here at NLC Shop! With our specialized machine, you can see the results of your potential treatment in advance. What kind of lens would you like to wear? Please choose the style of your liking.", faces, 5152036, isAngel, isBeta);
if (player.hasItem(5152036, 1)) {
    player.loseItem(5152036, 1);
    player.setFace(faces[selection]);
    npc.sayNext("Enjoy your new and improved cosmetic lenses!");
} else {
    npc.sayNext("I'm sorry, but I don't think you have our cosmetic lens coupon with you. We can't proceed without the coupon.");
}