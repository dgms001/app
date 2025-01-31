//4是其他欄 3是裝飾欄
var needitem = 2436102;
var item = Array(
    Array(2433575, 1), //榮耀
    Array(2003552, 2), //X3
    Array(2003553, 1), //X5
    Array(2434388, 1), //月餅 +1000HPMP自選
    Array(5062017, 20), //閃耀方塊
    Array(5062020, 20), //閃炫方塊
    Array(5062500, 10) //附加方塊
);
let mapA = map.getId();
if (mapA == 993001100) { //限制開啟地圖
    //player.showSystemMessage("在卡BUG頭蓋骨給你打出來 操!!");
} else {
    text = "";
    text += "#e#fs18#中秋節禮包獎勵如下:\r\n#n";
    text += "#fs14##b";
    text += "#v1012290##z1012290#*1(僅第一次)\r\n";
    for (let i = 1; i < item.length; i++) {
        text += "#v" + item[i][0] + "##z" + item[i][0] + "#*" + item[i][1] + "\r\n";
    }
    text += "\r\nBOSS里程*150\r\n";
    text += "#fs16##r";
    text += "#L1#點我領取#l";
    text += "\r\n";
    text += "";
    text += "";
}
let sel = npc.askMenuS("" + text, true);

if (sel == 1) {
    if (player.getFreeSlots(2) < 4 || player.getFreeSlots(5) < 3) {
        npc.say("#fs14##b請先確保欄位都空4格以上!");
    } else {
        for (let i = 1; i < item.length; i++) {
            player.gainItem(item[i][0], item[i][1]);
        }
        player.loseItem(needitem, 1);
        if (player.getEventValue("中秋福利") == 0) {
            player.gainItem(1012290, 1);
        }
        player.addEventValue("中秋福利", 1, 30);
        player.addEventValue("BOSS里程", 150, 3000);
        npc.say("#fs14##b中秋快樂~");
    }

}
