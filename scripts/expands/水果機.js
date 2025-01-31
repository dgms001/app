//player.openWebUI(271, "UI/UIWindowCN.img/CN_Cash_Web/backgrnd", "http://pay.ezmxd.com");

//測試腳本
date = new Date();
let week = date.getDay();
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
var Icon = [
    Array("星星", "#fEtc/ChatEmoticon/expression/1/0#"),
    Array("彩虹", "#fEffect/ItemEff/1102877/effect/default/0#"),
    Array("?咪", "#fUI/NameTag/190/w#"),
    Array("?咪", "#fUI/NameTag/190/c#"),
    Array("?咪", "#fUI/NameTag/190/e#"),
    Array("兔子", "#fEffect/CharacterEff/1112960/0/1#"),
    Array("星空", "#fUI/GuildMark/BackGround/00001013/16#"),
    Array("骷?", "#fUI/GuildMark/Mark/Etc/00009000/15#"),
    Array("?心", "#fUI/GuildMark/Mark/Etc/00009001/1#"),
    Array("白?", "#fUI/GuildMark/Mark/Etc/00009002/4#"),
    Array("皇冠", "#fUI/GuildMark/Mark/Etc/00009004/3#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/1#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/11#"),
    Array("水滴", "#fEffect/BasicEff/MainNotice/Gamsper/Notify/4#"),
    Array("?旗", "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"),
    Array("?心", "#fEffect/CharacterEff/1112905/0/0#"),
    Array("云朵", "#fEffect/ItemEff/1102877/effect/default/1#"),
    Array("翅膀", "#fEffect/ItemEff/1102874/effect/ladder/0#"),
    Array("箭矢", "#fEffect/ItemEff/1112003/0/2#"),
    Array("??", "#fEffect/ItemEff/1004122/effect/default/8#"),
    Array("??", "#fEffect/CharacterEff/1082588/0/0#"), //??
    Array("??", "#fEffect/CharacterEff/1082588/3/0#"), //??
    Array("?星", "#fEffect/CharacterEff/1112924/0/0#"), //?星
    Array("?星", "#fEffect/CharacterEff/1112925/0/0#"), //?星
    Array("?星", "#fEffect/CharacterEff/1112926/0/0#"), //?星
    Array("?星星", "#fUI/UIPVP.img/MiniMapIcon/star#"), //?星星
    Array("星星", "#fEtc/ChatEmoticon/expression/1/0#"),
    Array("兔子", "#fEffect/CharacterEff/1112960/0/1#"),
    Array("星空", "#fUI/GuildMark/BackGround/00001013/16#"),
    Array("骷?", "#fUI/GuildMark/Mark/Etc/00009000/15#"),
    Array("?心", "#fUI/GuildMark/Mark/Etc/00009001/1#"),
    Array("白?", "#fUI/GuildMark/Mark/Etc/00009002/4#"),
    Array("皇冠", "#fUI/GuildMark/Mark/Etc/00009004/3#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/1#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/11#"),
    Array("水滴", "#fEffect/BasicEff/MainNotice/Gamsper/Notify/4#"),
    Array("?旗", "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"),
    Array("?心", "#fEffect/CharacterEff/1112905/0/0#"),
    Array("云朵", "#fEffect/ItemEff/1102877/effect/default/1#"),
    Array("翅膀", "#fEffect/ItemEff/1102874/effect/ladder/0#"),
    Array("箭矢", "#fEffect/ItemEff/1112003/0/2#"),
    Array("??", "#fEffect/ItemEff/1004122/effect/default/8#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/10#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/2#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/3#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/4#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/5#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/6#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/7#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/8#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/9#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/10#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/11#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/12#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/13#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/14#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/15#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/16#"),
    Array("?件", "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"),
    Array("信封", "#fUI/GuildMark/BackGround/00001003/5#"),
    Array("信封", "#fUI/GuildMark/BackGround/00001003/12#"),
    Array("?石", "#fUI/NameTag/medal/556/w#"),
    Array("?石", "#fUI/NameTag/medal/556/c#"),
    Array("?石", "#fUI/NameTag/medal/556/e#"),
    Array("三角", "#fUI/piggyBarMinigame/crunch/5#"),
    Array("??", "#fUI/piggyBarMinigame/crunch/1#"),
    Array("女神", "#fUI/RunnerGame/RunnerGameUI/Effect/ItemEffect_Protect1/3#"),
    Array("拇指", "#fUI/NameTag/medal/10/w#"),
    Array("拇指", "#fUI/NameTag/medal/10/c#"),
    Array("拇指", "#fUI/NameTag/medal/10/e#"),
    Array("成功", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/dear/7#"),
    Array("失?", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/fail/7#"),
    Array("星星", "#fUI/UIWindowGL/FeedbackSystem/Star#"),
    Array("?星", "#fEffect/CharacterEff/1003393/1/0#"),
    Array("花朵", "#fEffect/CharacterEff/1050334/2/0#"),
    Array("?星", "#fEffect/CharacterEff/1003393/0/0#"),
    Array("淡星", "#fEffect/CharacterEff/moveRandomSprayEff/eunwol_seal/effect/0/2#"),
    Array("花朵", "#fEffect/CharacterEff/1051294/1/0#"),
    Array("花朵", "#fEffect/CharacterEff/1051296/1/0#"),
    Array("金菇", "#fUI/NameTag/medal/74/w#"),
    Array("金菇", "#fUI/NameTag/medal/74/c#"),
    Array("金菇", "#fUI/NameTag/medal/74/e#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/w#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/c#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/e#"),
    Array("胡子", "#fUI/NameTag/124/w#"),
    Array("胡子", "#fUI/NameTag/124/c#"),
    Array("胡子", "#fUI/NameTag/124/e#"),
    Array("帽子", "#fUI/NameTag/nick/312/w#"),
    Array("帽子", "#fUI/NameTag/nick/312/c#"),
    Array("帽子", "#fUI/NameTag/nick/312/e#"),
    Array("圣?", "#fUI/NameTag/medal/728/w#"),
    Array("圣?", "#fUI/NameTag/medal/728/c#"),
    Array("圣?", "#fUI/NameTag/medal/728/e#"),
    Array("??", "#fUI/UIWindowPL/DuoEvent/Maximum/DuoInfo/icon/GoodF/0#"),
    Array("王冠", "#fUI/NameTag/medal/468/w#"),
    Array("王冠", "#fUI/NameTag/medal/468/c#"),
    Array("王冠", "#fUI/NameTag/medal/468/e#"),
    Array("确?", "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#"),
    Array("幽?", "#fEffect/ItemEff/1004738/effect/ladder/0#"),
    Array("幽?", "#fEffect/ItemEff/1004738/effect/default/7#"),
    Array("幽?", "#fEffect/ItemEff/1004738/effect/walk1/3#"),
    Array("幽?", "#fEffect/ItemEff/1004738/effect/jump/0#"),
    Array("音符", "#fEffect/ItemEff/1112811/0/0#"),
    Array("?心", "#fEffect/CharacterEff/1112905/0/0#"),
    Array("幽?", "#fEffect/ItemEff/1004738/effect/default/0#"),
    Array("幽?", "#fEffect/ItemEff/1004738/effect/default/1#"),
    Array("幽?", "#fEffect/ItemEff/1004738/effect/default/2#"),
    Array("幽?", "#fEffect/ItemEff/1004738/effect/default/3#"),
    Array("金左指?", "#fUI/UIWindow/MonsterBook/arrowLeft/normal/0#"),
    Array("金右指?", "#fUI/UIWindow/MonsterBook/arrowRight/normal/0#"),
    Array("??", "#fEffect/ItemEff/1102877/effect/default/0#")

];

let accid = player.getAccountId();
start()
function start() {
    let list = player.customSqlResult("select username,token from fruit where acc_id = ?", accid);

    let text = "\t" + Icon[17][1] + "#fs20##fc0xFF00caf2#水果老虎機" + Icon[17][1] + "#r#n\r\n";
    text += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
        + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
        + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
        + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n";
    text += "#fs11##b";
    if (!open_hu()) {
        let username = list.get(0).get("username");
        let token = list.get(0).get("token");
        text += "登入賬號:" + username + "       登入密碼:" + token + "\r\n";
    }
    text += "#r玩法介紹:[盈虧" + player.getEventValue("水果機盈虧") / 100 + "e]#n\r\n#b";
    text += "由於端口沒有內置網頁接口所以必須使用水果機程式進行玩耍\r\n";
    text += "程式每小時54分會自動閃退直到下個時段的11分才可以開啟,設計就是這樣設計的屬於正常現象\r\n";
    text += "#r詳情請查看DC - 新手專區 - 水果機\r\n";
    //text += "#L0##b"+Icon[103][1]+"點我開戶(免費)#l\r\n";
    //text += "#L1##b"+Icon[103][1]+"開始遊戲#l\r\n";
    text += "#L2#" + Icon[103][1] + "#r兌換遊戲幣#l      #L3#" + Icon[103][1] + "遊戲幣兌換獎勵#l" + "\r\n\r\n";
    text += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
        + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
        + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
        + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n\r\n";

    let selection = npc.askMenu(text)
    if (selection == 0) {
        if (open_hu()) {
            npc.say("開戶成功!")
        } else {
            npc.say("妳已經開過戶了或者請聯系管理員處理")
        }
    } else if (selection == 1) {
        if (!get_fruit()) {
            npc.say("請先開戶")
            return false
        }
        /*
        let list = player.customSqlResult("select username,token from fruit where acc_id = ?", accid);
        let username = list.get(0).get("username");
        let token = list.get(0).get("token");
        let url = 'http://60.251.132.120:4000/game/?username=' + username + '&token=' + token;
        player.openURL(url);*/
        npc.say("請去DC群-水果機頻道下載[Slot Machine.zip]\r\n攻略都在裡面?")
    } else if (selection == 2) {
        if (!get_fruit()) {
            npc.say("請先開戶")
            return false
        }
        let txt = "需要100W楓點 兌換 1積分(壹次對多輸入100)"
        let input = npc.askNumber(txt, 1, 1, 100)
        if (player.getCashShopCurrency(2) > input * 1000000) {
            dhxyb(input)
            reduceHyPay(input)
            player.addEventValue("水果機盈虧", -input, 3000);
            npc.say("兌換成功")
        } else {
            npc.say("楓點不足")
        }

    } else if (selection == 3) {
        if (!get_fruit()) {
            npc.say("請先開戶")
            return false
        }
        let list = player.customSqlResult("select * from fruit where acc_id = ?", accid);
        let balance = list.get(0).get("balance")
        let ms = "遊戲積分兌換100W楓點 \r\n(1積分 = 100W楓點) \r\n當天剩餘兌換次數:[" + (1000 - player.getEventValue("水果機每天領取")) + "]次\r\n當前可兌換" + balance
        let input = npc.askNumber(ms, 1, 1, 1000)
        date = new Date();
        let week = date.getDay();
        let day = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();
        if (balance < input) {
            npc.say("當前遊戲幣不足以兌換")
        } else if ((player.getCashShopCurrency(2) + input * 1000000) > 2100000000) {
            npc.say("本次兌換會導致楓點溢出,請計算後重新輸入")
        } else if ((player.getEventValue("水果機每天領取") + input) > 1000) {
            npc.say("每天只能領取1000枚~黑店標配,沒砍你就不錯了")
        } else {
            if (minute <= 55) {
                npc.say("當前時段不可兌換 時段的56分才可以兌換!")
            } else {
                tuifen(input)
                addHyPay(input)
                player.addEventValue("水果機盈虧", input, 3000);
                player.addEventValue("水果機每天領取", input, 1);
                npc.say("成功兌換" + input + "遊戲點");
            }
        }
    }
}

function open_hu() {
    if (!get_fruit()) {
        var sql = "INSERT INTO fruit (acc_id,username,token) VALUES (?,?,?)";
        var result = player.customSqlInsert(sql, accid, getAccountName(), generatePassword(6));
        return true;
    } else {
        return false;
    }
}

function dhxyb(price) {
    var sql = "update fruit set balance=balance + ? where acc_id=?";
    var result = player.customSqlUpdate(sql, price, accid);
}

function tuifen(price) {
    var sql = "update fruit set balance=balance - ? where acc_id=?";
    var result = player.customSqlUpdate(sql, price, accid);
}

function get_fruit() {
    let list = player.customSqlResult("select token from fruit where acc_id = ?", accid);
    if (list.size() > 0) {
        return true
    }
}

function getHypay() {
    /*
    var sql = "select * from hypay where accname = ? ";
    var result = player.customSqlResult(sql, getAccountName());
    if(result.size() > 0) {
    if(result.get(0) != null) {
    return result.get(0).get("pay");
    }
    } else {
    return 0;
    }*/
}

function reduceHyPay(price) {
    player.modifyCashShopCurrency(2, - (price * 1000000));
    //var sql = "update hypay set pay=pay-? where accname=?";
    //var result = player.customSqlUpdate(sql, price, getAccountName());
}

function addHyPay(price) {

    player.modifyCashShopCurrency(2, (price * 1000000));

}

function generatePassword(length) {
    length = length || 6;
    var source = "abcdefghzklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var s = "";
    for (var i = 0; i < length; i++) {
        s += source.charAt(Math.ceil(Math.random() * 1000) % source.length);
    }
    return s;
}
function getAccountName() {
    var sql = "select name from accounts where id = (select accounts_id from characters where id = " + player.getId() + ");";
    var resultList = player.customSqlResult(sql);
    var accountName = 0;
    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        var accountName = result.get("name");
    }
    return accountName;
}
