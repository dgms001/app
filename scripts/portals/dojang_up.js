/*     
 *  
 *  
 *  功能：武陵道場 下一個階段傳送口
 *  
 *  @author dgms 
 */
    var mapID = map.getId();
    var stage = parseInt(mapID % 10000 / 100);
    var em = portal.getEvent("PQ_Dojang");
    if (em != null) {
		if(map.getId() == 925081000){
		player.changeMap(925020001);
		}
        var floor = em.getVariable("Floor_" + stage);
        if ("1".equals(floor)) {
            player.changeMap(mapID+100,0);
        } else {
			portal.abortWarp();
            player.showSystemMessage("地圖上還剩餘："+map.getEventMobCount()+"怪物,請擊殺之後進入下一關卡.");
        }
    }
portal.playPortalSE();
