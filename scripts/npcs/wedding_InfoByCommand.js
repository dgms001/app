let local = "經典小屋";
let itemId = 5250501;


let sel = npc.askMenu(" 看樣子你應該有事情想問我吧。說吧，你想知道什麼。\r\n#b#L0# 我想在" + local + "婚禮禮堂舉行婚禮！#l\r\n#L1# 如何求婚？#l\r\n#L2# 如何參加婚禮呢？ #l\r\n#L3# 我要兌換#z" + itemId + "# #l");
switch (sel) {
    case 0:
        npc.sayNext("在" + local + "婚禮禮堂中舉行婚禮非常簡單！只要你擁有商城中出售的#b小屋婚禮券#k即可。不過，新郎新娘必須都處在" + local + "婚禮禮堂中才行。");
        npc.sayNext("在倆人面對面的狀態下雙擊#b小屋婚禮券#k，即可進行求婚。不管男女，只要持有婚禮券，即可進行求婚。這是不是很浪漫呢~？");
        break;
    case 1:
        npc.sayNext("雙擊#b小屋婚禮券#k，可以輸入名字。需要注意的是，務必在#b" + local + "婚禮禮堂中與想要求婚的對象面對面#k。畢竟躲起來求婚可是很懦弱的哦。");
        npc.sayNext("對方接受求婚後，立即進入為結婚準備的小小婚禮禮堂。求婚前，也別忘了聯系想要道賀的賓客哦！");
        break;
        break;
}

    case 2:
        npc.sayNext("求婚被接受後，新郎新娘進入婚禮禮堂，" + local + "婚禮禮堂裡就會為兩位新人豎起婚禮拱門~? 想要參加婚禮的賓客可通過雙擊該#b婚禮拱門的名牌#k，進入婚禮禮堂。");
        npc.sayNext("#b最多只有6名#k賓客可以進入婚禮禮堂，因此必須抓緊哦！進入婚禮禮堂後，#b在婚禮結束之前無法離開#k。請一定要為道賀留出足夠的時間哦?");
        npc.sayNext("小屋婚禮結束後，新郎新娘以及賓客均可以獲得#b特別增益#k~！#b幸運的那個人#k可以獲得比別人#b更好的特別增益#k~ 敬請期待吧?");
        break;
    case 3:
        if (player.hasItem(5250500, 1)) {
            if (player.canGainItem(itemId, 1)) {
                player.loseItem(5250500, 1);
                player.gainItem(itemId, 1);
                npc.say("#z" + itemId + "#兌換成功！現在你可以在這裡向你的心上人求婚啦！");
            } else {
                npc.say("特殊欄空間不足，確保有一個空位！");
            }
        } else {
            npc.say("沒有#z5250500#是不能兌換#z" + itemId + "#的！請前往現金商城進行購買！");
        }
