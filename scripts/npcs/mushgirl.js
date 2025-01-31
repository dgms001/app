/* 洗裝備潛能 */
/*
var pot="";//選擇的潛能
		var num = player.getQuestRecordEx(9603);
		var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n\r\n";
		selStr+= "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#親愛的#r#h ##k您好!糖果系統上線啦！\r\n#k";
		selStr+= "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#擁有糖果點: #r" + num+ "#k\r\n\r\n";
		selStr+= "#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#";
		selStr += "\r\n#L" + 8 + "##r#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#每日任務   (點券,閃炫,箱子)#r[已開放]#l";
		selStr += "\r\n#L" + 2 + "##r#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#每日跑環   (點券,破功,糖果)#r[已開放]#k#l";
		selStr += "\r\n#L" + 3 + "##r#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#懸賞任務   (賞金,獎勵,糖果)#r[已開放]#l";
		selStr += "\r\n#L" + 7 + "##r#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#糖果功能   (完美附加潛能  )#r[已開放]#l";
		selStr += "\r\n#L" + 6 + "##r#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#糖果商店   (高級物品待加入)#r[已開放]#l";
		//selStr += "\r\n#L" + 5 + "##r#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#排位挑戰   (強化,無損,郵票)#r[已開放]#l";
		selStr += "\r\n#L" + 4 + "##r#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#男生女生   (稱號,勛章,升級)[已開放]#l";
		var selection = npc.askMenu(selStr);
    		
    	switch(selection){
	    	case 2://每日跑環
    			player.runScript('每日跑環');
    			break;
    		case 3://懸賞任務
	    			player.runScript("new_areward");
	    			break;
	    	case 4://男生女生
	    			player.runScript("new_認證勛章升級");
	    			break;
    		case 5://排位挑戰
    					player.runScript("DimensionInavde");
	    			break;
	    	case 6://糖果商店
	    			player.runScript("new_candyshop");
	    			break;
	    	case 7://糖果商店
	    			player.runScript("new_function");
	    			break;
	    	case 8://糖果商店
	    			player.runScript("每周7天任務");
	    			break;
    	} 