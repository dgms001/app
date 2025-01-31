var tt = "#fEffect/CharacterEff/1082565/0/0#"; //餅幹兔子
var fenge = "#fEffect/ItemEff/1004122/effect/default/8#";

var p9 = "#fMap/MapHelper.img/weather/knitsWithWarmWinter/8#";
var zx50 = "#fMap/MapHelper.img/weather/lovelypartybear/7#";
var qq1 = "#fUI/EventShop/adventureShop/GradeBuyer/0#"
var qq2 = "#fUI/EventShop/adventureShop/GradeBuyer/1#"
var qq3 = "#fUI/EventShop/adventureShop/GradeBuyer/2#"
var qq4 = "#fUI/EventShop/adventureShop/GradeBuyer/3#"
var qq5 = "#fUI/EventShop/adventureShop/GradeBuyer/4#"
var qq6 = "#fUI/EventShop/adventureShop/GradeBuyer/5#"
var a8 = "#fEffect/ItemEff.img/1070069/effect/walk1/0#" //彩虹小云0-7
var a88 = "#fEffect/ItemEff.img/1070069/effect/walk1/4#" //彩虹小云0-7
var a888 = "#fEffect/ItemEff.img/1070069/effect/walk1/6#" //彩虹小云0-7
// 每個階段禮包所需的儲值額度
var condition = new Array(500, 1000, 2000, 3000, 4000, 5000, 7500, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 50000);
//力量, 敏捷, 智力, 幸運, HP,物攻, 魔攻, B傷, 總傷,無視
// 禮包內容
var reward = new Array(
    Array( // 禮包500
        Array(2632486, 3), //寶石
        Array(5530001, 20), //勛章轉蛋
        Array(5060032, 20), //捲軸轉蛋
        Array(5060048, 30), //黃金蘋果
        Array(5060046, 10), //椅子轉蛋
        Array(5060068, 5), //聯名轉蛋
        Array(5062021, 20), //對等
        Array(5062017, 20), //閃耀方塊
        Array(5062020, 20), //六角方塊
        Array(5062026, 20), //結合
        Array(5062503, 20), //白色附加
        Array(4032053, 1000), //元寶
        Array(4032216, 1000), //愛心
        Array(5060086, 20), //畫框
        Array(2635039, 10)//17星力




    ),
    Array(
        // 禮包2 1000
        Array(2632486, 3), //寶石
        Array(5530001, 20), //勛章轉蛋
        Array(5060032, 30), //捲軸轉蛋
        Array(5060046, 10), //椅子轉蛋
        Array(5060068, 10), //聯名轉蛋
        Array(5060048, 50), //黃金蘋果
        Array(5062021, 40), //對等
        Array(5062017, 40), //閃耀方塊
        Array(5062020, 40), //六角方塊
        Array(5062026, 40), //結合
        Array(5062503, 40), //白色附加
        Array(4032053, 2999), //元寶
        Array(4032216, 2999), //愛心
        Array(5060086, 20), //畫框
        Array(2635039, 20)//17星力

    ),
    Array(
        // 禮包3 2000元
        Array(2632486, 5), //寶石
        Array(5530001, 20), //勛章轉蛋
        Array(5060032, 30), //捲軸轉蛋
        Array(5060046, 10), //椅子轉蛋
        Array(5060068, 10), //聯名轉蛋
        Array(5060048, 50), //黃金蘋果
        Array(5062021, 40), //對等
        Array(5062017, 40), //閃耀方塊
        Array(5062020, 40), //六角方塊
        Array(5062026, 40), //結合
        Array(5062503, 40), //白色附加
        Array(4032053, 3999), //元寶
        Array(4032216, 3999), //愛心
        Array(5060086, 20), //畫框
        Array(2635039, 30)//17星力

    ),
    Array(
        // 禮包3 3000元
        Array(2632486, 5), //寶石
        Array(5530001, 30), //勛章轉蛋
        Array(5060032, 40), //捲軸轉蛋
        Array(5060046, 15), //椅子轉蛋
        Array(5060068, 10), //聯名轉蛋
        Array(5060048, 50), //黃金蘋果
        Array(5062021, 60), //對等
        Array(5062017, 60), //閃耀方塊
        Array(5062020, 60), //六角方塊
        Array(5062026, 60), //結合
        Array(5062503, 60), //白色附加
        Array(4032053, 4999), //元寶
        Array(4032216, 4999), //愛心
        Array(5060086, 30), //畫框
        Array(2635038, 10)//17星力

    ),
    Array(
        // 禮包4 4000元
        Array(2632486, 7), //寶石
        Array(5530001, 30), //勛章轉蛋
        Array(5060032, 40), //捲軸轉蛋
        Array(5060046, 15), //椅子轉蛋
        Array(5060068, 15), //聯名轉蛋
        Array(5060048, 80), //黃金蘋果
        Array(5062021, 60), //對等
        Array(5062017, 60), //閃耀方塊
        Array(5062020, 60), //六角方塊
        Array(5062026, 60), //結合
        Array(5062503, 60), //白色附加
        Array(4032053, 5999), //元寶
        Array(4032216, 5999), //愛心
        Array(5060086, 30), //畫框
        Array(2635038, 15)//17星力


    ),
    Array(
        // 禮包4 5000元
        Array(2632486, 7), //寶石
        Array(5530001, 30), //勛章轉蛋
        Array(5060032, 40), //捲軸轉蛋
        Array(5060046, 10), //椅子轉蛋
        Array(5060068, 20), //聯名轉蛋
        Array(5060048, 80), //黃金蘋果
        Array(5062021, 80), //對等
        Array(5062017, 80), //閃耀方塊
        Array(5062020, 80), //六角方塊
        Array(5062026, 80), //結合
        Array(5062503, 80), //白色附加
        Array(4032053, 6999), //元寶
        Array(4032216, 6999), //愛心
        Array(2431603, 5),//
        Array(5060086, 30), //畫框
        Array(2635038, 20)//17星力

    ),
    Array(
        // 禮包4 7500元
        Array(2632486, 10), //寶石
        Array(5530001, 35), //勛章轉蛋
        Array(5060032, 45), //捲軸轉蛋
        Array(5060046, 10), //椅子轉蛋
        Array(5060068, 15), //聯名轉蛋
        Array(5060048, 80), //黃金蘋果
        Array(5062021, 80), //對等
        Array(5062017, 80), //閃耀方塊
        Array(5062020, 80), //六角方塊
        Array(5062026, 80), //結合
        Array(5062503, 80), //白色附加
        Array(4032053, 8999), //元寶
        Array(4032216, 8999), //愛心
        Array(2431603, 10),//自選心
        Array(5060086, 35), //畫框
        Array(2635038, 25)//17星力

    ),
    Array(
        // 禮包6 10000元
        Array(2632486, 10), //寶石
        Array(5530001, 40), //勛章轉蛋
        Array(5060032, 50), //捲軸轉蛋
        Array(5060046, 20), //椅子轉蛋
        Array(5060068, 15), //聯名轉蛋
        Array(5060048, 100), //黃金蘋果
        Array(5062021, 80), //對等
        Array(5062017, 80), //閃耀方塊
        Array(5062020, 80), //六角方塊
        Array(5062026, 80), //結合
        Array(5062503, 80), //白色附加
        Array(4032053, 10000), //元寶
        Array(4032216, 10000), //愛心
        Array(2431603, 15),//自選心
        Array(5060086, 40), //畫框
        Array(2635038, 30)//17星力


    ),
    Array(
        // 禮包7 15000元  
        Array(2632486, 15), //寶石
        Array(5530001, 40), //勛章轉蛋
        Array(5060032, 50), //捲軸轉蛋
        Array(5060046, 25), //椅子轉蛋
        Array(5060068, 20), //聯名轉蛋
        Array(5060048, 100), //黃金蘋果
        Array(5062021, 100), //對等
        Array(5062017, 100), //閃耀方塊
        Array(5062020, 100), //六角方塊
        Array(5062026, 100), //結合
        Array(5062503, 100), //白色附加
        Array(4032053, 16666), //元寶
        Array(4032216, 16666), //愛心
        Array(2431603, 20),//自選心
        Array(5060086, 40), //畫框
        Array(2635038, 40)//17星力


    ),
    Array(
        //禮包8 20000元
        Array(2632486, 15), //寶石
        Array(5530001, 40), //勛章轉蛋
        Array(5060032, 60), //捲軸轉蛋
        Array(5060046, 25), //椅子轉蛋
        Array(5060068, 20), //聯名轉蛋
        Array(5060048, 140), //黃金蘋果
        Array(5062021, 100), //對等
        Array(5062017, 100), //閃耀方塊
        Array(5062020, 100), //六角方塊
        Array(5062026, 100), //結合
        Array(5062503, 100), //白色附加
        Array(4032053, 19999), //元寶
        Array(4032216, 19999), //愛心
        Array(2431603, 25),//自選心
        Array(5060086, 40), //畫框
        Array(2635038, 50)//17星力


    ),
    Array(
        // 禮包10 25000元
        Array(2632486, 20), //寶石
        Array(5530001, 50), //勛章轉蛋
        Array(5060032, 60), //捲軸轉蛋
        Array(5060046, 30), //椅子轉蛋
        Array(5060068, 20), //聯名轉蛋
        Array(5060048, 140), //黃金蘋果
        Array(5062021, 120), //對等
        Array(5062017, 120), //閃耀方塊
        Array(5062020, 120), //六角方塊
        Array(5062026, 120), //結合
        Array(5062503, 120), //白色附加
        Array(4032053, 26666), //元寶
        Array(4032216, 26666), //愛心
        Array(2431603, 30),//自選心
        Array(5060086, 50), //畫框
        Array(2635032, 20),//17星力
        Array(5064400, 20)//17星力
    ),

    Array(
        // 禮包12 30000元     
        Array(2632486, 20), //寶石
        Array(5530001, 50), //勛章轉蛋
        Array(5060032, 80), //捲軸轉蛋
        Array(5060046, 40), //椅子轉蛋
        Array(5060068, 30), //聯名轉蛋
        Array(5060048, 180), //黃金蘋果
        Array(5062021, 120), //對等
        Array(5062017, 120), //閃耀方塊
        Array(5062020, 120), //六角方塊
        Array(5062026, 120), //結合
        Array(5062503, 120), //白色附加
        Array(4032053, 29999), //元寶
        Array(4032216, 29999), //愛心
        Array(2431603, 35),//自選心
        Array(5060086, 50), //畫框
        Array(2635032, 40),//17星力
        Array(5064400, 40)//17星力
    ),

    //以下是沒有開放的
    Array(
        // 禮包12 35000元  
        Array(2632486, 30), //寶石
        Array(5530001, 50), //勛章轉蛋
        Array(5060032, 80), //捲軸轉蛋
        Array(5060046, 40), //椅子轉蛋
        Array(5060068, 30), //聯名轉蛋
        Array(5060048, 180), //黃金蘋果
        Array(5062021, 140), //對等
        Array(5062017, 140), //閃耀方塊
        Array(5062020, 140), //六角方塊
        Array(5062026, 140), //結合
        Array(5062503, 140), //白色附加
        Array(4032053, 36666), //元寶
        Array(4032216, 36666), //愛心
        Array(2431603, 40),//自選心
        Array(5060086, 50), //畫框
        Array(2635032, 60),//17星力
        Array(5064400, 60)//17星力


    ),
    Array(
        // 禮包12 40000元 		
        Array(2632486, 30), //寶石
        Array(5530001, 60), //勛章轉蛋
        Array(5060032, 100), //捲軸轉蛋
        Array(5060046, 50), //椅子轉蛋
        Array(5060068, 30), //聯名轉蛋
        Array(5060048, 200), //黃金蘋果
        Array(5062021, 160), //對等
        Array(5062017, 160), //閃耀方塊
        Array(5062020, 160), //六角方塊
        Array(5062026, 160), //結合
        Array(5062503, 160), //白色附加
        Array(4032053, 39999), //元寶
        Array(4032216, 39999), //愛心
        Array(2431603, 45),//自選心
        Array(5060086, 60), //畫框
        Array(2635032, 80),//17星力
        Array(5064400, 80)//17星力
    ),
    Array(
        // 禮包12 50000元 
        Array(2632486, 40), //寶石
        Array(5530001, 70), //勛章轉蛋
        Array(5060032, 150), //捲軸轉蛋
        Array(5060046, 60), //椅子轉蛋
        Array(5060068, 40), //聯名轉蛋
        Array(5060048, 300), //黃金蘋果
        Array(5062021, 200), //對等
        Array(5062017, 200), //閃耀方塊
        Array(5062020, 200), //六角方塊
        Array(5062026, 200), //結合
        Array(5062503, 200), //白色附加
        Array(4032053, 49999), //元寶
        Array(4032216, 49999), //愛心
        Array(2431603, 50),//自選心
        Array(5060086, 80), //畫框
        Array(2635032, 100),//17星力
        Array(5064400, 100)//17星力
    ),
    Array(
        // 禮包12 65000元     
        Array(4036465, 1, "給勛章附魔全屬+50、物&魔攻+50、3%B傷、3%無視、3%總傷、HP+500、MP+500"),
        Array(4001438, 75, "給裝備附魔全屬+1、物&魔攻+1、HP+10、MP+10"),
        Array(2439214, 1, "點裝全屬+200、物&魔攻+200"),
        Array(4032031, 5, "裝備強化必成物品"),
        Array(1182285, 1), //MX-131
        Array(2633698, 80), //暗黑
        Array(2430499, 2), //蠟筆
        Array(4009411, 90), //樂豆幣
        Array(4001715, 7), //金幣
        Array(5060048, 1600), //蘋果
        Array(5062026, 160), //結合
        Array(5062017, 170), //閃耀方塊
        Array(5062020, 170), //六角方塊
        Array(2635032, 75), //幸運
        Array(5064400, 75), //恢復
        Array(2644008, 8)//追+100%
    ),
    Array(
        // 禮包12 70000元     
        Array(4036465, 1, "給勛章附魔全屬+50、物&魔攻+50、3%B傷、3%無視、3%總傷、HP+500、MP+500"),
        Array(4001438, 80, "給裝備附魔全屬+1、物&魔攻+1、HP+10、MP+10"),
        Array(2438324, 1, "點裝全屬+250、物&魔攻+250"),
        Array(4032031, 8, "裝備強化必成物品"),
        Array(1672075, 1), //DAY
        Array(2633698, 85), //暗黑
        Array(2430499, 2), //蠟筆
        Array(4009411, 90), //樂豆幣
        Array(4001715, 8), //金幣
        Array(5060048, 1700), //蘋果
        Array(5062026, 170), //結合
        Array(5062017, 180), //閃耀方塊
        Array(5062020, 180), //六角方塊
        Array(2635032, 80), //幸運
        Array(5064400, 80), //恢復
        Array(2644008, 9)//追+100%
    ),
    Array(
        // 禮包12 75000元     
        Array(4036465, 1, "給勛章附魔全屬+50、物&魔攻+50、3%B傷、3%無視、3%總傷、HP+500、MP+500"),
        Array(4001438, 90, "給裝備附魔全屬+1、物&魔攻+1、HP+10、MP+10"),
        Array(2439172, 1, "點裝全屬+300、物&魔攻+300"),
        Array(4032031, 9, "裝備強化必成物品"),
        Array(2434168, 1), //米特拉
        Array(2633698, 90), //暗黑
        Array(2430499, 2), //蠟筆
        Array(4009411, 100), //樂豆幣
        Array(4001715, 9), //金幣
        Array(5060048, 1800), //蘋果
        Array(5062026, 180), //結合
        Array(5062017, 190), //閃耀方塊
        Array(5062020, 190), //六角方塊
        Array(2635032, 90), //幸運
        Array(5064400, 90), //恢復
        Array(2644008, 10)//追+100%
    ),
    Array(
        // 禮包12 80000元     
        Array(4036465, 1, "給勛章附魔全屬+50、物&魔攻+50、3%B傷、3%無視、3%總傷、HP+500、MP+500"),
        Array(4001438, 100, "給裝備附魔全屬+1、物&魔攻+1、HP+10、MP+10"),
        Array(2439183, 1, "點裝全屬+400、物&魔攻+400"),
        Array(4032031, 10, "裝備強化必成物品"),
        Array(2632953, 1), //創世
        Array(2633698, 100), //暗黑
        Array(2430499, 2), //蠟筆
        Array(4009411, 100), //樂豆幣
        Array(4001715, 10), //金幣
        Array(5060048, 2000), //蘋果
        Array(5062026, 200), //結合
        Array(5062017, 200), //閃耀方塊
        Array(5062020, 200), //六角方塊
        Array(2635032, 100), //幸運
        Array(5064400, 100), //恢復
        Array(2644008, 10)//追+100%
    )
);

