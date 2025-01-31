/*
 * Boss: BlackMage - Extreme
 * OnUserEnter
 */

export default function () {
    let event = player.getEvent()
    if (event != null) {
        switch (map.getId()) {
            case 450013910:
            case 450013930:
                player.openUI(1204)
                player.addPopupSay(0, 4000, "该地区发生的攻击好像是创造和破坏诅咒。\r\n如果同时获得两种诅咒，将会受到#b巨大的伤害#k，因此一定要注意。", "")
                break
            case 450013950:
                player.openUI(1204)
                player.addPopupSay(3003902, 4000, "#face1#走吧！我负责报仇，你则守护世界。", "")
                break
            case 450013970:
                player.openUI(1204)
                player.addPopupSay(0, 4000, "空无一人的世界……只剩下我自己吗……", "")
                player.setActionBar(39)
                break;
            default:
                player.setActionBar(-1)
                break;
        }
        player.showDeathCount()
    }
}