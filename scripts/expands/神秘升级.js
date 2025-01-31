/*
武器屬性提升範本
大寶貝

*/

var ax1 = "#fMap/MapHelper.img/minimap/match#";
var ax2 = "#fEffect/CharacterEff/1042176/2/0#";
var hd = "#fMap/MapHelper.img/weather/knitsWithWarmWinter/8#";
var zb = "#fMap/MapHelper.img/weather/birthday/2#";
var yb = "#fMap/MapHelper.img/weather/birthday/5#";


var ItemList = Array(
	1213018,
	1213030,
	1152196,
	1152197,
	1152198,
	1152199,
	1152200,
	1004808,
	1004809,
	1004810,
	1004811,
	1004812,
	1102940,
	1102941,
	1292018,
	1102942,
	1102943,
	1102944,
	1082695,
	1082696,
	1082697,
	1082698,
	1082699,
	1053063,
	1053064,
	1053065,
	1053066,
	1592020,
	1053067,
	1073158,
	1073159,
	1073160,
	1073161,
	1073162,
	1212120,
	1222113,
	1232113,
	1242121,
	1242122,
	1252098,
	1262039,
	1272017,
	1282017,
	1302343,
	1312203,
	1322255,
	1332279,
	1342104,
	1362140,
	1372228,
	1382265,
	1402259,
	1412181,
	1422189,
	1432218,
	1442274,
	1452257,
	1462243,
	1472265,
	1482221,
	1492235,
	1522143,
	1532150,
	1542117,
	1552119,
	1582023,
	1690204,
	1690321,
	1690322,
	1690323,
	1690324,
	1690325,
	1690326
);
var randList = Array(
	Math.floor(Math.random() * 15 + 1), //str
	Math.floor(Math.random() * 15 + 1), //dex
	Math.floor(Math.random() * 15 + 1), //inte
	Math.floor(Math.random() * 15 + 1), //luk
	Math.floor(Math.random() * 15 + 1), //pad
	Math.floor(Math.random() * 15 + 1), //mad
	Math.floor(Math.random() * 8 + 3), //boss
	Math.floor(Math.random() * 3 + 1), //wushi
	Math.floor(Math.random() * 500 + 1), //hp
	Math.floor(Math.random() * 500 + 1) //mp

);
var need = 4023026;
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

var avail = "";

avail += "#b這裡是神秘防具屬性提升中心:#v1152196##v1152197##v1152198##v1152199#\r\n\r\n#k";
avail += "1、神秘做為本服畢業裝備，能夠強化滿後多200-300的全屬性\r\n";
avail += "2、提升屬性需要#v" + need + "#一顆，#r如果選擇保留強化屬性需要額外消耗一顆#k 該物品在裝備分解中獲得\r\n";
avail += "#r3、#r注意：裝備不支持增加火花提升的屬性\r\n";
avail += "4、#r注意：提升的時候可以先砸卷後提升\r\n";
avail += "5、#r注意：把要提升的神秘裝備放在裝備欄的第一個位置！\r\n#k";
avail += " #L0##b我要強化神秘裝備！#l#k\r\n#k";

let selection = npc.askMenuS(avail);
if (selection == 0) {
	equip = player.getInventorySlot(1, 1); //獲得裝備欄 的第一個格子的道具 實例 

	if (!player.hasItem(need, 1)) {
		npc.say("你並沒有#z" + need + "#，所以不能開啟");

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
			//進行強化

			var str = equip.getTitle();
			if (str != null) {
				if (str.length > 0) {
					//強化了的
					str = str.substring(5, str.length);
					times = parseInt(str);
				} else {
					times = 0;
				}

			}
			if (times < 15) {
				var info = "裝備：#v" + equip.getDataId() + "##t" + equip.getDataId() + "#\r\n當前六維屬性如下：\r\n";
				info += "#r點擊‘是’會增加當前顯示屬性並且強化等級+1 ，點擊‘否’可以不要此次屬性，屬性跟最大值相差較大可以選否。\r\n無論是否保留屬性都會消耗一個強化材料#k\r\n"
				//保存更新記錄

				info += "\r\n#b強化:#k 最大值#g-> #r本次";
				info += "\r\n#b力量:#k最大值:15 #g-> #r" + randList[0];
				info += "\r\n#b敏捷:#k最大值:15 #g-> #r" + randList[1];
				info += "\r\n#b智力:#k最大值:15 #g-> #r" + randList[2];
				info += "\r\n#b運氣:#k最大值:15#g-> #r" + randList[3];
				info += "\r\n#b攻擊力:#k最大值:15 #g-> #r" + randList[4];
				info += "\r\n#b魔法力:#k最大值:15 #g-> #r" + randList[5];
				info += "\r\n#bBOSS傷害:#k最大值:10 #g-> #r" + randList[6];
				info += "\r\n#b無視:#k最大值:3 #g-> #r" + randList[7];
				info += "\r\n#b全屬性:#k最大值:2 #g-> #r" + 2;
				info += "\r\n#b最大HP:#k最大值:500 #g-> #r" + randList[8];
				info += "\r\n#b最大MP:#k最大值:500 #g-> #r" + randList[9];


				player.loseItem(need, 1);
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
					//HP
					equip.setMaxHp(equip.getMaxHp() + randList[8]);
					//MP
					equip.setMaxMp(equip.getMaxMp() + randList[9]);

					times++;
					equip.setStatR(times * 2);
					equip.setTitle("神秘強化+" + times);
					player.updateItem(1, equip);
					npc.broadcastGachaponMsgEx("【強化中心】 : 玩家 " + player.getName() + " 強化了神秘之影裝備，獲得了強大的力量！！!", equip);

					npc.say("強化成功");


				} else {

					npc.say("保留了屬性，但是扣除了你一個#v" + need + "#");
				}
			} else {
				npc.say("強化次數已經到達上限,目前強化只開放到15次哦~");
			}


		} else {

			npc.say("請檢查裝備欄第一個位置是否為神秘之影裝備！");

		}

	}

}
