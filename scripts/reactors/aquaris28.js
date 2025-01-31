/**
 *
 *
 */

let event = reactor.getEvent();
if (event != null) {
    var posx1 = Array(609, -503);//兩邊
    var posy1 = Array(275, 95, -205, -445);//兩邊
    if (map != null) {
        for (var i = 0; i < posx1.length; i++) {
            var pox = posx1[i];
            for (var z = 0; z < posy1.length; z++) {
                var posY = posy1[z];
                map.spawnMob(9309064, pox, posY);
            }
        }
    }
}
