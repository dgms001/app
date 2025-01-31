/* This is a piece of code

 * author dgms

 * global player

 * Contact QQ 381991414 DC dgms#6650

 * function reward

 */
var Point = 100000 //開啓點券

var weaponList = Array(//道具,需要材料倍率

    Array(4032055, 1),
    Array(4032055, 1)
    //Array(4009411,7)
);

//需要的材料
var needItemList = Array(
    Array(4000539, getMinAndMax(10, 20)),
    Array(4000540, getMinAndMax(7, 15)),
    Array(4000541, getMinAndMax(5, 10)),
    Array(4032053, getMinAndMax(50, 272)),//金楓
    Array(4001832, getMinAndMax(100, 700)),//咒文
    Array(4009454, getMinAndMax(50, 500)),//草原
    Array(4000850, getMinAndMax(1, 2))//蘇打
);

if (player.getEventValue("懸賞任務") > 10) {
    npc.sayS("#fs14#今日懸賞次數已達10次!!");
} else if (player.getLevel() < 230) {
    npc.sayS("#fs14#玩家等級不足230等");
} else if (player.getCashShopCurrency(2) < Point) {
    npc.sayS("#fs14#楓葉點數不足 #r" + (Point / 10000) + "萬 #k , 無法開啟懸賞.");
} else if (getreward("character_id") != player.getId() || getreward("complete") == 1) {
    Accept();

} else {
    completed();
}

function completed() { //這裡是懸賞進行時的脚本
    var ltz46 = "#fUI/GuildMark/Mark/Plant/00003006/7#";  //
    var z = "#fUI/GuildMark/Mark/Plant/00003006/7#"; //"+z+"//美化
    let str = "\t\t\t #fs18##r#e【懸賞系統】\r\n#fs14##n#b";
    str += "" + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + "\r\n";
    if (getreward("data1") > 0) {
        str += "#v" + getreward("material1") + "# 需求:" + getreward("data1") + "個 持有: " + player.getAmountOfItem(getreward("material1")) + "\r\n";
    }
    if (getreward("data2") > 0) {
        str += "#v" + getreward("material2") + "# 需求:" + getreward("data2") + "個 持有: " + player.getAmountOfItem(getreward("material2")) + "\r\n";
    }
    if (getreward("data3") > 0) {
        str += "#v" + getreward("material3") + "# 需求:" + getreward("data3") + "個 持有: " + player.getAmountOfItem(getreward("material3")) + "\r\n";
    }
    if (getreward("data4") > 0) {
        str += "#v" + getreward("material4") + "# 需求:" + getreward("data4") + "個 持有: " + player.getAmountOfItem(getreward("material4")) + "\r\n";
    }
    if (getreward("data5") > 0) {
        str += "#v" + getreward("material5") + "# 需求:" + getreward("data5") + " 當前數量:" + player.getAmountOfItem(getreward("material5")) + "\r\n";
    }
    if (getreward("data6") > 0) {
        str += "#v" + getreward("material6") + "# 需求:" + getreward("data6") + " 當前數量:" + player.getAmountOfItem(getreward("material6")) + "\r\n";
    }
    if (getreward("data7") > 0) {
        str += "#v" + getreward("material7") + "# 需求:" + getreward("data7") + " 當前數量:" + player.getAmountOfItem(getreward("material7")) + "\r\n";
    }
    if (getreward("data8") > 0) {
        str += "#v" + getreward("material8") + "# 需求:" + getreward("data8") + " 當前數量:" + player.getAmountOfItem(getreward("material8")) + "\r\n";
    }
    if (getreward("data9") > 0) {
        str += "#v" + getreward("material9") + "# 需求:" + getreward("data9") + " 當前數量:" + player.getAmountOfItem(getreward("material9")) + "\r\n";
    }
    if (getreward("data10") > 0) {
        str += "#v" + getreward("material10") + "# 需求:" + getreward("data10") + " 當前數量:" + player.getAmountOfItem(getreward("material10")) + "\r\n";
    }
    str += "" + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + "\r\n";
    str += "#L0##d#e完成懸賞 , 領取你的獎勵#v" + getreward("equip") + "##l\r\n";
    str += "#L1#放棄懸賞 [需要" + (Point / 2 / 10000) + "萬楓點] #l\r\n";
    let selected = npc.askMenu(str);
    if (selected == 0) {//要改成循環檢測
        SQLITEM = Array(//資料庫,資料庫,開關檢測
            Array("material1", "data1", "data1ON"),
            Array("material2", "data2", "data2ON"),
            Array("material3", "data3", "data3ON"),
            Array("material4", "data4", "data4ON"),
            Array("material5", "data5", "data5ON"),
            Array("material6", "data6", "data6ON"),
            Array("material7", "data7", "data7ON"),
            Array("material8", "data8", "data8ON"),
            Array("material9", "data9", "data9ON"),
            Array("material10", "data10", "data10ON")
        );
        data1ON = true; data2ON = true; data3ON = true; data4ON = true; data5ON = true;
        data6ON = true; data7ON = true; data8ON = true; data9ON = true; data10ON = true;
        for (var key in SQLITEM) {
            if (getreward(SQLITEM[key][1]) > 0) {
                if (getreward(SQLITEM[key][0]) != null) {
                    SQLITEM[key][2] = player.hasItem(getreward(SQLITEM[key][0]), getreward(SQLITEM[key][1]));
                }
            }
        }

        if (data1ON && data2ON && data3ON && data4ON && data5ON && data6ON && data7ON && data8ON && data9ON && data10ON) {//ok

            for (var key in SQLITEM) {
                if (getreward(SQLITEM[key][0]) != null) {
                    player.loseItem(getreward(SQLITEM[key][0]), getreward(SQLITEM[key][1]));
                }
            }
            completereward();
            player.gainItem(getreward("equip"), 1);

            npc.sayS("懸賞已完成,恭喜");
        } else {
            npc.sayS("材料不足");
        }
    } else if (selected == 1) {
        player.modifyCashShopCurrency(2, (-Point / 2));
        resetreward();
        npc.sayS("成功放棄,扣除楓點 " + (Point / 2 / 10000) + " 萬!")

    }
}

