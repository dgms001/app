 
 
 
 var GC1 = "#fEffect/CharacterEff/1050312/0/0#";//最上面的亮粉
var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#";//紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#";//"+z+"//小選項用
var XD0 = "#fEffect/CharacterEff/1051366/0/0#"
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的

let itemList = Array(

    1572006,
	1562006,
	1232057,
    1312153,
    1322203,
    1302275,
    1402196,
    1412135,
    1422140,
    1432167,
    1442223,
    1582016,
    1542063,
    1213016,
    1212063,
    1262016,
    1372177,
    1382208,
    1252015,
    1552063,
    1282015,
    1452205,
    1462193,
    1522094,
    1592018,
    1214016,
    1242060,
    1332225,
    1342082,
    1362090,
    1472214,
    1292016,
    1272015,
    1222058,
    1242061,
    1482168,
    1492179,
    1532098,
    1403016

		);

let boxId = 2434229;//箱子ID


let text = ""
text +="#fs21##e#b請選擇你需要兌換的物品\r\n";
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
						newItem.setStr(10);
						newItem.setDex(10);
						newItem.setInt(10);
						newItem.setLuk(10);
						newItem.setPad(50); //物理攻擊
	                    newItem.setMad(50); //魔法攻擊
						/*newItem.setMaxHp(gifts[i][7]);
						newItem.setMaxMp(gifts[i][8]);
						newItem.setPad(gifts[i][9]);
						newItem.setMad(gifts[i][10]);*/
						newItem.setBossDamageR(10);
						newItem.setIgnorePDR(10);
						newItem.setDamR(10);
						newItem.setCHUC(25);
						player.gainItem(newItem);
	//player.gainItem(itemList[selected],YN);
	player.loseItem(boxId,YN);
	npc.say("#fs17##e#b兌換成功!");
	
} else{
	npc.say("#fs17##e#b持有數量不足!");
}

