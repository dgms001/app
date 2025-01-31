
let boxId = 2432840;//箱子ID
let addAp = 200;//增加的屬性
let items = [
	Array(5062017, 20),
	Array(5062020, 20),
	Array(5062500, 20),
	Array(5062503, 5),
	Array(4032053, 1000),
	Array(4310075, 30),
	Array(4021032, 50),
	Array(2633634, 30)


	//Array(2644029,1),
	//Array(5060028,15),
	//Array(5060029,30)
	//Array(4001456,0)
];

let text = ""
text += "#fs17##b感謝圓夢玩家第四期的贊助支持!!\r\n這是你的贊助禮包\r\n";
text += "#k您當前餘額: " + getHyPay() + "\r\n";
text += "#L0#點我領取#l";
let selected = npc.askMenu(text);

text = "#fs15##b";
if (player.getEventValue("第四期贊助活動獎勵") == 4) {
	text += "#r此次將額外獲得 #b\r\n全屬+200 雙攻+200 \r\nB傷+20% 無視+20% 傷害+20% \r\n創世胸章\r\n";
}
if (player.getEventValue("第四期贊助活動獎勵") == 9) {
	text += "#r此次將額外獲得 #b\r\n全屬+200 雙攻+200 \r\nB傷+25% 無視+25% 傷害+25% \r\n夢幻腰帶\r\n";
}

if (player.getEventValue("第四期贊助活動獎勵") == 3 || player.getEventValue("第四期贊助活動獎勵") == 7 || player.getEventValue("第四期贊助活動獎勵") == 11 || player.getEventValue("第四期贊助活動獎勵") == 15 || player.getEventValue("第四期贊助活動獎勵") == 19 || player.getEventValue("第四期贊助活動獎勵") == 23 || player.getEventValue("第四期贊助活動獎勵") == 27 || player.getEventValue("第四期贊助活動獎勵") == 31 || player.getEventValue("第四期贊助活動獎勵") == 35 || player.getEventValue("第四期贊助活動獎勵") == 39) {
	text += "#r此次將額外獲得#b#v2633634##z2633634# 30個#n\r\n";
	text += "#r此次將額外獲得#b#v4310075##z4310075# 40個#n\r\n";
}

if (player.getEventValue("第四期贊助活動獎勵") == 1 || player.getEventValue("第四期贊助活動獎勵") == 3 || player.getEventValue("第四期贊助活動獎勵") == 5 || player.getEventValue("第四期贊助活動獎勵") == 7 || player.getEventValue("第四期贊助活動獎勵") == 9 || player.getEventValue("第四期贊助活動獎勵") == 11 || player.getEventValue("第四期贊助活動獎勵") == 13 || player.getEventValue("第四期贊助活動獎勵") == 15 || player.getEventValue("第四期贊助活動獎勵") == 17 || player.getEventValue("第四期贊助活動獎勵") == 19 || player.getEventValue("第四期贊助活動獎勵") == 21 || player.getEventValue("第四期贊助活動獎勵") == 23 || player.getEventValue("第四期贊助活動獎勵") == 25 || player.getEventValue("第四期贊助活動獎勵") == 27 || player.getEventValue("第四期贊助活動獎勵") == 29 || player.getEventValue("第四期贊助活動獎勵") == 31 || player.getEventValue("第四期贊助活動獎勵") == 33 || player.getEventValue("第四期贊助活動獎勵") == 35 || player.getEventValue("第四期贊助活動獎勵") == 37 || player.getEventValue("第四期贊助活動獎勵") == 39) {
	text += "#r此次將額外獲得 #b#v5064400##z5064400# 3個\r\n";
}

for (var i = 0; i < items.length; i++) {
	text += "#v" + items[i][0] + "##z" + items[i][0] + "##b " + items[i][1] + " 個 #n\r\n";
}

