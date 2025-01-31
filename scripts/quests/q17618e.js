// 
// Quest ID:17618
// [凱梅爾茲共和國] 初次見面


npc.sayNextENoEsc("怎麼可能。我花了那麼多錢僱來的傭兵竟然這模樣..", 9390204);
npc.sayNextENoEsc("怎麼樣,我看你現在還是乖乖交出交易品吧。", true);
npc.sayNextENoEsc("額... 你是什麼人,為什麼要妨礙我的好事。");
npc.sayNextENoEsc("你不用知道我是誰。我有我的理由。再說,你偷了東西,我不能就這麼放過你。", true);
npc.sayNextENoEsc("好了,你要怎麼做。是乖乖交出交易品,還是要讓我教訓你一下才行。", true);
npc.sayNextENoEsc("切。現在狀況不妙。我們今天就此作別吧。");
let OBJECT_1 = player.getSessionValue("npc1");
player.setNpcViewOrHide(OBJECT_1, false, false);
npc.sayNextENoEsc("一下子就逃得沒影了。那,我現在還是回村子吧。", true);
npc.sayNextENoEsc("那人是叫提皮斯嗎?把東西還給那個船員就可以了吧。", true);
npc.completeQuest();
player.startQuest(17619, 0);//Quest Name:[凱梅爾茲共和國] 不許逃
player.gainExp(5530255);