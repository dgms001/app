/*
 *  @名稱：    次元傳送口
 *  @地圖：    維多利亞 六岔路口
 *  @功能：    傳送到萬神殿
 */
selection = npc.askYesNo("要通過#p1002105#移動到萬神殿嗎？");
if (selection == 1) {
    player.changeMap(400000001,1);
} else {
    dispose();
}