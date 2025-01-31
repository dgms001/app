if(player.hasItem(4000000,150)){
player.loseItem(4000000,150);
player.addEventValue("提交第四天材料");
npc.say("提交成功");
}else{
npc.say("提交失敗,物品不足");
}