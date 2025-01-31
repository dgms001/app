/*
武器屬性提升範本
大寶貝
QQ : 423283141
*/

var ax1 = "#fMap/MapHelper.img/minimap/match#";
var ax2 = "#fEffect/CharacterEff/1042176/2/0#";
var hd = "#fMap/MapHelper.img/weather/knitsWithWarmWinter/8#";
var zb = "#fMap/MapHelper.img/weather/birthday/2#";
var yb = "#fMap/MapHelper.img/weather/birthday/5#";


var ItemList = Array(
1582044, 
1572010, 
1562010,
1552130, 
1542128,
1532157, 
1522152, 
1492245, 
1482232, 
1472275, 
1462252, 
1452266, 
1442285, 
1403022,
1432227, 
1422197, 
1412189,
1403022,
1402268,
1382274, 
1372237,
1362149, 
1332289, 
1322264, 
1312213, 
1302355, 
1292022, 
1282040,
1272040, 
1262051, 
1252106, 
1242141, 
1242139, 
1232122,
1222122,
1213022, 
1212129, 
1592022, 
1214022

);
var randList = Array(
	Math.floor(1), //str
	Math.floor(10), //dex
	Math.floor(10),//inte
	Math.floor(10),//luk
	Math.floor(10),//pad
	Math.floor(10),//mad
	Math.floor(1), //boss
	Math.floor(1), //wushi
	Math.floor(1), //zongshang
	Math.floor(Math.random() * 100 + 1), //hp
	Math.floor(Math.random() * 100 + 1) //mp

);
var need = 4310107;
var need1 = 4032216;
var need2 = 4032053;
var need3 = 4001715;
var need4 = 4000444;
var need5 = 4000445;
var need6 = 4000447;
var need7 = 4000448;
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

avail += "#b#fs16#這裡是創世武器升星系統\r\n#k";
avail += "#b#fs13#[星力#r+1#b]\r\n";
avail += "#b提升需要\r\n#r#v" + need + "##z" + need + "#*1      #v" + need1 + "##z" + need1 + "#*2000\r\n#v" + need2 + "##z" + need2 + "#*2000      #v" + need3 + "##z" + need3 + "#*2\r\n#v" + need4 + "##z" + need4 + "#*1000      #v" + need5 + "##z" + need5 + "#*1000\r\n#v" + need6 + "##z" + need6 + "#*1000      #v" + need7 + "##z" + need7 + "#*1000\r\n\r\n";
//avail +="#r把提升的裝備欄放在第一個位置,請先砸卷後提升,裝備不支持增加火花提升的屬性\r\n\r\n#k";

avail += "\t\t\t#L0##e#b#fs16#我要升星#l#k\r\n\r\n#k";

let selection = npc.askMenu(avail);
if (selection == 0) {
	equip = player.getInventorySlot(1, 1); //獲得裝備欄 的第一個格子的道具 實例 

	if (!player.hasItem(need, 1) || !player.hasItem(need1, 2000) || !player.hasItem(need2, 2000) || !player.hasItem(need3, 2) || !player.hasItem(need4, 1000) || !player.hasItem(need5, 1000) || !player.hasItem(need6, 1000) || !player.hasItem(need7, 1000)) {
		npc.say("你並沒有足夠的材料所以不能開啟");

	} else if (equip == null) {
		npc.say("請在裝備欄第一個位置放上裝備！");

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
			if (times < 30) {
				var info = "裝備：#v" + equip.getDataId() + "##t" + equip.getDataId() + "#\r\n#r最多25星力\r\n";
				info += "#r點擊‘是’會增加+1星力#k\r\n"
				//保存更新記錄

				//info += "\r\n#b強化:#k#g-> #r本次";
				info += "\r\n#b星力:#k#g-> #r" + randList[0];
				/*info += "\r\n#b敏捷:#k#g-> #r" + randList[1];
				info += "\r\n#b智力:#k#g-> #r" + randList[2];
				info += "\r\n#b運氣:#k#g-> #r" + randList[3];
				info += "\r\n#b攻擊力:#k#g-> #r" + randList[4];
				info += "\r\n#b魔法力:#k#g-> #r" + randList[5];
				info += "\r\n#bBOSS傷害:#k最大值:3 #g-> #r" + randList[6];
				info += "\r\n#b無視:#k最大值:3 #g-> #r" + randList[7];
				info += "\r\n#b總傷:#k最大值:3 #g-> #r" + randList[8];
				info += "\r\n#b最大HP:#k最大值:100 #g-> #r" + randList[9];
				info += "\r\n#b最大MP:#k最大值:100 #g-> #r" + randList[10];*/


				//player.loseItem(need, 1);
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
					/*equip.setStr(STR + randList[0]);
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
					//總傷
					equip.setDamR(equip.getDamR() + randList[8]);
					//HP
					equip.setMaxHp(equip.getMaxHp() + randList[9]);
					//MP
					equip.setMaxMp(equip.getMaxMp() + randList[10]);*/
                    equip.setCHUC(equip.getCHUC() + 1)
					//times++;
					//equip.setStatR(times*2);
					//equip.setTitle("強化+" + times);
					player.updateItem(1, equip);
					npc.broadcastGachaponMsgEx("【創世星力】 : 玩家 " + player.getName() + " 升級了星力，獲得了強大的力量！！!", equip);

					player.loseItem(need, 1);
					player.loseItem(need1, 2000);
					player.loseItem(need2, 2000);
					player.loseItem(need3, 2);
					player.loseItem(need4, 1000);
					player.loseItem(need5, 1000);
					player.loseItem(need6, 1000);
					player.loseItem(need7, 1000);
					player.showSystemMessage("星力+1");


				} else {

					//					npc.say("保留了屬性，但是扣除了你一個#v"+need+"#");
					player.showSystemMessage("已放棄強化!!!");
				}
			} else {
				npc.say("強化次數已經到達上限,目前強化只開放到30次哦~");
			}


		} else {

			npc.say("請檢查裝備欄第一個位置是否為徽章！");

		}

	}

}
