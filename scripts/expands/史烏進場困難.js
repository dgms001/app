

let minPlayers = 1;
let maxPlayers = 6;
//等級限制
var minLevel = [250];
var maxLevel = [300];
//次數限制
var maxenter = [1];
let BossName = "史烏[困難]";
let PQLog = ["史烏[困難]"];
let event = ["boss_siwu_chaos"];
let onlyOne = true;
let startmap = 105200000;
//如果需要破攻值則填寫破攻值
let checkLimit = 0;
//false不進行廣播 true進行進入副本廣播
let warn = true;

var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"


var text = "";
text = "Welcome to the special trip              " + a38 + "\r\n";

text += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n"



text += "#b\t\t\t\t血量:[#r4兆+4兆+7兆#b]#b\r\n\r\n";
text += "#b\t\t\t限制等級[#r" + minLevel + "-" + maxLevel + "#b] 限制人數[#r" + minPlayers + "-" + maxPlayers + "#b]#b\r\n\r\n";

for (var i = 0; i < PQLog.length; i++) {
        text += "#b\t\t\t\t  #L" + i + "#" + PQLog[i] + " [#r" + player.getPQLog(event[i]) + "/#b" + maxenter[i] + "#b]#l    ";
}
text += "\r\n";
let sel = npc.askMenu("" + text, true);
if (party == null || player.getId() != party.getLeader()) {
        npc.sayNext("Welcome to the special trip              " + a38 + "\r\n" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "#b\t\t\t\t#r注意:#b請玩家先創建隊伍\r\n\t\t\t\t此副本接受#r[" + minPlayers + "-" + maxPlayers + "]#b人的隊伍\r\n\t\t\t\t並且等級在#r[" + minLevel[sel] + "-" + maxLevel[sel] + "]#b之間\r\n\t\t\t\t讓你的隊長和我對話吧!", true);
} else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
        npc.sayNext("#b你需要有一個#r" + minPlayers + "-" + maxPlayers + "#b人的隊伍.!", true);
} else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < party.getMembersCount(map.getId(), 1, 300)) {
        npc.sayNext("#b你隊員的等級要在#r[" + minLevel[sel] + "-" + maxLevel[sel] + "]#b之間!", true);
} else if (party.numberOfMembersInChannel() < party.getMembersCount()) {
        npc.say("#b好像你有隊員在其他地方,請把隊員都召集到這裡!");
} else if (!party.isAllMembersAllowedPQ(event[sel], maxenter[sel])) {
        npc.sayNext("#b你隊員#r[" + party.getNotAllowedMember(event[sel], maxenter[sel]) + "]#b次數已經達到上限了。", true);
} else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
        npc.sayNext("#b已經有隊伍在進行了,請更換其他頻道嘗試。", true);
} else {
        if (warn) {
                npc.broadcastPlayerNotice(8, "[BOSS提示] : " + player.getName() + " 隊伍人數：" + party.getMembersCount() + " 進入了 [" + BossName + "]副本。");
        }
}