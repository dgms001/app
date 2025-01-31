var GuildId = [//勛章ID  公會ID LOG
	Array(1143199, 18, "夢幻樂園"),
	Array(1143029, 13, "夢幻國度"),
	Array(450007000, 1139, "輸入公會名"),
	Array(450007000, 1139, "輸入公會名"),
	Array(450007000, 1139, "輸入公會名"),
	Array(450007000, 1139, "輸入公會名"),
	Array(450007000, 1139, "輸入公會名"),
	Array(450007000, 1139, "輸入公會名"),
	Array(450007000, 1139, "輸入公會名")
	//預留了10個工會接口 應該足夠 
];
if (player.getGuildId() == 0) {
	npc.say("你還沒有公會找一個公會吧!");
} else if (player.getGuildId() == GuildId[0][1]) {
	player.addPQLog(GuildId[0][2], 1, 7);
	player.gainItem(GuildId[0][0], 1);
	npc.say("成功領取公會勛章,此勛章背包沒有的話可重複領取");
} else if (player.getGuildId() == GuildId[1][1]) {
	player.addPQLog(GuildId[1][2], 1, 7);
	player.gainItem(GuildId[1][0], 1);
	npc.say("成功領取公會勛章,此勛章背包沒有的話可重複領取");
} else if (player.getGuildId() == GuildId[2][1]) {
	player.addPQLog(GuildId[2][2], 1, 7);
	player.gainItem(GuildId[2][0], 1);
	npc.say("成功領取公會勛章,此勛章背包沒有的話可重複領取");
} else if (player.getGuildId() == GuildId[3][1]) {
	player.addPQLog(GuildId[3][2], 1, 7);
	player.gainItem(GuildId[3][0], 1);
	npc.say("成功領取公會勛章,此勛章背包沒有的話可重複領取");
} else if (player.getGuildId() == GuildId[4][1]) {
	player.addPQLog(GuildId[4][2], 1, 7);
	player.gainItem(GuildId[4][0], 1);
	npc.say("成功領取公會勛章,此勛章背包沒有的話可重複領取");
} else if (player.getGuildId() == GuildId[5][1]) {
	player.addPQLog(GuildId[5][2], 1, 7);
	player.gainItem(GuildId[5][0], 1);
	npc.say("成功領取公會勛章,此勛章背包沒有的話可重複領取");
} else if (player.getGuildId() == GuildId[6][1]) {
	player.addPQLog(GuildId[6][2], 1, 7);
	player.gainItem(GuildId[6][0], 1);
	npc.say("成功領取公會勛章,此勛章背包沒有的話可重複領取");
} else if (player.getGuildId() == GuildId[7][1]) {
	player.addPQLog(GuildId[7][2], 1, 7);
	player.gainItem(GuildId[7][0], 1);
	npc.say("成功領取公會勛章,此勛章背包沒有的話可重複領取");
} else if (player.getGuildId() == GuildId[8][1]) {
	player.addPQLog(GuildId[8][2], 1, 7);
	player.gainItem(GuildId[8][0], 1);
	npc.say("成功領取公會勛章,此勛章背包沒有的話可重複領取");
} else {
	npc.say("#fs14##b您的公會未獲得勛章!");
}

