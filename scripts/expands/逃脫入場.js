
let minPlayers = 3;
let maxPlayers = 6;
let minLevel = 100;
let maxLevel = 300;
let maxenter = 10;
let PQLog = "JILI_PRISON";
let sel = npc.askMenu("#e#b<組隊任務：逃脫>#n#r\r\n#b限制人數[#r" + minPlayers + "-" + maxPlayers + "#b] 限制等級[#r" + minLevel + "-" + maxLevel + "#b] 限制次數[#r" + player.getEventValue(PQLog) + "-" +maxenter+ "#b]\r\n 雖說想就這樣立刻逃跑，但是……我無法拒絕他的囑托。在這座城裡，被關在空中監獄的人們正在尋找幫他們逃離監獄的人。#k請讓#b所屬組隊的隊長#k來和我說話。\r\n通關獎勵:#v5060048#*8#v5060032#*5#v5064400#*2#v4032053#*1500\r\n#b#L0#我想執行組隊任務。#l");
switch (sel) {
    case 0:
        if (party == null || player.getId() != party.getLeader()) {
            npc.say("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.並且等級在" + minLevel + "~" + maxLevel + "范圍,\r\n那麼請讓你的組隊長和我對話吧!");
        } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
            npc.say("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.!");
        } else if (party.getMembersCount(map.getId(), minLevel, maxLevel) < minPlayers) {
            npc.say("你隊員的等級要在" + minLevel + "~" + maxLevel + "范圍!請確認!");
        } else if (!party.isAllMembersAllowedPQ(PQLog, maxenter)) {
            npc.say("你隊員#r#e" + party.getNotAllowedMember(PQLog, maxenter) + "#n#k今日次數已經達到上限了。");
        } else if (npc.makeEvent(PQLog, true, party) == null) {
            npc.say("組隊訓練場任務裡面已經有人了，請稍等..");
        }
        break;
    case 1:
        npc.say("你需要有一個 " + minPlayers + " - " + maxPlayers + " 人的隊伍.並且等級在" + minLevel + "~" + maxLevel + "范圍,\r\n那麼請讓你的組隊長和我對話吧!");
        break;
    case 2:
        let pqtry = maxenter - player.getPQLog(PQLog);
        npc.say("今天剩余挑戰次數是#b" + pqtry + "#k次.");
        break;
}
