var currentItemQuantity = player.getAmountOfItem(2431893);
let Change = Math.floor(currentItemQuantity / 10);
if (currentItemQuantity < 10) {
	npc.say("你沒有10個碎片無法兌換");
} else {
	player.gainItem(5062009, Change);
	player.loseItem(2431893, Change * 10)
}

