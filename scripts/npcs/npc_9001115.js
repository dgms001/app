//4034721-惡魔錘子
var selectedItem = -1;
var selectedCost = -1;
var reward = [Array(1, 2630018, 7, "隨機獎勵"),
    Array(2, 2630018, 6, "隨機獎勵"),
    Array(3, 2630018, 7, "隨機獎勵"),
    Array(4, 2630018, 6, "隨機獎勵"),
    Array(5, 2630018, 7, "隨機獎勵"),
    Array(6, 4034721, 1, "隨機獎勵"),
    Array(7, 2630018, 6, "隨機獎勵"),
    Array(8, 2630018, 7, "隨機獎勵"),
    Array(9, 2630018, 6, "隨機獎勵"),
    Array(10, 2630018, 8, "隨機獎勵"),
    Array(11, 2630018, 6, "隨機獎勵"),
    Array(12, 2630018, 10, "隨機獎勵"),
    Array(13, 2630018, 7, "隨機獎勵"),
    Array(14, 4034721, 1, "隨機獎勵"),
    Array(15, 2630018, 6, "隨機獎勵"),
    Array(16, 2630018, 5, "隨機獎勵"),
    Array(17, 2630018, 7, "隨機獎勵"),
    Array(18, 2630018, 8, "隨機獎勵"),
    Array(19, 2630018, 5, "隨機獎勵"),
    Array(20, 2630018, 7, "隨機獎勵"),
    Array(21, 2630018, 10, "隨機獎勵"),
    Array(22, 2630018, 7, "隨機獎勵"),
    Array(23, 2630018, 5, "隨機獎勵"),
    Array(24, 4034721, 1, "隨機獎勵"),
    Array(25, 2630018, 8, "隨機獎勵"),
    Array(26, 2630018, 5, "隨機獎勵"),
    Array(27, 2630018, 9, "隨機獎勵"),
    Array(28, 2630018, 6, "隨機獎勵"),
    Array(29, 2630018, 5, "隨機獎勵"),
    Array(30, 2630018, 8, "隨機獎勵"),
    Array(31, 4000313, 20, "1000點券中介幣"),
    Array(32, 4000313, 20, "1000點券中介幣"),
    Array(33, 4000313, 20, "1000點券中介幣"),
    Array(34, 4000313, 20, "1000點券中介幣"),
    Array(35, 4000313, 20, "1000點券中介幣"),
    Array(36, 4000313, 20, "1000點券中介幣"),
    Array(37, 4000313, 20, "1000點券中介幣"),
    Array(38, 4000313, 20, "1000點券中介幣"),
    Array(39, 4000313, 20, "1000點券中介幣"),
    Array(40, 4000313, 20, "1000點券中介幣"),
    Array(41, 4000313, 20, "1000點券中介幣"),
    Array(42, 4000313, 20, "1000點券中介幣"),
    Array(43, 4000313, 20, "1000點券中介幣"),
    Array(44, 4000313, 20, "1000點券中介幣"),
    Array(45, 4000313, 20, "1000點券中介幣"),
    Array(46, 4000313, 20, "1000點券中介幣"),
    Array(47, 4000313, 20, "1000點券中介幣"),
    Array(48, 4000313, 20, "1000點券中介幣"),
    Array(49, 4000313, 20, "1000點券中介幣"),
    Array(50, 4000313, 20, "1000點券中介幣"),
    Array(51, 4000313, 20, "1000點券中介幣"),
    Array(52, 4000313, 20, "1000點券中介幣"),
    Array(53, 4000313, 20, "1000點券中介幣"),
    Array(54, 4000313, 20, "1000點券中介幣"),
    Array(55, 4000313, 20, "1000點券中介幣"),
    Array(56, 4000313, 20, "1000點券中介幣"),
    Array(57, 4000313, 20, "1000點券中介幣"),
    Array(58, 4000313, 20, "1000點券中介幣"),
    Array(59, 4000313, 20, "1000點券中介幣"),
    Array(60, 4000313, 20, "1000點券中介幣"),
    Array(61, 4000313, 20, "1000點券中介幣"),
    Array(62, 4000313, 20, "1000點券中介幣"),
    Array(63, 4000313, 20, "1000點券中介幣"),
    Array(64, 4000313, 20, "1000點券中介幣"),
    Array(65, 4000313, 20, "1000點券中介幣"),
    Array(66, 4000313, 20, "1000點券中介幣"),
    Array(67, 4000313, 20, "1000點券中介幣"),
    Array(68, 4000313, 20, "1000點券中介幣"),
    Array(69, 4000313, 20, "1000點券中介幣"),
    Array(70, 4000313, 20, "1000點券中介幣"),
    Array(71, 4000313, 20, "1000點券中介幣"),
    Array(72, 4000313, 20, "1000點券中介幣"),
    Array(73, 4000313, 20, "1000點券中介幣"),
    Array(74, 4000313, 20, "1000點券中介幣"),
    Array(75, 4000313, 20, "1000點券中介幣"),
    Array(76, 4000313, 20, "1000點券中介幣"),
    Array(77, 4000313, 20, "1000點券中介幣"),
    Array(78, 4000313, 20, "1000點券中介幣"),
    Array(79, 4000313, 20, "1000點券中介幣"),
    Array(80, 4000313, 20, "1000點券中介幣"),
    Array(68, 4000313, 20, "1000點券中介幣"),
    Array(69, 4000313, 20, "1000點券中介幣"),
    Array(70, 4000313, 20, "1000點券中介幣"),
    Array(71, 4000313, 20, "1000點券中介幣"),
    Array(72, 4000313, 20, "1000點券中介幣"),
    Array(73, 4000313, 20, "1000點券中介幣"),
    Array(74, 4000313, 20, "1000點券中介幣"),
    Array(75, 4000313, 20, "1000點券中介幣"),
    Array(76, 4000313, 20, "1000點券中介幣"),
    Array(77, 4000313, 20, "1000點券中介幣"),
    Array(78, 4000313, 20, "1000點券中介幣"),
    Array(79, 4000313, 20, "1000點券中介幣"),
    Array(80, 4000313, 20, "1000點券中介幣"),
    Array(81, 4000313, 20, "1000點券中介幣"),
    Array(82, 4000313, 20, "1000點券中介幣"),
    Array(83, 4000313, 20, "1000點券中介幣"),
    Array(84, 4000313, 20, "1000點券中介幣"),
    Array(85, 4000313, 20, "1000點券中介幣"),
    Array(86, 4000313, 20, "1000點券中介幣"),
    Array(87, 4000313, 20, "1000點券中介幣"),
    Array(88, 4000313, 20, "1000點券中介幣"),
    Array(89, 4000313, 20, "1000點券中介幣"),
    Array(90, 4000313, 20, "1000點券中介幣"),
    Array(91, 4000313, 20, "1000點券中介幣"),
    Array(92, 4000313, 20, "1000點券中介幣"),
    Array(93, 4000313, 20, "1000點券中介幣"),
    Array(94, 4000313, 20, "1000點券中介幣"),
    Array(95, 4000313, 20, "1000點券中介幣"),
    Array(96, 4000313, 20, "1000點券中介幣"),
    Array(97, 4000313, 20, "1000點券中介幣"),
    Array(98, 4000313, 20, "1000點券中介幣"),
    Array(99, 4000313, 20, "1000點券中介幣")]

