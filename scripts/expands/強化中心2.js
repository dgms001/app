var epp = "#fEffect/SetItemInfoEff/297/0#";  //彩光 紅色
var ax = "#fEffect/CharacterEff/1112902/0/1#";  //藍色愛心
var xxx = "#fEffect/CharacterEff/1032054/0/0#";  //選項兩邊
var a1 = "#fEffect/ItemEff/1070069/effect/walk1/0#"
var a2 = "#fEffect/ItemEff/1070069/effect/walk1/1#"
var a3 = "#fEffect/ItemEff/1070069/effect/walk1/2#"
var a4 = "#fEffect/ItemEff/1070069/effect/walk1/3#"
var a5 = "#fEffect/ItemEff/1070069/effect/walk1/4#"
var a6 = "#fEffect/ItemEff/1070069/effect/walk1/5#"
var a7 = "#fEffect/ItemEff/1070069/effect/walk1/6#"
var a8 = "#fEffect/ItemEff/1070069/effect/walk1/7#"
var a9 = "#fEffect/CharacterEff/1112925/0/0#"
var a10 = "#fUI/GuildMark/Mark/Etc/00009020/16#"
var a11 = "#fUI/GuildMark/Mark/Etc/00009020/11#"
var a12 = "#fUI/GuildMark/Mark/Etc/00009020/8#"
var a13 = "#fEffect/CharacterEff/1003393/1/0#"
var ltz45 = "#fMap/MapHelper.img/weather/starPlanet2/5#";  //4009411
//selStr += "";   #e#L#"+a9+"
var selStr = "\t\t\t  " + a3 + "#fs26##fc0xFFFF4EFF#【強化中心】" + a3 + "#fs18##b#n#l\r\n\r\n";
selStr += "\t\t\t\t     #fs22##r#g「增捲系列」\r\n";
//selStr += "#fs18##b#L0#" + ltz45 + "【黑色套裝系列】#l\r\n";
//selStr += "#fs18##b#L1#" + ltz45 + "【黑扉系列】#l\r\n";
selStr += "#fs18##b#L2#" + ltz45 + "【女皇系列】#l #L3#" + ltz45 + "【戰國系列】#l #L4#" + ltz45 + "【夫尼爾系列】#l\r\n";
selStr += "#L5#" + ltz45 + "【航海系列】#l #L6#" + ltz45 + "【神秘系列】#l\r\n\r\n";
selStr += "\t\t\t\t     #fs22##r#g「強屬系列」\r\n";
selStr += "#fs18##b#L11#" + ltz45 + "【許願樹系列】#l #L12#" + ltz45 + "【黑扉系列】#l   #L13#" + ltz45 + "【Boss飾品】#l\r\n";
selStr += "#L14#" + ltz45 + "【金花系列】#l   #L15#" + ltz45 + "【外星人系列】#l #L16#" + ltz45 + "【Boss戒指】#l\r\n";
selStr += "#L18#" + ltz45 + "【波塞頓系列】#l #L21#" + ltz45 + "【賞金系列】#l   #L19#" + ltz45 + "【培羅德系列】#l\r\n";
selStr += "#L20#" + ltz45 + "【漆黑系列】#l";
selStr += "";

selStr += "";


let selection = npc.askMenuA(selStr, true);
switch (selection) {
	case 0:
		player.runScript("衝捲黑色套裝系列");
		break;
	case 1:
		player.runScript("衝捲黑扉系列");
		break;
	case 2:
		player.runScript("女皇系列");
		break;
	case 3:
		player.runScript("戰國系列");
		break;
	case 4:
		player.runScript("夫尼爾系列");
		break;
	case 5:
		player.runScript("航海系列");
		break;
	case 6:
		player.runScript("神秘系列");
		break;
	case 11:
		player.runScript("強屬許願樹系列");
		break;
	case 12:
		player.runScript("強屬黑扉系列");
		break;
	case 13:
		player.runScript("強屬Boss飾品");
		break;
	case 14:
		player.runScript("強屬金花系列");
		break;
	case 15:
		player.runScript("強屬外星人系列");
		break;
	case 16:
		player.runScript("強屬Boss戒指");
		break;

	case 18:
		player.runScript("強屬波塞頓系列");
		break;
	case 19:
		player.runScript("強屬培羅德系列");
		break;
	case 20:
		player.runScript("強屬漆黑系列");
		break;
	case 21:
		player.runScript("強屬賞金系列");
		break;






}
