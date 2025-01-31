
let bossId
let eyeId
let spieId
let hp

switch (map.getId()) {
    case 450007950: //easy
        bossId = 8880361
        spieId = 8880373
        eyeId = 8880377
        hp = 4_161_400_000_000
        break
    case 450008850: //normal
        bossId = 8880341
        spieId = 8880353
        eyeId = 8880357
        hp = 15000000000000
        break
    case 450008250: //hard
        bossId = 8880301
        spieId = 8880323
        eyeId = 8880327
        hp = 300000000000000
        break
}

let event = npc.getEvent()
if (event != null && event.getVariable("boss2") == null) {
    event.setVariable("boss2", false)
    let boss = map.makeMob(bossId)
    boss.changeBaseHp(hp)
    boss.setHpLimitPercent(1 / 2)
    map.spawnMob(boss, 352, 150)

    let spie = map.makeMob(spieId)
    map.spawnMob(spie, 352, 150)

    let eye = map.makeMob(eyeId)
    map.spawnMob(eye, 352, 150)

    map.startFieldEvent()
}