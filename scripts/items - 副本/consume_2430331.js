let Skills = 80000570
if (player.getSkillLevel​(Skills) == 0){
player.setSkillLevel(Skills, 4, 1, false);
player.loseItem(npc.getItemId(), 1);
npc.sayS("#s"+Skills+"# - 我學會騎#b#fs14# #q"+Skills+"# #k#fs12#了",true);//坐騎學習騎寵
} else if (player.getSkillLevel​(Skills) > 0){
npc.sayS("我曾經學過騎#b#fs14# #q"+Skills+"# #k#fs12#了，你忘了嗎？",true);
}