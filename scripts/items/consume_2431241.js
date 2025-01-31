 
 
 
 var GC1 = "#fEffect/CharacterEff/1050312/0/0#";//最上面的亮粉
var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#";//紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#";//"+z+"//小選項用
var XD0 = "#fEffect/CharacterEff/1051366/0/0#"
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的

let itemList = Array(

1142906,
1142906

		);

let boxId = 2431241;//箱子ID


let text = ""
text +="#fs21##e#b隨便選擇一個就好\r\n";
for (var i = 0; i < itemList.length; i++) {
			text += "#b#e#fs17##L" + i + "##v" + itemList[i] + "##b#z" + itemList[i] + "##l\r\n";
			
		}
let selected = npc.askMenuA(text,true);

text = "#fs17##e#b選擇道具為:\r\n#v"+itemList[selected]+"##r【#z"+itemList[selected]+"#】";
QSS = player.getAmountOfItem(""+boxId+"");
let YN = npc.askNumber(""+text+"\r\n#b請輸入兌換數量：",1,1,QSS);
i= selected;

if(QSS>=YN){
	
						let newItem = player.makeItemWithId(itemList[selected]);
						newItem.setStr(100);
						newItem.setDex(100);
						newItem.setInt(100);
						newItem.setLuk(100);
						newItem.setPad(50); //物理攻擊
	                    newItem.setMad(50); //魔法攻擊
						newItem.setMaxHp(1500);
						newItem.setMaxMp(1500);
						/*newItem.setPad(gifts[i][9]);
						newItem.setMad(gifts[i][10]);
						newItem.setBossDamageR(10);
						newItem.setIgnorePDR(10);
						newItem.setDamR(10);
						newItem.setCHUC(25);*/
						player.gainItem(newItem);
	//player.gainItem(itemList[selected],YN);
	player.loseItem(boxId,YN);
	npc.say("#fs17##e#b兌換成功!");
	
} else{
	npc.say("#fs17##e#b持有數量不足!");
}

