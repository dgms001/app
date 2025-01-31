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
txt = "#fs21##r#e你好,這裡是每日任務\r\n\r\n#fs13#";


txt += "#fs16##L1##b" + a23 + "委託任務#l#L0#" + a23 + "每日任務#l#L3#" + a23 + "物品懸賞#l#L4#" + a23 + "每日組隊#l\r\n";
txt += "#L6#" + a23 + "七龍珠#l  #L7#" + a23 + "智腦比拼#l #L12#" + a23 + "世界王#l #L13#" + a23 + "等級修煉#l\r\n";//#L8#" + a23 + "蒐集活動#l
txt += "#L9#" + a23 + "第一次同行#l  #L10#" + a23 + "玩具101#l  #L11#" + a23 + "逃脫#l\r\n\r\n";//#L8#" + a23 + "蒐集活動#l
txt += "\t\t\t\t#L5#" + a23 + "每日材料倉庫#l\r\n\r\n"

let selection = npc.askMenuA(txt, true);

switch (selection) {


    case 0:
        player.runScript("每日必做");
        break;
    case 1:
        player.runScript("每日委託");
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
    case 7:
        player.runScript("四選一答題");
        break;
    case 8:
        player.runScript("收集掉落物");
        break;
    case 9:
        player.runScript("廢棄入場");
        break;
    case 10:
        player.runScript("玩具城入場");
        break;
    case 11:
        player.runScript("逃脫入場");
        break;
    case 12:
        player.runScript("世界王");
        break;
    case 13:
        player.runScript("降等");
        break;
    case 15:
        player.runScript("漆黑兌換");
        break;
    case 50:
        player.runScript("本服菜單");
        break;
}
