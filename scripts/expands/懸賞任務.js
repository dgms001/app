/* This is a piece of code

 * author dgms

 * global player

 * Contact QQ 381991414 DC dgms#6650

 * function reward

 */
var Point = 10 //開啓點券
var weaponList = Array(

5062026,//結合
5062026,//結合
5060048,//黃金蘋果
2635037,//榮耀
5060046,//椅子
5060032//捲軸

		);
		
var Jackpot1 = [ 
Array(5062026, 10),
Array(5062026, 10),
Array(5060048, 10),
Array(2635037, 5),
Array(5060046, 2),
Array(5060032, 3)


];
//需要的材料
var needItemList = Array(
    Array(4032216, getMinAndMax(10,999)),
    Array(2430915, getMinAndMax(10,75)),
    Array(2431893, getMinAndMax(10,75)),
    Array(2431894, getMinAndMax(10,75))
	);
		
if (player.getEventValue("懸賞任務") > 100){
	npc.say("#fs14#今日懸賞次數已達10次!!");
} else if (player.getLevel() < 200) {
    npc.say("#fs14#玩家等級不足200等");
} else if (player.getCashShopCurrency(2) < Point) {
    npc.say("#fs14#楓葉點數不足 #r" + (Point/10) + "萬 #k , 無法開啟懸賞.");
} else if (getreward("character_id") != player.getId() || getreward("complete") == 1) {
    Accept();
	
} else {
	completed();
}
    
function completed() { //這裏是懸賞進行時的脚本
    var ltz46 = "#fUI/GuildMark/Mark/Plant/00003006/7#";  //
    var z = "#fUI/GuildMark/Mark/Plant/00003006/7#"; //"+z+"//美化

let str ="#fs20##fc0xFF00caf2##r#n";

str += "#fs11##b";
    //let str = "\t\t\t #fs18##r#e【椅子懸賞系統】\r\n#fs14##n#b";
    //str += "" + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z +"\r\n";
    if (getreward("data1") > 0) {
        str += "#v" + getreward("material1") + "# #fs16##e#b需求:#r " + getreward("data1") + "#b 個 擁有: #r" + player.getAmountOfItem(getreward("material1")) + "#b 個\r\n";
    }
    if (getreward("data2") > 0) {
        str += "#v" + getreward("material2") + "# 需求: #r" + getreward("data2") + "#b 個 擁有: #r" + player.getAmountOfItem(getreward("material2")) + "#b 個\r\n";
    }
    if (getreward("data3") > 0) {
        str += "#v" + getreward("material3") + "# 需求: #r" + getreward("data3") + "#b 個 擁有: #r" + player.getAmountOfItem(getreward("material3")) + "#b 個\r\n";
    }
    if (getreward("data4") > 0) {
        str += "#v" + getreward("material4") + "# 需求: #r" + getreward("data4") + "#b 個 擁有: #r" + player.getAmountOfItem(getreward("material4")) + "#b 個\r\n\r\n";
    }
    /*if (getreward("data5") > 0) {
        str += "#v" + getreward("material5") + "# / " + getreward("data5") + " 當前數量:" + player.getAmountOfItem(getreward("material5")) + "\r\n";
    }
    if (getreward("data6") > 0) {
        str += "#v" + getreward("material6") + "# / " + getreward("data6") + " 當前數量:" + player.getAmountOfItem(getreward("material6")) + "\r\n";
    }
    if (getreward("data7") > 0) {
        str += "#v" + getreward("material7") + "# / " + getreward("data7") + " 當前數量:" + player.getAmountOfItem(getreward("material7")) + "\r\n";
    }
    if (getreward("data8") > 0) {
        str += "#v" + getreward("material8") + "# / " + getreward("data8") + " 當前數量:" + player.getAmountOfItem(getreward("material8")) + "\r\n";
    }
    if (getreward("data9") > 0) {
        str += "#v" + getreward("material9") + "# / " + getreward("data9") + " 當前數量:" + player.getAmountOfItem(getreward("material9")) + "\r\n";
    }
    if (getreward("data10") > 0) {
        str += "#v" + getreward("material10") + "# / " + getreward("data10") + " 當前數量:" + player.getAmountOfItem(getreward("material10")) + "\r\n";
    }*/

str += "#fs16##b";
    str += "\t\t\t\t#L0#領取獎勵 #v" + getreward("equip") + "##l   #L1#放棄任務#l\r\n";
    //str += "#L1#放棄任務#l\r\n\r\n";
		
    let selected = npc.askMenuA(str);
    if (selected == 0) {
        if (player.hasItem(getreward("material1"), getreward("data1")) && player.hasItem(getreward("material2"), getreward("data2")) && player.hasItem(getreward("material3"), getreward("data3")) && player.hasItem(getreward("material4"), getreward("data4")) /*&& player.hasItem(getreward("material5"), getreward("data5")) && player.hasItem(getreward("material6"), getreward("data6")) && player.hasItem(getreward("material7"), getreward("data7")) && player.hasItem(getreward("material8"), getreward("data8")) && player.hasItem(getreward("material9"), getreward("data9")) && player.hasItem(getreward("material10"), getreward("data10"))*/) {
            player.loseItem(getreward("material1"), getreward("data1"));
            player.loseItem(getreward("material2"), getreward("data2"));
            player.loseItem(getreward("material3"), getreward("data3"));
            player.loseItem(getreward("material4"), getreward("data4"));
            /*player.loseItem(getreward("material5"), getreward("data5"));
            player.loseItem(getreward("material6"), getreward("data6"));
            player.loseItem(getreward("material7"), getreward("data7"));
            player.loseItem(getreward("material8"), getreward("data8"));
            player.loseItem(getreward("material9"), getreward("data9"));
            player.loseItem(getreward("material10"), getreward("data10"));*/
            completereward();
            player.gainItem(getreward("equip"), 1);
            npc.say("懸賞已完成,恭喜");
        } else {
            npc.say("材料不足");
        }
    } else if (selected == 1) {
        player.modifyCashShopCurrency(2, (-Point/2));
        resetreward();
        npc.say("成功放棄,扣除楓點 "+(Point/2/10)+" 個!")

    }
}

