var status = -1
var txt;
/*------------------------------------------------------------*/
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用
var items = Array(

	1802761,
	1802896,
	1802897,
	1802899,
	1802771,
	1802772,
	1802653


);


//txt = "" + GC1 + GC1 + GC1 + GC1 + "\r\n";
txt = "Welcome to the special trip              " + a38 + "\r\n";

txt += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n";

txt += "#r每件價格5000碎片\r\n#n";

for (var i = 1; i < items.length; i++) {
	txt += "#L" + i + "##b#e#v" + items[i] + "##z" + items[i] + "#(" + i + ")#l\r\n";
	/*if(i%2==0){
		txt += "\r\n";
	}else {
		txt += "\r\n";
	}*/
}
let selection = npc.askMenu(txt, 9062453);
i = selection;
selection = npc.askNumber("購買道具為：#v" + items[i] + "# #z" + items[i] + "##k\r\n請輸入購買個數：", 1, 1, 999);

if (i) {
	GS = selection;
	QSS = GS * 5000;
	if (!player.hasItem(2630612, QSS)) {
		npc.say("#fs16##b#e碎片不足，無法購買");
	} else {
		player.showSystemMessage("消耗 [ " + (QSS) + " ] 碎片");
		player.loseItem(2630612, QSS);
		player.gainItem(items[i], GS);
		npc.say("#fs16##b#e購買成功");
	}
}