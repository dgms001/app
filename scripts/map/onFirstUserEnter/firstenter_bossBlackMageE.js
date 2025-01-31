/*
 * Boss: BlackMage - Extreme
 * Summon
 */


let event = player.getEvent()
if (event != null) {
    switch (map.getId()) {
        case 450013910:
            if (event.getVariable("boss1") == null) {
                event.setVariable("boss1", false)
                let dummy = map.makeMob(8880535)
                
                let knight1 = map.makeMob(8880530)
                knight1.changeBaseHp(900_0000_0000_0000)
                map.spawnMob(knight1, -383, 84)

                let knight2 = map.makeMob(8880531)
                knight2.changeBaseHp(900_0000_0000_0000)
                map.spawnMob(knight2, 424, 84, true)

                dummy.setDummyBossGroups(knight1, knight2)
                dummy.changeBaseHp(900_0000_0000_0000)
                map.spawnMob(dummy, 0, 84)


                let boss = map.makeMob(8880542)
                map.spawnMob(boss, 0, 84)

                map.startFieldEvent()
            }
            break
        case 450013930:
            if (event.getVariable("boss2") == null && event.getVariable("boss1")) {
                event.setVariable("boss2", false)
                let boss = map.makeMob(8880532)
                boss.changeBaseHp(900_0000_0000_0000)
                map.spawnMob(boss, 0, 87)

                let mob1 = map.makeMob(8880542)
                map.spawnMob(mob1, 0, 87)
                let mob2 = map.makeMob(8880546)
                map.spawnMob(mob2, 0, 87)
                
                map.startFieldEvent()
            }
            break
        case 450013950:
            if (event.getVariable("boss3") == null && event.getVariable("boss2")) {
                event.setVariable("boss3", false)
                let boss = map.makeMob(8880533)
                boss.changeBaseHp(900_0000_0000_0000)
                map.spawnMob(boss, 0, 84)
                boss.setZoneDataType(1)

                let mob1 = map.makeMob(8880542)
                map.spawnMob(mob1, 0, 84)

                map.startFieldEvent()
            }
            break
        case  450013970:
            if (event.getVariable("boss4") == null && event.getVariable("boss3")) {
                event.setVariable("boss4", false)
                let boss = map.makeMob(8880534)
                boss.changeBaseHp(900_0000_0000_0000)
                map.spawnMob(boss, 0, 218)

                let mob1 = map.makeMob(8880542)
                map.spawnMob(mob1, 0, 218)

                let dummy = map.makeMob(8880549)
                dummy.setDummyBossGroups(boss)
                map.spawnMob(dummy, 0, 218)
                
                map.startFieldEvent()
            }
            break
        case 450013980:
            if (event.getVariable("boss5") == null && event.getVariable("boss4")) {
                event.setVariable("boss5", false)
                let boss = map.makeMob(8880548)
                map.spawnMob(boss, 0, 217)
            }
            break
    }
}