var text;
var ljname;
var revenue;
var ltz46 = "#fMap/MapHelper.img/weather/starPlanet/4#"; //
var a3 = "#fEffect/ItemEff/1070069/effect/walk1/2#"
var XD0 = "#fEffect/CharacterEff/1051366/0/0#";
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的
var c12 = "#fEffect/ItemEff.img/1005799/effect/backDefault/0#" //小图标


text = "#fs13##k";
revenue = parseInt(getHyPay(2));
//text +="#L999##b充值鏈接#k#l\r\n\r\n";
//text += "#g#nBecause of your support, we will do better!\r\n\r\n"
text += "#b#fs21##e你已累計：[#r " + revenue + " #b]餘額\r\n";
text += "#fs11##b";
var txt = "";
for (var i = 0; i <= condition.length - 1; i++) {
    if (player.getEventValue("贊助達標" + condition[i]) == 1) {
        txt = "[#k已領取#b]";
    } else {
        if (player.getEventValue("贊助達標" + condition[i]) == 0 && revenue >= condition[i]) {
            txt = "[#g未領取#b]";
        } else if (player.getEventValue("贊助達標" + condition[i]) == 0 && revenue < condition[i]) {
            txt = "[#r未滿累計#b]";
        }
    }
    text += "#fs16##e#b#L" + i + "#" + c12 + "" + txt + "您已滿#r" + condition[i] + "#b累衝禮包#l\r\n";
}
text += "#k";
let selection = npc.askMenuA(text, true);

