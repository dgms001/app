var status = -1
var txt;
/*------------------------------------------------------------*/
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用
var items = Array(
    Array(1140000, 500000, 1, "勛章"),
    Array(1142900, 80000, 1, "勛章"),
    Array(1142902, 80000, 1, "勛章"),
    Array(1142903, 80000, 1, "勛章"),
    Array(1142904, 80000, 1, "勛章"),
    Array(1142905, 80000, 1, "勛章"),
    Array(1142906, 80000, 1, "勛章"),
    Array(1142907, 80000, 1, "勛章"),
    Array(1142908, 80000, 1, "勛章"),
    Array(1142909, 80000, 1, "勛章"),
    Array(1142910, 80000, 1, "勛章"),
    Array(1142915, 80000, 1, "勛章"),
    Array(1142916, 80000, 1, "勛章"),
    Array(1142917, 80000, 1, "勛章"),
    Array(1142918, 80000, 1, "勛章"),
    Array(1142919, 80000, 1, "勛章"),
    Array(1142920, 80000, 1, "勛章"),
    Array(1142921, 80000, 1, "勛章"),
    Array(1142922, 80000, 1, "勛章"),
    Array(1142923, 80000, 1, "勛章"),
    Array(1142924, 80000, 1, "勛章"),
    Array(1142925, 80000, 1, "勛章"),
    Array(1142927, 80000, 1, "勛章"),
    Array(1142928, 80000, 1, "勛章"),
    Array(1142929, 80000, 1, "勛章"),
    Array(1142930, 80000, 1, "勛章"),
    Array(1142931, 80000, 1, "勛章"),
    Array(1142932, 80000, 1, "勛章"),
    Array(1142933, 80000, 1, "勛章"),
    Array(1142934, 80000, 1, "勛章"),
    Array(1142935, 80000, 1, "勛章"),
    Array(1142936, 80000, 1, "勛章"),
    Array(1142937, 80000, 1, "勛章"),
    Array(1142938, 80000, 1, "勛章"),
    Array(1142939, 80000, 1, "勛章"),
    Array(1142940, 80000, 1, "勛章"),
    Array(1142941, 80000, 1, "勛章"),
    Array(1142942, 80000, 1, "勛章"),
    Array(1142943, 80000, 1, "勛章"),
    Array(1142944, 80000, 1, "勛章"),
    Array(1142945, 80000, 1, "勛章"),
    Array(1142946, 80000, 1, "勛章"),
    Array(1142947, 80000, 1, "勛章"),
    Array(1142948, 80000, 1, "勛章"),
    Array(1142949, 80000, 1, "勛章"),
    Array(1142953, 80000, 1, "勛章"),
    Array(1142954, 80000, 1, "勛章"),
    Array(1142955, 80000, 1, "勛章"),
    Array(1142957, 80000, 1, "勛章"),
    Array(1142958, 80000, 1, "勛章"),
    Array(1142959, 80000, 1, "勛章"),
    Array(1142960, 80000, 1, "勛章"),
    Array(1142961, 80000, 1, "勛章"),
    Array(1142962, 80000, 1, "勛章"),
    Array(1142963, 80000, 1, "勛章"),
    Array(1142964, 80000, 1, "勛章"),
    Array(1142965, 80000, 1, "勛章"),
    Array(1142966, 80000, 1, "勛章"),
    Array(1142967, 80000, 1, "勛章"),
    Array(1142968, 80000, 1, "勛章"),
    Array(1142969, 80000, 1, "勛章"),
    Array(1142970, 80000, 1, "勛章"),
    Array(1142971, 80000, 1, "勛章"),
    Array(1142972, 80000, 1, "勛章"),
    Array(1142973, 80000, 1, "勛章"),
    Array(1142974, 80000, 1, "勛章"),
    Array(1142975, 80000, 1, "勛章"),
    Array(1142976, 80000, 1, "勛章"),
    Array(1142977, 80000, 1, "勛章"),
    Array(1142978, 80000, 1, "勛章"),
    Array(1142979, 80000, 1, "勛章"),
    Array(1142981, 80000, 1, "勛章"),
    Array(1142984, 80000, 1, "勛章"),
    Array(1142985, 80000, 1, "勛章"),
    Array(1142986, 80000, 1, "勛章"),
    Array(1142987, 80000, 1, "勛章"),
    Array(1142988, 80000, 1, "勛章"),
    Array(1142989, 80000, 1, "勛章"),
    Array(1142990, 80000, 1, "勛章"),
    Array(1142991, 80000, 1, "勛章"),
    Array(1142992, 80000, 1, "勛章"),
    Array(1142996, 80000, 1, "勛章"),
    Array(1142997, 80000, 1, "勛章"),
    Array(1142998, 80000, 1, "勛章"),
    Array(1143000, 80000, 1, "勛章"),
    Array(1143003, 80000, 1, "勛章"),
    Array(1143005, 80000, 1, "勛章"),
    Array(1143007, 80000, 1, "勛章"),
    Array(1143008, 80000, 1, "勛章"),
    Array(1143009, 80000, 1, "勛章"),
    Array(1143010, 80000, 1, "勛章"),
    Array(1143011, 80000, 1, "勛章"),
    Array(1143012, 80000, 1, "勛章"),
    Array(1143013, 80000, 1, "勛章"),
    Array(1143014, 80000, 1, "勛章"),
    Array(1143015, 80000, 1, "勛章"),
    Array(1143016, 80000, 1, "勛章"),
    Array(1143017, 80000, 1, "勛章"),
    Array(1143018, 80000, 1, "勛章"),
    Array(1143019, 80000, 1, "勛章"),
    Array(1143020, 80000, 1, "勛章"),
    Array(1143021, 80000, 1, "勛章"),
    Array(1143022, 80000, 1, "勛章"),
    Array(1143023, 80000, 1, "勛章"),
    Array(1143024, 80000, 1, "勛章"),
    Array(1143025, 80000, 1, "勛章"),
    Array(1143026, 80000, 1, "勛章"),
    Array(1143029, 80000, 1, "勛章"),
    Array(1143030, 80000, 1, "勛章"),
    Array(1143031, 80000, 1, "勛章"),
    Array(1143032, 80000, 1, "勛章"),
    Array(1143033, 80000, 1, "勛章"),
    Array(1143035, 80000, 1, "勛章"),
    Array(1143037, 80000, 1, "勛章"),
    Array(1143038, 80000, 1, "勛章"),
    Array(1143039, 80000, 1, "勛章"),
    Array(1143040, 80000, 1, "勛章"),
    Array(1143042, 80000, 1, "勛章"),
    Array(1143043, 80000, 1, "勛章"),
    Array(1143044, 80000, 1, "勛章"),
    Array(1143045, 80000, 1, "勛章"),
    Array(1143046, 80000, 1, "勛章"),
    Array(1143049, 80000, 1, "勛章"),
    Array(1143050, 80000, 1, "勛章"),
    Array(1143052, 80000, 1, "勛章"),
    Array(1143053, 80000, 1, "勛章"),
    Array(1143054, 80000, 1, "勛章"),
    Array(1143055, 80000, 1, "勛章"),
    Array(1143056, 80000, 1, "勛章"),
    Array(1143057, 80000, 1, "勛章"),
    Array(1143059, 80000, 1, "勛章"),
    Array(1143061, 80000, 1, "勛章"),
    Array(1143064, 80000, 1, "勛章"),
    Array(1143065, 80000, 1, "勛章"),
    Array(1143066, 80000, 1, "勛章"),
    Array(1143067, 80000, 1, "勛章"),
    Array(1143068, 80000, 1, "勛章"),
    Array(1143069, 80000, 1, "勛章"),
    Array(1143070, 80000, 1, "勛章"),
    Array(1143071, 80000, 1, "勛章"),
    Array(1143072, 80000, 1, "勛章"),
    Array(1143073, 80000, 1, "勛章"),
    Array(1143074, 80000, 1, "勛章"),
    Array(1143075, 80000, 1, "勛章"),
    Array(1143076, 80000, 1, "勛章"),
    Array(1143077, 80000, 1, "勛章"),
    Array(1143078, 80000, 1, "勛章"),
    Array(1143079, 80000, 1, "勛章"),
    Array(1143080, 80000, 1, "勛章"),
    Array(1143081, 80000, 1, "勛章"),
    Array(1143082, 80000, 1, "勛章"),
    Array(1143083, 80000, 1, "勛章"),
    Array(1143084, 80000, 1, "勛章"),
    Array(1143085, 80000, 1, "勛章"),
    Array(1143086, 80000, 1, "勛章"),
    Array(1143089, 80000, 1, "勛章"),
    Array(1143090, 80000, 1, "勛章"),
    Array(1143091, 80000, 1, "勛章"),
    Array(1143092, 80000, 1, "勛章"),
    Array(1143094, 80000, 1, "勛章"),
    Array(1143095, 80000, 1, "勛章"),
    Array(1143096, 80000, 1, "勛章"),
    Array(1143097, 80000, 1, "勛章"),
    Array(1143098, 80000, 1, "勛章"),
    Array(1143099, 80000, 1, "勛章"),
    Array(1143100, 80000, 1, "勛章"),
    Array(1143101, 80000, 1, "勛章"),
    Array(1143102, 80000, 1, "勛章"),
    Array(1143105, 80000, 1, "勛章"),
    Array(1143106, 80000, 1, "勛章"),
    Array(1143109, 80000, 1, "勛章"),
    Array(1143111, 80000, 1, "勛章"),
    Array(1143112, 80000, 1, "勛章"),
    Array(1143114, 80000, 1, "勛章"),
    Array(1143115, 80000, 1, "勛章"),
    Array(1143116, 80000, 1, "勛章"),
    Array(1143117, 80000, 1, "勛章"),
    Array(1143118, 80000, 1, "勛章"),
    Array(1143119, 80000, 1, "勛章"),
    Array(1143120, 80000, 1, "勛章"),
    Array(1143121, 80000, 1, "勛章"),
    Array(1143122, 80000, 1, "勛章"),
    Array(1143123, 80000, 1, "勛章"),
    Array(1143124, 80000, 1, "勛章"),
    Array(1143125, 80000, 1, "勛章"),
    Array(1143126, 80000, 1, "勛章"),
    Array(1143127, 80000, 1, "勛章"),
    Array(1143128, 80000, 1, "勛章"),
    Array(1143129, 80000, 1, "勛章"),
    Array(1143130, 80000, 1, "勛章"),
    Array(1143131, 80000, 1, "勛章"),
    Array(1143135, 80000, 1, "勛章"),
    Array(1143136, 80000, 1, "勛章"),
    Array(1143137, 80000, 1, "勛章"),
    Array(1143139, 80000, 1, "勛章"),
    Array(1143140, 80000, 1, "勛章"),
    Array(1143141, 80000, 1, "勛章"),
    Array(1143142, 80000, 1, "勛章"),
    Array(1143149, 80000, 1, "勛章"),
    Array(1143150, 80000, 1, "勛章"),
    Array(1143151, 80000, 1, "勛章"),
    Array(1143153, 80000, 1, "勛章"),
    Array(1143154, 80000, 1, "勛章"),
    Array(1143157, 80000, 1, "勛章"),
    Array(1143158, 80000, 1, "勛章"),
    Array(1143159, 80000, 1, "勛章"),
    Array(1143160, 80000, 1, "勛章"),
    Array(1143161, 80000, 1, "勛章"),
    Array(1143162, 80000, 1, "勛章"),
    Array(1143163, 80000, 1, "勛章"),
    Array(1143164, 80000, 1, "勛章"),
    Array(1143165, 80000, 1, "勛章"),
    Array(1143167, 80000, 1, "勛章"),
    Array(1143169, 80000, 1, "勛章"),
    Array(1143174, 80000, 1, "勛章"),
    Array(1143179, 80000, 1, "勛章"),
    Array(1143180, 80000, 1, "勛章"),
    Array(1143181, 80000, 1, "勛章"),
    Array(1143182, 80000, 1, "勛章"),
    Array(1143183, 80000, 1, "勛章"),
    Array(1143185, 80000, 1, "勛章"),
    Array(1143194, 80000, 1, "勛章"),
    Array(1143195, 80000, 1, "勛章"),
    Array(1143196, 80000, 1, "勛章"),
    Array(1143197, 80000, 1, "勛章"),
    Array(1143198, 80000, 1, "勛章"),
    Array(1143199, 80000, 1, "勛章"),
    Array(1143203, 80000, 1, "勛章"),
    Array(1143208, 80000, 1, "勛章"),
    Array(1143210, 80000, 1, "勛章"),
    Array(1143211, 80000, 1, "勛章"),
    Array(1143215, 80000, 1, "勛章"),
    Array(1143216, 80000, 1, "勛章"),
    Array(1143217, 80000, 1, "勛章"),
    Array(1143218, 80000, 1, "勛章"),
    Array(1143219, 80000, 1, "勛章"),
    Array(1143220, 80000, 1, "勛章"),
    Array(1143221, 80000, 1, "勛章"),
    Array(1143222, 80000, 1, "勛章"),
    Array(1143223, 80000, 1, "勛章"),
    Array(1143224, 80000, 1, "勛章"),
    Array(1143225, 80000, 1, "勛章"),
    Array(1143228, 80000, 1, "勛章"),
    Array(1143229, 80000, 1, "勛章"),
    Array(1143230, 80000, 1, "勛章"),
    Array(1143231, 80000, 1, "勛章"),
    Array(1143232, 80000, 1, "勛章"),
    Array(1143233, 80000, 1, "勛章"),
    Array(1143236, 80000, 1, "勛章"),
    Array(1143238, 80000, 1, "勛章"),
    Array(1143239, 80000, 1, "勛章"),
    Array(1143240, 80000, 1, "勛章"),
    Array(1143242, 80000, 1, "勛章"),
    Array(1143243, 80000, 1, "勛章"),
    Array(1143244, 80000, 1, "勛章"),
    Array(1143246, 80000, 1, "勛章"),
    Array(1143247, 80000, 1, "勛章"),
    Array(1143248, 80000, 1, "勛章"),
    Array(1143249, 80000, 1, "勛章"),
    Array(1143250, 80000, 1, "勛章"),
    Array(1143251, 80000, 1, "勛章"),
    Array(1143254, 80000, 1, "勛章"),
    Array(1143255, 80000, 1, "勛章"),
    Array(1143258, 80000, 1, "勛章"),
    Array(1143259, 80000, 1, "勛章"),
    Array(1143266, 80000, 1, "勛章"),
    Array(1143267, 80000, 1, "勛章"),
    Array(1142914, 80000, 1, "勛章"),
);

