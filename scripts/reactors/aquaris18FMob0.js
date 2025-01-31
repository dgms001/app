/**
 *
 *
 */

let event = reactor.getEvent();
if (event != null) {
    for (let i = 0; i < 3; i++) {
        map.spawnMob(9309006, player.getPosition().getX(), player.getPosition().getY());
    }
    for (let i = 0; i < 3; i++) {
        map.spawnMob(9309007, player.getPosition().getX(), player.getPosition().getY());
    }
}