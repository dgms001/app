//強化制作 by dgms
var ax1 = "#fMap/MapHelper.img/minimap/match#";
var ax2 = "#fEffect/CharacterEff/1042176/2/0#";
var hd = "#fMap/MapHelper.img/weather/knitsWithWarmWinter/8#";
var zb = "#fMap/MapHelper.img/weather/birthday/2#";
var yb = "#fMap/MapHelper.img/weather/birthday/5#";
var a3 = "#fEffect/ItemEff/1070069/effect/walk1/2#"

var ItemList = Array(
	1592018,
	1582016,
	1552063,
	1542063,
	1532098,
	1522094,
	1492179,
	1482168,
	1472214,
	1462193,
	1452205,
	1442223,
	1432167,
	1422140,
	1412135,
	1403016,
	1402196,
	1382208,
	1372177,
	1362090,
	1342082,
	1332225,
	1322203,
	1312153,
	1302275,
	1292016,
	1282015,
	1272015,
	1262016,
	1252015,
	1242061,
	1242060,
	1232057,
	1222058,
	1214016,
	1213016,
	1212063,
	1003797,
	1003798,
	1003799,
	1003800,
	1003801,
	1042254,
	1042255,
	1042256,
	1042257,
	1042258,
	1062165,
	1062166,
	1062167,
	1062168,
	1062169
);
var ItemSl = Array(
	Array(4031263, 1),


);
var randList = Array(
	Math.floor(20), //str
	Math.floor(20), //dex
	Math.floor(20),//inte
	Math.floor(20),//luk
	Math.floor(10),//pad
	Math.floor(10),//mad
	Math.floor(2), //boss
	Math.floor(2), //wushi
);
var result;
var STR;
var DEX;
var INT;
var LUK;
var PAD; //物理傷害
var MAD; //魔法傷害
var BOSS;
var WS;
var HP;
var MP;
var equip;
var times = 0;
var avail = "    " + a3 + "#fs20##fc0xFFFF4EFF#【強化中心】" + a3 + "#fs12##n#l\r\n";
avail += "#k可強化的裝備如下:\r\n";
equip = player.getInventorySlot(1, 1);
var itemid = equip.getDataId();

for (var i = 0; i < ItemList.length; i++) {
	avail += "#b#v" + ItemList[i] + "##k";
}
avail += "\r\n需要的材料如下:\r\n";
for (var i = 0; i < ItemSl.length; i++) {
	avail += "#v" + ItemSl[i][0] + "# 需要 " + ItemSl[i][1] + " 當前:#c" + ItemSl[i][0] + "#\r\n\r\n";
}

avail += "#r1、#r注意：裝備不支持增加星火提升的屬性\r\n";
avail += "2、#r注意：提升的時候可以先衝完捲之後再強化\r\n";
avail += "3、#r注意：把要提升的裝備放在裝備欄的第一個位置！\r\n#k";
avail += "\t\t\t\t#L0##b開始強化#v" + itemid + "##l#k\r\n#k";
let selection = npc.askMenuS(avail);
if (selection == 0) {
	equip = player.getInventorySlot(1, 1);
	for (var i = 0; i < ItemSl.length; i++) {
		{
			var itemId = ItemSl[i][0];
			var itemQuantity = ItemSl[i][1];
			if (!player.hasItem(itemId, itemQuantity)) {
				npc.say("你並沒有足夠的材料所以不能開啟");
			} else if (equip == null) {
				npc.askMenuS("請在裝備欄第一個位置放上裝備！");
			} else {
				var itemid = equip.getDataId();
				var flag = 0;
				for (var i = 0; i < ItemList.length; i++) {
					if (itemid == ItemList[i]) {
						flag = 1;
					}
				}
				if (flag == 1) {
					var str = equip.getTitle();
					if (str != null) {
						if (str.length > 0) {
							str = str.substring(3, str.length);
							times = parseInt(str);
						} else {
							times = 0;
						}
					}
					var 可強化次數 = 5;
					if (times < 可強化次數) {
						var info = "裝備：#v" + equip.getDataId() + "##t" + equip.getDataId() + "#\r\n當前屬性如下：\r\n";
						info += "#r點擊‘是’會增加當前顯示屬性並且強化等級+1 ，最多強化" + 可強化次數 + "次#k\r\n"
						//保存更新記錄
						info += "\r\n#b強化:#k#g-> #r本次";
						info += "\r\n#b力量:#k#g-> #r" + randList[0];
						info += "\r\n#b敏捷:#k#g-> #r" + randList[1];
						info += "\r\n#b智力:#k#g-> #r" + randList[2];
						info += "\r\n#b運氣:#k#g-> #r" + randList[3];
						info += "\r\n#b攻擊力:#k#g-> #r" + randList[4];
						info += "\r\n#b魔法力:#k#g-> #r" + randList[5];
						info += "\r\n#bBOSS傷害:#k#g-> #r" + randList[6];
						info += "\r\n#b無視:#k#g-> #r" + randList[7];
						let sel = npc.askYesNoSNoEsc(info);
						if (sel == 1) {
							STR = equip.getStr();
							DEX = equip.getDex();
							INT = equip.getInt();
							LUK = equip.getLuk();
							PAD = equip.getPad(); //物理傷害
							MAD = equip.getMad(); //魔法傷害
							//替換掉屬性
							//力量
							equip.setStr(STR + randList[0]);
							//敏捷
							equip.setDex(DEX + randList[1]);
							//智力
							equip.setInt(INT + randList[2]);
							//運氣
							equip.setLuk(LUK + randList[3]);
							//攻擊
							equip.setPad(PAD + randList[4]);
							//魔法攻擊
							equip.setMad(MAD + randList[5]);
							//BOSS傷害
							equip.setBossDamageR(equip.getBossDamageR() + randList[6]);
							//無視
							equip.setIgnorePDR(equip.getIgnorePDR() + randList[7]);
							times++;
							equip.setTitle("強化+" + times);
							player.updateItem(1, equip);
							npc.broadcastGachaponMsgEx("【強化中心】 :玩家[" + player.getName() + "]強化成功", equip);
							for (var key in ItemSl) {
								player.loseItem(ItemSl[key][0], ItemSl[key][1]);
							}
							npc.say("強化成功");
						} else {
							npc.say("升級失敗");
						}
					} else {
						npc.say("強化次數已經到達上限,目前強化只開放到" + 可強化次數 + "次哦~");
					}
				} else {
					npc.say("請檢查裝備欄第一個位置是否為????！");
				}
			}
		}
	}
}