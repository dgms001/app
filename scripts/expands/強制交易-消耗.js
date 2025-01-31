/* This is a piece of code

 * author dgms

 * global player

 * 腳本定制 技術支持 QQ 381991414

 */
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var ItemList = Array(
    1212193,//廢代碼
    2432628,
	2022709,
	2023721,
	2450158,
	2028300,
	2250001,
	2028301,
	2432628,
	2048761,
	5062802,
	2028302,
	2028303,
	2028178,
	2632500,
	2436527,
	2437111,
	2630118,
	2435770
);

var equip = player.getInventorySlot(2, 1);
if (equip == null) {
    npc.askMenuS("消耗欄第一格沒有物品");
}
var texts = "Welcome to the special trip              " + a38 + "\r\n";

texts += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n"

texts += "#r注意事項:\r\n#d專屬裝備,如果對方擁有該裝備則會交易失敗\r\n#r注意:#b特殊欄的物品需要使用現金交易選項\r\n"
texts += "#r注意:#b開啟後需要切換分流刷新,否則無效果\r\n"
texts += "#r注意:#b可交易亦可傳倉庫\r\n"
texts += "#fs16##L1##b強制白剪#r[#z" + equip.getDataId() + "#]#b#l\r\n"
texts += "#fs12#\r\n#b只有以下物品開放了交易\r\n";
for (var i = 0; i < ItemList.length; i++) {
    texts += "#v" + ItemList[i] + "#";
}
let Trade = npc.askMenuS(texts);
if (Trade == 1) {
    var itemid = equip.getDataId();
    var flag = 0;
    for (var i = 0; i < ItemList.length; i++) {
        if (itemid == ItemList[i]) {
            flag = 1;
        }
    }
    if (flag == 1) {
        if (!player.hasItem(4032053, 1000)) {
            npc.say("#v4032053#不足3000");
        } else {
            player.loseItem(4032053, 1000);
            equip.setTradeOnce(true);
            npc.say("已開啟強制交易,請更換分流刷新後交易給他人");
        }
    } else {
        npc.say("該物品無法強制開啟交易");
    }

}

