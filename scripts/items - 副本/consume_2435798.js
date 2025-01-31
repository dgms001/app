
//5000贊助
let boxId = 2435798;//箱子ID
let addAp = 150;//增加的屬性

let text = ""

text += "#fs17##b感謝圓夢玩家第二期的贊助支持!!\r\n這是你的10000贊助禮包\r\n";
text += "#L0#點我領取#l";
let selected = npc.askMenu(text);

text = "#fs15##b";
text += "#v2433575##z2433575#(自選榮耀箱)*50\r\n";
text += "#v5064400##z5064400#*50\r\n";
text += "#v4009411##z4009411#*30\r\n";
text += "#r點【是】領取!!";

let YN = npc.askYesNo(text);
if (YN == 1) {
	if (true) {
		if (player.hasItem(boxId, 1)) {
			/*var itemid = 1113195;
			var toDrop = player.makeItemWithId(itemid); // 帽子   
				toDrop.setStr(toDrop.getStr() + addAp); //裝備力量
				toDrop.setDex(toDrop.getDex() + addAp); //裝備敏捷
				toDrop.setInt(toDrop.getInt() + addAp); //裝備智力
				toDrop.setLuk(toDrop.getLuk() + addAp); //裝備運氣
				toDrop.setMad(toDrop.getMad() + addAp);
				toDrop.setPad(toDrop.getPad() + addAp);
				toDrop.setBossDamageR(toDrop.getBossDamageR()+10);
				toDrop.setIgnorePDR(toDrop.getIgnorePDR() +10);
				toDrop.setDamR(toDrop.getDamR() +10);
				player.gainItem(toDrop);*/

			player.loseItem(boxId, 1);
			var equip;
			equip = player.getInventorySlot(2, 1);
			npc.broadcastGachaponMsgEx("感謝玩家此次的贊助!!", equip);
			//npc.broadcastPlayerNotice(15,"感謝玩家此次的贊助!!");
			player.gainItem(2433575, 50);
			player.gainItem(5064400, 50);
			player.gainItem(4009411, 30);
			player.addEventValue("第二期贊助活動10000獎勵", 1, 999);
			npc.say("感謝你的第二期贊助!!");
		} else {
			npc.say("你沒有#v" + boxId + "#");
		}
	} else {
		npc.say("請清理背包！");
	}
} else {
	npc.say("不想兌換嗎？下次再見。");
}