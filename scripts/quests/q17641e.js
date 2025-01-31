// 
// Quest ID:17641
// [凱梅爾茲共和國] 遠征隊起航


npc.sayNextE("你在這兒幹嘛呢?");
npc.sayNextE("..............", true);
npc.sayNextE("啊,你說過是要討伐海盜還是什麼的對吧。");
npc.sayNextE("..............", true);
npc.sayNextE("可是你能做到嗎?看上去傭兵人數也不多,而且沒個能值得信賴的人...");
npc.sayNextE("......走吧。", true);
npc.sayNextE("哎?走吧?走去哪兒?");
npc.sayNextE("都到這時候了你就直接說吧。想一起去。", true);
npc.sayNextE("......雖然我是個大忙人,但是你堅持需要幫助的話,我就答應你吧。走吧。");
npc.sayNextE("......這女孩到底幹嘛的呀。可是..我隨便接收下來沒問題嗎。讓她跟萊文說一聲他會看著辦的吧。", true);
npc.completeQuest();
player.gainExp(953667);
portal.makeEvent("berry_quest", false, [player, [865010001]]);