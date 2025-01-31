var ItemList = Array(
    1122296,
    1012632, //口紅控制氣
    1022278, //魔力的眼罩
    1122430, //苦痛的根源
    1113306, //巨大的恐怖
    1132308, //夢幻腰帶
    1162080, 1162081, 1162082, 1162083, //魔島書
    1032316, //指揮官力量的耳環
    1182285, //創世的胸章
    1113193,
    1152170, //皇家暗黑合金護肩
    1182087, //水晶溫杜斯胸章
    1113020, //戰神祝福
    1022277, //拉圖斯標誌
    //1112429,//冒險家的魔法之戒
    1112952, //希拉的憤怒
    1112597, //西格諾斯的克希努爾
    1113149, //銀花戒指
    1032241, //戴雅希杜斯耳環
    1122076, //混沌暗黑龍王的項鍊
    1022231, //水中信紙
    1012478, //凝聚的力量結晶石
    1012438, //波賽頓紋身
    1022211, //波賽頓眼鏡
    1190555,
    1190556,
    1190557,
    1190558,
    1190559
		/*
		//伊下是副手的
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
        1352807,
        1352928,
        1352957,
        1352967,
        1352935,
        1352109,
        1342095*/);

var ItemList2 = Array(
    1152170, //皇家暗黑合金護肩
    1182087, //水晶溫杜斯胸章
    1113020, //戰神祝福
    1022277, //拉圖斯標誌
    //1112429,//冒險家的魔法之戒
    1112952, //希拉的憤怒
    1112597, //西格諾斯的克希努爾
    1113149, //銀花戒指
    1032241, //戴雅希杜斯耳環
    1122076, //混沌暗黑龍王的項鍊
    1022231, //水中信紙
    1012478 //凝聚的力量結晶石
);

equip1 = player.getInventorySlot(1, 1);
if (equip1 == null) {
    npc.askMenuS("請在裝備欄第一個位置放上裝備！");

}
equip = player.getInventorySlot(1, 1);
var itemid = equip.getDataId();

txt = "#fs17##b#e玩家你好,這邊提供強制白剪服務\r\n";
txt += "使用一次,消耗楓葉點數#r200#b萬\r\n";
txt += "#r注意:\r\n1.請將裝備放在第一個欄位\r\n";
txt += "#r2.裝備只有穿戴後從\r\n  裝備時不可交換 -> 無法交換\r\n  才可使用\r\n";
txt += "#b當前道具為#v" + player.getInventorySlot(1, 1).getDataId() + "#\r\n";

txt += "#b#L0#【點我強制白剪】#l\r\n\r\n";
//txt += "#b#L1#【點我強制白剪】#l\r\n\r\n";
txt += "可使用道具:";
for (let i = 0; i < ItemList.length; i++) {
    txt += "#v" + ItemList[i] + "# ";
}
//for (let  i = 0; i < ItemList2.length; i++) {txt += "#z"+ItemList2[i]+"# "; }


let selection = npc.askMenu(txt);

switch (selection) {
    case 0:
        if (player.getCashShopCurrency(2) < 2000000) {
            npc.say("#fs16##b#e楓葉點數不足，無法使用");
        } else {
            var toDrop = player.getInventorySlot(1, 1);
            var itemid = player.getInventorySlot(1, 1).getDataId();
            var flag = 0;
            for (let i = 0; i < ItemList.length; i++) {
                if (itemid == ItemList[i]) {
                    flag = 1;
                }
            }
            if (flag == 1) {
                toDrop.setAttribute(0);
                player.updateItem(1, toDrop);
                player.modifyCashShopCurrency(2, -2000000);
                npc.say("#fs17##b#e#v" + itemid + "##g#z" + itemid + "##b已變成可交易。");
            } else {
                npc.say("#v" + itemid + "##r#z" + itemid + "#不正確");
            }
        }
        break;

    case 1:
        if (player.getCashShopCurrency(2) < 500000) {
            npc.say("#fs16##b#e楓葉點數不足，無法使用");
        } else {
            var toDrop = player.getInventorySlot(1, 1);
            var itemid = player.getInventorySlot(1, 1).getDataId();
            var flag = 0;
            for (let i = 0; i < ItemList2.length; i++) {
                if (itemid == ItemList2[i]) {
                    flag = 2;
                }
            }
            if (flag == 2) {
                toDrop.setAttribute(0);
                player.updateItem(1, toDrop);
                player.modifyCashShopCurrency(2, -500000);
                npc.say("#fs17##b#e#v" + itemid + "##g#z" + itemid + "##b已變成可交易。");
            } else {
                npc.say("#v" + itemid + "##r#z" + itemid + "#不正確");
            }
        }
        break;
}
