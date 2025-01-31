//var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
//var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用

var itemList = [
	Array(4001620, 100, 5),
	Array(4001620, 76, 4),
	Array(4001620, 48, 3),




];

var Jackpot1 = [ //大獎
	Array(1082392, 100, 1),
	Array(1132115, 100, 1),



];

var Jackpotchance = Math.floor(Math.random() * 100);
if (Jackpotchance <= 10) {//開啟轉蛋機 計算機率 並進入大獎獎池 1000=10%
	//if { //第1期
	var chance = Math.floor(Math.random() * 100);
	var finalitem = Array();
	for (var i = 0; i < Jackpot1.length; i++) {
		if (Jackpot1[i][1] >= chance) {
			finalitem.push(Jackpot1[i]);
		}
	}
	var random = new java.util.Random();
	var finalchance = random.nextInt(finalitem.length);
	var itemId = Jackpot1[finalchance][0];
	var quantity = Jackpot1[finalchance][2];
	if (finalitem.length != 0) {
		player.gainItem(itemId, quantity);
		player.loseItem(2631182, 1);
		//player.addEventValue("培羅德獎勵1",1,1);
		//npc.say("#fs15##b恭喜玩家獲得#v"+itemId+"##z"+itemId+"# * #r"+quantity+" ");
		//player.changeMap(104000000);
	}
} else {
	var chance = Math.floor(Math.random() * 100);
	var finalitem = Array();
	for (var i = 0; i < itemList.length; i++) {
		if (itemList[i][1] >= chance) {
			finalitem.push(itemList[i]);
		}
	}
	if (finalitem.length != 0) {
		var item;
		var random = new java.util.Random();
		var finalchance = random.nextInt(finalitem.length);
		var itemId = finalitem[finalchance][0];
		var quantity = finalitem[finalchance][2];
		if (item != -1) {
			player.gainItem(itemId, quantity);
			player.loseItem(2631182, 1);
			//player.addEventValue("培羅德獎勵1",1,1);
			//npc.say("#fs15##b恭喜玩家獲得#v"+itemId+"##z"+itemId+"# * #r"+quantity+" ");
			//player.changeMap(104000000);
		} else {
			npc.say("請你確認在背包的裝備，消耗，其他窗口中是否有一格以上的空間。");
		}
	} else {
		player.loseItem(2631182, 1);
		npc.say("今天的運氣太差了");
	}
}
			//break;
		//}