/*
 * Boss: Seren - Extreme
 * Stage 1 summon
 */

let event = player.getEvent()
if (event != null && event.getVariable("boss1") == null) {
    event.setVariable("boss1", false)
    let boss = map.makeMob(8880650)
    boss.changeBaseHp(6000_0000_0000_0000)
    map.spawnMob(boss, 0, 274)

    let dummy = map.makeMob(8880651)
    dummy.changeBaseHp(6000_0000_0000_0000)
    map.spawnMob(dummy, 0, 274)
    map.startFieldEvent()
}