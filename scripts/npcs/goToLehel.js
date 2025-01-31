/*  
 *
 *  功能：[蘭克蘭]穆託 前往拉克蘭
 *
 *
 */
if (player.isQuestCompleted(34218)) {
    if (player.getLevel() >= 220) {
        let sel = npc.askYesNo("#b穆託#k…我現在吃飽了…#b需要我動動嗎#k…？\r\n\r\n（如果穆託讓路，就能沿著神祕河畔，前往下一地區了。）#k", 3003165); //0笑  1怒 2哭 3正常
        if (sel == 1) {
            if (!player.isQuestCompleted(34300)) {
                player.changeMap(450003700, 0);
            } else {
                player.changeMap(450003000, 0);
            }
        } else {
            npc.say("想去了，可以找我。");
        }
    } else {
        npc.say("220級以上，才能放你過去。");
    }
}