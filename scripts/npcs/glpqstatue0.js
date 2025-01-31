if (map.getId() == 610030500) {
    npc.say("令人難以置信的力量和權力,任何人都可以實現。但是戰士什麼特別之處是他們的鋼鐵意志。不管的,一箇真正的戰士推直到勝利是有保證的。因此,戰士室是一箇殘酷的道路,房間本身就是對你不利,以及超強的怪物。使用你的技能來擺脫效果和擊敗怪物在到達武士雕像和索賠主劍。好運！");
} else if (map.getId() == 610030000) {
    npc.say("傳奇家族的英雄,從 Vrisiens Stormcasters最初的創始人。家庭是獨一無二的,因為每個兒子或女兒繼承了祖先的全部戰鬥技巧。這種能力已經被證明是非常有用,因為它允許幾乎無限的策略,即興創作和戰術擊敗所有的敵人。一箇真正的家庭幾代人。");
} else if (map.getId() == 610030510) {
    if (map.getEventMobCount() == 0) {
        if (!player.hasItem(4001259, 1)) {
            player.gainItem(4001259, 1);
        }
        player.changeMap(610030500, 0);
    } else {
        npc.say("消除所有的深紅色的怪物。" + map.getEventMobCount());
    }
}
