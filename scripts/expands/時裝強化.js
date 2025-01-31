//強化制作 by dgms
var ax1 = "#fMap/MapHelper.img/minimap/match#";
var ax2 = "#fEffect/CharacterEff/1042176/2/0#";
var hd = "#fMap/MapHelper.img/weather/knitsWithWarmWinter/8#";
var zb = "#fMap/MapHelper.img/weather/birthday/2#";
var yb = "#fMap/MapHelper.img/weather/birthday/5#";
var a3 = "#fUI/StarCityUI.img/Screen/VIPMessage/WorldinfoNO/16/0#"

var ItemList = Array(
    1005349,
    1053427,
    1082736,
    1003608,
    1032146,
    1052515,
    1072717,
    1702370



);

var ItemSl = Array(
    Array(2630612, 100),
    Array(4032053, 500),
    Array(4021032, 100),
);
var randList = Array(
    Math.floor(20), //str
    Math.floor(20), //dex
    Math.floor(20), //inte
    Math.floor(20), //luk
    Math.floor(20), //pad
    Math.floor(20), //mad

);

var send00 = Array(1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1);
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
equip1 = player.getInventorySlot(6, 1);
if (equip1 == null) {
    npc.askMenuS("請在裝備欄第一個位置放上裝備！");
} else {
    equip = player.getInventorySlot(6, 1);
    var itemid = equip.getDataId();
    avail += "#b#fs13##e可強化道具 : \r\n";
    for (var i = 0; i < ItemList.length; i++) {
        avail += "#v" + ItemList[i] + "#";
    }
    avail += "#n\r\n#b需要的材料如下:\r\n";
    for (var i = 0; i < ItemSl.length; i++) {
        avail += "#v" + ItemSl[i][0] + "# 需要 [ #r" + ItemSl[i][1] + " #b] 當前擁有:#c" + ItemSl[i][0] + "#\r\n\r\n";
    }
    avail += "每次強化提升：\r\n力量[#r1-30#b] 敏捷[#r1-30#b] 智力[#r1-30#b]\r\n幸運[#r1-30#b] 物攻[#r1-30#b] 魔攻[#r1-30#b] \r\n可強化次數:[#r" + 可強化次數 + "#b]\r\n變數1-500:[成功]\r\n變數501-700:[不變]\r\n變數701-999:[消失]\r\n";

    avail += "#fs18##e\t #L0##fc0xFFFA9906#點我強化【#v" + itemid + "#】#l\r\n";


    if (equip.getTitle() == "") {
        equip.setTitle("強化+" + 0);
    }
    let selection = npc.askMenuS(avail);
    if (selection == 0) {
        equip = player.getInventorySlot(6, 1);
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
                    var info = "裝備：#v" + equip.getDataId() + "##t" + equip.getDataId() + "#\r\n\r\n";
                    info += "#r點擊‘是’會增加當前顯示屬性並且強化等級+1 ，最多強化" + 可強化次數 + "次#k\r\n#n"
                    //保存更新記錄

                    let sel = npc.askYesNoSNoEsc(info);
                    if (sel == 1) {
                        var SS = Math.floor(Math.random() * 1000);
                        if (SS <= 500) {
                            STR = equip.getStr();
                            DEX = equip.getDex();
                            INT = equip.getInt();
                            LUK = equip.getLuk();
                            PAD = equip.getPad(); //物理傷害
                            MAD = equip.getMad(); //魔法傷害
                            equip.setStr(STR + getMinAndMax(1, 30));
                            equip.setDex(DEX + getMinAndMax(1, 30));
                            equip.setInt(INT + getMinAndMax(1, 30));
                            equip.setLuk(LUK + getMinAndMax(1, 30));

                            equip.setPad(PAD + getMinAndMax(1, 30));
                            equip.setMad(MAD + getMinAndMax(1, 30));
                            var str = equip.getTitle();
                            var get = str.substring(3, 4);
                            var qhcs = Number(get) + 1;
                            equip.setTitle("強化+" + qhcs);
                            player.updateItem(1, equip);
                            STR2 = equip.getStr() - STR;
                            DEX2 = equip.getDex() - DEX;
                            INT2 = equip.getInt() - INT;
                            LUK2 = equip.getLuk() - LUK;
                            PAD2 = equip.getPad() - PAD; //物理傷害
                            MAD2 = equip.getMad() - MAD; //魔法傷害
                            var str2 = equip.getTitle();
                            npc.broadcastGachaponMsgEx("【時裝強化】:玩家[" + player.getName() + "]的時裝強化成功至[" + str2 + "]", equip);
                            for (var key in ItemSl) {
                                player.loseItem(ItemSl[key][0], ItemSl[key][1]);
                            }
                            npc.say("#fs14##b強化成功\r\n力量提升:[#r" + STR2 + "#b] 敏捷提升:[#r" + DEX2 + "#b] 智力提升:[#r" + INT2 + "#b]\r\n幸運提升[#r" + LUK2 + "#b] 物攻提升:[#r" + PAD2 + "#b] 魔攻提升:[#r" + MAD2 + "#b] \r\n隨機變數:[" + SS + "]\r\n");

                        } else if (SS <= 700) {
                            for (var key in ItemSl) {
                                player.loseItem(ItemSl[key][0], ItemSl[key][1]);
                            }
                            var str2 = equip.getTitle();
                            npc.say("#fs14##b強化失敗,裝備維持不變!\r\n機率變數:[" + SS + "]");
                            npc.broadcastGachaponMsgEx("【時裝強化】:玩家[" + player.getName() + "]的時裝強化失敗,階級維持:[" + str2 + "]", equip);
                        } else {
                            for (var key in ItemSl) {
                                player.loseItem(ItemSl[key][0], ItemSl[key][1]);
                            }
                            player.loseItem(equip.getDataId(), 1);
                            npc.say("#fs14##b裝備消失\r\n機率變數:[" + SS + "]");
                            npc.broadcastGachaponMsgEx("【時裝強化】:玩家[" + player.getName() + "]的時裝強化失敗,當前階級維持,忘記裝備沒了就沒階級了...", equip);
                        }
                        //npc.say("#fs14##b"+SS+"");

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