/**
 *
 *
 */

if (player.isQuestStarted(2607)) {
    if (player.checkNearby(sh.newPoint(-1111, -222))) {
        if (player.hasItem(4033178, 1)) {
            npc.say("快回去交任務吧！");
        } else if (player.canGainItem(4033178, 1)) {
            player.gainItem(4033178, 1);
        } else {
            npc.say("其他欄揹包已滿，請清理。");
        }
    } else {
        npc.say("請來到我面前！");
    }
}
