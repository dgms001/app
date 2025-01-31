//平獎勵
player.gainAp(+1);
player.addEventValue("AP成長", 1, 1000);
player.loseItem(npc.getItemId(), 1);
npc.broadcastWeatherEffectNotice(4, "【AP成長箱】玩家 [" + player.getName() + "] 總計獲得 AP 加成為 : [" + player.getEventValue("AP成長") + "]", 10000); //35[特效 1-???] 10000[1秒]

