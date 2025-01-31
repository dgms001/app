/*  This is mada by dgms    
 *  This source is made by Funms Team
 *  功能：武器破攻
 *  @Author dgms 
 */

var status;
function start() {
    status = -1;
    action(1, 0, 0);
}
var onlineFlag = false;
var limitNumber = 50;
var condtion = false;
var way = false;
var inventoryType;
var deleteSlot;
var sn = -1;
var deleteQuantity;
var maxLimit = 5000000000;
var types = -1;
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";


var reward = Array(
	Array(10, 1,200000000,2614025,1,"10個勛章"),
	Array(30, 1,500000000,2614025,4,"30個勛章"),
	Array(50, 1,1040000000,2614025,10,"50個勛章"),
	Array(100,1,2000000000,2614025,30,"100個勛章"),
	Array(200,1,4000000000,2614025,50,"200個勛章"),
	Array(300,1,6000000000,2614025,100,"300個勛章"),
	Array(500,1,10400000000,2614025,200,"500個勛章"),
	Array(800,1,20000000000,2614025,300,"800個勛章")
) 
	var text = head + "#e#r- 請選擇要上交的勛章 -#n\r\n\r\n#b";
		for(var i =1;i<129;i++){
			var item = player.getInventorySlot(1,i);
			if(item==null){
				continue;
			}
		if(114==Math.floor(item.getDataId()/10000)){
			text += "#L" + i + "##v" + item.getDataId() + "#";
		}
	}
	 
	var selection = npc.askMenu(text); 
	var item =player.getInventorySlot(1,selection);
	if(item == null){
		npc.say("沒有選擇的勛章.");
	}else{
		deleteSlot = selection;
		deleteQuantity = 1;
		sn = item.toString().substr(item.toString().indexOf("EntId")+6,17);
		itemid_by = item.getDataId();
		if(isExist(itemid_by)){
			npc.say("此類型勛章已經存在,請收集未收集到到勛章!");
		}else{
			text = head + "#e確定要上交（將刪除）#r#v" + item.getDataId() + "##z" + item.getDataId() + "# " + deleteQuantity + "個 #k嗎？";
			npc.sayNext(text);
			player.loseInvSlot(1, deleteSlot);
			insertFashion(itemid_by,sn);
			var titleCount = getTitleCount();
			if(titleCount%10==0){
				npc.broadcastPlayerNotice(0x13, "『勛章收集系統』" + " : " + "玩家 " + player.getName() + " 驚人的收集到了["+titleCount+"]勛章,滿勛章指日可待!");
			}
			npc.say(head + "上交#v"+itemid_by+"##t"+itemid_by+"#成功，祝你游戲愉快~\r\n當前已經收集:"+titleCount+"個勛章!");  
		}
		
		
	}
		 
		 


function setAccept(sel){
	var acct = getAccountName(player.getId());
	var sql = "insert into zz_acctnew(account,title) values('"+acct+"','"+num+"')";
	 
	player.customSqlInsert(sql); 
}

function isAccept(sel){
	var acct = getAccountName(player.getId());
	var sql = "select account from zz_acctnew a where a.account='"+acct+"' and title '="+sel+"' ";
	var resultList = player.customSqlResult(sql);
	var account="";
	if(null!=resultList){
			for (var i = 0; i < resultList.size(); i++) {
		    var result = resultList.get(i);
		    if (result == null) {
		        break;
		    }
				account = result.get("account");
			}	
	}
	if(account != null && account !=""){
		return true;
	}else{
		return false;
	}
}

function getTitleCount(){
	var account = getAccountName(player.getId());
	var sql =" select count(1) num FROM zz_title a where a.account_id = '"+account+"' and worldid = "+0;
	var resultList = player.customSqlResult(sql);
	var num = 0;
	for (var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if (result == null) {
			break;
		}
		num = result.get("num");
		break;
	}
	return num;
}

function isExist(itemid){
	var account = getAccountName(player.getId());
							
	var sql =" select * FROM zz_title a where a.account_id = '"+account+"' and worldid = "+0 +" and itemid = "+itemid;
	var flag=false;
	var resultList = player.customSqlResult(sql);
	for (var i = 0; i < resultList.size(); i++) {
    var result = resultList.get(i);
    if (result == null) {
        break;
    }
		flag = true;
	}
	return flag;
}

function removeFashion(mid){ 
 		var sql ="delete from  zz_title where id = "+mid +" and worldid = "+0;
   player.customSqlUpdate(sql); 
}


function insertFashion(itemid,sn){
	var myAccountName =getAccountName(player.getId());
	var sql = "insert into zz_title(account_id, itemid, paytime,worldid,sn) values('"+myAccountName+"',"+itemid+",now(),"+0+",'"+sn+"')";
	player.customSqlInsert(sql);
}
function  getAccountName(charid) {
	var sql = "select name from accounts where id = (select accounts_id from characters where id = "+charid+");";
	var resultList = player.customSqlResult(sql);
	var accountName=0;
	for (var i = 0; i < resultList.size(); i++) {
    var result = resultList.get(i);
    if (result == null) {
        break;
    }
		var accountName = result.get("name");
	}
	return accountName;
}
 

 
var filter =Array(
	"1142574",
	"1142796"
);

function getDataId(){
	var itemid = "";
	var name="";

	var sql = " select itemid,`name`  from wz_itemdata a where a.itemid like '114%' order by rand() limit 1 ";
	var resultList = player.customSqlResult(sql);
 
	for (var i = 0; i < resultList.size(); i++) {
    var result = resultList.get(i);
    if (result == null) {
        break;
    }
		itemid = result.get("itemid");
	}
	for(var i = 0;i<filter.length;i++){
		if(filter[i]==itemid){
			itemid = "1142649";
		}
	}
		return itemid;
}

