//4是其他欄 3是裝飾欄
var nowca = java.util.Calendar.getInstance();//取時間
var nowday = nowca.get(java.util.Calendar.DATE);//獲取日
var NowFormat = parseInt(endmonthDate());//獲取該月日(字符)轉換成(數值int)

var needitem = 2434228;
var item = Array(
	Array(1703215,1),
	Array(1703215,1),
	Array(1062293,1),
	Array(1102902,1),
	Array(1102902,1),
	Array(1012639,1),
	Array(1004193,1),
	Array(1202193, 1),
	Array(1042204, 1),
	Array(1122334, 1)//樂豆


);


var text = "";
//text += "#e#fs18#封測禮包:\r\n#n";
text += "#fs16##e#b";
text += "\t\t\t\t #L1#領取禮物#l\r\n\r\n";
text += "#v1142242##z1142242#\r\n#b";
text += "#v1002971##z1002971#\r\n#b";
text += "#v1052548##z1052548#\r\n#b";
text += "#v1072360##z1072360#\r\n#b";
text += "#v1082002##z1082002#\r\n#b";
text += "#v1112405##z1112405#\r\n#b";
text += "#v1102198##z1102198#\r\n#b";
text += "#v1012254##z1012254#\r\n#b";
text += "#v1115271##z1115271#\r\n#b";
text += "#v1115373##z1115373#\r\n#b";

for (let i = 1; i < item.length; i++) {
	text += "#v" + item[i][0] + "##z" + item[i][0] + "#*" + item[i][1] + "\r\n";
}
text += "#fs14##r";

text += "\r\n";



let sel = npc.askMenuA("" + text, true);

