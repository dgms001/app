/*
 * Boss: Seren - Extreme
 * Stage 2 summon
 */

let event = player.getEvent()
if (event != null && event.getVariable("boss1") && event.getVariable("boss2") == null) {
    event.setVariable("boss2", false)

    let boss = map.makeMob(8880657)
    boss.changeBaseHp(6000_0000_0000_0000)
    map.spawnMob(boss, 0, 304)

    let bossDummy = map.makeMob(8880658)
    bossDummy.changeBaseHp(6000_0000_0000_0000)
    map.spawnMob(bossDummy, 0, 304)

    let trueDummy = map.makeMob(8880652)
    trueDummy.setDummyBossGroups(boss)
    trueDummy.changeBaseHp(6000_0000_0000_0000)
    map.spawnMob(trueDummy, 0, 304)
    map.startFieldEvent()
}