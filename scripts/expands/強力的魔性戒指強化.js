/* This is mada by Care

 * author dgms

 * global player

 * 腳本定制 技術支持 QQ 381991414

 */
var ax1 = "#fMap/MapHelper.img/minimap/match#";
var ax2 = "#fEffect/CharacterEff/1042176/2/0#";
var hd = "#fMap/MapHelper.img/weather/knitsWithWarmWinter/8#";
var zb = "#fMap/MapHelper.img/weather/birthday/2#";
var yb = "#fMap/MapHelper.img/weather/birthday/5#";
var a3 = "#fEffect/ItemEff/1070069/effect/walk1/2#"
var status = 0;
var zhizuoPQ = Array(1113034, 1113055, 1113195, 1113196, 0);
var randList = Array(

	Array(Math.floor(0), //str
		Math.floor(0), //dex
		Math.floor(0),//inte
		Math.floor(0),//luk
		Math.floor(0),//Hp
		Math.floor(0),//pad
		Math.floor(0),//mad
		Math.floor(0), //boss
		Math.floor(0), //wushi
		Math.floor(0), //damr
	),

	Array(Math.floor(0), //str
		Math.floor(0), //dex
		Math.floor(0),//inte
		Math.floor(0),//luk
		Math.floor(0),//Hp
		Math.floor(0),//pad
		Math.floor(0),//mad
		Math.floor(0), //boss
		Math.floor(0), //wushi
		Math.floor(0), //damr
	),

	Array(Math.floor(0), //str
		Math.floor(0), //dex
		Math.floor(0),//inte
		Math.floor(0),//luk
		Math.floor(0),//Hp
		Math.floor(0),//pad
		Math.floor(0),//mad
		Math.floor(0), //boss
		Math.floor(0), //wushi
		Math.floor(0), //damr
	),

	Array(Math.floor(300), //str
		Math.floor(300), //dex
		Math.floor(300),//inte
		Math.floor(300),//luk
		Math.floor(5000),//Hp
		Math.floor(150),//pad
		Math.floor(150),//mad
		Math.floor(25), //boss
		Math.floor(25), //wushi
		Math.floor(25), //damr
	)


);
var itemPQ = Array(
	Array(
		Array(4009456, 1),
	),

	Array(
		Array(1113034, 1),
		Array(4009456, 10),
		Array(4032053, 100),
		Array(4034842, 0),
	),

	Array(
		Array(1113055, 1),
		Array(4009456, 50),
		Array(4032053, 600),
		Array(4034842, 1),
	),

	Array(
		Array(1113195, 1),
		Array(4009456, 500),
		Array(4032053, 30000),
		Array(4034842, 5),
	),




);
var idbans = -1;
var zhizuo = null;
var txt = "";
var lq1 = "#fUI/UIWindow2.img/crossHunterUI/reward/button/normal/0#"
var lq2 = "#fUI/UIWindow2.img/crossHunterUI/reward/button/disabled/0#"
var GC1 = "#fEffect/CharacterEff/1050312/0/0#";//最上面的亮粉
var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#";//紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#";//"+z+"//小選項用
//var GC2 = "#fEffect/ItemEff/1070069/effect/walk1/2#"
txt = "" + GC1 + GC1 + GC1 + GC1 + "\r\n";
txt += "\t\t\t\t\t#e#fs26##fc0xFF43EABE#【戒指強化】\r\n#n";
txt += "" + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + "";
txt += "#fs17##e#b";
for (var i = 0; i < zhizuoPQ.length - 1; i++) {
	var tips = "";
	if (i % 4 == 0) {
		txt += "\r\n";
	}
	txt += "\t\t\t  #b#L" + i + "##b#v" + zhizuoPQ[i] + "##g#z" + zhizuoPQ[i] + "##l\r\n";
}
txt += "";
txt += "";
let idbans = npc.askMenuA(txt, true);

var txt = "#r#e#v" + zhizuoPQ[idbans] + "##z" + zhizuoPQ[idbans] + "##b需求材料如下：\r\n\r\n";
zhizuo = itemPQ[idbans];
//txt += "#r#e#z" + zhizuoPQ[idbans] + "#1/#b#c"+zhizuoPQ[idbans]+"##k\r\n";
for (var i = 0; i < zhizuo.length; i++) {
	var itemId = zhizuo[i][0];
	var getItemQuantity = zhizuo[i][1];
	var currentItemQuantity = player.getAmountOfItem(zhizuo[i][0]);
	txt += "#v" + itemId + "##e#b#z" + itemId + "##k#g" + getItemQuantity + "個 #b身上持有數量[" + currentItemQuantity + "]#k\r\n";
}
txt += "\r\n#b力量:#k#g-> #r" + randList[idbans][0];
txt += "\r\n#b敏捷:#k#g-> #r" + randList[idbans][1];
txt += "\r\n#b智力:#k#g-> #r" + randList[idbans][2];
txt += "\r\n#b幸運:#k#g-> #r" + randList[idbans][3];
txt += "\r\n#b血量:#k#g-> #r" + randList[idbans][4];
txt += "\r\n#b攻擊力:#k#g-> #r" + randList[idbans][5];
txt += "\r\n#b魔法力:#k#g-> #r" + randList[idbans][6];
txt += "\r\n#bBOSS傷害:#k#g-> #r" + randList[idbans][7];
txt += "\r\n#b無視傷害:#k#g-> #r" + randList[idbans][8];
txt += "\r\n#b總傷害:#k#g-> #r" + randList[idbans][9];
txt += "\r\n#g#L1#【點我製作裝備】#l#k";
let sel = npc.askMenuA(txt, true);

if (sel == 1) {
	if (player.getFreeSlots(1) < 8 || player.getFreeSlots(2) < 8 || player.getFreeSlots(3) < 8 || player.getFreeSlots(4) < 8 || player.getFreeSlots(5) < 8) {
		npc.say("您的背包空間不足,請保證每個欄位至少8格的空間,以避免領取失敗。");
	} else {
		var equip = player.getInventorySlot(1, 1);
		var jilu = 0;
		for (var i = 0; i < zhizuo.length; i++) {
			var itemId = zhizuo[i][0];
			var getItemQuantity = zhizuo[i][1];
			if (player.hasItem(itemId, getItemQuantity)) {
				jilu++;
			}
			if (jilu != zhizuo.length)
				player.scriptProgressMessage("材料不足");
			else {
				for (var i = 0; i < zhizuo.length; i++) {
					var itemId = zhizuo[i][0];
					var getItemQuantity = zhizuo[i][1];
					player.loseItem(itemId, getItemQuantity);
				}
				let newItem = player.makeItemWithId(zhizuoPQ[idbans]);
				newItem.setStr(randList[idbans][0]);
				newItem.setDex(randList[idbans][1]);
				newItem.setInt(randList[idbans][2]);
				newItem.setLuk(randList[idbans][3]);
				newItem.setMaxHp(randList[idbans][4]);
				newItem.setPad(randList[idbans][5]);
				newItem.setMad(randList[idbans][6]);
				newItem.setBossDamageR(randList[idbans][7]);
				newItem.setIgnorePDR(randList[idbans][8]);
				newItem.setDamR(randList[idbans][9]);
				player.gainItem(newItem);
				//npc.broadcastGachaponMsgEx( "[升級中心] : 恭喜玩家 " + player.getName() + " 升級成功",toItemId);
				npc.say("恭喜您,升級成功！");
				break;
			}
		}
	}
}