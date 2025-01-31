var a = 0;
var text;
var selects; //記錄玩家的選項
var buynum = 0;
var itemlist = Array(

	//Array(5074000,0, 10),
	Array(5060048, 2000000, 50, "楓幣限購11"), //
	Array(2003559, 5000000, 5, "楓幣限購1"), //
	Array(2003560, 5000000, 5, "楓幣限購2"), //

	Array(2022463, 10000000, 5, "楓幣限購3"), //
	Array(5121058, 3000000, 5, "楓幣限購4"), //
	Array(5121059, 5000000, 5, "楓幣限購5"), //
	Array(5121060, 8000000, 5, "楓幣限購6"), //
	Array(2023663, 10000000, 5, "楓幣限購7"), //
	Array(2023666, 10000000, 5, "楓幣限購8"), //
	Array(2023743, 5000000, 5, "楓幣限購18"), //
	Array(2023744, 5000000, 5, "楓幣限購9"), //
	Array(2023745, 10000000, 5, "楓幣限購10"), //
	Array(2022709, 5000000, 5, "楓幣限購12"), //

	Array(2434777, 5000000, 5, "楓幣限購13"), //
	Array(2434775, 5000000, 5, "楓幣限購14"), //
	Array(2434776, 5000000, 5, "楓幣限購15"), //
	Array(2434778, 5000000, 5, "楓幣限購16"), //
	Array(2434779, 5000000, 5, "楓幣限購17") //


);

//if(cm.getLevel()>=250){
//	itemlist[2] = Array(5062009,0,500); //
//	itemlist[3] = Array(5062500,0,500); //
//}else if(cm.getLevel()>=240){
//	itemlist[2] = Array(5062009,0,400); //
//	itemlist[3] = Array(5062500,0,400); //
//}else if(cm.getLevel()>=230){
//	itemlist[2] = Array(5062009,0,300); //
//	itemlist[3] = Array(5062500,0,300); //
//}else if(cm.getLevel()>=220){
//	itemlist[2] = Array(5062009,0,200); //
//	itemlist[3] = Array(5062500,0,200); //
//}
text = "#fs21##e#r你好,這裡是楓幣限購商店\r\n#r注意:所有物品每日都有限制購買數量\r\n#r";
for (var i = 0; i < itemlist.length; i++) {
	text += "#b#L" + i + "##i" + itemlist[i] + ":##t" + itemlist[i] + "# 價格#r" + itemlist[i][1] + "#b楓幣 每日限購#r " + (itemlist[i][2] - player.getEventValue(itemlist[i][3])) + "#b 個  \r\n";
	if (i != 0 && (i + 1) % 5 == 0) {
		text += "\r\n";
	}
}
selects = npc.askMenuA(text);
buynum = npc.askNumber("請輸入你請你輸入想要購買的數量\r\n\r\n#r1個需要" + itemlist[selects][1] + "點#r楓幣#k", 0, 0, 999999);

var yes = npc.askYesNo("你想購買" + buynum + "個#r#i" + itemlist[selects][0] + "##k？\r\n你將使用掉" + (buynum * itemlist[selects][1]) + "楓幣。");
if (yes == 1) {

	if (player.getLevel() < 100) {
		npc.say("100級以下不能購買");
	} else if (parseInt(player.getEventValue(itemlist[selects][3]) + buynum) > itemlist[selects][2]) {
		npc.say("您今天已經免費獲得了#i" + itemlist[selects][0] + "# " + player.getEventValue(itemlist[selects][3]) + "次.還能購買" + parseInt(itemlist[selects][2] - player.getEventValue(itemlist[selects][0])) + " 次！");
	} else if (player.hasMesos(buynum * itemlist[selects][1])) {
		if (itemlist[selects][0] == 5062009) {
			if (player.getQuestRecordEx(9615) == 0) {
				player.updateQuestRecordEx(9615, "1");
			}
		}
		player.gainItem(itemlist[selects][0], buynum)
		player.addEventValue(itemlist[selects][3], buynum, 1);
		player.gainMesos(-buynum * itemlist[selects][1]);
		npc.say("恭喜您成功購買#i" + itemlist[selects][0] + ":# #r#t" + itemlist[selects][0] + "# X " + buynum + "#k。");
	} else {
		npc.say("對不起，你沒有足夠的楓幣。");
	}
	if (yes == 2) {
		player.changeMap(mapId);
	} else {
		player.runScript("楓幣限購");

	}
}