function Accept() {
    var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
    var weaponId = null;
    var selStr = "\t\t\t  #fs18##r#e【懸賞系統】#n#k\r\n#fs14#";
    selStr += "\t\t今日懸賞次數:[ #r#e" + player.getEventValue("懸賞任務") + "#k / #b10 #n]\r\n";
    selStr += "#r#fs12#注意：#k點擊懸賞後會直接扣除 #r" + (Point / 10000) + "萬點 #k楓葉點數,\r\n";
    selStr += "並且記錄次數 1 次\r\n";


    var key = Math.floor(Math.random() * weaponList.length);
    var item = weaponList[key];
    selStr += "#r#L" + key + "#隨機懸賞以下其中一中#l\r\n\r\n";

    selStr += "懸賞道具名單\r\n";
    for (var key1 in weaponList) {
        var item1 = weaponList[key1][0];
        selStr += "#k#b#v" + item1 + "##z" + item1 + "#(" + key1 + ")#l\r\n";
    }
    if (player.isGm()) {
        selStr += "\r\n\r\n#kGM查看隨機項目\r\n#b#v" + item + "##z" + item + "#(" + key + ")#l\r\n";
    }

    /*for (var key in weaponList) {
        var item = weaponList[key];
        selStr += "#r#L" + key + "#懸賞 #b#v" + item + "##z" + item + "#("+key+")#l\r\n";
    }*/

    weaponId = npc.askMenu(selStr);
    player.modifyCashShopCurrency(2, -Point);
    player.addEventValue("懸賞任務", 1, 1);
    var text = "\t#b#fs16##e#d#v" + weaponList[weaponId][0] + "##z" + weaponList[weaponId][0] + "#\r\n\r\n#b需要的材料如下：\r\n#n#fs14##b";
    /*for (var key in needItemList) {
        var itemName = player.makeItemWithId(needItemList[key][0]).getItemName();
        text += "#v" + needItemList[key][0] + "##z" + needItemList[key][0] + "#";
        for (var i = 0; i <= 10 - itemName.getBytes().length; i++) {
            text += "";
        }
        var ItemQuantity = weaponList[weaponId][1];
        var currentItemQuantity = player.getAmountOfItem(needItemList[key][0]);
        var color = "#r\t";
        if (currentItemQuantity < needItemList[key][1]*ItemQuantity)
            color = "#r\t";
        //text += color +"持有"+ currentItemQuantity + "個/需求" + needItemList[key][1] + "個#b\r\n";
        text += color +"需求" + needItemList[key][1]*ItemQuantity + "個#b\r\n";
    }*/

    var arrLotto = new Array(needItemList.length);
    arrNum = Array(
        Array(null, null),
        Array(null, null),
        Array(null, null),
        Array(null, null),
        Array(null, null),
        Array(null, null),
        Array(null, null),
        Array(null, null),
        Array(null, null),
    );

    range = Math.floor((Math.random() * 3) + 3);  //這邊選數量 增加數x+3   最少x+3個道具
    for (i = 0; i <= range; i++) { //這個for用在產生七個亂數, range在1~42內而且不會重覆
        isDone = false;
        while (!isDone) {
            num = Math.floor(Math.random() * needItemList.length);
            if (!arrLotto[num]) {

                text += "#v" + needItemList[num][0] + "##z" + needItemList[num][0] + "#";
                ItemQuantity = weaponList[weaponId][1];
                currentItemQuantity = player.getAmountOfItem(needItemList[num][0]);
                color = "#r\t";
                if (currentItemQuantity < needItemList[num][1] * ItemQuantity)
                    color = "#r\t";
                //text += color +"持有"+ currentItemQuantity + "個/需求" + needItemList[key][1] + "個#b\r\n";
                text += color + "需求" + needItemList[num][1] * ItemQuantity + "個#b\r\n";

                arrLotto[num] = true;
                isDone = true;
                arrNum.unshift(Array(needItemList[num][0], needItemList[num][1] * ItemQuantity));
            }
        }

    }

    text += "\r\n";
    text += "\r\n#k#fs14#是否接受此懸賞?\r\n";
    text += "按[ #b#e是#n#k ]則接取此懸賞\t   ";
    text += "按[ #r#e否#n#k ]則放棄此懸賞";
    var number = npc.askYesNoS(text);
    if (number == 1) {
        for (var key in needItemList) { }
        //這裡載入數據庫
        //var sql = "INSERT INTO dgms_reward (character_id,material1,data1,material2,data2,material3,data3,material4,data4,material5,data5,material6,data6,material7,data7,material8,data8,material9,data9,material10,data10,complete,equip) VALUES (" + player.getId() + "," + needItemList[0][0] + "," + needItemList[0][1] + "," + needItemList[1][0] + "," + needItemList[1][1] + "," + needItemList[2][0] + "," + needItemList[2][1] + "," + needItemList[3][0] + "," + needItemList[3][1] + "," + needItemList[4][0] + "," + needItemList[4][1] + "," + needItemList[5][0] + "," + needItemList[5][1] + "," + needItemList[6][0] + "," + needItemList[6][1] + "," + needItemList[7][0] + "," + needItemList[7][1] + "," + needItemList[8][0] + "," + needItemList[8][1] + "," + needItemList[9][0] + "," + needItemList[9][1] + ",0," + weaponList[weaponId] + ")";
        /*var sql = "INSERT INTO dgms_reward (character_id,material1,data1,material2,data2,material3,data3,material4,data4,complete,equip) VALUES (" + player.getId() + "," + needItemList[0][0] + "," + needItemList[0][1]*ItemQuantity + "," + needItemList[1][0] + "," + needItemList[1][1]*ItemQuantity + "," + needItemList[2][0] + "," + needItemList[2][1]*ItemQuantity + "," + needItemList[3][0] + "," + needItemList[3][1]*ItemQuantity + ",0," + weaponList[weaponId][0] + ")";*/
        var sql = "INSERT INTO dgms_reward (character_id,material1,data1,material2,data2,material3,data3,material4,data4,material5,data5,material6,data6,material7,data7,material8,data8,material9,data9,material10,data10,complete,equip) VALUES (" + player.getId() + "," + arrNum[0][0] + "," + arrNum[0][1] + "," + arrNum[1][0] + "," + arrNum[1][1] + "," + arrNum[2][0] + "," + arrNum[2][1] + "," + arrNum[3][0] + "," + arrNum[3][1] + "," + arrNum[4][0] + "," + arrNum[4][1] + "," + arrNum[5][0] + "," + arrNum[5][1] + "," + arrNum[6][0] + "," + arrNum[6][1] + "," + arrNum[7][0] + "," + arrNum[7][1] + "," + arrNum[8][0] + "," + arrNum[8][1] + "," + arrNum[9][0] + "," + arrNum[9][1] + ",0," + weaponList[weaponId][0] + ")";
        player.customSqlInsert(sql);
        npc.sayS("成功接受懸賞");
    } else {
        npc.sayS("你拒絕了此次懸賞");

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
