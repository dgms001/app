let Skills = Array(2430933, 80001014,
);
let mapA = map.getId();
if (mapA == 993001100) { //限制開啟地圖
    //player.showSystemMessage("在卡BUG頭蓋骨給你打出來 操!!");
} else if (player.getSkillLevel(Skills[1]) == 0) {
    player.setSkillLevel(Skills[1], 1, 1, false);
    player.loseItem(Skills[0], 1);
    npc.sayS("#s" + Skills[1] + "# - 我學會騎#b#fs14# #q" + Skills[1] + "# #k#fs12#了", true);//坐騎學習騎寵
} else if (player.getSkillLevel(Skills[1]) > 0) {
    npc.sayS("我曾經學過騎#b#fs14# #q" + Skills[1] + "# #k#fs12#了，你忘了嗎？", true);
}