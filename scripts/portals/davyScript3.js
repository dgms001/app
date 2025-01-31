
        var eim = reactor.getEvent("Pirate");
        if (eim != null) {
			if(eim.getVariable("stage4")==null){
				eim.setVariable("stage4","0");
			}
            player.loseItem(4001117,1);
            eim.setVariable("stage4", parseInt(eim.getVariable("stage4")) + 1);
			player.dropMessage(11,"入口已被关闭! ");
			map.blowWeather(5120020,"当前被关闭了个 "+eim.getVariable("stage4")+" 门 应该关上4个");
            if (parseInt(eim.getVariable("stage4"))>=4) { //all 5 done
                map.blowWeather(5120020,"所有的门都关上了。好了，我来让你移动到下一关。");
				map.broadcastEventNotice("所有入口已被关闭!");
            }
        }


