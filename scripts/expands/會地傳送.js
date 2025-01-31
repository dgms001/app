var GuildId = [//分流 地圖ID  公會ID
        Array(7, 410000200, 11),
        Array(10, 410000124, 16),

        Array(2, 100000203, 24),
        Array(1, 240010502, 6),

        Array(6, 450007040, 23),
        Array(5, 300000000, 26),
        Array(5, 450007000, 1139),
        Array(5, 450007000, 1139),
        Array(5, 450007000, 1139),
        Array(5, 450007000, 1139),
        Array(5, 450007000, 1139),
        //預留了10個工會接口 應該足夠 
];
if (player.getGuildId() == 0) {
        npc.say("你還沒有公會找一個公會吧!");
} else if (player.getGuildId() == GuildId[0][2]) {
        player.changeChannelAndMap(GuildId[0][0], GuildId[0][1]);

} else if (player.getGuildId() == GuildId[1][2]) {
        player.changeChannelAndMap(GuildId[1][0], GuildId[1][1]);

} else if (player.getGuildId() == GuildId[2][2]) {
        player.changeChannelAndMap(GuildId[2][0], GuildId[2][1]);

} else if (player.getGuildId() == GuildId[3][2]) {
        player.changeChannelAndMap(GuildId[3][0], GuildId[3][1]);

} else if (player.getGuildId() == GuildId[4][2]) {
        player.changeChannelAndMap(GuildId[4][0], GuildId[4][1]);

} else if (player.getGuildId() == GuildId[5][2]) {
        player.changeChannelAndMap(GuildId[5][0], GuildId[5][1]);

} else if (player.getGuildId() == GuildId[6][2]) {
        player.changeChannelAndMap(GuildId[6][0], GuildId[6][1]);

} else if (player.getGuildId() == GuildId[7][2]) {
        player.changeChannelAndMap(GuildId[7][0], GuildId[7][1]);

} else if (player.getGuildId() == GuildId[8][2]) {
        player.changeChannelAndMap(GuildId[8][0], GuildId[8][1]);

} else if (player.getGuildId() == GuildId[9][2]) {
        player.changeChannelAndMap(GuildId[9][0], GuildId[9][1]);

} else if (player.getGuildId() == GuildId[10][2]) {
        player.changeChannelAndMap(GuildId[10][0], GuildId[10][1]);

} else {
        npc.say("#fs14##b您的公會未開通會地!");
}

