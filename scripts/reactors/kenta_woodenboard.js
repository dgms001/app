/**
 *
 *
 */


let event = reactor.getEvent("kenta");
if (event != null) {
    event.setVariable("woodenboard", true);
    event.setVariable("field1_npc", map.spawnTempNpc(9020004, 201, 1800));
    map.blowWeather(5120052, "我呼吸困難……請你消滅周邊的怪物，拿到10個空氣鈴。快……");
}


