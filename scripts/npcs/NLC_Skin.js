/**
 * Miranda: Dermatologist (NPC 9201065)
 * New Leaf City Town Street: NLC Mall (Map 600000001)
 *
 * New Leaf City skin changer.
 *
 *
 */

let skinColorChoices = npc.getAllSkinColors();

npc.sayNext("Well, hello! Welcome to the NLC Skin-Care! Would you like to have a firm, tight, healthy looking skin like mine?  With #b#t5153009##k, you can let us take care of the rest and have the kind of skin you've always wanted~!");
let selection = npc.askAvatar("With our specialized machine, you can see your expected results after treatment in advance. What kind of skin-treatment would you like to do? Choose your preferred style.", skinColorChoices);

if (player.hasItem(5153009, 1)) {
    player.loseItem(5153009, 1);
    player.setSkin(skinColorChoices[selection]);
    npc.sayNext("Enjoy your new and improved skin!");
} else {
    npc.sayNext("Um...you don't have the skin-care coupon you need to receive the treatment. Sorry, but I am afraid we can't do it for you.");
}