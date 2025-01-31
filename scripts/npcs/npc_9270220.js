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

txt = "Welcome to the special trip              " + a38 + "\r\n";
txt += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n";
txt += "\t\t\t#fs11##L1#" + f4 + "#b製作胸章#l#L2#" + f2 + "製作能源#l\r\n\r\n";
txt += "\t\t\t#fs11##L3#" + f3 + "#b製作圖騰#l#L4#" + f2 + "製作心臟#l\r\n\r\n";//#L11#" + f3 + "椅子商店#l#L8#" + f4 + "勳章商店#l
txt += "\t\t\t#fs11##L5#" + f4 + "#b製作波賽飾品#l\r\n\r\n";
txt += "\t\t\t\t   #L50#返回選單#l\r\n\r\n";
let selection = npc.askMenuS(txt, true);

switch (selection) {
    case 1:
        player.runScript("胸章製作");
        break;
    case 2:
        player.runScript("能源製作");
        break;
    case 3:
        player.runScript("圖騰製作");
        break;
    case 4:
        player.runScript("心臟製作");
        break;
    case 5:
        player.runScript("航海製作");
        break;
    case 6:
        npc.sendShop(1011000);
        break;
    case 7:
        player.runScript("其他雜物");
        break;
    case 8:
        player.runScript("勛章商店");
        break;
    case 9:
        player.runScript("字型商店");
        break;
    case 10:
        player.runScript("轉蛋商店");
        break;
    case 11:
        player.runScript("經驗製作");
        break;
    case 12:
        player.runScript("里程商店");
        break;
    case 50:
        player.runScript("本服菜單");
        break;
}
