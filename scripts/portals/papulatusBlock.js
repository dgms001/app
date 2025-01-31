// Created by Jackson
// ID:[220080100]
// MapName:時間塔的本源
// 時間塔的本源
portal.abortWarp()
if (map.getReactorStateId("portal") == 0) {

} else if (!map.blockTimeHole()) {
        player.showSystemMessage("前往帕普拉圖斯的世界。");
}
