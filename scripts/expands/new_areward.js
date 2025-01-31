


var choose = -1;
var sel = 0;
var flag = true;
var bef = false;
var Job = new Array(

new nature("XR-01",  "[破功]風獨眼獸的寶藏", 5, 9480120, "mob1", 4000888  ,  "點卷 x 1000 \r\n#v2432585# x 5", "", "","提示：掉物地圖[風獨眼獸掉落的物品球隨機抽出]和玩具組隊獲得"), 
new nature("XR-02",  "[破功]藍蝸牛的憤怒1", 200, 100001, "mob2", 4000000, "點卷 x 1000 \r\n破功 10 萬點\r\n#v2432585# x 1", "mob1", "[組隊一]通過玩具10次","提示：明珠港往右邊走2個地圖"), 
new nature("XR-03",  "[破功]紅蝸牛的憤怒2", 150, 100002, "mob3", 4000016, "點卷 x 1000 \r\n破功 10 萬點\r\n#v2432585# x 2", "mob2", "[破功]藍蝸牛的憤怒1","提示：明珠港往右邊走2個地圖"), 
new nature("XR-04",  "[破功]綠蝸牛的憤怒3", 100, 100000, "mob4", 4000019, "點卷 x 1000 \r\n破功 10 萬點\r\n#v2432585# x 3", "mob3", "[破功]紅蝸牛的憤怒2","提示：明珠港往右邊走2個地圖"), 
new nature("XR-05",  "[獎金]童年懷舊螞蟻洞", 999, 2230101, "mob5", 4000008, "點卷 x 1000 \r\n#v2432585# x 10\r\n金幣x1億", "mob4", "[破功]紅蝸牛的憤怒2","提示：地圖傳送練級地圖，螞蟻洞。")


); 
 
  
    
var str = "#L9999#重置懸賞任務[每天一次]#l\r\n"
for (var i = 0; i < Job.length; i++) {
	str += "#L" + i + "##r代號" + Job[i].code + "," + Job[i].name + "#r( " +CalculationOfcompletion(Job[i].mobIDSql, Job[i].maxQuanlitys, Job[i].needSqlFirst) + " )#l" + "\r\n";
}

str += "#L9#一鍵上交懸賞任務<一旦手動開始就不能使用一鍵>#l";

