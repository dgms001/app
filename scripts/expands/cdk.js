var currentItemQuantity = player.getAmountOfItem(4032053);
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
txt = "#fs21##e#r你好,這裡是cdk兌換中心\r\n\r\n\r\n\r\n";


txt += "GM發放後cdk為24小時有效期!!!\r\n\r\n\r\n";
txt += "等級 < 200才可領取!!!\r\n\r\n";

txt += "#b請輸入CDK兌換碼:";
txt += "";
var number = npc.askText(txt, "", 1, 20);
if (player.getLevel() < 200) {
	player.showSystemMessage("等級不足200,無法領取!!!");
} else if (number == "jiwjsjwgskshe" && player.getEventValue(number) == 0) {
	player.gainItem(2434342, 1);
	player.addEventValue(number, 1, 1);
	player.showSystemMessage("成功每日福利!!!");
	//預留口 可複製
} else if (number == "VIP666" && player.getEventValue(number) == 0) {
	//這裡給物品 其他的東西都不要更改
	player.gainItem(2434230, 3);
	player.addEventValue(number, 1, 1);
	npc.say("成功領取!!!");
	//複製到這裡即可
	} else if (number == "280" && player.getEventValue(number) == 0 && player.getLevel() <= 275) {
	//這裡給物品 其他的東西都不要更改
	player.gainItem(2434230,1);
	player.addEventValue(number, 1, 1);
	npc.say("成功領取!!!");
} else {
	npc.say("今日已領取!!!");
}