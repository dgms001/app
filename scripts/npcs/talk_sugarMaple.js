/**
 * 新手NPC
 **/

//新手送的裝備
let newerEquips = Array(
    //裝備ID 裝備名 四圍 攻擊力 BOSS 所屬 無視
    // Array(1142174, "萌新起航", 15, 15, 1, 1, 1),
    // Array(1142360, "萌新起航", 15, 15, 1, 1, 1)
);

//新手送的物品
let newerItems = Array(
    Array(4001714, 2),//定居金100萬金錢
    Array(2430241, 1),//可愛新手禮物套裝
    Array(2430682, 1),//情人節禮物箱子
    Array(2432628, 1),//拍賣
    Array(2432068, 1),//革命武器
	Array(2436058, 1)//查詢爆率物品
);

let Dq = 0;//點券數量
let Dy = 0;//抵用數量
let YE = 0;//餘額數量
let Meso = 100000;//金幣數量

getHyPay(1);//初始化餘額表
//密碼
let password = "123"
//領取獎勵後傳送到？
let map = 50000;
if (player.getPQLog("新手降臨") < 0) {
    npc.say("您的已經領取過新手禮包，無法再次領取");
} else {
    let YN = npc.askYesNo("歡迎來到 #r逍遙島#k,這裡有#b最帥的BOSS！\r\n#b·各種特色副本趣味活動獎勵豐富，享受逍遙帶來的樂趣吧！\r\n#r注意!注意!注意！\r\n#b1.萌新入島建議仔細檢視#v2430154##b裡面有全面的萌新教學路線！\r\n#b2.遊戲選單在#v2432628##b裡麵點開即可檢視逍遙的全部特色功能喔\r\n#rps.由於本服是新開的伺服器，有需要改善的地方或者對遊戲有建議或者看法，都可以聯絡島主提出。\r\n逍遙島唯一島主:BOSS：923600024\r\n#b#k你準備好進入逍遙島了嗎？ #k");
    if (YN == 1) {
        while (true) {
            let text = npc.askText("請輸入入島密碼(悄悄告訴你密碼是#b" + password + "#k)", "", 0, 999);
            if (text == password || player.isGm()) {
                for (let i = 0; i < newerItems.length; i++) {
                    player.gainItem(newerItems[i][0], newerItems[i][1]);
                }

                for (let i = 0; i < newerEquips.length; i++) {
                    let newItem = player.makeItemWithId(newerEquips[i][0]);
                    newItem.setStr(newerEquips[i][2]); //裝備力量
                    newItem.setDex(newerEquips[i][2]); //裝備敏捷
                    newItem.setInt(newerEquips[i][2]); //裝備智力
                    newItem.setLuk(newerEquips[i][2]); //裝備運氣

                    newItem.setMad(newerEquips[i][3]);
                    newItem.setPad(newerEquips[i][3]);

                    newItem.setStatR(newerEquips[i][5]);// 所有屬性
                    newItem.setTitle(newerEquips[i][1]);// 所有屬性
                    newItem.setBossDamageR(newerEquips[i][4]);// BOSS傷
                    newItem.setIgnorePDR(newerEquips[i][6]);// 無視防禦
                    newItem.setAttribute(0);
                    player.gainItem(newItem);
                    player.gainEquipInventorySlots(96);
                    player.gainUseInventorySlots(96);
                    player.gainEtcInventorySlots(96);
                    player.gainCashInventorySlots(96);
                    player.gainSetupInventorySlots(96);
					player.increaseTrunkCapacity(96);
                }
                player.gainMesos(Meso);
                player.modifyCashShopCurrency(1, Dq);
                player.modifyCashShopCurrency(2, Dy);
                gainHyPay(YE);
                player.addPQLog("新手降臨", 10, 1500);
                player.changeMap(map)

                player.completeQuest(6500, 0);
                npc.broadcastNoticeWithoutPrefix("[逍遙島]:萌新 " + player.getName() + " 成功登入！快和大家一起愉快的玩耍吧！");
                let ss = "";
                if (YE > 0) ss += "#b餘額 #rx " + YE + " \r\n"
                if (Dq > 0) ss += "#b點券 #rx " + Dq + " \r\n"
                if (Dy > 0) ss += "#b抵用 #rx " + Dy + " \r\n"
                if (Meso > 0) ss += "#b金幣 #rx " + Meso + " \r\n"
                if (ss != "") {
                    ss = "\r\n以及:" + ss;
                }


                for (let i = 0; i < 20; i++) {
                    if (player.getLevel() < 10) {
                        player.gainExp(300);
                    }
                }

                npc.say("送了你一些新手裝備以及物品哦！請開啟揹包查收。" + ss);
                break;
            } else {
                npc.say("密碼錯誤我可不能放你入島哦！請重新輸入");
            }
        }
    } else {
        npc.say("趕緊做好準備上車吧！");
    }
}

function getHyPay(type) {
    let sql = "select * from hypay where accname = '" + getAccountName() + "'";
    let push = player.customSqlResult(sql);
    let pay = "";
    if (push.size() > 0) {
        let result = push.get(0);
        if (type == 1) {
            pay = result.get("pay");
        } else if (type == 2) {
            pay = result.get("payUsed");
        } else if (type == 3) {
            pay = result.get("payReward");
        }
    } else {
        player.customSqlInsert("INSERT INTO `hypay` (`accname`, `name`) VALUES ('" + getAccountName() + "', '" + player.getName() + "')");
        return getHyPay(1);
    }

    return pay;
}

function getAccountName() {
    let i = -1;
    let sql = "select name,id from accounts where id=" + player.getAccountId() + " order by name limit 1;";
    let push = player.customSqlResult(sql);
    let name = "";
    if (push.size() > 0) {
        let result = push.get(0);
        name = result.get("name");
    }
    return name;
}

function gainHyPay(count) {
    let sql = "update hypay set pay =pay+? where accname = '" + getAccountName() + "';";
    player.customSqlUpdate(sql, count);
}