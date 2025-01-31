let minPlayers = 1;
let maxPlayers = 6;
let minLevel = [260];
let maxLevel = [300];
let maxenter = [3];

let BossName = "金字塔";
let PQLog = ["金字塔"];
let event = ["金字塔"];
let onlyOne = true;
let warn = true;
let checkLimit = 1000000;

var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"
var d1 = "#fUI/UIWindow2.img/Arbeit/261#" //說明
var d2 = "#fUI/UIWindow2.img/Arbeit/262#" //進入
var d3 = "#fUI/UIWindow2.img/Arbeit/294#" //製作
var d4 = "#fUI/UIWindow2.img/Arbeit/293#" //強化

text = "Welcome to the special trip              " + a38 + "\r\n";

text += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n"

text += "#b人數限制:[ #r" + minPlayers + "-" + maxPlayers + "#b ]#b入場等級:[ #r" + minLevel + "-" + maxLevel + "#b ]#b次數限制:[ #r" + player.getEventValue(PQLog) + "/" + maxenter + "#b ]\r\n";
;
text += "#rBOSS關卡獎勵#v4009338#X1\r\n";
text += "每關卡需要收集怪物掉落道具依次20,40,60個#k\r\n";
text += "#r總獎勵關卡:[ 30 ] 獎勵#v4009338#X10\r\n";
text += "#r需搭配強化的金字塔3件套才能有效對王造成傷害\r\n";
for (var i = 0; i < PQLog.length; i++) {
    text += "#b#e#L" + i + "#進入副本#l";

}
text += "#L2#副本說明#l#L3#機器人製作#l#L4#機器人強化#l\r\n\r\n";

if (player.isGm()) {
    text += "\r\n#L5#GM創裝備#l\r\n";
}
let sel = npc.askMenuS(text, true);
if (sel == 0) {
    if (party == null && player.getId() != party.getLeader()) {
        npc.sayNextS("#fs18##e#b\t  請玩家先創建隊伍\r\n\t #fs14#此副本接受#r[" + minPlayers + "-" + maxPlayers + "]#b人的隊伍\r\n\t  並且等級在#r[" + minLevel[sel] + "-" + maxLevel[sel] + "]#b之間\r\n\t   讓你的隊長和我對話吧!", true);
    } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
        npc.sayNextS("#fs17##e#b你需要有一個#r" + minPlayers + "-" + maxPlayers + "#b人的隊伍.!", true);
    } else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < party.getMembersCount(map.getId(), 1, 300)) {
        npc.sayNextS("#fs17##e#b你隊員的等級要在#r[" + minLevel[sel] + "-" + maxLevel[sel] + "]#b之間!", true);
    } else if (party.numberOfMembersInChannel() < party.getMembersCount()) {
        npc.sayNextS("#fs17##e#b好像你有隊員在其他地方,請把隊員都召集到這裡!");
    } else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
        npc.sayNextS("#fs17##e#b你隊員#r[" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]) + "]#b次數已經達到上限了。", true);
    } else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
        npc.sayNextS("#fs17##e#b已經有隊伍在進行了,請更換其他頻道嘗試。", true);
    }

    if (warn) {
        //進場通知
        //npc.broadcastPlayerNotice(49,"【"+BossName+"】 " + player.getName() + " 帶領成員進入 AUT-金字塔！！");
    }
}
if (sel == 2) {
    txt = " #b副本說明:#k\r\n";

    txt += " #b金字塔3件套:#k\r\n";
    txt += " 每強化#r+1#k 便可對王造成真實傷害+50E\r\n";
    txt += " 合計最高強化#r +20 * 3件 = 60#k\r\n";
    txt += " 如果#r未裝備#k該類型裝備 或 強化#r+0 將無法對王造成有效傷害#k\r\n";
    txt += " #b副本裝碎裂概率強化+1-+20#k\r\n";
    txt += " 最低千分之2最高百分之9,強化等級越高碎裂風險越大\r\n";
    txt += " 本副本為周目副本\r\n";
    txt += " 副本只回收通關物品其他均不回收\r\n";
    txt += " 意味著越打通關速度越快\r\n";
    npc.sayS(txt, true);
}
if (sel == 3) {
    player.runScript("機器人製作");
}
if (sel == 4) {
    player.runScript("機器人強化");
}
if (sel == 5) {
    gainItem5(1002430, 1);
    gainItem5(1022228, 1);
    gainItem5(1012325, 1);
}

function gainItem5(itemid, quantity) {
    for (var i = 0; i < quantity; i++) {
        let newItem = player.makeItemWithId(itemid);
        if (true) {
            if (newItem.getTitle() == "") {
                newItem.setTitle("強化+" + 20);
            }
            var str = newItem.getTitle();
            var get = str.substring(3, 4);
            var qhcs = Number(get) + 1;
            newItem.setTitle("強化+" + 9);
            newItem.setAttribute(1080)
        }
        player.gainItem(newItem);
    }
}
