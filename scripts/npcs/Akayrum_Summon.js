/**
 *
 *
 */
let event = npc.getEvent("boss_akayrum_easy");
if (event != null && party != null && player.getId() == party.getLeader() && event.getVariable("npc") != null) {
    let ret = npc.askAccept("把我精心安排的計劃化為泡影的傢伙們竟然會自己找上門來, 就別提我有多麼高興了。\r\n\r\n#r作為其代價, 就讓我賜給你們這世上最痛苦的死法吧。#k");
    if (ret == 1) {
        let entId = event.getVariable("npc");
        map.destroyTempNpc(entId);
        event.setVariable("boss", true);
        map.spawnMob(8860007, 342, -181);
    }
}