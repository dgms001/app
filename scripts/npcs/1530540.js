//強化制作 by dgms
var ax1 = "#fMap/MapHelper.img/minimap/match#";
var ax2 = "#fEffect/CharacterEff/1042176/2/0#";
var hd = "#fMap/MapHelper.img/weather/knitsWithWarmWinter/8#";
var zb = "#fMap/MapHelper.img/weather/birthday/2#";
var yb = "#fMap/MapHelper.img/weather/birthday/5#";
var a3 = "#fUI/StarCityUI.img/Screen/VIPMessage/WorldinfoNO/16/0#"

var ItemList = Array(
    1032316,//指揮官  耳環
    1132308,//夢幻的腰帶
    1012632,//口紅控制氣
    1022278,//魔力的眼罩
    1122430,//苦痛的根源
    1113306,//巨大的恐怖
    1182285,
    1190555,
    1190556,
    1190557,
    1190558,
    1190559


);

var ItemSl = Array(
    Array(2633634, 200),
    Array(4032053, 1500),
    Array(4021032, 1000),
);
var randList = Array(
    Math.floor(getMinAndMax(45, 80)), //str
    Math.floor(getMinAndMax(45, 80)), //dex
    Math.floor(getMinAndMax(45, 80)), //inte
    Math.floor(getMinAndMax(45, 80)), //luk
    Math.floor(getMinAndMax(45, 80)), //pad
    Math.floor(getMinAndMax(45, 80)), //mad
    Math.floor(getMinAndMax(1, 6)), //boss
    Math.floor(getMinAndMax(1, 6)), //wushi
    Math.floor(getMinAndMax(1, 6)), //傷害
    Math.floor(getMinAndMax(1, 3)), //捲數
);

var send00 = Array(1000, 1000, 1000, 1000, 500, 300, 200, 100, 50, 50);
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
var times = 0;
var 可強化次數 = 7;

