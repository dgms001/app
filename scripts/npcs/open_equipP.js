/**
 *
 *
 */

if (player.getMakingSkillLevel(92020000) > 0) {
    player.openUIWithOption(0x2A, 9031012);
} else {
    player.dropAlertNotice("未學習裝備製作，無法使用");
}
