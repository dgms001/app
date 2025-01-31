/**
 * (Reactor 2000)
 * Rainbow Street: Amherst (Map 1010000),
 *   Rainbow Street: Amherst Townstreet (Map 1010002),
 *   Rainbow Street: Snail Field of Flowers (Map 1010004),
 *   Rainbow Street: The Field East of Amherst (Map 1020000),
 *   Orbis: Top of the Hill (Map 200000300)
 *
 * Scrap box in Amherst area and in Top of the Hill in Orbis.
 * Drops miscellaneous potions and mesos.
 * Locations in Amherst also drop quest items for Pio's Collecting Recycled
 * Goods (i.e. Rusty screw and Old Wooden Board).
 *
 *
 */

if (player.isQuestActive(32208)) {
    reactor.dropItemsOld(0, 0, 0, 4033915, 1000000);
} else if (player.isQuestActive(32213)) {
    reactor.dropItemsOld(0, 0, 0, 4033914, 1000000);
} else if (player.isQuestActive(1008)) {
    reactor.dropItemsOld(0, 0, 0, 4031161, 1000000, 4031162, 1000000);
}
