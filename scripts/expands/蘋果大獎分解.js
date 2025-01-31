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

let itemlist1 = Array(//調和精靈
	1012174, 1032219, 1113132, 1122296, 1112956, 1113083

	, 1032205, 1012164

);

let itemlist2 = Array(//大獎時裝欄位
	1114402, 1114401, 1033000, 1114400, 1032261, 1113220

);
let itemlist3 = Array(//大獎裝備藍
	1182136, 1182158, 1113211

);
/*
1202161,1202162,1202163,1202164//圖騰

1003608,1032146,1052515,1072717,1702370,時裝
*/
txt = "Welcome to the special trip              " + a38 + "\r\n";

txt += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n"

txt += "使用分解腳本,請詳記下方說明\r\n";
txt += "此功能會自動從[裝備欄]左上角數下來,\r\n";
txt += "#r第1格至第32格#b第1格至第32格#r第1格至第32格\r\n";
txt += "#b1.裝備名稱被賦予強化+1至+5的時候,不會被分解\r\n";
txt += "2.除了1以外都會被分解掉\r\n";
txt += "#fs20#";


//txt += "\t\t #fs16##r[調和精靈6件套]\r\n";
txt += "#fs14##b";
//txt += "\t\t#v1012174##v1032219##v1113132##v1122296##v1112956##v1113083#\r\n";

//txt += "\t\t  #L1#一鍵分解 每件50#v4009396##l\r\n\r\n\r\n";

txt += "\t\t   #fs16##r[大獎類型強化]\r\n";
txt += "#fs14##b";

// txt += "   #L7##v1113220#強化#l #L8##v1114402#強化#l #L9##v1114401#強化#l\r\n";
// txt += "   #L10##v1114400#強化#l #L11##v1033000#強化#l #L12##v1032261#強化#l\r\n";
// txt += "   #L13##v1182136#強化#l #L14##v1182158#強化#l #L15##v1113211#強化#l\r\n";

txt += "\t\t";
for (let i = 0; i < itemlist2.length; i++) {
	txt += "#v" + itemlist2[i] + "#";
}
txt += "\r\n";
txt += "\t\t  #L2#一鍵分解 每件100#v4009396##l\r\n\r\n";

txt += "\t\t\t  ";
for (let i = 0; i < itemlist3.length; i++) {
	txt += "#v" + itemlist3[i] + "#";
}
txt += "\r\n";
txt += "\t\t  #L3#一鍵分解 每件100#v4009396##l\r\n\r\n";
txt += "";
txt += "";
txt += "";
txt += "";
txt += "";



let selection = npc.askMenu(txt, 9330114);

switch (selection) {
	case 1://
		conut = 0;
		for (let i = 1; i < 32; i++) {
			equip = player.getInventorySlot(1, i);
			open = false;
			if (equip != null) {
				for (let j = 0; j < itemlist1.length; j++) {//循環檢測
					if (equip.getDataId() == itemlist1[j]) {
						open = true;
					}
				}
				if (equip.getTitle() == "" && open || equip.getTitle() == "強化+0" && open) {//條件 equip沒抬頭 && open為開
					conut += 50;
					player.loseInvSlot(1, i);
				}
			}
		}
		player.gainItem(4009396, conut);
		break;

	case 2://
		conut = 0;
		for (let i = 1; i < 32; i++) {
			equip = player.getInventorySlot(6, i);
			open = false;
			if (equip != null) {
				for (let j = 0; j < itemlist2.length; j++) {//循環檢測
					if (equip.getDataId() == itemlist2[j]) {
						open = true;
					}
				}
				if (equip.getTitle() == "" && open || equip.getTitle() == "強化+0" && open) {//條件 equip沒抬頭 && open為開
					conut += 100;
					player.loseInvSlot(6, i);
				}
			}
		}
		if (conut > 0) {
			player.gainItem(4009396, conut);
		}
		npc.say("分解成功,獲得#z4009396#X" + conut + "");
		break;

	case 3://
		conut = 0;
		for (let i = 1; i < 32; i++) {
			equip = player.getInventorySlot(1, i);
			open = false;
			if (equip != null) {
				for (let j = 0; j < itemlist3.length; j++) {//循環檢測
					if (equip.getDataId() == itemlist3[j]) {
						open = true;
					}
				}
				if (equip.getTitle() == "" && open || equip.getTitle() == "強化+0" && open) {//條件 equip沒抬頭 && open為開
					conut += 100;
					player.loseInvSlot(1, i);
				}
			}
		}
		if (conut > 0) {
			player.gainItem(4009396, conut);
		}
		npc.say("分解成功,獲得#z4009396#X" + conut + "");
		break;
}
