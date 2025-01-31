/*      
 *  
 *  
 *  功能：毒霧森林 組隊任務相關
 *  
 *
 */
/* global cm */
if (map.getId() == 933027000) {
    var event = npc.getEvent("PQ_PoisonForest");
    var mapStat = event.getVariable(String(map.getId()));
    if (player.hasItem(4001816, 1)) {
        npc.sayNext("紫色魔力石拿來啦,怪人經常拿著它在祭壇附近研究著什麼東西……");
        if (mapStat != true) {
            event.setVariable(String(map.getId()), true);
            map.screenEffect("quest/party/clear");
            party.changeMap(933028000);
        }
    } else {
        npc.say("開啟怪人放在桌子上的箱子，把紫色魔力石拿過來!" + event.getVariable("number1"));
    }
}