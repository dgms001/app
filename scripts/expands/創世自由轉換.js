//強化制作 by dgms
var ax1 = "#fMap/MapHelper.img/minimap/match#";
var ax2 = "#fEffect/CharacterEff/1042176/2/0#";
var hd = "#fMap/MapHelper.img/weather/knitsWithWarmWinter/8#";
var zb = "#fMap/MapHelper.img/weather/birthday/2#";
var yb = "#fMap/MapHelper.img/weather/birthday/5#";
var a3 = "#fUI/StarCityUI.img/Screen/VIPMessage/WorldinfoNO/16/0#"
equip1 = player.getInventorySlot(1, 1);
if (equip1 == null) {
    npc.askMenuS("請在裝備欄第一個位置放上裝備！");
}
var itemList = Array(
    Array(1592022, 332),
    Array(1582044, 3712),
    Array(1572010, 10000),
    Array(1562010, 10000),
    Array(1552130, 100),
    Array(1542128, 100),
    Array(1532157, 100),
    Array(1522152, 100),
    Array(1492245, 100),
    Array(1482232, 100),
    Array(1472275, 100),
    Array(1462252, 100),
    Array(1452266, 100),
    Array(1442285, 100),
    Array(1432227, 100),
    Array(1422197, 100),
    Array(1412189, 100),
    Array(1403022, 100),
    Array(1402268, 100),
    Array(1382274, 100),
    Array(1372237, 100),
    Array(1362149, 100),
    Array(1332289, 100),
    Array(1322264, 100),
    Array(1312213, 100),
    Array(1302355, 100),
    Array(1292022, 100),
    Array(1282040, 232),
    Array(1272040, 222),
    Array(1262051, 212),
    Array(1252106, 100),
    Array(1242141, 100),
    Array(1242139, 100),
    Array(1232122, 100),
    Array(1222122, 100),
    Array(1213022, 100),
    Array(1214022, 100),
    Array(1212129, 100),);
var ItemSl = Array(
    Array(4310260, 20),
    Array(4034622, 20),
    Array(2434782, 20),
    Array(4032053, 5000),);
var result;
var STR;
var DEX;
var INT;
var LUK;
var PAD; //物理傷害
var MAD; //魔法傷害
var BOSS;
var WS;
var HP;
var MP;
var equip;
var CHUC;
var times = 0;
var 可強化次數 = 25;

var avail = "";
equip = player.getInventorySlot(1, 1);
if (equip != null) {
    itemid = equip.getDataId();
    if (equip.getTitle() == "") {
        equip.setTitle("強化+" + 0);
    }
}
if (equip.getCHUC() == 25) {
    npc.askMenuS("已經25星無法更變");
}
if (equip.getCHUC() <= 5) {
    npc.askMenuS("5星以下,無法更變");
}
if (equip.getDataId() != 1582044 && equip.getDataId() != 1572010 && equip.getDataId() != 1562010 && equip.getDataId() != 1552130 && equip.getDataId() != 1542128 && equip.getDataId() != 1532157 && equip.getDataId() != 1522152 && equip.getDataId() != 1492245 && equip.getDataId() != 1482232 && equip.getDataId() != 1472275 && equip.getDataId() != 1462252 && equip.getDataId() != 1452266 && equip.getDataId() != 1442285 && equip.getDataId() != 1432227 && equip.getDataId() != 1422197 && equip.getDataId() != 1412189 && equip.getDataId() != 1403022 && equip.getDataId() != 1402268 && equip.getDataId() != 1382274 && equip.getDataId() != 1372237 && equip.getDataId() != 1362149 && equip.getDataId() != 1332289 && equip.getDataId() != 1322264 && equip.getDataId() != 1312213 && equip.getDataId() != 1302355 && equip.getDataId() != 1292022 && equip.getDataId() != 1282040 && equip.getDataId() != 1272040 && equip.getDataId() != 1262051 && equip.getDataId() != 1252106 && equip.getDataId() != 1242141 && equip.getDataId() != 1242139 && equip.getDataId() != 1232122 && equip.getDataId() != 1222122 && equip.getDataId() != 1213022 && equip.getDataId() != 1212129 && equip.getDataId() != 1592022 && equip.getDataId() != 1214022) {
    npc.askMenuS("武器不為創世系列");
}
avail += "\r\n#b需要的材料如下:\r\n";
for (var i = 0; i < ItemSl.length; i++) {
    avail += "#v" + ItemSl[i][0] + "# 需要 [ #r" + ItemSl[i][1] + " #b] 當前擁有:#c" + ItemSl[i][0] + "#\r\n\r\n";
}

