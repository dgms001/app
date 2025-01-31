//player.runScript("副手強化2")
//player.runScript("四選一答題")
//player.runScript("技改測試入口")
//player.runScript("農民起義")
//player.changeMap(620106000);
//player.runScript("跑商入口2")

var a1 = "#fUI/CashShop/CSDiscount/bonus#"
var a2 = "#fUI/UIWindowString/Scenario/quest_info/scene/summary_icon/summary#"
let minPlayers = 2;
let maxPlayers = 6;
var minLevel = [250];
var maxLevel = [275];
let maxenter = [999];
var PQLog = ["緋紅組隊任務"];
let event = ["CWKPQ"];
let onlyOne = true;
let useTicket = 1114301; //是否需要入場券 (寫0不需要) 是否消耗請在事件裡改
let checkLimit = 0;
let guild = true; //是否開啟同家族進入
//開始的地圖
var startmap = 610030020;
var text = "";
for (var i = 0; i < PQLog.length; i++) {
    text += "\r\n#b#L" + i + "#挑戰" + PQLog[i] + "   " + player.getPQLog(PQLog[i]) + "/" + maxenter[i] + "#l";
}

let sel = npc.askMenuA("#e<BOSS： 緋紅[家族周本]>#n\r\n" + a2 + "\r\n 每週可挑戰次數不上限 領獎次數#r[1]#k次" + a1 + "每次通關可以獲得:\r\n#r#v2430051# #z2430051# x #r[1]  #v4000928# #z4000928# x #r[30]\r\n#v4001715# #z4001715# x #r[5]  #v2630846# #z2630846# x #r[10]\r\n#v4034721# #z4034721# x #r[1]  #v4032655# #z4032655# x #r[5]#b" + text);
if (party == null || player.getId() != party.getLeader()) {
    npc.sayNext("你需要有一箇#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.並且等級在" + minLevel[sel] + "~" + maxLevel[sel] + "範圍,\r\n那麼請讓你的組隊長和我對話吧!", true);
} else if (checkLimitBreak() != 0) {
    if (checkLimitBreak() == 1) {
        npc.say("此副本需要檢查破功值,請佩戴好武器.");
    } else if (checkLimitBreak() == 2) {
        npc.say("此副本需要破攻上限值為:" + checkLimit + "才能進入副本.");
    }
} else if (useTicket != 0 && !party.isAllMembersHasItem(useTicket, 1)) {
    npc.say("你隊員#r#e" + party.getNotHasItemMember(useTicket, 1) + "#n#k沒有#i" + useTicket + "##t" + useTicket + "#,請確認!\r\n#r該戒指為防刷獎認證道具，請聯絡群主領取");
} else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
    npc.sayNext("你需要有一箇#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.!", true);
} else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
    npc.sayNext("你隊員的等級要在" + minLevel[sel] + "~" + maxLevel[sel] + "範圍!請確認!", true);
} else if (party.numberOfMembersInChannel() < party.getMembersCount()) {
    npc.say("好像你有隊員在其他地方,請把隊員都召集到這裡!");
} else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
    npc.sayNext("你隊員#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]) + "#n#k次數已經達到上限了。", true);
} else {

    //判斷一箇隊伍是否是所有一箇家族的 player.getGuildId()
    var PD = true;
    if (guild) {
        var playerGuild = player.getGuildId();
        if (playerGuild <= 0) {
            PD = false;
        }
        var members = party.getLocalMembers();
        for (let i = 0; i < members.length; i++) {
            if (playerGuild != members[i].getGuildId()) {
                PD = false;
                break;
            }
        }
    }
    if (PD) {
        if (npc.makeEvent(event[sel], onlyOne, party) == null) {
            npc.sayNext("已經有隊伍在進行了,請更換其他頻道嘗試。", true);
        }
    } else {
        npc.say("只有一箇家族的人才可以挑戰！")
    }
}


function checkLimitBreak() {
    var flag = 0;
    if (checkLimit != 0) {
        var item = player.getInventorySlot(-1, -11);
        if (item == null) {
            flag = 1;
        } else if (item.getLimitBreak() < checkLimit) {
            flag = 2;
        }
    }
    return flag;
}

