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
var zhizuoPQ = Array(1182092, 1182093, 1182094, 1182095, 1182096, 1032242, 1032243, 1032244, 1032245, 1032246, 1113164, 1113165, 1113166, 1113167, 1113168, 1122285, 1122286, 1122287, 1122288, 1122289, 1022233, 1022234, 1022235, 1022236, 1022237, 0);
var randList = Array(

	Array(Math.floor(50), //str
		Math.floor(50), //dex
		Math.floor(50),//inte
		Math.floor(50),//luk
		Math.floor(50),//pad
		Math.floor(50),//mad
		Math.floor(0), //boss
		Math.floor(0), //wushi
	),

	Array(Math.floor(100), //str
		Math.floor(100), //dex
		Math.floor(100),//inte
		Math.floor(100),//luk
		Math.floor(100),//pad
		Math.floor(100),//mad
		Math.floor(0), //boss
		Math.floor(0), //wushi
	),

	Array(Math.floor(150), //str
		Math.floor(150), //dex
		Math.floor(150),//inte
		Math.floor(150),//luk
		Math.floor(150),//pad
		Math.floor(150),//mad
		Math.floor(0), //boss
		Math.floor(0), //wushi
	),

	Array(Math.floor(200), //str
		Math.floor(200), //dex
		Math.floor(200),//inte
		Math.floor(200),//luk
		Math.floor(200),//pad
		Math.floor(200),//mad
		Math.floor(0), //boss
		Math.floor(0), //wushi
	),

	Array(Math.floor(250), //str
		Math.floor(250), //dex
		Math.floor(250),//inte
		Math.floor(250),//luk
		Math.floor(250),//pad
		Math.floor(250),//mad
		Math.floor(0), //boss
		Math.floor(0), //wushi
	),

	Array(Math.floor(50), //str
		Math.floor(50), //dex
		Math.floor(50),//inte
		Math.floor(50),//luk
		Math.floor(50),//pad
		Math.floor(50),//mad
		Math.floor(0), //boss
		Math.floor(0), //wushi
	),

	Array(Math.floor(100), //str
		Math.floor(100), //dex
		Math.floor(100),//inte
		Math.floor(100),//luk
		Math.floor(100),//pad
		Math.floor(100),//mad
		Math.floor(0), //boss
		Math.floor(0), //wushi
	),

	Array(Math.floor(150), //str
		Math.floor(150), //dex
		Math.floor(150),//inte
		Math.floor(150),//luk
		Math.floor(150),//pad
		Math.floor(150),//mad
		Math.floor(0), //boss
		Math.floor(0), //wushi
	),

	Array(Math.floor(200), //str
		Math.floor(200), //dex
		Math.floor(200),//inte
		Math.floor(200),//luk
		Math.floor(200),//pad
		Math.floor(200),//mad
		Math.floor(0), //boss
		Math.floor(0), //wushi
	),

	Array(Math.floor(250), //str
		Math.floor(250), //dex
		Math.floor(250),//inte
		Math.floor(250),//luk
		Math.floor(250),//pad
		Math.floor(250),//mad
		Math.floor(0), //boss
		Math.floor(0), //wushi
	),

	Array(Math.floor(50), //str
		Math.floor(50), //dex
		Math.floor(50),//inte
		Math.floor(50),//luk
		Math.floor(50),//pad
		Math.floor(50),//mad
		Math.floor(0), //boss
		Math.floor(0), //wushi
	),

	Array(Math.floor(100), //str
		Math.floor(100), //dex
		Math.floor(100),//inte
		Math.floor(100),//luk
		Math.floor(100),//pad
		Math.floor(100),//mad
		Math.floor(0), //boss
		Math.floor(0), //wushi
	),

	Array(Math.floor(150), //str
		Math.floor(150), //dex
		Math.floor(150),//inte
		Math.floor(150),//luk
		Math.floor(150),//pad
		Math.floor(150),//mad
		Math.floor(0), //boss
		Math.floor(0), //wushi
	),

	Array(Math.floor(200), //str
		Math.floor(200), //dex
		Math.floor(200),//inte
		Math.floor(200),//luk
		Math.floor(200),//pad
		Math.floor(200),//mad
		Math.floor(0), //boss
		Math.floor(0), //wushi
	),

	Array(Math.floor(250), //str
		Math.floor(250), //dex
		Math.floor(250),//inte
		Math.floor(250),//luk
		Math.floor(250),//pad
		Math.floor(250),//mad
		Math.floor(0), //boss
		Math.floor(0), //wushi
	),

	Array(Math.floor(50), //str
		Math.floor(50), //dex
		Math.floor(50),//inte
		Math.floor(50),//luk
		Math.floor(50),//pad
		Math.floor(50),//mad
		Math.floor(0), //boss
		Math.floor(0), //wushi
	),

	Array(Math.floor(100), //str
		Math.floor(100), //dex
		Math.floor(100),//inte
		Math.floor(100),//luk
		Math.floor(100),//pad
		Math.floor(100),//mad
		Math.floor(0), //boss
		Math.floor(0), //wushi
	),

	Array(Math.floor(150), //str
		Math.floor(150), //dex
		Math.floor(150),//inte
		Math.floor(150),//luk
		Math.floor(150),//pad
		Math.floor(150),//mad
		Math.floor(0), //boss
		Math.floor(0), //wushi
	),

	Array(Math.floor(200), //str
		Math.floor(200), //dex
		Math.floor(200),//inte
		Math.floor(200),//luk
		Math.floor(200),//pad
		Math.floor(200),//mad
		Math.floor(0), //boss
		Math.floor(0), //wushi
	),

	Array(Math.floor(250), //str
		Math.floor(250), //dex
		Math.floor(250),//inte
		Math.floor(250),//luk
		Math.floor(250),//pad
		Math.floor(250),//mad
		Math.floor(0), //boss
		Math.floor(0), //wushi
	),

	Array(Math.floor(50), //str
		Math.floor(50), //dex
		Math.floor(50),//inte
		Math.floor(50),//luk
		Math.floor(50),//pad
		Math.floor(50),//mad
		Math.floor(0), //boss
		Math.floor(0), //wushi
	),

	Array(Math.floor(100), //str
		Math.floor(100), //dex
		Math.floor(100),//inte
		Math.floor(100),//luk
		Math.floor(100),//pad
		Math.floor(100),//mad
		Math.floor(0), //boss
		Math.floor(0), //wushi
	),

	Array(Math.floor(150), //str
		Math.floor(150), //dex
		Math.floor(150),//inte
		Math.floor(150),//luk
		Math.floor(150),//pad
		Math.floor(150),//mad
		Math.floor(0), //boss
		Math.floor(0), //wushi
	),

	Array(Math.floor(200), //str
		Math.floor(200), //dex
		Math.floor(200),//inte
		Math.floor(200),//luk
		Math.floor(200),//pad
		Math.floor(200),//mad
		Math.floor(0), //boss
		Math.floor(0), //wushi
	),

	Array(Math.floor(250), //str
		Math.floor(250), //dex
		Math.floor(250),//inte
		Math.floor(250),//luk
		Math.floor(250),//pad
		Math.floor(250),//mad
		Math.floor(0), //boss
		Math.floor(0), //wushi
	)




);
var itemPQ = Array(
	Array(
		Array(1032242, 1),
		Array(1113164, 1),
		Array(1122285, 1),
		Array(1022233, 1),
	),
	Array(
		Array(1032243, 1),
		Array(1113165, 1),
		Array(1122286, 1),
		Array(1022234, 1),
	),
	Array(
		Array(1032244, 1),
		Array(1113166, 1),
		Array(1122287, 1),
		Array(1022235, 1),
	),
	Array(
		Array(1032245, 1),
		Array(1113167, 1),
		Array(1122288, 1),
		Array(1022236, 1),
	),
	Array(
		Array(1032246, 1),
		Array(1113168, 1),
		Array(1122289, 1),
		Array(1022237, 1),
	),

	Array(
		Array(2435501, 10),
	),
	Array(
		Array(2435501, 25),
		Array(1032242, 1),
	),
	Array(
		Array(2435501, 50),
		Array(1032243, 1),
	),
	Array(
		Array(2435501, 90),
		Array(1032244, 1),
	),
	Array(
		Array(2435501, 150),
		Array(1032245, 1),
	),


	Array(
		Array(2435501, 10),
	),
	Array(
		Array(2435501, 25),
		Array(1113164, 1),
	),
	Array(
		Array(2435501, 50),
		Array(1113165, 1),
	),
	Array(
		Array(2435501, 90),
		Array(1113166, 1),
	),
	Array(
		Array(2435501, 150),
		Array(1113167, 1),
	),


	Array(
		Array(2435501, 10),
	),
	Array(
		Array(2435501, 25),
		Array(1122285, 1),
	),
	Array(
		Array(2435501, 50),
		Array(1122286, 1),
	),
	Array(
		Array(2435501, 90),
		Array(1122287, 1),
	),
	Array(
		Array(2435501, 150),
		Array(1122288, 1),
	),


	Array(
		Array(2435501, 10),
	),
	Array(
		Array(2435501, 25),
		Array(1022233, 1),
	),
	Array(
		Array(2435501, 50),
		Array(1022234, 1),
	),
	Array(
		Array(2435501, 90),
		Array(1022235, 1),
	),
	Array(
		Array(2435501, 150),
		Array(1022236, 1),
	),




);
var idbans = -1;
var zhizuo = null;
var text = "    " + a3 + "#fs20##fc0xFFFF4EFF#【強化中心】" + a3 + "#fs12##n#l\r\n";
var lq1 = "#fUI/UIWindow2.img/crossHunterUI/reward/button/normal/0#"
var lq2 = "#fUI/UIWindow2.img/crossHunterUI/reward/button/disabled/0#"
text += "#b#fs16#可製作裝備：";
for (var i = 0; i < zhizuoPQ.length - 1; i++) {
	var tips = "";
	if (i % 5 == 0) {
		text += "\r\n";
	}
	text += "#b#L" + i + "##b#v" + zhizuoPQ[i] + "##l";
}
text += "\r\n#fs16#新手材料：[#v2435501#*10][四屬ADAP+50]\r\n";
text += "普通材料：[#v2435501#*25+新手][四屬ADAP+100]\r\n";
text += "高手材料：[#v2435501#*50+普通][四屬ADAP+150]\r\n";
text += "大師材料：[#v2435501#*90+高手][四屬ADAP+200]\r\n";
text += "傳說材料：[#v2435501#*150+大師][四屬ADAP+250]\r\n";
text += "#r該系列裝備的衝捲素質不會保留，請玩家注意";

