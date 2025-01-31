export default function () {
    const questId = 123456
    const jailTimes = player.getIntQuestRecordEx(questId, "jail_times")
    let msg = `這是你第#r${jailTimes}#k次進入真實之屋。因為使用宏、腳本等被系統偵測而被送入這裏。\r\n`;
    msg += "在懲罰時間結束前，不能離開這裏。只有角色線上時，懲罰時間會被扣減。\r\n"
    msg += "隨著你進入真實之屋的次數增加，懲罰時間也會越來越長。"
    npc.sayNext(msg)
    const leftSeconds = player.getIntQuestRecordEx(questId, "left_seconds")
    if (leftSeconds < 0) {
        npc.say("現在你可以離開這裏了。")
        player.changeMap(100000000)
    } else {
        npc.say("你現在還不能離開。")
    }
}