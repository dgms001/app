
let dummyId
let boss1Id
let boss2Id
let eye1Id
let eye2Id
let spie1Id
let spie2Id
let hp


switch (map.getId()) {
    case 450007850: //easy
        dummyId = 8880360
        boss1Id = 8880363
        boss2Id = 8880364
        spie1Id = 8880371
        spie2Id = 8880372
        eye1Id = 8880375
        eye2Id = 8880376
        hp = 5_500_000_000_000
        break
    case 450008750: //normal
        dummyId = 8880340
        boss1Id = 8880343
        boss2Id = 8880344
        spie1Id = 8880351
        spie2Id = 8880352
        eye1Id = 8880355
        eye2Id = 8880356
        hp = 10200000000000
        break
    case 450008150: //hard
        dummyId = 8880300
        boss1Id = 8880303
        boss2Id = 8880304
        spie1Id = 8880321
        spie2Id = 8880322
        eye1Id = 8880325
        eye2Id = 8880326
        hp = 200200000000000
        break
}
let event = npc.getEvent()
if (event != null && event.getVariable("boss1") == null) {
    event.setVariable("boss1", false)

    let boss = map.makeMob(dummyId)
    boss.changeBaseHp(hp)
    boss.setHpLimitPercent(2 / 3)
    map.spawnMob(boss, 352, -2022)

    let boss2 = map.makeMob(boss1Id)
    boss2.changeBaseHp(hp)
    boss2.setHpLimitPercent(2 / 3)
    map.spawnMob(boss2, 352, 157)

    let boss3 = map.makeMob(boss2Id)
    boss3.changeBaseHp(hp)
    boss3.setHpLimitPercent(2 / 3)
    map.spawnMob(boss3, 352, -2022)


    let spie = map.makeMob(spie1Id)
    map.spawnMob(spie, 352, 157)

    let eye = map.makeMob(eye1Id)
    map.spawnMob(eye, 252, 157)


    let spie2 = map.makeMob(spie2Id)
    map.spawnMob(spie2, 352, -2022)

    let eye2 = map.makeMob(eye2Id)
    map.spawnMob(eye2, 352, -2022)

    map.startFieldEvent()
}