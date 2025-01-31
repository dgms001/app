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

    Array(1592022, 490, 490, 240, 240, 834, 240, 550, 730),
    Array(1582044, 490, 490, 240, 240, 716, 240, 550, 660),
    Array(1572010, 490, 490, 240, 240, 874, 240, 550, 770),
    Array(1562010, 490, 490, 240, 240, 875, 240, 550, 770),
    Array(1552130, 240, 240, 490, 490, 447, 1334, 550, 950),
    Array(1542128, 490, 490, 240, 240, 849, 240, 550, 740),
    Array(1532157, 490, 490, 240, 240, 890, 240, 550, 790),
    Array(1522152, 490, 490, 240, 240, 834, 240, 550, 730),
    Array(1492245, 490, 490, 240, 240, 705, 240, 550, 650),
    Array(1482232, 490, 490, 240, 240, 716, 240, 550, 660),
    Array(1472275, 240, 490, 240, 490, 561, 240, 550, 610),
    Array(1462252, 490, 490, 240, 240, 849, 240, 550, 740),
    Array(1452266, 490, 490, 240, 240, 834, 240, 550, 730),
    Array(1442285, 490, 490, 240, 240, 808, 240, 550, 700),
    Array(1432227, 490, 490, 240, 240, 875, 240, 550, 770),
    Array(1422197, 490, 490, 240, 240, 875, 240, 550, 770),
    Array(1412189, 490, 490, 240, 240, 875, 240, 550, 770),
    Array(1403022, 490, 490, 240, 240, 716, 240, 550, 660),
    Array(1402268, 490, 490, 240, 240, 875, 240, 550, 770),
    Array(1382274, 240, 240, 490, 490, 709, 999, 550, 800),
    Array(1372237, 240, 240, 490, 490, 683, 987, 550, 780),
    Array(1362149, 240, 490, 240, 490, 849, 240, 550, 740),
    Array(1332289, 240, 490, 240, 490, 834, 240, 550, 730),
    Array(1322264, 490, 490, 240, 240, 849, 240, 550, 740),
    Array(1312213, 490, 490, 240, 240, 849, 240, 550, 740),
    Array(1302355, 490, 490, 240, 240, 849, 240, 550, 740),
    Array(1292022, 240, 490, 240, 490, 834, 240, 550, 730),
    Array(1282040, 240, 240, 490, 490, 683, 987, 550, 780),
    Array(1272040, 240, 490, 240, 490, 834, 240, 550, 730),
    Array(1262051, 240, 240, 490, 490, 683, 987, 550, 780),
    Array(1252106, 240, 240, 490, 490, 683, 987, 550, 780),
    Array(1242141, 240, 490, 240, 490, 716, 240, 550, 660),
    Array(1242139, 490, 490, 240, 240, 716, 240, 550, 660),
    Array(1232122, 490, 490, 240, 240, 875, 240, 550, 770),
    Array(1222122, 490, 490, 240, 240, 716, 240, 550, 660),
    Array(1213022, 490, 490, 240, 240, 875, 240, 550, 770),
    Array(1212129, 240, 240, 490, 490, 683, 987, 550, 780),
    Array(1214022, 240, 240, 490, 490, 683, 987, 550, 780),
);
var ItemSl = Array(
    Array(4310260, 20 * (1 + equip1.getCHUC())),
    Array(4034622, 10 * (1 + equip1.getCHUC())),
    Array(2434782, 50 * (1 + equip1.getCHUC())),
    Array(4032053, 15000),);
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
avail += "#b可強化的裝備如下:\r\n";
equip = player.getInventorySlot(1, 1);
if (equip != null) {
    itemid = equip.getDataId();
    if (equip.getTitle() == "") {
        equip.setTitle("強化+" + 0);
    }
}
if (equip.getCHUC() == 0) {
    CHUC = 25;
} else {
    CHUC = (25 - equip.getCHUC());
}
for (var i = 0; i < itemList.length; i++) {
    avail += "#b#v" + itemList[i][0] + "##k";
}
avail += "\r\n#b需要的材料如下:\r\n";
for (var i = 0; i < ItemSl.length; i++) {
    avail += "#v" + ItemSl[i][0] + "# 需要 [ #r" + ItemSl[i][1] + " #b] 當前擁有:#c" + ItemSl[i][0] + "#\r\n\r\n";
}
avail += "每次強化提升：\r\n力量[#r" + Math.trunc((itemList[ASLZY()][7] + itemList[ASLZY()][1] - equip.getStr()) / CHUC) + "#b] 敏捷[#r" + Math.trunc((itemList[ASLZY()][7] + itemList[ASLZY()][2] - equip.getDex()) / CHUC) + "#b] 智力[#r" + Math.trunc((itemList[ASLZY()][7] + itemList[ASLZY()][3] - equip.getInt()) / CHUC) + "#b]\r\n幸運[#r" + Math.trunc((itemList[ASLZY()][7] + itemList[ASLZY()][4] - equip.getLuk()) / CHUC) + "#b] 物攻[#r" + Math.trunc(((itemList[ASLZY()][8] + itemList[ASLZY()][5]) - equip.getPad()) / CHUC) + "#b] 魔攻[#r" + Math.trunc((itemList[ASLZY()][8] + itemList[ASLZY()][6] - equip.getMad()) / CHUC) + "#b]\r\nB 傷[#r1%#b] 無視[#r1%#b] 總傷[#r1%#b] MAX強化次數:[#r" + 可強化次數 + "#b]\r\n";
avail += "#r1、#r注意：強化加的是固定隨機屬性[每一把武器都有上限25星即為最大上限]\r\n";
avail += "2、#r注意：強化的屬性會多一點因為會加默認星之力的屬性\r\n";
avail += "3、#r注意：把要提升的裝備放在裝備欄的第一個位置\r\n#k";
avail += "\t\t#L0##b點我強化#v" + itemid + "##l#k\r\n#k";

