let item;
let flag;
let npcwho = 9000226;
let itemList = Array(
5002127,
5002128,
5002129,
5000870,
5000871,
5000872,
5000884,
5000885,
5000886,
5002400,
5002401,
5002402,
5002239
);

//txt=  "你想將#r月光P寵#k復原成#b#i2434162##z2434162##k？\r\n";
txt=  "看膩了寵物外觀? 這裡可以幫你更變寵物外觀\r\n";
txt+=  "獲得#v2434162##z2434162#自選箱\r\n";
txt+= "請將你要復原的寵物放置#r特殊欄第一格#k\r\n";




var ys =npc.askYesNo(txt,npcwho);
	if(ys == 1){
		npc.say("確認之後，\r\n將#r特殊欄第一格#k的月光P寵復原\r\n將獲得#b#i2434162##z2434162#",npcwho);
		flag = false;
		item = player.getInventorySlot(5,1);
		if(item == null){
			npc.say("請將你要復原的寵物放置#r特殊欄第一格#k\r\n",npcwho);
		}else{
			
			if(itemList != null){
				for(let y = 0;y<itemList.length;y++){
					if(item.getDataId() == itemList[y]){
							flag = true;
					}
				}
			}
			if(flag){
				player.loseInvSlot(5,1);
				player.gainItem(2434162, 1);
			}else{
				npc.say("道具不正確，如有疑問請聯繫GM\r\n",npcwho);
			}
		}
	}else{
		npc.say("哦你並不想復原，有需要的話可以再過來。",npcwho);
	}