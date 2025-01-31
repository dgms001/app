/*  This is mada by dgms    
 *  This source is made by Funms Team
 *  
 *  功能：每日尋寶
 *   備注：任務初始ID 200100，子任務依次加1，新任務分類的初始ID需間隔100，如100200
 *  @Author dgms 
 */

/* global cm */

var status = -1;
var sel = -1;
var text = "";
var questid = 200100;
var maxtimes = 5;
var playerid = 0;
var accepttimes = 0;
var questitemid = 0;
var questitemcs = 0;
var mapid = 0;
var qinfo = "";
var lastMapList = Array();
var maplist = Array(
        Array(211042200, "神秘島 - 艱苦洞穴3"),
        Array(211041000, "神秘島 - 狼的領土Ⅲ"),
        Array(211040500, "神秘島 - 高聳的懸崖3"),
        Array(221021000, "玩具城 - 玩具塔11層~30層"),
        Array(221021600, "玩具城 - 玩具塔36層~65層"),
        Array(221022200, "玩具城 - 玩具塔71層~90層"),
        Array(224000120, "童話村 - 老虎山坡"),
        Array(224000130, "童話村 - 狐貍山坡"),
        Array(230030000, "水下世界 - 藍海草路"),
        Array(701210120, "上少林 - 山腰"),
        Array(701100000, "魔都上海 - 豫園村"),
        Array(865020200, "凱梅爾茲共和國 - 運河3"),
        //Array(701010324, "東方神州 - 可怕的山丘"),
        Array(240030102, "神木村 - 消失的樹林"),
        Array(240030300, "神木村 - 龍林3"),
        Array(251010200, "百草堂 - 百年藥草地"),
        Array(100000200, "射手村 - 射手村"),
        Array(100000201, "射手村 - 弓箭手培訓中心"),
        Array(100000202, "射手村 - 寵物"),
        Array(100010000, "射手村 - 射手村北部小山"),
        Array(100010001, "射手村 - 奇怪的山丘"),
        Array(100010100, "射手村 - 夢境小道"),
        Array(100000001, "射手村 - 瑪亞的家"),
        Array(100000002, "射手村 - 長老斯坦的家"),
        Array(100000003, "射手村 - 麗娜的家"),
        Array(500000000, "泰國 - 水上市場"),
        Array(401040100, "赫裡希安市中心 - 市中心勇猛之路"),
        Array(860000031, "蔚藍道路 - 危險深海2"),
        Array(105020300, "龍族洞穴 - 冰冷的洞穴"),
        Array(120041800, "金海灘 - 巨浪"),
        Array(600010200, "馬萊尼西亞島 - 克蘭卡叢林盆地"),
        Array(600020000, "大笨鐘 - 大廳"),
        Array(600020100, "內部齒輪裝置 - 女神室"),
        Array(600020200, "內部齒輪裝置 - 靈魂回廊"),
        Array(102000000, "勇士部落 - 勇士部落"),
        Array(102000003, "勇士部落 - 戰士圣殿"),
        Array(102030000, "火焰之地 - 野豬的領土"),
        Array(102030100, "火焰之地 - 野生豬豬的領土"),
        Array(102030200, "火焰之地 - 鐵甲豬豬的領土"),
        Array(102030300, "火焰之地 - 燃燒的熱氣"),
        Array(102030400, "火焰之地 - 灰燼之地"),
        Array(103000000, "廢棄都市 - 廢棄都市"),
        Array(103000001, "廢棄都市 - 廢都武器店"),
        Array(103000002, "廢棄都市 - 廢都藥店"),
        Array(103000003, "廢棄都市 - 廢都爵士酒吧"),
        Array(103000004, "廢棄都市 - 廢都醫院"),
        Array(103000005, "廢棄都市 - 廢都美發店"),
        Array(103000006, "廢棄都市 - 廢都修理店"),
        Array(104010000, "金銀島 - 明珠港郊外"),
        Array(100000204, "射手村 - 弓箭手的殿堂"),
        Array(101000004, "魔法密林 - 魔法師的殿堂"),
        Array(102000004, "勇士部落 - 戰士的殿堂"),
        //Array(103000007, "廢棄都市 - 廢都夜市"),
        Array(103000008, "廢棄都市 - 飛俠的殿堂"),
        Array(104000000, "江戶村 - 古代神社"),
        //Array(800010000, "江戶村 - 櫻花山林"),
        Array(800010100, "江戶村 - 天皇殿堂"),
        Array(800010001, "江戶村 - 云狐山坡"),
        //Array(800020000, "江戶村 - 烏鴉樹林"),
        //Array(800020101, "江戶村 - 烏鴉樹林2"),
        //Array(800020110, "江戶村 - 林野的松林"),
        //Array(800020120, "江戶村 - 從地圖中失蹤的村莊"),
        //Array(800020130, "江戶村 - 大佛的邂逅"),
        //Array(800020100, "江戶村 - 前往墓地之路"),
        //Array(800020200, "江戶村 - 死靜的墓地"),
        //Array(800020300, "江戶村 - 漂浮幽靈墓地"),
        //Array(800020400, "江戶村 - 彎曲地獄路"),
        //Array(800030000, "江戶村 - 妖獸之林"),
        Array(220000001, "玩具城 - 雜貨店"),
        Array(220000002, "玩具城 - 藥店"),
        Array(220000003, "玩具城 - 玩具城整形醫院"),
        Array(220000004, "玩具城 - 玩具城美發店"),
        Array(220000005, "玩具城 - 玩具城護膚中心"),
        Array(220000006, "玩具城 - 玩具城寵物訓練場"),
        Array(220000100, "玩具城 - 玩具城售票處"),
        Array(220000110, "玩具城 - 碼頭<開往天空之城>"),
        Array(220000111, "玩具城 - 候船室<開往天空之城>"),
        Array(240000001, "神木村 - 村長之家"),
        Array(240000002, "神木村 - 藥水商店"),
        Array(240000003, "神木村 - 亞可之家"),
        Array(240000004, "神木村 - 依托之家"),
        Array(240000005, "神木村 - 庫摩之家"),
        Array(240000006, "神木村 - 潘姆之家")
        );
 
            playerid = player.getId();
            accepttimes = maxtimes - getEventValue("尋寶任務","查今天");
            text = "\t\t\t#e每日尋寶 - 金利奇的黃金袋子#n\r\n\r\n";
            text += "我的財富，遍布世界各地……\r\n";
            text += "今日剩余尋寶次數：#r" + accepttimes + "#k 次\r\n";
            text += "#r#L999#尋寶任務簡介#l#k\r\n\r\n";
            if (player.getQuestRecordEx(questid+1)==1) {  // 判斷是否接取了任務
                if (player.getQuestRecordEx(questid+1)==2) { // 判斷是否完成任務
                    if (accepttimes <= 0) { // 判斷是否超過完成次數
                        text += "您已經完成了今天的尋寶任務，請明天0點後再來吧~\r\n";
                    } else {
                        text += "#b#L0#接受任務#l#k\r\n";
                    }
                } else {
                    text += "#r#L2#放棄任務 (無法獲得任何獎勵，且會消耗一次任務次數)#l\r\n";
                }
            } else if (accepttimes > 0) {
                text += "#b#L3#接受任務#l\r\n";
            } else {
                text += "  您已經完成了今天的尋寶任務，請明天0點後再來吧~\r\n";
            }
            text += "#b#L222#購買黃金羅盤#l#k";
            var sel = npc.askMenu(text);
            switch (sel) {
                case 999:
                    status = -1;
                    text = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n\r\n#e#d什麼是尋寶任務？#n#k\r\n";
                    text += "\t接受尋寶任務之後，你將會獲得一個#b尋寶便簽#k，我會告訴你可能藏有寶藏的5個地圖，並且會保存在尋寶便簽中，其中只有一個地圖裡面會有一個寶箱，你需要在#r10分鐘之內#k找到這個#b正確的地圖#k並打開寶箱就能獲得一個#b金利奇的黃金袋子#k，打開袋子能獲得豐厚的獎勵，如果超出了時間，就只能#r放棄任務#k咯。\r\n";
                    text += "#e#d什麼是黃金羅盤？#n#k\r\n";
                    text += "\t使用黃金羅盤，可以幫助你直接尋找到正確的寶藏地圖。您可以通過購買獲得黃金羅盤，同時尋寶過程中有幾率獲得黃金羅盤。\r\n";
                    npc.say(text);
                    break;
                case 222:
                    var yes = npc.askYesNo("是否要花費#r1000#k點購買一個黃金羅盤？");
					if(yes ==1){
						if (!player.canGainItem(2430030, 1)) {
							npc.say("消耗欄不足");
						} else if (player.getCashShopCurrency(1) < 1000) {
							npc.say("點卷不足！需要1000點卷！");
						} else {
							player.modifyCashShopCurrency(1, -1000);
							player.gainItem(2430030, 1);
							npc.say("購買成功");
						}
					}
                    break;
                case 0:
				case 3:
                    if (player.getLevel() < 160) {
                        npc.say("等級不足160級，無法領取任務。");
                    } else if (!player.canGainItem(2430030, 1)) {
                        npc.say("你的消耗欄格子不足，請先整理一下吧。");
                    } else {
                        getRandomArray();
                        var questrandid = Math.floor(Math.random() * lastMapList.length);
                        mapid = lastMapList[questrandid][0];// 任務地圖ID
						var item = player.makeItemWithId(2430251);
						var timeStamp = java.lang.System.currentTimeMillis();
						item.setExpiration(1000 * 60 * 10+timeStamp);
                        player.gainItem(item);
						
						var item = player.makeItemWithId(2430008);
						var timeStamp = java.lang.System.currentTimeMillis();
						item.setExpiration(1000 * 60 * 10+timeStamp);
                        player.gainItem(item);
						
						
						
                        text = "寶箱有可能藏匿在一下幾個地圖，你有#b10分鐘#k的時間尋找到正確的地圖並打開寶箱！\r\n";
                        for (var key in lastMapList) {
                            qinfo += "#b#m" + lastMapList[key][0] + "#\r\n";
                            text += "#b#m" + lastMapList[key][0] + "#\r\n";
                        }
                        //spawnNpc(mapid);
                        text += "#r#e提示記錄在尋寶便簽裡，找到寶箱並打開有一定機率發現黃金袋子！！#n#k";
                        // 重新接受任務 
						player.updateQuestRecordEx(parseInt(questid+1),1);
						setQuestData(parseInt(questid),mapid); 
						setQuestData(parseInt(questid+2),qinfo);
                        setEventValue("尋寶任務",1);
                        npc.say(text);
                    }
                    break;
                case 2:
					removeQuestData(questid);
					removeQuestData(parseInt(questid+2));
					
					player.updateQuestRecordEx(parseInt(questid+1),0);
					
                    if (player.hasItem(2430251,1)) {
                        player.loseItem(2430251,999);
                    }
                    text = "任務已放棄……";
                    npc.say(text);
                    break;
                
                default:
                   npc.say('此功能尚未開放，敬請期待！');
                    break;
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

//flag = true 查總的不重置
//flag = false 查當天的
function getEventValue(event1,flag){
	var charInfo = getCharInfo();
	var sql;
	if("查總數".equals(flag)){
		sql = "select sum(value) as numbe from zz_event where accounts_id = "+parseInt(charInfo.accounts_id)+" and event = '"+event1+"' and world ="+parseInt(charInfo.world)+" ";  
	}else if("查今天".equals(flag)){
		sql = "select sum(value) as numbe from zz_event where accounts_id = "+parseInt(charInfo.accounts_id)+" and event = '"+event1+"' and world ="+parseInt(charInfo.world)+" AND DATE_FORMAT(time, '%Y-%m-%d') = DATE_FORMAT(NOW(), '%Y-%m-%d') "; 
	}

	
	var resultList = player.customSqlResult(sql);
	var count=0;
	for (var i = 0; i < resultList.size(); i++) {
    var result = resultList.get(i);
    if (result == null) {
        break;
    }
		count = result.get("numbe");
		if(count ==null){
			count = 0;
		}
	}
	
	return parseInt(count);
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
	
function setQuestData(questid,value1){
	removeQuestData(questid);
	var sql = "insert into zz_treasure(player_id,  `questid`,`value`,time) values("+player.getId()+","+questid+",'"+value1+"',now())";
	player.customSqlInsert(sql);
}

function removeQuestData(questid){
	var sql = "  delete from zz_Treasure  where  questid = ?  ";
	player.customSqlInsert(sql,questid);
} 
	
function setEventValue(event1,value1){
	var charInfo = getCharInfo();
	var sql = "insert into zz_event(accounts_id, world, `event`,`value`,time) values("+charInfo.accounts_id+","+charInfo.world+",'"+event1+"',"+value1+",now())";
	
	player.customSqlInsert(sql);
}

function resetEventValue(event1){
	var charInfo = getCharInfo();
	var sql = " update zz_event set `value` = 0 where accounts_id="+charInfo.accounts_id+" and `event` = '"+event1+"' ";
	player.customSqlInsert(sql);
} 


//function spawnNpc(mapid) {
//    var point;
//    do {
//        point = cm.getSpawnPoint(mapid);
//        if (cm.checkFootHold(mapid, point)) {
//            break;
//        }
//    } while (1);
//    cm.spawnQuestNPC(mapid, 1052008, point.x, point.y, 1, 10 * 60 * 1000);
//}


function getRandomArray() {
    if (lastMapList.length >= 5)
        return true;
    var newMapId = maplist[Math.floor(Math.random() * maplist.length)];
    for (var key in lastMapList) {
        if (lastMapList[key] == newMapId) {
            getRandomArray();
            return false;
        }
    }
    lastMapList.push(newMapId);
    getRandomArray();
}
