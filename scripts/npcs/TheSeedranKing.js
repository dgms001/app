/**
 *
 *
 */

var sel = npc.askMenu("#e[起源之塔排名公告欄]\r\n#L0##n#b起源之塔探險排名#l\r\n#L2#我探險到的最深層#l");
switch (sel) {
    case 0:
        player.openUI(211);
        break;
    case 2:
        var best = player.getIntQuestRecordEx(42001, "stage");
        npc.say("#e[我的累計最佳記錄]#n\r\n\r\n累計最佳記錄：#e#b" + best + " #k#n層");
        break;
    default:
        break;
}
