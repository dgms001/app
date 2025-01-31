/**
 *
 *
 */

if (player.getMakingSkillLevel(92010000) > 0) {
    player.openUIWithOption(0x2A, 9031011);
} else {
    player.dropAlertNotice("未學習採礦，無法使用");
}
