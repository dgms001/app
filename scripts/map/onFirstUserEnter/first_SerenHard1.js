exports = {};
let event = player.getEvent();
if (event != null && event.getVariable("boss1") == null) {
    event.setVariable("boss1", false);
    let boss = map.makeMob(8880600);
    boss.changeBaseHp(200000000000000);
    map.spawnMob(boss, 0, 274);

    let dummy = map.makeMob(8880601);
    dummy.changeBaseHp(200000000000000);
    map.spawnMob(dummy, 0, 274);
    map.startFieldEvent();
}