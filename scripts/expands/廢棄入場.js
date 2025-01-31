/**
 * Lakelis (NPC 9020000)
 * Victoria Road: Kerning City (Map 103000000)
 *
 * Admits players into Kerning City party quest.
 *
 *
 */
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
let minPlayers = 3;
let maxPlayers = 6;
let minLevel = 100;
let maxLevel = 300;
let maxenter = 10;
let PQLog = "party1";

let sel = npc.askMenu("#e#b<組隊任務：第一次同行>#n\r\n#b限制人數[#r" + minPlayers + "-" + maxPlayers + "#b] 限制等級[#r" + minLevel + "-" + maxLevel + "#b] 限制次數[#r" + player.getEventValue(PQLog) + "-" + maxenter + "#b]\r\n#r你想和隊員們一起努力，完成任務嗎？這裡面有很多如果不同心協力就無法解決的障礙……如果想挑戰的話，請讓#b所屬組隊的隊長來和我說話。\r\n通關獎勵:#v5060048#*8#v5060032#*5#v5064400#*2#v4032053#*1500\r\n\r\n#b#L0#我想執行組隊任務。#l\r\n");
switch (sel) {
    case 0:
        if (party == null || player.getId() != party.getLeader()) {
            npc.say("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.並且等級在" + minLevel + "~" + maxLevel + "範圍,\r\n那麼請讓你的組隊長和我對話吧!");
        } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
            npc.say("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.!");
        } else if (party.getMembersCount(map.getId(), minLevel, maxLevel) < minPlayers) {
            npc.say("你隊員的等級要在" + minLevel + "~" + maxLevel + "範圍!請確認!");
        } else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
            npc.say("好像有隊員在其他地方，請把隊員都召集到這裡！");
        } else if (!party.isAllMembersAllowedPQ(PQLog, maxenter)) {
            npc.say("你隊員#r#e" + party.getNotAllowedMember(PQLog, maxenter) + "#n#k今日次數已經達到上限了。");
        } else if (npc.makeEvent("party1", true, party) == null) {
            npc.say("組隊訓練場任務裡面已經有人了，請稍等..");
        }
        break;
    case 1:
        npc.say("你需要有一個 " + minPlayers + " - " + maxPlayers + " 人的隊伍.並且等級在" + minLevel + "~" + maxLevel + "範圍,\r\n那麼請讓你的組隊長和我對話吧!");
        break;
    case 2:
        let pqtry = maxenter - player.getPQLog(PQLog);
        npc.say("今天剩餘挑戰次數是#b" + pqtry + "#k次.");
        break;
}
