/*
	名稱：運營員
	內容：快速轉職
*/

var status = -1;
var sel = -1;

var potList = Array(

	Array(40041, "力量12%"),
	Array(40042, "敏捷12%"),
	Array(40047, "敏捷12%"),
	Array(40043, "智力12%"),
	Array(40044, "運氣12%"),
	Array(40048, "運氣12%"),
	
	Array(40045, "HP12%"),
	Array(40086, "全屬性9%")


);


var potList1 = Array(

Array(42091, "角色每10級力量+2", 5000),
Array(42092, "角色每10級敏捷+2", 5000),
Array(42093, "角色每10級智力+2", 5000),
Array(42094, "角色每10級運氣+2", 5000),
Array(42041, "力量+7%", 5000),
Array(42042, "敏捷+7%", 5000),
Array(42043, "智力+7%", 5000),
Array(42044, "運氣+7%", 5000),
Array(42086, "全屬性5%", 5000),
Array(42045, "HP10%", 5000)


);

var potList2 = Array(

Array(42091, "力量+7%", 5000),
Array(42092, "敏捷+7%", 5000),
Array(42093, "智力+7%", 5000),
Array(42094, "運氣+7%", 5000),
Array(42041, "力量+7%", 5000),
Array(42042, "敏捷+7%", 5000),
Array(42043, "智力+7%", 5000),
Array(42044, "運氣+7%", 5000),
Array(42086, "全屬性5%", 5000),
Array(42045, "HP10%", 5000)


);

var sel_1;
var sel_2;


	//if (status == 0) {
		var selStr = "#r#e轉換裝備潛能只有3條一樣的才能互換\r\n";
			selStr+="#L1#轉換上面潛能(3條)#l\r\n";
			selStr+="#L2#轉換下面潛能(3條)#l\r\n";
    	sel_1 = npc.askMenu(selStr);
	//} else if (status == 1) {
		
		
		sel = sel_1;
		var equip =   player.getInventorySlot(1,1);
		if(null == equip){
			npc.say("您的裝備欄第一格是空的，需要放入你要轉換的裝備。");
			//cm.dispose();
			//return;
		}else if(equip.getAttribute()==41){
			npc.say("帶鎖的裝備不能進行操作。");
			//return;
		}
		var itemida = equip.getDataId();
		
		if(sel == 1){
			var op1 = typeIsTrue(equip.getOption(1,false));
			var op2 = typeIsTrue(equip.getOption(2,false));
			var op3 = typeIsTrue(equip.getOption(3,false));
			//java.lang.System.out.println(op1+"---"+op2 +"---"+op3);
			if(op1 == op2 && op2 == op3 && op3 != "未知"){
				var str = "請選擇您要選擇的潛能,相同文字效果一樣\r\n";
				for(var i = 0;i<potList.length;i++){
					str+="#L"+(i+1)+"#"+potList[i][1]+"#l\r\n";
				}
				sel_2 = npc.askMenu(str);
			}else{
				npc.say("您的3條潛能並不是一類的,無法進行互轉。只有3條敏捷，力量，智力，運氣12%可以互轉。");
				//cm.dispose();
			}		
		}else if(sel ==2){
			var op1 = typeIsTrue1(equip.getOption(1,true));
			var op2 = typeIsTrue1(equip.getOption(2,true));
			var op3 = typeIsTrue1(equip.getOption(3,true));
			//java.lang.System.out.println(op1+"---"+op2 +"---"+op3);
			if(op1 == op2 && op2 == op3 && op3 != "未知"){
				var str = "請選擇您要選擇的潛能,相同文字效果一樣\r\n";
				for(var i = 0;i<potList1.length;i++){
					str+="#L"+(i+1)+"#"+potList1[i][1]+"#l\r\n";
				}
				sel_2 = npc.askMenu(str);
			}else{
				npc.say("您的3條潛能並不是一類的,無法進行互轉。只有3條敏捷，力量，智力，運氣12%可以互轉。");
				//cm.dispose();
			}
		}
		
		
		
	//}  else if (status == 2) {
		 if(!player.hasMesos(1040000000)){
			npc.say('您的金幣小于10E.');	
			//cm.dispose();
			//return;
		}
		if(sel == 1){
			var equip =   player.getInventorySlot(1,1);
			equip.setOption(1,potList[selection-1][0],false);
			equip.setOption(2,potList[selection-1][0],false);
			equip.setOption(3,potList[selection-1][0],false);
			player.updateItem(1,equip);
			player.gainMesos(-1040000000);
			npc.say("轉換成功");
			//cm.dispose();
		}else if(sel == 2){
			var equip =   player.getInventorySlot(1,1);
			equip.setOption(1,potList1[selection-1][0],true);
			equip.setOption(2,potList1[selection-1][0],true);
			equip.setOption(3,potList1[selection-1][0],true);
			player.updateItem(1,equip);
			player.gainMesos(-50000000);
			npc.say("轉換成功");
			//cm.dispose();
		}
		
	//}else if (status == 3) {}
