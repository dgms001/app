

let worldTrip = [500000000, 800000000];
if (map.getId() == 800000000) {
    let [returnMap, spawnPoint] = npc.getRememberedMap("WORLD_TOUR");
    let selection = npc.askMenu("還滿意冒險遊程嗎? ?\r\n"
        + "#b#L0#已經遊覽了，想回到#m" + returnMap + "#? #l\r\n"
        + "#b#L1#我想繼續探索這個地方#l");
    if (selection == 0) {
        npc.sayNext("好吧。現在我將帶你回到原來的地方。如果你想再旅行，請再次跟我對話！");
        player.changeMap(returnMap, spawnPoint);
        npc.resetRememberedMap("WORLD_TOUR");
    } else if (selection == 1) {
        npc.say("好啊。如果你改變主意，請告訴我。");
    }
} else {
    let msg = "為了從繁忙的日常中解脫，去享受一趟旅遊怎麼樣？不僅可以體檢新穎的異國文化，還能學到不少東西的機會！我們冒險島旅遊公司為您準備了，豐富有趣的#b世界旅遊#k套餐。誰說環遊世界很貴？請放一萬個心。我們#b冒險島世界旅遊套餐#k只需要#b3000金幣#k就可以享樂全程。";
    npc.sayNext(msg);
    let str = "";
    for (var i = 0; i < worldTrip.length; i++) {
        str += "#b#L" + i + "# #m" + worldTrip[i] + "##k\r\n";
    }
    selection = npc.askMenu("現在就可以去往 #b世界各地充滿冒險島特色的景點#k遊覽一番。在每個旅遊地我都會為大家提供滿意熱誠的服務。那麼請準備好，我們出發去\r\n" + str);

    if (selection >= 0) {
        npc.sayNext("你想去#b#m" + worldTrip[selection] + "##k旅遊嗎#k? 這是個不錯的地方，在那裡玩肯定很開心的。");
        let cost = 3000;
        if (player.hasMesos(cost)) {
            npc.rememberMap("WORLD_TOUR");
            player.changeMap(worldTrip[selection]);
            player.loseMesos(cost);
        } else {
            npc.say("請確認你是否帶有足夠的盤纏。");
        }
    }
}