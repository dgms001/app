/**
 *
 *
 */
let event = npc.getEvent("kenta");
if (event != null) {
    switch (map.getId()) {
        case 923040100:
            map.blowWeather(5120052, "我呼吸困難……請你消滅周邊的怪物，拿到10個空氣鈴。快……");
            break;
        case 923040300:
            if (event.getVariable("breakcave") == null) {
                var flag = player.getId() == party.getLeader();
                let members = event.getVariable("members");
                for (let i = 0; i < members.length; i++) {
                    if (!members[i].checkNearby(sh.newPoint(-39, 168))) {
                        flag = false;
                    }
                }
                if (flag) {
                    event.setVariable("breakcave", false);
                    event.startTimer("check_input", 500);
                    map.setFieldValue("start", "WaterLevelUp_WaterUp");
                    map.setFieldValue("wait", "WaterLevelUp_Timing");
                    map.setFieldValue("maxWater", "kenta_batAttack");
                    for (let i = 0; i < members.length; i++) {
                        members[i].runScript("kenta_breakcave");
                    }
                } else {
                    npc.say("我們必須團結起來。所有隊員請到洞窟入口集合。");
                }
            }
            break;
        case 923040400:
            //if (event.getVariable("boss1") != null && event.getVariable("boss2") != null) {
            //        if (player.gainItem(4001535, 1)) {
            //                modifyQuestPoint(7907, 1800);
            //                player.changeMap(867115600);
            //        } else {
            //                npc.say("其他欄空間不足，請整理後再領取獎勵！");
            //        }
            //} else {
            let sel = npc.askMenu("海洋生物的狀態好像更加異常了。竟然變得這麼殘暴……你想回去了嗎？\r\n#b#L0#我想離開這裡……#l");
            if (sel == 0) {
                let ret = npc.askYesNo("你就這樣走了的話，我該怎麼辦呢？請再考慮一下。你真的要走嗎？");
                if (ret == 1) {
                    player.changeMap(867115600);
                    player.runScript("坎特組隊獎勵")
                }
            }
    }
}


function getQuestPoint(questId) {
    return player.getIntQuestRecordEx(questId, "point");
}

function modifyQuestPoint(questId, num) {
    player.updateQuestRecordEx(questId, "point", String(getQuestPoint(questId) + num));
    player.showSystemMessage((num < 0 ? "消耗了 " : "增加了 ") + Math.abs(num) + " 組隊點數，剩餘組隊點數：" + getQuestPoint(questId));
}