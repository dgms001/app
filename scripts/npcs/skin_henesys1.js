/* global npc, player */

/**
 * Ms. Tan: Dermatologist (NPC 1012105)
 * Victoria Road: Henesys Skin-Care (Map 100000105)
 *
 * Henesys skin changer.
 *
 *
 */

let skinColorChoices = npc.getAllSkinColors();
let isAngel = false;
let isBeta = false;
if (player.getBeginner() == 6001) {
    isAngel = npc.askAngelicBuster() != 0;
} else if (player.getBeginner() == 10000) {
    isBeta = npc.askMenu("請選擇：\r\n#b#L0#神之子：阿爾法#l\r\n#L1#神之子：貝塔#l") != 0;
}

npc.sayNext("你好！歡迎光臨射手村護膚中心。你想獲得和我一樣健康緊繃的面板嗎？只要有#b萬能護膚券#k的話，我就可以按照你的要求為你護理面板。你想嘗試一下嗎？");
let res = npc.askAvatar("用我們護膚中心開放的機械，可以檢視護膚後的效果。你想要什麼樣的面板呢？請挑選一下～", skinColorChoices, 5153015, isAngel, isBeta);
let selection = res[0];
let buy = res[1];
if (player.hasItem(5153015, 1)) {
    player.loseItem(5153015, 1);
    player.setSkin(skinColorChoices[selection]);
    npc.sayNext("完成了,讓朋友們讚歎你的新膚色吧!");
} else if (buy == 1) {
    if (player.getCashShopCurrency(2) >= 480) {
        player.modifyCashShopCurrency(2, -480);
        player.setSkin(skinColorChoices[selection]);
        npc.sayNext("完成了,讓朋友們讚歎你的新膚色吧!");
    } else {
        npc.sayNext("嗯……你的抵用券好像不夠哦，那我無法為你進行服務。");
    }
} else {
    npc.sayNext("嗯……你好像沒有萬能護膚券啊。對不起，沒有萬能護膚券的話，我就不能幫你護理面板。");
}