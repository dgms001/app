var tz15 = "#fEffect/CharacterEff/1112949/0/0#"; //花樣音符

var itemList = Array(
    Array(1062289, 120, 1), //无尽辉耀海盗裤
    Array(1062288, 120, 1), //无尽辉耀飞侠裤
    Array(1062287, 120, 1), //无尽辉耀弓箭手裤
    Array(1062286, 120, 1), //无尽辉耀魔法师裤
    Array(1062285, 120, 1), //无尽辉耀骑士裤
    Array(1042437, 120, 1), //无尽辉耀海盗大衣
    Array(1042436, 120, 1), //无尽辉耀飞侠衬衫
    Array(1042435, 120, 1), //无尽辉耀弓箭手斗篷
    Array(1042434, 120, 1), //无尽辉耀魔法师长袍
    Array(1042433, 120, 1), //无尽辉耀骑士盔甲
    Array(1005984, 120, 1), //无尽辉耀海盗帽
    Array(1005983, 120, 1), //无尽辉耀飞侠头巾
    Array(1005982, 120, 1), //无尽辉耀弓箭手帽
    Array(1005981, 120, 1), //无尽辉耀魔法师帽
    Array(1005980, 120, 1) //无尽辉耀骑士头
);

var tt = "#fEffect/ItemEff/1112811/0/0#"; //音符
let mapA = map.getId();
if (mapA == 993001100) { //限制開啟地圖
    //player.showSystemMessage("在卡BUG頭蓋骨給你打出來 操!!");
} else {
    html = "#e           " + tz15 + "#r『永恆抽獎機』 " + tz15 + "\r\n"
        + tt + tt + tt + tt + tt + tt + tt + tt + tt + tt + tt + tt + tt + tt + tt + tt + tt + tt + tt + "\r\n強化沒出之前裝備不要自己去砸卷啥的,沒意義浪費資源\r\n"

        + "\t\t\t #L1#媽 咪 媽 咪 哄\r\n#d#l\r\n\r\n"
        + tt + tt + tt + tt + tt + tt + tt + tt + tt + tt + tt + tt + tt + tt + tt + tt + tt + tt + tt + "\r\n";
}
var sel = npc.askMenu(html, true);
if (sel == 1) {

    var chance = Math.floor(Math.random() * 14);
    var finalitem = Array();
    for (var i = 0; i < itemList.length; i++) {
        if (itemList[i][1] >= chance) {
            finalitem.push(itemList[i]);
        }
    }
    if (getFreeSlots(1)) {
        npc.say("每個裝備欄請準備一個空格!");
    } else {
        if (finalitem.length != 0) {
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            //player.gainItem(itemId, quantity);
            var item = player.gainGachaponItem("飢餓的繆多", itemId, 1, 3);
            player.loseItem(2634522, 1);
            npc.say("你獲得了 #b#t" + itemId + "##k " + quantity + "個。");
        } else {
            player.loseItem(2634522, 1);
            npc.say("#r今天的運氣可真差，什麼都沒有拿到。");

        }
    }
}

function getFreeSlots(size) {
    if (player.getFreeSlots(1) < size || player.getFreeSlots(2) < size || player.getFreeSlots(3) < size || player.getFreeSlots(4) < size || player.getFreeSlots(5) < size) {
        return true;
    }
    return false;
}
