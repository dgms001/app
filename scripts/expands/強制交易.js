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



txt = "#b本功能需要3000楓葉/次                  " + a38 + "\r\n";

txt += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n";
txt += "    #L1#" + f4 + "#fc0xFF2FBC71#強制開裝備欄交易#l#L2#" + f2 + "#fc0xFFFF8F54#強制開消耗欄交易#l\r\n\r\n";
txt += "    #L3#" + f4 + "#fc0xFF29928F#強制開其他欄交易#l#L4#" + f2 + "#fc0xFFFF8F54#強制開特殊欄交易#l\r\n\r\n";
txt += "\t\t\t\t  #L20#返回選單#l\r\n\r\n";


let selection = npc.askMenuS(txt, true);

switch (selection) {
    case 1:
        player.runScript("強制交易-裝備");
        break;
    case 2:
        player.runScript("強制交易-消耗");
        break;
    case 3:
        player.runScript("強制交易-其他");
        break;
    case 4:
        player.runScript("強制交易-特殊");
        break;
    case 20:
        player.runScript("本服菜單");
        break;

}
