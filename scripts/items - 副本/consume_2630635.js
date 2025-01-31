 
 
 
 var GC1 = "#fEffect/CharacterEff/1050312/0/0#";//最上面的亮粉
var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#";//紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#";//"+z+"//小選項用
var XD0 = "#fEffect/CharacterEff/1051366/0/0#"
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的

let itemList = Array(
5000870,
5000871,
5000872,
5000884,
5000885,
5000886,
//5002081,
//5002197,5002198,5002199,
5002400,
5002401,
5002402,
5002239


		);

let boxId = 2630635;//箱子ID


let text = ""
text +="\t\t\t  "+SR3+"#fs32##fc0xFF00caf2##e《自選系列》"+SR3+"\r\n";
text +=""+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+"\r\n";
text += "#e#fs17##fc0xFFFFF300#";

		text += "#b#e#fs16#";
		text += "\t#L0##v" + itemList[0] + "##g#z" + itemList[0] + "##l#L1##v" + itemList[1] + "##g#z" + itemList[1] + "##l#L2##v" + itemList[2] + "##g#z" + itemList[2] + "##l\r\n";

		text += "\t#L3##v" + itemList[3] + "##g#z" + itemList[3] + "##l  #L4##v" + itemList[4] + "##g#z" + itemList[4] + "##l\t #L5##v" + itemList[5] + "##g#z" + itemList[5] + "##l\r\n";
		text += "\t#L6##v" + itemList[6] + "##g#z" + itemList[6] + "##l  #L7##v" + itemList[7] + "##g#z" + itemList[7] + "##l\t#L8##v" + itemList[8] + "##g#z" + itemList[8] + "##l\r\n";
		text += "\t\t\t\t#L9##v" + itemList[9] + "##g#z" + itemList[9] + "##l←他沒有SET效果";
		
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