function Accept() { 
    var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
    var weaponId = null;
    var selStr = "#fs21##r#e你好,請選擇你想要的物品進行任務!!!\r\n#fs14#";
	selStr += "#fs16##e#b今日任務次數:[ #r#e"+player.getEventValue("懸賞任務")+"#k / #b3 #n]\r\n";
	//selStr += "#r#e#fs16#注意：#b點擊接受任務後會直接扣除 #r" + (Point/10000) + " #b萬楓點\r\n";
	//selStr += "並且記錄次數 1 次\r\n";
    

for (var i = 1; i < Jackpot1.length; i++) {
	var item = Jackpot1[i];
			selStr += "#fs16##e#r#L" + i + "#接受 #b#v" + item + "##z" + item + "##l\r\n";
            }
	
    weaponId = npc.askMenuA(selStr);
    player.modifyCashShopCurrency(2, -Point);
	player.addEventValue("懸賞任務",1,1);
    var text = "#r#fs16##e需要的材料如下：\r\n#fs16##b";
    for (var key in needItemList) {
        var itemName = player.makeItemWithId(needItemList[key][0]).getItemName();
        text += "#v" + needItemList[key][0] + "##z" + needItemList[key][0] + "#";
        for (var i = 0; i <= 10 - itemName.getBytes().length; i++) {
            text += "";
        }
        var currentItemQuantity = player.getAmountOfItem(needItemList[key][0]);
        var color = "#r\t";
        if (currentItemQuantity < needItemList[key][1])
            color = "#r\t";
		//text += color +"持有"+ currentItemQuantity + "個/需求" + needItemList[key][1] + "個#b\r\n";
		text += color +"#e#b需求#r" + needItemList[key][1] + "#b 個\r\n\r\n";
    }
    //text += "\r\n#b#e#fs16#是否接受此懸賞?\r\n";
	text += "\r\n#e接受任務點擊[ #r#e是#b ] ";
	text += "放棄任務點擊[ #k#e否#b ]\r\n";
	text += "放棄任務並且記錄次數#r 1 #b次";
    var number = npc.askYesNo(text);
    if (number == 1) {
        for (var key in needItemList) {}
        //這裏載入數據庫
        /*var sql = "INSERT INTO dgms_reward (character_id,material1,data1,material2,data2,material3,data3,material4,data4,material5,data5,material6,data6,material7,data7,material8,data8,material9,data9,material10,data10,complete,equip) VALUES (" + player.getId() + "," + needItemList[0][0] + "," + needItemList[0][1] + "," + needItemList[1][0] + "," + needItemList[1][1] + "," + needItemList[2][0] + "," + needItemList[2][1] + "," + needItemList[3][0] + "," + needItemList[3][1] + "," + needItemList[4][0] + "," + needItemList[4][1] + "," + needItemList[5][0] + "," + needItemList[5][1] + "," + needItemList[6][0] + "," + needItemList[6][1] + "," + needItemList[7][0] + "," + needItemList[7][1] + "," + needItemList[8][0] + "," + needItemList[8][1] + "," + needItemList[9][0] + "," + needItemList[9][1] + ",0," + weaponList[weaponId] + ")";*/
		var sql = "INSERT INTO dgms_reward (character_id,material1,data1,material2,data2,material3,data3,material4,data4,complete,equip) VALUES (" + player.getId() + "," + needItemList[0][0] + "," + needItemList[0][1] + "," + needItemList[1][0] + "," + needItemList[1][1] + "," + needItemList[2][0] + "," + needItemList[2][1] + "," + needItemList[3][0] + "," + needItemList[3][1] + ",0," + weaponList[weaponId] + ")";
        player.customSqlInsert(sql);
        npc.say("成功接受懸賞");
    } else {
		npc.say("你拒絕了此次懸賞");
		
	}
	
}
function completereward() { //完成任務
    var sql = "UPDATE dgms_reward SET complete = 1 WHERE character_id = " + player.getId();
    player.customSqlUpdate(sql);
}
function getreward(ui) { //查看任務
    var sql = "SELECT * FROM dgms_reward WHERE character_id = " + player.getId();
    var resultList = player.customSqlResult(sql);
    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        if (result == null) {
            break;
        }

        var quantitys = result.get(ui);
    }

    return quantitys;
}
function resetreward() { //放棄任務
    //var sql = "DELETE FROM dgms_reward where character_id = " + player.getId();
	var sql = "DELETE FROM dgms_reward where character_id = " + player.getId();
    player.customSqlUpdate(sql);
}
function getMinAndMax(minVal, maxVal) {//隨機 最大值 最小值
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}
