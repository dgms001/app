/* 圓夢谷 TMS 237 萬能菜單 */
var status = -1
var txt;
/*------------------------- 表情符號 -------------------------*/
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"
var a10 = "#fEffect/ItemEff.img/1102919/effect/default/0#" //小黄鸭车0-7
var f1 = "#fUI/CashShop/CSBeauty/hairColor/Enable/0#"
var qq1 = "#fUI/EventShop/adventureShop/GradeBuyer/0#"
var s1 = "#fUI/CashShop/CSBeauty/hairColor/Disable/0#"
var a23 = "#fEffect/ItemEff.img/1005254/effect/default/4#" //蓝色中小星星
txt = "#fs21##r#e#fs13#";

txt += "#fs16##L1##b" + a23 + "清理背包#l#L9##b" + a23 + "清理地圖#l#L7#" + a23 + "速敲白鎚#l#L4#" + a23 + "解除燈泡#l\r\n\r\n";
txt += "#fs16##L5##b" + a23 + "萌獸專區#l#L16#" + a23 + "推文領取#l#L8#" + a23 + "隨身倉庫#l#L3#" + a23 + "道具疊加#l\r\n\r\n";
txt += "#L14#" + a23 + "戰地聯盟#l#L15#" + a23 + "卡角拯救#l#L17#" + a23 + "裝備回收#l#L18#" + a23 + "各大排行#l\r\n\r\n";
txt += "#fs16##L10##b" + a23 + "美容專區#l#L20##b" + a23 + "傷害測試#l\r\n\r\n";

let selection = npc.askMenuA(txt, true);

switch (selection) {
    case 1:
        player.runScript("清理");
        break;
    case 2:
        player.runScript("回收");
        //npc.sendShop(1011001);
        break;
    case 3:
        player.runScript("疊加");
        break;
    case 4:
        if (player.isQuestCompleted(100001)) {
            npc.say("#fs21##r#e你已經消除過燈泡了！！");//#r如果頭頂還顯示有燈泡，點擊頭頂燈泡領取任務即可
        } else {
            let A = npc.askYesNo("#fs21##r#e想要消除頭頂的燈泡任務嗎？我可以幫你完成大部分任務哦！");
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
        break; 萌獸速洗
    case 5:
        player.runScript("萌獸");
        break;
    case 6:
        player.runScript("一鍵開ARC6格");
        break;
    case 7:
        player.runScript("速敲白鎚");
        break;
    case 8:
        npc.sendStorage(3003639);
        break;
    case 9:
        player.runScript("清除地圖");
        break;
    case 10:
        player.runScript("美容中心");
        break;
    case 11:
        player.runScript("時裝轉移");
        //npc.sendShop(1011001);
        break;
    case 12:
        player.runScript("自選臉型");
        break;
    case 13:
        player.runScript("自選皮膚");
        break;
    case 14:
        player.runScript("戰地聯盟");
        break;
    case 15:
        player.runScript("拯救角色");
        break;
    case 16:
        player.runScript("推文領取");
        break;
    case 17:
        player.runScript("回收");
        break;
    case 18:
        player.runScript("各大排行");
        break;
    case 19:
        player.runScript("強化回真");
        break;
		    case 20:
			        let mapB = map.getEventMobCount();
        if (map.getId() == 100000000) {
            if (mapB > 0) {
                map.reset();
                player.scriptProgressMessage("當前怪物超過1隻,進行清除");
            }
            let mob = map.makeMob(9305650);
            //mob.setForcedMobStat(player.getLevel()+35, player.getLevel()+35);
            map.spawnMob(mob, 713, 334);
            mob.changeBaseHp(500000000000000000);
            player.showSystemMessage("稻草人 HP: 5000兆\r\n創建成功!");
        } else {
            player.changeMap(100000000); //993177300
            player.showSystemMessage("傳送地圖成功!");
        }
   
        break;
    case 50:
        player.runScript("本服菜單");
        break;
}
