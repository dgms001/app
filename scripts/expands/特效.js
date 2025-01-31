var status = -1
var txt;
/*------------------------------------------------------------*/
//var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
//var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用
var items = Array(
    Array(5010000, 300000, 1, ""),
    Array(5010001, 300000, 1, ""),
    Array(5010002, 300000, 1, ""),
    Array(5010003, 300000, 1, ""),
    Array(5010004, 300000, 1, ""),
    Array(5010005, 300000, 1, ""),
    Array(5010006, 300000, 1, ""),
    Array(5010007, 300000, 1, ""),
    Array(5010010, 300000, 1, ""),
    Array(5010011, 300000, 1, ""),
    Array(5010012, 300000, 1, ""),
    Array(5010013, 300000, 1, ""),
    Array(5010014, 300000, 1, ""),
    Array(5010016, 300000, 1, ""),
    Array(5010017, 300000, 1, ""),
    Array(5010018, 300000, 1, ""),
    Array(5010019, 300000, 1, ""),
    Array(5010020, 300000, 1, ""),
    Array(5010021, 300000, 1, ""),
    Array(5010022, 300000, 1, ""),
    Array(5010023, 300000, 1, ""),
    Array(5010024, 300000, 1, ""),
    Array(5010025, 300000, 1, ""),
    Array(5010026, 300000, 1, ""),
    Array(5010027, 300000, 1, ""),
    Array(5010028, 300000, 1, ""),
    Array(5010029, 300000, 1, ""),
    Array(5010030, 300000, 1, ""),
    Array(5010031, 300000, 1, ""),
    Array(5010032, 300000, 1, ""),
    Array(5010033, 300000, 1, ""),
    Array(5010036, 300000, 1, ""),
    Array(5010038, 300000, 1, ""),
    Array(5010039, 300000, 1, ""),
    Array(5010041, 300000, 1, ""),
    Array(5010042, 300000, 1, ""),
    Array(5010043, 300000, 1, ""),
    Array(5010044, 300000, 1, ""),
    Array(5010045, 300000, 1, ""),
    Array(5010047, 300000, 1, ""),
    Array(5010055, 300000, 1, ""),
    Array(5010078, 300000, 1, ""),
    Array(5010079, 300000, 1, ""),
    Array(5010191, 300000, 1, ""),

    Array(5010035, 300000, 365, "365天"),
    Array(5010050, 300000, 365, "365天"),
    Array(5010051, 300000, 365, "365天"),
    Array(5010052, 300000, 365, "365天"),
    Array(5010053, 300000, 365, "365天"),
    Array(5010054, 300000, 365, "365天"),
    Array(5010056, 300000, 365, "365天"),
    Array(5010057, 300000, 365, "365天"),
    Array(5010059, 300000, 365, "365天"),
    Array(5010060, 300000, 365, "365天"),
    Array(5010061, 300000, 365, "365天"),
    Array(5010064, 300000, 365, "365天"),
    Array(5010065, 300000, 365, "365天"),
    Array(5010066, 300000, 365, "365天"),
    Array(5010067, 300000, 365, "365天"),
    Array(5010068, 300000, 365, "365天"),
    Array(5010069, 300000, 365, "365天"),
    Array(5010070, 300000, 365, "365天"),
    Array(5010071, 300000, 365, "365天"),
    Array(5010073, 300000, 365, "365天"),
    Array(5010074, 300000, 365, "365天"),
    Array(5010080, 300000, 365, "365天"),
    Array(5010081, 300000, 365, "365天"),
    Array(5010082, 300000, 365, "365天"),
    Array(5010083, 300000, 365, "365天"),
    Array(5010100, 300000, 365, "365天"),
    Array(5010101, 300000, 365, "365天"),
    Array(5010105, 300000, 365, "365天"),
    Array(5010106, 300000, 365, "365天"),
    Array(5010107, 300000, 365, "365天"),
    Array(5010108, 300000, 365, "365天"),
    Array(5010109, 300000, 365, "365天"),
    Array(5010110, 300000, 365, "365天"),
    Array(5010111, 300000, 365, "365天"),
    Array(5010112, 300000, 365, "365天"),
);

//txt = "" + GC1 + GC1 + GC1 + GC1 + "\r\n";
txt = "\r\n";
txt += "#e#fs21##r你好,這裡是特效商店!!!\r\n#n";


for (var i = 1; i < items.length; i++) {
    txt += "#L" + i + "##e#fs16##b#v" + items[i][0] + "# #b#z" + items[i][0] + "##b#e #r" + items[i][1] + " #b楓點 " + items[i][3] + "#n\r\n";
}
let selection = npc.askMenuA(txt);
i = selection;

if (items[i][3] == "1天") {
    selection = npc.askNumber("購買道具為：#v" + items[i][0] + "# #z" + items[i][0] + "##k\r\n10000楓點等於1天\r\n請輸入想購買的天數：", 1, 1, 30);
} else {
    npc.say("購買道具為：#v" + items[i][0] + "# #z" + items[i][0] + "# 1個");
    selection = 1;
}

if (i) {
    GS = selection;
    QSS = GS * items[i][1];
    if (player.getCashShopCurrency(2) < QSS) {
        npc.say("#fs16##b#e楓葉點數不足，無法購買");
    } else {
        player.showSystemMessage("消耗 [ " + (QSS) + " ] 楓點");
        player.modifyCashShopCurrency(2, -QSS);
        //player.gainItem(items[i][0], items[i][2] * GS);
        gainItemPeriod(items[i][0], items[i][2], items[i][3], GS)
        //player.addAccountEventValue(items[i][3], GS);
        npc.say("#fs16##b#e購買成功");
    }
}


function gainItemPeriod(itemid, quantity, AA, times) {
    time = 1000 * 60 * 60 * 24 * 1 * times;
    if (AA == "1天") { //符合範圍
        for (var i = 0; i < quantity; i++) {
            let newItem = player.makeItemWithId(itemid);
            if (time != 0) {
                newItem.setExpiration(new Date().getTime() + time);
            }

            player.gainItem(newItem);
            //npc.sayS("獲得時限道具");
        }
    } else {
        let newItem = player.makeItemWithId(itemid);
        player.gainItem(newItem);
        //npc.sayS("不符合");
    }
}