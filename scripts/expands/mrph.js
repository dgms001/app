var jsts = "#fEffect/ItemEff/1102376/effect/proneStab/7#"; //橘色翅膀
var a11 = "#fUI/UIPVP.img/MiniMapIcon/star#"; //黃星星
var xxx = "#fEffect/CharacterEff/1032054/0/0#"; //選項兩邊

var text = "";
var questid = 100100;
var maxtimes = 10;
var playerid = 0;
var accepttimes = 0;
var questitemid = 0;
var questitemcs = 0;
var hitemid = 0;
var hitemcs = 0;
var 一鍵完成獎勵 = [
	[1, 5000],//這裡給點券
	[2, 5000],//這裡給抵用
	[3, 25],//這裡給活躍
	[4001714, 1],//下面是 道具+數量 自己往下面加 最後一個不要逗號
	[2614071, 1],
	[5062500, 5],
	[5062009, 5],
	[5062024, 2],
	[5062009, 2]//下面是 道具+數量 自己往下面加 最後一個不要逗號
];
var questitems = Array(
	Array(4000000, 100, "藍色蝸牛的殼.", 104010100), // 藍色蝸牛殼 - 藍色蝸牛的殼.
	Array(4000001, 100, "花蘑菇的蓋", 120010100), // 藍色蝸牛殼 - 藍色蝸牛的殼.
	Array(4000014, 100, "龍的頭骨", 105020100), // 是龍的頭骨 - 是龍的頭骨
	Array(4000034, 100, "蛇皮", 103030000), // 青蛇的外皮. - 青蛇的外皮.
	Array(4000048, 100, "小白雪人皮", 211010000), // 小白雪人皮 - 小白雪人的外皮，由白色軟毛構成.
	Array(4000331, 100, "聽說有人在#r仙人掌爸爸#k身上見到過這種東西", 260010200), // 能從仙人掌爸爸那兒得到的仙人掌的花，因為花的植物液體比較甜，能作為茶的材料。
	Array(4000330, 100, "聽說有人在#r仙人掌媽媽#k身上見到過這種東西", 260010100), // 是龍的頭骨 - 是龍的頭骨
	Array(4004000, 100, "力量母礦", 251010402), // 力量母礦 - 力量母礦
	Array(4004002, 100, "敏捷母礦", 105020100), // 是龍的頭骨 - 是龍的頭骨
	Array(4004003, 100, "幸運母礦", 105020100), // 是龍的頭骨 - 是龍的頭骨
	Array(4000014, 100, "龍的頭骨", 105020100), // 是龍的頭骨 - 是龍的頭骨
	Array(4000269, 50, "聽說有人在#r藍飛龍#k身上見到過這種東西", 240040000), //飛龍的腮
	Array(4000268, 50, "聽說有人在#r紅飛龍#k身上見到過這種東西", 240040000), // 飛龍的翅膀 - 紅飛龍的紅色翅膀
	Array(4000270, 50, "聽說有人在#r黑飛龍#k身上見到過這種東西", 240040200), // 飛龍的指甲 - 附在黑飛龍翅膀兩端的尖銳指甲
	Array(4000000, 100, "藍色蝸牛的殼", 104010100), // - 山羊角 - 山羊的角，不那麼鋒利，但有點危險。
	Array(4000001, 100, "花蘑菇的蓋", 120010100), // 黑羊毛 - 黑綿羊的毛，有點粗糙。
	Array(4000002, 100, "漂漂豬的蝴蝶結", 120000400), // 雞爪 - 鬥雞的腳,可以交換玉米或糖葫蘆
	Array(4000011, 100, "是蘑菇的芽孢", 104020000), // 鴨蛋 - 大頭鴨的蛋,可以交換玉米或糖葫蘆
	Array(4000017, 100, "是豬的頭.", 120000400), // 雞肉 - 雞毛都退掉的整理好的雞肉
	//Array(4000028, 100, "月牙牛魔王的角.非常硬而且重.", 104000000), // 火焰的眼 - 把被封印的紮昆樹的種子人工制作的。用於紮昆祭壇祭物的材料。
	Array(4000021, 100, "也許你可以想想#r火野豬#k什麼的", 240010500), // 動物皮 - 是動物的外皮.
	Array(4000052, 100, "在#r冰封雪域#k有人看見過這種東西", 211040100), // 白狼之尾 - 白狼的尾，由白色軟毛構成.
	Array(4000595, 100, "在#r埃德爾斯坦#k有人看見過這種東西", 310020000), // 嫩芽
	Array(4000596, 100, "在#r埃德爾斯坦#k有人看見過這種東西", 310020100), // 喇叭花.
	Array(4000597, 100, "在#r埃德爾斯坦#k有人看見過這種東西", 310020200), // 軟木塞
	Array(4000598, 100, "在#r埃德爾斯坦#k有人看見過這種東西", 310030000), // 巡邏機器人的記憶芯片
	Array(4000601, 100, "在#r埃德爾斯坦#k有人看見過這種東西", 310030200), // 偷水賊的水平
	Array(4000602, 100, "在#r埃德爾斯坦#k有人看見過這種東西", 310030300), // 塵粒
	Array(4000156, 100, "在#r水下世界#k有人看見過這種東西", 230010400), // 海象尖牙
	Array(4000157, 50, "在#r水下世界#k有人看見過這種東西", 230010400), // 海豹的肉
	Array(4000167, 100, "在#r水下世界#k有人看見過這種東西", 230020000), // 堅硬的鱗片
	Array(4000106, 100, "在#r玩具塔#k有人看見過這種東西", 220010500), // 玩具熊貓的棉花
	Array(4000073, 100, "在#r天空之城#k有人看見過這種東西", 104000000), // 獨角獅的硬角
	Array(4000232, 100, "聽說這是#r火焰半人馬#k之力量的來源", 240020000), // 半人馬的火花 - 火焰半人馬之力量的來源。
	Array(4000233, 100, "聽說這是#r寒冰半人馬#k之力量的來源", 240020500), // 半人馬的凈水 - 寒冰半人馬之力量的來源。
	Array(4000234, 100, "聽說這是#r暗黑半人馬#k之力量的來源", 240020102), // 半人馬的骨頭 - 暗黑半人馬之力量的來源。
	Array(4000238, 100, "聽說這是#r哈維#k身上掉下的尾羽毛", 240010700), // 哈維羽毛 - 哈維身上掉下的尾羽毛。外觀很美，用於裝飾品。
	//   Array(4000050, 100, "雪域可能會有哦", 211030000), // 寵物指令：小狗系列 // 記載著可對小狗使用的指令說明書。\n#c快速雙擊該道具，便可開啟書本。#
	//Array(4000099, 100, "小章魚樣子的鑰匙裝飾品。玩具城可能會有哦。", 104000000), // 寵物能力值轉移卷軸 // 記載著可轉移寵物能力值的卷軸。\n#c快速雙擊該道具，便可知道詳細內容。#
	Array(4000110, 100, "木馬騎兵的武器。玩具城可能會有哦。", 220010000) // 寵物指令：小白雪人 // 記載著可對小白雪人使用的指令說明書。\n#c快速雙擊該道具，便可開啟書本。#
);
var mapId = 0;
playerid = player.getId();
var info = player.getQuestRecordEx(questid, "COUNT");
accepttimes = player.getEventValue("RINGQUSTION");
if (info == null || accepttimes <= 0) {
	info = player.updateQuestRecordEx(questid, "COUNT=1;DONE=0;AC=0;ITEM=0;REQ=0;ID=0");
}
text = "\t\t\t\t#e#d" + xxx + "<10環任務>" + xxx + "#n\r\n";
text += "#d" + a11 + "您今日可領取次數：#r" + (maxtimes - accepttimes) + "#k#d次" + a11 + "完成每環任務會獲得獎勵：\r\n";
text += "#e#r" + a11 + "50萬突破+100W遊戲幣+2個紅魔方+2個綠魔方+經驗#k\r\n";
text += "" + a11 + "#d每#g5#k#d環為#b雙倍獎勵#k#d\r\n#k";
text += "#e#d" + a11 + "注意:每天晚上12點會重置任務!不管有沒有完成!#n#k\r\n\r\n";
if (accepttimes < 1) {

	text += "#L999# #r一鍵完成10環任務(僅限一次都沒接受過任務的)#k#l\r\n";

}
if (player.getLevel() < 59) {
	npc.say("連續跑環任務需要角色等級大於#r60#k級");
} else if (player.getEventValue("連續跑環") > 1) {
	npc.say("該帳號跑環任務已經做完請明天再來!");
} else {
	if (player.getQuestRecordEx(questid, "AC").equals("1")) { // 判斷是否接取了任務
		if (accepttimes < maxtimes) { // 判斷是否超過完成次數
			hitemid = parseInt(player.getQuestRecordEx(questid, "ITEM"));
			hitemcs = parseInt(player.getQuestRecordEx(questid, "REQ"));
			text += "\t\t#e當前第#r" + Math.max(1, accepttimes) + "#k環  收集 #r#z" + hitemid + "# " + hitemcs + "#k個#n\r\n\r\n";
			if (player.hasItem(hitemid, hitemcs)) { // 判斷是否滿足任務條件
				text += "#b#L1#完成任務#l\r\n";
			} else {
				text += "#e怎麼了？還沒找到我要的東西嗎？#n\r\n";
			}
			//text+="#L992#傳送材料地圖#l\r\n";
			text += "#r#L2#放棄任務 (無法獲得任何獎勵，且會消耗一次任務次數)#l\r\n";
		} else {
			text += "#e該帳號跑環任務已經做完請明天再來!#n\r\n";
		}
	} else {
		text += "#e#b#L3#" + a11 + "接受任務" + a11 + "#l\r\n";
	}
	//可以跑環的選項
	let selection = npc.askMenuS(text);
	if (selection == 0) { // 重新接受任務 初始化
		var questrandid = Math.floor(Math.random() * questitems.length);
		questitemid = questitems[questrandid][0]; // 任務道具ID
		questitemcs = questitems[questrandid][1];

		text = "#e第#r" + (accepttimes + 1) + "#k環：#n\r\n\r\n請幫我找到#b" + questitemcs + "#k個#r#z" + questitemid + "##k\r\n" + questitems[questrandid][3] + "\r\n#k感激不盡，快去快回~";
		// 重新接受任務
		player.updateQuestRecordEx(questid, "AC", "1");
		player.updateQuestRecordEx(questid, "DONE", "0");
		// 寫入任務道具ID
		player.updateQuestRecordEx(questid, "ITEM", questitemid + "");
		// 寫入任務道具數量
		player.updateQuestRecordEx(questid, "REQ", questitemcs + "");
		npc.say(text);
	} else if (selection == 1) { // 完成任務
		var doneCount = accepttimes + 1;
		//完成任務
		player.updateQuestRecordEx(questid, "DONE", "1");
		player.updateQuestRecordEx(questid, "AC", "0");
		player.updateQuestRecordEx(questid, "COUNT", doneCount + "");
		//經驗值獎勵
		var baseExp = 0.02;
		if (player.getLevel() > 220) {
			baseExp = 50000000000;
		} else if (player.getLevel() > 240) {
			baseExp = 50000000000;
		}

		if (!(accepttimes % 5)) {
			player.gainItem(4001839, 200);
			//			player.gainItem(2614000, 1); //突破

			if (player.getEventValue("RINGQUSTION") <= maxtimes) {
				player.modifyCashShopCurrency(2, 2000);
				player.modifyCashShopCurrency(1, 800);
				//				player.gainItem(2430069, 1);
			}
			/*			if(Math.round(Math.random() * 1)) {
							player.gainItem(2439292, 1);
							player.gainItem(2431170, 1);
							npc.broadcastNotice("[每日任務]" + " : " + "真是好運，玩家【" + player.getName() + "】獲得了一盒神秘力量並且得到了一個250級以上專用的經驗藥水。");
						}*/
		} else {
			player.gainItem(4001714, 1);
			player.gainItem(5062500, 1);
			player.gainItem(2614054, 5); //突破
			player.gainItem(5062009, 5);
			player.gainItem(5062024, 2); //突破
			player.gainItem(5062009, 2);

			//cm.gainPlayerEnergy(1);
			if (player.getEventValue("RINGQUSTION") <= maxtimes) {
				player.modifyCashShopCurrency(2, 1000);
				player.modifyCashShopCurrency(1, 400);
			}
		}
		//player.addEventValue("活躍", 1, 5);
		var calcExp = baseExp;
		if (calcExp >= 2147483647) {
			//計算分成幾次
			expNum = Math.floor((calcExp / 2147483647));
			//計算余數
			lastExp = Math.floor((calcExp % 2147483647));
			//根據計算次數多次給予經驗
			for (var i = 0; i < expNum; i++) {
				player.gainExp(2147483647);
			}
			//給予余數經驗
			player.gainExp(lastExp);
		} else {
			player.gainExp(calcExp);
		}
		player.loseItem(hitemid, hitemcs);
		text = "恭喜您完成了任務~~";
		player.updateQuestRecordEx(questid, ""); //大老叫我加的
		//player.addPQLog("活力",20,365);
		npc.broadcastNotice("[每日任務]" + " : " + "恭喜玩家【" + player.getName() + "】,完成了【第" + accepttimes + "環】任務獲得了豐厚的獎勵。");
		npc.say(text);
		if (doneCount >= maxtimes) {
			player.addEventValue("連續跑環", 1, 1);
			text = "您已經完成了今天的任務，請明天0點後再來吧~";
		}

	} else if (selection == 2) { // 放棄任務
		var doneCount = accepttimes + 1;
		//完成任務
		player.updateQuestRecordEx(questid, "DONE", "0");
		player.updateQuestRecordEx(questid, "AC", "0");
		player.updateQuestRecordEx(questid, "COUNT", doneCount + "");
		text = "任務已放棄……";
		player.updateQuestRecordEx(questid, ""); //大老叫我加的
		if (doneCount >= maxtimes) {
			player.addEventValue("連續跑環", 1, 1);
		}
		npc.say(text);

	} else if (selection == 3) { // 接受任務
		var questrandid = Math.floor(Math.random() * questitems.length);
		questitemid = questitems[questrandid][0]; // 任務道具ID
		if (questitems[questrandid][1] < 0) {
			questitemcs = Math.floor(Math.random() * 20 * player.getLevel() / 10) + 30 + Math.floor(Math.random()); // 任務道具數量
		} else {
			questitemcs = questitems[questrandid][1];
		}
		text = "#e第#r" + (accepttimes + 1) + "#k環：#n\r\n\r\n請幫我找到#b" + questitemcs + "#k個#r#z" + questitemid + "##k\r\n\r\n#k快去快回~";
		player.updateQuestRecordEx(questid, "AC", "1");
		player.updateQuestRecordEx(questid, "DONE", "0");
		// 寫入任務道具ID
		player.updateQuestRecordEx(questid, "ITEM", questitemid + "");
		// 寫入任務道具數量
		player.updateQuestRecordEx(questid, "REQ", questitemcs + "");
		player.addEventValue("RINGQUSTION", 1, 1);
		let sel = npc.askMenuS(text + "\r\n #r#L0#傳送到材料地圖（不想傳送請退出對話框）#l \r\n #r#L1#直接提交材料#l \r\n #k");
		mapId = questitems[questrandid][3];

		if (sel == 0) {
			player.changeMap(mapId);
		} else {
			player.runScript("mrph");

		}
	} else if (selection == 999) {
		if (player.getEventValue("連續跑環") < 1) {
			if (player.hasItem(4000463, 20)) {
				player.loseItem(4000463, 25);
				player.addEventValue("連續跑環", 1, 1);
				player.addEventValue("RINGQUSTION", 1, 1);
				player.addEventValue("RINGQUSTION", 1, 1);
				player.addEventValue("RINGQUSTION", 1, 1);
				player.addEventValue("RINGQUSTION", 1, 1);
				player.addEventValue("RINGQUSTION", 1, 1);
				player.addEventValue("RINGQUSTION", 1, 1);
				player.addEventValue("RINGQUSTION", 1, 1);
				player.addEventValue("RINGQUSTION", 1, 1);
				player.addEventValue("RINGQUSTION", 1, 1);
				player.addEventValue("RINGQUSTION", 1, 1);
				for (var i = 0; i < 一鍵完成獎勵.length; i++) {
					if (一鍵完成獎勵[i][0] == 1) {//點券
						player.modifyCashShopCurrency(1, 一鍵完成獎勵[i][1]);
					} else if (一鍵完成獎勵[i][0] == 2) {//抵用
						player.modifyCashShopCurrency(2, 一鍵完成獎勵[i][1]);
					} else if (一鍵完成獎勵[i][0] == 3) {//活躍
						//player.addPQLog("活力",一鍵完成獎勵[i][1],365);
					} else {
						player.gainItem(一鍵完成獎勵[i][0], 一鍵完成獎勵[i][1]);
					}
				}
				npc.broadcastPlayerNotice(0x15, "『每日跑環』: 玩家 " + player.getName() + " 使用了一鍵完成所有跑環功能!");
			} else {
				npc.say("你需要#r20個國慶紀念幣##v4000463# ，可以在會員中心裡用余額兌換道具");
			}
		} else {
			npc.say("一天只能使用一次這個功能哦");
		}

	}

}


function getEventCount(eventName) {

	var sql = "select value,time from accounts_event where accounts_id = ? and event =? ";

	var result = player.customSqlResult(sql, player.getAccountId(), eventName);

	if (result.size() > 0) {
		if (result.get(0) != null) {
			return result.get(0).get("value");
		}
	} else {
		var sql = "insert into  accounts_event (accounts_id,world,event,type,value) values(?,?,?,?,?)";

		var result = player.customSqlInsert(sql, player.getAccountId(), player.getWorld(), eventName, 0, 0);
		return 0;
	}

}

function setEventCount(eventName, type, value) {

	var sql = "update accounts_event set type=?,value=value+? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type, value, player.getAccountId(), eventName);


}

function getHyPay() {

	var sql = "select pay from hypay where accountid = ? ";

	var result = player.customSqlResult(sql, player.getAccountId());

	if (result.size() > 0) {
		if (result.get(0) != null) {
			return result.get(0).get("pay");
		}
	} else {
		return 0;
	}

}