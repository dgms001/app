/*  This is mada by Yanran    
 *
 *  功能：主题副本 - 狮子王之城 - 第一座塔楼
 *
 *  @Author Yanran
 */
portal.abortWarp();
if (player.hasItem(4032858, 1) || player.hasItem(4032832, 1)) {
        player.runScript("LionTop");
} else {
        player.scriptProgressMessage("没有钥匙，无法进入塔楼。");
}
