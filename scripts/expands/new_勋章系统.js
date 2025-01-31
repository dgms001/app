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
			
			var selStr = "您好,您是否在為您背包的星石過多發愁？\r\n";
				selStr+= "#L1#消耗100個#i4021009:#10%概率獲得勛章#l\r\n";
				selStr+= "#L2#消耗300個#i4021009:#40%概率獲得勛章#l\r\n";
				selStr+= "#L6#消耗300個#i4021009:#50%概率獲得椅子#l\r\n";
				selStr+= "#L3#上交不需要的勛章勛章(上交刪除)#v4033197##l\r\n";
				selStr+= "#L4#已經上交到勛章陳列柜#v1142742##l\r\n";
				selStr+= "#L5#領取上交勛章所帶來的獎勵#v2436503##l\r\n";
				selStr+= "#L7#查看全區收集達人排行榜#l\r\n";
			var selection = npc.askMenu(selStr);
			
			if(selection == 1){
				if(player.getAmountOfItem(4021009)<100){
					npc.say("不足100個星石~");
				}else{
					var random = Math.floor(Math.random()*100);
					player.loseItem(4021009,100);
					if(random<=10){
						var itemid = getDataId();
						
						player.gainItem(itemid,1);
						npc.broadcastPlayerNotice(0x13,"玩家:" + player.getName() + "從 『100星石』 獲得" +player.makeItemWithId(itemid).getItemName() + ",大家恭喜他。");
						npc.say("恭喜您抽中:#i"+itemid+":#勛章一個."); 
					}else{
						npc.say("失去100個星石,沒有獲得勛章!");
					}
				}
				
			}else if(selection == 6){
				if(player.getAmountOfItem(4021009)<300){
					npc.say("不足300個星石~");
				}else{
					var random = Math.floor(Math.random()*100);
					player.loseItem(4021009,300);
					if(random<=50){
						
						player.gainItem(2435004,1);
						npc.broadcastPlayerNotice(0x13,"玩家:" + player.getName() + "從 『300星石』 獲得" + player.makeItemWithId(2435004).getItemName() + ",大家恭喜他。");
						npc.say("恭喜您抽中:#i"+2435004+":#椅子隨機箱一個.");
					}else{
						npc.say("失去300個星石,沒有獲得椅子!");
					}
				}
			}else if(selection == 2){
				if(player.getAmountOfItem(4021009)<300){
					npc.say("不足300個星石~");
				}else{
					player.loseItem(4021009,300);
					var random = Math.floor(Math.random()*100);
					if(random<=40){
						var itemid = getDataId();
						player.gainItem(itemid,1); 
						npc.broadcastPlayerNotice(0x13,"玩家:" + player.getName() + "從 『300星石』 獲得" + player.makeItemWithId(itemid).getItemName() + ",大家恭喜他。");
						npc.say("恭喜您抽中:#i"+itemid+":#勛章一個.");
					}else{
						npc.say("失去300個星石,沒有獲得勛章!");  
					}
				}
				
			}else if(selection == 3){
				 player.runScript("new_title_save");
			}else if(selection == 4){
				var text ="#r您的勛章陳列柜:("+getTitleCount()+"個)\r\n";
				var account = getAccountName(player.getId());
				var sql =" select * FROM zz_title a where a.account_id = '"+account+"' and worldid = "+0;
				var resultList = player.customSqlResult(sql);
				for (var i = 0; i < resultList.size(); i++) {
					var result = resultList.get(i);
					if (result == null) {
						break;
					}
					itemid = result.get("itemid");
					idi= result.get("id");
					text += "#v" + itemid + "#"; 
				}
				npc.say(text);
				
			}else if(selection == 5){
				var titleCount = getTitleCount();
				var text  = "#r您當前總收藏數量為："+titleCount+"個勛章\r\n收集到一定數量不同勛章可以找我領取大量金幣,破功獎勵！\r\n";
					text += "勛章總數：#g837#k#r個,您要是達到對應數量即可領取以下獎勵:\r\n#k";
				for(var i = 0;i<reward.length;i++){
					var info = titleCount>=reward[i][0]?(getEventValue(reward[i][5],"查總數")>0?"#r已領取#k":"#g可領取#k"):"#r數量不足#k";
					text += "#L"+(i+1)+"#收集"+reward[i][0]+"個不同勛章獎勵 - #v2436191# + "+reward[i][2]/104000000+"(億) #i"+reward[i][3]+":# x "+reward[i][4]+"#l "+info+"\r\n";
				}
				var selection = npc.askMenu(text);
				//判斷是否領取過
					var title = reward[selection-1][5];
					var count = reward[selection-1][0];
					var meso = reward[selection-1][2];
					var itemid = reward[selection-1][3];
					var itemidNum = reward[selection-1][4];
					var titleCount = getTitleCount();
					if(getEventValue(title,"查總數")>0){
						npc.say("領取過："+title+"的獎勵,無法重復領取！");
						
					}else if(titleCount < count){
						npc.say("您要領取的獎勵收集數量需要達到："+count+",但是您目前只收集了"+titleCount+"個。請達到相應數量再來找我領取獎勵！");
						
					}else if(!isAccept(title)){
						setAccept(title);
						player.gainItem(itemid,itemidNum);
						player.gainMesos(meso);
						setEventValue(title,1);
						npc.broadcastPlayerNotice(0x13, "『勛章收集獎勵』" + title+ " : " + "玩家 " + player.getName() + " 領取了"+(meso/104000000)+"億金幣 和 "+itemidNum +"個百萬破功石頭。");
						npc.say("成功領取收集勛章："+title+"的獎勵。");
						
					}else{
						npc.say("領取過："+title+"的獎勵,無法重復領取！");
						
					}
			}else if(selection == 7){
				var text ="#r角色名\t\t\t\t勛章數量\r\n";
				var sql =" SELECT c.`name` name,COUNT(1) titlec FROM zz_title a, accounts b, characters c WHERE a.account_id = b.`name`    AND c.`index` = 1 AND c.accounts_id = b.id GROUP BY a.account_id ORDER BY titlec desc limit 20 ";
				var resultList = player.customSqlResult(sql);
				for (var i = 0; i < resultList.size(); i++) {
					var result = resultList.get(i);
					if (result == null) {
						break;
					} 
					text += result.get("name") + "\t\t\t\t"+ result.get("titlec") +"\r\n"; 
				}
				npc.say(text);
				
			}
	  



