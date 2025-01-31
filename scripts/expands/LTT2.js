
var SR0 = "#fEffect/EventEffect.img/HundredRSP/Remote/2/0#";
var SR1 = "#fEffect/EventEffect.img/HundredRSP/Remote/0/0#";
var SR2 = "#fEffect/EventEffect.img/HundredRSP/Remote/1/0#";

var SR4 = Array("#fEffect/EventEffect.img/HundredRSP/Remote/2/0#",
	"#fEffect/EventEffect.img/HundredRSP/Remote/0/0#",
	"#fEffect/EventEffect.img/HundredRSP/Remote/1/0#"
);//勝利


var bangloseitem = 4032053;
var bangconut = Array(2, 2, 2, 2, 3, 4, 2, 3, 2, 3, 4);//勝利
var banglose = 1;//0      1     2
var bang1 = Array("剪刀", "石頭", "布");
var bang = Math.floor(Math.random() * 3);//Math.floor(Math.random() * 3);
var bangconutr = Math.floor(Math.random() * bangconut.length);

txt = "#fs14##h0#，你好，你能贏我嗎?\t\r\n\r\n"
if (player.isGm()) {
	txt += "GM顯示器 :系統 " + bang1[bang] + " 你想出什麼\r\n";
}
txt += "#fs12##r";//\t#L100#魔力結晶#l
for (i = 0; i < 3; i++) {
	txt += "#L" + i + "#" + SR4[i] + "#l  ";//\t#L100#魔力結晶#l
}
txt += "\r\n\r\n";
txt += "#b消耗1金楓\r\n";
//txt += "此次獲勝能獲得:"+bangconut[bangconutr]+"金楓";
txt += "輸了-1金楓 平手0 勝利2 3 4金楓";
let selection = npc.askMenu(txt, true);

switch (selection) {

	case 0:
	case 1:
	case 2:

		if (bang == 2 && selection == 1) {
			player.showSystemMessage("系統" + bang1[bang] + "，你" + bang1[selection] + "，你輸了");//showSystemMessage
			player.loseItem(bangloseitem, banglose * 2);
		} else if (bang == 0 && selection == 2) {
			player.showSystemMessage("系統" + bang1[bang] + "，你" + bang1[selection] + "，你輸了");//showSystemMessage
			player.loseItem(bangloseitem, banglose * 2);
		} else if (bang == 2 && selection == 0) {
			player.loseItem(bangloseitem, banglose);
			player.showSystemMessage("系統" + bang1[bang] + "，你" + bang1[selection] + "，你淫了");//showSystemMessage
			player.gainItem(bangloseitem, bangconut[bangconutr]);
		} else {
			if (selection > bang) {
				player.showSystemMessage("系統" + bang1[bang] + "，你" + bang1[selection] + "，你淫了");
				player.loseItem(bangloseitem, banglose);
				player.gainItem(bangloseitem, bangconut[bangconutr]);
			} else if (selection == bang) {
				player.showSystemMessage("系統" + bang1[bang] + "，你" + bang1[selection] + "，平手");
				player.loseItem(bangloseitem, banglose);
			} else {
				player.showSystemMessage("系統" + bang1[bang] + "，你" + bang1[selection] + "，你輸了");
				player.loseItem(bangloseitem, banglose * 2);
			}
		}
		break;
	//case 3:
	//case 4:
}
player.runScript("LTT2");