text += "#r點【是】領取!!";
let YN = npc.askYesNo(text);
if (YN == 1) {
	if (player.getFreeSlots(5) > 20) {//特殊欄格子
		if (player.hasItem(boxId, 1)) {


			player.loseItem(boxId, 1);
			var equip;
			equip = player.getInventorySlot(2, 1);
			//npc.broadcastGachaponMsgEx("感謝玩家此次的贊助!!",equip);
			//npc.broadcastPlayerNotice(22,"1");//1-5 10 22 29 30 全體   6-11 28系統   12 17 18喇叭藍  23-26
			//npc.broadcastPlayerNotice(23,"感謝玩家此次的贊助!!");

			for (var i = 0; i < items.length; i++) {
				player.gainItem(items[i][0], items[i][1]);//text = "#v"+items[0][0]+"##b "+items[0][1]+"個 #e\r\n";// 
			}

			if (player.getEventValue("第四期贊助活動獎勵") == 4) { //
				var itemid = 1182285;
				var toDrop = player.makeItemWithId(itemid); //  
				toDrop.setStr(toDrop.getStr() + addAp); //裝備力量
				toDrop.setDex(toDrop.getDex() + addAp); //裝備敏捷
				toDrop.setInt(toDrop.getInt() + addAp); //裝備智力
				toDrop.setLuk(toDrop.getLuk() + addAp); //裝備運氣
				toDrop.setMad(toDrop.getMad() + addAp);
				toDrop.setPad(toDrop.getPad() + addAp);
				toDrop.setBossDamageR(toDrop.getBossDamageR() + 20);
				toDrop.setIgnorePDR(toDrop.getIgnorePDR() + 20);
				toDrop.setDamR(toDrop.getDamR() + 20);
				player.gainItem(toDrop);
				player.addEventValue("第四期贊助活動獎勵2500", 1, 999);
			}
			if (player.getEventValue("第四期贊助活動獎勵") == 9) { //
				var itemid = 1132308;
				var toDrop = player.makeItemWithId(itemid); //    
				toDrop.setStr(toDrop.getStr() + addAp); //裝備力量
				toDrop.setDex(toDrop.getDex() + addAp); //裝備敏捷
				toDrop.setInt(toDrop.getInt() + addAp); //裝備智力
				toDrop.setLuk(toDrop.getLuk() + addAp); //裝備運氣
				toDrop.setMad(toDrop.getMad() + addAp);
				toDrop.setPad(toDrop.getPad() + addAp);
				toDrop.setBossDamageR(toDrop.getBossDamageR() + 25);
				toDrop.setIgnorePDR(toDrop.getIgnorePDR() + 25);
				toDrop.setDamR(toDrop.getDamR() + 25);
				player.gainItem(toDrop);
				player.addEventValue("第四期贊助活動獎勵5000", 1, 999);
			}

			if (player.getEventValue("第四期贊助活動獎勵") == 3 || player.getEventValue("第四期贊助活動獎勵") == 7 || player.getEventValue("第四期贊助活動獎勵") == 11 || player.getEventValue("第四期贊助活動獎勵") == 15 || player.getEventValue("第四期贊助活動獎勵") == 19 || player.getEventValue("第四期贊助活動獎勵") == 23 || player.getEventValue("第四期贊助活動獎勵") == 27 || player.getEventValue("第四期贊助活動獎勵") == 31 || player.getEventValue("第四期贊助活動獎勵") == 35 || player.getEventValue("第四期贊助活動獎勵") == 39) { //
				player.gainItem(2633634, 30);
				player.gainItem(4310075, 40);
				player.addEventValue("第四期贊助活動獎勵2000額外", 1, 999);
			}
			if (player.getEventValue("第四期贊助活動獎勵") == 1 || player.getEventValue("第四期贊助活動獎勵") == 3 || player.getEventValue("第四期贊助活動獎勵") == 5 || player.getEventValue("第四期贊助活動獎勵") == 7 || player.getEventValue("第四期贊助活動獎勵") == 9 || player.getEventValue("第四期贊助活動獎勵") == 11 || player.getEventValue("第四期贊助活動獎勵") == 13 || player.getEventValue("第四期贊助活動獎勵") == 15 || player.getEventValue("第四期贊助活動獎勵") == 17 || player.getEventValue("第四期贊助活動獎勵") == 19 || player.getEventValue("第四期贊助活動獎勵") == 21 || player.getEventValue("第四期贊助活動獎勵") == 23 || player.getEventValue("第四期贊助活動獎勵") == 25 || player.getEventValue("第四期贊助活動獎勵") == 27 || player.getEventValue("第四期贊助活動獎勵") == 29 || player.getEventValue("第四期贊助活動獎勵") == 31 || player.getEventValue("第四期贊助活動獎勵") == 33 || player.getEventValue("第四期贊助活動獎勵") == 35 || player.getEventValue("第四期贊助活動獎勵") == 37 || player.getEventValue("第四期贊助活動獎勵") == 39) {
				player.gainItem(5064400, 3);
				player.addEventValue("第四期贊助活動獎勵恢復卡", 1, 999);
			}
			addHyPay(250);
			player.addEventValue("第四期贊助活動獎勵", 1, 999);
			npc.say("感謝你的第四期贊助!!記得疊加物品再繼續領取");
		} else {
			npc.say("你沒有#v" + boxId + "#");
		}
	} else {
		npc.say("特殊欄快滿了！幫你轉到疊加介面！");
		player.runScript("一鍵疊加");
	}
} else {
	npc.say("不想兌換嗎？下次再見。");
}

function addHyPay(price) {
	if (price < 0) {
		price = price * +1;
	}
	var sql = "update hypay set pay=pay+?,payused=payused+" + price + " where accountId=?";
	var result = player.customSqlUpdate(sql, price, player.getAccountId());

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