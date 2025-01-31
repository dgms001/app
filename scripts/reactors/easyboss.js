/**
 *
 *
 */

let event = reactor.getEvent("boss_zakum_easy");
if (event != null && event.getVariable("boss") == null) {
    event.setVariable("boss", true);
    map.broadcastEventNotice("弱化扎昆出現了，請在規定時間範圍內擊敗它。");
    let boss = map.makeMob(8800022);
    var totalHp = 0;
    for (let i = 8800023; i <= 8800030; i++) {
        let hand = map.makeMob(i);
        totalHp += hand.getHp();
        map.spawnMob(hand, -10, -215);
    }
    boss.changeBaseHp(boss.getHp() + totalHp);
    map.spawnMob(boss, -10, -215);
}

