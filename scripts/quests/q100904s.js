/*	player.completeQuest(16023,0);  	可以跳出q16022s每10秒
	q100904s 可能只有到 06/21
*/

//傳送全服玩家頻道
//if(player.getChannel() == 1) {  player.changeChannel(player.getChannel()+1)	}	//重啟1用
//if(player.getChannel() >= 2 && player.getChannel() <= 5) {  player.changeChannel(1)	}	//重啟2-5用
// if(player.getChannel() >= 6 && player.getChannel() <= 10){  player.changeChannel(player.getChannel()-5)	}	//重啟6-10用






let mapA = map.getId();
if (mapA == 993010000) {//新手地圖提示
	player.showProgressMessageFont("請進入一個星球開啟圓夢世界吧!!", 3, 30, 4, 10 * 1000);
}

onoff = false;//true false
if (onoff) {
	npc.rememberMap("RETURN_MAP");//刷新地圖
	let [returnMap, spawnPoint] = npc.getRememberedMap("RETURN_MAP"); //地圖 , 傳點
	let item = 4032053;
	let quantity1;
	let quantity2;
	var charInfo = getq100904s();
	var mapList = Array(
		100000000, 100000000, 100000001, 100000002, 100000003, 100000200, 749050400, 925020001, 951000000, 200000202, 101050000, 103000004, 220000000, 410000300, 875000020, 104000000, 105000000, 910048100, 273000000, 224000000, 100000000, 450001350, 200000200, 802000000, 993000600, 230000002, 104000002, 120000100, 103000000, 865000000, 240000000, 230000000, 230000001, 400000000, 410004001, 925020000, 450003100, 103041000, 450003000, 450002000, 450001000, 101000000, 200000301
	);

	let mapListON;
	mapListON = true;
	for (var i = 0; i < mapList.length; i++) {
		if (returnMap == mapList[i]) {
			mapListON = false;
		}
	}


	quantity1 = player.getAmountOfItem(item);
	quantity2 = charInfo.quantity;					//前一次(10秒)紀錄數量
	if (quantity2 == undefined) { quantity2 = player.getAmountOfItem(item); }	//防呆 首次執行SQL會是空的
	quantitysum = quantity1 - quantity2;


	if (mapListON) {
		if (charInfo.map == returnMap) {
			if (quantitysum >= 20) {
				insq100904serroe(quantity1, quantitysum, returnMap);	//(數量,突然獲得數量,0)
			}
		}
	}
	// 無論如何 刷新SQL
	delq100904s();						//刪除該角色紀錄
	insq100904s(quantity1, returnMap);			//新增 (當前數量,map) map未定義
}

// SQL表一
function delq100904s() {
	var sql = "delete from zz_q100904s_log where accounts_id=" + player.getAccountId() + " ";
	player.customSqlUpdate(sql);
}

function insq100904s(quantity, map) {
	var sql = "insert INTO zz_q100904s_log(accounts_id,character_id,quantity,map,channel,time)VALUE(" + player.getAccountId() + "," + player.getId() + "," + quantity + "," + map + "," + player.getChannel() + ",now())";
	player.customSqlInsert(sql);
}

function getq100904s() {//獲取資料表 至 JS讀取用
	var sql = "SELECT quantity,map,channel FROM zz_q100904s_log WHERE character_id = " + player.getId() + "";
	var resultList = player.customSqlResult(sql);
	var charInfo = {};
	for (var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if (result == null) {
			break;
		}
		charInfo.quantity = result.get("quantity");
		charInfo.map = result.get("map");
		charInfo.channel = result.get("channel");
	}
	return charInfo;
}



// SQL表二

function insq100904serroe(quantity, error, map) {
	var sql = "insert INTO zz_q100904s_log_error(character_id,quantity,quantityerror,map,channel,time)VALUE(" + player.getId() + "," + quantity + "," + error + "," + map + "," + player.getChannel() + ",now())";
	player.customSqlInsert(sql);
}
