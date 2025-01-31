/*  This is mada by Yanran    
 *
 *  功能：鲁塔比斯 - 灯泡 哈南特的紧急呼叫 寂静的湿地
 *
 *  @Author Yanran
 */

if (player.isQuestCompleted(30006)) {
        portal.rememberMap("UNITY_PORTAL");
        portal.playPortalSE();
        player.changeMap(105200000, 0);
} else if (player.isQuestCompleted(30000)) {
        player.changeMap(105010200, 1);
} else {
        player.scriptProgressMessage("被迷雾覆盖，还是不要进去了。");
}

