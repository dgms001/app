//4是其他欄 3是裝飾欄


var text = "";


if (player.getEventValue("圓夢贊助10000選擇") == 2) {

	text += "#fs18#";
	text += "#r購買第三包自選禮包#b\r\n";
	text += "#r[下方道具澤一]\r\n#b";
	text += "#fs11#";
	text += "#L5##v1122267##z1122267#*1  全屬性100#r[領取]#l\r\n#b";
	text += "#L6##v1132246##z1132246#*1  全屬性100#r[領取]#l\r\n#b";
	text += "#L7##v1113075##z1113075#*1       全屬性100#r[領取]#l\r\n#b";
	text += "#L8##v1032223##z1032223#*1       全屬性100#r[領取]#l\r\n#b";
	text += "#L14##v1182158##z1182158#*1              全屬性100#r[領取]#l\r\n\r\n";

} else if (player.getEventValue("圓夢贊助10000選擇") == 5) {

	text += "#fs18#";
	text += "#r購買第六包自選禮包#b\r\n";
	text += "#r[下方六擇一][下方六擇一][下方六擇一]\r\n#b";
	text += "#fs11#";
	text += "#L9##v1122430##z1122430#*1            全屬性100#r[領取]#l\r\n#b";
	text += "#L10##v1022278##z1022278#*1         全屬性100#r[領取]#l\r\n#b";
	text += "#L11##v1132308##z1132308#*1            全屬性100#r[領取]#l\r\n#b";
	text += "#L12##v1113196##z1113196#*1         全屬性100#r[領取]#l\r\n#b";
	text += "#L13##v1012632##z1012632#*1         全屬性100#r[領取]#l\r\n#b";
	text += "#L15##v2633926##z2633926#*1  全屬性100#r[領取]#l\r\n\r\n";

} else if (player.getEventValue("圓夢贊助10000選擇") == 8) {

	text += "#fs18#";
	text += "#r購買第九包自選禮包#b\r\n";
	text += "#r[下方六擇一][下方六擇一][下方六擇一]\r\n#b";
	text += "#fs11#";
	text += "#L16##v1032316##z1032316#*1        全屬性100#r[領取]#l\r\n#b";
	text += "#L17##v1113306##z1113306#*1            全屬性100#r[領取]#l\r\n#b";
	text += "#L18##v1182285##z1182285#*1            全屬性100#r[領取]#l\r\n#b";
	text += "#L19##v1113211##z1113211#*1            全屬性100#r[領取]#l\r\n#b";
	text += "#L20##v1672075##z1672075#*1          全屬性100#r[領取]#l\r\n#b";
	text += "#L21##v2633927##z2633927#*1   全屬性100#r[領取]#l\r\n\r\n";

} else {

	text += "#fs15#";
	text += "#d每開啟三箱/六箱/九箱禮包,開啟自選禮包\r\n[#r開啟九次重置#b]\r\n";
	text += "#fs14#";
	text += "#v2633918##z2633918##r*200#b\r\n";
	text += "#v4251202##z4251202##r*1#b\r\n";
	text += "#v2644008##z2644008##r*1#b\r\n";
	text += "#v2437111##z2437111##r*30#b\r\n";
	text += "#v5064400##z5064400##r*30#b\r\n";
	text += "#v5062026##z5062026##r*100#b\r\n";
	text += "#v4032053##z4032053##r*9999#b\r\n\r\n";
	text += "#fs14##d";
	text += "\t\t\t\t#L3#點我開啟#l";
}
let sel = npc.askMenuS("" + text, true);

