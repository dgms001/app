var status = -1
var txt;
date = new Date();
let week = date.getDay();
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
/*------------------------------------------------------------*/
//var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
//var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //紅心桃心
ifSQL();
//delvalue();
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用
let AS;

var items = Array(
    Array(1112952, 1000, 1, "沒用的"),
    //       ID  價格 數量  名稱   楓點or樂豆[2/1] 限購次數 限購NAME
    //Array(4032053, 1, 1, "[擋視線用的]", 2, 0, "全服限購15"),
    Array(2633918, 500, 1, "[歐皇卷]", 2, 25, "全服限購1"),
    Array(2633918, 10, 1, "[歐皇卷]", 1, 50, "全服限購2"),//樂豆
    Array(5062026, 20, 1, "[結合方塊]", 2, 30, "全服限購3"),
    Array(5062026, 4, 1, "[結合魔方]", 1, 50, "全服限購4"),//樂豆
    Array(5062503, 10, 1, "[白色附加]", 2, 80, "全服限購5"),
    Array(2048761, 20, 1, "[覺醒星火]", 2, 30, "全服限購6"),
    Array(2022531, 50, 1, "[掉寶一小時]", 2, 20, "全服限購7"),
    Array(2023380, 50, 1, "[經驗半小時]", 2, 20, "全服限購8"),
    Array(5062802, 20, 1, "[超級奇幻]", 2, 10, "全服限購9"),
    Array(5062802, 2, 1, "[超級奇幻]", 1, 15, "全服限購14"),
    Array(2000054, 50000, 1, "[MVP藥水]", 2, 15, "全服限購10"),
    Array(5064400, 5, 1, "[恢復卡]", 1, 30, "全服限購11"),//樂豆
    Array(2437111, 15, 1, "[命運捲軸]", 1, 5, "全服限購12"),//樂豆
    Array(2436527, 15, 1, "[B卷", 1, 25, "全服限購13"),//樂豆
    Array(2644006, 50, 1, "[追加30%]", 1, 5, "全服限購15"),//樂豆
    Array(2644007, 100, 1, "[追加50%]", 1, 1, "全服限購16"),//樂豆
    Array(2000054, 100, 1, "[MVP藥水]", 1, 10, "全服限購17"),//樂豆
    Array(5062802, 3, 1, "[超級奇幻]", 1, 10, "全服限購18"),//樂豆
    Array(5062503, 2, 1, "[白色附加]", 1, 10, "全服限購19"),//樂豆
    Array(5060057, 30, 1, "[幸運寶箱]", 2, 50, "全服限購20"),
    Array(5060057, 1, 1, "[幸運寶箱]", 1, 100, "全服限購21"),//樂豆
    Array(5060048, 100, 1, "[蘋果]", 2, 50, "全服限購22"),
    Array(5060048, 2, 1, "[蘋果]", 1, 100, "全服限購23"),//樂豆
    Array(4251202, 666, 1, "[附加石]", 1, 1, "全服限購24"),//樂豆
);
txt = "\r\n";
txt = "Welcome to the special trip              " + a38 + "\r\n";
txt += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n";
for (var i = 1; i < items.length; i++) {
    AS = "楓葉";
    if (items[i][4] == 1) {
        AS = "#r樂豆幣";
    }
    txt += "#L" + i + "##b#v" + items[i][0] + "# #k#z" + items[i][0] + "##b單價#r" + items[i][1] + "#b" + AS + " 全服數量:" + (items[i][5] - getvalue(items[i][6])) + "#n\r\n";
}
let selection = npc.askMenuS(txt, true);
i = selection;
selection = npc.askNumber("購買道具為：#v" + items[i][0] + "# #z" + items[i][0] + "##k\r\n請輸入購買個數：", 1, 1, 1);

if (i) {
    GS = selection;
    QSS = GS * items[i][1];
    if ((items[i][5] - getvalue(items[i][6])) <= 0) {
        npc.askMenuS("全服次數已用完,無法購買");
    } else if (player.getFreeSlots(2) < 1 || player.getFreeSlots(4) < 1 || player.getFreeSlots(5) < 1) {
        npc.askMenuS("#fs14##b請先確保所有背包欄1個以上格子!");
    } else {
        if (items[i][4] == 2) {
            if (!player.hasItem(4032053, QSS)) {
                npc.askMenuS("#fs16##b#e楓葉不足，無法購買");
            }
            player.loseItem(4032053, QSS);
            player.gainItem(items[i][0], items[i][2] * GS);
            updateitems(items[i][6], +1);
            player.addEventValue("累積消耗限購樂豆額數", QSS, 999)
            player.addEventValue("限購" + items[i][3], 1, 1);
            //npc.broadcastPlayerNotice(37, "恭喜這個B " + player.getName() + " 購買到了 " + items[i][3] + " ！！！");
        } else {
            if (!player.hasItem(4310066, QSS)) {
                npc.askMenuS("#fs16##b#e樂豆幣不足，無法購買");
            }
            player.loseItem(4310066, QSS);
            player.gainItem(items[i][0], items[i][2] * GS);
            updateitems(items[i][6], +1);
            player.addEventValue("累積消耗限購樂豆額數", QSS, 999)
            player.addEventValue("限購" + items[i][3], 1, 1);
            //npc.broadcastPlayerNotice(37, "恭喜這個B " + player.getName() + " 購買到了 " + items[i][3] + " ！！！");
        }

        npc.say("#fs16##b#e購買成功");
    }
}

function updateitems(name, value) {
    var sql = "update dgms_worldshop SET AllValue = AllValue+" + value + " where AllName = '" + name + "';"; //疑問 有兩個分號;
    player.customSqlUpdate(sql);
}

function getvalue(NAME) {
    var sql = "select AllValue from dgms_worldshop where AllName = ? ";
    var result = player.customSqlResult(sql, "" + NAME + "");
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("AllValue");
        }
    } else {
        return 0;
    }

}

function insertitems() {
    for (var i = 1; i < 31; i++) {
        var sql = "insert into dgms_worldshop(AllValue,AllName,ID) values('0','全服限購" + i + "','" + i + "')";
        player.customSqlInsert(sql);
    }
}

function insertitem() {
    var sql = "insert into dgms_worldshop(AllValue,AllName,ID) values('1','全服限購LOG','31')";
    player.customSqlInsert(sql);

}
function ifSQL() {
    if (getvalue("全服限購LOG") == 0) {
        insertitems();
        insertitem();
    } else { }
}
