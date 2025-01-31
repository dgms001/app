/**
 * quest00
 * Victoria Road: The Forest East of Henesys (Map 100030000)
 *
 * Warps players into Utah's pig farm for Camila's Gem (Quest 2073).
 *
 *
 */

if (player.isQuestStarted(2073))
    if (portal.makeEvent("pigFarm", true, player) != null)
        portal.playPortalSE();
    else
        portal.sayErrorInChat("It seems like someone already has visited Yoota's Farm.");
else
    portal.sayErrorInChat("There's a door that'll lead me somewhere, but I can't seem to get in there.");