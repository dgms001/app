//**
 * 抽獎  
 *
 * 機制說明： 抽獎首先會生成0-100的隨機數，獎品裡面機率大於這個數的才會進入最終獎池，最終獲得的獎品將在最終獎池裡面隨機獲得一箇。
 *
 **/

let type = 2438084;// 1=點券 2=抵用 3=金幣 4=餘額 物品ID=材料抽獎
let needNum = 10;//需要數量
let title = "";
let haveMoney = 0;

//獎品
/8let laba = 1;//公告喇叭需要的機率
let items = Array(
    //物品ID 數量 機率(機率請寫100以下,只有機率在laba以下的才會喇叭公告)



    Array(2432140, 1, 100),
    Array(2432141, 1, 100),
    Array(2432142, 1, 5000),
    Array(2432143, 1, 2000),
    Array(2432144, 1, 1000),
    Array(2432145, 1, 1000),
    Array(4001548, 1, 1200),
    Array(4001548, 1, 1200),
    Array(4001548, 1, 1200),
    Array(4001713, 1, 1000),
    Array(4001713, 1, 1000),
    Array(4001714, 1, 500)



);
//展示出來的獎品
let showItems = Array(
    2022530, 2613051, 2612062, 2613050, 2612061,
    2615031, 2615032, 2048818, 2048817, 2046996, 2046997, 2612059,
    2046913, 2046914, 2049116, 2049601, 2340000, 5064000, 2046856, 2046857
);


let needItem = [
    Array(2438084, 1),

];


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
            title = "獎券";
            haveMoney = parseInt(player.getAmountOfItem(type));
            break;
    }


        if (player.hasItem(needItem[0][0], needItem[0][1])) {
            //抽獎


            if (player.getFreeSlots(1) > 1 && player.getFreeSlots(2) > 1 && player.getFreeSlots(3) > 1 && player.getFreeSlots(4) > 1 && player.getFreeSlots(5) > 1) {


                var txt = "以下是抽取道具:\r\n";
                for (var i = 0; i < 10; i++) {
                    player.loseItem(needItem[0][0], needItem[0][1])

                    var random1 = Math.floor(Math.random() * 12);

                    player.gainItem(items[random1][0], items[random1][1]);

                    txt += "#v" + items[random1][0] + "#/";
                }
                npc.say(txt);
				player.runScript("打開紅包");
				 break;
            } else {
				
                npc.say("無法抽取物品，請清理揹包");
				 break;
            }

        } else {
            npc.say("您的物品不足！無法抽取");
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