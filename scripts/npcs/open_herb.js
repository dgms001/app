/**
 *
 *
 */

if (player.getMakingSkillLevel(92000000) > 0) {
    player.openUIWithOption(0x2A, 9031010);
} else {
    player.dropAlertNotice("未學習採藥，無法使用");
}
