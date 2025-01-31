//分布式制作裝備 by dgms qq:381991414
var status = 0;
var zhizuoPQ = Array(1132308, 1012632, 1022278, 1162080, 1162081, 1162082, 1162083, 1122430, 1113306);
var zhizuoPQQ = Array(200, 200, 200, 200, 200, 200, 200, 200, 200);
var itemidd = 2633634;
var itemPQ = Array(
	Array(
		Array(2633634, 200),
	),

	Array(
		Array(2633634, 200),
	),

	Array(
		Array(2633634, 200),

	),

	Array(
		Array(2633634, 200),
	),

	Array(
		Array(2633634, 200),
	),

	Array(
		Array(2633634, 200),
	),

	Array(
		Array(2633634, 200),
	),

	Array(
		Array(2633634, 200),
	),

	Array(
		Array(2633634, 200),
	)

);
var idbans = -1;
var zhizuo = null;
var gg = player.getAmountOfItem(itemidd);
let mapA = map.getId();
if (mapA == 993001100) { //限制開啟地圖
	//player.showSystemMessage("在卡BUG頭蓋骨給你打出來 操!!");
} else {
	txt = "#fs21##e#b身上持有#v" + itemidd + "##r*" + gg + "個\r\n#fs14#";
	txt += "#fs21##e#b#b請選擇你要兌換的物品\r\n";
	var lq1 = "#fUI/UIWindow2.img/crossHunterUI/reward/button/normal/0#"
	var lq2 = "#fUI/UIWindow2.img/crossHunterUI/reward/button/disabled/0#"
	for (var i = 0; i < zhizuoPQ.length; i++) {
		txt += "#b#L" + i + "##b#v" + zhizuoPQ[i] + "##z" + zhizuoPQ[i] + "# #r消耗" + zhizuoPQQ[i] + "個\r\n";
	}
}
let idbans = npc.askMenuA(txt);

zhizuo = itemPQ[idbans];
var text = "#fs15#";
for (var i = 0; i < zhizuo.length; i++) {
	var itemId = zhizuo[i][0];
	var getItemQuantity = zhizuo[i][1];
	var currentItemQuantity = player.getAmountOfItem(zhizuo[i][0]);
	text += "#b確定消耗#v" + itemId + "##r#t" + itemId + "##b" + getItemQuantity + "個\r\n";
}
text += "兌換#r#v" + zhizuoPQ[idbans] + "##z" + zhizuoPQ[idbans] + "#?";

text += "";
let sel = npc.askYesNo(text);

if (sel == 1) {
	if (player.getFreeSlots(1) < 8 || player.getFreeSlots(2) < 8 || player.getFreeSlots(3) < 8 || player.getFreeSlots(4) < 8 || player.getFreeSlots(5) < 8) {
		npc.say("您的背包空間不足,請保證每個欄位至少8格的空間,以避免領取失敗。");
	} else {
		var jilu = 0;

		for (var i = 0; i < zhizuo.length; i++) {
			var itemId = zhizuo[i][0];
			var getItemQuantity = zhizuo[i][1];
			if (player.hasItem(itemId, getItemQuantity)) {
				jilu++;
			}
			var toItemId = player.makeItemWithId(zhizuoPQ[idbans]);
			if (jilu != zhizuo.length) {
				player.scriptProgressMessage("材料不足");
			} else {
				for (var i = 0; i < zhizuo.length; i++) {
					var itemId = zhizuo[i][0];
					var getItemQuantity = zhizuo[i][1];
					player.loseItem(itemId, getItemQuantity);
				}
				player.gainItem(zhizuoPQ[idbans], 1);
				//npc.broadcastGachaponMsgEx( "[制作中心] : 恭喜玩家 " + player.getName() + " 制作成功",toItemId);
				npc.say("兌換成功!");
				break;
			}
		}
	}
}