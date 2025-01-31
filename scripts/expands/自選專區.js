var status = 0;
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"
var d1 = "#fUI/UIWindow2.img/Arbeit/44#" //自选点装
var d2 = "#fUI/UIWindow2.img/Arbeit/45#" //自选发型
var d3 = "#fUI/UIWindow2.img/Arbeit/46#" //自选机器人
var d4 = "#fUI/UIWindow2.img/Arbeit/47#" //自选脸型
var d5 = "#fUI/UIWindow2.img/Arbeit/48#" //自选皮肤
var d6 = "#fUI/UIWindow2.img/Arbeit/7#" //返回选单
var d7 = "#fUI/UIWindow2.img/Arbeit/86#" //时装转换
var d9 = "#fUI/UIWindow2.img/Arbeit/177#" //代碼查詢
var d8 = "#fUI/UIWindow2.img/Arbeit/88#" //拯救角色
txt = "Welcome to the special trip              " + a38 + "\r\n";

txt += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n"
txt += "\t\t\t\t\t#fs11##L1#" + f4 + "#b代碼查詢#l\r\n\r\n";
txt += "#fs11#\t#L3#" + f4 + "#b髮型自選#l  #L4#" + f2 + "臉型自選#l  #L5#" + f5 + "皮膚自選#l\r\n\r\n";
txt += "#fs11#\t#L6#" + f4 + "#b點裝自選#l  #L7#" + f2 + "卡角拯救#l  #L2#" + f5 + "機器人自選#l\r\n\r\n";
txt += "\r\n\t\t\t      #r#L10#返回選單#l\r\n\r\n";

let selection = npc.askMenuS(txt, true);
if (selection == 1) {
    let url = "https://forum.gamer.com.tw/G2.php?bsn=7650&sn=6102";
    player.addEventValue("檢測總次數", 1, 999);
    player.addEventValue("檢測次數", 1, 1);
    player.openURL(url);
} else if (selection == 2) {
    player.runScript("機器人造型自選");
} else if (selection == 3) {
    player.runScript("自選髮型");
} else if (selection == 4) {
    player.runScript("自選臉型");
} else if (selection == 5) {
    player.runScript("自選皮膚");
} else if (selection == 6) {
    player.runScript("自選時裝");
} else if (selection == 7) {
    player.runScript("拯救角色");
} else if (selection == 10) {
    player.runScript("本服菜單");
}
