var a = 0;
var text;
var selects; //記錄玩家的選項
var buynum = 0;
var itemlist = Array(

	//Array(5074000,0, 10),



	Array(5060048, 20000, 80, "賬號限購1"), //
	Array(2633609, 200000, 1, "賬號限購2"),
	Array(5062026, 20000, 20, "賬號限購3"), //皇家理髮券
	Array(5062503, 20000, 30, "賬號限購4"), //皇家整容券
	Array(5064400, 20000, 20, "賬號限購6"),
	Array(5064502, 200000, 10, "賬號限購15"),
	Array(5060086, 100000, 50, "賬號限購16"),
	Array(5062802, 10000, 50, "賬號限購7"),//五子棋
	Array(2635032, 150000, 10, "賬號限購21"),//
	Array(2048721, 100000, 20, "賬號限購19"),//
	Array(2048760, 200000, 20, "賬號限購20"),//
	Array(5060046, 500000, 10, "賬號限購11"),//
	Array(5530001, 50000, 10, "賬號限購22"),//
	Array(5060032, 100000, 20, "賬號限購17") //


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
text = "#b您可以在這裡購買每日免費物品,請選擇你想要獲得免費的物品\r\n#r注意:所有物品每日都有限制購買數量\r\n#r";
for (var i = 0; i < itemlist.length; i++) {
	text += "#b#L" + i + "##i" + itemlist[i] + ":##t" + itemlist[i] + "# 價格#r" + itemlist[i][1] + "#b楓點 每日限購#r " + (itemlist[i][2] - player.getEventValue(itemlist[i][3])) + "#b 個  \r\n";
	if (i != 0 && (i + 1) % 5 == 0) {
		text += "\r\n";
	}
}
selects = npc.askMenuA(text);
buynum = npc.askNumber("請輸入你請你輸入想要購買的數量\r\n\r\n#r1個需要" + itemlist[selects][1] + "點#r楓點#k", 0, 0, 999999);

var yes = npc.askYesNo("你想購買" + buynum + "個#r#i" + itemlist[selects][0] + "##k？\r\n你將使用掉" + (buynum * itemlist[selects][1]) + "楓點。");
if (yes == 1) {

	if (player.getLevel() < 100) {
		npc.say("100級以下不能購買");
	} else if (parseInt(player.getEventValue(itemlist[selects][3]) + buynum) > itemlist[selects][2]) {
		npc.say("您今天已經免費獲得了#i" + itemlist[selects][0] + "# " + player.getEventValue(itemlist[selects][3]) + "次.還能購買" + parseInt(itemlist[selects][2] - player.getEventValue(itemlist[selects][0])) + " 次！");
	} else if (player.getCashShopCurrency(2) > (buynum * itemlist[selects][1])) {
		if (itemlist[selects][0] == 5062009) {
			if (player.getQuestRecordEx(9615) == 0) {
				player.updateQuestRecordEx(9615, "1");
			}
		}
		player.gainItem(itemlist[selects][0], buynum)
		player.addEventValue(itemlist[selects][3], buynum, 1);
		player.modifyCashShopCurrency(2, -buynum * itemlist[selects][1]);
		npc.say("恭喜您成功購買#i" + itemlist[selects][0] + ":# #r#t" + itemlist[selects][0] + "# X " + buynum + "#k。");
	} else {
		npc.say("對不起，你沒有足夠的楓點。");
	}
	if (yes == 2) {
		player.changeMap(mapId);
	} else {
		player.runScript("限購商店");

	}
}


