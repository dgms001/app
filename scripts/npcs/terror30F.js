/**
 *
 *
 */


var event = npc.getEvent();
if (event != null) {
    if (npc.askAccept("你要開始與膽小的獅子展開戰鬥嗎？")) {
        if (!"1".equals(event.getVariable("Boss_S30"))) {
            //召喚Boss
            event.setVariable("Boss_S30", "1");
            let boss = map.makeMob(9309200);
            boss.changeBaseHp(boss.getHp() * 1000);
            map.spawnMob(boss, 1073, 155);
            map.blowWeatherEffectNotice("膽小的獅子從黑暗中現身了。請你去追蹤逃跑的獅子！", 147, 15000);
        } else {
            npc.say("已經召喚過了。");
        }
    }
}
   