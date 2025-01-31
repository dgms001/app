
var status = -1
var txt;
/*------------------------- 表情符號 -------------------------*/
var SR1 = "#fUI/SoulUI.img/DungeonEffect/2350012/2#"; //最上面的
var SR2 = "#fUI/SoulUI.img/DungeonEffect/2350012/4#"; //最上面的
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的
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
var XD0 = "#fEffect/CharacterEff/1051366/0/0#";
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";

var itemlist = new Array(//卷軸
	Array(2048812, 1),//寵物裝備物攻
	Array(2048813, 1),//魔攻
	Array(2612019, 1),//雙手武器物攻
	Array(2612020, 1),//魔攻
	Array(2613012, 1),//單手武器物攻
	Array(2613013, 1),//魔攻
	Array(2615005, 1),//飾品物攻
	Array(2615006, 1),//魔攻
	Array(2616000, 1),//防具物攻
	Array(2616001, 1),//魔攻
	//V  2630648,1),自選
	Array(2048819, 1),//寵物裝備物攻
	Array(2048820, 1),//魔攻
	Array(2612074, 1),//雙手武器物攻
	Array(2612075, 1),//魔攻
	Array(2613062, 1),//單手武器物攻
	Array(2613063, 1),//魔攻
	Array(2615041, 1),//飾品物攻
	Array(2615042, 1),//魔攻
	Array(2616072, 1),//防具物攻
	Array(2616072, 1),//魔攻
	//X
	Array(2048815, 1),//寵物裝備物攻
	Array(2048816, 1),//魔攻
	Array(2612055, 1),//雙手武器物攻
	Array(2612056, 1),//魔攻
	Array(2613048, 1),//單手武器物攻
	Array(2613049, 1),//魔攻
	Array(2615029, 1),//飾品物攻
	Array(2615030, 1),//魔攻
	Array(2616059, 1),//防具物攻
	Array(2616060, 1),//魔攻
	//B黑捲
	Array(2048825, 1),
	Array(2048826, 1),
	Array(2612080, 1),
	Array(2612081, 1),
	Array(2613068, 1),
	Array(2613069, 1),
	Array(2615051, 1),
	Array(2615052, 1),
	Array(2616216, 1),
	Array(2616217, 1)
);
let mapA = map.getId();
if (mapA == 993001100) { //限制開啟地圖
	//player.showSystemMessage("在卡BUG頭蓋骨給你打出來 操!!");
} else {
	txt = "請選擇要替換新卷軸的道具\r\n";
	txt += "#b";
	for (var i = 1; i < 129; i++) {
		var item = player.getInventorySlot(2, i);
		if (item == null) {
			continue;
		} else /*if(isCashItem(item.getDataId())){
		continue;
	}else*/ {
			var flag = false;
			for (var j = 0; j < itemlist.length; j++) {
				if (itemlist[j][0] == item.getDataId()) {//符合條件則開啟
					if (player.getAmountOfItem(item.getDataId()) >= 5) {//數量大於5才顯示
						flag = true;
						break;
					}
				}
			}
			if (!flag) {
				continue;
			} else {
				txt += "#L" + i + "# #v" + item.getDataId() + "##t" + item.getDataId() + "##l\r\n";
			}
		}
	}

	var pos = npc.askMenu(txt);
}
var item = player.getInventorySlot(2, pos);
//player.dropAlertNotice(""+pos+""+item.getDataId()+"");
var item00 = Array(2048812, 2048813, 2612019, 2612020, 2613012, 2613013, 2615005, 2615006, 2616000, 2616001);//R捲
var itemaa = Array(2613048, 2613049, 2612055, 2612056, 2616059, 2616060, 2615029, 2615030, 2048815, 2048816);//x捲
var itembb = Array(2612074, 2612075, 2613062, 2613063, 2615041, 2615042, 2616072, 2616073, 2048819, 2048820);//v捲
var itemcc = Array(2048825, 2048826, 2612080, 2612081, 2613068, 2613069, 2616216, 2616217, 2615051, 2615052);//b捲
var itemdd = Array(2048830, 2048831, 2612082, 2612083, 2613070, 2613071, 2615054, 2615055, 2616218, 2616219);//榮耀捲**
sengAA = 1;//不變機率
sengBB = 1;//上升機率
sengCC = 1;//下降機率
var LOSE = 2631487;//消耗

