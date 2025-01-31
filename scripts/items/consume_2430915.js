var currentItemQuantity = player.getAmountOfItem(2430915);
let Change = Math.floor(currentItemQuantity / 10);
if (currentItemQuantity < 10) {
    npc.say("你沒有10個碎片無法兌換");
} else {
    player.gainItem(5062500, Change);
    player.loseItem(2430915, Change * 10)
}
