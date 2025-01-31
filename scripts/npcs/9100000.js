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
var a10 = "#fEffect/ItemEff.img/1102919/effect/default/0#" //小黄鸭车0-7
var f1 = "#fUI/CashShop/CSBeauty/hairColor/Enable/0#"
var qq1 = "#fUI/EventShop/adventureShop/GradeBuyer/0#"
var s1 = "#fUI/CashShop/CSBeauty/hairColor/Disable/0#"
var a23 = "#fEffect/ItemEff.img/1005254/effect/default/4#" //蓝色中小星星
txt = "#fs21##r#e你好,這裡是卷軸升級中心!!!\r\n\r\n\r\n#fs13#";


txt += "#fs16#\t#L0##b" + a23 + "R系列卷升級X系列#l  #L1#" + a23 + "X系列卷升級V系列#l\r\n\r\n";


txt += "\t#L2#" + a23 + "V系列卷升級B系列#l  #L3#" + a23 + "B系列卷升級命運系列#l\r\n\r\n"

let selection = npc.askMenuA(txt, true);

switch (selection) {


    case 0:
        player.runScript("R合X");
        break;
    case 1:
        player.runScript("X合V");
        break;
    case 2:
        player.runScript("V合B");
        break;
    case 3:
        player.runScript("B合Y");
        break;
    case 5:
        player.runScript("帳號倉庫");
        break;
    case 11:
        player.runScript("滅龍");
        break;
    case 12:
        player.runScript("輪迴碑石強化");
        break;
    case 13:
        player.runScript("航海兌換");
        break;
		    case 14:
        player.runScript("神秘兌換");
        break;
		    case 15:
        player.runScript("漆黑兌換");
        break;
    case 50:
        player.runScript("本服菜單");
        break;
}
