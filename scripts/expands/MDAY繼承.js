//強化制作 by dgms
var ax1 = "#fMap/MapHelper.img/minimap/match#";
var ax2 = "#fEffect/CharacterEff/1042176/2/0#";
var hd = "#fMap/MapHelper.img/weather/knitsWithWarmWinter/8#";
var zb = "#fMap/MapHelper.img/weather/birthday/2#";
var yb = "#fMap/MapHelper.img/weather/birthday/5#";
var a3 = "#fUI/StarCityUI.img/Screen/VIPMessage/WorldinfoNO/16/0#"

var ItemList = 1672069;

var ItemSl = Array(
    Array(4001488, 25),
    Array(4032053, 1000),
    Array(4021032, 500),
    Array(4021036, 250)
);
var randList = Array(
    Math.floor(15), //str
    Math.floor(15), //dex
    Math.floor(15), //inte
    Math.floor(15), //luk
    Math.floor(15), //pad
    Math.floor(15), //mad
    Math.floor(1), //boss
    Math.floor(1), //wushi
    Math.floor(1), //傷害
    Math.floor(1), //捲數
);

var send00 = 350;
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
    avail += "#b#fs13##e可繼承道具 : \r\n";
    // for (var i = 0; i < ItemList.length; i++) {
    avail += "#v" + ItemList + "#";
    // }
    avail += "#n\r\n#b需要的材料如下:\r\n";
    for (var i = 0; i < ItemSl.length; i++) {
        avail += "#v" + ItemSl[i][0] + "# 需要 [ #r" + ItemSl[i][1] + " #b] 當前擁有:#c" + ItemSl[i][0] + "#\r\n\r\n";
    }
    avail += "#r機率:35%成功,65%失敗不變#n\r\n\r\n";

    avail += "#r1、#r注意：繼承直接所有東西無一遺漏\r\n";
    avail += "2、#r注意：繼承成功裝備變MDAY心臟\r\n";
    avail += "3、#r注意：繼承失敗材料扣除，其他不變\r\n";
    avail += "#fs18##e\t #L0##fc0xFFFA9906#點我繼承【#v" + itemid + "#】#l\r\n";


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
        } else if (!player.hasItem(ItemSl[3][0], ItemSl[3][1])) {
            npc.say("#fs18##b#e你並沒有足夠的材料所以不能強化");
        } else if (equip == null) {
            npc.say("#fs18##b#e請在裝備欄第一個位置放上裝備！");
        } else {
            var itemid = equip.getDataId();
            var flag = 0;
            // for (var i = 0; i < ItemList.length; i++) {
            if (itemid == ItemList) {
                flag = 1;
            }
            // }
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
                if (str == 可強化次數) {
                    var info = "裝備：#v" + equip.getDataId() + "##t" + equip.getDataId() + "#\r\n當前屬性如下：\r\n";
                    info += "#r點擊‘是’會增加當前顯示屬性並且強化等級+1 ，最多強化" + 可強化次數 + "次#k\r\n"
                    //保存更新記錄
                    let sel = npc.askYesNoSNoEsc(info);
                    if (sel == 1) {
                        send = Math.floor(Math.random() * 1000);
                        if (send < send00) {
                            equip.setDataId(1672075);
                            player.updateItem(1, equip);
                            //npc.broadcastGachaponMsgEx("【強化中心】 :玩家[" + player.getName() + "]強化成功", equip);


                            for (var key in ItemSl) {
                                player.loseItem(ItemSl[key][0], ItemSl[key][1]);
                            }
                            npc.say("#fs18##b#e繼承成功");
                        } else {
                            for (var key in ItemSl) {
                                player.loseItem(ItemSl[key][0], ItemSl[key][1]);
                            }
                            npc.say("#fs18##b#e繼承失敗");
                        }
                        player.runScript("MDAY繼承");
                    } else {
                        npc.say("#fs18##b#e好吧，下次再來~");
                    }
                } else {
                    npc.say("#fs18##b#e強化次數必須為9才可以繼承\r\n目前強化只開放到" + 可強化次數 + "次");
                }
            } else {
                npc.say("#fs18##b#e請檢查裝備欄第一個位置是否放入正確裝備");
            }
        }
        //}
        //}
    }


}//最前段 裝備欄空值