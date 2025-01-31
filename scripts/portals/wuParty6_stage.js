/*      
 *  
 *  
 *  功能：毒霧森林 組隊任務相關
 *  
 *
 */

var event = portal.getEvent("PQ_PoisonForest");
if (event != null) {
    var mapStat = event.getVariable(String(map.getId()));
    switch (map.getId()) {
        case 933021000:
            portal.playPortalSE();
            player.changeMap(933022000);
            break;
        case 933022000:
            portal.playPortalSE();
            player.changeMap(933023000);
            break;
        case 933023000:
            if (mapStat == true) {
                portal.playPortalSE();
                player.changeMap(933024000);
            } else {
                portal.abortWarp();
                player.showSystemMessage("請消滅所有苔蘚木妖，才能進入下一階段！");
            }
            break;
        case 933024000:
            if (mapStat == true) {
                portal.playPortalSE();
                player.changeMap(933025000);
            } else {
                portal.abortWarp();
                player.showSystemMessage("請使用稀釋的毒素清除荊棘草！");
            }
            break;
        default:

            break;
    }
}