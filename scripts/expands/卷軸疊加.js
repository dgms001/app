let item;
let itemList = Array();
let flag;
let cumulation = "#fs17##e#b是否一鍵進行以下道具疊加\r\n";
for (let i = 1; i < 129; i++) {
	flag = false;
	item = player.getInventorySlot(2, i);
	if (item != null) {
		if (item.getExpiration() > 0) {
			continue;
		}
		if (Math.floor(item.getDataId() / 1000000) > 2 ) {
			continue;//過濾寵物
		}
		if (itemList != null) {
			for (let y = 0; y < itemList.length; y++) {
				if (itemList[y][0] == item.getDataId()) {
					flag = true;
				}
			}
		}

		if (!flag) {
			itemList.push(Array(item.getDataId(), player.getAmountOfItem(item.getDataId())));
		}
	}

}


var timeStamp = java.lang.System.currentTimeMillis();
var time = parseInt(5 - (((timeStamp - parseInt(player.getQuestRecordEx(100000001))) / 1000)));
if (time >= 0) {
	npc.say("疊加背包頻率請不要超過5秒/次," + time + "秒後可進行下次疊加。");
} else {
	for (let x = 0; x < itemList.length; x++) {
		player.loseItem(itemList[x][0], itemList[x][1]);
		player.gainItem(itemList[x][0], itemList[x][1]);
	}
	player.updateQuestRecordEx(100000001, timeStamp);
	npc.askMenuA("\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t#fs21##e#r已疊加完成！");
}