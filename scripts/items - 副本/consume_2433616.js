 
 
 
 var GC1 = "#fEffect/CharacterEff/1050312/0/0#";//最上面的亮粉
var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#";//紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#";//"+z+"//小選項用
var XD0 = "#fEffect/CharacterEff/1051366/0/0#"
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的

let itemList = Array(
		1003797,//高貴的戰士頭盔
        1003798,//高貴的敦威治帽
        1003799,//高貴的守護者貝雷帽
        1003800,//高貴的暗殺者頭套帽
        1003801,
		
        1042254,//高貴的戰士上衣
        1042255,//高貴的敦威治上衣
        1042256,//高貴的守護者上衣
        1042257,//高貴的暗殺者上衣
        1042258,
		
		1062165,//高貴的戰士褲子
        1062166,//高貴的敦威治褲子
        1062167,//高貴的守護者褲子
        1062168,//高貴的暗殺者褲子
        1062169//高貴的漫遊者上衣


		);

let boxId = 2433616;//箱子ID


let text = ""
text +="\t\t\t  "+SR3+"#fs32##fc0xFF00caf2##e《自選系列》"+SR3+"\r\n";
text +=""+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+"\r\n";
text += "#e#fs17##fc0xFFFFF300#";
for (var i = 0; i < itemList.length; i++) {
			text += "#b#e#fs16##L" + i + "##v" + itemList[i] + "##g#z" + itemList[i] + "##l\r\n";
			
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