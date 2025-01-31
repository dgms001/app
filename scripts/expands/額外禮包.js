var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var currentItemQuantity = getEyPay()
txt = "Welcome to the special trip              " + a38 + "\r\n";

txt += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n";

txt += "\r\n\t\t\t\t  #fs16##r#e贊助活動禮包\r\n";
txt += "#fs12#";
txt += "#b#n贊助活動點數 [#r1000#b]點 購買 #v2438675:##r#z2438675#*1箱\r\n\r\n";
txt += "#b當前贊助活動點數:#r" + currentItemQuantity + "\r\n";
txt += "#b請輸入兌換的箱數:";
txt += "";
var number = npc.askNumber(txt, 1, 1, getEyPay() / 1000);
if (getEyPay() >= 1000 * number) {
	addEyPay(-1000 * number);
	player.gainItem(2438675, 1 * number);
	npc.broadcastPlayerNotice(37, "金主 " + player.getName() + " 兌換了[" + number + "]個贊助禮包,感謝...此處省略十億字!");
	npc.say("兌換成功");
} else {
	npc.say("你擱這裡玩呢???");
}

function getEyPay() {
	var sql = "select paihangbang from hypay where accountid = ? ";
	var result = player.customSqlResult(sql, player.getAccountId());
	if (result.size() > 0) {
		if (result.get(0) != null) {
			return result.get(0).get("paihangbang");
		}
	} else {
		return 0;
	}

}
function addEyPay(price) {
	if (price < 0) {
		price = price * +1;
	}
	var sql = "update hypay set paihangbang=paihangbang+? where accountId=?";
	var result = player.customSqlUpdate(sql, price, player.getAccountId());

}

