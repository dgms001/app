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
    if (mapStat == true) {
        party.changeMap(933029000);
    } else {
        portal.abortWarp();
    }
}
