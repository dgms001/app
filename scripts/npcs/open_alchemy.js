/**
 *
 *
 */

if (player.getMakingSkillLevel(92040000) > 0) {
    player.openUIWithOption(0x2A, 9031014);
} else {
    player.dropAlertNotice("未學習鍊金術，無法使用。");
}