let idbans = npc.askMenuS(text);

var text = "#r#e#z" + zhizuoPQ[idbans] + "##n#b製作材料如下：\r\n";
zhizuo = itemPQ[idbans];
//text += "#r#e#z" + zhizuoPQ[idbans] + "#1/#b#c"+zhizuoPQ[idbans]+"##k\r\n";
for (var i = 0; i < zhizuo.length; i++) {
	var itemId = zhizuo[i][0];
	var getItemQuantity = zhizuo[i][1];
	var currentItemQuantity = player.getAmountOfItem(zhizuo[i][0]);
	text += "#v" + itemId + "##b#z" + itemId + "##k #rx " + getItemQuantity + " #b身上持有數量[" + currentItemQuantity + "]#k\r\n";
}
text += "\r\n#b力量:#k#g-> #r" + randList[idbans][0];
text += "\r\n#b敏捷:#k#g-> #r" + randList[idbans][1];
text += "\r\n#b智力:#k#g-> #r" + randList[idbans][2];
text += "\r\n#b幸運:#k#g-> #r" + randList[idbans][3];
text += "\r\n#b攻擊力:#k#g-> #r" + randList[idbans][4];
text += "\r\n#b魔法力:#k#g-> #r" + randList[idbans][5];
text += "\r\n#bBOSS傷害:#k#g-> #r" + randList[idbans][6];
text += "\r\n#b無視:#k#g-> #r" + randList[idbans][7];
text += "\r\n#d是否現在就升級該裝備？#k";
let sel = npc.askYesNo(text);

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
				newItem.setPad(randList[idbans][4]);
				newItem.setMad(randList[idbans][5]);
				newItem.setBossDamageR(randList[idbans][6]);
				newItem.setIgnorePDR(randList[idbans][7]);
				player.gainItem(newItem);
				//npc.broadcastGachaponMsgEx( "[升級中心] : 恭喜玩家 " + player.getName() + " 升級成功",toItemId);
				npc.say("恭喜您,升級成功！快打開包裹看看吧！");
				break;
			}
		}
	}
}