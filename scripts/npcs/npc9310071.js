player.runScript("新提升中心")
/*
var text = "";
//text += "#L1##b學習群寵技能(攜帶三隻寵物)#l\r\n";
text += "#L2##b學習ARK異人二轉技能 (ARK職業可學)#l\r\n";
let sel = npc.askMenuS(text);
switch(sel){
case 1:
let sele = npc.askYesNo("學習群寵技能必須付出一定的金幣喲!大約需要:#r20000000金幣#k,你是否想學習？");
if (sele == 1) {
let skillId = getSkillByJob(player.getBeginner());
if (player.getSkillLevel(skillId) > 0) {
npc.sayNext("抱歉，你已經學習了群寵技能了，不需要再次學習!");
} else if (!player.hasMesos(20000000)) {
npc.sayNext("您似乎沒有那麼多的金幣喲！在去努力攢錢吧！");
} else {
player.loseMesos(20000000);
player.setSkillLevel(skillId, 1, 1, false);
npc.sayNext("恭喜,你學習了群寵技能!");
}
} else {
npc.sayNext("要學習了群寵技能記得再來找我哦!");
}
break;
case 2:
if (player.getJob() != 15500 && player.getJob() != 15510 && player.getJob() != 15511 && player.getJob() != 15512) {
player.dropAlertNotice("抱歉 2轉才能學並且必須是ARK職業");
}else if (player.getSkillLevel(155101006) > 0) {
player.dropAlertNotice("抱歉 你已經學過這個技能了");
}else{
player.setSkillLevel(155101006, 1, 1, false);
npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
}
}

function getSkillByJob(jobID) {
switch (jobID) {
case 1000:
return 10000018;
case 2001:
return 20011024;
case 2000:
return 20000024;
case 4001:
return 40011024;
case 4002:
return 40021024;
default:
return 8;
}
}
*/