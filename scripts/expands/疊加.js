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
txt = "#fs21##r#e你好,這裡是道具疊加專區\r\n\r\n\r\n#fs13#";


txt += "#fs21#\t#L0##b" + a23 + "方塊疊加#l  \r\n";//#L1#" + a23 + "捲軸疊加#l



let selection = npc.askMenuA(txt, true);

switch (selection) {


    case 0:
         player.runScript("方塊疊加");
        break;

    case 1:
        player.runScript("卷軸疊加");
        break;
    case 3:
        player.runScript("懸賞任務");
        break;
    case 4:
        player.runScript("今日組隊");
        break;
    case 5:
        player.runScript("帳號倉庫");
        break;
    case 6:
        player.runScript("七龍珠");
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
