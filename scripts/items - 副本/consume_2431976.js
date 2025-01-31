
//10000贊助
let boxId = 2431976;//箱子ID
let addAp = 150;//增加的屬性

let text = ""

text += "#fs17##b感謝玩家的贊助!!這是你的10000贊助禮包\r\n";
text += "#L0#點我領取#l";
let selected = npc.askMenu(text);

text = "";
text += "#v5062017##z5062017#*100\r\n";
text += "#v5062020##z5062020#*100\r\n";
text += "#v5062500##z5062500#*100\r\n";
text += "#v4032053##z4032053#*2000\r\n";
text += "#v2644029##z2644029#*3\r\n";
text += "#v1672069##z1672069#\r\n";
text += "點【是】領取!!";

let YN = npc.askYesNo(text);
if (YN == 1) {
	if (true) {
		if (player.hasItem(boxId, 1)) {
			var itemid = 1672069;
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
			player.loseItem(boxId, 1);
			//npc.broadcastPlayerNotice(15,"『創世武器箱』 : 恭喜 " + player.getName() + " 領取了 全屬性+300的創世武器.");
			player.gainItem(5062017, 100);
			player.gainItem(5062020, 100);
			player.gainItem(5062500, 100);
			player.gainItem(4032053, 2000);
			player.gainItem(2644029, 3);
			player.gainItem(5060028, 100);
			player.addEventValue("第一波贊助活動10000獎勵", 1, 1);
			npc.say("感謝你的贊助!!");
		} else {
			npc.say("你沒有#v" + boxId + "#");
		}
	} else {
		npc.say("請清理背包！");
	}
} else {
	npc.say("不想兌換嗎？下次再見。");
}