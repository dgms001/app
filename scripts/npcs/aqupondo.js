// 
// [萊文·達尼爾拉]  |  [9390234]
// MapName:運河戰場


if (map.getId() == 865020051) {
    let selection = npc.askMenu("結束之後，要返回#m865020300#嗎？\r\n#b\r\n#L0#返回#m865020300#。#l", 9390234);
    if (selection == 0) {
        player.showSystemMessage("返回運河4。");
        player.changeMap(865020300, 1);
    }
}