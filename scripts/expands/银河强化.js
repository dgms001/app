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
	1354007,
	1099011,
	1099012,
	1342095,
	1352009,
	1353505,
	1352109,
	1098009,
	1352206,
	1352216,
	1352226,
	1353807,
	1352236,
	1352246,
	1352256,
	1352266,
	1352276,
	1352286,
	1352296,
	1352406,
	1352506,
	1352606,
	1352707,
	1352815,
	1353707,
	1352906,
	1352916,
	1352928,
	1352935,
	1352945,
	1352957,
	1352967,
	1352975,
	1353006,
	1353105,
	1353405,
	1353706,
	1352807,
	1352824,
	1098006,
	1099015,
	1353306
);
var randList = Array(
	Math.floor(3), //str
	Math.floor(3), //dex
	Math.floor(3),//inte
	Math.floor(3),//luk
	Math.floor(3),//pad
	Math.floor(3),//mad
	//	Math.floor(3), //boss
	//	Math.floor(1), //wushi
	//	Math.floor(Math.random() * 100 + 1), //hp
	//	Math.floor(Math.random() * 100 + 1) //mp

);
var need = 4310210;
var need2 = 4001715;
var need3 = 4000313;
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

avail += "#b這裡是銀河副手屬性提升中心:#v1352296##v1352406##v1352246##v1352906#\r\n\r\n#k";
avail += "2、提升屬性需要#rV幣#k#b（分解135-145裝備）#k#v" + need + "#100個，#r1億定居幣#k#v" + need2 + "#1個,#r黃金楓葉#k#v" + need3 + "#1000個\r\n";
avail += "#r3、#r注意：裝備不支持增加火花提升的屬性\r\n";
avail += "4、#r注意：提升的時候可以先砸卷後提升\r\n";
avail += "5、#r注意：把要提升的銀河裝備放在裝備欄的第一個位置！\r\n#k";
avail += " #L0##b我要強化銀河裝備！#l#k\r\n#k";

let selection = npc.askMenuS(avail);
if (selection == 0) {
	equip = player.getInventorySlot(1, 1); //獲得裝備欄 的第一個格子的道具 實例 

	if (!player.hasItem(need, 100) || !player.hasItem(need2, 1) || !player.hasItem(need3, 1000)) {
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
			//進行強化
			//			npc.say("你並沒有#z" + need + "#，所以不能開啟"+player.hasItem(need,1)+player.hasItem(need2,1)+player.hasItem(need3,1000));
			var str = equip.getTitle();
			if (str != null) {
				if (str.length > 0) {
					//強化了的
					str = str.substring(3, str.length);
					times = parseInt(str);
				} else {
					times = 0;
				}

			}
			if (times < 50) {
				var info = "裝備：#v" + equip.getDataId() + "##t" + equip.getDataId() + "#\r\n當前六維屬性如下：\r\n";
				info += "#r點擊‘是’會增加當前顯示屬性並且強化等級+1 ，最多強化50次#k\r\n"
				//保存更新記錄

				info += "\r\n#b強化:#k#g-> #r本次";
				info += "\r\n#b力量:#k#g-> #r" + randList[0];
				info += "\r\n#b敏捷:#k#g-> #r" + randList[1];
				info += "\r\n#b智力:#k#g-> #r" + randList[2];
				info += "\r\n#b運氣:#k#g-> #r" + randList[3];
				info += "\r\n#b攻擊力:#k#g-> #r" + randList[4];
				info += "\r\n#b魔法力:#k#g-> #r" + randList[5];
				/*				info += "\r\n#bBOSS傷害:#k最大值:10 #g-> #r" + randList[6];
								info += "\r\n#b無視:#k#g-> #r" + randList[7];
								info += "\r\n#b全屬性:#k最大值:2 #g-> #r" + 2;
								info += "\r\n#b最大HP:#k最大值:500 #g-> #r" + randList[8];
								info += "\r\n#b最大MP:#k最大值:500 #g-> #r" + randList[9];*/


				//				player.loseItem(need, 1);
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
					/*					equip.setBossDamageR(equip.getBossDamageR() + randList[6]);
										//無視
										equip.setIgnorePDR(equip.getIgnorePDR() + randList[7]);
										//HP
										equip.setMaxHp(equip.getMaxHp() + randList[8]);
										//MP
										equip.setMaxMp(equip.getMaxMp() + randList[9]);*/

					times++;
					//					equip.setStatR(times*2);
					equip.setTitle("銀河強化+" + times);
					player.updateItem(1, equip);
					npc.broadcastGachaponMsgEx("【強化中心】 : 玩家 " + player.getName() + " 強化了銀河裝備，獲得了強大的力量！！!", equip);

					player.loseItem(need, 100);
					player.loseItem(need2, 1);
					player.loseItem(need3, 1000);
					npc.say("強化成功");


				} else {

					//					npc.say("保留了屬性，但是扣除了你一個#v"+need+"#");
					npc.say("升級失敗");
				}
			} else {
				npc.say("強化次數已經到達上限,目前強化只開放到10次哦~");
			}


		} else {

			npc.say("請檢查裝備欄第一個位置是否為銀河裝備！");

		}

	}

}
