if(player.hasItem(4000016,150)){
player.loseItem(4000016,150);
player.addEventValue("提交第三天材料");
npc.say("提交成功");
}else{
npc.say("提交失敗,物品不足");
}