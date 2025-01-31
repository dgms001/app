

/* global npc, player */

let selection;

if (map.getId() == 951000000) {
    let [returnMap, spawnPoint] = npc.getRememberedMap("UNITY_PORTAL");
    selection = npc.askYesNo("你好。怪物公園客車竭誠為大家提供最好的服務。你想回到原來的村裡去嗎？");
    if (selection == 1) {
        npc.sayNext("那麼坐好了，我們馬上出發！");
        player.changeMap(returnMap, spawnPoint);
        npc.resetRememberedMap("UNITY_PORTAL");
    } else if (selection == 1) {
        npc.sayNext("那麼等你考慮好了再來吧！");
    }
} else {
    selection = npc.askYesNo("親愛的顧客，你想到充滿了歡樂的休彼德蔓的怪物公園去嗎？");
    if (selection == 1) {
        npc.sayNext("那麼坐好了，我們馬上出發！");
        npc.rememberMap("UNITY_PORTAL");
        player.changeMap(951000000);
    } else {
        npc.sayNext("那麼等你考慮好了再來吧！");
    }

}