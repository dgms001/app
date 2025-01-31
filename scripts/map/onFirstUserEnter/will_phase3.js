
let bossId
let eyeId
let spieId
let hp

switch (map.getId()) {
    case 450008050: //easy
        bossId = 8880362
        spieId = 8880374
        eyeId = 8880378
        hp = 6_940_000_000_000
        break
    case 450008950: //normal
        bossId = 8880342
        spieId = 8880354
        eyeId = 8880358
        hp = 30000000000000
        break
    case 450008350: //hard
        bossId = 8880302
        spieId = 8880324
        eyeId = 8880328
        hp = 60000000000000
        break
}

let event = npc.getEvent()
if (event != null && event.getVariable("boss3") == null) {
    event.setVariable("boss3", false)
    let boss = map.makeMob(bossId)
    boss.changeBaseHp(hp)
    map.spawnMob(boss, -85, 150)

    let spie = map.makeMob(spieId)
    map.spawnMob(spie, -85, 150)

    let eye = map.makeMob(eyeId)
    map.spawnMob(eye, -85, 150)

    map.startFieldEvent()
}