var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var z5 = "#fEffect/CharacterEff/1112904/2/1#"; //五角花
var tz = "#fEffect/CharacterEff/1082565/2/0#"; //兔子藍
var eff1 = "#fEffect/CharacterEff/1112905/0/1#"; //小紅心
var tz12 = "#fEffect/CharacterEff/1112924/0/0#"; //黃星
var tz13 = "#fEffect/CharacterEff/1112925/0/0#"; //藍星
var tz14 = "#fEffect/CharacterEff/1112926/0/0#"; //紅星
var c12 = "#fEffect/ItemEff.img/1005799/effect/backDefault/0#" //小图标
var rmb = 0;
rmb = getHyPay();

var selStr = "  \t\t\t\t#fs21##e#b您當前的餘額為：#r" + getHyPay() + " #d #k\r\n";
selStr += "" + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + "\r\n";

selStr += "#L2##fs16##e#b" + c12 + " 超級實惠理財服務#r500#b餘額/周[#b點擊查看]#l#k\r\n\r\n";
selStr += "#L3##fs16##e#b" + c12 + " 超級實惠理財服務#r1500#b餘額/月[#b點擊查看]#l#k\r\n\r\n";
selStr += "#L4##fs16##e#b" + c12 + " 超級實惠理財服務#r10000#b餘額/永久[#b點擊查看]#l#k\r\n\r\n";
selStr += "" + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + "";
let selection = npc.askMenuA(selStr);

