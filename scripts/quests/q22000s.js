/**
 *
 *
 */
npc.sayNext("醒了嗎，小不點？");
npc.sayNextS("#b嗯……媽媽也醒了嗎？#k", false);
npc.sayNext("嗯……但是你怎麼好象沒睡著呢？昨天晚上打了一夜的雷。所以才沒睡好嗎？");
npc.sayNextS("#b不，不是因為那個，是因為做了一箇奇怪的夢。#k", false);
npc.sayNext("奇怪的夢，夢見什麼呢？");
npc.sayNextS("#b嗯……#k", false);
npc.sayNextS("#b(說明夢見在迷霧中遇到龍的事情。)", false);
let ret = npc.askYesNo("呵呵呵呵，龍？怎麼會夢到這個呢？沒被吃掉，真是太好了。你做了個有趣的夢，去告訴 尤塔 吧。他一定會很高興的。");
if (ret == 1) {
    npc.startQuest();
    npc.sayNext("#b尤塔#k 去 #b前院#k 給獵犬餵飯了。從家裡出去就能見到他了。");
    let string = ["UI/tutorial/evan/1/0"];
    npc.sayImage(string);
} else {
    npc.sayNext("嗯？不想告訴 尤塔 嗎？真是，兄弟之間應該好好相處嘛。");
}