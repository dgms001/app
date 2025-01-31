/**
 * Entrance and exit for instance: Spirit Savior
 * @author Yukinoshita
 */
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"
let MAX_COUNT = 3
let EXCHANG_RATE = 3000
let REWARD_RATE = 1
let LOG_NAME = "SpiritSavior"
let current = player.getEventValue(LOG_NAME)
let point = player.getIntQuestRecordEx(16215, "point")
let EXIT_MAP = 921172400
let ENTER_MAP = 450005000

if (player.getMapId() == EXIT_MAP) {
    exit()
} else {
    enter()
}

function enter() {
    if (party != null) {
        npc.say("只能單人入場,請退出所有組隊")
        return
    }
    if (player.getEvent() != null) {
        npc.say("當前處於其他副本實例中，無法進行。請退出副本後再試。")
        return
    }
    let sel = npc.askMenu("Welcome to the special trip              " + a38 + "\r\n" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n#b#e<靈魂拯救者>#n#k\r\n#b只能單人入場,最好盡快把我的朋友們救出來！\r\n#b#L0#挑戰<靈魂拯救者>。#l\r\n\r\n#L1#" + f4 + "碎片商店#l  #L2#" + f3 + "副本說明#l#k\r\n\r\n*今日最高獎勵記錄：\r\n#i4031917##b#e#t4031917:##n #e" + player.getEventValue("SpiritSaviorMax") + "個")

    switch (sel) {
        case 0:
            if (npc.askYesNo("希望妳盡早救出我的朋友們。不如現在就動身吧？\r\n\r\n#b今日挑戰次數" + current + " / " + MAX_COUNT + "#k")) {
                if (current < MAX_COUNT || player.isGm()) {
                    npc.makeEvent("instance_SpiritSavior", false, player)
                } else {
                    npc.say("今日挑戰次數已經用完了，明天再來吧。") //TODO: CMS-like conversation
                }
                return
            }
            break
        case 1:
            let max = Math.floor(player.getAmountOfItem(4031917) / EXCHANG_RATE)
            let ex = npc.askNumber("是否要用#i4031917##b#t4031917:#換取#i1182136##r#t1182136:##k呢？\r\n(#b#t4031917:# " + EXCHANG_RATE + "個 - #r#t1182136:# 1個#k)\r\n\r\n最多可換取#r#e" + max + "個#k#n。", max, 1, max)
            if (player.getFreeSlots(1) < ex) {
                npc.say("背包空間不足。") //TODO: CMS-like conversation
            } else if (player.loseItem(4031917, EXCHANG_RATE * ex)) {
                for (let i = 0; i < ex; i++) {
                    player.gainItem(1182136, 1)
                    player.changeMap(450005000)
                }
                npc.say("兌換成功。") //TODO: CMS-like conversation
            } else {
                npc.say("#v4031917#不足，無法兌換。")
            }
            break
        case 2:
            npc.say("拯救朋友們會獲得#b#e拯救分數#k#n,每#e1000點#n可以獲得" + REWARD_RATE + "個#i4031917##b#t4031917:#\r\n防禦度清0,則挑戰失敗沒有獎勵分數!")
            break
    }
    enter()
}

function exit() {
    player.updateQuestRecordEx(16215, "point", "0")
    if (point < 1000) {
        npc.sayNext("嗯……妳沒法多救幾個朋友出來啊！")
        npc.sayNext("麻煩妳下次再多解救幾個朋友吧！")
        npc.sayNext("妳之前的點數為" + point + "點。")
    } else {
        let gain = Math.floor(point / 1000) * REWARD_RATE
        npc.sayNext("妳救出了我的很多朋友？\r\n拯救分數是#b#e" + point + "#k#n點！\r\n這麽多的話，我可以給妳#r#e" + gain + "個碎片#k#n！")
        if (!player.gainItem(4031917, gain)) {
            let p = player.makeItemWithId(4031917)
            p.setQuantity(gain)
            player.gainParcel(p, "靈魂拯救者。背包空間不足。")
        }
        player.resetEventValue("SpiritSaviorMax")
        player.addEventValue("SpiritSaviorMax", gain, 1)
    }
    npc.sayNext("下次再來幫我喲！")

    player.changeMap(ENTER_MAP)
}

