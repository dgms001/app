/**
 * 商城-新端腳本
 **/
var a1 = "#fItem/Cash/0501.img/05010057/effect/default/3#"; //撒花
var a2 = "#fItem/Cash/0501.img/05010143/effect/default/0#"; //皇冠左
var a3 = "#fItem/Cash/0501.img/05010143/effect/default/4#"; //皇冠右
var a4 = "#fItem/Cash/0501.img/05010150/effect/default/2#"; //嘲笑候
var a5 = "#fItem/Cash/0501.img/05010180/effect/default/0#"; //彩虹书
var a6 = "#fItem/Cash/0501.img/05010129/effect/default/0#"; //初音3
var a7 = "#fEffect/ItemEff.img/1005163/effect/default/0#" //中音符
var a8 = "#fEffect/ItemEff.img/1070069/effect/walk1/0#" //彩虹小云0-7
var a88 = "#fEffect/ItemEff.img/1070069/effect/walk1/4#" //彩虹小云0-7
var a888 = "#fEffect/ItemEff.img/1070069/effect/walk1/6#" //彩虹小云0-7
var a9 = "#fEffect/ItemEff.img/1073056/effect/walk1/0#" //好看的花0-7
var a10 = "#fEffect/ItemEff.img/1102420/effect/default/0#" //彩虹中星星0-5
var a11 = "#fEffect/ItemEff.img/1102919/effect/default/0#" //小黄鸭车0-7
var a12 = "#fEffect/ItemEff.img/1102930/effect/default/0#" //雨点彩虹0-15
var a112 = "#fEffect/ItemEff.img/1102930/effect/default/4#" //雨点彩虹0-15
var a122 = "#fEffect/ItemEff.img/1102930/effect/default/12#" //雨点彩虹0-15
var a1222 = "#fEffect/ItemEff.img/1102930/effect/default/13#" //雨点彩虹0-15
var a13 = "#fEffect/ItemEff.img/1102987/effect/default/0#" //卡片绿水蘑菇
var a14 = "#fEffect/ItemEff.img/1103035/effect/default/0#" //彩虹音符长
var a15 = "#fEffect/ItemEff.img/1103094/effect/default/0#" //长花
var a16 = "#fEffect/ItemEff.img/1103440/effect/default/0#" //石头怪
var a17 = "#fEffect/ItemEff.img/1112013/1/5#" //爱心5-9
var a18 = "#fEffect/ItemEff.img/1082692/effect/default/6#" //彩虹熊14-21
var a19 = "#fEffect/ItemEff.img/1053230/effect/default/2#" //爱心兔长
var a20 = "#fEffect/ItemEff.img/1005102/effect/default/3#" //粉色PB长3-5
var a21 = "#fEffect/ItemEff.img/1005103/effect/default/3#" //绿水灵长3-5
var a22 = "#fEffect/ItemEff.img/1103083/effect/default/0#" //中蝴蝶长3-5
var a23 = "#fEffect/ItemEff.img/1005254/effect/default/4#" //蓝色中小星星
var a25 = "#fEffect/ItemEff.img/1005353/effect/default/0#" //绿芽叶中小
var a26 = "#fEffect/ItemEff.img/1073379/effect/default/0#" //幽灵云长
var a27 = "#fEffect/ItemEff.img/1073435/effect/default/3#" //彩虹细云0-3
var a28 = "#fEffect/ItemEff.img/1005692/effect/default/7#" //彩虹星星爱心1005692-1005697
var a29 = "#fEffect/ItemEff.img/1073498/effect/default/7#" //彩虹爱心蝴蝶1073498-1073503
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a33 = "#fEffect/ItemEff.img/1005163/effect/default/0#" //中音符
var a34 = "#fItem/Cash/0501.img/05010056/effect/walk1/5#"; //小草
var a35 = "#fItem/Cash/0501.img/05010056/effect/walk1/6#"; //草
var a36 = "#fItem/Cash/0501.img/05010056/effect/walk1/7#"; //草

