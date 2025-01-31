var status = -1
var txt;
/*------------------------------------------------------------*/
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"
var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用
var items = Array(
    Array(5062017, 1000000, 1, "楓點商店-強化商店[閃耀方塊]"),
    Array(2500001, 500, 1, "SP重置捲軸"),
	 Array(2501000, 500, 1, "AP重置捲軸"),
    Array(5062800, 500, 1, "奇幻傳播者"),
    Array(2470003, 5000, 1, "黃金鐵鎚100%"),
    //Array(2049625, 300000, 1, "楓點商店-強化商店[完美回真卷軸50%]"),
    Array(2049401, 2000, 1, "潛在能力卷軸70%"),
    Array(2048309, 3000, 1, "附加潛在能力賦予卷軸60%"),
    Array(2049506, 3000, 1, "完美烙印印章100%"),
    Array(2048228, 5000, 1, "銀光附加烙印的印章60%"),
	Array(2048739, 3000, 1, "超越的輪迴星火"),
    Array(2049031, 2000, 1, "純白卷軸20%"),
	
    //Array(2049501, 20000, 1, "楓點商店-強化商店[銀烙印的印章50%]"),
    Array(2710000, 7500, 1, "可疑的方塊"),
    Array(5062017, 2500, 1, "閃耀方塊"),
    //Array(5062019, 5000, 1, "楓點商店-強化商店[閃耀鏡射方塊]"),
    Array(5062020, 4000, 1, "閃炫方塊"),
    Array(5062500, 8000, 1, "附加方塊"),
    Array(5743003, 1250, 1, "萌獸方塊"),
    Array(2049606, 1000, 1, "回真卷軸50%")
    //Array(2631487, 20000, 1, "楓點商店-強化商店[卷軸合成裝置]")
    //Array(5064501, 10000, 1, "楓點商店-強化商店[黑色輪迴星火]"),
    //Array(4132001, 5000, 1, "楓點商店-強化商店[女神之力-潛能之鎖]"),


);

txt = "Welcome to the special trip              " + a38 + "\r\n";

txt += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n"
txt += "#fs12##b";
for (var i = 1; i < items.length; i++) {
    txt += "#L" + i + "##b#e#v" + items[i][0] + "# #k" + items[i][3] + "#b #r" + items[i][1] + " #b楓點#n\r\n";
}
let selection = npc.askMenu(txt, 9062453);
i = selection;
selection = npc.askNumber("購買道具為：#v" + items[i][0] + "# #z" + items[i][0] + "##k\r\n請輸入購買個數：", 1, 1, 999);

if (i) {
    GS = selection;
    QSS = GS * items[i][1];
    if (player.getCashShopCurrency(2) < QSS) {
        npc.say("#fs16##b#e楓葉點數不足，無法購買");
    } else if (player.getFreeSlots(2) >= 1 || player.getFreeSlots(5) >= 1) {
        player.showSystemMessage("消耗 [ " + (QSS) + " ] 楓點");
        player.modifyCashShopCurrency(2, -QSS);
        player.gainItem(items[i][0], items[i][2] * GS);
        //player.addAccountEventValue(items[i][3], GS);
        npc.say("#fs16##b#e購買成功");
        player.runScript("強化商店");
    } else {
        npc.say("#fs16##b#e欄位保留1格以上再購買");
    }
}