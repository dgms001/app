 
 
 
 var GC1 = "#fEffect/CharacterEff/1050312/0/0#";//最上面的亮粉
var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#";//紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#";//"+z+"//小選項用
var XD0 = "#fEffect/CharacterEff/1051366/0/0#"
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的

let itemList = Array(
1213018,
1232113,
1302343,
1312203,
1322255,
1402259,
1412181,
1422189,
1432218,
1442274,
1542117,
1582023,

1212120,
1252098,
1262039,
1282017,
1372228,
1382265,
1552119,

1452257,
1462243,
1522143,
1592020,
1214018,

1242122,
1272017,
1292018,
1332279,
1342104,
1362140,
1472265,

1222113,
1242121,
1403018,
1482221,
1492235,
1532150	

		);

let boxId = 2630782;//箱子ID


let text = ""
text +="\t\t\t  "+SR3+"#fs32##fc0xFF00caf2##e《自選系列》"+SR3+"\r\n";
text +=""+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+"\r\n";
text += "#e#fs17##fc0xFFFFF300#";
for (var i = 0; i < itemList.length; i++) {
			text += "#b#e#fs16##L" + i + "##v" + itemList[i] + "##g#z" + itemList[i] + "##l";
			if( i == 0 || i == 2 || i == 4 || i == 6 || i == 8 || i == 10 || i == 12 || i == 14 || i == 16 || i == 18 || i ==20 || i ==22 || i ==24 || i ==26 || i ==28 || i ==30 || i ==32 || i ==34){
				text +="";
			} else if(i){
				text +="\r\n";
			} 
		}
let selected = npc.askMenuA(text,true);

text = "#fs17##e#b選擇道具為:\r\n#v"+itemList[selected]+"##r【#z"+itemList[selected]+"#】";
QSS = player.getAmountOfItem(""+boxId+"");
let YN = npc.askNumber(""+text+"\r\n#b請輸入兌換數量：",1,1,QSS);
i= selected;

if(QSS>=YN){
	player.gainItem(itemList[selected],YN);
	player.loseItem(boxId,-YN);
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