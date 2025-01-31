/**
 *
 *
 */
let mobId;
let event_name;
switch (map.getId()) {
    case 211070102:
        mobId = 8840013;
        event_name = "boss_vonleon_easy";
        break;
    case 211070100:
        mobId = 8840010;
        event_name = "boss_vonleon";
        break;
    case 211070104:
        mobId = 8840018;
        event_name = "boss_vonleon_hard";
        break;
}

let event = npc.getEvent(event_name);
if (event != null && party != null && player.getId() == party.getLeader() && event.getVariable("npc") != null) {
    let ret = npc.askAccept("你們誰來打敗我？或者你們是反黑魔法師聯盟的人？不管你是誰…沒有必要再談下去!!!!!!!\r\n\r\n#b(來吧!你們這些傻瓜!)");
    if (ret == 1) {
        let entId = event.getVariable("npc");
        map.destroyTempNpc(entId);
        event.setVariable("boss", true);
        map.spawnMob(mobId, -5, -181);
    }
}