//
// Quest ID:17642
// [凱梅爾茲共和國] 改變主意的男人


npc.sayNext("好了,趕緊動起來吧。沒時間了。就現在這一刻說不定普賽依又在襲擊某條商船了。");
npc.sayNextS("喂,萊文。");
npc.sayNext("歡迎你。第一次來到我們船上吧?雖然是用商船改造的船,但是樣子還是有些變了吧。不過說到底還是艘商船而已。");
if (npc.askYesNo("可是你有什麼事嗎?有什麼要辦的事情嗎?")) {// Response is Yes
    npc.startQuest();
    npc.sayNextS("我還沒來得及跟你說,這位是要搭乘這船的人。所以儘管遲了但是還是應該跟你說一聲才是");
    npc.sayNext("你在說什麼呀?誰要乘船?");
    npc.sayNextS("啊..其實我也不知道她名字呢。可是你應該認識她的。她的實力好像也還行。");
    npc.sayNext("你說什麼?你現在讓一箇連名字都不知道的人隨便搭乘我們船嗎?實力不是重要的。重要的是航海不是開玩笑的。");
} else {
    npc.say("無聊的傢伙。");
}