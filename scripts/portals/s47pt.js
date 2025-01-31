/**
 *
 *
 */

var event = portal.getEvent();

if (player.isGm()) {
    player.showSystemMessage("Portal Name:" + portal.getName());
}
if (event != null) {
    if (portal.getName().equals(event.getVariable("stage47_Key"))) {
        if (!"1".equals(event.getVariable("stage47_Summon"))) {
            event.setVariable("stage47_Summon", "1");
            let mob = map.makeMob(9309128);
            mob.changeBaseHp(50000000000);
            map.spawnMob(mob, 500, 185);
        }
    }
} else {
    player.showSystemMessage("發生未知錯誤，請退出後重試!");
}
portal.abortWarp();