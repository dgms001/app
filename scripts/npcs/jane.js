/**
 * Jane (NPC 1002100)
 * Victoria Road: Lith Harbor (Map 104000000)
 *
 * Sells potions after completing Jane the Alchemist quests - i.e. Jane and the
 * Wild Boar (Quest 2010), Jane's First Challenge (Quest 2011), Jane's Second
 * Challenge (Quest 2012), and Jane's Final Challenge (Quest 2013).
 *
 *
 */

if (player.isQuestCompleted(2013)) {
    let items = [2000002, 2022003, 2022000, 2001000];
    let costs = [310, 1060, 1600, 3120];
    let recoverAmount = [300, 1000, 800, 1000];
    let recoverType = ["HP", "HP", "MP", "HP and MP"];

    npc.sayNext("是你…多虧了你，我能做很多事。現在我做了很多東西。如果你需要什麼，告訴我。");
    let selStr = "你想買什麼?#b";
    for (let i = 0; i < items.length; i++)
        selStr += "\r\n#L" + i + "##z" + items[i] + "# (價格 : " + costs[i] + " 金幣)#l";
    selection = npc.askMenu(selStr);

    let item = items[selection];
    let cost = costs[selection];
    let count = npc.askNumber("你想要#b#t" + item + "##k? #t" + item + "# 會恢復 " + recoverAmount[selection] + " " + recoverType[selection] + ". 你想買多少?", 1, 1, 100);
    selection = npc.askYesNo("你將要購買#r" + count + "#k個#b#t" + item + "##k? 每個#t" + item + "#需要" + cost + "金幣,所以一共是#r" + cost * count + "#k金幣.");
    cost *= count;
    if (selection == 1) {
        if (player.hasMesos(cost) && player.gainItem(item, count)) {
            player.loseMesos(cost);
            npc.sayNext("謝謝你。這裡的東西總是可以做的，所以如果你需要什麼，歡迎再來。");
        } else {
            npc.sayNext("請檢查並檢視您的其他欄中是否有空位，你可能沒有#r" + cost + "#k金幣.");
        }
    } else if (selection == 0) {
        npc.sayNext("我還有很多你以前給我的材料。所有的物品都在那裡，所以請慢慢選擇.");
    }
} else if (player.isQuestCompleted(2010)) {
    npc.sayNext("你看起來不夠強壯，我沒辦法為你提供服務…");
} else {
    npc.say("我的夢想是到處旅行，就像你一樣。但是我父親不允許我這樣做，因為他認為這很危險。不過，如果我向他證明我不是他認為的那個軟弱的女孩，他可能會說“好的”");
}