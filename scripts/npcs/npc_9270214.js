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
txt += "#L1#" + f4 + "#fc0xFF2FBC71#深淵防具強化#l#L2#" + f2 + "#fc0xFFFF8F54#深淵武器強化#l#L3#" + f5 + "#fc0xFF29928F#通用強化#l\r\n\r\n";
txt += "#L4#" + f4 + "#fc0xFF2FBC71#航海防具強化#l#L5#" + f2 + "#fc0xFFFF8F54#航海武器強化#l#L6#" + f5 + "#fc0xFF29928F#副手強化#l\r\n\r\n";
txt += "#L7#" + f4 + "#fc0xFF2FBC71#神秘防具強化#l#L8#" + f2 + "#fc0xFFFF8F54#神秘武器強化#l#L9#" + f5 + "#fc0xFF29928F#歐皇捲軸#l\r\n\r\n";
//txt += "#L11#" + f2 + "#fc0xFFFF8F54# 培羅德強化 #l#L12#" + f5 + "#fc0xFF29928F#XX強化#l\r\n\r\n";#L17#" + f5 + "#fc0xFF29928F#活動強化#l
txt += "#L11#" + f4 + "#fc0xFF2FBC71# 培羅德強化 #l#L16#" + f2 + "#fc0xFFFF8F54#魔法馬車強化#l#L10#" + f5 + "#fc0xFF2FBC71#漆黑強化#l\r\n\r\n";
txt += "#L13#" + f4 + "#fc0xFF2FBC71#  裝備分解  #l#L14#" + f2 + "#fc0xFFFF8F54#  卷軸升級  #l#L15#" + f5 + "#fc0xFF29928F#輪迴強化#l\r\n\r\n";
txt += "\t\t\t\t  #fs14##e#fc0xFF66CCCC##L20#返回選單#l\r\n\r\n";


let selection = npc.askMenuS(txt, true);

switch (selection) {
    case 1:
        player.runScript("深淵防具強化");
        break;
    case 2:
        player.runScript("深淵武器強化");
        break;
    case 3:
        player.runScript("通用強化");
        break;
    case 4:
        player.runScript("航海防具強化");
        break;
    case 5:
        player.runScript("航海武器強化");
        break;
    case 6:
        player.runScript("副手強化");
        break;
    case 7:
        player.runScript("神秘防具強化");
        break;
    case 8:
        player.runScript("神秘武器強化");
        break;
    case 9:
        player.runScript("點裝強化");
        break;
    case 10:
        player.runScript("漆黑強化");
        break;
    case 11:
        player.runScript("培羅德強化");
        break;
    case 12:
        player.runScript("XX強化");
        break;
    case 13:
        player.runScript("裝備分解");
        break;
    case 14:
        player.runScript("卷軸升級");
        break;
    case 15:
        player.runScript("輪迴強化");
        break;
    case 16:
        player.runScript("馬車強化");
        break;
    case 17:
        player.runScript("活動強化");
        break;
    case 20:
        player.runScript("本服菜單");
        break;

}
