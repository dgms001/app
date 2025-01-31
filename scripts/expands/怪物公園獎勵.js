/* 隨機獎勵  */
var status = -1
var txt;
/*------------------------- 表情符號 -------------------------*/
var SR1 = "#fUI/SoulUI.img/DungeonEffect/2350012/2#"; //最上面的
var SR2 = "#fUI/SoulUI.img/DungeonEffect/2350012/4#"; //最上面的
var SR3 = "#i3010531#"; //最上面的
var SR31 = "#v3010584#"; //最上面的
var SR4 = "#fUI/SoulUI.img/DungeonEffect/2350012/3#"; //最上面的
var SR5 = "#fEffect/EffectPL.img/Beautyroid/connect_end/0"; //區隔條
var SR6 = "#fEffect/EventEffect.img/typingDefense/balloonIcon/blind/0#"; //最上面的星星-6
var SR7 = "#fEffect/CharacterEff/1050334/1/2#"; //最上面的星星-7
var SR8 = "#fEffect/CharacterEff/1050334/1/3#"; //最上面的星星-8
var SR9 = "#fEffect/CharacterEff/1050334/2/0#"; //最上面的星星-9
var SR10 = "#fEffect/CharacterEff/1050334/2/1#"; //最上面的星星-10
var SR11 = "#fEffect/CharacterEff/1050334/2/2#"; //最上面的星星-11
var SR12 = "#fEffect/CharacterEff/1050334/2/3#"; //最上面的星星-12
var GC2 = "#fEffect/CharacterEff/1005267/4/0#"; //"+z+"//小選項用
var XD0 = "#fEffect/CharacterEff/1051366/0/0#"
//var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var GC1 = "";

//var STAR1 = "#fEffect/CharacterEff/forceAtom/29/atom/3/endEff/0#"; //大星星-1
//var STAR2 = "#fEffect/CharacterEff/forceAtom/29/atom/2/endEff/1#"; //大星星-2
//var STAR3 = "#fEffect/CharacterEff/forceAtom/29/atom/3/endEff/2#"; //大星星-3
//var STAR4 = "#fEffect/CharacterEff/forceAtom/29/atom/2/endEff/3#"; //大星星-4
//var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
//var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //紅心桃心
//var Rainbow = "#fEffect/ItemEff/1070069/effect/walk1/2#" //彩虹

/*------------------------------------------------------------*/

let itemIdss = Array(//勳章
	Array(4310020, 10),//0 日
	Array(4310020, 10),//1 禮拜一
	Array(4310020, 10),
	Array(4310020, 10),
	Array(4310020, 10),
	Array(4310020, 10),
	Array(4310020, 10),
);
let itemId0 = Array(		//全獎勵
	Array(4001714, 5),//定居金百萬
	Array(4032053, 50),//楓葉50 =5W楓點
	Array(4032216, 100),//咒文

);

date = new Date();
let week = date.getDay();//星期
let day = date.getDate();//日期
let hour = date.getHours();//小時
let min = date.getMinutes();
let sec = date.getSeconds();//

txt = "";
if (player.isGm()) {
	txt += "";
}

//let selection = npc.askMenuA(txt, true);

txxt = "";
// if (player.getEventValue("怪物公園獎勵禮拜"+date.getDay()+"") >= 500){
// npc.sayS("今日領獎次數, 已達成5次 .");
// } else {
onoff = player.getEventValue("怪物公園勳章onoff");
if (onoff != 1) {		//拿勳章 	
	player.gainItem(itemIdss[date.getDay()][0], itemIdss[date.getDay()][1]);
	txxt += "#fs18##b#e獲得#v" + itemIdss[date.getDay()][0] + "#" + itemIdss[date.getDay()][1] + "個";
}

//獎勵
for (i = 0; i < itemId0.length; i++) {
	player.gainItem(itemId0[i][0], itemId0[i][1]);
	txxt += "\r\n#fs18##b#e獲得#v" + itemId0[i][0] + "#" + itemId0[i][1] + "個";
}
player.modifyHonor(5000);//名聲五千

//禮拜個別紀錄0 1 2 3 4 5 6
player.addEventValue("怪物公園獎勵禮拜" + date.getDay() + "", 1, 1000);//禮拜?紀錄帳號log 紀錄總場次
player.addPQLog("怪物公園獎勵禮拜" + date.getDay() + "", 1, 1000);//角色完成次數log 技能判斷
let alllog = player.getEventValue("怪物公園獎勵禮拜1") + player.getEventValue("怪物公園獎勵禮拜2") + player.getEventValue("怪物公園獎勵禮拜3") + player.getEventValue("怪物公園獎勵禮拜4") + player.getEventValue("怪物公園獎勵禮拜5") + player.getEventValue("怪物公園獎勵禮拜6") + player.getEventValue("怪物公園獎勵禮拜0")
if (alllog > 100) {
	player.gainItem(2023126, 5);
}
player.changeMap(951000000, 1);
//addvalue(10);
//let sel = npc.sayS(txxt, true);
// }


function addvalue(level) { //給予經驗值
	var sql = "update dgms_zhanling set value=value+? where name=?";
	player.customSqlUpdate(sql, level, "" + getAccountName() + "");

}

function getAccountName() {
	var sql = "select name from characters where id=  " + player.getId() + " ";
	var resultList = player.customSqlResult(sql);
	var accountName = 0;
	for (var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if (result == null) {
			break;
		}
		accountName = result.get("name");
	}
	return accountName;
}