let selection = npc.askMenuS(avail);
if (selection == 0) {
    equip = player.getInventorySlot(1, 1);
    //for (var i = 0; i < ItemSl.length; i++) { {
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
        var itemid = equip.getDataId();
        var flag = 0;
        for (var i = 0; i < itemList.length; i++) {
            if (itemid == itemList[i][0]) {
                flag = 1;
            }
        }
        if (flag == 1) {
            var str = equip.getTitle();
            if (str != null) {
                if (str.length > 0) {
                    str = str.substring(3, 4);
                    times = parseInt(str);
                } else {

                    times == 0;
                }
            }
            str = equip.getCHUC();

            if (str < 可強化次數) {
                var info = "裝備：#v" + equip.getDataId() + "##t" + equip.getDataId() + "#\r\n當前屬性如下：\r\n";
                info += "#r點擊‘是’會增加當前顯示屬性並且強化等級+1 ，最多強化" + 可強化次數 + "次#k\r\n"
                //保存更新記錄
                info += "\r\n#b強化:#k#g-> #r本次";
                /*
                info += "\r\n#b力量:#k#g-> #r" + randList[0];
                info += "\r\n#b敏捷:#k#g-> #r" + randList[1];
                info += "\r\n#b智力:#k#g-> #r" + randList[2];
                info += "\r\n#b運氣:#k#g-> #r" + randList[3];
                info += "\r\n#b攻擊力:#k#g-> #r" + randList[4];
                info += "\r\n#b魔法力:#k#g-> #r" + randList[5];
                info += "\r\n#bBOSS傷害:#k#g-> #r" + randList[6];
                info += "\r\n#b無視:#k#g-> #r" + randList[7];*/
                let sel = npc.askYesNoSNoEsc(info);
                if (sel == 1) {
                    STR = equip.getStr();
                    DEX = equip.getDex();
                    INT = equip.getInt();
                    LUK = equip.getLuk();
                    PAD = equip.getPad(); //物理傷害
                    MAD = equip.getMad(); //魔法傷害
                    if (equip.getCHUC() == 0) {
                        var CHUC = 25;
                    } else {
                        var CHUC = (25 - equip.getCHUC());
                    }
                    //替換掉屬性
                    //力量
                    equip.setStr(STR + Math.trunc((itemList[ASLZY()][7] + itemList[ASLZY()][1] - STR) / CHUC));
                    //敏捷
                    equip.setDex(DEX + Math.trunc((itemList[ASLZY()][7] + itemList[ASLZY()][2] - DEX) / CHUC));
                    //智力
                    equip.setInt(INT + Math.trunc((itemList[ASLZY()][7] + itemList[ASLZY()][3] - INT) / CHUC));
                    //運氣
                    equip.setLuk(LUK + Math.trunc((itemList[ASLZY()][7] + itemList[ASLZY()][4] - LUK) / CHUC));
                    //攻擊
                    equip.setPad(PAD + Math.trunc((itemList[ASLZY()][8] + itemList[ASLZY()][5] - PAD) / CHUC));
                    //魔法攻擊
                    equip.setMad(MAD + Math.trunc((itemList[ASLZY()][8] + itemList[ASLZY()][6] - MAD) / CHUC));
                    //BOSS傷害
                    if (equip.getDataId() == 1232122) {
                        equip.setMaxHp(500 * equip.getCHUC());
                    } else {
                        equip.setMaxHp(0);
                    }
                    equip.setBossDamageR(equip.getBossDamageR() + 1);
                    //無視
                    equip.setIgnorePDR(equip.getIgnorePDR() + 1);
                    //總傷
                    equip.setDamR(equip.getDamR() + 1);
                    //星之力
                    equip.setCHUC(equip.getCHUC() + 1)

                    player.updateItem(1, equip);
                    npc.broadcastPlayerNotice(16, "【創世強化】 :玩家 [" + player.getName() + "]強化成功");
                    for (var key in ItemSl) {
                        player.loseItem(ItemSl[key][0], ItemSl[key][1]);
                    }
                    npc.say("強化成功");
                } else {
                    npc.say("好吧，下次再來~");
                }
            } else {
                npc.say("強化次數已經到達上限,目前強化只開放到" + 可強化次數 + "次");
            }
        } else {
            npc.say("請檢查裝備欄第一個位置是否放入正確裝備");
        }
    }
    //}
    //}
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
    } else if (equipBID == 1212129) {
        SSS = 36;
    } else if (equipBID == 1214022) {
        SSS = 37;
    }
    return SSS;
}
