var status = -1
var txt;
/*------------------------------------------------------------*/
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"


txt = "Welcome to the special trip              " + a38 + "\r\n";

txt += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n\r\n"

txt += "#fs11##L1#" + f2 + "解除燈泡#l#L2#" + f4 + "速洗白錘#l#L3#" + f5 + "戰地聯盟#l#L10#" + f3 + "副手裝備#l\r\n\r\n";
txt += "#fs11##L4#" + f2 + "裝備分解#l#L5#" + f4 + "修改倉密#l#L6#" + f5 + "系統倉庫#l#L11#" + f3 + "擴充秘法#l\r\n\r\n";
txt += "#fs11##L7#" + f2 + "管理萌獸#l#L8#" + f4 + "速洗萌獸#l#L9#" + f5 + "傷害測試#l#L12#" + f3 + "方塊疊加#l\r\n\r\n";
txt += "#fs11##L13#" + f2 + "自由轉職#l\r\n\r\n";
txt += "\t\t\t  #fs14##e#r#L50#【返回】#l\r\n\r\n";
//#L12#" + qq3 + "飛翔技能#l
let selection = npc.askMenuS(txt, true);

switch (selection) {
    case 1:
        if (player.isQuestCompleted(100001)) {
            npc.say("#fs15##b你已經消除過燈泡了！#r如果頭頂還顯示有燈泡，點擊頭頂燈泡領取任務即可！");
        } else {
            let A = npc.askYesNo("#fs15##b想要消除頭頂的燈泡任務嗎？我可以幫你完成大部分任務哦！");
            if (A == 1) {
                var Care = [100001, 63351, 58513, 63521, 63832,
                    61155, 56553, 16909, 16880, 64011, 64010, 34901, 23220,
                    22603, 22602, 22300, 62241, 7107, 19018, 35057, 35056,
                    29900,
                    29901, 29902, 29903, 36102, 2646, 17035, 34965, 35900, 31800, 35942, 57400, 57156, 57452,
                    32240, 32241, 32242, 32243, 32244, 32245, 32246, 63405, 36102, 57460, 57164, 500763, 63403, 63404, 57156, 57102, 63351, 59031, 59030, 62395, 62396, 22507, 35800];
                for (var ii in Care) {
                    player.completeQuest(Care[ii], 0);
                }
                player.addEventValue("燈泡點擊", 1, 3000);
                npc.say("已幫您消除燈泡！");
            }
        }
        break;
    case 2:
        player.runScript("速敲白鎚");
        break;
    case 3:
        player.runScript("戰地聯盟");
        break;
    case 4:
        player.runScript("裝備分解");
        break;
    case 5:
        if (player.getEventValue("倉庫密碼") == 0) {
            selection = npc.askNumber("設置密保,後續更改密碼需要密保:[請牢記]", 1, 10000, 999999);
            player.addEventValue(selection, 1, 3000);
            player.addEventValue("倉庫密碼", 1, 3000);
        }
        selection = npc.askNumber("請輸入密保:：", 1, 10000, 999999);
        if (player.getEventValue(selection)) {
            selection = npc.askNumber("輸入最新的倉庫密碼:", 1, 10000, 999999);
            updatepassword(selection)
            npc.say("密碼已修改,重新上線後生效");
        } else {
            npc.say("密保錯誤,無法修改");
        }

        break;
    case 6:
        npc.sendStorage(3003639);
        break;
    case 7:
        player.openUI(0x251);
        break;
    case 8:
        player.runScript("萌獸速洗");
        break;
    case 9:
        /*let mapB = map.getEventMobCount();
        if (map.getId() == 101050000) {
            if (mapB > 0) {
                map.reset();
                player.scriptProgressMessage("當前怪物超過1隻,進行清除");
            }
            let mob = map.makeMob(9305650);
            //mob.setForcedMobStat(player.getLevel()+35, player.getLevel()+35);
            map.spawnMob(mob, -1257, 2);
            mob.changeBaseHp(500000000000000000);
            player.dropAlertNotice("稻草人 HP: 5000兆\r\n創建成功!");
        } else {
            player.changeMap(101050000); //993177300
            player.dropAlertNotice("傳送地圖成功!");
        }*/
        player.changeMap(993198000);
        break;
    case 10:
        player.runScript("裝備副手");
        break;
    case 11:
        player.runScript("一鍵開ARC6格");
        break;
    case 12:
        player.runScript("方塊疊加");
        break;
    case 13:
        player.runScript("自由轉職");
        break;
    case 50:
        player.runScript("本服菜單");
        break;
}
function updatepassword(password) {
    var sql = "update accounts SET password2 = " + password + " where id = '" + player.getAccountId() + "';";
    player.customSqlUpdate(sql);
}
