﻿/* This is a piece of code

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
    1202193,
	1143267,
	1143297,
	1143236,
	1113313,
	1162025,
    1190544,
	1143239,
	1143238,
	1142765,
	1142760,
	1142759,
	1142968,
	1143118,
	1142667,
	1142356,
	1142363,
	1142371,
	1142219,
	1142220,
	1142226,
	1143286,
	1342095,
	1143287,
	1143298,
	1142666,
	1143000,
	1142761,
	1113282,
	1162080,
    1162081,
    1162082,
    1162083,
    1032316,
    1132308,
    1012632,
    1022278,
    1122430,
    1113306,
    1182285,
    1190555,
    1190556,
    1190557,
    1190558,
    1190559,
	1032241,
	1132272,
	1113149,
	1113311,
	1672075,
	1052723,
	1202287,
	1113020,
1099018,
1352013,
1352213,
1352209,
1352219,
1352229,
1352239,
1352249,
1352259,
1352269,
1352279,
1352289,
1352299,
1352410,
1352510,
1352610,
1352711,
1352819,
1352909,
1352919,
1352948,
1352978,
1353010,
1353405,
1552133,
1354007,
1353807,
1353606,
1353505,
1353306,
1352933,
1353105,
1098006,
1353205,
1352867,
1353707,
1354027,
1352266,
1354017,
1352831,
1352981,
1353900,
1352990,
1352938,
1352113,
1352276,
1352831,
1352928,
1352957,
1352967,
1352935,
1352109,
1012438,
	1022211,
	1012478,
1342095,
	1142760
);

var equip = player.getInventorySlot(1, 1);
if (equip == null) {
    npc.askMenuS("裝備欄第一格沒有物品");
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
        if (!player.hasItem(4032053, 3000)) {
            npc.say("#v4032053#不足3000");
        } else {
            player.loseItem(4032053, 3000);
            equip.setTradeOnce(true);
            npc.say("已開啟強制交易,請更換分流刷新後交易給他人");
        }
    } else {
        npc.say("該物品無法強制開啟交易");
    }

}

