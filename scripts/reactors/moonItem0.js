/**
 * nut (Reactor 9102002),
 *   nut (Reactor 9102003) [linked from moonItem1],
 *   nut (Reactor 9102004) [linked from moonItem2],
 *   nut (Reactor 9102005) [linked from moonItem3],
 *   nut (Reactor 9102006) [linked from moonItem4],
 *   nut (Reactor 9102007) [linked from moonItem5]
 * Hidden Street: Primrose Hill (Map 910010000)
 *
 * Henesys PQ plants.
 * Drops random colors of primrose seeds to advance first stage of Henesys party
 * quest.
 *
 *
 */

let items = [4001095, 4001096, 4001097, 4001098, 4001099, 4001100];
if (Math.floor(Math.random() * 2) == 1) //50% chance a seed is dropped
    //8.33% chance a particular color seed is drpoped
    reactor.dropItemsOld(0, 0, 0, items[Math.floor(Math.random() * items.length)], 1000000);