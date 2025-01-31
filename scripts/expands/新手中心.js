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
txt += "#fs11##b#L1#" + f5 + "強裝副手#l\r\n\r\n";
if (player.getEventValue("萌新任務") < 7) {
    txt += "#L4#" + f2 + "萌新7天樂#l\r\n\r\n";
}
if (!player.isQuestCompleted(100001)) {
    txt += "#L2#" + f3 + "去除燈泡#l";
}
if (player.getPQLog("開ARC6") == 0) {
    txt += "#L3#" + f2 + "擴充秘法#l\r\n\r\n";
}

txt += "\t\t\t  #L50#返回選單#l\r\n\r\n";

let selection = npc.askMenuS(txt, true);

switch (selection) {
    case 1:
        player.runScript("裝備副手");
        break;
    case 2:
        if (player.isQuestCompleted(100001)) {
            npc.say("#fs15##b你已經消除過燈泡了！#r如果頭頂還顯示有燈泡，點擊頭頂燈泡領取任務即可！");
        } else {
            let A = npc.askYesNo("#fs15##b想要消除頭頂的燈泡任務嗎？我可以幫你完成大部分任務哦！");
            if (A == 1) {
                var Care = [100001, 63351, 58513, 63521, 63832,
                    61155, 56553, 16909, 16880, 64011, 64010, 34901, 23220,
                    22603, 22602, 22300, 62241, 7107, 19018, 35057, 35056,
                    29900,
                    29901, 29902, 29903, 36102, 2646, 17035, 34965, 35900, 31800, 35942, 57400, 57156, 57452,
                    32240, 32241, 32242, 32243, 32244, 32245, 32246, 63405, 36102, 57460, 57164, 500763, 63403, 63404, 57156, 57102, 63351, 59031, 59030, 62395, 62396, 22507, 35800];
                for (var ii in Care) {
                    player.completeQuest(Care[ii], 0);
                }
                player.addEventValue("燈泡點擊", 1, 3000);
                npc.say("已幫您消除燈泡！");
            }
        }
        break;
    case 3:
        player.runScript("一鍵開ARC6格");
        break;
    case 4:
        player.runScript("新手7天任務");
        break;
    case 50:
        player.runScript("本服菜單");
        break;

}
