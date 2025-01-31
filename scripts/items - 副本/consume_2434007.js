


var a8 = "#fEffect/ItemEff.img/1070069/effect/walk1/0#" //彩虹小云0-7
var a88 = "#fEffect/ItemEff.img/1070069/effect/walk1/4#" //彩虹小云0-7
var a888 = "#fEffect/ItemEff.img/1070069/effect/walk1/6#" //彩虹小云0-7

let itemList = Array(
    1003797,//高貴的戰士頭盔
    1003798,//高貴的敦威治帽
    1003799,//高貴的守護者貝雷帽
    1003800,//高貴的暗殺者頭套帽
    1003801,

    1042254,//高貴的戰士上衣
    1042255,//高貴的敦威治上衣
    1042256,//高貴的守護者上衣
    1042257,//高貴的暗殺者上衣
    1042258,

    1062165,//高貴的戰士褲子
    1062166,//高貴的敦威治褲子
    1062167,//高貴的守護者褲子
    1062168,//高貴的暗殺者褲子
    1062169//高貴的漫遊者上衣


);

let boxId = 2438912;//箱子ID

let mapA = map.getId();
if (mapA >= 993001010 && mapA <= 993001500) {//限制控制之神地圖
} else {
    let text = ""
  	text += "請選擇你需要兌換道具:\r\n";

    for (var i = 0; i < itemList.length; i++) {
        text += "#b#L" + i + "##v" + itemList[i] + "##r#z" + itemList[i] + "##l\r\n";

    }
    let selected = npc.askMenuS(text, true);

    text = "#fs17##e#b選擇道具為:\r\n#v" + itemList[selected] + "##r【#z" + itemList[selected] + "#】";
    QSS = player.getAmountOfItem("" + boxId + "");
    let YN = npc.askNumber("" + text + "\r\n#b請輸入兌換數量：", 1, 1, QSS);
    i = selected;

    if (QSS >= YN) {
        player.gainItem(itemList[selected], YN);
        player.loseItem(boxId, -YN);
        npc.say("#fs17##e#b兌換成功!");

    } else {
        npc.say("#fs17##e#b持有數量不足!");
    }

}