var choose =  npc.askMenuA("#r#e懸賞系統#n#k\r\n" + "#r我有下列任務給你選擇，你可以同時進行N個任務，但是部分高級任務需要完成前面的任務才能解鎖喔！" + "#r越高級的任務我給你的賞金也會越多！\r\n#e<任務列表>#n\r\n" + str + "");
            
	if(choose == 9999){ 
		if(player.getPQLog('重置懸賞')>0){
			npc.say("您今天已經重置過了!");
		}else{
			resetCount();
			player.addPQLog("重置懸賞");
			npc.say("重置成功!"); 
		}
	}else if(choose == 9){
		sel = 9;
		var text ="請您準備以下材料:\r\n";
		
		var yn = false;
		for (var i = 0; i < Job.length; i++) {
			if(player.hasItem(Job[i].mobNeedItem,Job[i].maxQuanlitys)){
				yn = "滿足";
			}else{
				flag = false;
				yn = "不滿足";
			}
			text += "" + i + "#v" + Job[i].mobNeedItem + "# X " + Job[i].maxQuanlitys + " "+yn+"" + "\r\n";
		}
		var test = CalculationOfcompletion(Job[0].mobIDSql, Job[0].maxQuanlitys, Job[0].needSqlFirst);
		
		var wz = "對不起,您已經手動開啟過任務。#r無法進行一鍵處理。請手動完成，或者重置。#k";
		if(test == "可開始"){
			bef = true;
			wz = "恭喜您,您沒有手動開啟任務，可以一鍵處理。";
		}
		
		text += "檢測是否手動開啟過任務:"+wz+"\r\n";
		if(flag && bef){
			text += "檢測材料是否能夠滿足所有任務:#g通過";
			npc.sayNext(text);
			for(var i = 0;i<5;i++){
				gainRewordNoOk(i);
			}
			for (var i = 0; i < Job.length; i++) {
				if(player.hasItem(Job[i].mobNeedItem,Job[i].maxQuanlitys)){
					player.loseItem(Job[i].mobNeedItem,Job[i].maxQuanlitys);
				}
			}
			npc.say("一鍵完成.");
		}else{
			text += "檢測材料是否能夠滿足所有任務:#r不通過";
			npc.say(text);
			
		}
		
	}else{
		var firstCode = "";
		if (Job[choose].needSqlFirst != "") {
			firstCode += "#r>>前置任務>>  代號" + Job[choose].needSqlFirstCode;
		}
		//var t =  CalculationOfcompletion(Job[choose].mobIDSql, Job[choose].maxQuanlitys, Job[choose].needSqlFirst);
		var text  = "想要完成該項任務，我需要你去擊敗#r" + Job[choose].maxQuanlitys+"只"; //需要最大怪物數量
				text += "#o" + Job[choose].mobID+"# ";//怪物單位
				text += "#k,然後收回怪物寶物#r" + "#z" + Job[choose].mobNeedItem + "# ";//怪物名稱//需要怪物掉落物品名稱
				text += Job[choose].maxQuanlitys + "個，Ta的樣子是:#v" + Job[choose].mobNeedItem + "# ";
				text += "\r\n"+Job[choose].info+"";
				text += "\r\n" + "當前你有:" + "#r" + player.getAmountOfItem(Job[choose].mobNeedItem) + "#r個可以上交" + "\r\n" + "#r>>任務進度>>  #e#r" + CalculationOfcompletion(Job[choose].mobIDSql, Job[choose].maxQuanlitys, Job[choose].needSqlFirst) + "#n\r\n" + firstCode + "#n\r\n" + "#L0##r交差#l\r\n" + "#L1##r領取賞金#l\r\n" + "#L2##r查看懸賞獎勵#l\r\n";
		var selection = npc.askMenu(text);
		if (selection == 0) {
			//上交物品
			if (getMobQuantitys_this(Job[choose].mobIDSql) >= Job[choose].maxQuanlitys) {
			   npc.say("抱歉，該項任務你已經#r#e完成#n#k了，請領取賞金!");
			}else if (getMobQuantitys_this(Job[choose].mobIDSql) < 0) {
				npc.say("抱歉，該項任務你已經#r#e完成#n#k了,該項任務不能重復!"); 
			}
			var input_num = npc.askNumber("當前你有:" + "#r" + player.getAmountOfItem(Job[choose].mobNeedItem) + "#k個可以上交." + "\r\n" + "請輸入個數,當前#r任務進度#k>> #e#r(" + CalculationOfcompletion(Job[choose].mobIDSql, Job[choose].maxQuanlitys, Job[choose].needSqlFirst) + ")", 1, 1, parseInt(Job[choose].maxQuanlitys-getMobQuantitys_this(Job[choose].mobIDSql)));
			
			if (input_num <1) {
				npc.say("最少提交一個！"); 
			}else{
				if (player.hasItem(Job[choose].mobNeedItem, input_num)) {
					player.loseItem(Job[choose].mobNeedItem, input_num);
					gainMobQuantitys_this(Job[choose].mobIDSql, input_num);
					npc.say("上交成功！請繼續努力！");
				} else {
				   npc.say("您沒有這麼多道具！");
				}
			}
		} else if (selection == 1) {
			//領取賞金
			if (getMobQuantitys_this(Job[choose].mobIDSql) >= Job[choose].maxQuanlitys) {
				gainReword(choose);  
				if(choose == 4){
					 if( player.getQuestRecordEx(9613)!=1){
						 player.updateQuestRecordEx(9613,"1");
					 }
				}
			} else if (getMobQuantitys_this(Job[choose].mobIDSql) < 0) {
				npc.say("抱歉，該項任務你已經#r#e完成#n#k了,該項任務不能重復!"); 
			} else {
				npc.say("現在還不能領取喔！還差那麼一點點.");
			}
			
		} else if (selection == 2) {
			//查看懸賞獎勵
			npc.say("#e#r<代號-" + Job[choose].code + ">#n#k \r\n\r\n" + Job[choose].reword + "\r\n\r\n\t\t\t\t");
		}
	}
         
            	
			 
function nature(code, name, mq, mobID, sql, item, wd, nd, ndcd,info) {
    this.code = code;
    this.name = name;
    this.maxQuanlitys = mq;
    this.mobID = mobID;
    this.mobIDSql = sql;
    this.mobNeedItem = item;
    this.reword = wd;
    //需要前提任務
    this.needSqlFirst = nd;
    //需要前提任務code
    this.needSqlFirstCode = ndcd;
    this.info=info;
}

