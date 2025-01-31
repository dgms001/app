var status = -1
var txt;
/*------------------------------------------------------------*/
var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用
var randList = Array(
    Array(Math.floor(300), //力量
        Math.floor(300), //敏捷
        Math.floor(300), //智力
        Math.floor(300), //幸運
        Math.floor(5000), //Hp
        Math.floor(150), //攻擊力
        Math.floor(150), //魔法攻擊力
        Math.floor(25), //BOSS攻擊時傷害
        Math.floor(25), //無視怪物防禦力
        Math.floor(25), //總傷害
    )
);
var items = Array(
    Array(1113196, 2000, 1, "樂豆商店-升階成品[強力的魔性戒指]"),
    Array(1113196, 2000, 1, "樂豆商店-升階成品[強力的魔性戒指]"),
    Array(1190544, 2000, 1, "樂豆商店-升階成品[覺醒的記憶徽章]"),
    Array(1182285, 3000, 1, "樂豆商店-升階成品[創世的胸章]"),
    Array(1672075, 3000, 1, "樂豆商店-升階成品[M-DAY機器心臟]")
);

txt = "" + GC1 + GC1 + GC1 + GC1 + "\r\n";
txt += "\t\t\t\t\t#e#fs26##fc0xFF43EABE#【升階成品】\r\n#n";
txt += "" + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + "";
txt += "#b#e#fs17#下方成品:全屬性+300 ADAP+150 HP+5000 B傷總傷無視+25%#n\r\n";
txt += "#fs16##b";
for (var i = 1; i < items.length; i++) {
    txt += "#L" + i + "##b#e購買【#v" + items[i][0] + "# #g#z" + items[i][0] + "##b】 價格：#r[" + items[i][1] + "] #b樂豆點數#n\r\n";
}
let selection = npc.askMenuA(txt, true);
i = selection;
selection = npc.askNumber("購買道具為：#v" + items[i][0] + "# #z" + items[i][0] + "##k\r\n請輸入購買個數：", 1, 1, 1);

if (i) {
    GS = selection;
    QSS = GS * items[i][1];
    if (player.getCashShopCurrency(1) < QSS) {
        npc.say("#fs16##b#e樂豆點數不足，無法購買");
    } else {
        player.modifyCashShopCurrency(1, -QSS);
        let newItem = player.makeItemWithId(items[i][0]);
        newItem.setStr(300);
        newItem.setDex(300);
        newItem.setInt(300);
        newItem.setLuk(300);
        newItem.setMaxHp(5000);
        newItem.setPad(150);
        newItem.setMad(150);
        newItem.setBossDamageR(25);
        newItem.setIgnorePDR(25);
        newItem.setDamR(25);
        player.gainItem(newItem);
        player.addEventValue("累積消耗樂豆點數", QSS, 999)
        npc.say("#fs16##b#e購買成功");
    }
}