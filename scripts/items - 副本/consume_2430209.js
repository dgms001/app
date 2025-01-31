// let itemIdSS = Array(
// Array(4032053,5),
// Array(4032053,5)
// );



var SS = Math.floor(Math.random() * 1000);
//var SS1 = Math.floor(Math.random() * itemIdSS.length);
var drop = Math.floor(Math.random() * 10000);
var idd = player.getName();

//player.gainItem(itemIdSS[SS1][0],itemIdSS[SS1][1]);
player.loseItem(npc.getItemId(), 1);
player.useItemEffect(2023126);//+4
player.useItemEffect(2023909);//+4

if (SS <= 5) {
	player.useItemEffect(2023745);//+傷害25% +EXP 220%
	player.showSystemMessage("恭喜 " + idd + " 獲得了 【龍紋紅包】隨機BUFF - 領路者5階段EXP 220%");
} else if (SS > 5 && SS < 50) {
	player.useItemEffect(2023825);//BOSS+100%
	player.showSystemMessage("恭喜 " + idd + " 獲得了 【龍紋紅包】隨機BUFF - 紅包老虎 B傷");
} else if (SS >= 50 && SS < 300) {
	player.useItemEffect(2023828);//EXP20%
	player.showSystemMessage("恭喜 " + idd + " 獲得了 【龍紋紅包】隨機BUFF - 紅包羊 EXP 20%");
} else if (SS > 300 && SS < 1000) {
	player.useItemEffect(2023830);//全能力100
	player.showSystemMessage("殘念的人 " + idd + " 獲得了 【龍紋紅包】隨機BUFF - 紅包雞雞 全屬性100");
}

if (drop <= 30) {
	player.gainItem(4032053, 50);
} else if (drop <= 200 && drop > 30) {
	player.gainItem(4032053, 10);
} else if (drop <= 2000 && drop > 200) {
	player.gainItem(4032053, 5);
} else if (drop <= 6000 && drop > 2000) {
	player.gainItem(4032053, 3);
} else if (drop <= 10000 && drop > 6000) {
	player.gainItem(4032053, 1);
}