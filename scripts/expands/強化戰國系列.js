//強化制作 by dgms
var ax1 = "#fMap/MapHelper.img/minimap/match#";
var ax2 = "#fEffect/CharacterEff/1042176/2/0#";
var hd = "#fMap/MapHelper.img/weather/knitsWithWarmWinter/8#";
var zb = "#fMap/MapHelper.img/weather/birthday/2#";
var yb = "#fMap/MapHelper.img/weather/birthday/5#";
var a3 = "#fEffect/ItemEff/1070069/effect/walk1/2#"

var ItemList = Array(
	1582037,
	1472271,
	1362146,
	1342109,
	1332286,
	1242134,
	1552126,
	1382271,
	1372234,
	1262046,
	1252102,
	1212126,
	1532154,
	1492241,
	1482229,
	1242135,
	1222119,
	1522149,
	1522073,
	1462249,
	1462161,
	1452263,
	1452172,
	1214034,
	1214033,
	1542124,
	1442282,
	1432224,
	1422194,
	1412186,
	1402265,
	1322261,
	1312209,
	1302349,
	1292041,
	1232119,
	1213042,
	1152097,
	1132159,
	1102459,
	1082475,
	1072714,
	1052512,
	1003604,
	1152096,
	1132158,
	1102458,
	1082474,
	1072713,
	1052511,
	1003603,
	1152098,
	1132160,
	1102460,
	1082476,
	1072715,
	1052513,
	1003605,
	1152095,
	1132157,
	1102457,
	1082473,
	1072712,
	1052510,
	1003602,
	1152094,
	1132156,
	1102456,
	1082472,
	1072711,
	1052509,
	1003601
);
var ItemSl = Array(
	Array(4031262, 1),


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