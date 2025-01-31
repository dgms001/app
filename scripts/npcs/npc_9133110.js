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
txt += "\t\t\t#fs11##L1#" + f3 + "#b系統倉庫#l#L2#" + f2 + "未 開 放#l\r\n\r\n";
txt += "\t\t\t#fs11##L3#" + f3 + "#b收集廠商#l#L4#" + f2 + "裝備製作#l\r\n\r\n";
txt += "\t\t\t#fs11##L5#" + f3 + "#b附魔廠商#l#L6#" + f2 + "強化廠商#l\r\n\r\n";
txt += "\t\t\t#fs11##L7#" + f3 + "#b未 開 放#l#L8#" + f2 + "返回大廳#l\r\n\r\n";
txt += "\t\t\t\t#r#L9#" + f4 + "公會勛章領取處#l\r\n\r\n";
let selection = npc.askMenuS(txt, true);

switch (selection) {
    case 1:
        player.runNpc("npc_9270221");
        break;
    case 2:
        npc.say("該NPC尚未鏈接功能,耐心等待開啟");
        //player.runNpc("npc_9270217");
        break;
    case 3:
        player.runNpc("npc_9270215");
        break;
    case 4:
        player.runNpc("npc_9270220");
        break;
    case 5:
        player.runNpc("npc_9270218");
        break;
    case 6:
        player.runNpc("npc_9270214");
        break;
    case 7:
        npc.say("該NPC尚未鏈接功能,耐心等待開啟");
        //player.runNpc("npc_9270216");
        break;
    case 8:
        player.changeMap(876006000);
        break;
    case 9:
        player.runScript("會地勛章");
        break;
}