if (map.getId() == 922270300) {
    player.changeMap(910000000);

    if (false) {
        npc.say("您非正常透過，無法獲得獎勵！");
    } else {
        player.loseItem(4032472, 100);
        //查詢當前最大的值
        var sql = "SELECT MAX(RANK) AS RANK FROM jili_game WHERE gametype = 1";
        var push = player.customSqlResult(sql);
        var rank = 0;
        if (push.size() > 0) {
            var result = push.get(0);
            rank = result.get("rank");
        }
        rank++;
        //查重
        var sql = "SELECT name FROM jili_game WHERE gametype = 1 AND name = '" + player.getName() + "'";
        var push = player.customSqlResult(sql);
        if (push.size() > 0) {
            npc.say("您已經領取過一次了，無法重複提交");
        } else {
            player.customSqlInsert("INSERT INTO `jili_game` (`name`,`rank`,`gametype`) VALUES ('" + player.getName() + "'," + rank + ",1)");
            npc.broadcastPlayerNotice(13, "【跑酷達人】" + " : 玩家 " + player.getName() + " 在本次活動中獲得第 " + rank + " 名！");
            var str = "恭喜您！您獲得本次#b跑酷達人#k第#r " + rank + "#k 名\r\n您獲得了獎勵:\r\n";
            for (var i = 0; i < reward.length; i++) {
                if (rank == reward[i][0]) {
                    str += "#v" + reward[i][1] + "# x " + reward[i][2] + " " + reward[i][3] + "\r\n"
                    player.gainItem(reward[i][1], reward[i][2]);
                } else {

                }
            }
            npc.say(str);
        }

    }

}

 