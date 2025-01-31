let Skills = Array(2633035,80012096,
);
if (player.getSkillLevel​(Skills[1]) == 0){
player.setSkillLevel(Skills[1], 2, 2, false);
player.loseItem(Skills[0], 1);
npc.sayS("#s"+Skills[1]+"# - 我學會騎#b#fs14# #q"+Skills[1]+"# #k#fs12#了",true);//坐騎學習騎寵
} else if (player.getSkillLevel​(Skills[1]) > 0){
npc.sayS("我曾經學過騎#b#fs14# #q"+Skills[1]+"# #k#fs12#了，你忘了嗎？",true);
}