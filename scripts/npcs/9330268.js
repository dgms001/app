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
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";

//var STAR1 = "#fEffect/CharacterEff/forceAtom/29/atom/3/endEff/0#"; //大星星-1
//var STAR2 = "#fEffect/CharacterEff/forceAtom/29/atom/2/endEff/1#"; //大星星-2
//var STAR3 = "#fEffect/CharacterEff/forceAtom/29/atom/3/endEff/2#"; //大星星-3
//var STAR4 = "#fEffect/CharacterEff/forceAtom/29/atom/2/endEff/3#"; //大星星-4
//var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
//var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //紅心桃心
//var Rainbow = "#fEffect/ItemEff/1070069/effect/walk1/2#" //彩虹

/*------------------------------------------------------------*/
itemId = 4009454;
txt = "\t\t\t  " + SR3 + "#fs32##fc0xFF00caf2##e《符文任務》" + SR3 + "\r\n";
txt += "" + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + "\r\n";
txt += "#e#fs17#";
txt += "#b任務屬性:[帳號限定]\t需求材料:[#v4009454#*5000]\r\n";
txt += "#fc0xFFFFF300##L1#" + GC1 + "符文任務[100等][每日2次][獲得#v2630512#*5]#l \r\n";
txt += "#L2#" + GC1 + "符文任務[200等][每日2次][獲得#v2630512#*5]#l \r\n";
txt += "#L3#" + GC1 + "符文任務[250等][每日1次][獲得#v2630512#*10]#l \r\n";
txt += "#L4#" + GC1 + "符文任務[285等][每日1次][獲得#v2630512#*10]#l \r\n";
if (player.isGm()) {

	txt += "";
}

let selection = npc.askMenuA(txt, true);

switch (selection) {

	case 1:
		if (player.getLevel() < 100) {
			npc.say("#fs18##b#e玩家等級不足100等");
		} else if (player.getEventValue("ARC任務1") >= 2) {
			npc.say("#fs18##b#e今日次數已用完");
		} else if (!player.hasItem(itemId, 5000)) {
			npc.say("#fs18##b#e玩家持有的道具不足");
		} else {
			player.loseItem(itemId, 5000);
			player.gainItem(2630512, 5);
			player.addEventValue("ARC任務1", 1, 1);
			npc.say("#fs18##b#e獲得#g#v2630512##z2630512# #b* 5 個");
		}
		break;
	case 2:
		if (player.getLevel() < 200) {
			npc.say("#fs18##b#e玩家等級不足100等");
		} else if (player.getEventValue("ARC任務2") >= 2) {
			npc.say("#fs18##b#e今日次數已用完");
		} else if (!player.hasItem(itemId, 5000)) {
			npc.say("#fs18##b#e玩家持有的道具不足");
		} else {
			player.loseItem(itemId, 5000);
			player.gainItem(2630512, 5);
			player.addEventValue("ARC任務2", 1, 1);
			npc.say("#fs18##b#e獲得#g#v2630512##z2630512# #b* 5 個");
		}
		break;
	case 3:
		if (player.getLevel() < 250) {
			npc.say("#fs18##b#e玩家等級不足250等");
		} else if (player.getEventValue("ARC任務3") >= 1) {
			npc.say("#fs18##b#e今日次數已用完");
		} else if (!player.hasItem(itemId, 5000)) {
			npc.say("#fs18##b#e玩家持有的道具不足");
		} else {
			player.loseItem(itemId, 5000);
			player.gainItem(2630512, 10);
			player.addEventValue("ARC任務3", 1, 1);
			npc.say("#fs18##b#e獲得#g#v2630512##z2630512# #b* 10 個");
		}
		break;
	case 4:
		if (player.getLevel() < 285) {
			npc.say("#fs18##b#e玩家等級不足285等");
		} else if (player.getEventValue("ARC任務4") >= 1) {
			npc.say("#fs18##b#e今日次數已用完");
		} else if (!player.hasItem(itemId, 5000)) {
			npc.say("#fs18##b#e玩家持有的道具不足");
		} else {
			player.loseItem(itemId, 5000);
			player.gainItem(2630512, 10);
			player.addEventValue("ARC任務4", 1, 1);
			npc.say("#fs18##b#e獲得#g#v2630512##z2630512# #b* 10 個");
		}
		break;



}