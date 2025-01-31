//win
var itemList = Array(

	//通用心臟
	Array(1662073, 100),//戰鬥機器人
	Array(1662072, 100),//戰鬥機器人
	Array(1672069, 100),	//野花精靈機器人
	Array(1672075, 100),	//層層貓貓蟲咖波機器人


);
var GC1 = "#fEffect/CharacterEff/1050312/0/0#";//最上面的亮粉
var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#";//紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#";//"+z+"//小選項用
var XD0 = "#fEffect/CharacterEff/1051366/0/0#"
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的
var a8 = "#fEffect/ItemEff.img/1070069/effect/walk1/0#" //彩虹小云0-7
var a88 = "#fEffect/ItemEff.img/1070069/effect/walk1/4#" //彩虹小云0-7
var a888 = "#fEffect/ItemEff.img/1070069/effect/walk1/6#" //彩虹小云0-7

let boxId = 4033853;//物品id

text = "#fs21##e#r請選擇你需要兌換的機器人\r\n"
//text += "" + a8 + "  " + a888 + "" + a888 + "" + a888 + " " + a88 + "";
for (var i = 0; i < itemList.length; i++) {
	text += "#fs16##b#L" + i + "##v" + itemList[i][0] + ":##r#z" + itemList[i][0] + "# #b價格[#v4033853#*" + itemList[i][1] + "]#l\r\n";
}
let selected = npc.askMenuA(text, true);

text = "#b選擇道具為:\r\n#v" + itemList[selected] + "##r【#z" + itemList[selected] + "#】";
QSS = player.getAmountOfItem("" + boxId + "");
let YN = npc.askNumber("" + text + "\r\n#b請輸入兌換數量：", 1, 1, 1);
i = selected;
if (QSS >= YN * itemList[selected][1]) {
	player.gainItem(itemList[selected][0], YN);
	player.loseItem(boxId, YN * itemList[selected][1]);
	npc.say("#fs17##e#b兌換成功!");
} else {
	npc.say("#fs17##e#b#v4033853##z" + boxId + "#持有數量不足" + itemList[selected][1] + "!");
}

