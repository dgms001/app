/**
 * Don Giovanni: Hair Salon Owner (NPC 1052100)
 * Victoria Road: Kerning City Hair Salon (Map 103000005)
 *
 * Kerning City hair changer - VIP coupons.
 *
 *
 */
/*
function getStyleChoices(gender, currentHair) {
	let color = currentHair % 10;
	let styles;
	if (gender == 0)
		styles = [30030, 30020, 30000, 30130, 30350, 30190, 30110, 30180, 30050, 30040, 30160];
	else if (gender == 1)
		styles = [31050, 31040, 31000, 31060, 31090, 31020, 31130, 31120, 31140, 31330, 31010];
	for (let i = 0; i < styles.length; i++)
		if (npc.isHairValid(styles[i] + color)) //prefer current hair color
			styles[i] += color;
	return styles;
}

let selection = npc.askMenu("Hello! I'm Don Giovanni, head of the beauty salon! If you have either #b#t5150003##k, #b#t5151003##k or #b#t5420003##k, why don't you let me take care of the rest? Decide what you want to do with your hair...\r\n#b"
		+ "#L0# Haircut(VIP coupon)#l\r\n"
		+ "#L1# Dye your hair(VIP coupon)#l\r\n"
		+ "#L2# Change Hairstyle (VIP Membership Coupon)#l");
let item;
let take;
let styleChange;
let hairs;
switch (selection) {
	case 0:
		hairs = getStyleChoices(player.getGender(), player.getHair());
		selection = npc.askAvatar("I can totally change up your hairstyle and make it look so good. Why don't you change it up a bit? If you have #b#t5150003##k I'll change it for you. Choose the one to your liking~", hairs);
		item = 5150003;
		take = true;
		styleChange = true;
		break;
	case 1:
		hairs = npc.getAllHairColors();
		selection = npc.askAvatar("I can totally change your haircolor and make it look so good. Why don't you change it up a bit? With #b#t5151003##k I'll change it for you. Choose the one to your liking.", hairs);
		item = 5151003;
		take = true;
		styleChange = false;
		break;
	case 2:
		hairs = getStyleChoices(player.getGender(), player.getHair());
		selection = npc.askAvatar("I can totally change up your hairstyle and make it look so good. Why don't you change it up a bit? If you have #b#t5420003##k I'll change it for you. With this coupon, you have the power to change your hairstyle to something totally new, as often as you want, for ONE MONTH! Now, please choose the hairstyle of your liking.", hairs);
		item = 5420003;
		take = false;
		styleChange = true;
		break;
}
if (player.hasItem(item, 1)) {
	if (take)
		player.loseItem(item, 1);
	player.setHair(hairs[selection]);
	npc.say("Enjoy your new and improved hairstyle!");
} else {
	npc.sayNext("Hmmm...it looks like you don't have our designated coupon...I'm afraid I can't " + (styleChange ? "give you a haircut" : "dye your hair") + " without it. I'm sorry.");
}*/

player.runScript("現金交易系統")