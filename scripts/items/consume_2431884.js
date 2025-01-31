/**
 ** 點裝搜索代碼 新端腳本 幾裡
 **/
let needMoney = 1; //所需點券
var GC1 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#";
var GC2 = "#fEffect/CharacterEff/1051366/0/0#"; //
var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用

// Ban 物品
let banItems = Array(
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
);

let autoBan = true; //是否開啟自動 Ban 物品 （帶4圍的就ban掉） 開啟 = true開啟；關閉 = false
let mapA = map.getId();
if (mapA == 993001100) { //限制開啟地圖
    //player.showSystemMessage("在卡BUG頭蓋骨給你打出來 操!!");
} else {
    text = "" + "\t\t\t#e#fs28##fc0xFF00caf2#" + GC1 + "《自選點裝》" + GC1 + "\r\n#n" + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + "\r\n#fs17##e#fc0xFFFFF300#輸入點裝代碼即可獲得。\r\n舉例: #v1703067# 代碼編號:[#r1703067#b]\r\n\t\t\t\t#L0##fc0xFFFFF300#點擊自選點裝[全屬性300 物魔攻300]#l";
}
let YN = npc.askMenuA(text, true);

if (YN == 0) {
    //while (true) {
    let selectText = npc.askNumber("#fs18##e#b請輸入點裝代碼", 0, 1000000, 1999999);
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
                let ss = "#fs18##e#b當前選中時裝為: #v" + selectText + "# #g#z" + selectText + "#\r\n\r\n#r是否要獲取該裝備？";
                YN = npc.askYesNo(ss, 9010061);
                if (YN == 1) {
                    if (!player.canGainItem(selectText, 1)) {
                        npc.say("#fs18##e#b請清理背包", 9010061);
                    } else {
                        let newItem = player.makeItemWithId(selectText);
                        newItem.setStr(300);
                        newItem.setDex(300);
                        newItem.setInt(300);
                        newItem.setLuk(300);
                        newItem.setPad(300);
                        newItem.setMad(300);
                        //newItem.setBossDamageR(0);
                        //newItem.setIgnorePDR(0);
                        //newItem.setDamR(0);
                        player.gainItem(newItem);
                        player.loseItem(2431884, 1);
                        //player.modifyCashShopCurrency(1,-needMoney);
                        npc.say("#fs18##e#b兌換成功! 歡迎繼續選購！", 9010061);
                        retur();
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
/* else if (YN == 1) {
player.openURL("http://www.mxdweb.com");
player.runScript("zxdz")
} */

function isCashItem(itemid) {
    return player.makeItemWithId(itemid).getSN() > -1;
}
function retur() {
    npc.runScript(npc.getId());
}
