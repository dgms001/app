
let boxId = 2430142;//箱子ID
let addAp = 150;//增加的屬性
let items = [
	Array(5062017, 20),
	Array(5062020, 20),
	Array(5062500, 20),
	Array(5062503, 5),
	Array(4032053, 1500),
	//Array(2644029,1),
	Array(5060028, 15),
	Array(5060029, 30)
	//Array(4001456,0)
];

let text = ""
text += "#fs17##b感謝圓夢玩家第三期的贊助支持!!\r\n這是你的贊助禮包\r\n";
text += "#L0#點我領取#l";
let selected = npc.askMenu(text);

text = "#fs15##b";
if (player.getEventValue("第三期贊助活動獎勵") == 9) {
	text += "#r此次將額外獲得 #b\r\n全屬+150 雙攻+150 \r\nB傷+10% 無視+10% 傷害+10% \r\n大魔戒指\r\n";
}

if (player.getEventValue("第三期贊助活動獎勵") == 3 || player.getEventValue("第三期贊助活動獎勵") == 7 || player.getEventValue("第三期贊助活動獎勵") == 11 || player.getEventValue("第三期贊助活動獎勵") == 15 || player.getEventValue("第三期贊助活動獎勵") == 19 || player.getEventValue("第三期贊助活動獎勵") == 23 || player.getEventValue("第三期贊助活動獎勵") == 27 || player.getEventValue("第三期贊助活動獎勵") == 31 || player.getEventValue("第三期贊助活動獎勵") == 35 || player.getEventValue("第三期贊助活動獎勵") == 39) {
	text += "#r此次將額外獲得#b#v2644029##z2644029# 1個#n\r\n";
}

if (player.getEventValue("第三期贊助活動獎勵") == 1 || player.getEventValue("第三期贊助活動獎勵") == 3 || player.getEventValue("第三期贊助活動獎勵") == 5 || player.getEventValue("第三期贊助活動獎勵") == 7 || player.getEventValue("第三期贊助活動獎勵") == 9 || player.getEventValue("第三期贊助活動獎勵") == 11 || player.getEventValue("第三期贊助活動獎勵") == 13 || player.getEventValue("第三期贊助活動獎勵") == 15 || player.getEventValue("第三期贊助活動獎勵") == 17 || player.getEventValue("第三期贊助活動獎勵") == 19 || player.getEventValue("第三期贊助活動獎勵") == 21 || player.getEventValue("第三期贊助活動獎勵") == 23 || player.getEventValue("第三期贊助活動獎勵") == 25 || player.getEventValue("第三期贊助活動獎勵") == 27 || player.getEventValue("第三期贊助活動獎勵") == 29 || player.getEventValue("第三期贊助活動獎勵") == 31 || player.getEventValue("第三期贊助活動獎勵") == 33 || player.getEventValue("第三期贊助活動獎勵") == 35 || player.getEventValue("第三期贊助活動獎勵") == 37 || player.getEventValue("第三期贊助活動獎勵") == 39) {
	text += "#r此次將額外獲得 #b#v5064400##z5064400# 3個\r\n";
}

for (var i = 0; i < items.length; i++) {
	text += "#v" + items[i][0] + "##z" + items[i][0] + "##b " + items[i][1] + "個 #n\r\n";
}

text += "#r點【是】領取!!";
let YN = npc.askYesNo(text);
if (YN == 1) {
	if (true) {
		if (player.hasItem(boxId, 1)) {


			player.loseItem(boxId, 1);
			var equip;
			equip = player.getInventorySlot(2, 1);
			//npc.broadcastGachaponMsgEx("感謝玩家此次的贊助!!",equip);
			//npc.broadcastPlayerNotice(22,"1");//1-5 10 22 29 30 全體   6-11 28系統   12 17 18喇叭藍  23-26
			npc.broadcastPlayerNotice(23, "感謝玩家此次的贊助!!");

			for (var i = 0; i < items.length; i++) {
				player.gainItem(items[i][0], items[i][1]);//text = "#v"+items[0][0]+"##b "+items[0][1]+"個 #e\r\n";// 
			}

			if (player.getEventValue("第三期贊助活動獎勵") == 9) { //
				var itemid = 1113196;
				var toDrop = player.makeItemWithId(itemid); // 帽子   
				toDrop.setStr(toDrop.getStr() + addAp); //裝備力量
				toDrop.setDex(toDrop.getDex() + addAp); //裝備敏捷
				toDrop.setInt(toDrop.getInt() + addAp); //裝備智力
				toDrop.setLuk(toDrop.getLuk() + addAp); //裝備運氣
				toDrop.setMad(toDrop.getMad() + addAp);
				toDrop.setPad(toDrop.getPad() + addAp);
				toDrop.setBossDamageR(toDrop.getBossDamageR() + 10);
				toDrop.setIgnorePDR(toDrop.getIgnorePDR() + 10);
				toDrop.setDamR(toDrop.getDamR() + 10);
				player.gainItem(toDrop);
				player.addEventValue("第三期贊助活動獎勵5000", 1, 999);
			}

			if (player.getEventValue("第三期贊助活動獎勵") == 3 || player.getEventValue("第三期贊助活動獎勵") == 7 || player.getEventValue("第三期贊助活動獎勵") == 11 || player.getEventValue("第三期贊助活動獎勵") == 15 || player.getEventValue("第三期贊助活動獎勵") == 19 || player.getEventValue("第三期贊助活動獎勵") == 23 || player.getEventValue("第三期贊助活動獎勵") == 27 || player.getEventValue("第三期贊助活動獎勵") == 31 || player.getEventValue("第三期贊助活動獎勵") == 35 || player.getEventValue("第三期贊助活動獎勵") == 39) { //
				player.gainItem(2644029, 1);
				player.addEventValue("第三期贊助活動獎勵20星", 1, 999);
			}
			if (player.getEventValue("第三期贊助活動獎勵") == 1 || player.getEventValue("第三期贊助活動獎勵") == 3 || player.getEventValue("第三期贊助活動獎勵") == 5 || player.getEventValue("第三期贊助活動獎勵") == 7 || player.getEventValue("第三期贊助活動獎勵") == 9 || player.getEventValue("第三期贊助活動獎勵") == 11 || player.getEventValue("第三期贊助活動獎勵") == 13 || player.getEventValue("第三期贊助活動獎勵") == 15 || player.getEventValue("第三期贊助活動獎勵") == 17 || player.getEventValue("第三期贊助活動獎勵") == 19 || player.getEventValue("第三期贊助活動獎勵") == 21 || player.getEventValue("第三期贊助活動獎勵") == 23 || player.getEventValue("第三期贊助活動獎勵") == 25 || player.getEventValue("第三期贊助活動獎勵") == 27 || player.getEventValue("第三期贊助活動獎勵") == 29 || player.getEventValue("第三期贊助活動獎勵") == 31 || player.getEventValue("第三期贊助活動獎勵") == 33 || player.getEventValue("第三期贊助活動獎勵") == 35 || player.getEventValue("第三期贊助活動獎勵") == 37 || player.getEventValue("第三期贊助活動獎勵") == 39) {
				player.gainItem(5064400, 3);
				player.addEventValue("第三期贊助活動獎勵恢復卡", 1, 999);
			}

			player.addEventValue("第三期贊助活動獎勵", 1, 999);
			npc.say("感謝你的第三期贊助!!");
		} else {
			npc.say("你沒有#v" + boxId + "#");
		}
	} else {
		npc.say("請清理背包！");
	}
} else {
	npc.say("不想兌換嗎？下次再見。");
}