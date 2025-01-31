/**
 *
 *
 */

var event = npc.getEvent();
if (event != null) {
        var number = parseInt(Math.floor(Math.random() * 8) + 1);
        var color = "r";
        var rand = parseInt(Math.floor(Math.random() * 4));
        switch (rand) {
                case 0:
                        color = "r";
                        break;
                case 1:
                        color = "b";
                        break;
                case 2:
                        color = "g";
                        break;
                case 3:
                        color = "y";
                        break;
        }
        //g r b y
        var bb = number == 8 ? "8" : "0";
        player.updateQuestRecordEx(42006, "g", bb);
        player.updateQuestRecordEx(42006, "r", bb);
        player.updateQuestRecordEx(42006, "b", bb);
        player.updateQuestRecordEx(42006, "y", bb);
        player.updateQuestRecordEx(42006, color, number);
        player.showAvatarOrientedRepeat("Effect/OnUserEff.img/aquarisTower/cardChange/v", 0, 1);
        player.showAvatarOrientedRepeat("Effect/OnUserEff.img/aquarisTower/card/" + color + "/" + number, 0, 1);
}

