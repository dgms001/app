 
 
 
 var GC1 = "#fEffect/CharacterEff/1050312/0/0#";//最上面的亮粉
var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#";//紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#";//"+z+"//小選項用
var XD0 = "#fEffect/CharacterEff/1051366/0/0#"
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的

let itemList = Array(
1152108,
1152110,
1152111,
1152112,
1152113,

1003172,
1003173,
1003174,
1003175,
1003176,

1052314,
1052315,
1052316,
1052317,
1052318,

1072485,
1072486,
1072487,
1072488,
1072489,

1082295,
1082296,
1082297,
1082298,
1082299,

1102275,
1102276,
1102277,
1102278,
1102279

		);

let boxId = 2433334;//箱子ID


let text = ""
text +="請選擇需要兌換的道具\r\n";

for (var i = 0; i < itemList.length; i++) {
			text += "#b#L" + i + "##v" + itemList[i] + "##r#z" + itemList[i] + "##l\r\n";
			
		}
let selected = npc.askMenu(text,true);

text = "#e#b選擇道具為:\r\n#v"+itemList[selected]+"##r【#z"+itemList[selected]+"#】";
QSS = player.getAmountOfItem(""+boxId+"");
let YN = npc.askNumber(""+text+"\r\n#b請輸入兌換數量：",1,1,QSS);
i= selected;

if(QSS>=YN){
	player.gainItem(itemList[selected],YN);
	player.loseItem(boxId,YN);
	npc.say("#fs17##e#b兌換成功!");
	
} else{
	npc.say("#fs17##e#b持有數量不足!");
}

/*
if(player.canGainItem(itemList[selected],1)){
		if(player.hasItem(boxId,1)){
		var itemid = itemList[selected];
			player.gainItem(itemid,1);
			player.loseItem(boxId,1);
			npc.say("#fs16##b#e兌換成功"+YN+"");
		}else{
			npc.say("#fs16##b#e沒有#v"+boxId+"#");
		}
	}else{
		npc.say("#fs16##b#e請清理背包!");
	}*/