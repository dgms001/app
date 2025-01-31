/**
 *
 *
 */
let event = npc.getEvent("iceman");
if (event != null) {
    if (event.getVariable("stage3") != null && event.getVariable("stage3")) {
        //modifyQuestPoint(7907, 1800);

        if (player.getId() == party.getLeader()) {
            let members = event.getVariable("members");
            for (let i = 0; i < members.length; i++) {
                members[i].runScript("冰騎士組隊獎勵")
                members[i].changeMap(867115600);
            }
        } else {
            npc.say("請隊長來領取獎勵！")
        }
    } else {
        let sel = npc.askMenu("……你想回去了嗎？\r\n#b#L0#我想離開這裡……#l");
        if (sel == 0) {
            let ret = npc.askYesNo("你就這樣走了的話，我該怎麼辦呢？請再考慮一下。你真的要走嗎？");
            if (ret == 1) {
                player.changeMap(867115600);
            }
        }
    }
}

function getQuestPoint(questId) {
    //return player.getIntQuestRecordEx(questId, "point");
}

function modifyQuestPoint(questId, num) {
    //player.updateQuestRecordEx(questId, "point", String(getQuestPoint(questId) + num));
    //player.showSystemMessage((num < 0 ? "消耗了 " : "增加了 ") + Math.abs(num) + " 組隊點數，剩餘組隊點數：" + getQuestPoint(questId));
}

