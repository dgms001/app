
var selectedType = 0;
var selectedMeso = 0;
var moneyMeso = 104000000;


var selection;

var sel_1;
var sel_2;


           selection = npc.askMenu("親愛的#r#h ##k您好，我是寄存星星管理員。\r\n#r#e本功能主要為了處理星星帳號共享。#k#n\r\n如果您需要存星星或者取星星的話請找我，請選擇您需要操作的項目:\r\n\r\n您目前身上有#r " + player.getAmountOfItem(4001839) + " #k個星星\r\n星星銀行數為#r " + getBankMeso(player.getId()) + " #k個星星\r\n#b#L0#我要存星星#l\r\n#L1#我要取星星#l");
     

            selectedType = selection;
            if (selectedType == 0) {
               sel_1 = npc.askNumber("請輸入您要存入的星星:\r\n", 1, 1, 20000);
            } else if (selectedType == 1) {
               sel_1 = npc.askNumber("請輸入您要取入的星星:\r\n", 1, 1, 20000);
            }

			selectedMeso = sel_1;
            if (selectedType == 0) {
                sel_2 = npc.askYesNo("您是否要存入#r " + selectedMeso + " #k個星星。");
            } else if (selectedType == 1) {
                sel_2 = npc.askYesNo("您是否要取出#r " + selectedMeso + " #k個星星。");
            }

		if(sel_2 == 0)
		{
			npc.say("如果您需要存款或者取款的話請找我，那麼請下次來找我！");	
		} else {
            if (selectedType == 0) {
                if (player.getAmountOfItem(4001839) < selectedMeso ) {
                    npc.say("您的星星不夠。");
                } else{
                	if(!existMoney(player.getId())){
                		//存在
                		if(updBank(parseInt(getBankMeso(player.getId())+selectedMeso),player.getId()) > 0){
                			player.loseItem(4001839,selectedMeso);
                    	npc.say("好的，已經存入！");
                		} else {
                    	npc.say(existMoney(player.getId())+"存款出現錯誤，請反饋給管理員！"+parseInt(getBankMeso(player.getId())+selectedMeso));
               			}
                	}else{
                		//不存在	
                		if(insBank(getAccountId(player.getId()),parseInt(getBankMeso(player.getId())+selectedMeso))> 0){
                			player.loseItem(4001839,selectedMeso);
                    	npc.say("好的，已經存入！");
                		} else {
                    	npc.say("存款出現錯誤，請反饋給管理員！");
                		}
                	} 
                }
            } else if (selectedType == 1) {
                if (getBankMeso(player.getId()) < selectedMeso) {
                    npc.say("您沒有存那麼多星星。");
                } else if (updBank(parseInt(getBankMeso(player.getId())-selectedMeso),player.getId()) > 0) {
                    player.gainItem(4001839,selectedMeso);
                    npc.say("好的，請收好您的星星！");
                } else {
                    npc.say("取款出現錯誤，請反饋給管理員！");
                }
            }
		}


function  getAccountName(charid) {
	var sql = "select name from accounts where id = (select accounts_id from characters where id = "+charid+");";
	var resultList = player.customSqlResult(sql);
	var accountName=0;
	for (var i = 0; i < resultList.size(); i++) {
    var result = resultList.get(i);
    if (accountName == null) {
        break;
    }
		var accountName = result.get("name");
	}
	return accountName;
}

//帳號
function  getAccountId(charid) {
	return player.getAccountId();
}

//是否存在
function existMoney(charid){
	var sql = "select a.money from zz_bank_star a where a.acctid = "+getAccountId(charid)+" and worldid = "+player.getWorld()+" ";
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
	var sql = "select money from zz_bank_star where acctid = "+getAccountId(charid)+"" +" and worldid = "+player.getWorld()+" ";
	var resultList = player.customSqlResult(sql);
	var money = 0;
	for (var i = 0; i < resultList.size(); i++) {
    var result = resultList.get(i);
    if (result == null) {
        break;
    }
			money = result.get("money");
	}
	return money;
}

//插入
function insBank(acctid,money){
	var sql = "insert into zz_bank_star(acctid,money,worldid)value("+acctid+","+money+","+player.getWorld()+")";
	player.customSqlInsert(sql);
	return 1;
}

//更新
function updBank(num,charid){
	var sql = "update zz_bank_star a set a.money = "+num+" where a.acctid = "+getAccountId(charid) +"  and worldid = "+player.getWorld()+" ";
	player.customSqlUpdate(sql); 
	return 1;
}



function nbsp(str){
	var txt ='';
	for(var i =0;i<str;i++){
  	txt +=" ";
  }
  return txt;
}
 