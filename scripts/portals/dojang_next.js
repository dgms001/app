/*      
 *  
 *  
 *  功能：武陵道場 下一箇階段傳送口
 *  
 *
 */


var mapID = map.getId();
var stage = parseInt(mapID % 10000 / 100);

var em = npc.getEvent("PQ_Dojang");
if (em != null) {
    var floor = em.getVariable("Floor_" + stage);
    if ("1".equals(floor)) {
        player.changeMap(mapID + 100, 0);
    } else {
        portal.abortWarp();

        pi.showSystemMessage("還有剩下的怪物。");
    }
}
portal.playPortalSE();
