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

var a10 = "#fEffect/ItemEff.img/1112013/1/5#" //爱心5-9
txt = "#fs21##r#e你好！在這裡可以領取各種福利\r\n";

txt += "#fs16##L1##b" + a10 + "在線禮物#l#L2#" + a10 + "等級禮物#l  #L3#" + a10 + "每日簽到#l\r\n\r\n";
txt += "#fs16##L4##b" + a10 + "累斗福利#l#L5#" + a10 + "GM禮物領取#l#L6#" + a10 + "簽到兌換#l\r\n\r\n";


let selection = npc.askMenuA(txt, true);

switch (selection) {
    case 1:
        player.runScript("在線獎勵");
        break;
    case 2:
        player.runScript("等級獎勵");
        break;
    case 3:
        player.runScript("签到");
        break;
    case 4:
        player.runScript("每日累計禮包");
        break;
    case 5:
        player.runScript("推文領取");
        break;
    case 6:
        player.runScript("签到兑换");
        break;
    case 7:
        player.runScript("其他雜物");
        break;
    case 8:
        player.runScript("副手商店");
        break;
    case 9:
        player.runScript("副手商店");
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
        player.runScript("每日累計禮包");
        break;
    case 50:
        player.runScript("本服菜單");
        break;
}
