let Skills = 80001304
if (player.getSkillLevel​(Skills) == 0){
player.setSkillLevel(Skills, 1, 1, false);
player.loseItem(2431856, 1);
npc.askMenuS("#s"+Skills+"# - 我學會騎#b#fs14# #q"+Skills+"# #k#fs12#了",true);//坐騎學習騎寵
}
npc.askMenuS("我曾經學過騎#b#fs14# #q"+Skills+"# #k#fs12#了",true);