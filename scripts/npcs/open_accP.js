/**
 *
 *
 */

if (player.getMakingSkillLevel(92030000) > 0) {
    player.openUIWithOption(0x2A, 9031013);
} else {
    player.dropAlertNotice("未學習飾品製作，無法使用");
}
