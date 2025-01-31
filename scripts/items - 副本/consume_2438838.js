 
 
 
 var GC1 = "#fEffect/CharacterEff/1050312/0/0#";//最上面的亮粉
var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#";//紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#";//"+z+"//小選項用
var XD0 = "#fEffect/CharacterEff/1051366/0/0#"
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的

let itemList = Array(
3015109,//花之幻想曲
3015327,//夢蝶椅子
3015404,//綻放吧！櫻花處
3015416,//熱溫泉入場券
3015481,//急速活動箱子椅子
3015173,//仲夏夜之夢椅
3015598,//夜的漆黑烈炎椅子


3015031,//閃耀楓之谷椅子
3015044,//巨大企鵝王椅子
3015238,//泡泡綠水零
3015408,//玩偶收藏櫃椅子
3015526,//藍天幻想椅
3015172,//幻想牧場椅
3015888//熱夏椅子


		);

let boxId = 2438838;//箱子ID
var txt;
var zx24 = "#fMap/MapHelper.img/weather/nightMarket/5#";
var qq1 = "#fUI/EventShop/adventureShop/GradeBuyer/0#"
var qq2 = "#fUI/EventShop/adventureShop/GradeBuyer/1#"
var qq3 = "#fUI/EventShop/adventureShop/GradeBuyer/2#"
var qq4 = "#fUI/EventShop/adventureShop/GradeBuyer/3#"
var qq5 = "#fUI/EventShop/adventureShop/GradeBuyer/4#"
var qq6 = "#fUI/EventShop/adventureShop/GradeBuyer/5#"

txt = "\r\n";
txt += "\t\t \t       #e#fs20##r自選椅子\r\n#n";
txt += ""+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+"\r\n";
txt += "";
txt += "#fs14##b";
txt += "#e#fs17##fc0xFFFFF300##n";
for (var i = 0; i < itemList.length; i++) {
			txt += "#b#fs14##L" + i + "##v" + itemList[i] + "##b#z" + itemList[i] + "##l\r\n";
			
		}
let selected = npc.askMenuS(txt,true);

txt = "#fs17##e#b選擇道具為:\r\n#v"+itemList[selected]+"##r【#z"+itemList[selected]+"#】";
QSS = player.getAmountOfItem(""+boxId+"");
let YN = npc.askNumber(""+txt+"\r\n#b請輸入兌換數量：",1,1,QSS);
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