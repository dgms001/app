/**
 * moonflower1 (Reactor 9108000) [custom],
 *   moonflower2 (Reactor 9108001) [custom],
 *   moonflower3 (Reactor 9108002) [custom],
 *   moonflower4 (Reactor 9108003) [custom],
 *   moonflower5 (Reactor 9108004) [custom],
 *   moonflower6 (Reactor 9108005) [custom]
 * Hidden Street: Primrose Hill (Map 910010000)
 *
 * Henesys PQ flowers.
 * Activated and blooms when the correct color primrose seed is dropped in its
 * area.
 * Overridden from script-less reactors to trigger the Moon Bunny spawn.
 *
 *
 */

let event = reactor.getEvent("moonrabbit");
let newCount = event.getVariable("flowers") + 1;
event.setVariable("flowers", newCount);
if (newCount == 6) {
    let map = event.getMap(910010000);
    map.setNoSpawn(false);
    let moonBunnyMob = map.spawnMob(9300061, -180, -196, true);
    event.setVariable("moonBunnyMob", moonBunnyMob);
    event.startTimer("riceCakeDrop", moonBunnyMob.getDropAfter(false));
}