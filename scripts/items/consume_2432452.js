//4是其他欄 3是裝飾欄
var nowca = java.util.Calendar.getInstance();//取時間
var nowday = nowca.get(java.util.Calendar.DATE);//獲取日
var NowFormat = parseInt(endmonthDate());//獲取該月日(字符)轉換成(數值int)
var beilv;
if (getHyPay() >= 5000) {
    beilv = 3;
} else if (player.getLevel() >= 275) {
    beilv = 2;
} else {
    beilv = 1;
}
var needitem = 2432452;
var item = [
    Array(5062503, 10),//白色附加
    Array(5062010, 10),//黑色方塊
    Array(2633918, 20),//歐皇
    Array(4032053, 500),//黃金楓葉
    Array(4001871, 1),//三千萬
    Array(4009411, 10)//餘額
];


var text = "";
text += "#e#fs16#每日救助金禮包:\r\n#n"
text += "#r\r\n倍率加成如下:275等*2 5K累計*3 效果不疊加\r\n\r\n";
text += "#fs11##b";
for (let i = 0; i < item.length; i++) {
    text += "#v" + item[i][0] + "##z" + item[i][0] + "#*" + item[i][1] * beilv + "\r\n";
}
text += "#fs14##r";
text += "#L1#領取福利 當前倍率(" + beilv + ") 當日可領取次數[" + player.getEventValue("每日救助金") + "/3]#l";




let sel = npc.askMenuS("" + text, true);

if (sel == 1) {
    if (player.getFreeSlots(2) < 10 || player.getFreeSlots(3) < 10 || player.getFreeSlots(4) < 10 || player.getFreeSlots(5) < 10) {
        npc.say("#fs14##b請先確保欄位都空10格以上!");
    } else if (player.getEventValue("每日救助金") > 3) {
        npc.say("#fs14##b今天已經領取過了哦 請明天再來領取!");
    } else {
        for (let i = 0; i < item.length; i++) {
            player.gainItem(item[i][0], item[i][1] * beilv);
        }
        player.loseItem(needitem, 1);
        npc.broadcastPlayerNotice(4, "「 玩家 」  " + player.getName() + "  領取了救助金,每日一補!!!倍率(" + beilv + ")");
        player.addEventValue("每日救助金", 1, 1);
        player.addEventValue("總計救助金", 1, 3000);
        npc.say("#fs14##b獲得好多東西~");
    }



}



function endmonthDate() {
    let date = new Date();
    let month = date.getMonth() + 1;
    let strDate = 30;
    if (month == 2) {
        strDate = "28";
    }
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        strDate = "31";
    }
    let currentdate = strDate;
    return currentdate;
}
function getHyPay() {
    var sql = "select leiji from hypay where accountid = ? ";
    var result = player.customSqlResult(sql, player.getAccountId());
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("leiji");
        }
    } else {
        return 0;
    }

}