if (player.hasItem(2430865, 1)) {
	npc.say("你的會員還沒到期~請到期之後再購買哦~");
} else {
	if (selection == 2) {
		//周會員
		var txt = "- #e#b超級實惠理財服務：#n#k\r\n\r\n";
		txt += "- #e#r提示:#k#n  #r理財神秘盒子 500餘額#k\r\n\r\n";
		txt += "- #e#r辦理等級：#b一周權 \r\n\r\n";
		txt += "- #e#r詳細說明：#b\r\n辦理後會扣掉您500餘額,\r\n#b並每天享有：【#v4009411#*20】【#v2633609#*1】【#v5060048#*10】【#v2022709#*2】\r\n";
		txt += "一個全屬性150，限時7天會員名片#v1115384#\r\n\r\n";
		txt += "- #e#rGM提示：#n#b點是進行購買。點否返回上一頁.#k";
		let sel = npc.askYesNo(txt);
		if (sel == 1) {
			if (getHyPay() < 500) {
				npc.say("餘額額不夠 ");
			} else if (player.getFreeSlots(2) < 1) {
				npc.say("#fs14##b消耗欄背包至少空出一格");
			} else {
				var toDrop = player.makeItemWithId(1115384);
				toDrop.setExpiration(new Date().getTime() + 1000 * 60 * 60 * 24 * 7);
				toDrop.setStr(150); //裝備力量
				toDrop.setDex(150); //裝備敏捷
				toDrop.setInt(150); //裝備智力
				toDrop.setLuk(150); //裝備運氣
				toDrop.setPad(150); //物理攻擊
				toDrop.setMad(150); //魔法攻擊
				toDrop.setMaxHp(500); //血量 
				toDrop.setMaxMp(500); //魔法		
				toDrop.setBossDamageR(10);

				player.gainItem(toDrop)
				player.addEventValue("初級會員開通", 7, 1000);
				addHyPay(-500);



				npc.broadcastPlayerNotice(7, "【理財周權】玩家" + player.getName() + " 購買了一周理財特權，獲得一系列道具");
				npc.say("恭喜您成功購買一周理財服務.");


			}
		}

	}
	else if (selection == 3) {
		//永久會員
		var txt = "- #e#b超級實惠理財服務：#n#k\r\n\r\n";
		txt += "- #e#r提示:#k#n  #r理財神秘盒子 1500餘額#k\r\n\r\n";
		txt += "- #e#r辦理等級：#b30天權 \r\n\r\n";
		txt += "- #e#r詳細說明：#b\r\n辦理後會扣掉您1500餘額,\r\n#b並每天享有：【#v4009411#65】【#v2633609#*2】【#v5060048#*20】【#v2022709#*2】\r\n";
		txt += "一個全屬性200，限時30天會員名片#v1115384#\r\n\r\n";
		txt += "- #e#rGM提示：#n#b點是進行購買。點否返回上一頁.#k";
		let sel = npc.askYesNo(txt);
		if (sel == 1) {
			if (getHyPay() < 1500) {
				npc.say("餘額額不夠 ");
			} else if (player.getFreeSlots(2) < 1) {
				npc.say("#fs14##b消耗欄背包至少空出一格");
			} else {
				var toDrop = player.makeItemWithId(1115384);
				toDrop.setExpiration(new Date().getTime() + 1000 * 60 * 60 * 24 * 30);
				toDrop.setStr(200); //裝備力量
				toDrop.setDex(200); //裝備敏捷
				toDrop.setInt(200); //裝備智力
				toDrop.setLuk(200); //裝備運氣
				toDrop.setPad(200); //物理攻擊
				toDrop.setMad(200); //魔法攻擊
				toDrop.setMaxHp(3000); //血量 
				toDrop.setMaxMp(3000); //魔法		

				player.gainItem(toDrop)
				player.addEventValue("高级會員開通", 30, 1000);


				addHyPay(-1500);

				npc.broadcastPlayerNotice(7, "【理財月權】玩家" + player.getName() + " 購買了一月理財特權，獲得一系列道具");
				npc.say("恭喜您成功購買一月理財服務.");
			}
		}
	}
	else if (selection == 4) {
		//永久會員
		var txt = "- #e#b超級實惠理財服務：#n#k\r\n\r\n";
		txt += "- #e#r提示:#k#n  #r理財神秘盒子 10000餘額#k\r\n\r\n";
		txt += "- #e#r辦理等級：#b永久權 \r\n\r\n";
		txt += "- #e#r詳細說明：#b\r\n辦理後會扣掉您10000餘額,\r\n#b並每天享有：【#v4009411#*100】【#v2633609#*5】【#v5060048#*50】【#v2022709#*4】\r\n";
		txt += "一個全屬性300，永久會員名片#v1115384#\r\n\r\n";
		txt += "- #e#rGM提示：#n#b點是進行購買。點否返回上一頁.#k";
		let sel = npc.askYesNo(txt);
		if (sel == 1) {
			if (getHyPay() < 10000) {
				npc.say("餘額額不夠 ");
			} else if (player.getFreeSlots(2) < 1) {
				npc.say("#fs14##b消耗欄背包至少空出一格");
			} else {
				var toDrop = player.makeItemWithId(1115384);
				toDrop.setExpiration(new Date().getTime() + 1000 * 60 * 60 * 24 * 9999);
				toDrop.setStr(300); //裝備力量
				toDrop.setDex(300); //裝備敏捷
				toDrop.setInt(300); //裝備智力
				toDrop.setLuk(300); //裝備運氣
				toDrop.setPad(300); //物理攻擊
				toDrop.setMad(300); //魔法攻擊
				toDrop.setMaxHp(5000); //血量 
				toDrop.setMaxMp(5000); //魔法		

				player.gainItem(toDrop)
				player.addEventValue("永久會員開通", 9999, 1000);


				addHyPay(-10000);

				npc.broadcastPlayerNotice(7, "【理財月權】玩家" + player.getName() + " 購買了永久理財特權，獲得一系列道具");
				npc.say("恭喜您成功購買一月理財服務.");
			}
		}
	}
	else if (selection == 999) {
		player.runScript("充值鏈接");
	}

}
function getHyPay() {
	var sql = "select pay from hypay where accountid = ? ";
	var result = player.customSqlResult(sql, player.getAccountId());
	if (result.size() > 0) {
		if (result.get(0) != null) {
			return result.get(0).get("pay");
		}
	} else {
		return 0;
	}

}

function addHyPay(price) {
	if (price < 0) {
		price = price * +1;
	}
	var sql = "update hypay set pay=pay+?,payused=payused+" + price + " where accountId=?";
	var result = player.customSqlUpdate(sql, price, player.getAccountId());

}

function addHyPayleji(price) {
	if (price < 0) {
		price = price * -1;
	}
	var sql = "update hypay set leiji=leiji+?,payused=payused+" + price + " where accountId=?";
	var result = player.customSqlUpdate(sql, price, player.getAccountId());

}
