
var z = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"//美化
var tag = "理財1";//tag不同就可以分別領取

        var selStr = "#e#r#fEffect/ItemEff/1112811/0/0##fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k\r\n- #e#r隨身npc#k#n\r\n";
		selStr += "歡迎使用隨身特權,本次給您帶來快捷服務：#k\r\n";
		selStr += "#r#L0#"+z+" 每日金幣#l  #L1#"+z+" 每日道具#l  #L2#"+z+" 三倍經驗#l\r\n";
		selStr += "#L3#"+z+" VIP破功卷#l #r#L4#"+z+" 待開發中#l  #L5#"+z+" 領取雙爆#l\r\n";
		selStr += "#L6#"+z+" 增加血量#l #r #L7#"+z+" 增加藍量#l  #L8#"+z+" 每日餘額#l\r\n";
		selStr += "#L9#"+z+"VIP材料地圖#l\r\n";
		selStr += "\r\n\r\n#fEffect/ItemEff/1112811/0/0##fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k";
        var selection = npc.askMenu(selStr); 
		if(player.getFreeSlots(2)<=3 ||player.getFreeSlots(3)<=3 ||player.getFreeSlots(4)<=3 ){
			npc.say("請每個欄都留出不小於4個空格");
		}else{
        switch (selection) {
		case 9:
			player.runScript("new_艾利傑入場1");
        break;      
        case 0:
           if (player.getPQLog("每日金幣"+tag) < 1) { //工資
					player.gainMesos(10000000);
					player.gainItem(4002000,2);
					player.addPQLog("每日金幣"+tag);
					npc.say("恭喜您領取VIP服務的每日工資1000萬金幣,2張蝸牛郵票。");
            } else {
                npc.say("失敗：\r\n\r\n#r1). 您已經領取過，請明日再領。\r");			
            }
        break;
        case 1:
           if (player.getPQLog("每日道具"+tag) < 1) { //魔方
			   player.gainItem(5079001,10);
			   player.gainItem(5062024,10);
			   player.addPQLog("每日道具"+tag);		 	
            } else {
                npc.say("失敗：\r\n\r\n#r1). 您已經領取過，請明日再領。");				
            }
       break;
       case 2:
           if (player.getPQLog("三倍經驗"+tag) < 1) { //三倍
				var newItem = player.makeItemWithId(5211060);
				var timeStamp = java.lang.System.currentTimeMillis();
				var expirationDate = timeStamp+86400*1000;
				newItem.setExpiration(expirationDate);
				player.gainItem(newItem); 
				player.addPQLog("三倍經驗"+tag);
				npc.say("恭喜您領取VIP服務的每日三倍經驗卡一張.");		
            } else {
                npc.say("您已經領取過，請明日再領。");
            }
       break;
       case 3:
           if (player.getPQLog("VIP破功卷"+tag) < 1) { //工資
              player.gainItem(2431292,1);
				player.addPQLog("VIP破功卷"+tag);
				npc.say("恭喜您VIP破功卷x1.");
            } else {
                npc.say("失敗：\r\n\r\n#r1). 您已經領取過，請明日再領。\r");
            }
       break;
       /*case 4:
           if (player.getPQLog("每日抽獎"+tag) < 1) { //抽獎
				player.gainItem(2430069,3);
				player.addPQLog("每日抽獎"+tag);
				npc.say("恭喜您領取VIP服務的每日抽獎包.");
            } else {
                npc.say("失敗：\r\n\r\n#r1). 您已經領取過，請明日再領。\r\n2). 您線上積分不足1000點。");
            }
       break;*/
	    case 4:
            player.runScript("仍地功能"); 
       break;
       	case 5:
           if (player.getPQLog("領取雙爆"+tag) < 1) { //雙爆
		   		var newItem = player.makeItemWithId(5360015);
				var timeStamp = java.lang.System.currentTimeMillis();
				var expirationDate = timeStamp+86400*1000;
				newItem.setExpiration(expirationDate);
				player.gainItem(newItem); 
				player.addPQLog("領取雙爆"+tag);
				npc.say("恭喜您領取VIP服務的每日三倍經驗卡一張.");	
            } else {
                npc.say("您已經領取過，請明日再領。");			
            }
       break;
       case 6:
       		player.runScript("洗血"); 
       break;
       case 7:
       		player.runScript("洗藍");
       break;
       
    	 case 8:
    		 if (player.getPQLog("每日餘額"+tag) < 1) {
				player.addPQLog("每日餘額"+tag);
				var money = Array(9,10)
				var channel =  money[parseInt(Math.floor(Math.random() * money.length))];
				gainRMB(channel,"VIP福利",1);
				npc.broadcastPlayerNotice(1,"[VIP系統]"+player.getName()+"領取了每日餘額："+channel+".");
				npc.say("獲得"+channel+"餘額!");
			 }else{
				 npc.say("您已經領取過，請明日再領。");
			 }
    	 break;
        }
	}
function gainRMB(num,item,type){
	var sql = "insert into zz_coin(account, coin, paytime,remark,type) values('"+getAccountName()+"',"+num+",now(),'"+item+"',"+type+")";
	player.customSqlInsert(sql);
}

function  getAccountName() {
	var sql = "select name from accounts where id = (select accounts_id from characters where id = "+player.getId()+");";
	var resultList = player.customSqlResult(sql);
	var accountName=0;
	for (var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if (result == null) {
			break;
		}
		var accountName = result.get("name");
	}
	return accountName;
}	
	
	//是否領取了vip福利
function firstCharge(){
	var account = getAccountName();
	var sql = "select SUM(coin) rmb from zz_coin a where to_days(a.paytime) = TO_DAYS((select date_sub(curdate(),interval 0 day) from DUAL)) and a.account ='"+account+"' and a.remark = 'VIP福利' and a.type = 1 and coin >0;";
	var resultList = player.customSqlResult(sql);
	var rmb=0;
	if(null!=resultList){
		for (var i = 0; i < resultList.size(); i++) {
	    var result = resultList.get(i);
	    if (result == null) {
	        break;
	    }
			rmb = result.get("rmb");
			break;
		}
	}
	if(rmb==null){
		rmb =0;
	}
	return rmb;
	 
}


function  getCharInfo(){
	var sql = "select accounts_id,world from characters where id = "+player.getId()+"";
	var resultList = player.customSqlResult(sql);
	var charInfo={};
	for (var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if (result == null) {
			break;
		}
		charInfo.accounts_id = result.get("accounts_id");
		charInfo.world = result.get("world");
	}
	return charInfo;
}