var c1 = "#fEffect/ItemEff.img/1005765/effect/default/0#" //小图标
var c2 = "#fEffect/ItemEff.img/1112001/0/0#" //小图标
var c3 = "#fEffect/ItemEff.img/1112002/0/0#" //小图标
var c4 = "#fEffect/ItemEff.img/1032328/effect/default/0#" //小图标
var c5 = "#fEffect/ItemEff.img/1032328/effect/backDefault/0#" //小图标
var c6 = "#fEffect/ItemEff.img/1032329/effect/default/0#" //小图标
var c7 = "#fEffect/ItemEff.img/1032329/effect/backDefault/0#" //小图标
var c8 = "#fEffect/ItemEff.img/1112006/0/1#" //小图标
var c9 = "#fEffect/ItemEff.img/1112806/0/0#" //小图标
var c10 = "#fEffect/ItemEff.img/1112807/0/0#" //小图标
var c11 = "#fEffect/ItemEff.img/1112809/0/0#" //小图标
var c12 = "#fEffect/ItemEff.img/1005799/effect/backDefault/0#" //小图标
var c13 = "#fEffect/ItemEff.img/1112024/0/5#" //小图标
let type = 2; // 1=樂豆商城 2=餘額商店
let items = Array(
    //類別（展示出來的）
    /*Array("#r裝備區",
        Array(1402180, 300),//解放的凱瑟利安
        Array(1382235, 300),//阿麗莎之光輝
        Array(1402224, 300),//柳德之劍
        Array(1162018, 200),//逆轉法典
        Array(1182158,500),//奧爾卡的徽章
        Array(1182017, 300),//黃金休彼德蔓徽章II
        Array(1113211, 800),//
        Array(1113220, 800),//
        Array(1122296, 800),//
                Array(1114402, 800),//
                Array(1114401, 800),//
                Array(1033000, 800),//
                Array(1114400, 800),//
                Array(1032219, 800),//
                Array(1032261, 800),//
                Array(1182136, 800),//
                Array(1113132, 800),//
                Array(1182158, 800),//
                Array(1112956, 800),//
                Array(1113083, 800),//
        Array(1004075,300),//海神王冠
        Array(1113220, 250, "#d[刷怪戒指]"),
        Array(1082392,800,"#d可強化,自帶潛能"),
        Array(1182136, 400, "#d[技能支援射擊]"),


        Array(1003719, 60),//進階精靈帽
        Array(1003720, 60),//進階半半頭盔
        Array(1003722, 60),//進階貝倫頭盔
        Array(1003721, 60),//進階女王王冠
        Array(1003843, 100),//奇怪的狐狸面具
        Array(1022226, 300),//獨眼巨人之眼Lv.3	（測試用）
        Array(1032219, 300),//遺忘之神話耳環
        Array(1032234, 60),//藍色桃心耳環
        Array(1702472, 60),//1702472
        Array(1672069, 200),//女武神之心（測試用）
        Array(1662003, 200)//1662072	戰鬥機器人(女)(測試用)
    ),*/
    Array("#b道具區",
        //物品ID 價格
        //Array(2436243,388),

        Array(2023128, 1, "", "經驗藥水"),
        Array(5121059, 1, "", "MVP加倍"),
        Array(5062503, 8, "", "白色附加方塊"),
        Array(5062026, 10, "", "結合方塊"),

        Array(5530001, 10, "", "結合方塊"),
        Array(5060032, 10, "", "結合方塊"),
        Array(5060048, 10, "", "結合方塊"),
        Array(5060049, 10, "", "結合方塊"),
        Array(5060068, 10, "", "結合方塊"),



        Array(2635034, 10),//x卷
        Array(2635039, 15),//V卷
        Array(2635038, 20),//黑暗
        Array(2635037, 50),//mingyun
        Array(5064400, 5, "", "恢復卡"),
        Array(2437563, 100, ""),//20
        Array(2644008, 100, ""),//20
        Array(2049385, 100, ""),//16星
        Array(2049386, 100, ""),//17
        Array(2049387, 200, ""),//18
        Array(2049388, 300, ""),//19
        Array(2049389, 400, ""),//20

        Array(1402180, 500),//解放的凱瑟利安
        Array(1382235, 500),//阿麗莎之光輝
        Array(1402224, 500)//柳德之劍
    ),
    Array("#g功能區#d",
        //物品ID 價格
        //Array(2431176,50,"聯盟神器-1瓶1口200級"),
        //Array(2591008,388,"#d注意爆卷"),
        /*Array(2591000, 588, ""),//巴洛谷
        Array(2591009, 588, ""),//亞尼
        Array(2591005, 588, ""),//凡雷恩

        Array(2591281, 588, ""),//薛西斯
        Array(2591002, 588, ""),//雷克斯
        Array(2591283, 588, ""),//阿卡伊農

        Array(2591001, 588, ""),//闇黑龍王
        Array(2591006, 588, ""),//殘暴炎魔
        Array(2591004, 588, ""),//龍騎士

        Array(2591562, 588, ""),//嘟嘟
        Array(2591543, 588, ""),//烏勒斯
        Array(2591003, 588, ""),//皮卡啾
        Array(2591287, 588, ""),//梅格耐斯
        Array(2591280, 588, ""),//西格諾斯
        Array(2591007, 588, ""),//搖滾精神
         Array(2591659, 588, ""),
        Array(2591676, 588, ""),
        Array(2591640, 588, ""),
        Array(2591590, 588, ""),
        Array(2591581, 488, ""),
        Array(2591264, 488, ""),

        Array(2591088, 388, ""),
        Array(2591233, 388, ""),
        Array(2591486, 388, ""),
        Array(2591619, 388, "")*/
        Array(2438887, 1, "", "[傷害字形抽獎箱]"),
        Array(2439914, 5, "", "[坐騎抽獎箱]"),
        Array(2438532, 10, "", "[貼圖抽獎箱]"),
        Array(2631100, 30, "", "[貼圖擴充卷]"),

        Array(5062400, 50, "", "[神秘鐵砧]"),
        Array(4032031, 100, "", "[強化必成卷]"),
        Array(2590028, 100, "", "[200 靈魂卷軸 100%]"),
        Array(2591008, 588, ""),
        Array(2437563, 500, "[需要改名的角色不要購買]", ""),
        Array(4310086, 1000, "", "自由專職")

    ),
    Array("#d喇叭區#d",
        //物品ID 價格
        //Array(2431176,50,"聯盟神器-1瓶1口200級"),
        //Array(5390000,1,""), //熾熱情景喇叭
        //Array(5390001,1,""),           //絢爛情景喇叭
        //Array(5390002,1,""),           //愛心情景喇叭
        //Array(5390005,1,""),		     //小老虎情景喇叭
        Array(5390006, 10, ""),   //咆哮老虎情景喇叭
        Array(5390007, 2, ""),   //球進了！情景喇叭
        Array(5390008, 2, ""),   //世界盃情景喇叭
        Array(5390010, 2, ""),   //鬼出沒情景喇叭
        Array(5390018, 2, ""),   //赤兔馬情景喇叭
        Array(5390019, 2, ""),   //新聞主播情景喇叭
        Array(5390020, 2, ""),   //我的演唱會情景喇叭
        Array(5390022, 2, ""),   //追趕小羊的狼情景喇叭
        Array(5390025, 2, ""),   //海底世界情景喇叭
        Array(5390031, 2, ""),   //超級英雄情景喇叭
        Array(5390034, 2, "")   //雞年情景喇叭



    )
);
let title = "";
let haveMoney;
while (true) {
    switch (type) {
        case 1:
            title = "餘額"
            haveMoney = getHyPay(1);
            break;
        case 2:
            title = "餘額"
            haveMoney = getHyPay(1);
            break;
    }
    let str = "" + a8 + "  " + a888 + "" + a888 + "" + a888 + " " + a88 + "\r\n\r\n";
    str += "\t\t\t\t\t#fs16##r#e" + title + "商城#fs12##n\r\n";

    for (let i = 0; i < items.length; i++) {
        if (i % 3 == 0) {
            str += "\r\n";
        }
        str += "\t  #L" + i + "#" + items[i][0] + "#l  "
    }
    let seleted = npc.askMenu(str);
    str = "#r請選購:\r\n"
    for (let i = 1; i < items[seleted].length; i++) {
        if (items[seleted][i][2] != null)
            str += "#L" + i + "##v" + items[seleted][i][0] + "##z" + items[seleted][i][0] + "#  #b單價#r " + items[seleted][i][1] + " " + title + "  " + items[seleted][i][2] + "#l\r\n";
        else
            str += "#L" + i + "##v" + items[seleted][i][0] + "##z" + items[seleted][i][0] + "#  #b單價#r " + items[seleted][i][1] + " " + title + "#l\r\n";
    }
    let seletedItem = npc.askMenu(str);
    str = "#b當前選擇物品 : #v" + items[seleted][seletedItem][0] + "# 單價 :#r" + items[seleted][seletedItem][1] + title + "\r\n";
    str += "#e請輸入購買數量";
    let number;
    while (true) {
        if (type != 3) {
            number = npc.askNumber(str, 1, 1, haveMoney / items[seleted][seletedItem][1]);
        } else {
            number = npc.askNumber(str, 1, 1, haveMoney / items[seleted][seletedItem][1]);
        }
        if (number == 0) {
            npc.say("不可以輸入 0 哦！");
        } else {
            break;
        }
    }
    str = "#b請確認購買物品：\r\n";
    str += "#b當前" + title + "：" + haveMoney + "\r\n";
    str += "#b物品 : #v" + items[seleted][seletedItem][0] + "# 單價 :#r" + items[seleted][seletedItem][1] + title + "\r\n";
    str += "#b數量 : " + number + " 個#b 總價 :#r" + (items[seleted][seletedItem][1] * number) + title + "\r\n";
    let YN = npc.askYesNo(str);
    if (YN == 1) {
        if (player.canGainItem(items[seleted][seletedItem][0], number)) {
            switch (type) {
                case 1: //樂豆商店
                    if (player.getCashShopCurrency(1) < (items[seleted][seletedItem][1] * number)) {
                        npc.say("#fs16##b#e樂豆點數不足，無法購買");
                    } else {
                        player.modifyCashShopCurrency(1, - (items[seleted][seletedItem][1] * number));
                        //player.gainGachaponItem("[" + title + "商城]", items[seleted][seletedItem][0], number, 1);
                        player.gainItem(items[seleted][seletedItem][0], number);
                        npc.say("購買成功");
                    }
                    break;
                case 2: //餘額商店
                    if (getHyPay(1) < (items[seleted][seletedItem][1] * number)) {
                        npc.say("#fs16##b#e餘額點數不足，無法購買");
                    } else {
                        gainHyPay(- (items[seleted][seletedItem][1] * number));
                        addHyPayleji(+(items[seleted][seletedItem][1] * number));
                        //player.gainGachaponItem("[" + title + "商城]", items[seleted][seletedItem][0], number, 1);
                        player.gainItem(items[seleted][seletedItem][0], number);
                        npc.say("購買成功");
                    }
                    break;
            }
        } else {
            npc.say("請清理揹包，您當前無法放下所購買物品");
        }
    }
}
function getHyPay(type) {
    var sql = "select * from hypay where accname = '" + getAccountName() + "'";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        if (type == 1) {
            var pay = result.get("pay");
        } else if (type == 2) {
            var pay = result.get("payUsed");
        } else if (type == 3) {
            var pay = result.get("payReward");
        }
    } else {
        player.customSqlInsert("INSERT INTO `hypay` (`accname`, `name`) VALUES ('" + getAccountName() + "', '" + player.getName() + "')");
        return getHyPay(1);
    }

    return pay;
}

function getAccountName() {
    var i = -1;
    var sql = "select name,id from accounts where id=" + player.getAccountId() + " order by name limit 1;";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        var name = result.get("name");
    }

    return name;
}

function gainHyPay(count) {
    var sql = "update hypay set pay =pay+? where accname = '" + getAccountName() + "';";
    player.customSqlUpdate(sql, count);
}
function addHyPayleji(price) {
    if (price < 0) {
        price = price * -1;
    }
    var sql = "update hypay set leiji=leiji+?,payused=payused+" + price + " where accountId=?";
    var result = player.customSqlUpdate(sql, price, player.getAccountId());

}