/**
 ** 點裝搜索代碼 新端腳本 幾裡
 **/
let needMoney = 1; //所需點券
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var leibie;
// Ban 物品
var ItemList = Array(
    Array(1003608, 100, 1, 1, ""), //
    Array(1032146, 100, 1, 1, ""), //
    Array(1052515, 100, 1, 1, ""), //
    Array(1072717, 100, 1, 1, ""), //
    Array(1702370, 100, 1, 1, ""), //

    Array(1053427, 100, 1, 1, ""), //
    Array(1082736, 100, 1, 1, ""), //
    Array(1005349, 100, 1, 1, ""), //
);
let banItems = Array(
    /*
    1113298, //精靈的戒指
    1113299, //心願的戒指
    1114317, //EXP推進戒指10%
    1112918, //I'm Back 戒指
    1112127, //Welcome Back
    1112917, //超級新人王戒指
    1114400, //燃燒之戒
    1114402, //艾爾達斯祝福戒指
    1114401, //苦行戒指
    1032261, //內面耀光
    1113228, //內面暴風
    1114000, //血盟的戒指
    1113220, //幽暗戒指
    1033000, //露希妲耳環
    1113021, //愛情加速機器
    1122210, //赫拉的鑰匙項鍊
    1115100, //MVP名牌戒指(銀)
    1115012, //MVP聊天戒指(銀)
    1115101, //MVP名牌戒指(黃金)
    1115013, //MVP聊天戒指(黃金)
    1115014, //MVP聊天戒指(鑽石)
    1115102, //MVP名牌戒指(鑽石)
    1115196, //MVP名牌戒指(Red)
    1115095, //MVP聊天戒指(Red)
    1102872, //閃亮貴族
    1102873 //永恆貴族
     */
);

let autoBan = false; //是否開啟自動 Ban 物品 （帶4圍的就ban掉） 開啟 = true開啟；關閉 = false
ifitem();

txt = "Welcome to the special trip              " + a38 + "\r\n";

txt += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n";
txt += "#b手套/戒指/帽子/衣服/鞋子/武器/披風/眼飾/臉飾/盾牌\r\n\r\n注意:[#r附帶特效/技能裝轉換會消失,不予補回#b]\r\n";
txt += "\r\n\t\t\t#L0##b當前時裝[#r" + leibie + "#b]確認變更#l\r\n\r\n";

let YN = npc.askMenuS(txt, true);

if (YN == 0) {
    //while (true) {

    //pdzb();
    let selectText = npc.askNumber("#fs18##e#b請輸入點裝代碼", 0, mix, max);
    let toDrop = player.makeItemWithId(selectText);
    if (banItems.indexOf(selectText) != -1) {
        npc.say("#fs18##e#b該裝備無法獲取！", 9010061);
    } else if (null == toDrop) {
        npc.say("#fs18##e#b您輸入的代碼不存在，請重新輸入！", 9010061);
    } else if (!isCashItem(selectText)) {
        npc.say("#fs18##e#b您輸入的不是時裝代碼，請重新輸入！", 9010061);
    } else {

        if (toDrop.getDataId()) {
            if (autoBan && (toDrop.getStr() > 0 || toDrop.getDex() > 0 || toDrop.getInt() > 0 || toDrop.getLuk() > 0 || toDrop.getMad() > 0 || toDrop.getPad() > 0)) {
                npc.say("#fs18##e#b該 #v" + selectText + "# 時裝存在屬性，不可獲取！", 9010061);

            } else {
                let ss = "#fs18##e#b當前選中時裝為: #v" + selectText + "# #g#z" + selectText + "#\r\n\r\n#r是否要更新裝備？";
                YN = npc.askYesNo(ss, 9010061);

                if (YN == 1) {
                    var equip = player.getInventorySlot(6, 1);
                    if (!player.canGainItem(selectText, 1)) {
                        npc.say("#fs18##e#b請清理背包", 9010061);

                    } else {
                        equip.setDataId(selectText);
                        player.updateItem(1, equip);
                        //player.modifyCashShopCurrency(1,-needMoney);
                        npc.say("#fs18##e#b兌換成功! 歡迎繼續選購！", 9010061);
                        player.runScript("蘋果點裝更變")
                    }
                } else {
                    npc.say("#fs18##e#b找錯了？那麼請繼續選購吧！", 9010061);
                }
            }
        } else {
            npc.say("#fs18##e#b您輸入的不是點數裝備代碼，請重新輸入！", 9010061);
        }
    }
}
//}

function isCashItem(itemid) {
    return player.makeItemWithId(itemid).getSN() > -1;
}

function ifitem() {
    var ItemID = player.getInventorySlot(6, 1);
    var itemid = ItemID.getDataId()
    if (parseInt(itemid / 10000) == 111) { //戒指
        leibie = "戒指";
        mix = 1110000;
        max = 1119999;
    } else if (parseInt(itemid / 10000) == 100) { //帽子
        leibie = "帽子";
        mix = 1000000;
        max = 1009999;
    } else if (parseInt(itemid / 10000) == 104 || parseInt(itemid / 10000) == 105 || parseInt(itemid / 10000) == 106) { //衣服套服
        leibie = "套服";
        mix = 1040000;
        max = 1069999;
    } else if (parseInt(itemid / 10000) == 107) { //鞋子
        leibie = "鞋子";
        mix = 1070000;
        max = 1073999;
    } else if (parseInt(itemid / 10000) == 108) { //手套
        leibie = "手套";
        mix = 1080000;
        max = 1089999;
    } else if (parseInt(itemid / 10000) == 170) { //武器
        leibie = "武器";
        mix = 1700000;
        max = 1703999;
    } else if (parseInt(itemid / 10000) == 110) { //披風
        leibie = "披風";
        mix = 1100000;
        max = 1103999;
    } else if (parseInt(itemid / 10000) == 102) { //眼飾
        leibie = "眼飾";
        mix = 1020000;
        max = 1022999;
    } else if (parseInt(itemid / 10000) == 101) { //臉飾
        leibie = "臉飾";
        mix = 1010000;
        max = 1012999;
    } else if (parseInt(itemid / 10000) == 109 || parseInt(itemid) == 1342069) { //盾牌
        leibie = "盾牌";
        mix = 1090000;
        max = 1099999;

    }
}
