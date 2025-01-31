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
	1113020,
	    1012438,
    1022211,
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
1342095
);

var equip = player.getInventorySlot(1, 1);
if (equip == null) {
    npc.askMenuS("裝備欄第一格沒有物品");
}
var texts = "#fs21##e#r你好,這裡是強剪,目前之支援銀河/漆黑/波紋!!!\r\n\r\n"

texts += "#fs16##e#b消耗#v2051000# #r1#b 個 [#r楓點商店購買#b]\r\n\r\n"
texts += "強剪成功,請退到選腳界面在登入,否則不生效\r\n"
texts += "登入後裝備才可以交易\r\n\r\n"
texts += "\t\t\t\t\t#L1##fs21##b強制剪刀#l\r\n"//[#z" + equip.getDataId() + "#]
//texts += "#fs12#\r\n#b只有以下物品開放了交易\r\n";
/*for (var i = 0; i < ItemList.length; i++) {
    texts += "#v" + ItemList[i] + "#";
}*/
let Trade = npc.askMenuA(texts);
if (Trade == 1) {
    var itemid = equip.getDataId();
    var flag = 0;
    for (var i = 0; i < ItemList.length; i++) {
        if (itemid == ItemList[i]) {
            flag = 1;
        }
    }
    if (flag == 1) {
        if (!player.hasItem(2051000, 1)) {
            player.showSystemMessage("你沒有鑰匙!!!");
        } else {
            player.loseItem(2051000, 1);
            equip.setTradeOnce(true);
            npc.broadcastPlayerNotice(2, "[漆黑強剪]  玩家  " + player.getName() + " 使用強剪成功!!!");
        }
    } else {
        player.showSystemMessage("該物品不屬於漆黑系列!!!");
    }

}

