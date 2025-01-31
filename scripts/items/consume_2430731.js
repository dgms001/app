var txt;
var qq1 = "#fUI/EventShop/adventureShop/GradeBuyer/0#"
var qq2 = "#fUI/EventShop/adventureShop/GradeBuyer/1#"
var qq3 = "#fUI/EventShop/adventureShop/GradeBuyer/2#"
var qq4 = "#fUI/EventShop/adventureShop/GradeBuyer/3#"
var qq5 = "#fUI/EventShop/adventureShop/GradeBuyer/4#"
var qq6 = "#fUI/EventShop/adventureShop/GradeBuyer/5#"
var py = getmaxhpInfo();
var nowhp = player.getPQLog("紀錄增加血量");
var hpup = 3000;//上限
let hp = 50000;

let item = 2430731;
text = "\r\n";
text += "#e#fs20##r       #v" + item + "##z" + item + "#\r\n#n";
text += "#fs14##b";
text += "服用條件:[血量#r" + hp + "#b以下]  當前血量:[#r" + player.getPQLog("紀錄增加血量") + "#b]\r\n";
text += "服用後,增加#r1-50#b的血量,無副作用\r\n";
text += "惡魔復仇者職業無法使用!\r\n";

text += "";
text += "#L0#點我服用#l";

let selected = npc.askMenuS(text, true);

QSS = player.getAmountOfItem("" + item + "");
text = "#fs14##b服用道具為:#r#v" + item + "##z" + item + "#\r\n#b";
text += "當前持有數量:[#r" + QSS + "#b]\r\n";

let YN = npc.askNumber("" + text + "\r\n#b請輸入兌換數量：", 1, 1, QSS);
i = selected;
hpupdate = 0;//首次定義加血量 0
loseconut = 0;//消耗數量  0

if (player.getJob() == 3100 || player.getJob() == 3110 || player.getJob() == 3111 || player.getJob() == 3112) {
	npc.say("#fs14##b惡魔復仇者不能服用!!");
} else if (player.getPQLog("紀錄增加血量") >= hp) {
	npc.say("#fs14##b血量增加量已達" + hp + ",無法服用");
} else {

	while (i < YN) {
		QSS = player.getAmountOfItem("" + item + "");//重新定義數量
		if (QSS >= YN) {
			if (parseInt(player.getPQLog("紀錄增加血量")) + hpupdate <= hp) {//成功時
				hpupdate += (Math.floor(Math.random() * 49) + 1);		//加血1次
				loseconut += 1;										//消耗道具+1
			}
		}
		i++;
	}

	if (hpupdate != 0) {
		player.loseItem(npc.getItemId(), loseconut);
		player.addPQLog("紀錄增加血量", hpupdate, 1000);
		player.increaseMaxHp(hpupdate);
		player.showSystemMessage("血量增加 " + hpupdate + " 了");
		npc.say("#fs14##b服用成功,血量增加#r" + hpupdate + "");
	}

}



function getmaxhpInfo() {
	var sql = "SELECT maxhp FROM characters WHERE id = '" + player.getId() + "' ;";
	var resultList = player.customSqlResult(sql);
	var charInfo = {};
	for (var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if (result == null) {
			break;
		}
		charInfo.maxhp = result.get("maxhp");
	}
	return charInfo;
}