var a = -1;
var text;
var selects; //記錄玩家的選項
var buynum = 0;
var ItemS = 2432488;
var tell1 = 1052715;
var tell2 = 1052716;
var tell3 = 1052717;
var tell4 = 1052718;
var tell5 = 1052719;
var tell6 = 1052720;
var tell7 = 1052721;
var tell8 = 1052722;
var tell9 = 1052723;
var itemlist = Array(
    Array(1052715, 1052716, 500), //800 8%成功率
    Array(1052716, 1052717, 300),
    Array(1052717, 1052718, 200),
    Array(1052718, 1052719, 150),
    Array(1052719, 1052720, 100),
    Array(1052720, 1052721, 80),
    Array(1052721, 1052722, 50),
    Array(1052722, 1052723, 30)
);

let toDrop = player.getInventorySlot(-1, -5);
var itemID = toDrop.getDataId();
if (toDrop.getDataId() == itemID) {
    var text = "";
    for (var i = 0; i < itemlist.length; i++) {
        if (toDrop.getDataId() == itemlist[i][0]) {
            text += "要使用 #r#z" + itemlist[i][0] + "# #k強化成 #r#z" + itemlist[i][1] + " # #k嗎?";
        }
    }
}

dgms_start();

function dgms_start() {
    let mapA = map.getId();
    if (mapA == 993001100) { //限制開啟地圖
        //player.showSystemMessage("在卡BUG頭蓋骨給你打出來 操!!");
    } else if (toDrop.getDataId() == tell9) {
        dgms_qianghua();
    } else if (toDrop.getDataId() == tell1 || toDrop.getDataId() == tell2 || toDrop.getDataId() == tell3 || toDrop.getDataId() == tell4 || toDrop.getDataId() == tell5 || toDrop.getDataId() == tell6 || toDrop.getDataId() == tell7 || toDrop.getDataId() == tell8) {
        let a = npc.askYesNo(text);
        dgms_judge();
    } else {
        npc.say("#r請將要進行升階的裝備穿到角色人物身上。\r\n\r\n#b允許升階的裝備：\r\n\r\n#b#v" + tell1 + "# #z" + tell1 + "#\r\n#v" + tell2 + "# #z" + tell2 + "#\r\n#v" + tell3 + "# #z" + tell3 + "#\r\n#v" + tell4 + "# #z" + tell4 + "#\r\n#v" + tell5 + "# #z" + tell5 + "#");
    }
}

function dgms_judge() {
    var Equip = player.getInventorySlot(-1, -5);

    if (Equip.getDataId() == tell1) {
        a = 0;
    }
    if (Equip.getDataId() == tell2) {
        a = 1;
    }
    if (Equip.getDataId() == tell3) {
        a = 2;
    }
    if (Equip.getDataId() == tell4) {
        a = 3;
    }
    if (Equip.getDataId() == tell5) {
        a = 4;
    }
    if (Equip.getDataId() == tell6) {
        a = 5;
    }
    if (Equip.getDataId() == tell7) {
        a = 6;
    }
    if (Equip.getDataId() == tell8) {
        a = 7;
    }
    if (Equip.getDataId() == tell9) {
        a = 8;
    }
    if (!player.hasItem(ItemS, 1)) {
        npc.say("#v" + ItemS + "# #b#z" + ItemS + "# #r消耗完畢。");
    } else {
        var rand = Math.floor(Math.random() * 10000);
        if (rand <= itemlist[a][2]) {
            player.equip(-5, itemlist[a][1]);
            player.loseItem(ItemS, 1);
            npc.sayNextS("#b成功!!！恭喜取得 #v" + itemlist[a][1] + "# #z" + itemlist[a][1] + "# ~");
        } else {
            if (!player.hasItem(ItemS, 1)) {
                npc.say("#v" + ItemS + "# #b#z" + ItemS + "# #r消耗完畢。");
            } else {
                player.loseItem(ItemS, 1);
                npc.sayNextS("#r失敗!!!");
                dgms_judge();
            }
        }
    }
}

function dgms_qianghua() {
    var rand = Math.floor(Math.random() * 1000);
    var equip = player.getInventorySlot(-1, -5);
    if (equip.getTitle() == "") {
        equip.setTitle("0階段");
    }
    var name = parseInt(equip.getTitle().substring(0, 1));

    if (!player.hasItem(ItemS, 2)) {
        npc.say("#v" + ItemS + "# #b#z" + ItemS + "# #r不足2個。");
    } else if (name == "9") {
        npc.say("已滿級強化 恭喜!!!");
    } else if (rand > 10) {
        player.loseItem(ItemS, 2);
        npc.say("失敗了");
        dgms_qianghua()
    } else {
        var STR = equip.getStr();
        var DEX = equip.getDex();
        var INT = equip.getInt();
        var LUK = equip.getLuk();
        var PAD = equip.getPad();
        var MAD = equip.getMad();
        var BDR = equip.getBossDamageR();
        var PDR = equip.getIgnorePDR();
        var DAR = equip.getDamR();
        var HP = equip.getMaxHp();
        var MP = equip.getMaxMp();
        var ALLEP = 45;
        //替換掉屬性
        //力量
        equip.setStr(STR + ALLEP);
        //敏捷
        equip.setDex(DEX + ALLEP);
        //智力
        equip.setInt(INT + ALLEP);
        //運氣
        equip.setLuk(LUK + ALLEP);
        //攻擊
        equip.setPad(PAD + ALLEP);
        //魔法攻擊
        equip.setMad(MAD + ALLEP);
        //HP
        equip.setMaxHp(HP + (ALLEP * 5));
        //MP
        equip.setMaxMp(MP + (ALLEP * 5));
        //BOSS傷害
        equip.setBossDamageR(BDR + 1);
        //無視
        equip.setIgnorePDR(PDR + 1);
        //傷害
        equip.setDamR(DAR + 1);
        var qhcs = name + 1;
        equip.setTitle(qhcs + "階段");
        player.updateItem(1, equip);
        player.loseItem(ItemS, 2);
    }
}