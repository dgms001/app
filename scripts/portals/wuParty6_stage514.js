/*      
 *  
 *  
 *  功能：毒霧森林 組隊任務相關
 *  
 *
 */
var xy = Array(
    Array(5, -3),
    Array(540, -2),
    Array(1083, -5),
    Array(5, 535),
    Array(540, 535),
    Array(1083, 535),
    Array(5, 1071),
    Array(540, 1071)
);
var event = portal.getEvent("PQ_PoisonForest");
portal.abortWarp();
if (event != null) {
    var port = Math.floor(Math.random() * 25) + 1;
    if (port == 1) {
        player.teleportToPos(3, portal.getId(), sh.newPoint(1075, 1197));
        event.setVariable(String(map.getId()), true);
        map.screenEffect("quest/party/clear");
    } else {
        var rand = Math.floor(Math.random() * xy.length);
        player.teleportToPos(3, portal.getId(), sh.newPoint(xy[rand][0], xy[rand][1]));
    }
}