avail += "#r1、#r注意：5星之力以下,25星都不可使用\r\n";
avail += "2、#r注意：單純的換武器ID,其他全部不變\r\n";
avail += "3、#r注意：當然25星會全部補齊你當前武器ID的所有屬性\r\n#k";
avail += "\t\t#L0##b點我選擇武器ID#v" + itemid + "##l#k\r\n#k";

let selection = npc.askMenuS(avail);
if (selection == 0) {
    equip = player.getInventorySlot(1, 1);
    if (!player.hasItem(ItemSl[0][0], ItemSl[0][1])) {
        npc.say("#fs18##b#e你並沒有足夠的材料所以不能強化");
    } else if (!player.hasItem(ItemSl[1][0], ItemSl[1][1])) {
        npc.say("#fs18##b#e你並沒有足夠的材料所以不能強化");
    } else if (!player.hasItem(ItemSl[2][0], ItemSl[2][1])) {
        npc.say("#fs18##b#e你並沒有足夠的材料所以不能強化");
    } else if (!player.hasItem(ItemSl[3][0], ItemSl[3][1])) {
        npc.say("#fs18##b#e你並沒有足夠的材料所以不能強化");
    } else if (equip == null) {
        npc.say("#fs18##b#e請在裝備欄第一個位置放上裝備！");
    } else {
        info = "選中就會扣除材料,按ESC返回,操作失誤的損失自行承擔\r\n";
        for (var i = 0; i < itemList.length; i++) {
            info += "#b#L" + i + "##v" + itemList[i][0] + "##z" + itemList[i][0] + "##k\r\n";
        }
        let sel = npc.askMenuS(info);
        if (i) {
            equip.setItemSkin(0);
            equip.setDataId(itemList[sel][0]);
            player.updateItem(1, equip);
            for (var key in ItemSl) {
                player.loseItem(ItemSl[key][0], ItemSl[key][1]);
            }
            npc.say("#v" + itemList[sel][0] + "# 更變成功");

        }
    }
}
function getMinAndMax(minVal, maxVal) { //隨機 最大值 最小值
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}
function ASLZY() {
    var equipB = player.getInventorySlot(1, 1);
    var equipBID = equipB.getDataId();
    var SSS;
    if (equipBID == 1592022) {
        SSS = 0;
    } else if (equipBID == 1582044) {
        SSS = 1;
    } else if (equipBID == 1572010) {
        SSS = 2;
    } else if (equipBID == 1562010) {
        SSS = 3;
    } else if (equipBID == 1552130) {
        SSS = 4;
    } else if (equipBID == 1542128) {
        SSS = 5;
    } else if (equipBID == 1532157) {
        SSS = 6;
    } else if (equipBID == 1522152) {
        SSS = 7;
    } else if (equipBID == 1492245) {
        SSS = 8;
    } else if (equipBID == 1482232) {
        SSS = 9;
    } else if (equipBID == 1472275) {
        SSS = 10;
    } else if (equipBID == 1462252) {
        SSS = 11;
    } else if (equipBID == 1452266) {
        SSS = 12;
    } else if (equipBID == 1442285) {
        SSS = 13;
    } else if (equipBID == 1432227) {
        SSS = 14;
    } else if (equipBID == 1422197) {
        SSS = 15;
    } else if (equipBID == 1412189) {
        SSS = 16;
    } else if (equipBID == 1403022) {
        SSS = 17;
    } else if (equipBID == 1402268) {
        SSS = 18;
    } else if (equipBID == 1382274) {
        SSS = 19;
    } else if (equipBID == 1372237) {
        SSS = 22;
    } else if (equipBID == 1362149) {
        SSS = 21;
    } else if (equipBID == 1332289) {
        SSS = 22;
    } else if (equipBID == 1322264) {
        SSS = 23;
    } else if (equipBID == 1312213) {
        SSS = 24;
    } else if (equipBID == 1302355) {
        SSS = 25;
    } else if (equipBID == 1292022) {
        SSS = 26;
    } else if (equipBID == 1282040) {
        SSS = 27;
    } else if (equipBID == 1272040) {
        SSS = 28;
    } else if (equipBID == 1262051) {
        SSS = 29;
    } else if (equipBID == 1252106) {
        SSS = 30;
    } else if (equipBID == 1242141) {
        SSS = 31;
    } else if (equipBID == 1242139) {
        SSS = 32;
    } else if (equipBID == 1232122) {
        SSS = 33;
    } else if (equipBID == 1222122) {
        SSS = 34;
    } else if (equipBID == 1213022) {
        SSS = 35;
    } else if (equipBID == 1214022) {
        SSS = 36;
    } else if (equipBID == 1212129) {
        SSS = 37;
    }
    return SSS;
}
