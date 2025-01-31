var status = -1
var txt;
/*------------------------------------------------------------*/
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"
date = new Date();
let week = date.getDay();
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
txt = "Welcome to the special trip              " + a38 + "\r\n";

txt += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n"


/*
txt += "\t\t #fs16##r[調和精靈6件套]\r\n";
txt += "#fs14##b";
txt += "   #L1##v1012174#強化#l #L2##v1032219#強化#l #L3##v1113132#強化#l\r\n";
txt += "   #L4##v1122296#強化#l #L5##v1112956#強化#l #L6##v1113083#強化#l\r\n\r\n";
*/



txt += "   #L13##v1182136##z1182136#強化#l #L14##v1182158##z1182158#強化#l\r\n";
txt += "   #L15##v1113211##z1113211#強化#l\r\n";
let selection = npc.askMenu(txt, 9330114);

switch (selection) {
	case 1:
		player.runScript("鬼娃恰吉的傷口強化");
		break;
	case 2:
		player.runScript("被遺忘的神話耳環強化");
		break;
	case 3:
		player.runScript("森之守護者強化");
		break;
	case 4:
		player.runScript("死神項鍊強化");
		break;
	case 5:
		player.runScript("新星戒指強化");
		break;
	case 6:
		player.runScript("骷顱頭戒指強化");
		break;
	case 7:
		player.runScript("幽暗戒指強化");
		break;
	case 8:
		player.runScript("艾爾達斯的祝福戒指強化");
		break;
	case 9:
		player.runScript("苦行的戒指強化");
		break;
	case 10:
		player.runScript("燃燒之戒強化");
		break;
	case 11:
		player.runScript("露希妲耳環強化");
		break;
	case 12:
		player.runScript("內面耀光強化");
		break;
	case 13:
		player.runScript("MX-131強化");
		break;
	case 14:
		player.runScript("黑翼胸章強化");
		break;
	case 15:
		player.runScript("天上的氣息強化");
		break;
}
