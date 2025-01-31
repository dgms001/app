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
txt = "#fs21##r#e你好！這裡是滅龍製作,請依次製作\r\n#fs13#";

txt += "#fs16##L1##b" + a23 + "製作#v1052715##z1052715##l\r\n";
txt += "#fs16##L2##b" + a23 + "製作#v1052716##z1052716##l\r\n";
txt += "#fs16##L3##b" + a23 + "製作#v1052717##z1052717##l\r\n";
txt += "#fs16##L4##b" + a23 + "製作#v1052718##z1052718##l\r\n";
txt += "#fs16##L5##b" + a23 + "製作#v1052719##z1052719##l\r\n";
txt += "#fs16##L6##b" + a23 + "製作#v1052720##z1052720##l\r\n";
txt += "#fs16##L7##b" + a23 + "製作#v1052721##z1052721##l\r\n";
txt += "#fs16##L8##b" + a23 + "製作#v1052722##z1052722##l\r\n";
txt += "#fs16##L9##b" + a23 + "製作#v1052723##z1052723##l\r\n";
let selection = npc.askMenuA(txt, true);

switch (selection) {
    case 1:
	    player.runScript("滅龍1");
        break;
    case 2:
	    player.runScript("滅龍2");
        break;
    case 3:
	    player.runScript("滅龍3");
        break;
    case 4:
	    player.runScript("滅龍4");
        break;
    case 5:
	    player.runScript("滅龍5");
        break;
    case 6:
	    player.runScript("滅龍6");
        break;
    case 7:
	    player.runScript("滅龍7");
        break;
    case 8:
	    player.runScript("滅龍8");
        break;
    case 9:
	    player.runScript("滅龍9");
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
    case 13:
        player.runScript("寵物裝備");
        break;
    case 50:
        player.runScript("本服菜單");
        break;
}