function gainRewordNoOk(choose) {
    switch (choose) {
    case 0:
        //坎特5次
        player.gainItem(2432585,5);
        player.modifyCashShopCurrency(1,1000);
        break;
    case 1:
       	player.gainItem(2432585,1);
       	player.gainItem(2431292,1);
        player.modifyCashShopCurrency(1,1000);
        break;
    case 2:
       	player.gainItem(2432585,2);
       	player.gainItem(2431292,1);
        player.modifyCashShopCurrency(1,1000);
        break;
    case 3:
       player.gainItem(2432585,3);
       	player.gainItem(2431292,1);
        player.modifyCashShopCurrency(1,1000);
        break;
    case 4:
        player.gainItem(2432585,10);
        player.gainMesos(104000000);
        player.modifyCashShopCurrency(1,1000);
		if( player.getQuestRecordEx(9613)!=1){
			 player.updateQuestRecordEx(9613,"1");
		 }
        break;
    case 5:
      
        break;
    case 6:
       
        break;
    case 7:
        
        break;
    case 8:
       
        break;
    case 9:
        
        break;
    case 10:
        
        break;
    case 11:
        
        break;
    default:
        break;
    }
    gainMobQuantitys(Job[choose].mobIDSql, -(getMobQuantitys(Job[choose].mobIDSql) + 1));
}


function gainReword(choose) {
    switch (choose) {
    case 0:
        //坎特5次
        player.gainItem(2432585,5);
        player.modifyCashShopCurrency(1,1000);
        break;
    case 1:
       	player.gainItem(2432585,1);
       	player.gainItem(2431292,1);
        player.modifyCashShopCurrency(1,1000);
        break;
    case 2:
       	player.gainItem(2432585,2);
       	player.gainItem(2431292,1);
        player.modifyCashShopCurrency(1,1000);
        break;
    case 3:
       player.gainItem(2432585,3);
       	player.gainItem(2431292,1);
        player.modifyCashShopCurrency(1,1000);
        break;
    case 4:
        player.gainItem(2432585,10);
        player.gainMesos(104000000);
        player.modifyCashShopCurrency(1,1000); 
        break;
    case 5:
      
        break;
    case 6:
       
        break;
    case 7:
        
        break;
    case 8:
       
        break;
    case 9:
        
        break;
    case 10:
        
        break;
    case 11:
        
        break;
    default:
        break;
    }
    gainMobQuantitys(Job[choose].mobIDSql, -(getMobQuantitys(Job[choose].mobIDSql) + 1));
    npc.say("恭喜你完成了任務，獲得了獎勵！");
}
 
function getMobQuantitys(mobid) {
		var sql = "SELECT * FROM zz_kill_mob WHERE character_ID = "+player.getId();
		var resultList = player.customSqlResult(sql);
		var quantitys = 99999;
			for (var i = 0; i < resultList.size(); i++) {
		    var result = resultList.get(i);
		    if (result == null) {
		        break;
		    }
				
				var quantitys = result.get(mobid);
			}
			if(quantitys==null ||quantitys==99999 ){
				quantitys = 0;
				this.addNewCharacter(); //增加新數據
			}
    	return quantitys;
}

function addNewCharacter(){
	var sql = "INSERT INTO zz_kill_mob (character_ID) VALUES ("+player.getId()+")";
   	player.customSqlInsert(sql);
}

function gainMobQuantitys(mobID, quantity) {
	var quantity = this.getMobQuantitys(mobID) + quantity; 
    var sql = "UPDATE zz_kill_mob SET " + mobID + " = "+quantity+" WHERE character_ID = "+player.getId();
   	player.customSqlUpdate(sql); 
}


function getMobQuantitys_this(mobid){
	var sql = "SELECT * FROM zz_kill_mob WHERE character_ID = "+player.getId();
	var resultList = player.customSqlResult(sql);
	var nperid = 999999;
	for (var i = 0; i < resultList.size(); i++) {
    var result = resultList.get(i);
    if (result == null) {
        break;
    }
		nperid = result.get(mobid);
	}
	if(nperid==null||nperid==999999){
		addNewCharacter_this(); //增加新數據
		nperid=0;
	}
	return nperid;
}


function addNewCharacter_this()  {
	var sql = "INSERT INTO zz_kill_mob (character_ID) VALUES ("+player.getId()+")";  
	 player.customSqlInsert(sql);
}

   
function gainMobQuantitys_this(mobid, quantity) {
	var sql = "UPDATE zz_kill_mob SET " + mobid + " = "+(getMobQuantitys_this(mobid) + quantity)+" WHERE character_ID = "+player.getId();  
	player.customSqlUpdate(sql); 
}


function resetCount()  {
	var sql = "DELETE FROM zz_kill_mob where  character_ID = "+player.getId();
	player.customSqlUpdate(sql); 
}


function CalculationOfcompletion(mobID, max, needSqlFirst) {
     if (needSqlFirst != "" && getMobQuantitys_this(needSqlFirst) >= 0) {
         return "#k!前置任務#r";
     }
    if (getMobQuantitys_this(mobID) >= max) {
        return "#r領賞金#r";
    } else if (getMobQuantitys_this(mobID) < 0) {
        return "已完成";
    } else if (getMobQuantitys_this(mobID) == 0) {
        return "可開始";
    } else {
        return getMobQuantitys_this(mobID) + " / " + max;
    }
}
  