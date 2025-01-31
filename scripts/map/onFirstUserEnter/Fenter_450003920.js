/**
 * Lucid
 * @author dgms
 */
 let eventName;
 let bossId;
 let bossHp;
 switch (map.getId()) {
         case 450004850:
                 eventName = "boss_lucid_easy";
                 bossId = 8880191;
                 //二階段路西德 簡單
                 bossHp = 6000000000000;
                 break;
         case 450004250:
                 eventName = "boss_lucid";
                 bossId = 8880150;
                 //二階段路西德 普通
                 bossHp = 12000000000000;//1000兆
                 break;
         case 450004550:
                 eventName = "boss_lucid_hard";
                 bossId = 8880151;
                 //二階段路西德 困難
                 bossHp = 41040000000000;
                 break;
 }
 let event = npc.getEvent(eventName);
 if (event != null && event.getVariable("boss2") == null) {
         event.startTimer("ButterflyPhase2", 5000);
         event.setVariable("boss2", false);
         let boss = map.makeMob(bossId);
         boss.changeBaseHp(bossHp);
         map.spawnMob(boss, 636, -491);
        map.setLucidBossId(bossId);
}