/**
 * Cesar: Royal Guard Captain (NPC 2101018)
 * Victoria Road: Henesys (Map 100000000),
 *   Victoria Road: Perion (Map 102000000),
 *   Victoria Road: Nautilus Harbor (Map 120000000),
 *   Ludibrium: Ludibrium (Map 220000000),
 *   The Burning Road: Ariant (Map 260000000),
 *   Singapore: CBD (Map 540000000)
 *
 * Admits players into Ariant Coliseum Challenge.
 *
 *
 */

if (player.getLevel() >= 20 && player.getLevel() <= 30) {
    npc.sayNext("I have prepared a huge festival here at Ariant for the great fighters of MapleStory. It's called #bThe Ariant Coliseum Challenge#k.");
    npc.sayNext("The Ariant Coliseum Challenge is a competition that matches the skills of monster combat against others. In this competition, your object isn't to hunt the monster;  rather, you need to #beliminate a set amount of HP from the monster, followed by absorbing it with a jewel#k. #bThe fighter that ends up with the most jewels will win the competition.#k.");

    let str;
    switch (map.getId()) {
        case 100000000:
            str = "If you are a superior bowman from #b#m" + map.getId() + "##k, training under the mighty Athena Pierce, then are you interested in participating in The Ariant Coliseum Challenge?!";
            break;
        case 102000000:
            str = "If you are a strong and brave warrior from #b#m" + map.getId() + "##k, training under Dances With Balrogs, then are you interested in participating in The Ariant Coliseum Challenge?!";
            break;
        case 120000000:
            str = "If you are a brave fighter from #b#m" + map.getId() + "##k, the town of fearless pirates, then are you interested in participating in The Ariant Coliseum Challenge?!";
            break;
        case 220000000:
            str = "If you are an adventurer from #b#m" + map.getId() + "##k, then are you interested in participating in The Ariant Coliseum Challenge?!";
            break;
        case 260000000:
            str = "Are you interested in participating in The Ariant Coliseum Challenge?!";
            break;
    }
    let selection = npc.askMenu(str + "\r\n#b"
        + "#L0# I'd love to participate in this great competition.#l");
    switch (selection) {
        case 0:
            npc.sayNext("Okay, now I'll send you to the battle arena. I'd like to see you emerge victorious!");
            npc.rememberMap("ARIANT");
            player.changeMap(980010000, "out00");
            break;
    }
} else {
    npc.say("Your level is not proper to participate in the Ariant Coliseum Challenge. Only players between Level #b20~30#k may participate.");
}