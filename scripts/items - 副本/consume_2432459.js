/**
 *
 *
 */

var event = npc.getEvent();
if (event != null) {
    if (map.getId() == 992033000) {
        for (var x = 0; x < 5; x++) {
            for (var y = 0; y < 5; y++) {
                var rName = String(x) + String(y);
                var stat = map.getReactorStateId(rName);
                ///順時針 stat +1  3->0
                if (stat >= 3) {
                    stat = 0;
                } else {
                    stat += 1;
                }
                map.setReactorState(rName, stat, 0);
            }
        }
        var s33_key = parseInt(event.getVariable("stage33_Value"));
        s33_key += 1;
        event.setVariable("stage33_Value", String(s33_key));
        if (npc.getSlot() > 0) {
            player.loseItem(npc.getItemId(), npc.getSlot(), 1);
        }
    }
}

