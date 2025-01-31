//強化制作 by dgms
var ax1 = "#fMap/MapHelper.img/minimap/match#";
var ax2 = "#fEffect/CharacterEff/1042176/2/0#";
var hd = "#fMap/MapHelper.img/weather/knitsWithWarmWinter/8#";
var zb = "#fMap/MapHelper.img/weather/birthday/2#";
var yb = "#fMap/MapHelper.img/weather/birthday/5#";
var a3 = "#fUI/StarCityUI.img/Screen/VIPMessage/WorldinfoNO/16/0#"

var ItemList = Array(
    1142499,
    1142499



);

var ItemSl = Array(
    Array(4009411, 3),
);
var randList = Array(
    Math.floor(20), //str
    Math.floor(20), //dex
    Math.floor(20), //inte
    Math.floor(20), //luk
    Math.floor(20), //pad
    Math.floor(20), //mad
    Math.floor(2), //boss
    Math.floor(2), //wushi
    Math.floor(2), //傷害
    Math.floor(0), //捲數
    Math.floor(1000), //HP	
    Math.floor(500), //MP

);

var send00 = Array(750, 500, 400, 300, 200, 150, 150, 100, 100, 100);
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
var 可強化次數 = 9;

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
    avail += "每次強化提升：\r\n力量[#r" + randList[0] + "#b] 敏捷[#r" + randList[1] + "#b] 智力[#r" + randList[2] + "#b]\r\n幸運[#r" + randList[3] + "#b] 物攻[#r" + randList[4] + "#b] 魔攻[#r" + randList[5] + "#b] \r\nB傷 [#r" + randList[6] + "#b ] 無視%[#r" + randList[7] + "#b] 傷害[ #r" + randList[8] + "#b]\r\nHP[#r" + randList[10] + "#b] MP[#r" + randList[11] + "#b]\r\n可強化次數:[#r" + 可強化次數 + "#b]\r\n";
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
                    //info += "\r\n#b卷數:#k#g-> #r" + randList[9];
                    info += "\r\n#bHP:#k#g-> #r" + randList[10];
                    info += "\r\n#bMP:#k#g-> #r" + randList[11];
                    let sel = npc.askYesNoSNoEsc(info);
                    if (sel == 1) {
                        var SS = Math.floor(Math.random() * 1000);
                        if (SS <= send00[str]) {
                            STR = equip.getStr();
                            DEX = equip.getDex();
                            INT = equip.getInt();
                            LUK = equip.getLuk();
                            PAD = equip.getPad(); //物理傷害
                            MAD = equip.getMad(); //魔法傷害
                            HP =
                                MP =
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
                            //hp
                            equip.setMaxHp(equip.getMaxHp() + randList[10]);
                            //mp
                            equip.setMaxMp(equip.getMaxMp() + randList[11]);
                            var str = equip.getTitle();
                            var get = str.substring(3, 4);
                            var qhcs = Number(get) + 1;
                            equip.setTitle("強化+" + qhcs);
                            player.updateItem(1, equip);
                            //npc.broadcastGachaponMsgEx("【勳章強化】:玩家[" + player.getName() + "]的勳章強化成功", equip);
                            for (var key in ItemSl) {
                                player.loseItem(ItemSl[key][0], ItemSl[key][1]);
                            }
                            npc.say("#fs18##b#e強化成功");

                        } else {
                            for (var key in ItemSl) {
                                player.loseItem(ItemSl[key][0], ItemSl[key][1]);
                            }
                            npc.say("#fs18##e#b強化失敗");
                        }


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