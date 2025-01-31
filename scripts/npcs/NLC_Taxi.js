/**
 * NLC Taxi (NPC 9201056)
 * New Leaf City Town Street: New Leaf City - Town Center (Map 600000000),
 *   Phantom Forest: Haunted House (Map 682000000)
 *
 * Taxi NPC for Masteria. Teleports players from New Leaf City - Town Center to
 * the Haunted House in Phantom Forest.
 *
 *
 */

switch (map.getId()) {
    case 610010000: {
        let selection = npc.askYesNo("嘿，你好。玩的還開心吧。準備回新葉都市了嗎？");
        if (selection == 1) {
            npc.sayNext("那就讓我們回到文明社會吧！進來坐好……馬上就到目的地！");
            player.changeMap(600000000);
        } else if (selection == 0) {
            npc.say("哦，你還想在這附近轉轉？可以理解。等你想回新葉都市了，過來找我就行！");
        }
        break;
    }
    default : {
        let selection = npc.askYesNo("嘿，你好。有興趣深入大師領地荒野探險嗎？這片大陸還有很多地方無人涉足……所以說能走的路不多。幸好我們有這東西……有了它，沒有路也能前進，而且看上去還特別帥！我現在可以帶你去#b幽影森林#k。那裡有個叫#b普倫德加斯特莊園#k的地方。有人說那兒鬧鬼！怎麼樣……想去見識一下麼");
        if (selection == 1) {
            npc.sayNext("好嘞！繫好安全帶，咱們這就去那莊園咯！小心顛簸哦！");
            player.changeMap(610010000, 6);
        } else if (selection == 0) {
            npc.say("是嗎？情有可原……我也覺得那裡很嚇人！改變心意的話，就來這兒找我吧。");
        }
        break;
    }
}