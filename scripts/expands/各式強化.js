/* 圓夢谷 TMS 237 萬能菜單 */
var status = -1
var txt;
/*------------------------- 表情符號 -------------------------*/
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"

if (player.getFreeSlots(2) < 10 || player.getFreeSlots(4) < 10 || player.getFreeSlots(5) < 10) {
    txt = "#fs14##b請先確保所有背包欄10個以上格子!";
} else {

    txt = "Welcome to the special trip              " + a38 + "\r\n";

    txt += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n";
    txt += "#fs11##L1#" + f4 + "#bXX強化#l#L2#" + f2 + "XX強化#l#L3#" + f5 + "XX強化#l#L4#" + f3 + "XX強化#l\r\n\r\n";
    txt += "#fs11##L5#" + f4 + "#bXX強化#l#L6#" + f2 + "XX強化#l#L8#" + f5 + "XX強化#l#L8#" + f3 + "XX強化#l\r\n\r\n";
    txt += "#fs11##L9#" + f4 + "#bXX強化#l#L10#" + f2 + "XX強化#l#L11#" + f5 + "XX強化#l#L12#" + f3 + "XX強化#l\r\n\r\n";
    txt += "#fs11##L13#" + f4 + "#bXX強化#l#L14#" + f2 + "XX強化#l#L15#" + f5 + "XX強化#l#L16#" + f3 + "XX強化#l\r\n\r\n";
    txt += "\t\t\t\t#fs14##e#fc0xFF66CCCC##L10#返回選單#l\r\n\r\n"; 8
    if (player.isGm()) {
    }
}

let selection = npc.askMenuS(txt, true);

switch (selection) {

    case 1:
        player.runScript("改版楓幣商店");
        break;
    case 2:
        player.runScript("改版楓點商店");
        break;
    case 3:
        player.runScript("餘額商店");
        break;
    case 4:
        npc.sendShop(128250);
        break;
    case 5:
        npc.sendShop(1001000);
        break;
    case 6:
        npc.sendShop(1011000);
        break;
    case 7:
        npc.sendShop(1001100);
        break;
    case 8:
        npc.sendShop(1001001);
        break;
    case 10:
        player.runScript("本服菜單");
        break;
    case 11:
        player.runScript("喇叭商店");
        break;

}