if (sel == 3) {//普通
	player.gainItem(2633918, 200);//歐皇
	player.gainItem(4251202, 1);//附加石
	player.gainItem(2644008, 1);//追加
	player.gainItem(2437111, 30);//榮耀卷
	player.gainItem(5064400, 30);//回復卡
	player.gainItem(5062026, 100);//結合
	player.gainItem(4032053, 9999);//楓景
	player.addEventValue("圓夢贊助10000選擇", 1, 1000);
	player.loseItem(2438675, 1);
	npc.broadcastPlayerNotice(4, "[ 玩家 ]  " + player.getName() + "  開啟本月贊助活動禮箱,感謝支持!!!");


	//這是三次自選
} else if (sel == 5) {//3
	if (player.getFreeSlots(1) < 1) {
		npc.say("#fs14##b請先確保裝備欄位都空1格以上!");
	} else {
		var toDrop = player.makeItemWithId(1122267);
		toDrop.setStr(100); //裝備力量
		toDrop.setDex(100); //裝備敏捷
		toDrop.setInt(100); //裝備智力
		toDrop.setLuk(100); //裝備運氣
		toDrop.setPad(100); //物理攻擊
		toDrop.setMad(100); //魔法攻擊
		toDrop.setMaxHp(1000); //血量 
		toDrop.setMaxMp(1000); //魔法		
		toDrop.setBossDamageR(10);
		toDrop.setIgnorePDR(10);
		toDrop.setDamR(10);
		player.gainItem(toDrop)
		player.gainItem(4251202, 2);//附加石
		player.gainItem(2633918, 200);//歐皇
		player.gainItem(2644008, 3);//追加
		player.gainItem(2437111, 50);//榮耀卷
		player.gainItem(5064400, 50);//回復卡
		player.gainItem(5062026, 100);//結合
		player.addEventValue("圓夢贊助10000選擇", 1, 1000);
		player.loseItem(2438675, 1);
		npc.broadcastPlayerNotice(4, "[ 玩家 ]  " + player.getName() + "  開啟本月贊助第三包自選活動禮箱,感謝支持!!!");
	}
} else if (sel == 6) {//3
	if (player.getFreeSlots(1) < 1) {
		npc.say("#fs14##b請先確保裝備欄位都空1格以上!");
	} else {
		var toDrop = player.makeItemWithId(1132246);
		toDrop.setStr(100); //裝備力量
		toDrop.setDex(100); //裝備敏捷
		toDrop.setInt(100); //裝備智力
		toDrop.setLuk(100); //裝備運氣
		toDrop.setPad(100); //物理攻擊
		toDrop.setMad(100); //魔法攻擊 
		toDrop.setMaxHp(1000); //血量 
		toDrop.setMaxMp(1000); //魔法
		toDrop.setBossDamageR(10);
		toDrop.setIgnorePDR(10);
		toDrop.setDamR(10);
		player.gainItem(toDrop)
		player.gainItem(4251202, 2);//附加石
		player.gainItem(2633918, 200);//歐皇
		player.gainItem(2644008, 3);//追加
		player.gainItem(2437111, 50);//榮耀卷
		player.gainItem(5064400, 50);//回復卡
		player.gainItem(5062026, 100);//結合
		player.addEventValue("圓夢贊助10000選擇", 1, 1000);
		player.loseItem(2438675, 1);
		npc.broadcastPlayerNotice(4, "[ 玩家 ]  " + player.getName() + "  開啟本月贊助第三包自選活動禮箱,感謝支持!!!");
	}
} else if (sel == 7) {//3
	if (player.getFreeSlots(1) < 1) {
		npc.say("#fs14##b請先確保裝備欄位都空1格以上!");
	} else {
		var toDrop = player.makeItemWithId(1113075);
		toDrop.setStr(100); //裝備力量
		toDrop.setDex(100); //裝備敏捷
		toDrop.setInt(100); //裝備智力
		toDrop.setLuk(100); //裝備運氣
		toDrop.setPad(100); //物理攻擊
		toDrop.setMad(100); //魔法攻擊 
		toDrop.setMaxHp(1000); //血量 
		toDrop.setMaxMp(1000); //魔法
		toDrop.setBossDamageR(10);
		toDrop.setIgnorePDR(10);
		toDrop.setDamR(10);
		player.gainItem(toDrop)
		player.gainItem(4251202, 2);//附加石
		player.gainItem(2633918, 200);//歐皇
		player.gainItem(2644008, 3);//追加
		player.gainItem(2437111, 50);//榮耀卷
		player.gainItem(5064400, 50);//回復卡
		player.gainItem(5062026, 100);//結合
		player.addEventValue("圓夢贊助10000選擇", 1, 1000);
		player.loseItem(2438675, 1);
		npc.broadcastPlayerNotice(4, "[ 玩家 ]  " + player.getName() + "  開啟本月贊助第三包自選活動禮箱,感謝支持!!!");
	}
	//這是3
} else if (sel == 8) {//3
	if (player.getFreeSlots(1) < 1) {
		npc.say("#fs14##b請先確保裝備欄位都空1格以上!");
	} else {
		var toDrop = player.makeItemWithId(1032223);
		toDrop.setStr(100); //裝備力量
		toDrop.setDex(100); //裝備敏捷
		toDrop.setInt(100); //裝備智力
		toDrop.setLuk(100); //裝備運氣
		toDrop.setPad(100); //物理攻擊
		toDrop.setMad(100); //魔法攻擊 
		toDrop.setMaxHp(1000); //血量 
		toDrop.setMaxMp(1000); //魔法
		toDrop.setBossDamageR(10);
		toDrop.setIgnorePDR(10);
		toDrop.setDamR(10);
		player.gainItem(toDrop)
		player.gainItem(4251202, 2);//附加石
		player.gainItem(2633918, 200);//歐皇
		player.gainItem(2644008, 3);//追加
		player.gainItem(2437111, 50);//榮耀卷
		player.gainItem(5064400, 50);//回復卡
		player.gainItem(5062026, 100);//結合
		player.addEventValue("圓夢贊助10000選擇", 1, 1000);
		player.loseItem(2438675, 1);
		npc.broadcastPlayerNotice(4, "[ 玩家 ]  " + player.getName() + "  開啟本月贊助第三包自選活動禮箱,感謝支持!!!");
	}
	//這是5
} else if (sel == 9) {//5
	if (player.getFreeSlots(1) < 1) {
		npc.say("#fs14##b請先確保裝備欄位都空1格以上!");
	} else {
		var toDrop = player.makeItemWithId(1122430);
		toDrop.setStr(100); //裝備力量
		toDrop.setDex(100); //裝備敏捷
		toDrop.setInt(100); //裝備智力
		toDrop.setLuk(100); //裝備運氣
		toDrop.setPad(100); //物理攻擊
		toDrop.setMad(100); //魔法攻擊 
		toDrop.setMaxHp(1000); //血量 
		toDrop.setMaxMp(1000); //魔法
		toDrop.setBossDamageR(10);
		toDrop.setIgnorePDR(10);
		toDrop.setDamR(10);
		player.gainItem(toDrop)
		player.gainItem(4251202, 4);//附加石
		player.gainItem(2633918, 200);//歐皇
		player.gainItem(2644008, 4);//追加
		player.gainItem(2437111, 50);//榮耀卷
		player.gainItem(5064400, 50);//回復卡
		player.gainItem(5062026, 150);//結合
		player.addEventValue("圓夢贊助10000選擇", 1, 1000);
		player.loseItem(2438675, 1);
		npc.broadcastPlayerNotice(4, "[ 玩家 ]  " + player.getName() + "  開啟本月贊助第六包自選活動禮箱,感謝支持!!!");
	}
} else if (sel == 10) {//5
	if (player.getFreeSlots(1) < 1) {
		npc.say("#fs14##b請先確保裝備欄位都空1格以上!");
	} else {
		var toDrop = player.makeItemWithId(1022278);
		toDrop.setStr(100); //裝備力量
		toDrop.setDex(100); //裝備敏捷
		toDrop.setInt(100); //裝備智力
		toDrop.setLuk(100); //裝備運氣
		toDrop.setPad(100); //物理攻擊
		toDrop.setMad(100); //魔法攻擊 
		toDrop.setMaxHp(1000); //血量 
		toDrop.setMaxMp(1000); //魔法
		toDrop.setBossDamageR(10);
		toDrop.setIgnorePDR(10);
		toDrop.setDamR(10);
		player.gainItem(toDrop)
		player.gainItem(4251202, 4);//附加石
		player.gainItem(2633918, 200);//歐皇
		player.gainItem(2644008, 4);//追加
		player.gainItem(2437111, 50);//榮耀卷
		player.gainItem(5064400, 50);//回復卡
		player.gainItem(5062026, 150);//結合
		player.addEventValue("圓夢贊助10000選擇", 1, 1000);
		player.loseItem(2438675, 1);
		npc.broadcastPlayerNotice(4, "[ 玩家 ]  " + player.getName() + "  開啟本月贊助第六包自選活動禮箱,感謝支持!!!");
	}
	//這是0
} else if (sel == 11) {//9
	if (player.getFreeSlots(1) < 1) {
		npc.say("#fs14##b請先確保裝備欄位都空1格以上!");
	} else {
		var toDrop = player.makeItemWithId(1132308);
		toDrop.setStr(100); //裝備力量
		toDrop.setDex(100); //裝備敏捷
		toDrop.setInt(100); //裝備智力
		toDrop.setLuk(100); //裝備運氣
		toDrop.setPad(100); //物理攻擊
		toDrop.setMad(100); //魔法攻擊 
		toDrop.setMaxHp(1000); //血量 
		toDrop.setMaxMp(1000); //魔法
		toDrop.setBossDamageR(10);
		toDrop.setIgnorePDR(10);
		toDrop.setDamR(10);
		player.gainItem(toDrop)
		player.gainItem(4251202, 4);//附加石
		player.gainItem(2633918, 200);//歐皇
		player.gainItem(2644008, 4);//追加
		player.gainItem(2437111, 50);//榮耀卷
		player.gainItem(5064400, 50);//回復卡
		player.gainItem(5062026, 150);//結合
		player.addEventValue("圓夢贊助10000選擇", 1, 1000);
		player.loseItem(2438675, 1);
		npc.broadcastPlayerNotice(4, "[ 玩家 ]  " + player.getName() + "  開啟本月贊助第六包自選活動禮箱,感謝支持!!!");
	}
} else if (sel == 12) {//9
	if (player.getFreeSlots(1) < 1) {
		npc.say("#fs14##b請先確保裝備欄位都空1格以上!");
	} else {
		var toDrop = player.makeItemWithId(1113196);
		toDrop.setStr(100); //裝備力量
		toDrop.setDex(100); //裝備敏捷
		toDrop.setInt(100); //裝備智力
		toDrop.setLuk(100); //裝備運氣
		toDrop.setPad(100); //物理攻擊
		toDrop.setMad(100); //魔法攻擊 
		toDrop.setMaxHp(1000); //血量 
		toDrop.setMaxMp(1000); //魔法
		toDrop.setBossDamageR(10);
		toDrop.setIgnorePDR(10);
		toDrop.setDamR(10);
		player.gainItem(toDrop)
		player.gainItem(4251202, 4);//附加石
		player.gainItem(2633918, 200);//歐皇
		player.gainItem(2644008, 4);//追加
		player.gainItem(2437111, 50);//榮耀卷
		player.gainItem(5064400, 50);//回復卡
		player.gainItem(5062026, 150);//結合
		player.addEventValue("圓夢贊助10000選擇", 1, 1000);
		player.loseItem(2438675, 1);
		npc.broadcastPlayerNotice(4, "[ 玩家 ]  " + player.getName() + "  開啟本月贊助第六包自選活動禮箱,感謝支持!!!");
	}
} else if (sel == 13) {//9
	if (player.getFreeSlots(1) < 1) {
		npc.say("#fs14##b請先確保裝備欄位都空1格以上!");
	} else {
		var toDrop = player.makeItemWithId(1012632);
		toDrop.setStr(100); //裝備力量
		toDrop.setDex(100); //裝備敏捷
		toDrop.setInt(100); //裝備智力
		toDrop.setLuk(100); //裝備運氣
		toDrop.setPad(100); //物理攻擊
		toDrop.setMad(100); //魔法攻擊 
		toDrop.setMaxHp(1000); //血量 
		toDrop.setMaxMp(1000); //魔法
		toDrop.setBossDamageR(10);
		toDrop.setIgnorePDR(10);
		toDrop.setDamR(10);
		player.gainItem(toDrop)
		player.gainItem(4251202, 4);//附加石
		player.gainItem(2633918, 200);//歐皇
		player.gainItem(2644008, 4);//追加
		player.gainItem(2437111, 50);//榮耀卷
		player.gainItem(5064400, 50);//回復卡
		player.gainItem(5062026, 150);//結合
		player.addEventValue("圓夢贊助10000選擇", 1, 1000);
		player.loseItem(2438675, 1);
		npc.broadcastPlayerNotice(4, "[ 玩家 ]  " + player.getName() + "  開啟本月贊助第六包自選活動禮箱,感謝支持!!!");
	}
} else if (sel == 14) {//3
	if (player.getFreeSlots(1) < 1) {
		npc.say("#fs14##b請先確保裝備欄位都空1格以上!");
	} else {
		var toDrop = player.makeItemWithId(1182158);
		toDrop.setStr(100); //裝備力量
		toDrop.setDex(100); //裝備敏捷
		toDrop.setInt(100); //裝備智力
		toDrop.setLuk(100); //裝備運氣
		toDrop.setPad(100); //物理攻擊
		toDrop.setMad(100); //魔法攻擊 
		toDrop.setMaxHp(1000); //血量 
		toDrop.setMaxMp(1000); //魔法
		toDrop.setBossDamageR(10);
		toDrop.setIgnorePDR(10);
		toDrop.setDamR(10);
		player.gainItem(toDrop)
		player.gainItem(4251202, 2);//附加石
		player.gainItem(2633918, 200);//歐皇
		player.gainItem(2644008, 3);//追加
		player.gainItem(2437111, 50);//榮耀卷
		player.gainItem(5064400, 50);//回復卡
		player.gainItem(5062026, 100);//結合
		player.addEventValue("圓夢贊助10000選擇", 1, 1000);
		player.loseItem(2438675, 1);
		npc.broadcastPlayerNotice(4, "[ 玩家 ]  " + player.getName() + "  開啟本月贊助第三包自選活動禮箱,感謝支持!!!");
	}
} else if (sel == 15) {//9
	if (player.getFreeSlots(1) < 1) {
		npc.say("#fs14##b請先確保裝備欄位都空1格以上!");
	} else {
		player.gainItem(2633926, 1);//魔導書
		player.gainItem(4251202, 4);//附加石
		player.gainItem(2633918, 200);//歐皇
		player.gainItem(2644008, 4);//追加
		player.gainItem(2437111, 50);//榮耀卷
		player.gainItem(5064400, 50);//回復卡
		player.gainItem(5062026, 150);//結合
		player.addEventValue("圓夢贊助10000選擇", 1, 1000);
		player.loseItem(2438675, 1);
		npc.broadcastPlayerNotice(4, "[ 玩家 ]  " + player.getName() + "  開啟本月贊助第六包自選活動禮箱,感謝支持!!!");
	}
} else if (sel == 16) {//9
	if (player.getFreeSlots(1) < 1) {
		npc.say("#fs14##b請先確保裝備欄位都空1格以上!");
	} else {
		var toDrop = player.makeItemWithId(1032316);
		toDrop.setStr(100); //裝備力量
		toDrop.setDex(100); //裝備敏捷
		toDrop.setInt(100); //裝備智力
		toDrop.setLuk(100); //裝備運氣
		toDrop.setPad(100); //物理攻擊
		toDrop.setMad(100); //魔法攻擊 
		toDrop.setMaxHp(1000); //血量 
		toDrop.setMaxMp(1000); //魔法
		toDrop.setBossDamageR(10);
		toDrop.setIgnorePDR(10);
		toDrop.setDamR(10);
		player.gainItem(toDrop)
		player.gainItem(4251202, 6);//附加石
		player.gainItem(2633918, 200);//歐皇
		player.gainItem(2644008, 5);//追加
		player.gainItem(2437111, 50);//榮耀卷
		player.gainItem(5064400, 50);//回復卡
		player.gainItem(5062026, 150);//結合
		player.resetEventValue("圓夢贊助10000選擇");
		player.loseItem(2438675, 1);
		npc.broadcastPlayerNotice(4, "[ 玩家 ]  " + player.getName() + "  開啟本月贊助第九包自選活動禮箱,感謝支持!!!");
	}
} else if (sel == 17) {//9
	if (player.getFreeSlots(1) < 1) {
		npc.say("#fs14##b請先確保裝備欄位都空1格以上!");
	} else {
		var toDrop = player.makeItemWithId(1113306);
		toDrop.setStr(100); //裝備力量
		toDrop.setDex(100); //裝備敏捷
		toDrop.setInt(100); //裝備智力
		toDrop.setLuk(100); //裝備運氣
		toDrop.setPad(100); //物理攻擊
		toDrop.setMad(100); //魔法攻擊 
		toDrop.setMaxHp(1000); //血量 
		toDrop.setMaxMp(1000); //魔法
		toDrop.setBossDamageR(10);
		toDrop.setIgnorePDR(10);
		toDrop.setDamR(10);
		player.gainItem(toDrop)
		player.gainItem(4251202, 6);//附加石
		player.gainItem(2633918, 200);//歐皇
		player.gainItem(2644008, 5);//追加
		player.gainItem(2437111, 50);//榮耀卷
		player.gainItem(5064400, 50);//回復卡
		player.gainItem(5062026, 150);//結合
		player.resetEventValue("圓夢贊助10000選擇");
		player.loseItem(2438675, 1);
		npc.broadcastPlayerNotice(4, "[ 玩家 ]  " + player.getName() + "  開啟本月贊助第九包自選活動禮箱,感謝支持!!!");
	}
} else if (sel == 18) {//9
	if (player.getFreeSlots(1) < 1) {
		npc.say("#fs14##b請先確保裝備欄位都空1格以上!");
	} else {
		var toDrop = player.makeItemWithId(1182285);
		toDrop.setStr(100); //裝備力量
		toDrop.setDex(100); //裝備敏捷
		toDrop.setInt(100); //裝備智力
		toDrop.setLuk(100); //裝備運氣
		toDrop.setPad(100); //物理攻擊
		toDrop.setMad(100); //魔法攻擊 
		toDrop.setMaxHp(1000); //血量 
		toDrop.setMaxMp(1000); //魔法
		toDrop.setBossDamageR(10);
		toDrop.setIgnorePDR(10);
		toDrop.setDamR(10);
		player.gainItem(toDrop)
		player.gainItem(4251202, 6);//附加石
		player.gainItem(2633918, 200);//歐皇
		player.gainItem(2644008, 5);//追加
		player.gainItem(2437111, 50);//榮耀卷
		player.gainItem(5064400, 50);//回復卡
		player.gainItem(5062026, 150);//結合
		player.resetEventValue("圓夢贊助10000選擇");
		player.loseItem(2438675, 1);
		npc.broadcastPlayerNotice(4, "[ 玩家 ]  " + player.getName() + "  開啟本月贊助第九包自選活動禮箱,感謝支持!!!");
	}
} else if (sel == 19) {//9
	if (player.getFreeSlots(1) < 1) {
		npc.say("#fs14##b請先確保裝備欄位都空1格以上!");
	} else {
		var toDrop = player.makeItemWithId(1113211);
		toDrop.setStr(100); //裝備力量
		toDrop.setDex(100); //裝備敏捷
		toDrop.setInt(100); //裝備智力
		toDrop.setLuk(100); //裝備運氣
		toDrop.setPad(100); //物理攻擊
		toDrop.setMad(100); //魔法攻擊 
		toDrop.setMaxHp(1000); //血量 
		toDrop.setMaxMp(1000); //魔法
		toDrop.setBossDamageR(10);
		toDrop.setIgnorePDR(10);
		toDrop.setDamR(10);
		player.gainItem(toDrop)
		player.gainItem(4251202, 6);//附加石
		player.gainItem(2633918, 200);//歐皇
		player.gainItem(2644008, 5);//追加
		player.gainItem(2437111, 50);//榮耀卷
		player.gainItem(5064400, 50);//回復卡
		player.gainItem(5062026, 150);//結合
		player.resetEventValue("圓夢贊助10000選擇");
		player.loseItem(2438675, 1);
		npc.broadcastPlayerNotice(4, "[ 玩家 ]  " + player.getName() + "  開啟本月贊助第九包自選活動禮箱,感謝支持!!!");
	}
} else if (sel == 20) {//9
	if (player.getFreeSlots(1) < 1) {
		npc.say("#fs14##b請先確保裝備欄位都空1格以上!");
	} else {
		var toDrop = player.makeItemWithId(1672075);
		toDrop.setStr(100); //裝備力量
		toDrop.setDex(100); //裝備敏捷
		toDrop.setInt(100); //裝備智力
		toDrop.setLuk(100); //裝備運氣
		toDrop.setPad(100); //物理攻擊
		toDrop.setMad(100); //魔法攻擊 
		toDrop.setMaxHp(1000); //血量 
		toDrop.setMaxMp(1000); //魔法
		toDrop.setBossDamageR(10);
		toDrop.setIgnorePDR(10);
		toDrop.setDamR(10);
		player.gainItem(toDrop)
		player.gainItem(4251202, 6);//附加石
		player.gainItem(2633918, 200);//歐皇
		player.gainItem(2644008, 5);//追加
		player.gainItem(2437111, 50);//榮耀卷
		player.gainItem(5064400, 50);//回復卡
		player.gainItem(5062026, 150);//結合
		player.resetEventValue("圓夢贊助10000選擇");
		player.loseItem(2438675, 1);
		npc.broadcastPlayerNotice(4, "[ 玩家 ]  " + player.getName() + "  開啟本月贊助第九包自選活動禮箱,感謝支持!!!");
	}
} else if (sel == 21) {//9
	if (player.getFreeSlots(1) < 1) {
		npc.say("#fs14##b請先確保裝備欄位都空1格以上!");
	} else {
		player.gainItem(2633927, 1);//米特拉
		player.gainItem(4251202, 6);//附加石
		player.gainItem(2633918, 200);//歐皇
		player.gainItem(2644008, 5);//追加
		player.gainItem(2437111, 50);//榮耀卷
		player.gainItem(5064400, 50);//回復卡
		player.gainItem(5062026, 150);//結合
		player.loseItem(2438675, 1);
		player.resetEventValue("圓夢贊助10000選擇");
		npc.broadcastPlayerNotice(4, "[ 玩家 ]  " + player.getName() + "  開啟本月贊助第九包自選活動禮箱,感謝支持!!!");
	}

}








