/* This is a piece of code

 * author dgms

 * global player

 * Contact QQ 381991414 DC dgms#6650

 * function vskill

 */
if (player.gainVCore(10000024)) {
        player.loseItem(npc.getItemId(), npc.getSlot(), 1);
} else {
        player.dropAlertNotice("V核心數量已經達到最大值!");
}