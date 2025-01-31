/**
 * 抽獎  
 *
 * 機制說明： 抽獎首先會生成0-100的隨機數，獎品裡面機率大於這個數的才會進入最終獎池，最終獲得的獎品將在最終獎池裡面隨機獲得一箇。
 *
 **/

let type = 5060068;// 1=點券 2=抵用 3=金幣 4=餘額 物品ID=材料抽獎（梅花7）
let needNum = 1;//需要數量
let title = "";
let haveMoney = 0;

//獎品
let laba = 10;//公告喇叭需要的機率
let items = Array(
    Array(1703240, 1, 100),//武器
    Array(1703119, 1, 100),//武器
    Array(1703004, 1, 100),//武器
    Array(1702957, 1, 100),//武器
    Array(1702618, 1, 100),//武器
    Array(1702563, 1, 100),//武器
    Array(1702863, 1, 100),//武器
    Array(1702854, 1, 100),//武器
    Array(1702800, 1, 100),//武器
    Array(1702769, 1, 100),//武器
    Array(1702734, 1, 100),//武器
    Array(1702493, 1, 100),//武器
    Array(1702494, 1, 100),//武器
    Array(1702495, 1, 100),//武器
    Array(1702496, 1, 100),//武器
    Array(1702472, 1, 100),//武器
    Array(1702399, 1, 100),//武器
    Array(1703168, 1, 100),//武器

    Array(1053704, 1, 100),//套服
    Array(1053556, 1, 100),//套服
    Array(1053557, 1, 100),//套服
    Array(1053558, 1, 100),//套服
    Array(1053559, 1, 100),//套服
    Array(1053560, 1, 100),//套服
    Array(1053427, 1, 100),//套服
    Array(1053428, 1, 100),//套服
    Array(1053429, 1, 100),//套服
    Array(1053297, 1, 100),//套服
    Array(1053298, 1, 100),//套服
    Array(1053349, 1, 100),//套服
    Array(1053350, 1, 100),//套服
    Array(1053149, 1, 100),//套服
    Array(1053150, 1, 100),//套服
    Array(1053151, 1, 100),//套服
    Array(1053152, 1, 100),//套服
    Array(1052971, 1, 100),//套服
    Array(1052972, 1, 100),//套服
    Array(1052973, 1, 100),//套服
    Array(1052974, 1, 100),//套服
    Array(1052883, 1, 100),//套服
    Array(1052884, 1, 100),//套服
    Array(1052885, 1, 100),//套服
    Array(1052886, 1, 100),//套服
    Array(1052763, 1, 100),//套服
    Array(1052764, 1, 100),//套服
    Array(1052765, 1, 100),//套服
    Array(1052766, 1, 100),//套服
    Array(1052767, 1, 100),//套服
    Array(1052768, 1, 100),//套服
    Array(1052769, 1, 100),//套服
    Array(1052770, 1, 100),//套服
    Array(1052731, 1, 100),//套服
    Array(1051547, 1, 100),//套服
    Array(1050480, 1, 100),//套服
    Array(1051329, 1, 100),//套服
    Array(1051330, 1, 100),//套服
    Array(1051331, 1, 100),//套服

    Array(1000101, 1, 100),//帽子
    Array(1001124, 1, 100),//帽子
    Array(1005365, 1, 100),//帽子
    Array(1005782, 1, 100),//帽子
    Array(1005351, 1, 100),//帽子
    Array(1005350, 1, 100),//帽子
    Array(1005349, 1, 100),//帽子
    Array(1005300, 1, 100),//帽子
    Array(1005299, 1, 100),//帽子
    Array(1005298, 1, 100),//帽子
    Array(1005297, 1, 100),//帽子
    Array(1005230, 1, 100),//帽子
    Array(1003782, 1, 100),//帽子
    Array(1005229, 1, 100),//帽子
    Array(1003785, 1, 100),//帽子
    Array(1003783, 1, 100),//帽子
    Array(1003784, 1, 100),//帽子
    Array(1005133, 1, 100),//帽子
    Array(1005132, 1, 100),//帽子
    Array(1005088, 1, 100),//帽子
    Array(1004599, 1, 100),//帽子
    Array(1004598, 1, 100),//帽子
    Array(1004121, 1, 100),//帽子
    Array(1003843, 1, 100),//帽子
    Array(1004597, 1, 100),//帽子
    Array(1003768, 1, 100),//帽子
    Array(1003767, 1, 100),//帽子
    Array(1003766, 1, 100),//帽子
    Array(1003765, 1, 100),//帽子
    Array(1003658, 1, 100),//帽子
    Array(1003657, 1, 100),//帽子
    Array(1003656, 1, 100),//帽子
    Array(1003655, 1, 100),//帽子
    Array(1003654, 1, 100),//帽子

    Array(1070096, 1, 100),//鞋子
    Array(1071113, 1, 100),//鞋子
    Array(1072839, 1, 100),//鞋子
    Array(1072840, 1, 100),//鞋子
    Array(1072841, 1, 100),//鞋子
    Array(1072842, 1, 100),//鞋子
    Array(1072848, 1, 100),//鞋子
    Array(1072935, 1, 100),//鞋子
    Array(1072936, 1, 100),//鞋子
    Array(1072937, 1, 100),//鞋子
    Array(1072938, 1, 100),//鞋子
    Array(1072939, 1, 100),//鞋子
    Array(1072940, 1, 100),//鞋子
    Array(1073031, 1, 100),//鞋子
    Array(1073206, 1, 100),//鞋子
    Array(1073207, 1, 100),//鞋子
    Array(1073208, 1, 100),//鞋子
    Array(1073209, 1, 100),//鞋子
    Array(1073306, 1, 100),//鞋子
    Array(1073307, 1, 100),//鞋子
    Array(1102738, 1, 100),//手套披風
    Array(1082553, 1, 100),//手套披風
    Array(1082589, 1, 100),//手套披風
    Array(1082590, 1, 100),//手套披風
    Array(1082725, 1, 100),//手套披風
    Array(1082736, 1, 100),//手套披風
    Array(1082739, 1, 100),//手套披風
    Array(1082740, 1, 100),//手套披風
    Array(1102686, 1, 100),//手套披風
    Array(1102687, 1, 100),//手套披風
    Array(1102732, 1, 100),//手套披風
    Array(1102733, 1, 100),//手套披風
    Array(1102735, 1, 100),//手套披風
    Array(1102736, 1, 100),//手套披風
    Array(1102793, 1, 100),//手套披風
    Array(1103088, 1, 100),//手套披風
    Array(1152101, 1, 100),//手套披風
    Array(1132183, 1, 100),//手套披風
    Array(1122210, 1, 100),//手套披風
    Array(1032184, 1, 100),//手套披風
    Array(1022286, 1, 100),//手套披風
    Array(1022218, 1, 100),//手套披風
    Array(1022217, 1, 100),//手套披風
    Array(1022216, 1, 100),//手套披風
    Array(1012626, 1, 100),//手套披風
    Array(1012452, 1, 100),//手套披風
    Array(1012451, 1, 100),//手套披風
    Array(1012412, 1, 100),//手套披風
);
//展示出來的獎品
let showItems = Array(
    1102738,
    1082553,
    1082589,
    1082590,
    1082725,
    1082736,
    1082739,
    1082740,
    1102686,
    1102687,
    1102732,
    1102733,
    1102735,
    1102736,
    1102793,
    1103088,
    1152101,
    1132183,
    1122210,
    1032184,
    1022286,
    1022218,
    1022217,
    1022216,
    1012626,
    1012452,
    1012451,
    1012412
);
let showItem1 = Array(
    1070096,
    1071113,
    1072839,
    1072840,
    1072841,
    1072842,
    1072848,
    1072935,
    1072936,
    1072937,
    1072938,
    1072939,
    1072940,
    1073031,
    1073206,
    1073207,
    1073208,
    1073209,
    1073306,
    1073307

);
let showItem177 = Array(
    1000101,
    1001124,
    1005365,
    1005782,
    1005351,
    1005350,
    1005349,
    1005300,
    1005299,
    1005298,
    1005297,
    1005230,
    1003782,
    1005229,
    1003785,
    1003783,
    1003784,
    1005133,
    1005132,
    1005088,
    1004599,
    1004598,
    1004121,
    1003843,
    1004597,
    1003768,
    1003767,
    1003766,
    1003765,
    1003658,
    1003657,
    1003656,
    1003655,
    1003654


);
let showItem178 = Array(
    1053704,
    1053556,
    1053557,
    1053558,
    1053559,
    1053560,
    1053427,
    1053428,
    1053429,
    1053297,
    1053298,
    1053349,
    1053350,
    1053149,
    1053150,
    1053151,
    1053152,
    1052971,
    1052972,
    1052973,
    1052974,
    1052883,
    1052884,
    1052885,
    1052886,
    1052763,
    1052764,
    1052765,
    1052766,
    1052767,
    1052768,
    1052769,
    1052770,
    1052731,
    1051547,
    1050480,
    1051329,
    1051330,
    1051331

);
let showItem179 = Array(
    1703240,
    1703119,
    1703004,
    1702957,
    1702618,
    1702563,
    1702863,
    1702854,
    1702800,
    1702769,
    1702734,
    1702493,
    1702494,
    1702495,
    1702496,
    1702472,
    1702399,
    1703168

);

