var item = 4032216;//設定怪物掉落物
addsql(item);//寫抬頭 自動新建
let 獎勵目標 = Array(0,

100000,
300000,
500000,
800000,
1000000,

1300000,
1500000,
1800000,
2000000,
2300000,

2500000,
2800000,
3000000,
3300000,
3500000,

3800000,
4000000,
4300000,
4500000,
5000000,

6000000,
7000000,
8000000,
9000000,
10000000,

11000000,
12000000,
13000000,
14000000,
15000000,
18000000,
20000000,
23000000,
25000000,
30000000
);
quant = 1000;
let zhizuoPQ = Array (
Array(4033078,0),
Array(4032053,3000),//元寶
Array(2635039,20),//V卷
Array(2450158,10),//經驗
Array(2023721,10),//掉寶
Array(5060086,30),//畫框

Array(5062503,50),//白色附加
Array(4032053,5555),//元寶
Array(5060086,50),//畫框
Array(5062503,100),//白色附加
Array(5064502,30),//星火

Array(4032053,6666),//元寶
Array(5062026,50),//結合
Array(5060048,50),//蘋果
Array(5064400,30),//恢復
Array(4032053,7777),//元寶

Array(5064502,30),//星火
Array(2635038,50),//B卷
Array(5062026,100),//結合
Array(4032053,8888),//元寶
Array(5060048,50),//蘋果


Array(5064400,50),//恢復卡
Array(2635038,50),//B卷
Array(4032053,9999),//元寶
Array(2635032,50),//命運
Array(2633609,5),//重載


Array(2644029,2),//20星
Array(5064400,50),//恢復卡
Array(4032053,9999),//元寶
Array(2644029,3),//20星
Array(2633609,5),//命運

Array(2644008,2),//追加
Array(2644008,2),//自選榮耀
Array(2431603,5),//自選心
Array(2431603,5),//自選心
Array(2632486,2)//贊助強化

);



date = new Date();
let week = date.getDay();
let day = date.getDate();
let hour=date.getHours();
let minute=date.getMinutes();
//updateitems(item,100);//收集道具,數量)收集次數自動+1
txt="";
txt += "#e#r#fs21#\t\t\t\t蒐集活動\r\n";



txt += "#b每提交#v" + item + "##r1000#b個,則全服收集增加一次\r\n";
txt += "#b全服達標相關次數領取獎勵\r\n";//更改時間
txt+="全服收集次數:[#r"+getAllquantity()/quant+"#b] 目前收集[#r"+getfrequency()+"#b]次\r\n\r\n";
txt+="\t\t\t#L0##r提交物品#v"+item+"##b#l   #L500#查看獎勵#l\r\n";

for ( let i=1; i<獎勵目標.length; i++){
if(player.getEventValue("1全服進度目標"+i+"") < 1 ){
txt+="#L"+i+"#全服提交#r"+獎勵目標[i]/quant+"#b次 獎勵領取#l\r\n";
}	
}


