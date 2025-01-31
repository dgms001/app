/**
 *
 *
 */

var event = portal.getEvent();
if (event != null) {
    player.teleportToPortalId(1);
    map.blowWeatherEffectNotice("唉......好危險阿。還好我的力量可以把你帶到這裡來。小心別墜落了。", 147, 15000);
}
portal.abortWarp();