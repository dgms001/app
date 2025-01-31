/**
 *
 *
 */
let ret = npc.askYesNo("進入需要黑龍入場券1張，每次進入都會#r扣除1張#k黑龍入場券，請慎重！\r\n\r\n#r#e友情提示1:每個角色一天只能登記10次黑龍遠征隊. \r\n友情提示2:黑龍入場券在遊戲商城中購買.#n#k");
if (ret == 1) {
    if (player.hasItem(5220006, 1)) {
        player.loseItem(5220006, 1);
        player.changeMap(240050400);
    } else {
        npc.say("請確認你身上有#r#e#z5220006##n");
    }
}
