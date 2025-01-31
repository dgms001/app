/**
 * 貿易除錯用
 *
 */

let ret = npc.askYesNo("你不想再進行貿易了，要離開這裡了嗎？");
if (ret == 1) {
    npc.sayNext("好的，那麼我們現在就準備離開了！");
    player.changeMap(993000837);
}
