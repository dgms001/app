/* 圓夢谷 TMS 237 萬能菜單 */
var status = -1
var txt;
/*------------------------- 表情符號 -------------------------*/
var SR1 = "#fUI/SoulUI.img/DungeonEffect/2350012/2#"; //最上面的
var SR2 = "#fUI/SoulUI.img/DungeonEffect/2350012/4#"; //最上面的
var SR3 = "#v4033136#"; //最上面的
var SR4 = "#v4033136#"; //最上面的
var SR5 = "#fEffect/EffectPL.img/Beautyroid/connect_end/0"; //區隔條
var SR6 = "#fEffect/EventEffect.img/typingDefense/balloonIcon/blind/0#"; //最上面的星星-6
var SR7 = "#fEffect/CharacterEff/1050334/1/2#"; //最上面的星星-7
var SR8 = "#fEffect/CharacterEff/1050334/1/3#"; //最上面的星星-8
var SR9 = "#fEffect/CharacterEff/1050334/2/0#"; //最上面的星星-9
var SR10 = "#fEffect/CharacterEff/1050334/2/1#"; //最上面的星星-10
var SR11 = "#fEffect/CharacterEff/1050334/2/2#"; //最上面的星星-11
var SR12 = "#fEffect/CharacterEff/1050334/2/3#"; //最上面的星星-12
var GC2 = "#fEffect/CharacterEff/1005267/4/0#"; //"+z+"//小選項用
var XD0 = "#fEffect/CharacterEff/1051366/0/0#"
//var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var GC1 = "";

//var STAR1 = "#fEffect/CharacterEff/forceAtom/29/atom/3/endEff/0#"; //大星星-1
//var STAR2 = "#fEffect/CharacterEff/forceAtom/29/atom/2/endEff/1#"; //大星星-2
//var STAR3 = "#fEffect/CharacterEff/forceAtom/29/atom/3/endEff/2#"; //大星星-3
//var STAR4 = "#fEffect/CharacterEff/forceAtom/29/atom/2/endEff/3#"; //大星星-4
//var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
//var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //紅心桃心
//var Rainbow = "#fEffect/ItemEff/1070069/effect/walk1/2#" //彩虹

/*------------------------------------------------------------*/
let itemId = 4031491;//消耗道具
let itemIdC = Array(//消耗數量
	2000,
	2500,
	3000,
	3500
);
let itemIdS = 5064400;//獲得

txt = "\t\t\t#fs17##r五一活動#v" + itemIdS + "#\r\n";
txt += "#e#fs11#";
txt += "#b任務屬性:[帳號限定]\t每次獲得:[#v" + itemIdS + "#*10]\r\n";
if (player.getEventValue("五一活動恢復1") < 5) {
	txt += "#L1#" + GC1 + "五一活動恢復1[210等][5次][消耗#v" + itemId + "#" + itemIdC[0] + "]#l \r\n";
} if (player.getEventValue("五一活動恢復2") < 5) {
	txt += "#L2#" + GC1 + "五一活動恢復2[230等][5次][消耗#v" + itemId + "#" + itemIdC[1] + "]#l \r\n";
} if (player.getEventValue("五一活動恢復3") < 5) {
	txt += "#L3#" + GC1 + "五一活動恢復3[250等][5次][消耗#v" + itemId + "#" + itemIdC[2] + "]#l \r\n";
} if (player.getEventValue("五一活動恢復4") < 5) {
	txt += "#L4#" + GC1 + "五一活動恢復4[260等][5次][消耗#v" + itemId + "#" + itemIdC[3] + "]#l \r\n";
}
if (player.isGm()) {

	txt += "";
}

let selection = npc.askMenu(txt, true);

switch (selection) {

	case 1:
		if (player.getLevel() < 210) {
			npc.say("#fs18##b#e玩家等級不足210等");
		} else if (player.getEventValue("五一活動恢復1") >= 5) {
			npc.say("#fs18##b#e活動期間次數已滿");
		} else if (!player.hasItem(itemId, itemIdC[0])) {
			npc.say("#fs18##b#e玩家持有的道具不足");
		} else {
			player.loseItem(itemId, itemIdC[0]);
			player.gainItem(itemIdS, 10);
			player.addEventValue("五一活動恢復1", 1, 99);
			npc.say("#fs18##b#e獲得#g#v" + itemIdS + "##z" + itemIdS + "## #b* 10 個");
			addvalue(10);
		}
		break;
	case 2:
		if (player.getLevel() < 230) {
			npc.say("#fs18##b#e玩家等級不足230等");
		} else if (player.getEventValue("五一活動恢復2") >= 5) {
			npc.say("#fs18##b#e活動期間次數已滿");
		} else if (!player.hasItem(itemId, itemIdC[1])) {
			npc.say("#fs18##b#e玩家持有的道具不足");
		} else {
			player.loseItem(itemId, itemIdC[1]);
			player.gainItem(itemIdS, 10);
			player.addEventValue("五一活動恢復2", 1, 99);
			npc.say("#fs18##b#e獲得#g#v" + itemIdS + "##z" + itemIdS + "## #b* 10 個");
			addvalue(20);
		}
		break;
	case 3:
		if (player.getLevel() < 250) {
			npc.say("#fs18##b#e玩家等級不足250等");
		} else if (player.getEventValue("五一活動恢復3") >= 5) {
			npc.say("#fs18##b#e活動期間次數已滿");
		} else if (!player.hasItem(itemId, itemIdC[2])) {
			npc.say("#fs18##b#e玩家持有的道具不足");
		} else {
			player.loseItem(itemId, itemIdC[2]);
			player.gainItem(itemIdS, 10);
			player.addEventValue("五一活動恢復3", 1, 99);
			npc.say("#fs18##b#e獲得#g#v" + itemIdS + "##z" + itemIdS + "## #b* 10 個");
			addvalue(30);
		}
		break;
	case 4:
		if (player.getLevel() < 260) {
			npc.say("#fs18##b#e玩家等級不足260等");
		} else if (player.getEventValue("五一活動恢復4") >= 5) {
			npc.say("#fs18##b#e活動期間次數已滿");
		} else if (!player.hasItem(itemId, itemIdC[3])) {
			npc.say("#fs18##b#e玩家持有的道具不足");
		} else {
			player.loseItem(itemId, itemIdC[3]);
			player.gainItem(itemIdS, 10);
			player.addEventValue("五一活動恢復4", 1, 99);
			npc.say("#fs18##b#e獲得#g#v" + itemIdS + "##z" + itemIdS + "## #b* 10 個");
			addvalue(40);
		}
		break;



}

function addvalue(level) { //給予經驗值
	var sql = "update dgms_zhanling set value=value+? where name=?";
	player.customSqlUpdate(sql, level, "" + getAccountName() + "");

}

function getAccountName() {
	var sql = "select name from characters where id=  " + player.getId() + " ";
	var resultList = player.customSqlResult(sql);
	var accountName = 0;
	for (var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if (result == null) {
			break;
		}
		accountName = result.get("name");
	}
	return accountName;
}