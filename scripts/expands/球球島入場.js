/*
 *  功能：[揪揪島]饑餓穆托副本入場
 */
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"
const logName = "HungryMuto"
const dayLimit = 3
const minPlayers = 1
const maxPlayers = 6

export default function () {
    if (player.getMapId() == 450002024) {
        // 退場地圖
        let text = "#b#e<饑餓的穆托>#n#k\r\n #b"
        if (player.getIntQuestRecordEx(34222, "clear")) {
            text += "#L0# 領取<饑餓的穆托>獎勵。#l\r\n#b#L2# 不領取獎勵直接離開。#l"
        } else {
            text += "#b#L1# 離開這裡。#l"
        }
        let sel = npc.askMenu(text)
        if (sel == 0) {
            if (player.getEventValue(logName) > dayLimit) {
                npc.say("今日獎勵次數已用盡")
                return
            }
            player.updateQuestRecordEx(34222, "clear", "0")
            player.gainItem(4031595, 2);
            player.changeMap(450002023)
            player.addEventValue("啾啾島通過");
            npc.say("感謝您的幫助！請收下這些獎勵！\r\n#b#e通關評價： #n#k#r#eS#n#k級\r\n#i4031595##b#e#t4031595:##n#k #e2個#n\r\n#b#e")
        } else if (sel == 1) {
            player.changeMap(450002023)
        }

    } else {
        while (true) {
            let sel = npc.askMenu("Welcome to the special trip              " + a38 + "\r\n" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n#e#b<饑餓的穆托>#k#n\r\n#b限制人數[#r" + minPlayers + "-" + maxPlayers + "#b] 限制等級[#r200-300#b] 限制次數[#r" + dayLimit + "#b]\r\n#r*遊戲時間10分鐘，無法中途退出。#k\r\n#b#L0#我想執行任務#l#L1#胸章強化#l#k\r\n\r\n\r\n#k*今日最高獎勵記錄。\r\n#b#i4031595:##z4031595:#：0個#n")
            if (sel == 0) {
                if (party == null || player.getId() != party.getLeader()) {
                    npc.say("妳需要有壹個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍，並且等級在200級以上。\r\n那麽請讓妳的組隊長和我對話吧!");
                } else if (party.numberOfMembersInChannel() < minPlayers || party.numberOfMembersInChannel() > maxPlayers) {
                    npc.say("妳需要有壹個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍");
                } else if (party.getMembersCount(map.getId(), 200, 300) < minPlayers) {
                    npc.say("妳隊員的等級要在" + 200 + "~" + 300 + "範圍!請確認!");
                } else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
                    npc.say("好像有隊員在其他地方，請把隊員都召集到這裡！", true);
                } else if (!player.isGm() && !party.isAllMembersAllowedPQ(logName, dayLimit)) {
                    npc.say("妳隊員#r#e" + party.getNotAllowedMember(logName, dayLimit) + "#n#k次數已經達到上限了。");
                } else if (npc.makeEvent("hungry_muto_hard", false, party) == null) {
                    npc.say("未知原因，無法入場。")
                }
                return;
            } else if (sel == 1) {
                player.runScript("胸章強化");
                return;
            } else if (sel == 2) {
                npc.say(`今日剩余入場次數：#r${dayLimit - player.getPQLog(logName)}#k次`)
            } else {
                return;
            }
        }
    }
}