if (selection == 999) {
    player.runScript("充值鏈接");
} else {
    text = "\t\t\t\t  #e#r領取" + condition[selection] + "元累計禮包#k#n\r\n\r\n";
    for (var i = 0; i < reward[selection].length; i++) {
        text += "#b#i" + reward[selection][i][0] + "# #z" + reward[selection][i][0] + "#[ #r" + reward[selection][i][1] + "個#b ]\r\n";
        if (reward[selection][i].length > 2) {
            text += "[#k" + reward[selection][i][2] + "#b]\r\n";
        } else {
            text += "\r\n";
        }
    }

    let sel = npc.askYesNo(text);
    if (sel == 1) {
        if (player.getEventValue("贊助達標" + condition[selection]) == 1) {
            npc.say("#e#r\r\n\r\n\t\t您已經領取過了");
            player.runScript("累積贊助獎勵");
        } else if (revenue < condition[selection]) {
            npc.say("累計贊助金額未達標！");
            player.runScript("累積贊助獎勵");
        } else if (player.getFreeSlots(1) < 5 || player.getFreeSlots(2) < 5 || player.getFreeSlots(3) < 5 || player.getFreeSlots(4) < 5 || player.getFreeSlots(5) < 5) {
            npc.say("每個欄位至少要保持5個空位以上才能領取");
            player.runScript("累積贊助獎勵");
        } else {
            for (var i = 0; i < reward[selection].length; i++) {
                if (reward[selection][i][3] >= 0) {
                    let newItem = player.makeItemWithId(reward[selection][i][0]);
                    //player.gainItem(reward[selection][i][0], reward[selection][i][1]);
                    newItem.setStr(reward[selection][i][3]);
                    newItem.setDex(reward[selection][i][4]);
                    newItem.setInt(reward[selection][i][5]);
                    newItem.setLuk(reward[selection][i][6]);
                    newItem.setMaxHp(reward[selection][i][7]);
                    newItem.setPad(reward[selection][i][8]);
                    newItem.setMad(reward[selection][i][9]);
                    newItem.setBossDamageR(reward[selection][i][10]);
                    newItem.setIgnorePDR(reward[selection][i][11]);
                    newItem.setDamR(reward[selection][i][12]);

                    player.gainItem(newItem);
                } else {
                    player.gainItem(reward[selection][i][0], reward[selection][i][1]);
                }
                //player.gainItem(reward[selection][i][0], reward[selection][i][1]);
            }
            player.addEventValue("贊助達標" + condition[selection], 1, 1000);
            //npc.broadcastPlayerNotice(3, "玩家  「 " + player.getName() + " 」  領取達標  「" + condition[selection] + " 」元的累計禮包");
            //npc.broadcastNotice("大佬玩家  [ " + player.getName() + " ]    領取達標   " + condition[selection] + " 元的累計禮包！！！");
            npc.say("領取成功");
            player.runScript("累積贊助獎勵");
        }
    }

}

function getHyPay() {
    var sql = "select leiji from hypay where accountid = ? ";
    var result = player.customSqlResult(sql, player.getAccountId());
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("leiji");
        }
    } else {
        return 0;
    }

}