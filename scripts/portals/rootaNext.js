let event = portal.getEvent("BossBloody_NORMAL");
if (event != null && map.getId() == 105200300) {
    player.changeMap(105200310, 0);//OK
}
event = portal.getEvent("BossPierre_NORMAL");
if (event != null && map.getId() == 105200200) {
    player.changeMap(105200210, 0);//OK
}
event = portal.getEvent("BossBanban_NORMAL");
if (event != null && map.getId() == 105200100) {
    player.changeMap(105200110, 0);//OK
}
event = portal.getEvent("BossBelen_NORMAL");
if (event != null && map.getId() == 105200400) {
    player.changeMap(105200410, 0);//OK
}
event = portal.getEvent("BossBloody_CHAOS");
if (event != null && map.getId() == 105200700) {
    player.changeMap(105200710, 0);//OK
}
event = portal.getEvent("BossPierre_CHAOS");
if (event != null && map.getId() == 105200600) {
    player.changeMap(105200610, 0);//OK
}
event = portal.getEvent("BossBanban_CHAOS");
if (event != null && map.getId() == 105200500) {
    player.changeMap(105200510, 0);//OK
}
event = portal.getEvent("BossBelen_CHAOS");
if (event != null && map.getId() == 105200800) {
    player.changeMap(105200810, 0);//OK
}
portal.abortWarp();