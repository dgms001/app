


var GC1 = "#fEffect/CharacterEff/1050312/0/0#";//最上面的亮粉
var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#";//紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#";//"+z+"//小選項用
var XD0 = "#fEffect/CharacterEff/1051366/0/0#"
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的
var a8 = "#fEffect/ItemEff.img/1070069/effect/walk1/0#" //彩虹小云0-7
var a88 = "#fEffect/ItemEff.img/1070069/effect/walk1/4#" //彩虹小云0-7
var a888 = "#fEffect/ItemEff.img/1070069/effect/walk1/6#" //彩虹小云0-7
let itemList = Array(
    3994200,
    3994201,
    3994202,
    3994203,
    3994204,
    3994205,
    3994206
);
date = new Date();
let day = date.getDay();
let hour = date.getHours();
let minute = date.getMinutes();
text = "#fs21##e#r每個時間段只能領取兩個,重複選擇會被吞自行注意\r\n";
for (var i = 0; i < itemList.length; i++) {
    text += "#fs16##e#b#L" + i + "##v" + itemList[i] + "##b#z" + itemList[i] + "##l\r\n";
    if (i == 0 || i == 2 || i == 4 || i == 6 || i == 8 || i == 10 || i == 12 || i == 14 || i == 16 || i == 18 || i == 20 || i == 22 || i == 24 || i == 26 || i == 28 || i == 30 || i == 32 || i == 34) {
        text += "";
    }
}
let selected = npc.askMenuA(text, true);
if (player.getEventValue("七龍珠") > 15) {
    npc.say("#fs17##e#b今天已經搜尋8次請明天再來吧!");
} else if (player.getEventValue("七龍珠" + hour) < 2) {
    player.gainItem(itemList[selected], 1);
    player.addEventValue("七龍珠" + hour, 1, 1);
    player.addEventValue("七龍珠", 1, 1);
    npc.say("#fs17##e#b兌換成功!");
} else {
    npc.say("#fs17##e#b當前時間段已經領取,請下次開啟再來吧!");
}