switch (item.getDataId()) {
	case 2048812://r
	case 2048813:
	case 2612019:
	case 2612020:
	case 2613012:
	case 2613013:
	case 2615005:
	case 2615006:
	case 2616000:
	case 2616001:
		seng = 5 * sengAA;//不變機率
		seng1 = 40 * sengBB;//上升機率
		seng2 = 0 * sengCC;//下降機率
		seng3 = 100;//消失
		itemA = item.getDataId();//選項道具
		itemB = Array(2613048, 2613049, 2612055, 2612056, 2616059, 2616060, 2615029, 2615030, 2048815, 2048816);//獲得 x捲
		itemC = Array(2048812, 2048813, 2612019, 2612020, 2613012, 2613013, 2615005, 2615006, 2616000, 2616001);//下降 R捲
		up();
		break;
	case 2613048://x
	case 2613049:
	case 2612055:
	case 2612056:
	case 2616059:
	case 2616060:
	case 2615029:
	case 2615030:
	case 2048815:
	case 2048816:
		seng = 5 * sengAA;//不變機率
		seng1 = 30 * sengBB;//上升機率
		seng2 = 20 * sengCC;//下降機率
		seng3 = 100;//消失 100%結尾
		itemA = item.getDataId();//選項道具
		itemB = Array(2612074, 2612075, 2613062, 2613063, 2615041, 2615042, 2616072, 2616073, 2048819, 2048820);//上升 v捲
		itemC = Array(2048812, 2048813, 2612019, 2612020, 2613012, 2613013, 2615005, 2615006, 2616000, 2616001);//下降 R捲
		up();
		break;
	case 2612074://v
	case 2612075:
	case 2613062:
	case 2613063:
	case 2615041:
	case 2615042:
	case 2616072:
	case 2616073:
	case 2048819:
	case 2048820:
		seng = 5 * sengAA;//不變機率
		seng1 = 20 * sengBB;//上升機率
		seng2 = 10 * sengCC;//下降機率
		seng3 = 100;//消失 100%結尾
		itemA = item.getDataId();//選項道具
		itemB = Array(2048825, 2048826, 2612080, 2612081, 2613068, 2613069, 2615051, 2615052, 2616216, 2616217);//上升 b捲
		itemC = Array(2613048, 2613049, 2612055, 2612056, 2616059, 2616060, 2615029, 2615030, 2048815, 2048816);//下降 x捲
		up();
		break;
	case 2048825://b
	case 2048826:
	case 2612080:
	case 2612081:
	case 2613068:
	case 2613069:
	case 2615051:
	case 2615052:
	case 2616216:
	case 2616217:
		seng = 10 * sengAA;//不變機率
		seng1 = 15 * sengBB;//上升機率
		seng2 = 10 * sengCC;//下降機率
		seng3 = 100;//消失 100%結尾
		itemA = item.getDataId();//選項道具
		itemB = Array(2048830, 2048831, 2612082, 2612083, 2613070, 2613071, 2615054, 2615055, 2616218, 2616219);//上升 榮耀捲**
		itemC = Array(2612074, 2612075, 2613062, 2613063, 2615041, 2615042, 2616072, 2616073, 2048819, 2048820);//下降 v捲
		up();
		break;
}

function up() {
	txt = "#b";
	txt += "#v" + itemA + "##z" + itemA + "#\r\n";
	txt += "#k每移除該卷軸#r5#k個並獲得新的卷軸，確定要繼續進行嗎？\r\n";
	txt += "#k您有#r" + player.getAmountOfItem(itemA) + "#k個，可輸入數量#r" + Math.floor(player.getAmountOfItem(itemA) / 5) + "#k\r\n";
	//if (player.isGm()) {
	//txt += "#k不變:#r"+ seng +"%#k|升級:#r"+ seng1 +"%#k|下降:#r"+ seng2 +"%#k|";
	//txt += "消失:#r"+ (seng3-seng2-seng1-seng) +"%\r\n";
	//}
	var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(itemA) / 5);
	count = number - player.getAmountOfItem(LOSE);

	if (number > player.getAmountOfItem(LOSE)) {
		npc.say("#v" + LOSE + "##z" + LOSE + "# 數量不足 " + count + " 個");
	} else {
		for (var i = 1; i < number + 1; i++) {
			player.loseItem(LOSE, 1);
			var chance = Math.floor(Math.random() * 99) + 1;
			var chance1 = Math.floor(Math.random() * 10);
			if (chance <= seng) {

				player.dropMessage(7, "第" + i + "次什麼事情都沒有發生");
				player.scriptProgressMessage("什麼事情都沒有發生");
			} else if (chance <= seng + seng1) {
				player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
				player.scriptProgressMessage("升級成功!!");
				player.loseItem(itemA, 5);
				player.gainItem(itemB[chance1], 1);
			} else if (chance <= seng + seng1 + seng2) {
				player.dropMessage(7, "第" + i + "次嘗試升級,更差的捲軸");
				player.scriptProgressMessage("太可惜了拿到更差的捲軸!!");
				player.loseItem(itemA, 5);
				player.gainItem(itemC[chance1], 1);
			} else if (chance <= seng + seng1 + seng2 + seng3) {
				player.dropMessage(7, "第" + i + "次噴掉");
				player.scriptProgressMessage("噴掉了,笑你!!");
				player.loseItem(itemA, 5);
			}
			//player.modifyCashShopCurrency(2, -cash1);


		}
	}

}