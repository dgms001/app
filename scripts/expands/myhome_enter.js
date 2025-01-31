var zx37 = "#fMap/MapHelper.img/weather/maple/1#";//楓葉
var zx38 = "#fMap/MapHelper.img/weather/maple/2#";//楓葉

txt = "";
//txt+= "getMyHomeType:"+player.getMyHomeType()+"\r\n";
txt += "#fs20##r\t\t  #e我的小屋\r\n#n#k";
txt += "" + zx37 + zx38 + zx37 + zx38 + zx37 + zx38 + zx37 + zx38 + zx37 + zx38 + zx37 + zx38 + zx37 + zx38 + zx37 + zx38 + zx37 + "\r\n";
txt += "#fs14##b";

txt += "請玩家盡量都以本尊執行小屋相關系統\r\n\r\n";
txt += "";

if (player.getChannel() != 1) {
	txt += "請玩家務必於1S分流使用小屋相關的腳本及物品!\r\n";
} else if (player.getMyHomeType() == 0) {
	if (!player.isQuestCompleted(500763)) {
		txt += "#L0#一鍵開通小屋(需消耗50萬楓點)#l\r\n\r\n";
	}
} else {
	txt += "#L1#回去溫暖的家#l\r\n\r\n\r\n";
	if (player.getEventValue("安逸的菇菇小屋擴建") < 1) {
		txt += "#r檢測到尚未擴建安逸的菇菇小屋\r\n";
		txt += "#r#L4#購買#v2633483##b(需500萬楓點)#l\r\n";
	}

	if (player.getEventValue("安逸的菇菇小屋擴建") >= 1 && player.getEventValue("精緻的洋房擴建") >= 1 && player.getEventValue("海邊的陽台房屋擴建") >= 1 && player.getEventValue("蓮花池庭園瓦屋擴建") >= 1) {


	} else {
		if (player.getEventValue("安逸的菇菇小屋擴建") >= 1) {
			txt += "#r檢測玩家以興建#d#v2633483##z2633483#\r\n";
			txt += "#r並開通下方尊榮小屋\r\n";
			txt += "#r記得房子要興建完畢才能再次使用設計圖\r\n";
			if (player.getEventValue("精緻的洋房擴建") < 1) {
				txt += "#r#L5#購買#v2633484##b(需500萬楓點)#l\r\n";
			}
			if (player.getEventValue("海邊的陽台房屋擴建") < 1) {
				txt += "#r#L6#購買#v2633485##b(需500萬楓點)#l\r\n";
			}
			if (player.getEventValue("蓮花池庭園瓦屋擴建") < 1) {
				txt += "#r#L7#購買#v2634289##b(需500萬楓點)#l\r\n";
			}
		}


	}







	if (player.isGm()) {

		txt += "\r\n\r\n\r\ngm\r\n";
		if (!player.isQuestCompleted(65433)) {
			txt += "#L2#珍妮任務#l\r\n";
		}
		if (!player.isQuestCompleted(64590)) {
			txt += "#L3#小屋任務#l\r\n";
		}
		txt += "#L100#擴建材料#l\r\n";
	}
	txt += "\r\n";
}
let sel = npc.askMenu(txt);
// player.addHomeDrawing()
if (sel == 0) {

	if (player.getCashShopCurrency(2) < 500000) {
		npc.say("#fs14##b玩家楓點不足");
	} else {
		// ui打開
		player.updateQuestRecordEx(500767, "1", "1");
		player.updateQuestRecordEx(500767, "2", "1");
		player.updateQuestRecordEx(500767, "3", "1");
		player.updateQuestRecordEx(500767, "4", "1");
		player.updateQuestRecordEx(500767, "5", "1");
		player.updateQuestRecordEx(500767, "6", "1");
		player.updateQuestRecordEx(500767, "7", "1");
		player.updateQuestRecordEx(500767, "managerXpos", "50");//不確定這是捨
		player.updateQuestRecordEx(500767, "managerYpos", "50");//??
		player.updateWorldShareRecord(500767, player.getQuestRecordEx(500767));


		player.updateQuestRecordEx(501465, "askR", "1");//艾咪 基礎數值寫入腳色上
		player.updateQuestRecordEx(501465, "s1", "5");
		player.updateQuestRecordEx(501465, "s2", "1");
		player.updateQuestRecordEx(501465, "s3", "2");
		player.updateQuestRecordEx(501465, "s4", "1");
		player.updateQuestRecordEx(501465, "s5", "1");
		player.updateQuestRecordEx(501465, "bonusTalk", "0");

		player.updateQuestRecordEx(501466, "askR", "1");//阿爾文 基礎數值寫入腳色上
		player.updateQuestRecordEx(501466, "s1", "3");
		player.updateQuestRecordEx(501466, "s2", "5");
		player.updateQuestRecordEx(501466, "s3", "2");
		player.updateQuestRecordEx(501466, "s4", "0");
		player.updateQuestRecordEx(501466, "s5", "1");
		player.updateQuestRecordEx(501466, "bonusTalk", "0");

		player.updateQuestRecordEx(501467, "askR", "1");//管理人基礎數值寫入腳色上
		player.updateQuestRecordEx(501467, "s1", "2");
		player.updateQuestRecordEx(501467, "s2", "1");
		player.updateQuestRecordEx(501467, "s3", "0");
		player.updateQuestRecordEx(501467, "s4", "5");
		player.updateQuestRecordEx(501467, "s5", "3");
		player.updateQuestRecordEx(501467, "bonusTalk", "0");
		player.updateWorldShareRecord(501465, player.getQuestRecordEx(501465));//更新至帳號紀錄存檔
		player.updateWorldShareRecord(501466, player.getQuestRecordEx(501466));
		player.updateWorldShareRecord(501467, player.getQuestRecordEx(501467));


		for (i = 0; i < 22; i++) {//完成新手任務
			player.completeQuest((64590 + i), 0);
		}

		for (i = 19; i <= 33; i++) {//小屋任務
			player.completeQuest((64600 + i), 0);
		}
		var myDate = new Date();
		var s = myDate.getFullYear() + "/" + appendZero(myDate.getMonth() + 1) + "/" + appendZero(myDate.getDate());
		var sDate = s.substr(2);
		player.updateQuestRecordEx(64612, "housing", "4");
		player.updateQuestRecordEx(64612, "furniture", "2");

		player.completeQuest(500763, 0);
		player.updateWorldShareRecord(500767, player.getQuestRecordEx(500767));
		//房屋信息管理
		player.updateQuestRecordEx(500773, "askR", "0");
		player.updateQuestRecordEx(500773, "managerHide", "1");
		player.updateQuestRecordEx(500773, "bonusTalk", "0");
		//player.updateQuestRecordEx(500773, "s5", "-45");
		player.updateQuestRecordEx(500773, "resetDate", sDate);
		player.updateQuestRecordEx(500773, "affDown", "19/12/31");
		player.updateWorldShareRecord(500773, player.getQuestRecordEx(500773));

		//房屋名稱
		player.updateQuestRecordEx(500763, "name", player.getName());
		player.updateWorldShareRecord(500763, player.getQuestRecordEx(500763));
		player.createMyHome();//創建我的家	
		player.modifyCashShopCurrency(2, -500000);
	}




} else if (sel == 1) {
	player.goMyHome();//回家
} else if (sel == 2) {

	for (i = 33; i <= 45; i++) {//珍妮任務
		player.completeQuest((65400 + i), 0);
	}
	player.updateQuestRecordEx(501024, "man", "1");
	player.updateWorldShareRecord(501024, player.getQuestRecordEx(501024));
	player.completeQuest(65447, 0);

} else if (sel == 3) {


	for (i = 0; i < 22; i++) {//完成新手任務 
		player.completeQuest((64590 + i), 0);
	}
	for (i = 19; i <= 33; i++) {//小屋任務
		player.completeQuest((64600 + i), 0);
	}

} else if (sel == 4) {
	if (player.getCashShopCurrency(2) < 5000000) {
		npc.say("#fs14##b楓點不足");
	} else {
		player.modifyCashShopCurrency(2, -5000000);
		player.gainItem(2633483, 1);
	}
} else if (sel == 5) {
	if (player.getCashShopCurrency(2) < 5000000) {
		npc.say("#fs14##b楓點不足");
	} else {
		player.modifyCashShopCurrency(2, -5000000);
		player.gainItem(2633484, 1);
	}
} else if (sel == 6) {
	if (player.getCashShopCurrency(2) < 5000000) {
		npc.say("#fs14##b楓點不足");
	} else {
		player.modifyCashShopCurrency(2, -5000000);
		player.gainItem(2633485, 1);
	}
} else if (sel == 7) {
	if (player.getCashShopCurrency(2) < 5000000) {
		npc.say("#fs14##b楓點不足");
	} else {
		player.modifyCashShopCurrency(2, -5000000);
		player.gainItem(2634289, 1);
	}
} else if (sel == 100) {
	for (i = 0; i <= 20; i++) {
		if (player.isQuestStarted(501416 + i)) {
			player.gainItem((4036742 + i), 30);
		}
	}
	for (i = 0; i <= 6; i++) {
		if (player.isQuestStarted(501951 + i)) {
			player.gainItem((4036837 + i), 30);
		}
	}

}



function appendZero(s) {
	return ("00" + s).substr((s + "").length);
}