let sel = npc.askMenuA(txt);
	
	if(sel==0){
	var currentItemQuantity = player.getAmountOfItem(item);
	//txt = "\r\n\t\t  #fs24##r#e【收集交換】\r\n";
	txt = "#fs32##b我要提交#v" + item + "##z" + item + "#\r\n\r\n";
	txt += "#fs21##e輸入1則表示提交#r1000#b個\r\n輸入10則為#r10000#b個\r\n\r\n";
	txt += "請輸入提交數量:";
	txt += "";
	var number = npc.askNumber(txt, 1, 1, currentItemQuantity / quant);
	if (!player.hasItem(item, number * quant)) {
		npc.say("你擱這裡玩呢???");
	} else {
		player.loseItem(item, number * quant);
		for (var i = 0; i < number; i++) {
			updateitems(item, quant);//收集道具,數量)收集次數自動+1
		}
	}
	}


	if(sel==1000){
		var sql = "SELECT DISTINCT zz_items_sky.character_id,zz_items_sky.quantity FROM	accounts INNER JOIN	characters ON accounts.id = characters.accounts_id,zz_items_sky WHERE accounts.gm <= 0 AND characters.gm <= 0 AND zz_items_sky.gm <= 0 ORDER BY zz_items_sky.quantity DESC LIMIT 10";
		
	
		var resultList = player.customSqlResult(sql);
		var txt = "\t\t#e#fs16#【收集排行榜】#k#n\r\n\r\n#fs14#";
		txt += "  #b名次    #k數 量    #r名  稱\r\n";

		for (var i = 0; i < resultList.size(); i++) {
			var rank = i + 1;
			var result = resultList.get(i);
			if (result == null) {
				break;
			}

			if (rank == 1) {
				txt += "#r";
			} else if (rank == 2) {
				txt += "#r";
			} else if (rank == 3) {
				txt += "#r";
			}
			txt += "   #b" + rank + "    #k";
			numbers = (""+result.get("quantity")+"");
			for (var j = 7 - numbers.length; j > 0; j--) {
				txt += " ";
			}
			txt +=  result.get("quantity") + "#r\t";
			txt += getNAME(result.get("character_id")) + "";
			txt += "\r\n#b";
		}
		npc.askMenuS(txt, true);
	}
	
	
	
	if(sel == 500){
		txt = "#fs14##b";
		for ( let i=1; i<zhizuoPQ.length; i++){
		
		txt+="#fs21##e"+獎勵目標[i]/quant+"次:[#b#v"+zhizuoPQ[i][0]+"##z"+zhizuoPQ[i][0]+"##r*"+zhizuoPQ[i][1]+"#b]#l\r\n";
			
		}
		npc.askMenuA(txt, true);
		
	}else if(sel>=1){
		if(getAllquantity() >= (獎勵目標[sel]) && player.getEventValue("1全服進度目標"+sel+"") <= 1 && getfrequency() >= (獎勵目標[sel]*0.014*0.001/5) ){
			player.addEventValue("1全服進度目標"+sel+"",1,1000);
			player.gainItem(zhizuoPQ[sel][0],zhizuoPQ[sel][1]);
			npc.broadcastPlayerNotice(12,"【蒐集活動】 " + player.getName() + "領取全服進度目標"+獎勵目標[sel]/quant+"獎勵!");
			npc.say("#fs14##b獲得#v"+zhizuoPQ[sel][0]+"#*#r"+zhizuoPQ[sel][1]+"#b個");
			//npc.say("#fs14##b1.全服目標尚未達到[#r"+獎勵目標[sel]/quant+"#b]次,\r\n2.自身需繳交[#r"+獎勵目標[sel]*0.01+"#b]個");
			
		}else {
			npc.askMenuA("\r\n\r\n\r\n\t\t\t\t\t#fs21##b全服目標尚未達到[#r"+獎勵目標[sel]/quant+"#b]次,\r\n\r\n\t\t\t   自身需繳交[#r"+獎勵目標[sel]*0.014+"#b]個");
		}
		
	}
	




function updateitems(item, quantity) {
    var sql = "UPDATE zz_items_sky SET quantity = quantity+'" + quantity + "',frequency=frequency+1 where character_id = '" + player.getId()  + "' AND item = '" + item + "';";//疑問 有兩個分號; 
	//			更新 		資料庫		 寫入 列表 ='"+值+"'		  對指定條件	列表 = '"+值+"';
	
	//var sql = "insert INTO jili_active_status(activeName,status) VALUES ('" + name + "','" + status + "')";/(SQL新建
	//	對SQL     寫入			資料庫			(列表,列表)			寫入值		(值,值)
    player.customSqlUpdate(sql);
}

function getcharacter_id() { //獲取資料表
    var sql = "select character_id from zz_items_sky where character_id = ? ";
    var result = player.customSqlResult(sql, player.getId());
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("character_id");
        }
    } else {
        return 0;
    }

}

function addsql(item) { //為角色新建一個
	if (getcharacter_id() == 0) {
		var sql = "update zz_items_sky set item='"+ item +"',quantity=?,frequency=?,accounts_id=? where character_id=?";
		player.customSqlUpdate(sql, 0, 0,"" + player.getAccountId() + "", "" + player.getId() + "");
		var sql = "insert into zz_items_sky(accounts_id,character_id,item,quantity,frequency,gm) values('" + player.getAccountId() + "','" + player.getId() + "','"+ item +"','0','0','"+getGM()+"')";
		player.customSqlInsert(sql);
		//這裏resetEventValue
		npc.say("加載數據庫成功。");
	}
}




/*
zz_items_sky(character_id,item,quantity,frequency)
*/

function getquantity() { //獲取資料表 個人數量
    var sql = "select quantity from zz_items_sky where character_id = ? ";
    var result = player.customSqlResult(sql, player.getId());
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("quantity");
        }
    } else {
        return 0;
    }

}

function getfrequency() { //獲取資料表 個人次數
    var sql = "select frequency from zz_items_sky where character_id = ? ";
    var result = player.customSqlResult(sql, player.getId());
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("frequency");
        }
    } else {
        return 0;
    }

}

function getAllquantity() { //全服收集數量   WHERE	zz_items_sky.gm <= 0 排除gm
    var sql = "SELECT sum(quantity) FROM zz_items_sky WHERE	zz_items_sky.gm <= 0";
    var result = player.customSqlResult(sql);
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("sum(quantity)");
        }
    } else {
        return 0;
    }

}

function getNAME(ID) { //拿來排名顯示名稱的
    var sql = "select name from characters where id = '"+ID+"' ";
    var result = player.customSqlResult(sql);
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("name");
        }
    } else {
        return 0;
    }

}

function getGM() { //gm資料庫 防寫入排名跟累積
    var sql = "select gm from characters where id = ?";
    var result = player.customSqlResult(sql,player.getId() );
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("gm");
        }
    } else {
        return 0;
    }

}