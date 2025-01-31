/**
 *
 *
 */
npc.sayNext("陰險的狐狸，消滅掉了嗎？");
npc.sayNextS("#b你說要去收拾剩下的狐狸的，怎麼回事？", false);
npc.sayNext("啊，那個嘛？我後來是去了，但走錯了路，怕被 #o9300385# 抓去做人質，所以就回來了。");
npc.sayNextS("#b該不會是害怕狐狸而躲起來了吧？", false);
npc.sayNext("你在胡說什麼啊？！我為什麼會害怕狐狸？！我一點都不害怕狐狸！");
npc.sayNextS("#b……啊，有一隻 #o9300385# !", false);
npc.sayNext("啊！快躲起來！");
npc.sayNextS("#b……", false);
npc.sayNext("......");
npc.sayNext("……你這傢伙。別嚇哥哥我！哥哥我的心臟不好，不能受驚嚇！");
npc.sayNextS("#b(所以叫哥哥才不願意去，叫我去。)", false);
npc.sayNext("哼哼，不管怎樣，陰險的狐狸 消滅掉了。辛苦你了。我把一箇路過的冒險家送我的東西送給你，作為給你的報酬。來，拿著。 \r\n\r\n#fUI/UIWindow.img/Quest/reward# \r\n#i1372043# 1個 #t1372043# \r\n#i2022621# 25個 #t2022621# \r\n#i2022622# 25個 #t2022622#");
npc.clearBackButton();
if (player.getFreeSlots(1) >= 1 && player.getFreeSlots(2) >= 2) {
    player.gainExp(910);
    player.gainItem(1372043, 1);
    player.gainItem(2022621, 25);
    player.gainItem(2022622, 25);
    npc.completeQuest();
    npc.sayNext("是#b魔法師的攻擊武器短杖。#k 雖然你也可能沒什麼用，但拿在手裡到處走，還是很帥的，哈哈哈。");
    npc.sayNext("狐狸的數量確實增加了，對吧？奇怪。狐狸的數量為什麼會增加呢？看來必須調查一下。");

} else {
    npc.say("整理下揹包吧！");
}


