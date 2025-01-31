/* 圓夢谷 TMS 237 萬能菜單 */
var status = -1
var txt;
/*------------------------- 表情符號 -------------------------*/
var SR1 = "#fUI/SoulUI.img/DungeonEffect/2350012/2#"; //最上面的
var SR2 = "#fUI/SoulUI.img/DungeonEffect/2350012/4#"; //最上面的
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的
var SR4 = "#fUI/SoulUI.img/DungeonEffect/2350012/3#"; //最上面的
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
var GC1 = ""
//var STAR1 = "#fEffect/CharacterEff/forceAtom/29/atom/3/endEff/0#"; //大星星-1
//var STAR2 = "#fEffect/CharacterEff/forceAtom/29/atom/2/endEff/1#"; //大星星-2
//var STAR3 = "#fEffect/CharacterEff/forceAtom/29/atom/3/endEff/2#"; //大星星-3
//var STAR4 = "#fEffect/CharacterEff/forceAtom/29/atom/2/endEff/3#"; //大星星-4
//var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
//var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //紅心桃心
//var Rainbow = "#fEffect/ItemEff/1070069/effect/walk1/2#" //彩虹

/*------------------------------------------------------------*/
itemId = 4032216;
  txt = "#fs21##r#e這裡是每日任務,請開始你今天的任務!!!\r\n\r\n";



txt += "#L1##fs16##e#b收集#v4032216#*1000[等級要求#r100#b][每日#r6#b次][完成獲得#v4001870##r*1#b個]#l \r\n";
txt += "#L2#收集#v4032216#*1000[等級要求#r200#b][每日#r6#b次][完成獲得#v4032053##r*500#b個]#l \r\n";
txt += "#L3#收集#v4032216#*1000[等級要求#r230#b][每日#r10#b次][完成獲得#v2630512##r*30#b個]#l \r\n";
txt += "#L4#收集#v4032216#*1000[等級要求#r260#b][每日#r6#b次][完成獲得#v2633336##r*30#b個]#l \r\n";



let selection = npc.askMenuA(txt, true);

switch (selection) {

	case 1:
		if (player.getLevel() < 100) {
			npc.askMenuA("#fs18##b#e\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t玩家等級不足100等");
		} else if (player.getEventValue("楓葉任務1") >= 6) {
			npc.askMenuA("#fs18##b#e\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t今日次數已用完");
		} else if (!player.hasItem(itemId, 1000)) {
			npc.askMenuA("#fs18##b#e\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t玩家持有的道具不足");
		} else {
			player.loseItem(itemId, 1000);
			player.gainItem(4001870, 1);
			player.addEventValue("楓葉任務1", 1, 1);
			addvalue(20);
			npc.askMenuA("#fs18##b#e\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t獲得#g#v4001870##z4001870# #b* 1 個");
			player.runScript("楓幣任務");
		}
		break;
	case 2:
		if (player.getLevel() < 200) {
			npc.askMenuA("#fs18##b#e\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t玩家等級不足200等");
		} else if (player.getEventValue("楓葉任務2") >= 6) {
			npc.askMenuA("#fs18##b#e\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t今日次數已用完");
		} else if (!player.hasItem(itemId, 500)) {
			npc.askMenuA("#fs18##b#e\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t玩家持有的道具不足");
		} else {
			player.loseItem(itemId, 1000);
			player.gainItem(4032053, 500);
			player.addEventValue("楓葉任務2", 1, 1);
			addvalue(30);
			npc.askMenuA("#fs18##b#e\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t獲得#g#v4032053##z4032053# #b* 500 個");
			player.runScript("楓幣任務");
		}
		break;
	case 3:
		if (player.getLevel() < 230) {
			npc.askMenuA("#fs18##b#e\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t玩家等級不足230等");
		} else if (player.getEventValue("楓葉任務3") >= 10) {
			npc.askMenuA("#fs18##b#e\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t今日次數已用完");
		} else if (!player.hasItem(itemId, 1000)) {
			npc.askMenuA("#fs18##b#e\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t玩家持有的道具不足");
		} else {
			player.loseItem(itemId, 1000);
			player.gainItem(2630512, 30);
			player.addEventValue("楓葉任務3", 1, 1);
			addvalue(40);
			npc.askMenuA("#fs18##b#e\r\n\r\n\r\n\r\n\r\n\t\t\t獲得#g#v2630512##z2630512# #b* 30 個");
			player.runScript("楓幣任務");
		}
		break;
	case 4:
		if (player.getLevel() < 250) {
			npc.askMenuA("#fs18##b#e\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t玩家等級不足250等");
		} else if (player.getEventValue("楓葉任務4") >= 6) {
			npc.askMenuA("#fs18##b#e\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t今日次數已用完");
		} else if (!player.hasItem(itemId, 1000)) {
			npc.askMenuA("#fs18##b#e\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t玩家持有的道具不足");
		} else {
			player.loseItem(itemId, 1000);
			player.gainItem(2633336, 30);
			player.addEventValue("楓葉任務4", 1, 1);
			addvalue(50);
			npc.askMenuA("#fs18##b#e\r\n\r\n\r\n\r\n\r\n\t\t\t獲得#g#v2633336##z2633336# #b* 30 個");
			player.runScript("普通任務");
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

