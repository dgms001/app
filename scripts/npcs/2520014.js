while (true) {
    var event;
    var currentTimestamp = 0;
    event = npc.getEvent("Event_Build"); //獲取活動腳本的名稱 test 對應 event 目錄裡面的 gailou.js 檔案
    if (player.getChannel() != 1) {
        npc.sayS("活動只能在1頻道進行！親！");
    } else if (event == null) {
        npc.sayS("活動腳本錯誤...請聯絡管理員修復！或重新開啟。");
    } else if (event != null && event.getVariable("state") == "1") {
        currentTimestamp = new Date().getTime();
        if (npc.askYesNoS("親愛的#r#h ##k您好，我是蓋樓活動員，本次活動時間為10分鐘.\r\n#e#r那就看你運氣啦 開始吧？")) {
            var expiration = new Date().getTime();
            var seconds = (expiration - currentTimestamp) / 1000;
            if (parseInt(event.getVariable("check")) >= 300 && seconds < 0.2) {
                npc.sayS("點選間隔時間不能超過0.2秒");
            } else if (event != null && event.getVariable("state") == "1") {
                event.setVariable("check", "" + (parseInt(event.getVariable("check")) + 1)); //設定點選次數+1
                var count = parseInt(event.getVariable("check")); //獲得總點選次數
                var max = parseInt(event.getVariable("maxCheck"));
                //var dj = rand(5000, 8000);
                var dj3 = rand(2000, 1000);
                var dj2 = rand(5000, 3000);
                if (count == max) {
                    player.gainMesos(25000000);
                    player.modifyCashShopCurrency(1, 10000);
                    player.gainItem(5062009, 30);//超級神奇魔方
                    player.gainItem(5062500, 30);//大師附加神奇魔方
                    player.gainItem(5062024, 10);//閃炫魔方
                    player.gainItem(5062503, 10);// 附加潛能記憶魔方
                    npc.broadcastNoticeWithoutPrefix("[搶樓活動]： 恭喜玩家 " + player.getName() + " 在搶樓活動中獲得一等獎，獲得大量魔方，10000點卷真讓人羨慕");
                    npc.sayS("[搶樓活動] 恭喜你獲得了搶樓活動一等獎。獲得了點卷10000點和5000萬金幣。超級魔方30個，大師附加魔方30個，閃炫魔方10個，附加潛能記憶魔方10個");
                } else if (count > max && count <= (max + 10)) {
                    player.gainMesos(2000000);
                    player.modifyCashShopCurrency(1, +dj2);
                    player.gainItem(5062009, 2);
                    player.gainItem(5062500, 2);
                    npc.broadcastNoticeWithoutPrefix("[搶樓活動]： 恭喜玩家 " + player.getName() + " 在搶樓活動中獲得二等獎，獲得大量魔方和" + dj2 + "點卷.");
                    npc.sayS("恭喜你獲得了搶樓活動二等獎。獲得了點卷" + dj2 + "點和500萬金幣，超級魔方2個，大師附加魔方2個");
                } else if (count > (max + 10)) {
                    player.gainMesos(15000000);
                    player.gainItem(5062024, 10);//閃炫魔方
                    player.gainItem(5062503, 10);// 附加潛能記憶魔方
                    player.modifyCashShopCurrency(1, +dj3);
                    event.setVariable("state", "0");
                    event.setVariable("endEvent", "true");
                    npc.broadcastNoticeWithoutPrefix("[搶樓活動]： 恭喜玩家 " + player.getName() + " 在搶樓活動中獲得三等獎,獲得魔方和" + dj3 + "點卷.");
                    npc.sayS("恭喜你獲得了搶樓活動三等獎。獲得了點卷" + dj3 + "點和2500萬金幣，閃炫魔方10個、附加潛能記憶魔方10個。\r\n本次搶樓活動已經結束...");
                } else {
                    npc.sayS("當前樓層: " + parseInt(event.getVariable("check")) + " 樓。");
                }
            } else {
                npc.sayS("活動還未開啟或者活動已經結束，所有獎勵均已經發放，請下次在參加。");
            }
        }
    } else {
        npc.sayS("活動還未開啟或者活動已經結束，活動結束後獎勵會立即發放\r\n#b#e110分鐘開放一次，每次活動為10分鐘\r\n時間2：20     4:20     6:20以此類推\r\n#e#d活動分一等獎，二等獎和三等獎.\r\n#r一等獎：#d第一個到達建樓高度的玩家獲得一等獎。(點卷10000點。金幣2500萬。超級魔方30個，大師附加魔方30個，閃炫魔方10個，附加潛能記憶魔方10個)\r\n#r二等獎：#d一等獎之後後續補樓的10個玩家為二等獎(獲得了點卷5000-3000點，金幣200萬。超級魔方2個，大師附加魔方2個)\r\n#r三等獎：#d為結束活動獎勵只限1人(獲得金幣1500萬、閃炫魔方10個、附加潛能記憶魔方10個和2000-1000點卷.)");
    }
}

function rand(lbound, ubound) {
    return Math.floor(Math.random() * (ubound - lbound)) + lbound;
}