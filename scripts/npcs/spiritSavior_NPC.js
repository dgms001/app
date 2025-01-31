/**
 * Entrance and exit for instance: Spirit Savior
 * @author Yukinoshita
 */

let MAX_COUNT = 3
let EXCHANG_RATE = 3
let REWARD_RATE = 1
let LOG_NAME = "SpiritSavior"
let current = player.getPQLog(LOG_NAME)
let point = player.getIntQuestRecordEx(16215, "point")
let EXIT_MAP = 921172400
let ENTER_MAP = 450005000

if (player.getMapId() == EXIT_MAP) {
    exit()
} else {
    enter()
}

function enter() {
    if (player.getEvent() != null) {
        npc.say("当前处于其他副本实例中，无法进行。请退出副本后再试。")
        return
    }
    let sel = npc.askMenu("#b#e<灵魂拯救者>#n#k\r\n最好尽快把我的朋友们救出来！\r\n\r\n#b#L0#挑战<灵魂拯救者>。#l\r\n#L1#兑换精神纪念币。#l\r\n#L2#听取说明。#l#k\r\n\r\n\r\n#e*完成1次后，可以立即完成。\r\n*今日最高奖励记录：\r\n#i4310235##b#e#t4310235:##n #e" + player.getPQLog("SpiritSaviorMax") + "个")
    switch (sel) {
        case 0:
            if (npc.askYesNo("希望你尽早救出我的朋友们。不如现在就动身吧？\r\n\r\n#b今日挑战次数" + current + " / " + MAX_COUNT + "#k")) {
                if (current < MAX_COUNT || player.isGm()) {
                    npc.makeEvent("instance_SpiritSavior", false, player)
                } else {
                    npc.say("今日挑战次数已经用完了，明天再来吧。") //TODO: CMS-like conversation
                }
                return
            }
            break
        case 1:
            let max = Math.floor(player.getAmountOfItem(4310235) / EXCHANG_RATE)
            let ex = npc.askNumber("是否要用#i4310235##b#t4310235:#换取#i1712004##r#t1712004:##k呢？\r\n(#b#t4310235:# " + EXCHANG_RATE + "个 - #r#t1712004:# 1个#k)\r\n\r\n最多可换取#r#e" + max + "个#k#n。", max, 1, max)
            if (player.getFreeSlots(1) < ex) {
                npc.say("背包空间不足。") //TODO: CMS-like conversation
            } else if (player.loseItem(4310235, EXCHANG_RATE * ex)) {
                for (let i = 0; i < ex; i++) {
                    player.gainItem(1712004, 1)
                }
                npc.say("兑换成功。") //TODO: CMS-like conversation
            } else {
                npc.say("#v4310235#不足，无法兑换。")
            }
            break
        case 2:
            sel = npc.askMenu("你想知道什么？\r\n#L0# #e灵魂拯救者规则#n#l\r\n#L1# #e灵魂拯救者奖励#n#l\r\n#L2# #e每日任务快速执行#n#l\r\n#L3# #e什么是加油！奖励灵魂币？#n#l\r\n#L100# #e不听说明。#n#l")
            switch (sel) {
                case 1:
                    npc.say("拯救朋友们会获得#b#e拯救分數#k#n，每#e1000点#n可以获得" + REWARD_RATE + "个#i4310235##b#t4310235:#。")
                    break
                default:
                    npc.say("我懒得抄了") //TODO: CMS-like conversation
                    break
            }
            break
    }
    enter()
}

function exit() {
    player.updateQuestRecordEx(16215, "point", "0")
    if (point < 1000) {
        npc.sayNext("嗯……你没法多救几个朋友出来啊！")
        npc.sayNext("麻烦你下次再多解救几个朋友吧！")
        npc.sayNext("你之前的点数为" + point + "点。")
    } else {
        let gain = Math.floor(point / 1000) * REWARD_RATE
        npc.sayNext("你救出了我的很多朋友？\r\n拯救分數是#b#e" + point + "#k#n点！\r\n这么多的话，我可以给你#r#e"+gain+"个灵魂币#k#n！")
        player.addPQLog(LOG_NAME)
        if (player.getPQLog("SpiritSaviorMax") < gain) {
            player.resetPQLog("SpiritSaviorMax")
            player.addPQLog("SpiritSaviorMax", gain, 1)
        }
        if (!player.gainItem(4310235, gain)) {
            let p = player.makeItemWithId(4310235)
            p.setQuantity(gain)
            player.gainParcel(p, "灵魂拯救者。背包空间不足。")
        }
    }
    npc.sayNext("下次再来帮我哟！")
    player.changeMap(ENTER_MAP)
}