while (true) {
    switch (type) {
        case 1:
            title = "點券"
            haveMoney = parseInt(player.getCashShopCurrency(1));
            break;
        case 2:
            title = "抵用"
            haveMoney = parseInt(player.getCashShopCurrency(2));
            break;
        case 3:
            title = "金幣"
            haveMoney = "查閱揹包";
            break;
        case 4:
            title = "餘額"
            haveMoney = parseInt(getHyPay(1));
            break;
        default:
            title = "";
            haveMoney = parseInt(player.getAmountOfItem(type));
            break;
    }
    let str = "\t\t\t\t#fs21##r#e聯名箱轉蛋#fs12##n\r\n";
    str += "#b每次需要消耗 #r" + needNum + " #b個#v5060068#\r\n"
    str += "\r\n#e#b獎品展示:\r\n"
    str += "\r\n#e#r點裝武器:\r\n"
    for (let i = 0; i < showItem179.length; i++) {
        str += "#v" + showItem179[i] + "#"
    }

    str += "\r\n#e#r點裝套服:\r\n"
    for (let i = 0; i < showItem178.length; i++) {
        str += "#v" + showItem178[i] + "#"
    }
    str += "\r\n#e#r點裝帽子:\r\n"
    for (let i = 0; i < showItem177.length; i++) {
        str += "#v" + showItem177[i] + "#"
    }
    str += "\r\n#e#r點裝鞋子:\r\n"
    for (let i = 0; i < showItem1.length; i++) {
        str += "#v" + showItem1[i] + "#"
    }
    str += "\r\n#e#k手套披風:\r\n"
    for (let i = 0; i < showItems.length; i++) {
        str += "#v" + showItems[i] + "#"
    }
    //str += "\r\n#k如果你足夠幸運，還能抽到2-3個箱子，是否抽獎？"
    let YN = npc.askYesNo(str);
    if (YN == 1) {
        let canGet = false;
        if (type != 3 && haveMoney >= needNum) {
            canGet = true;
        } else if (type == 3 && player.hasMesos(needNum)) {
            canGet = true;
        }
        if (canGet) {
            //抽獎
            let random = Math.floor(Math.random() * 100);
            let finalItems = Array();
            for (let i = 0; i < items.length; i++) {
                if (random < items[i][2]) finalItems.push(items[i]);
            }
            var random1 = Math.floor(Math.random() * finalItems.length);

            if (player.canGainItem(finalItems[random1][0], finalItems[random1][1])) {
                switch (type) {
                    case 1:
                        player.modifyCashShopCurrency(1, -needNum);
                        break;
                    case 2:
                        player.modifyCashShopCurrency(2, -needNum);
                        break;
                    case 3:
                        player.loseMesos(needNum);
                        break;
                    case 4:
                        gainHyPay(-needNum)
                        break;
                    default:
                        player.loseItem(type, needNum);
                        break;
                }
                if (finalItems[random1][2] <= laba) {
                    npc.broadcastPlayerNotice(7, "[聯名箱] 玩家 " + player.getName() + "   " + title + "轉蛋機中獲得了  " + player.makeItemWithId(finalItems[random1][0]).getItemName() + "");
                }
                player.gainItem(finalItems[random1][0], finalItems[random1][1]);
                npc.say("抽取成功！獲得#v" + finalItems[random1][0] + "# x " + finalItems[random1][1]);
            } else {
                npc.say("無法抽取物品，請清理揹包");
            }

        } else {
            npc.say("您的" + title + "不足！無法抽取");
            break;
        }
    } else {
        break;
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

