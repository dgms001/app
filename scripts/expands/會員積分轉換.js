item = 4036396;

txt = "";
txt += "#fs14##b目前持有#d#v" + item + "##z" + item + "#*#b[#r#c" + item + "##b]個\r\n\r\n";
txt += "持有會員積分:[#r" + player.getEventValue("會員積分") + "#b]\r\n\r\n";
txt += "";
txt += "";
txt += "";
txt += "";
txt += "#L1##v" + item + "#兌換積分#l  #L2#積分兌換#v" + item + "##l\r\n";
let selection = npc.askMenu(txt, 9062453);
i = selection;
if (i == 1) {
	selection = npc.askNumber("#fs14##b請輸入消耗的積分卡\r\n目前持有#d#v" + item + "#*#b[#r#c" + item + "##b]個\r\n", 1, 1, 9999);
	GS = selection;
	if (!player.hasItem(item, GS)) {
		npc.say("#fs14##b你並沒有足夠的#v" + item + "##r#z" + item + "#");
	} else {
		player.loseItem(item, GS);
		player.addEventValue("會員積分", GS, 1000);
		player.addEventValue("積分卡兌換積分", GS, 1000);
		//player.addAccountEventValue(items[i][3], GS);
		npc.say("#fs14##b積分卡兌換積分成功");
	}

} else if (i == 2) {
	selection = npc.askNumber("#fs14##b請輸入消耗的積分\r\n目前積分:[#r" + player.getEventValue("會員積分") + "#b]", 1, 1, player.getEventValue("會員積分"));
	GS2 = selection;
	if (player.getEventValue("會員積分") < 1) {
		npc.say("#fs14##b會員積分為0");
	} else {
		player.addEventValue("會員積分", -GS2, 1000);
		player.gainItem(item, GS2);
		player.addEventValue("積分兌換積分卡", GS, 1000);
		npc.say("#fs14##b積分兌換積分卡成功");




	}





}