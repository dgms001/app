export default function () {
    if (player.getIntQuestRecordEx(34222, "inGame")) {
        player.updateQuestRecordEx(34222, "inGame", "0")
        if (player.getIntQuestRecordEx(34222, "clear")) {
            player.showTopScreenEffect("Map/Effect3.img/hungryMuto/Clear", 0)
        } else {
            player.showTopScreenEffect("Map/Effect2.img/event/gameover", 0)
        }
    }
}