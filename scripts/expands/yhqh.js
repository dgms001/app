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
var need = 4033907;
var SN;
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

avail += "#b這裡是【銀河副手】強化中心:\r\n\r\n#k";
avail += "提升屬性需要#v" + need + "#一顆，該物品在分解裝備中獲得\r\n";
avail += " #L0##b我要強化銀河副手！#l#k\r\n#k";
let selection = npc.askMenuS(avail);
if (selection == 0) {
	equip = player.getInventorySlot(1, 1); //獲得裝備欄 的第一個格子的道具 實例 

	if (!player.hasItem(need, 1)) {
		npc.say("你並沒有#z" + need + "#，所以不能開啟");

	} else if (equip == null) {
		npc.askMenuS("請在裝備欄第一個位置放上裝備！");

	} else {
		while (true) {
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
				if (times == 50) {
					npc.say("不能再強化了");
				} else {

					npc.sayNext("當前裝備強化等級為+#r" + times + "#k\r\n是否要進行強化把裝備強化成+#r" + (times + 1) + "#k呢？");


					if (player.getAmountOfItem(need) < 1) {
						npc.say("你的材料不夠 需要#v" + need + "# X1");

					} else {

						if (times < 50) {
							var chance = Math.floor(Math.random() * 100);
							player.loseItem(need, 1);
							if (times < 10) {
								chance = 100;
							}
							if (chance >= 50) {
								//成功
								STR = equip.getStr();
								DEX = equip.getDex();
								INT = equip.getInt();
								LUK = equip.getLuk();
								PAD = equip.getPad(); //物理傷害
								MAD = equip.getMad(); //魔法傷害

								//替換掉屬性
								//力量
								equip.setStr(STR + 3);
								//敏捷
								equip.setDex(DEX + 3);
								//智力
								equip.setInt(INT + 3);
								//運氣
								equip.setLuk(LUK + 3);
								//攻擊
								equip.setPad(PAD + 3);
								//魔法攻擊
								equip.setMad(MAD + 3);
								times++;
								equip.setTitle("淬煉銀河+" + times);
								player.updateItem(1, equip);
								npc.broadcastGachaponMsgEx("【淬煉銀河副手】 : 玩家 " + player.getName() + " 強化了裝備[銀河副手]+" + times + "羨慕我吧？", equip);

								npc.say("強化成功");
							} else if (chance < 15) {
								//失敗且掉星
								STR = equip.getStr();
								DEX = equip.getDex();
								INT = equip.getInt();
								LUK = equip.getLuk();
								PAD = equip.getPad(); //物理傷害
								MAD = equip.getMad(); //魔法傷害
								player.loseItem(need, 1);
								//替換掉屬性
								//力量
								equip.setStr(STR - 3);
								//敏捷
								equip.setDex(DEX - 3);
								//智力
								equip.setInt(INT - 3);
								//運氣
								equip.setLuk(LUK - 3);
								//攻擊
								equip.setPad(PAD - 3);
								//魔法攻擊
								equip.setMad(MAD - 3);
								times--;
								equip.setTitle("淬煉銀河+" + times);
								player.updateItem(1, equip);

								npc.say("強化失敗，等級下降1");
							} else {
								//失敗不掉星
								npc.say("強化失敗，但是等級沒有下降");
							}

						} else {
							npc.say("強化次數已經到達上限,目前強化只開放到30次哦~");
						}

					}
				}

			} else {
				npc.say("請確認你的第一格裝備是否為銀河副手");

			}
		}
	}

}