if (sel == 1) {
	if (player.getFreeSlots(1) < 1 || player.getFreeSlots(4) < 1 || player.getFreeSlots(5) < 2) {
		npc.say("#fs14##b請先確保欄位都空2格以上!");
	} else if (player.getEventValue("改屬新手") == 1) {
		player.loseItem(needitem);
		npc.say("#fs14##b今天已經領取過了哦 你在幹嘛呢!");
	} else {
		for (let i = 1; i < item.length; i++) {
			player.gainItem(item[i][0], item[i][1]);
		}
		var toDrop = player.makeItemWithId(1142242);
		toDrop.setExpiration(new Date().getTime() + 1000 * 60 * 60 * 24 * 30);
		toDrop.setStr(10); //裝備力量
		toDrop.setDex(10); //裝備敏捷
		toDrop.setInt(10); //裝備智力
		toDrop.setLuk(10); //裝備運氣
		toDrop.setPad(10); //物理攻擊
		toDrop.setMad(10); //魔法攻擊
		toDrop.setMaxHp(1000); //血量 
		toDrop.setMaxMp(1000); //魔法		
		toDrop.setBossDamageR(10);
		toDrop.setIgnorePDR(10);
		toDrop.setDamR(10);
		toDrop.setCHUC(5);
		player.gainItem(toDrop)
				var toDrop = player.makeItemWithId(1002971);
		toDrop.setExpiration(new Date().getTime() + 1000 * 60 * 60 * 24 * 30);
		toDrop.setStr(100); //裝備力量
		toDrop.setDex(100); //裝備敏捷
		toDrop.setInt(100); //裝備智力
		toDrop.setLuk(100); //裝備運氣
		toDrop.setPad(100); //物理攻擊
		toDrop.setMad(100); //魔法攻擊
		toDrop.setMaxHp(1000); //血量 
		toDrop.setMaxMp(1000); //魔法		
		toDrop.setBossDamageR(10);
		toDrop.setIgnorePDR(10);
		toDrop.setDamR(10);
		toDrop.setCHUC(5);
		player.gainItem(toDrop)
		var toDrop = player.makeItemWithId(1052548);
		toDrop.setExpiration(new Date().getTime() + 1000 * 60 * 60 * 24 * 30);
		toDrop.setStr(100); //裝備力量
		toDrop.setDex(100); //裝備敏捷
		toDrop.setInt(100); //裝備智力
		toDrop.setLuk(100); //裝備運氣
		toDrop.setPad(100); //物理攻擊
		toDrop.setMad(100); //魔法攻擊
		toDrop.setMaxHp(1000); //血量 
		toDrop.setMaxMp(1000); //魔法		
		toDrop.setBossDamageR(10);
		toDrop.setIgnorePDR(10);
		toDrop.setDamR(10);
		toDrop.setCHUC(5);
		player.gainItem(toDrop)
		var toDrop = player.makeItemWithId(1072360);
		toDrop.setExpiration(new Date().getTime() + 1000 * 60 * 60 * 24 * 30);
		toDrop.setStr(100); //裝備力量
		toDrop.setDex(100); //裝備敏捷
		toDrop.setInt(100); //裝備智力
		toDrop.setLuk(100); //裝備運氣
		toDrop.setPad(100); //物理攻擊
		toDrop.setMad(100); //魔法攻擊
		toDrop.setMaxHp(1000); //血量 
		toDrop.setMaxMp(1000); //魔法		
		toDrop.setBossDamageR(10);
		toDrop.setIgnorePDR(10);
		toDrop.setDamR(10);
		toDrop.setCHUC(5);
		player.gainItem(toDrop)
		var toDrop = player.makeItemWithId(1082002);
		toDrop.setExpiration(new Date().getTime() + 1000 * 60 * 60 * 24 * 30);
		toDrop.setStr(100); //裝備力量
		toDrop.setDex(100); //裝備敏捷
		toDrop.setInt(100); //裝備智力
		toDrop.setLuk(100); //裝備運氣
		toDrop.setPad(100); //物理攻擊
		toDrop.setMad(100); //魔法攻擊
		toDrop.setMaxHp(1000); //血量 
		toDrop.setMaxMp(1000); //魔法		
		toDrop.setBossDamageR(10);
		toDrop.setIgnorePDR(10);
		toDrop.setDamR(10);
		toDrop.setCHUC(5);
		player.gainItem(toDrop)
		var toDrop = player.makeItemWithId(1112405);
		toDrop.setExpiration(new Date().getTime() + 1000 * 60 * 60 * 24 * 30);
		toDrop.setStr(100); //裝備力量
		toDrop.setDex(100); //裝備敏捷
		toDrop.setInt(100); //裝備智力
		toDrop.setLuk(100); //裝備運氣
		toDrop.setPad(100); //物理攻擊
		toDrop.setMad(100); //魔法攻擊
		toDrop.setMaxHp(1000); //血量 
		toDrop.setMaxMp(1000); //魔法		
		toDrop.setBossDamageR(10);
		toDrop.setIgnorePDR(10);
		toDrop.setDamR(10);
		toDrop.setCHUC(5);
		player.gainItem(toDrop)
		var toDrop = player.makeItemWithId(1102198);
		toDrop.setExpiration(new Date().getTime() + 1000 * 60 * 60 * 24 * 30);
		toDrop.setStr(100); //裝備力量
		toDrop.setDex(100); //裝備敏捷
		toDrop.setInt(100); //裝備智力
		toDrop.setLuk(100); //裝備運氣
		toDrop.setPad(100); //物理攻擊
		toDrop.setMad(100); //魔法攻擊
		toDrop.setMaxHp(1000); //血量 
		toDrop.setMaxMp(1000); //魔法		
		toDrop.setBossDamageR(10);
		toDrop.setIgnorePDR(10);
		toDrop.setDamR(10);
		toDrop.setCHUC(5);
		player.gainItem(toDrop)
				var toDrop = player.makeItemWithId(1012254);
		toDrop.setExpiration(new Date().getTime() + 1000 * 60 * 60 * 24 * 30);
		toDrop.setStr(100); //裝備力量
		toDrop.setDex(100); //裝備敏捷
		toDrop.setInt(100); //裝備智力
		toDrop.setLuk(100); //裝備運氣
		toDrop.setPad(100); //物理攻擊
		toDrop.setMad(100); //魔法攻擊
		toDrop.setMaxHp(1000); //血量 
		toDrop.setMaxMp(1000); //魔法		
		toDrop.setBossDamageR(10);
		toDrop.setIgnorePDR(10);
		toDrop.setDamR(10);
		toDrop.setCHUC(5);
		player.gainItem(toDrop)
				var toDrop = player.makeItemWithId(1115271);
		//toDrop.setExpiration(new Date().getTime() + 1000 * 60 * 60 * 24 * 30);
		toDrop.setStr(100); //裝備力量
		toDrop.setDex(100); //裝備敏捷
		toDrop.setInt(100); //裝備智力
		toDrop.setLuk(100); //裝備運氣
		toDrop.setPad(100); //物理攻擊
		toDrop.setMad(100); //魔法攻擊
		toDrop.setMaxHp(1000); //血量 
		toDrop.setMaxMp(1000); //魔法		
		toDrop.setBossDamageR(10);
		toDrop.setIgnorePDR(10);
		toDrop.setDamR(10);
		toDrop.setCHUC(5);
		player.gainItem(toDrop)
				var toDrop = player.makeItemWithId(1115373);
		//toDrop.setExpiration(new Date().getTime() + 1000 * 60 * 60 * 24 * 30);
		toDrop.setStr(100); //裝備力量
		toDrop.setDex(100); //裝備敏捷
		toDrop.setInt(100); //裝備智力
		toDrop.setLuk(100); //裝備運氣
		toDrop.setPad(100); //物理攻擊
		toDrop.setMad(100); //魔法攻擊
		toDrop.setMaxHp(1000); //血量 
		toDrop.setMaxMp(1000); //魔法		
		toDrop.setBossDamageR(10);
		toDrop.setIgnorePDR(10);
		toDrop.setDamR(10);
		toDrop.setCHUC(5);
		player.gainItem(toDrop)
		player.loseItem(needitem, 1);
		//npc.broadcastPlayerNotice(2, "「 玩家 」  " + player.getName() + "  領取了選美活動獎勵");
		player.addEventValue("改屬新手", 1, 3000);
		player.addEventValue("改屬新手", 1, 3000);
		npc.say("#fs14##b獲得好多東西~");
	}



}



function endmonthDate() {
	let date = new Date();
	let month = date.getMonth() + 1;
	let strDate = 30;
	if (month == 2) {
		strDate = "28";
	}
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
		strDate = "31";
	}
	let currentdate = strDate;
	return currentdate;
}







