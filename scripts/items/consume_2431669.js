
//10000贊助
let boxId = 2431669;//箱子ID
let addAp = 150;//增加的屬性

let text = "\t\t\t\t#v3994016##v3994000##v3994006##v3994006##v3994010#  #v3994025##v3994000##v3994012##v3994001#\r\n\t\t#fs100##r#e圓 夢 谷\r\n\r\n"

text += "#fs16##r感謝你的贊助,請領取你暢玩九月3000禮包\r\n";
text += "\t\t\t\t\t\t#L0##b點我領取#l";
let selected = npc.askMenuA(text);

text = "#fs21##e#b";
text += "#v4032216##z4032216##r*9999#b個\r\n";//愛心
text += "#v4032053##z4032053##r*9999#b個\r\n";//元寶
text += "#v2644008##z2644008##r*3#b個  \r\n";//追加
text += "#v2049389##z2049389##r*2#b個  \r\n";//20*
text += "#v5064400##z5064400##r*30#b個  \r\n";//恢復卡
text += "#v2635032##z2635032##r*30#b個  \r\n";//命運
text += "#v2633609##z2633609##r*5#b個   \r\n";//重載
text += "#v4001715##z4001715##r*4#b個   \r\n";//楓幣億
text += "#v2632486##z2632486##r*5#b個   \r\n";//翡翠寶石
text += "#v2431603##z2431603##r*10#b個   \r\n";//自選心
text += "#v2632485##z2632485##r*3#b給任意裝備鑲嵌50屬性   \r\n";//自選心


let YN = npc.askYesNo(text);
if (YN == 1) {
	if (true) {
		if (player.hasItem(boxId, 1)) {
			/*var itemid = 1802653;
			var toDrop = player.makeItemWithId(itemid); // 帽子   
			toDrop.setStr(toDrop.getStr() + addAp); //裝備力量
			toDrop.setDex(toDrop.getDex() + addAp); //裝備敏捷
			toDrop.setInt(toDrop.getInt() + addAp); //裝備智力
			toDrop.setLuk(toDrop.getLuk() + addAp); //裝備運氣
			toDrop.setMad(toDrop.getMad() + addAp);
			toDrop.setPad(toDrop.getPad() + addAp);
			//toDrop.setBossDamageR(toDrop.getBossDamageR() + 10);
			//toDrop.setIgnorePDR(toDrop.getIgnorePDR() + 10);
			//toDrop.setDamR(toDrop.getDamR() + 10);
			player.gainItem(toDrop);*/
			player.loseItem(boxId, 1);
			//npc.broadcastPlayerNotice(10, "[九月暢玩禮包] 玩家 " + player.getName() + "  領取了暢玩九月單筆3000禮包!");
			player.gainItem(4032216, 9999);
			player.gainItem(4032053, 9999);
			player.gainItem(2644008, 3);
			player.gainItem(2049389, 2);
			player.gainItem(5064400, 30);
			player.gainItem(2635032, 30);
			player.gainItem(2633609, 5);
			player.gainItem(4001715, 4);
			player.gainItem(2632486, 5);
			player.gainItem(2431603, 10);
			player.gainItem(2632485, 3);
			player.addEventValue("九月3000贊助", 1, 30);
			player.showSystemMessage("感謝你的贊助!!");
			player.showSystemMessage("感謝你的贊助!!");
			player.showSystemMessage("感謝你的贊助!!");
		} else {
			npc.say("你沒有#v" + boxId + "#");
		}
	} else {
		npc.say("請清理背包！");
	}
} else {
	npc.say("不想兌換嗎？下次再見。");
}