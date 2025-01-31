if (player.getCashShopCurrency(1) < 1000) {
	npc.say("#fs16##b#e樂豆不足，無法購買");
} else {
	player.addEventValue("NV幣購買周", 1, 7);
	player.gainItem(4310237, 1);
	player.modifyCashShopCurrency(1, -1000);
	npc.say("購買成功!");
}