//強化制作 by dgms
var ax1 = "#fMap/MapHelper.img/minimap/match#";
var ax2 = "#fEffect/CharacterEff/1042176/2/0#";
var hd = "#fMap/MapHelper.img/weather/knitsWithWarmWinter/8#";
var zb = "#fMap/MapHelper.img/weather/birthday/2#";
var yb = "#fMap/MapHelper.img/weather/birthday/5#";
var a3 = "#fUI/StarCityUI.img/Screen/VIPMessage/WorldinfoNO/16/0#"

var ItemList = Array(
	1143043,
	1143009,
	1143112,
	1142813,
	1142758,
	1142679,
	1142678,
	1142018,
	1142474,
	1142594,
	1143154,
	1143012,
	1142988,
	1143029,

);

var ItemSl = Array(

);
var randList = Array(
	Math.floor(getMinAndMax(30, 50)), //str
	Math.floor(getMinAndMax(30, 50)), //dex
	Math.floor(getMinAndMax(30, 50)), //inte
	Math.floor(getMinAndMax(30, 50)), //luk
	Math.floor(getMinAndMax(30, 50)), //pad
	Math.floor(getMinAndMax(30, 50)), //mad
	Math.floor(getMinAndMax(2, 5)), //boss
	Math.floor(getMinAndMax(2, 5)), //wushi
	Math.floor(getMinAndMax(2, 5)), //傷害
	Math.floor(getMinAndMax(2, 5)), //捲數
);

var send00 = Array(1000, 1000, 1000, 1000, 500, 300, 200, 100, 50, 50);
var result;
var STR;
var DEX;
var INT;
var LUK;
var PAD; //物理傷害
var MAD; //魔法傷害
var BOSS;
var WS;
var ZS;
var HP;
var MP;
var name;
var equip;
var itemid;
var times = 0;
var 可強化次數 = 4;


