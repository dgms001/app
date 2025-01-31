/**
 *
 *
 */

let event = reactor.getEvent();
if (event != null) {
    var posx1 = Array(-1328, -1149, 1173, 1357);//兩邊
    var posy1 = Array(-640, -400, -160, 80, 260);//兩邊
    var posx2 = Array(-854, -614, 598, 832);//中間
    var posy2 = Array(-700, -460, -220, 20, 260);//中間
    if (map != null) {
        for (var i = 0; i < posx1.length; i++) {
            var pox = posx1[i];
            for (var z = 0; z < posy1.length; z++) {
                var posY = posy1[z];
                map.spawnMob(9309035, pox, posY);
            }
        }
        for (var i = 0; i < posx2.length; i++) {
            var pox = posx2[i];
            for (var z = 0; z < posy2.length; z++) {
                var posY = posy2[z];
                map.spawnMob(9309035, pox, posY);
            }
        }
    }
}