var avail = "";
equip1 = player.getInventorySlot(1, 1);
if (equip1 == null) {
    npc.askMenuS("請在裝備欄第一個位置放上裝備！");
} else {
    equip = player.getInventorySlot(1, 1);
    var itemid = equip.getDataId();
    avail += "#b#fs13##e可強化道具 : \r\n";
    for (var i = 0; i < ItemList.length; i++) {
        avail += "#v" + ItemList[i] + "#";
    }
    avail += "#n\r\n#b需要的材料如下:\r\n";
    for (var i = 0; i < ItemSl.length; i++) {
        avail += "#v" + ItemSl[i][0] + "# 需要 [ #r" + ItemSl[i][1] + " #b] 當前擁有:#c" + ItemSl[i][0] + "#\r\n\r\n";
    }
    avail += "每次強化提升：\r\n力量[#r45-80#b] 敏捷[#r45-80#b] 智力[#r45-80#b]\r\n幸運[#r45-80#b] 物攻[#r45-80#b] 魔攻[#r45-80#b] \r\nB傷 [#r1-6#b ] 無視%[#r1-6#b] 傷害[ #r1-6#b]\r\n卷數[#r1-3#b ] \r\n可強化次數:[#r" + 可強化次數 + "#b]\r\n";
    avail += "#r1、#r注意：裝備不支持增加星火提升的屬性\r\n";
    avail += "2、#r注意：提升的時候可以先衝完捲之後再強化\r\n";
    avail += "3、#r注意：把要提升的裝備放在裝備欄的第一個位置\r\n";
    avail += "#fs18##e\t #L0##fc0xFFFA9906#點我強化【#v" + itemid + "#】#l\r\n";


    if (equip.getTitle() == "") {
        equip.setTitle("強化+" + 0);
    }
    let selection = npc.askMenuS(avail);
    if (selection == 0) {
        equip = player.getInventorySlot(1, 1);
        //for (var i = 0; i < ItemSl.length; i++) { {
        // var itemId = ItemSl[i][0];
        //var itemQuantity = ItemSl[i][1];
        //var itemId2 = ItemSl[i+1][0];
        //var itemQuantity2 = ItemSl[i+1][1];
        if (!player.hasItem(ItemSl[0][0], ItemSl[0][1])) {
            npc.say("#fs18##b#e你並沒有足夠的材料所以不能強化");
        } else if (!player.hasItem(ItemSl[1][0], ItemSl[1][1])) {
            npc.say("#fs18##b#e你並沒有足夠的材料所以不能強化");
        } else if (!player.hasItem(ItemSl[2][0], ItemSl[2][1])) {
            npc.say("#fs18##b#e你並沒有足夠的材料所以不能強化");
        } else if (equip == null) {
            npc.say("#fs18##b#e請在裝備欄第一個位置放上裝備！");
        } else {
            var itemid = equip.getDataId();
            var flag = 0;
            for (var i = 0; i < ItemList.length; i++) {
                if (itemid == ItemList[i]) {
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
                str = str.substring(3, 4);
                if (str < 可強化次數) {
                    var info = "裝備：#v" + equip.getDataId() + "##t" + equip.getDataId() + "#\r\n當前屬性如下：\r\n";
                    info += "#r點擊‘是’會增加當前顯示屬性並且強化等級+1 ，最多強化" + 可強化次數 + "次#k\r\n"
                    //保存更新記錄
                    info += "\r\n#b強化:#k#g-> #r本次";
                    info += "\r\n#b力量:#k#g-> #r" + randList[0];
                    info += "\r\n#b敏捷:#k#g-> #r" + randList[1];
                    info += "\r\n#b智力:#k#g-> #r" + randList[2];
                    info += "\r\n#b運氣:#k#g-> #r" + randList[3];
                    info += "\r\n#b攻擊力:#k#g-> #r" + randList[4];
                    info += "\r\n#b魔法力:#k#g-> #r" + randList[5];
                    info += "\r\n#bBOSS傷害:#k#g-> #r" + randList[6];
                    info += "\r\n#b無視:#k#g-> #r" + randList[7];
                    info += "\r\n#b傷害:#k#g-> #r" + randList[8];
                    info += "\r\n#b卷數:#k#g-> #r" + randList[9];
                    let sel = npc.askYesNoSNoEsc(info);
                    if (sel == 1) {
                        STR = equip.getStr();
                        DEX = equip.getDex();
                        INT = equip.getInt();
                        LUK = equip.getLuk();
                        PAD = equip.getPad(); //物理傷害
                        MAD = equip.getMad(); //魔法傷害
                        //替換掉屬性
                        //力量
                        equip.setStr(STR + randList[0]);
                        //敏捷
                        equip.setDex(DEX + randList[1]);
                        //智力
                        equip.setInt(INT + randList[2]);
                        //運氣
                        equip.setLuk(LUK + randList[3]);
                        //攻擊
                        equip.setPad(PAD + randList[4]);
                        //魔法攻擊
                        equip.setMad(MAD + randList[5]);
                        //BOSS傷害
                        equip.setBossDamageR(equip.getBossDamageR() + randList[6]);
                        //無視
                        equip.setIgnorePDR(equip.getIgnorePDR() + randList[7]);
                        //傷害
                        equip.setDamR(equip.getDamR() + randList[8]);
                        //捲數
                        equip.setRUC(equip.getRUC() + randList[9]);
                        var str = equip.getTitle();
                        var get = str.substring(3, 4);
                        var qhcs = Number(get) + 1;
                        equip.setTitle("強化+" + qhcs);
                        player.updateItem(1, equip);
                        npc.broadcastPlayerNotice(16, "【強化中心】玩家 [" + player.getName() + "] :強化成功");
                        for (var key in ItemSl) {
                            player.loseItem(ItemSl[key][0], ItemSl[key][1]);
                        }
                        npc.say("#fs18##b#e強化成功");
                    } else {
                        npc.say("#fs18##b#e好吧，下次再來~");
                    }
                } else {
                    npc.say("#fs18##b#e強化次數已經到達上限\r\n目前強化只開放到" + 可強化次數 + "次");
                }
            } else {
                npc.say("#fs18##b#e請檢查裝備欄第一個位置是否放入正確裝備");
            }
        }
        //}
        //}
    }


}//最前段 裝備欄空值
function getMinAndMax(minVal, maxVal) {//隨機 最大值 最小值
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}