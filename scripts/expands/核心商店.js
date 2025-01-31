        var needNX = 10; //多少點券=1碎片
        var number = npc.askNumber("\t\t\t\t#r#e#fs21#核心碎片購買\r\n\r\n#e#b#fs16#楓點數*#r" + needNX + "#b= 核心碎片*#r1\r\n\r\n\r\n\r\n#d請輸入要購買的碎片數量\r\n\r\n", "1", 1, 99999);
        if (needNX * number > player.getCashShopCurrency(2)) {
            npc.askMenuA("楓點數不足", 3003307);
        } else {
            player.updateQuestRecordEx(1477, "count", player.getIntQuestRecordEx(1477, "count") + number);
            player.modifyCashShopCurrency(2,  - (needNX * number));
            npc.askMenuA("\r\n\r\n\r\n\r\n\t\t\t\t#b#fs21##e購買成功獲得 " + number + " 個核心碎片", 3003307);
        }