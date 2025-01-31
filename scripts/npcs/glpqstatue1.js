/*
*/


switch (map.getId()) {
    case 610030500:
        npc.say("傳奇生物被稱為主監護人等著你。這是一箇深紅色的監護人,裡德利曾經嘗試,導致其成為高度抵抗魔法攻擊,矛,釘頭槌,一切——除了箭發射與非凡的力量。弓箭手和女人!作為無可爭議的弓和箭的主人,你必須使用你的最強大的攻擊——從掃射到颶風穿刺箭摧毀這個強大的生物,到達鮑曼雕像的祖先鞠躬!好運！");
        break;
    case 610030000:
        npc.say("唯一的已知的神聖的弓箭手,Lockewood是保持最著名的英雄之一。特別要注意的是他的定製的白色和金色的戰鬥barb,據說強大的女神的祝福。他的目標是長distanes非常準確。害怕和尊重為他“創世紀箭”和“厄運鳳凰”,他曾經殺了六大喇叭谷的英雄。");
        break;
    case 610030540:
        if (map.getEventMobCount() == 0) {
            if (!player.hasItem(4001258, 1)) {
                player.gainItem(4001258, 1);
            }
            player.changeMap(610030500, 0);
        } else {
            npc.say("消除所有的深紅色的怪物。" + map.getEventMobCount());
        }
        break;
}
