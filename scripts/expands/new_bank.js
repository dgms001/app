var status = -1;
var selectedType = 0;
var selectedMeso = 0;
var moneyMeso = 104000000;
 
           selectedType =  npc.askMenu("親愛的#r#h ##k您好，我是銀行管理員。\r\n#r#e本功能主要為了處理倉庫最多保存100億,和人物角色最多放100億。超過取出會消失金幣。如果還出現金幣放在倉庫取出消失不再負責。#k#n\r\n如果您需要存款或者取款的話請找我，請選擇您需要操作的項目:\r\n\r\n銀行存款為#r " + getBankMeso(player.getId()) + " #k億金幣\r\n#r#L0#我要存款#l\r\n#L1#我要取款#l");
        
            if (selectedType == 0) {
                var selectedMeso = npc.askNumber("請輸入您要存款的金額(單位: 億 ):\r\n", 1, 1, 99);
				var yes = npc.askYesNo("您是否要存入#r " + selectedMeso + " #k億金幣。");
				if(yes == 1){
					if (!player.hasMesos(selectedMeso * moneyMeso)) {
						npc.say("您的金幣不夠。");
					} else{
						if(!existMoney(player.getId())){
							//存在
							if(updBank(parseInt(getBankMeso(player.getId())+selectedMeso),player.getId()) > 0){
								player.gainMesos(-selectedMeso * moneyMeso);
								npc.say("好的，已經存入！");
							} else {
								npc.say(existMoney(player.getId())+"存款出現錯誤，請反饋給管理員！"+parseInt(getBankMeso(player.getId())+selectedMeso * moneyMeso));
							}
						}else{
							//不存在	
							if(insBank(getAccountId(player.getId()),parseInt(getBankMeso(player.getId())+selectedMeso))> 0){
								player.gainMesos( - selectedMeso * moneyMeso);
								npc.say("好的，已經存入！");
							} else {
								npc.say("存款出現錯誤，請反饋給管理員！");
							}
						} 
					}
				}
            } else if (selectedType == 1) {
                var selectedMeso = npc.askNumber("請輸入您要取款的金額(單位: 億 ):\r\n", 1, 1, 99);
				var yes = npc.askYesNo("您是否要取出#r " + selectedMeso + " #k億金幣。");
				if(yes == 1){
					if (getBankMeso(player.getId()) < selectedMeso) {
						npc.say("您沒有存那麼多錢。");
					} else if (parseInt(player.hasMesos(9999999999 - selectedMeso* moneyMeso ))> 9999999999) {
						npc.say("您身上的金幣和取出的金幣超過了 99 億，領取失敗。身上最多只能保存99億，#r#e超出自負#k#n！");
					} else if (updBank(parseInt(getBankMeso(player.getId())-selectedMeso),player.getId()) > 0) {
						player.gainMesos(selectedMeso * moneyMeso);
					   npc.say("好的，請收好您的錢！");
					} else {
						npc.say("取款出現錯誤，請反饋給管理員！");
					}
				}
            }
//帳號
function  getAccountId(charid) {
	var sql = "select accounts_id from characters where id = "+charid+"";
	var resultList = player.customSqlResult(sql);
	var accountid = 0;
	for (var i = 0; i < resultList.size(); i++) {
    var result = resultList.get(i);
    if (result == null) {
        break;
    }
		accountid = result.get("accounts_id");
	}
	if(accountid==null){
			accountid = 0;
		}
	return accountid;
}

//是否存在
function existMoney(charid){
	var sql = "select a.money from zz_bank a where a.acctid = "+getAccountId(charid) +" and worldid = 0 ";
	var resultList = player.customSqlResult(sql);
	var exist=true;
	for (var i = 0; i < resultList.size(); i++) {
    var result = resultList.get(i);
    if (result == null) {
        break;
    }
		exist = false;
	}
	return exist;
}

//錢
function  getBankMeso(charid) {
	var sql = "select money from zz_bank where acctid = "+getAccountId(charid)+" and worldid = 0 ";
	var resultList = player.customSqlResult(sql);
	var money = 0;
	for (var i = 0; i < resultList.size(); i++) {
    var result = resultList.get(i);
    if (result == null) {
        break;
    }
		money = parseInt(result.get("money"));
	}
	if(money==null){
			money = 0;
		}
	return money;
}

//插入
function insBank(acctid,money){
	var sql = "insert into zz_bank(acctid,money,worldid)value("+acctid+","+money+",0 )";
	player.customSqlInsert(sql);
	return 1;
}

//更新
function updBank(num,charid){
	var sql = "update zz_bank a set a.money = "+num+" where a.acctid = "+getAccountId(charid) +"  and worldid = 0 ";
	player.customSqlUpdate(sql); 
	return 1;
}

