exports = {};
// ID:[410002040]
// MapName:世界边界


player.setInGameCurNodeEventEnd(true);
//player.setTemporarySkillSet(0);
player.setInGameDirectionMode(true, false, false, false);
player.setLayerBlind(true, 255, 0, 0, 0, 0, 0);
player.setInGameCurNodeEventEnd(true);
player.showSpineScreen(false, false, true, 0, "Effect/Direction20.img/bossSeren/2pahse_spine/skeleton", "animation", "", false, 0, 0, 0, 0, "intro");
player.soundEffect("Sound/SoundEff.img/seren/2phase");
npc.setDelay(9500);
player.offSpineScreen("intro", 100);
player.inGameDirection22(700)
//player.setTemporarySkillSet(0);
player.setInGameDirectionMode(false, true, false, false);
player.changeMap(map.getId() + 20, true);
