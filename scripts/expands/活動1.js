/**
 * 新端腳本-戒指系統
 **/
var ttt2 = "#fEffect/TwEff/violeta_hope/win/0#";
var menuList = Array(
    Array("#d升階說明", 1),
    Array("#b領取盾牌", 2),
    Array("#d盾牌升階", 3)
    //Array("#r戒指潛能" , 4)
    //Array("潛能列表(可隨機潛能查詢)" , 5)
);

var nowLevel = 0; //當前戒指階段

var chibangList = Array(
    // 階段 裝備程式碼 屬性值 材料  BOSS/無視/所屬 請按照順序填寫

    //階段1
    Array(1, 1092064, 0, null, 0),
    //階段2
    Array(2, 1092064, 18,
        Array(
            Array(4033642, 30),
        ),
        1
    ),
    //階段3
    Array(3, 1092064, 28,
        Array(
            Array(4033642, 50),
        ),
        0
    ),
    //階段4
    Array(4, 1092064, 48,
        Array(
           Array(4033642, 80),
        ),
        0
    ),
    //階段5
    Array(5, 1092064, 68,
        Array(
            Array(4033642, 100),
        ),
        0
    ),
    //階段6
    Array(6, 1092064, 78,
        Array(
            Array(4033642, 120),
        ),
        0
    ),
    //階段7
    Array(7, 1092064, 88,
        Array(
            Array(4033642, 140),
        ),
        0
    ),
    //階段7
    Array(8, 1092064, 100,
        Array(
            Array(4033642, 160),
        ),
        0
    )
);

let selStr = "" + ttt2 + "";
for (var i = 0; i < menuList.length; i++) {
    if (i % 4 == 0) {
        selStr += "\r\n";
    }
    selStr += "   #L" + menuList[i][1] + "#" + menuList[i][0] + "#l" + "  ";
}

let selected = npc.askMenu(selStr);

switch (selected) {
    case 1:
        var ddd = "";
        ddd += "\t#g#n各階段戒指屬性，升級所需材料如下\r\n"
        ddd += "#r\t1. #v" + chibangList[0][1] + "# " + chibangList[0][0] + "  階戒指 " + chibangList[0][2] + " 屬性  " + chibangList[0][4] + "  ,免費領取\r\n";
        for (let i = 1; i < chibangList.length; i++) {
            ddd += "\r\n#b\t" + (i + 1) + ". #v" + chibangList[i][1] + "# " + chibangList[i][0] + "  階盾牌 #r屬性 " + chibangList[i][2] + "  \r\n\t#b所需材料:";
            for (let j = 0; j < chibangList[i][3].length; j++) {
                ddd += "#v" + chibangList[i][3][j][0] + "##r x " + chibangList[i][3][j][1] + ""
            }
        }
        npc.say(ddd);
        break;
    case 2:
        //領取初級戒指
        if (player.getEventValue("戒指系統") ==1) {
            npc.say("領取失敗，你已經領取過一次，如果丟失，請聯絡管理員");
        } else {
            let newItem = player.makeItemWithId(chibangList[0][1]);
            newItem.setTitle("1階");
            newItem.setDex(chibangList[0][2]);
            newItem.setStr(chibangList[0][2]);
            newItem.setInt(chibangList[0][2]);
            newItem.setLuk(chibangList[0][2]);
            newItem.setMad(chibangList[0][2]);
            newItem.setPad(chibangList[0][2]);
            newItem.setStatR(chibangList[0][4]);// 所有屬性
            newItem.setBossDamageR(chibangList[0][4]);// BOSS傷
            newItem.setIgnorePDR(chibangList[0][4]);// 無視防禦
            player.gainItem(newItem);
            player.addEventValue("戒指系統");
            npc.broadcastPlayerNotice(7, "【全能王】" + " :恭喜 " + player.getName() + " 領取全能王點裝:【" + newItem.getItemName() + "】");
            npc.say("領取成功，如果不慎失去了，請聯絡管理員獲取");
        }
        break;
    case 3:
        //獲取第一格裝備
        var toDrop = player.getInventorySlot(6, 1);
        //判斷第一格裝備是否存在
        if (toDrop == null) {
            npc.say("請將您的盾牌放到第一格！");
        } else if (toDrop.getTitle().indexOf("階") == -1) {
            //判斷是否是戒指
            npc.say("您的第一格裝備不是該系統所需盾牌");
        } else {
            //判斷階段
            nowLevel = parseInt(toDrop.getTitle().substring(0, 1));//獲取階段
            if (nowLevel >= chibangList.length) {
                npc.say("已頂級，無法繼續升級！");
            } else {
                //通知玩家需要材料
                let ttt = "您的戒指當前處於第 #r" + nowLevel + " #k階#v" + chibangList[nowLevel - 1][1] + "#\r\n升級到 #r" + (nowLevel + 1) + " #k階#v" + chibangList[nowLevel][1] + "#\r\n\t所需材料：";
                let PD = 0;
                for (let j = 0; j < chibangList[nowLevel][3].length; j++) {
                    ttt += "#v" + chibangList[nowLevel][3][j][0] + "# x " + chibangList[nowLevel][3][j][1] + " "
                    if (!player.hasItem(chibangList[nowLevel][3][j][0], chibangList[nowLevel][3][j][1])) {
                        PD++;
                    }
                }
                let YN = npc.askYesNo(ttt);
                if (YN == 1) {
                    if (PD == 0) {
                        for (let j = 0; j < chibangList[nowLevel][3].length; j++) {
                            player.loseItem(chibangList[nowLevel][3][j][0], chibangList[nowLevel][3][j][1]);
                        }
                        toDrop.setTitle((nowLevel + 1) + "階");
                        toDrop.setDex(chibangList[nowLevel][2]);
                        toDrop.setStr(chibangList[nowLevel][2]);
                        toDrop.setInt(chibangList[nowLevel][2]);
                        toDrop.setLuk(chibangList[nowLevel][2]);
                        toDrop.setMad(chibangList[nowLevel][2]);
                        toDrop.setPad(chibangList[nowLevel][2]);
                        toDrop.setItemId(chibangList[nowLevel][1]);

                        toDrop.setStatR(chibangList[nowLevel][4]);// 所有屬性
                        toDrop.setBossDamageR(chibangList[nowLevel][4]);// BOSS傷
                        toDrop.setIgnorePDR(chibangList[nowLevel][4]);// 無視防禦

                        player.updateItem(1, toDrop);

                        //npc.broadcastPlayerNotice(1,"【伴生戒指】" +" : "+player.getName()+" 將伴生戒指進化為【" + toDrop.getItemName() + "】");
                        //map.blowWeather(5120009, "【伴生戒指】" + " : " + player.getName() + " 將伴生戒指進化為【" + toDrop.getItemName() + "】真的太棒喇！");
                        npc.broadcastPlayerNotice(7, "【全能王】" + " : " + player.getName() + " 將全能王進化為【" + toDrop.getItemName() + "】真的太棒喇！");
					
                        //map.blowWeather(5120009,"恭喜！"+player.getName()+"將【" + toDrop.getItemName() + "】,衝擊至["+(nowLevel+1)+"]品,運氣太棒喇！");//喇叭特效
                        //npc.broadcastNoticeWithoutPrefix(player.getName() + "：我成功將戒指進化到 階段" + (toDrop.getItemName()));
                        npc.say("升級成功");

                    } else {
                        npc.say("您的材料不足，無法升級");
                    }
                }
                // player.runScript("戒指升級");
            }
        }
        break;
    case 4:
        player.runScript("活動1");
        break;
}
player.runScript("活動1");