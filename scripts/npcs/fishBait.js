/*  This is mada by dgms    
 *  This source is made by Funms Team
 *  
 *  功能：NPC 餌料商
 *  
 *  @Author dgms 
 */

/* global cm */

    npc.sayNext("歡迎~你是要來購買魚餌，對吧？");
    var sel = npc.askMenu("您想做什麼呢？ \n\r #b#L0# 使用雇傭釣手魚餌罐頭（50個兌換1000魚餌）#k#b \n\r #L1# 購買雇傭釣手專用一般魚餌（1000W購買100個/天）#k");
	if (sel == 0) {
		if (player.canGainItem(2300003, 1000)&& player.hasItem(5350003, 50)) {
			player.loseItem(5350003, 50);
			gainItemP(2300003, 1000);
			npc.say("兌換成功,祝您釣魚愉快。");
		} else {
			npc.say("請確認你有雇傭釣手魚餌罐頭50個並整理下你的背包空間。");
		}
	} else if (sel == 1) {
		if (player.getPQLog("購買魚餌") <= 0) {
			if (player.canGainItem(2300002, 100) && player.hasMesos(10000000)) {
				player.gainMesos(-10000000);
				gainItemP(2300002, 100);
				npc.say("購買成功,祝您釣魚愉快。");
				player.addPQLog("購買魚餌");
			} else {
				npc.say("請整理下你的背包空間。");
			}
		} else {
			npc.say("魚餌一天只能購買一次！");
		}
	}
 
 

function gainItemP(ItemId,number) {
	if (!player.canGainItem(ItemId, number)){
		var sql = "INSERT IntO zz_Store (player_id,ItemId,number,ItemName) VALUES(?,?,?,?)";
		player.customSqlInsert(sql, player.getId(),ItemId,number,player.makeItemWithId(ItemId).getItemName());
		player.dropMessage(10,"檢測到您背包空間不足或存在固有道具，已將您獲得的["+player.makeItemWithId(ItemId).getItemName()+" x "+number+"]存入'儲藏倉庫'中，請前往領取。");
	} else {
		player.gainItem(ItemId,number);
	}
}

