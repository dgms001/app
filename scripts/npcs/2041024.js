

npc.sayNext("你想獲得#b#i4031179:# #t4031179##k嗎？");

if (player.hasItem(4031179,1)) {
        npc.sayNext("你身上已經有#b#i4031179:# #t4031179##k了啊，還來找我做什麼？");
    } else {
        player.gainItem(4031179, 1);
    }

        
