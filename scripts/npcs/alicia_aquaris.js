/**
 *
 *
 */

var sel = -1;
var index = -1;
var selection = npc.askMenu("你有什麼事? 只要是我力所能及的, 我都願意幫忙。#b\r\n\r\n#L0#我想繼續擴充套件朦朧石欄位。#l\r\n#L101#我丟失了靈魂聯結器。#l\r\n" + (player.isGm() ? "#L9999#(測試專用)請幫幫我, 實在太難了。#l" : ""));
sel = selection;
switch (sel) {
    case 0:
        npc.sayNext("原來你想要擴充套件朦朧石欄位啊。只要你夠資格的話, 多少個朦朧石我都能為你擴充套件。你......讓我看看......");
        for (var i = 1; i <= 5; i++) {
            if (player.getQuestRecordEx(42000, "slot" + i) == null || player.getQuestRecordEx(42000, "slot" + i) == "-1") {
                index = i;
                break;
            }
        }
        if (index == 2) {
            var costPoint = 8000;
        } else if (index == 3) {
            var costPoint = 24000;
        } else if (index == 4) {
            var costPoint = 55000;
        } else if (index == 5) {
            var costPoint = 80000;
        } else {
            var costPoint = 3000;
        }
        if (index > 0) {
            npc.sayNext("這已經是你要解開的#b第" + index + "個欄位#k了。想要解開的話, 需要有你到達#b第" + ((index - 1) * 10) + "層#k的記錄, 同時還要支付#b" + costPoint + "點起源點數#k。現在馬上為你開通嗎? ");
            var stage = player.getIntQuestRecordEx(42001, "stage");
            if (getQuestPoint(42003) < costPoint) {
                npc.say("想要解開第" + index + "個欄位的話, 需要#b" + costPoint + "點起源點數#k。你現在......只有" + getQuestPoint(42003) + " 點起源點數。還需要再接再厲。 ");
            } else if (stage < ((index - 1) * 10) && !player.isGm()) {
                npc.say("想要解開第" + index + "個欄位的話,  需要有你到達#b第" + ((index - 1) * 10) + "層#k的記錄,你現在......只到達#r" + stage + " 層#k。還需要再接再厲。 ");
            } else {
                modifyQuestPoint(42003, -costPoint);
                player.updateQuestRecordEx(42000, "slot" + index, "0");
                npc.say("好了，已經幫你解卡第" + index + "個欄位啦！");
            }
        } else {
            npc.say("看樣子你已經不需要在解開什麼欄位了！");
        }
        break;
    case 101:
        if (player.hasItem(2432461, 1)) {
            npc.say("什麼？靈魂聯結器不是沒有丟嗎？在這樣我就要把你扔出去了！");
        } else {
            if (player.gainItem(2432461, 1)) {
                npc.say("我已經幫你找回了#b靈魂聯結器#k了！");
            } else {
                npc.say("你的揹包空間不足，請清理消耗欄！");
            }
        }
        break;
    case 9999:
        if (player.isGm()) {
            modifyQuestPoint(42003, 9999999);
            player.updateQuestRecordEx(42011, "time", String(90 * 60 * 1000));
            player.updateQuestRecordEx(42011, "totalTime", String(90 * 60 * 1000));
            player.showLobbyTimer(0, 90 * 60 * 1000, 90 * 60 * 1000, 42011);
        } else {
            npc.logSuspicious("Player used gm option whithout gm!");
        }
        break;
    default:
        break;
}


function getQuestPoint(questId) {
    return player.getIntQuestRecordEx(questId, "point");
}

function modifyQuestPoint(questId, num) {
    player.updateQuestRecordEx(questId, "point", String(getQuestPoint(questId) + num));
    player.showSystemMessage((num < 0 ? "消耗了 " : "增加了 ") + Math.abs(num) + " 起源點數，剩餘起源點數：" + getQuestPoint(questId));
}