//
// Quest ID:17668
// [凱梅爾茲共和國] 西溫的消失


npc.sayNext("現在就去,去了就行了吧。");
npc.sayNextS("好吧,現在就去吧。");
npc.sayNext("等會,特來敏小姐去哪了?", 9390202);
npc.sayNext("啊,剛剛戰鬥前我怕克萊爾小姐被捲進來,把她送到外面去了。");
npc.sayNext("大概..在#b#m865030300##k了吧。");
if (npc.askYesNoS("原來是那樣。那麼我們也趕緊出去吧。")) {
    npc.sayNextENoEsc("好吧,趕緊帶到吉爾伯特首領那兒去吧。", true);
    npc.sayNextENoEsc("那樣可不行。", 9390218);
    let OBJECT_1 = player.spawnTempNpc(9390218, -485, 70, 1);//NpcName:OBJECT_1
    player.destroyTempNpc(OBJECT_1);
    player.setNpcSpecialAction(OBJECT_1, "summon", 0, false);
    npc.sayNextE("呃啊!");
    npc.startQuest();
    player.destroyTempNpc(OBJECT_1);
    npc.sayNextENoEsc("厄，西溫呢！重要的證人消失了。", true);
    npc.sayNextENoEsc("現在要如何才能洗脫罪名呢。", 9390202);
    npc.sayNextENoEsc("稍微放鬆一下竟然就發生這樣的事情。將來的事情也讓人擔心吶。", true);
    npc.sayNextENoEsc(" 嗯,啊,如此特來敏小姐也叫人擔心呢!得趕緊出去看看!", 9390202);
    npc.sayNextENoEsc("剛剛西溫說克萊爾在哪裡?", true);
    npc.sayNextENoEsc("說大概會在#b#m865030300##k。趕緊走吧。", 9390202);
} else {
    npc.sayS("等等,還不能出去。");
}