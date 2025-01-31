var currentItemQuantity = player.getAmountOfItem(2431894);
let Change = Math.floor(currentItemQuantity / 10);
if (currentItemQuantity < 10) {
	npc.say("你沒有10個碎片無法兌換");
} else {
	player.gainItem(5062010, Change);
	player.loseItem(2431894, Change * 10)
}

