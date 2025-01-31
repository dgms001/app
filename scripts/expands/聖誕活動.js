/* 圓夢谷 TMS 237 萬能菜單 */
var status = -1
var txt;
/*------------------------- 表情符號 -------------------------*/
var SR1 = "#fUI/SoulUI.img/DungeonEffect/2350012/2#"; //最上面的
var SR2 = "#fUI/SoulUI.img/DungeonEffect/2350012/4#"; //最上面的
var SR3 = "#v3992001#"; //最上面的
var SR4 = "#v3992003#"; //最上面的
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

txt = "\t\t\t  " + SR3 + "#fs32##fc0xFF00caf2##e#r《聖誕活動》" + SR4 + "\r\n";
txt += "" + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + "\r\n";
txt += "#e#fs17#";//v2630646
txt += "#b任務屬性:[活動期間限定次數]\t\r\n#fc0xFFFFF300#";
txt += "#L0#" + GC1 + "聖誕活動#v5062009##l\t#L1#" + GC1 + "聖誕活動#v5062010##l\t#L2#" + GC1 + "聖誕活動#v5062017##l\r\n";
txt += "#L3#" + GC1 + "聖誕活動#v5062020##l\t#L4#" + GC1 + "聖誕活動#v2630648##l\t#L5#" + GC1 + "聖誕活動#v4009454##l\r\n";
txt += "#b#r\t\t\t\t\t【BOSS】#fc0xFFFFF300#\r\n";
txt += "#L6#" + GC1 + "聖誕活動#v2630649##l\t#L7#" + GC1 + "聖誕活動#v5064400##l\t#L8#" + GC1 + "聖誕活動#v5062500##l\r\n";
if (player.isGm()) {

	txt += "";
}

let selection = npc.askMenuA(txt, true);

switch (selection) {

	case 0:
		player.runScript("聖誕活動紅方");
		break;
	case 1:
		player.runScript("聖誕活動黑方");
		break;
	case 2:
		player.runScript("聖誕活動閃耀方");
		break;
	case 3:
		player.runScript("聖誕活動閃炫");
		break;
	case 4:
		player.runScript("聖誕活動V卷");
		break;
	case 5:
		player.runScript("聖誕活動草原");
		break;
	case 6:
		player.runScript("聖誕活動B卷");
		break;
	case 7:
		player.runScript("聖誕活動恢復");
		break;
	case 8:
		player.runScript("聖誕活動附加");
		break;


}