var avail = "";
equip1 = player.getInventorySlot(1, 1);
if (equip1 == null) {
	npc.askMenuS("請在裝備欄第一個位置放上裝備！");
} else {
	equip = player.getInventorySlot(1, 1);
	var itemid = equip.getDataId();
	avail += "#b#fs13##e可轉移的道具 : \r\n";
	for (var i = 0; i < ItemList.length; i++) {
		avail += "#v" + ItemList[i] + "#";
	}
	avail += "\r\n力量: " + equip.getStr() + "\r\n"
	avail += "敏捷: " + equip.getDex() + "\r\n"
	avail += "運氣: " + equip.getInt() + "\r\n"
	avail += "智力: " + equip.getLuk() + "\r\n"
	avail += "H P: " + equip.getMaxHp() + "\r\n"
	avail += "物攻: " + equip.getPad() + "\r\n"
	avail += "魔攻: " + equip.getMad() + "\r\n"
	avail += "B 傷: " + equip.getBossDamageR() + "%\r\n"
	avail += "無視: " + equip.getIgnorePDR() + "%\r\n"
	avail += "總傷: " + equip.getDamR() + "%\r\n"
	avail += "名稱: " + equip.getTitle() + "\r\n";
	avail += "只保留以上的屬性,沒寫的就是沒有 自行決定轉移\r\n";
	avail += "轉移後就沒有後悔藥了,請務必考慮清楚\r\n";
	avail += "轉移後你需要哪隻角色來領取就開哪隻來即可\r\n";


	avail += "#fs18##e #L0##fc0xFFFA9906#我要轉移【#v" + itemid + "#】#l";
	avail += "  #L1##fc0xFFFA9906#我要領取#l\r\n";


	let selection = npc.askMenuS(avail);
	if (selection == 0) {

		pdzb()
		if (player.getEventValue("勛章轉移") == 0) {
			var info = "確定要將#v" + equip.getDataId() + "#轉移給小號使用嗎?\r\n";
			let sel = npc.askYesNoSNoEsc(info);
			if (sel == 1) {
				STR = equip.getStr();
				DEX = equip.getDex();
				INT = equip.getInt();
				LUK = equip.getLuk();
				HP = equip.getMaxHp();
				PAD = equip.getPad();
				MAD = equip.getMad();
				BOSS = equip.getBossDamageR();
				WS = equip.getIgnorePDR();
				ZS = equip.getDamR();
				name = equip.getTitle();
				itemid = equip.getDataId();
				player.addEventValue("勛章轉移-力量", STR, 999);
				player.addEventValue("勛章轉移-敏捷", DEX, 999);
				player.addEventValue("勛章轉移-智力", INT, 999);
				player.addEventValue("勛章轉移-運氣", LUK, 999);
				player.addEventValue("勛章轉移-血量", HP, 999);
				player.addEventValue("勛章轉移-物攻", PAD, 999);
				player.addEventValue("勛章轉移-魔攻", MAD, 999);
				player.addEventValue("勛章轉移-B傷", BOSS, 999);
				player.addEventValue("勛章轉移-無視", WS, 999);
				player.addEventValue("勛章轉移-總傷", ZS, 999);
				player.addEventValue("勛章轉移-名稱", name.substr(3, 4), 999);
				player.addEventValue("勛章轉移-道具ID", itemid, 999);
				player.addEventValue("勛章轉移", 1, 999);
				player.loseItem(itemid, 1);
				npc.say("#fs18##b#e成功,請使用本賬小角色,來領取");
			} else {
				npc.say("#fs18##b#e好吧，下次再來~");
			}
		} else {
			npc.say("#fs18##b#e已經轉移#v" + player.getEventValue("勛章轉移-道具ID") + "#,請開小號領取後再次使用轉移功能");
		}





	} else if (selection == 1) {
		if (player.getEventValue("勛章轉移") > 0 && player.getFreeSlots(1) > 1) {
			let newItem = player.makeItemWithId(player.getEventValue("勛章轉移-道具ID"));
			newItem.setStr(player.getEventValue("勛章轉移-力量"));
			newItem.setDex(player.getEventValue("勛章轉移-敏捷"));
			newItem.setInt(player.getEventValue("勛章轉移-智力"));
			newItem.setLuk(player.getEventValue("勛章轉移-運氣"));
			newItem.setMaxHp(player.getEventValue("勛章轉移-血量"));
			newItem.setPad(player.getEventValue("勛章轉移-物攻"));
			newItem.setMad(player.getEventValue("勛章轉移-魔攻"));
			newItem.setBossDamageR(player.getEventValue("勛章轉移-B傷"));
			newItem.setIgnorePDR(player.getEventValue("勛章轉移-無視"));
			newItem.setDamR(player.getEventValue("勛章轉移-總傷"));
			newItem.setTitle("強化+" + player.getEventValue("勛章轉移-名稱"));
			player.gainItem(newItem);
			player.resetEventValue("勛章轉移-力量");
			player.resetEventValue("勛章轉移-敏捷");
			player.resetEventValue("勛章轉移-智力");
			player.resetEventValue("勛章轉移-運氣");
			player.resetEventValue("勛章轉移-血量");
			player.resetEventValue("勛章轉移-物攻");
			player.resetEventValue("勛章轉移-魔攻");
			player.resetEventValue("勛章轉移-B傷");
			player.resetEventValue("勛章轉移-無視");
			player.resetEventValue("勛章轉移-總傷");
			player.resetEventValue("勛章轉移-名稱");
			player.resetEventValue("勛章轉移-道具ID");
			player.resetEventValue("勛章轉移");
			npc.say("領取成功");
		} else {
			npc.say("沒有可領取的道具,或者裝備欄不足");
		}
	}

}




function getMinAndMax(minVal, maxVal) {//隨機 最大值 最小值
	return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}
function pdzb() {
	if (equip.getDataId() != 1143043 && equip.getDataId() != 1143009 && equip.getDataId() != 1143112 && equip.getDataId() != 1142813 && equip.getDataId() != 1142758 && equip.getDataId() != 1142679 && equip.getDataId() != 1142678 && equip.getDataId() != 1142638 && equip.getDataId() != 1142474 && equip.getDataId() != 1143154 && equip.getDataId() != 1143043 && equip.getDataId() != 1143012 && equip.getDataId() != 1142988 && equip.getDataId() != 1142594 && equip.getDataId() != 1142018 && equip.getDataId() != 1143029) {
		npc.askMenuS("裝備不符");
	}
}
