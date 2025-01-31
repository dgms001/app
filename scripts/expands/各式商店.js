/* 圓夢谷 TMS 237 萬能菜單 */
var status = -1
var txt;
/*------------------------- 表情符號 -------------------------*/
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var tt = "#fEffect/CharacterEff/1082565/0/0#"; //餅幹兔子
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"
var a10 = "#fEffect/ItemEff.img/1102919/effect/default/0#" //小黄鸭车0-7

txt = "#fs21##r#e你好！在這裡可以選擇你想要購買的物品\r\n";

txt += "#fs16##L1##b" + tt + "雜貨商店#l#L2#" + tt + "楓點商店#l#L3#" + tt + "BUFF商店#l#L4##b" + tt + "字型商店#l#L5#" + tt + "副手商店#l\r\n\r\n";
txt += "#fs16##L6#" + tt + "推文商店#l#L7#" + tt + "廣播商店#l#L8#" + tt + "飛鏢特效#l#L14#" + tt + "人物特效#l#L9#" + tt + "寵裝商店#l\r\n\r\n";

txt += "#L10#" + tt + "航海兌換#l#L11#" + tt + "神秘兌換#l#L12#" + tt + "漆黑兌換#l#L13#" + tt + "培羅德兌換#l\r\n\r\n";
txt += "#L15#" + tt + "封印創世#l#L16#" + tt + "解封創世#l\r\n\r\n";

let selection = npc.askMenuA(txt, true);

switch (selection) {
    case 1:
        npc.sendShop(9330194);//1001000
        break;
    case 2:
        player.runScript("楓點商店");
        //npc.sendShop(1011001);
        break;
    case 3:
        player.runScript("buff商店");
        break;
    case 4:
        player.runScript("家具商店");
        break;
    case 5:
        player.runScript("副手商店");
        break;
    case 6:
        player.runScript("推文幣商店");
        break;
    case 7:
        player.runScript("廣播商店");
        break;
    case 8:
        player.runScript("特效商店");
        break;
    case 9:
        player.runScript("寵物裝");
        break;
    case 10:
        player.runScript("航海兌換");
        break;
    case 11:
        player.runScript("神秘兌換");
        break;
    case 12:
        player.runScript("漆黑兌換");
        break;
    case 13:
        player.runScript("培羅德兌換");
        break;
    case 14:
        player.runScript("特效");
        break;
    case 15:
        player.runScript("封印創世兌換");
        break;
		    case 16:
        player.runScript("創世兌換");
        break;
    case 50:
        player.runScript("本服菜單");
        break;
}
