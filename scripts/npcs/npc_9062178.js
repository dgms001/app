npc.say("暫未開放")
/**
 ** 時裝換型
 **/
/*
var a1 ="#fItem/Cash/0501.img/05010128/effect/default/0#";//
var a2 ="#fItem/Cash/0524.img/05240011/info/icon#";// 
var b1 ="#fUI/UIWindow8/HundredShooting/number/1#"
var b2 ="#fUI/UIWindow8/HundredShooting/number/2#"
let needYE = 5; //所需餘額
let banItems = Array(
	//手動ban物品
    1033000,//路西德耳環
    1113228,//內面暴風
    1032261,//內面耀光
	1003889,//原來我被控制了
    1122296,//死神的項鍊
    1113220,//幽暗戒指
    1112918, //羈絆之翼
    1102963, //羈絆之翼
    1003843, //奇怪的狐狸面具
    1082553, //紅色十字架手套
    1032234, //藍色桃心耳環
    1012553, //咬緊牙關的面罩
    1702472, //萬聖節的命運
	1102039,//透明披風	
	1102293, //翅膀
	1102703, //翅膀
	1102704, //翅膀
	1102700, //翅膀
	1103019, //翅膀
	1102385, //翅膀
	1102699, //翅膀
	1102451, //翅膀
	1102779, //翅膀
	1102798, //翅膀
	1102724, //翅膀
	1102723, //翅膀
	1102968, //翅膀
	1102730, //翅膀
	1102873, //翅膀
	1102963, //翅膀
	1102039, //翅膀
	1103231,//翅膀
	1102968,
	1102723,
	1102671,
	1102706,
	1102965,
	1103023,
	1102223,
	1102972,
	1102039,
	1103110,
	1103065,
	1102933,
	1102604,
	1103041,
	1102349,
	1102982,
	1103151,
	1102827,
	1103113,
	
	
	
	

    1102724, //黑暗天使羽翼
    1102723, //光明天使羽翼
    1115014, //MVP對話方塊戒指（鑽石）
    1115102, //MVP名片戒指（鑽石）
    1115012, //MVP對話方塊戒指（白銀） 等級要求：0
    1115013, //MVP對話方塊戒指（黃金） 等級要求：0
    1115100, //MVP名片戒指（白銀） 等級要求：0
    1115101, //MVP名片戒指（黃金） 等級要求：0
    1102965, //螢火蟲之舞 等級要求：0
    1112244, //蝙蝠聊天戒指
    1102604, //蒼穹之翼
    1112966, //靈魂密友友情戒指
    1112968, //靈魂密友友情戒指
    1102873, //永恆初心者
	1102039,
    1102872//閃耀初心者
);


//不可以拿來轉換的道具
let banItems1 = Array(
    1033000,//路西德耳環
    1113228,//內面暴風
    1032261,//內面耀光
	1003889,//原來我被控制了
    1122296,//死神的項鍊
    1113220,//幽暗戒指
    1112918, //羈絆之翼
    1102963, //羈絆之翼
    1003843, //奇怪的狐狸面具
    1082553, //紅色十字架手套
    1032234, //藍色桃心耳環
    1012553, //咬緊牙關的面罩
    1702472, //萬聖節的命運
	1102039,//透明披風	
	1102293, //翅膀
	1102703, //翅膀
	1102704, //翅膀
	1102700, //翅膀
	1103019, //翅膀
	1102385, //翅膀
	1102699, //翅膀
	1102451, //翅膀
	1102779, //翅膀
	1102798, //翅膀
	1102724, //翅膀
	1102723, //翅膀
	1102968, //翅膀
	1102730, //翅膀
	1102873, //翅膀
	1102963, //翅膀
	1102039, //翅膀

    1102724, //黑暗天使羽翼
    1102723, //光明天使羽翼
    1115014, //MVP對話方塊戒指（鑽石）
    1115102, //MVP名片戒指（鑽石）
    1115012, //MVP對話方塊戒指（白銀） 等級要求：0
    1115013, //MVP對話方塊戒指（黃金） 等級要求：0
    1115100, //MVP名片戒指（白銀） 等級要求：0
    1115101, //MVP名片戒指（黃金） 等級要求：0
    1102965, //螢火蟲之舞 等級要求：0
    1112244, //蝙蝠聊天戒指
    1102604, //蒼穹之翼
    1112966, //靈魂密友友情戒指
    1112968, //靈魂密友友情戒指
    1102873, //永恆初心者
	1102039,
    1102872//閃耀初心者
);

let text = "        "+a2+""+a1+""+a2+"\r\n         #r#e#fs15#歡迎來到屬性點裝換形屋！#fs12#\r\n#b#n每次換形需要消耗#r:5餘額\r\n\r\n#d  "+b1+"將您需要更換外型的屬性點裝放在揹包裝備欄的第一個格子\r\n  "+b2+"輸入您要更換的新時裝序號程式碼，點選更換即可";
let YN = npc.askYesNo(text,9010061);
if(YN == 1){
	var oldEqp = player.getInventorySlot(1, 1);
	if(oldEqp == null){
		npc.say("#d請將裝備放到第一格",9000281);
	}else if(oldEqp.getSN() <= 0){
		npc.say("#d第一格裝備無法使用此功能\r\n#r僅支援： 點裝",9000281);
	}else if(banItems1.indexOf(oldEqp.getDataId()) != -1){
		npc.say("#d第一格裝備無法使用此功能",9000281);
	}else{
		let selectText = npc.askNumber("請輸入您要搜尋的點裝程式碼",0, 1000000, 1999999);
		let toDrop = player.makeItemWithId(selectText);
		if(banItems.indexOf(selectText) != -1){
			npc.say("該裝備已被管理員拉入小黑屋，不可購買！",9010061);
		}else if(null == toDrop){
			npc.say("您輸入的程式碼不存在，請重新輸入",9010061);
		}else{
			if(toDrop.getSN() > 0){
				let ss = "#e#b您是否想將#v"+oldEqp.getDataId()+"#,換為  #v"+selectText+"# ？";
				if(npc.askYesNo(ss,9010061) == 1){
					if(getHyPay(1) < needYE){
						npc.say("你沒有#v" + boxId + "#",9010061);	
					}else{
						gainHyPay(-needYE);
						oldEqp.setItemId(selectText);
						player.updateItem(1, oldEqp);
						npc.say("換型成功",9010061);
					}
				}else{
					npc.say("找錯了？那麼請繼續選購吧！",9010061);
				}
				
			}else{
				npc.say("您輸入的不是現金裝備程式碼！請重新輸入",9010061);
			}
	
		}
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
}*/