player.setInGameCurNodeEventEnd(true);
player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.setLayerBlind(true, -1, 0);
showSpineScreen(0, "Effect/Direction20.img/bossWill/intro_spine/skeleton", "2", "intro");
player.soundEffect("Sound/SoundEff.img/esfera/boss/intro2");
npc.setDelay(5500);
setLayerOn(1000, "BlackOut", 0, 0, 13, "Map/Effect2.img/BlackOut", 4);
npc.setDelay(1000);
player.offSpineScreen("intro", 100);
player.setLayerOff(1000, "BlackOut");
player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);

player.changeMap(map.getId() + 50);


function setLayerOn(tTerm, sKey, nRX, nRY, nZ, sUOL, locations) {
    player.setLayerOn(tTerm, sKey, nRX, nRY, nZ, sUOL, locations, false, 0, false, 0, 0);
}

function showSpineScreen(tEndDelay, sPath, animationName, nStr) {
    player.showSpineScreen(false, false, false, tEndDelay, sPath, animationName, nStr, false, 0, 0, null);
}