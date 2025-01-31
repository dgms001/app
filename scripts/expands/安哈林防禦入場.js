var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"
export default function () {
    if (player.getMapId() == 993195800) {
        let text = '#b#e<安哈林防禦>#n#k\r\n\r\n身體還好嗎？光魔力會對身體有很大的負擔。 \r\n#b'
        if (player.getSessionValue("ENHEIM_SUCCESS") == "true") {
            text += "#b#L0# 接受<安哈林防禦> 獎勵。#l\r\n#b#L2# 不接受獎勵離開。#l"
        } else {
            text += "#b#L1# 離開這裡。#l"
        }
        let sel = npc.askMenu(text)
        if (sel == 0) {
            player.gainItem(4031831, 2)
            player.changeMap(450006130)
            npc.say("果然，就知道妳會成功的。謝謝！\r\n安哈林之柱的力量也證明了，真開心。\r\n以後也再拜托了！\r\n\r\n#i4031831##b#e#t4031831:##n#k #e2個#n")
        }

    } else if (player.getMapId() == 993195700) {
        if (npc.askYesNo("要離開這裡嗎？")) {
            player.changeMap(450006130)
        }
    } else {
        const logName = "EnheimDefence"
        const dayLimit = 3

        while (true) {
            let sel = npc.askMenu("Welcome to the special trip              " + a38 + "\r\n" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n#b#e<安哈林防禦>#n#k\r\n#b只能單人入場  限制次數[#r" + dayLimit + "#b]。\r\n\r\n拜托，幫忙阻擋海哥頓的復活！\r\n#b#L0# 挑戰<安哈林防禦>。#l\r\n#L1# 向可疑的研究員聽取說明。#l\r\n")
            if (sel == 0) {
                if (party != null) {
                    npc.say("只能單人入場,請退出所有組隊")
                    return
                }
                if (player.getEventValue(logName) >= dayLimit) {
                    npc.say("今日入場次數已用盡")
                    return
                }
                let event = npc.makeEvent("enheim_defence", false, player)
                if (event == null) {
                    npc.say("未知原因，無法入場。")
                    return;
                }
                player.addEventValue(logName)
                return;
            } else if (sel == 1) {
                sel = npc.askMenu(`要幫忙的事情是利用#b光魔力發射器#k破壞次元墻對面出現的的 #r肉身碎片#k與 #r海哥頓的碎片#k即可。\r\n\r\n#e<安哈林防禦>#n\r\n\r\n#e1.參加人員：#n 1人\r\n#e2.限制時間：#n 10分\r\n#e3.1日可完成次數：#n ${dayLimit}次 (完成時累積)\r\n#e4.獎勵：#n #i4031831##b#e#t4031831:##n#k\r\n\r\n#L0#聽取更詳細的說明。#l`)
                if (sel == 0) {
                    while (true) {
                        sel = npc.askMenu("想要知道什麽呢？#b\r\n#L0#<安哈林防禦規則>#l\r\n#L1#<安哈林防禦註意事項>#l\r\n#L2#<安哈林防禦獎勵>#l\r\n#L3#<每日任務簡單進行>#l\r\n#L4#不需要再說明了。#l#k")
                        if (sel == 0) {
                            npc.sayNext("#e<安哈林防禦規則>#n\r\n\r\n利用設置在地圖兩邊的6個 #b#e光魔力發射器#n#k將地圖兩邊按順序登場的#r#e肉身碎片與海哥頓碎片(*統稱 'BOSS')#n#k全部擊殺即可完成任務。\r\n\r\n- #rBOSS#k只能使用 #b光魔力發射器#k攻擊。\r\n\r\n- #b光魔力發射器#k可以利用#r擊殺周圍怪物#k獲得的光魔力能量集到100%時可以啟動並利用 #b采集鍵#k來發射。\r\n\r\n- #b安哈林之柱#k的體力變0時任務失敗。")
                        } else if (sel == 1) {
                            npc.sayNext("#e<安哈林防禦註意事項>#n\r\n\r\n-中央柱子#b安哈林長杖#k只會接收#rBoss#k的發射攻擊。\r\n\r\n- #rBoss#k的發射攻擊只會對中央柱子#b安哈林長杖#k造成傷害。#b玩家#k不會受到傷害。\r\n\r\n- #b玩家#k無法直接攻擊#rBoss#k(只能使用光魔力發射器攻擊)。\r\n\r\n- 最後的Boss#r海哥頓的碎片#k受到攻擊就會瞬間移動。多次攻擊才能擊敗目標。\r\n\r\n- 遊戲過程中和#b謎樣的研究員#k交談的話，也能在途中放棄離開。任務以失敗宣告結束。無法前往\r\n\r\n- #b次元之壁#k，也無法使用移動相關的技能。")
                        } else if (sel == 2) {
                            npc.sayNext("#e<安哈林防禦獎勵>#n\r\n\r\n完成時不受安哈林之柱剩余HP及花費時間的影響贈送\r\n#r#i4031831##t4031831# 2個#k")
                        } else if (sel == 3) {
                            npc.sayNext("能執行以下奧術之河地區的每日任務時，為了讓 #e<安哈林防禦>#n 任務可輕松完成每日提供 #b#e<安哈林防禦> 立即完成#n#k 機會。但，經驗值獎勵及成就相關內容不會被記錄，請記得！\r\n\r\n\r\n#e#b今天可進行的 <安哈林防禦> 立即完成次數 (0/0)#n#k\r\n 艾斯佩拉 地區：#e#k無法進行每日任務#n#k\r\n 月之橋 地區：#e#k無法進行每日任務#n#k")
                        } else if (sel == 4) {
                            break
                        }
                    }
                }
            } else if (sel == 2) {
                npc.say(`今日剩余入場次數：#r${dayLimit - player.getPQLog(logName)}#k次`)
            } else {
                return;
            }
        }
    }
}