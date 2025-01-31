/**
 *
 *
 */
let mobId;
let event_name;
switch (map.getId()) {
    case 270050100:
        mobId = 8820008;
        event_name = "boss_pinkbeen";
        break;
    case 270051100:
        mobId = 8820108;
        event_name = "boss_pinkbeen_chaos";
        break;
}

let event = npc.getEvent(event_name);
if (event != null && party != null && player.getId() == party.getLeader() && event.getVariable("npc") != null) {
    let ret = npc.askAccept("如果我有善良之鏡,我就能召喚黑魔法師!\r\n等等!好像哪裡錯了!為什麼召喚不了黑魔法師?我感覺到跟黑魔法師完全不同的……啊啊啊!!!!!!!\r\n\r\n #b(請把奇拉的使命傳遞下去.)");
    if (ret == 1) {
        let entId = event.getVariable("npc");
        map.destroyTempNpc(entId);
        event.setVariable("boss", true);
        map.spawnMob(mobId, 5, -46);
    }
}