txt = "Welcome to the special trip              " + a38 + "\r\n";

txt += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n"

txt += "#fs12##b該商店販賣的是無屬性勛章\r\n#n";
txt += "#fs12##b如果買的勛章鉆不了就換別的,屬於正常現象\r\n#n";


//txt += "" + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + "";
txt += "#fs12##b";
for (var i = 1; i < items.length; i++) {
    txt += "#L" + i + "##b#e#v" + items[i][0] + "# #k" + items[i][3] + "#b #r" + items[i][1] + " #b楓點#n\r\n";
}
let selection = npc.askMenu(txt, 9062453);
i = selection;
selection = npc.askNumber("購買道具為：#v" + items[i][0] + "# #z" + items[i][0] + "##k\r\n請輸入購買個數：", 1, 1, 1);

if (i) {
    GS = selection;
    QSS = GS * items[i][1];
    if (player.getCashShopCurrency(2) < QSS) {
        npc.say("#fs16##b#e楓葉點數不足，無法購買");
    } else {
        player.showSystemMessage("消耗 [ " + (QSS) + " ] 楓點");
        player.modifyCashShopCurrency(2, -QSS);
        let newItem = player.makeItemWithId(items[i][0]);
        newItem.setStr(0);
        newItem.setDex(0);
        newItem.setInt(0);
        newItem.setLuk(0);
        newItem.setMaxHp(0);
        newItem.setMaxMp(0);
        newItem.setPad(0);
        newItem.setMad(0);
        newItem.setBossDamageR(0);
        newItem.setIgnorePDR(0);
        newItem.setDamR(0);
        player.gainItem(newItem);
        //player.gainItem(, items[i][2] * GS);
        //player.addAccountEventValue(items[i][3], GS);
        npc.say("#fs16##b#e購買成功");
    }
}
