/*
portal.showHint("打敗他們，自會進入下一關！", 250, 5);
portal.abortWarp();
*/
let maps = [744000014, 744000013, 744000015, 744000003, 744000002, 744000006, 744000007, 744000010, 744000009, 744000011, 744000012, 744000004, 744000001]

let event = portal.getEvent("JILI_FSchool");
if (event != null && event.getVariable("open") == 1) {
    var stage = parseInt(event.getVariable("stage"));
    party.changeMap(maps[stage - 1]);
    event.setVariable("open", "0");
    switch (map.getId()) {
        case 744000012:
            let boss = map.makeMob(9410181);
            boss = map.makeMob(9410181);
            boss.changeBaseHp(200000000);
            map.spawnMob(boss, 50, 240);
            break;
    }
} else {
    portal.showHint("打敗他們，才能進入下一關！", 250, 5);
}
portal.abortWarp();