//}

function typeIsTrue(options){
	for(var i = 0;i<potList.length;i++){
		if(options == potList[i][0]){
			return potList[i][1];
		}
	}
	return "未知";
}


function typeIsTrue1(options){
	for(var i = 0;i<potList2.length;i++){
		if(options == potList2[i][0]){
			return potList2[i][1];
		}
	}
	return "未知";
}

function isJob(str) {
	if(str.indexOf("戰士")>= 0||str.indexOf("西亞戴斯")>= 0){
		return "戰士";
	}else if(str.indexOf("丹維奇")>= 0 ||str.indexOf("法師")>= 0||str.indexOf("赫爾梅斯")>= 0){
		return "法師";
	}else if(str.indexOf("游俠")>= 0||str.indexOf("弓箭手")>= 0||str.indexOf("凱倫")>= 0){
		return "弓箭手";
	}else if(str.indexOf("刺客")>= 0||str.indexOf("飛俠")>= 0||str.indexOf("利卡昂")>= 0){
		return "飛俠";
	}else if(str.indexOf("流浪")>= 0||str.indexOf("海盜")>= 0||str.indexOf("阿爾泰")>= 0){
		return "海盜";
	}
    return "???";
}




//獲取裝備類型
function getItemType(itemid) {
	var type = Math.floor(itemid/10000);
	switch (type) {
		case 115:
			return true; //護肩
			case 108:
			return true; //手套
			case 118:
			return true; //徽章
		default:
			var type=Math.floor(type/10);
			if (type==12 || type==13 || type==14 || type==15 || type==17) {
				return true;  //裝備
			}
			return false;
	}
}

function attributeComparison(oldEquip,newEquip){
	return oldEquip - newEquip;
}


function askNumber(str,def,min,max){
	if(cm.getQuestInfo(9601)==1){
		cm.askNumberE(str,def,min,max);
	}else{
		cm.askNumber(str,def,min,max);
	}
}


function sendNext(selStr){
 	if(cm.getQuestInfo(9601)==1){
		cm.sendNextE(selStr);
	}else{
		cm.sendNext(selStr);
	}
}

function asktext(selStr,min,max){
	if(cm.getQuestInfo(9601)==1){
		cm.askTextE(selStr,min,max);
	}else{
		cm.askText(selStr,min,max);
	}
}

function ask(selStr){
	if(cm.getQuestInfo(9601)==1){
		cm.askMenuA(selStr,true);
	}else{
		cm.askAccept(selStr,true);
	}
}


function sendOk(text){
		if(cm.getQuestInfo(9601)==1){
  		npc.sayE(text);
		}else{
			npc.say(text);
		}
		cm.dispose();
}

function askYesNo(text){
		if(cm.getQuestInfo(9601)==1){
  		cm.askYesNoE(text);
		}else{
			cm.askYesNo(text);
		}
}

function gainRMB(num,info){
	var myAccountName =getAccountName(cm.getPlayer().getID());
	var sql = "insert into zz_trade(account, rmb, paytime,remark) values('"+myAccountName+"',"+num+",now(),'"+info+"')";
	cm.customSqlInsert(sql);
}


//余額
function getConverRmb(){
	var acct = getAccountName(cm.getPlayer().getID());
	var sql = "select SUM(rmb) rmb from zz_trade a where a.account='"+acct+"' and remark like '轉裝備防具%' and to_days(a.paytime) = TO_DAYS(NOW()) ";
	var resultList = cm.customSqlResult(sql);
	var rmb=0;
	if(null!=resultList){
		for (var i = 0; i < resultList.size(); i++) {
	    var result = resultList.get(i);
	    if (result == null) {
	        break;
	    }
			rmb = Math.abs(result.get("rmb"));
			break;
		}
	}
	if(rmb==null){
		rmb =0;
	}
	return rmb;
}

//余額
function getRMB(){
	var acct = getAccountName(cm.getPlayer().getID());
	var sql = "select SUM(rmb) rmb from zz_trade a where a.account='"+acct+"'";
	var resultList = cm.customSqlResult(sql);
	var rmb=0;
	if(null!=resultList){
		for (var i = 0; i < resultList.size(); i++) {
	    var result = resultList.get(i);
	    if (result == null) {
	        break;
	    }
			rmb = result.get("rmb");
			break;
		}
	}
	if(rmb==null){
		rmb =0;
	}
	return rmb;
}


function  getAccountName(charid) {
	var sql = "select name from accounts where id = (select accounts_id from characters where id = "+charid+");";
	var resultList = cm.customSqlResult(sql);
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

function  getSubJob() {
	var sql = "select subjob from characters where id = "+cm.getPlayer().getID()+";";
	var resultList = cm.customSqlResult(sql);
	var subjob=0;
	for (var i = 0; i < resultList.size(); i++) {
    var result = resultList.get(i);
    if (subjob == null) {
        break;
    }
		var subjob = result.get("subjob");
	}
	return subjob;
}
