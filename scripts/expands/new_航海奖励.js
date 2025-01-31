
var 獎品 = [
    [4001715, 1],//2E
	[4310233, 10],//萬花幣
	[4001839, 500],//星星
	[4310014, 80],//雪花
	[4310100, 10],//凱梅爾茲
    [2435467, 1] //火花
]

	var txt = "恭喜你通過了航海旅途 這是你的獎品\r\n";
	var rand = Math.floor(Math.random() * (獎品.length+2));
		
	if(rand>獎品.length){
		if (map.getId() != 865010004) {
			player.changeMap(104000000)
			player.dropAlertNotice( "我不知道你是怎麼過來的\r\n\r\n但是下不為例")
		}else{
			var 破攻值 = randomFrom(50000, 100000)
			txt += "獲得的破攻值 : " + 破攻值 + "\r\n"
			var Equip = player.getInventorySlot(-1, -11);
			Equip.setLimitBreak(Equip.getLimitBreak() + 破攻值)
			player.updateItem(-11,Equip);
		
			player.gainItem(獎品[rand][0], 獎品[rand][1]);
			txt += "#i" + 獎品[rand][0] + "# 數量 " + 獎品[rand][1] + "\r\n"
		}
		player.dropMessage(1,txt);
		player.changeMap(104000000, 0);
	}
   


function randomFrom(lowerValue, upperValue) {
    return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
}