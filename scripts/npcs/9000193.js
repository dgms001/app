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



/*txt = "#fs21##e#r你好,這裡是勛章限時功能\r\n";

txt += "勛章使用後將變成限時30天,等級勛章過期後私訊GM補領\r\n";//#L8#" + a23 + "蒐集活動#l
txt += "你可以選擇下面幾種勛章進行附加\r\n";
txt += "#L0#使用#v2434617# 對 任意裝備進行附加#l\r\n\r\n"
txt += "#L4#使用#v2434616# 對 #v1142242#進行附加#l\r\n\r\n"
txt += "#L1#使用#v2434616# 對 #v1142906#進行附加#l\r\n\r\n"
txt += "#L2#使用#v2434616# 對 #v1142084#進行附加#l\r\n\r\n"
txt += "#L3#使用#v2434616# 對 #v1143012#進行附加#l\r\n\r\n"
let selection = npc.askMenuA(txt, true);

switch (selection) {


    case 0:
        player.runScript("無視");
        break;
    case 1:
        player.runScript("250");
        break;
    case 2:
        player.runScript("270");
        break;
    case 3:
        player.runScript("300");
        break;
    case 4:
        player.runScript("100");
        break;
    case 6:
        player.runScript("七龍珠");
        break;
    case 7:
        player.runScript("四選一答題");
        break;
    case 8:
        player.runScript("收集掉落物");
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
