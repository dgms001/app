player.setInGameCurNodeEventEnd(true);
//player.setTemporarySkillSet(0);
player.setInGameDirectionMode(true, false, false, false);
player.setLayerBlind(true, 255, 0, 0, 0, 0, 0);
player.setInGameCurNodeEventEnd(true);
player.showSpineScreen(false, false, true, 0, "Effect/Direction20.img/bossKalos/1phase_spine/skeleton", "animation", "", false, 0, 0, 0, 0, "intro");
player.soundEffect("Sound/SoundEff.img/kalos/1phase", 200);
npc.setDelay(7000);
player.offSpineScreen("intro", 100);
player.inGameDirection22(700)
//player.setTemporarySkillSet(0);
player.setInGameDirectionMode(false, true, false, false);
player.changeMap(410006020, 0);