function setAccept(sel){
	var acct = getAccountName(player.getId());
	var sql = "insert into zz_acctnew(account,title) values('"+acct+"','"+sel+"')";
	 
	player.customSqlInsert(sql); 
}
function isAccept(sel){
	var acct = getAccountName(player.getId());
	var sql = "select account from zz_acctnew a where a.account='"+acct+"' and title ='"+sel+"' ";
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
	var sql = "insert into zz_title(account_id, itemid, paytime,worldid,sn) values('"+myAccountName+"',"+itemid+",now(),"+0+","+sn+")";
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
 


function getDataId(){ 
var filter =Array(
	"1142574",
	"1142796"
);

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



//flag = true 查總的不重置
//flag = false 查當天的
function getEventValue(event1,flag){
	var charInfo = getCharInfo();
	var sql;
	if(flag=="查總數"){
		 sql = "select sum(value) as numbe from zz_event where accounts_id = "+parseInt(charInfo.accounts_id)+" and event = '"+event1+"' and world ="+parseInt(charInfo.world)+" ";  
	}else{
		 sql = "select sum(value) as numbe from zz_event where accounts_id = "+parseInt(charInfo.accounts_id)+" and event = '"+event1+"' and world ="+parseInt(charInfo.world)+" AND DATE_FORMAT(time, '%Y-%m-%d') = DATE_FORMAT(NOW(), '%Y-%m-%d') "; 
	}

	
	var resultList = player.customSqlResult(sql);
	var count=0;
	for (var i = 0; i < resultList.size(); i++) {
    var result = resultList.get(i);
    if (result == null) {
        break;
    }
		count = result.get("numbe");
		if(count ==null){
			count = 0;
		}
	}
	
	return parseInt(count);
}

function setEventValue(event1,value1){
	var charInfo = getCharInfo();
	var sql = "insert into zz_event(accounts_id, world, `event`,`value`,time) values("+charInfo.accounts_id+","+charInfo.world+",'"+event1+"',"+value1+",now())";
	
	player.customSqlInsert(sql);
}

function  getCharInfo(){
	var sql = "select accounts_id,world from characters where id = "+player.getId()+"";
	var resultList = player.customSqlResult(sql);
	var charInfo={};
	for (var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if (result == null) {
			break;
		}
		charInfo.accounts_id = result.get("accounts_id");
		charInfo.world = result.get("world");
	}
	return charInfo;
}
