//分布式制作裝備 by dgms qq:381991414
var status = 0;
var itemcount = 4001832;
var items = Array(
    Array(2023380, 5000, 1),
    Array(2023398, 10000, 1),
    Array(2023406, 15000, 1),
    Array(2023407, 20000, 1),
    //Array(2022530, 10000, 1),
    //Array(2022531, 20000, 1),
    //Array(2023072, 10000, 1),
    //Array(2023132, 20000, 1),
    //Array(2023145, 20000, 1),
    Array(2022709, 30000, 1)


);
date = new Date();
let week = date.getDay();
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
var selection = -1;
var zhizuo = null;
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var lq1 = "#fUI/UIWindow2.img/crossHunterUI/reward/button/normal/0#"
var lq2 = "#fUI/UIWindow2.img/crossHunterUI/reward/button/disabled/0#"
var text = "";
text = "  全服次數:[" + getItem() + "/1000]   個人次數:[" + player.getEventValue("製作經驗掉包") + "/8]   " + a38 + "\r\n";

text += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n"
for (var i = 0; i < items.length; i++) {
    var tips = "";
    text += "#L" + i + "##b#v" + items[i][0] + "##b#z" + items[i][0] + "# 需求：#r[#v" + itemcount + "# x #g" + items[i][1] + "#b]#n\r\n";
}
let selection = npc.askMenu(text, true);
i = selection;
selection = npc.askNumber("購買道具為：#v" + items[i][0] + "##z" + items[i][0] + "##k\r\n請輸入購買個數：", 1, 1, 999);


if (selection) {
    GS = selection;
    QSS = GS * items[i][1];
    var count = player.getAmountOfItem(4001832);
    if ((hour == 0) && (minute == 0)) {
        npc.say("#fs16##r#e0點過1分後再來,當前為重置時間");
    } else if (getItem() + GS > 1000) {
        npc.say("#fs16##r#e今日全服製作次數不足,請明天再來");
    } else if (player.getEventValue("製作經驗掉包") + GS > 8) {
        npc.say("#fs16##b#e今日製作次數不足,請明天再來");
    } else if (count < QSS) {
        npc.say("#fs16##b#e道具不足，無法兌換");
    } else {
        player.loseItem(itemcount, QSS);
        player.gainItem(items[i][0], items[i][2] * GS);
        player.addEventValue("製作經驗掉包", GS, 1);
        setItem(1, getItem() + GS);
        npc.say("#fs16##b#e兌換成功");
        player.runScript("經驗製作");
    }
}

function setItem(id, item) { //更新總額度
    var sql = "update dgms_expvalue SET value = " + item + " where id = '" + id + "';"; //更新itemid
    player.customSqlUpdate(sql);
}
function getItem() {
    var sql = "select value from dgms_expvalue where id = 1";
    var result = player.customSqlResult(sql, player.getId());
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("value");
        }
    } else {
        return 0;
    }

}