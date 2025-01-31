exports = {};
// ID:[410002000]
// MapName:王宫主厅


/* Update Quest RecordEx | Id:39932 | Name: Unknown | Data: "Record=1;lastDate=22/02/08" */
//player.updateQuestRecordEx(39932, "Record=1;lastDate=22/02/08");
/* Update Quest RecordEx | Id:39932 | Name: Unknown | Data: "Record=1;lastDate=22/02/08;cool=22/02/08/14/41" */
//player.updateQuestRecordEx(39932, "Record=1;lastDate=22/02/08;cool=22/02/08/14/41");
//player.showSystemMessage("已记录进场时间，30分钟后可再度进场。");
player.setInGameCurNodeEventEnd(true);
//player.setTemporarySkillSet(0);
player.setInGameDirectionMode(true, false, false, false);
player.setLayerBlind(true, 255, 0, 0, 0, 0, 0);
player.setInGameCurNodeEventEnd(true);
player.showSpineScreen(false, false, true, 0, "Effect/Direction20.img/bossSeren/1pahse_spine/skeleton", "animation", "", false, 0, 0, 0, 0, "intro");
player.soundEffect("Sound/SoundEff.img/seren/1phase");
npc.setDelay(11500);
player.offSpineScreen("intro", 100);
player.inGameDirection22(700)
//player.setTemporarySkillSet(0);
player.setInGameDirectionMode(false, true, false, false);
player.changeMap(map.getId() + 20, true);