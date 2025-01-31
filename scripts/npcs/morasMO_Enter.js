export default function () {
    if (player.getMapId() == 993195800) {
        let text = '#b#e<安哈林防御>#n#k\r\n\r\n身体还好吗？光魔力会对身体有很大的负担。 \r\n#b'
        if (player.getSessionValue("ENHEIM_SUCCESS") == "true") {
            text += "#b#L0# 接受<安哈林防御> 奖励。#l\r\n#b#L2# 不接受奖励离开。#l"
        } else {
            text += "#b#L1# 离开这里。#l"
        }
        let sel = npc.askMenu(text)
        if (sel == 0) {
            player.gainItem(1712005, 2)
            npc.say("果然，就知道你会成功的。谢谢！\r\n安哈林之柱的力量也证明了，真开心。\r\n以后也再拜托了！\r\n\r\n#i1712005##b#e#t1712005:##n#k #e2个#n")
        }
        player.changeMap(450006130)
    } else if (player.getMapId() == 993195700) {
        if (npc.askYesNo("要离开这里吗？")) {
            player.changeMap(450006130)
        }
    } else {
        const logName = "EnheimDefence"
        const dayLimit = 1

        while (true) {
            let sel = npc.askMenu("#b#e<安哈林防御>#n#k\r\n安哈林之柱准备完成。\r\n拜托，帮忙阻挡海哥顿的复活！\r\n#b#L0# 挑战<安哈林防御>。#l\r\n#L1# 向可疑的研究员听取说明。#l\r\n#L2# 确认今天可完成的剩下次数。#l")
            if (sel == 0) {
                if (party != null) {
                    npc.say("只能单人入场。")
                    return
                }
                if (player.getPQLog(logName) >= dayLimit) {
                    npc.say("今日入场次数已用尽")
                    return
                }
                let event = npc.makeEvent("enheim_defence", false, player)
                if (event == null) {
                    npc.say("未知原因，无法入场。")
                    return;
                }
                player.addPQLog(logName)
                return;
            } else if (sel == 1) {
                sel = npc.askMenu(`要帮忙的事情是利用#b光魔力发射器#k破坏次元墙对面出现的的 #r肉身碎片#k与 #r海哥顿的碎片#k即可。\r\n\r\n#e<安哈林防御>#n\r\n\r\n#e1.参加人员：#n 1人\r\n#e2.限制时间：#n 10分\r\n#e3.1日可完成次数：#n ${dayLimit}次 (完成时累积)\r\n#e4.奖励：#n #i1712005##b#e#t1712005:##n#k\r\n\r\n#L0#听取更详细的说明。#l`)
                if (sel == 0) {
                    while (true) {
                        sel = npc.askMenu("想要知道什么呢？#b\r\n#L0#<安哈林防御规则>#l\r\n#L1#<安哈林防御注意事项>#l\r\n#L2#<安哈林防御奖励>#l\r\n#L3#<每日任务简单进行>#l\r\n#L4#不需要再说明了。#l#k")
                        if (sel == 0) {
                            npc.sayNext("#e<安哈林防御规则>#n\r\n\r\n利用设置在地图两边的6个 #b#e光魔力发射器#n#k将地图两边按顺序登场的#r#e肉身碎片与海哥顿碎片(*统称 'BOSS')#n#k全部击杀即可完成任务。\r\n\r\n- #rBOSS#k只能使用 #b光魔力发射器#k攻击。\r\n\r\n- #b光魔力发射器#k可以利用#r击杀周围怪物#k获得的光魔力能量集到100%时可以启动并利用 #b采集键#k来发射。\r\n\r\n- #b安哈林之柱#k的体力变0时任务失败。")
                        } else if (sel == 1) {
                            npc.sayNext("#e<安哈林防御注意事项>#n\r\n\r\n-中央柱子#b安哈林长杖#k只会接收#rBoss#k的发射攻击。\r\n\r\n- #rBoss#k的发射攻击只会对中央柱子#b安哈林长杖#k造成伤害。#b玩家#k不会受到伤害。\r\n\r\n- #b玩家#k无法直接攻击#rBoss#k(只能使用光魔力发射器攻击)。\r\n\r\n- 最后的Boss#r海哥顿的碎片#k受到攻击就会瞬间移动。多次攻击才能击败目标。\r\n\r\n- 游戏过程中和#b谜样的研究员#k交谈的话，也能在途中放弃离开。任务以失败宣告结束。无法前往\r\n\r\n- #b次元之壁#k，也无法使用移动相关的技能。")
                        } else if (sel == 2) {
                            npc.sayNext("#e<安哈林防御奖励>#n\r\n\r\n完成时不受安哈林之柱剩余HP及花费时间的影响赠送\r\n#r#i1712005##t1712005# 2个#k")
                        } else if (sel == 3) {
                            npc.sayNext("能执行以下奥术之河地区的每日任务时，为了让 #e<安哈林防御>#n 任务可轻松完成每日提供 #b#e<安哈林防御> 立即完成#n#k 机会。但，经验值奖励及成就相关内容不会被记录，请记得！\r\n\r\n\r\n#e#b今天可进行的 <安哈林防御> 立即完成次数 (0/0)#n#k\r\n 艾斯佩拉 地区：#e#k无法进行每日任务#n#k\r\n 月之桥 地区：#e#k无法进行每日任务#n#k")
                        } else if (sel == 4) {
                            break
                        }
                    }
                }
            } else if (sel == 2) {
                npc.say(`今日剩余入场次数：#r${dayLimit - player.getPQLog(logName)}#k次`)
            } else {
                return;
            }
        }
    }
}