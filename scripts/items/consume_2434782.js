var currentItemQuantity = player.getAmountOfItem(2434782);
let Change = Math.floor(currentItemQuantity / 10);
if (currentItemQuantity < 10) {
	npc.say("你沒有10個碎片無法兌換");
} else {
	player.gainItem(5062503, Change);
	player.loseItem(2434782, Change * 10)
}

