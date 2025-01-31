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
	1592032,
	1582025,
	1552072,
	1542072,
	1532118,
	1522113,
	1492199,
	1482189,
	1472235,
	1462213,
	1452226,
	1442242,
	1432187,
	1422158,
	1412152,
	1402220,
	1382231,
	1372195,
	1362109,
	1342090,
	1332247,
	1322223,
	1312173,
	1302297,
	1292035,
	1282028,
	1272028,
	1262029,
	1252033,
	1242090,
	1232084,
	1222084,
	1213032,
	1212089,
	1152160,
	1132247,
	1122269,
	1102623,
	1082556,
	1072870,
	1052669,
	1032224,
	1022211,
	1012438,
	1003976
);
var randList = Array(
	Math.floor(Math.random() * 5 + 1), //str
	Math.floor(Math.random() * 5 + 1), //dex
	Math.floor(Math.random() * 5 + 1), //inte
	Math.floor(Math.random() * 5 + 1), //luk
	Math.floor(Math.random() * 5 + 1), //pad
	Math.floor(Math.random() * 5 + 1), //mad
	Math.floor(Math.random() * 3 + 3), //boss
	Math.floor(Math.random() * 1 + 1), //wushi
	Math.floor(Math.random() * 100 + 1), //hp
	Math.floor(Math.random() * 100 + 1) //mp

);
var need = 4023025;
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

avail += "#b這裡是漩渦防具屬性提升中心:#v1152160##v1152160##v1152160##v1152160#\r\n\r\n#k";
avail += "2、提升屬性需要#v" + need + "#一顆，#r如果選擇保留強化屬性需要額外消耗一顆#k 該物品在裝備分解中獲得\r\n";
avail += "#r3、#r注意：裝備不支持增加火花提升的屬性\r\n";
avail += "4、#r注意：提升的時候可以先砸卷後提升\r\n";
avail += "5、#r注意：把要提升的漩渦裝備放在裝備欄的第一個位置！\r\n#k";
avail += " #L0##b我要強化漩渦裝備！#l#k\r\n#k";

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
			if (times < 10) {
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
					equip.setTitle("漩渦強化+" + times);
					player.updateItem(1, equip);
					npc.broadcastGachaponMsgEx("【強化中心】 : 玩家 " + player.getName() + " 強化了漩渦裝備，獲得了強大的力量！！!", equip);

					npc.say("強化成功");


				} else {

					npc.say("保留了屬性，但是扣除了你一個#v" + need + "#");
				}
			} else {
				npc.say("強化次數已經到達上限,目前強化只開放到10次哦~");
			}


		} else {

			npc.say("請檢查裝備欄第一個位置是否為漩渦裝備！");

		}

	}

}
