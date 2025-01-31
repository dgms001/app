var status = -1
var txt;
/*------------------------------------------------------------*/
//var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
//var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用
var items = Array(
2591000,//巴洛谷
2591009,//亞尼
2591005,//凡雷恩

2591281, //薛西斯
2591002, //雷克斯
2591283, //阿卡伊農

2591001, //闇黑龍王
2591006, //殘暴炎魔
2591004, //龍騎士

2591562, //涅涅
2591563,//嘟嘟
2591543,//烏勒斯
2591003,//皮卡啾
2591287,//梅格耐斯
2591280,//西格諾斯
2591007, //搖滾精神

2591008, 
2591600, 
2591282, 

2590028//200靈魂卷軸

);

let mapA = map.getId();
if (mapA >= 993001010 && mapA <= 993001500) {//限制控制之神地圖
} else {
    txt = "#fs12##b";
    for (var i = 0; i < items.length; i++) {
        txt += "#v" + items[i] + ":##l";
    }

    txt += "\r\n#L0#點我隨機抽取一個";

    let selection = npc.askMenu(txt, 9062453);

    if (selection == 0) {
        if (player.getFreeSlots(1) < 1) {
            npc.say("#b裝備欄背包空間不足");
        } else {
            GS = selection;
            var GV = getMinAndMax(0, 14);
            player.gainItem(items[GV], 1);
            player.loseItem(2431663, 1);
            npc.say("#fs16##b#e抽到了#v" + items[GV] + ":#");
        }
    }
}
function getMinAndMax(minVal, maxVal) { //隨機 最大值 最小值
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}
