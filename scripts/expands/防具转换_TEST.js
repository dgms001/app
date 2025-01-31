
var weaponData = new Array(//FFN
Array(1003797,"戰士"),
Array(1003798,"法師"),
Array(1003799,"弓箭手"),
Array(1003800,"飛俠"),
Array(1003801,"海盜"),
Array(1042254,"戰士"),
Array(1042255,"法師"),
Array(1042256,"弓箭手"),
Array(1042257,"飛俠"),
Array(1042258,"海盜"),
Array(1062165,"戰士"),
Array(1062166,"法師"),
Array(1062167,"弓箭手"),
Array(1062168,"飛俠"),
Array(1062169,"海盜"),
Array(1132174,"戰士"),//暴君西亞戴斯腰帶
Array(1132175,"法師"),//暴君赫爾梅斯腰帶
Array(1132176,"弓箭手"),//暴君凱倫腰帶
Array(1132177,"飛俠"),//暴君利卡昂腰帶
Array(1132178,"海盜"),//暴君阿爾泰腰帶
Array(1102481,"戰士"),//暴君西亞戴斯披風
Array(1102482,"法師"),//暴君赫爾梅斯披風
Array(1102483,"弓箭手"),//暴君凱倫披風
Array(1102484,"飛俠"),//暴君利卡昂披風
Array(1102485,"海盜"),//暴君阿爾泰披風
Array(1082543,"戰士"),//暴君西亞戴斯手套
Array(1082544,"法師"),//暴君赫爾梅斯手套
Array(1082545,"弓箭手"),//暴君凱倫手套
Array(1082546,"飛俠"),//暴君利卡昂手套
Array(1082547,"海盜"),//暴君阿爾泰手套
Array(1072743,"戰士"),//暴君西亞戴斯靴
Array(1072744,"法師"),//暴君赫爾梅斯靴
Array(1072745,"弓箭手"),//暴君凱倫靴
Array(1072746,"飛俠"),//暴君利卡昂靴
Array(1072747,"海盜")//暴君阿爾泰靴
); 

var weaponData1 = new Array(
Array(1152196,"戰士"),//神秘之影裝備
Array(1152197,"法師"),
Array(1152198,"弓箭手"),
Array(1152199,"飛俠"),
Array(1152200,"海盜"),
Array(1004808,"戰士"),
Array(1004809,"法師"),
Array(1004810,"弓箭手"),
Array(1004811,"飛俠"),
Array(1004812,"海盜"),
Array(1102940,"戰士"),
Array(1102941,"法師"),
Array(1102942,"弓箭手"),
Array(1102943,"飛俠"),
Array(1102944,"海盜"),
Array(1082695,"戰士"),
Array(1082696,"法師"),
Array(1082697,"弓箭手"),
Array(1082698,"飛俠"),
Array(1082699,"海盜"),
Array(1053063,"戰士"),
Array(1053064,"法師"),
Array(1053065,"弓箭手"),
Array(1053066,"飛俠"),
Array(1053067,"海盜"),
Array(1073158,"戰士"),
Array(1073159,"法師"),
Array(1073160,"弓箭手"),
Array(1073161,"飛俠"),
Array(1073162,"海盜")
); 

var selected=-1;
var selLevel = 0;
var str;
var dex;
var luk;
var inta;
var pad;
var mad;
var selWeapon;

var equip;
var newEquip;
var selEquip;
var oldjob;
var newjob;
var changeflag = false;

var itemid = 0;

var job = Array(

);
var sel_1;
var sel_2;

    var selStr = "#r#e花費10億金幣可以實現轉換裝備\r\n";
      selStr += "轉換說明：\r\n";
      selStr +="①已經強化的屬性不變\r\n";
      selStr +="②強化次數不變\r\n";
      selStr +="③破功值不變\r\n";
      selStr +="④僅僅改變裝備的初始化值\r\n";
      selStr +="⑤需要將轉換的裝備放裝備欄第一格,第二格子空著：\r\n";
      
      selStr +="#b⑥火花屬性消失！！！！#k#n\r\n";
      selStr += "#r#L1#轉換裝備#l\r\n";
	sel_1 = npc.askMenu(selStr);
		var equip =  player.getInventorySlot(1,1);
		var equip2 = player.getInventorySlot(1,2);
		if(null == equip){
			npc.say("您的裝備欄第一格是空的，需要放入你要轉換的裝備。");

		}else if(null != equip2){
			npc.say("您的裝備欄第二格不是空的，這個位置是用來放置轉換好的武器的。");

		} 
		if(!player.hasMesos(1030000000)){
			npc.say("您的金幣小于10億.");	

		}
		var reqLevel = equip.getReqLevel();
		var zbtype = Math.floor(equip.getDataId()/10000);
		var itemida = equip.getDataId();
		var text = "請選擇您要轉換成為的裝備：\r\n";
		if(reqLevel == 150){
			for(var i =0;i<weaponData.length;i++){
				if(zbtype == Math.floor(weaponData[i][0]/10000) ){
					if(weaponData[i][0]==equip.getDataId()){
						selLevel = 150;
					}else{
						text +="#L"+i+"# #i"+weaponData[i][0]+":##t"+weaponData[i][0]+"# #l \r\n";
					}
				}
			}
		}else{
			for(var i =0;i<weaponData1.length;i++){
				if(zbtype == Math.floor(weaponData1[i][0]/10000)){
					if(weaponData1[i][0]==equip.getDataId()){
						selLevel = 200;
					}else{
						text +="#L"+i+"# #i"+weaponData1[i][0]+":##t"+weaponData1[i][0]+"# #l\r\n";	
					}
				}
			}
		}
		if(selLevel == 0){
			npc.say("只轉法弗納、暴君和神秘之影裝備。");
		}else{
			sel_2 = npc.askMenu(text);
		}
		selWeapon = sel_2;
		var itemid = 0;
		if(selLevel==200){
			itemid = weaponData1[selWeapon][0];
		}else if(selLevel==150){
			itemid = weaponData[selWeapon][0];
		}
	   equip =  player.getInventorySlot(1,1);
	   newEquip = player.makeItemWithId(equip.getDataId()); //按照第一個，制作裝備實例
	   selEquip = player.makeItemWithId(itemid); 
	  var text ="#g#v"+equip.getDataId()+"# >>>>>>> #v"+itemid+"##k\r\n";
	  text +="生成的轉換後數據如下：\r\n";
	   oldjob = isJob(equip.getDataId(),selLevel);
	   newjob = isJob(itemid,selLevel);
	   changeflag = false;
 
if(oldjob=="戰士" ){
		//戰士主力 副敏
		  if(newjob =="弓箭手"){
			  //力量轉敏捷，敏捷轉力量，運氣智力不變
			  text +="力量："+parseInt(selEquip.getStr()+attributeComparison(equip.getDex(),newEquip.getDex()))+"        ";
			  text +="敏捷："+parseInt(selEquip.getDex()+attributeComparison(equip.getStr(),newEquip.getStr()))+"\r\n";
			  text +="智力："+parseInt(selEquip.getInt()+attributeComparison(equip.getInt(),newEquip.getInt()))+"        ";
			  text +="運氣："+parseInt(selEquip.getLuk()+attributeComparison(equip.getLuk(),newEquip.getLuk()))+"\r\n";
		  }else if(newjob =="法師"){
			 //力量轉智力，智力轉力量，敏捷轉運氣，運轉敏捷
			   text +="力量："+parseInt(selEquip.getStr()+attributeComparison(equip.getInt(),newEquip.getInt()))+"        ";
			   text +="敏捷："+parseInt(selEquip.getDex()+attributeComparison(equip.getLuk(),newEquip.getLuk()))+"\r\n";
			   text +="智力："+parseInt(selEquip.getInt()+attributeComparison(equip.getStr(),newEquip.getStr()))+"        ";
			   text +="運氣："+parseInt(selEquip.getLuk()+attributeComparison(equip.getDex(),newEquip.getDex()))+"\r\n";
			   changeflag =true;
		  }else if(newjob =="飛俠"){
			//力轉運，敏轉敏，運轉力，智轉智
			 text +="力量："+parseInt(selEquip.getStr()+attributeComparison(equip.getLuk(),newEquip.getLuk()))+"        ";
			   text +="敏捷："+parseInt(selEquip.getDex()+attributeComparison(equip.getDex(),newEquip.getDex()))+"\r\n";
			   text +="智力："+parseInt(selEquip.getInt()+attributeComparison(equip.getInt(),newEquip.getInt()))+"        ";
			   text +="運氣："+parseInt(selEquip.getLuk()+attributeComparison(equip.getStr(),newEquip.getStr()))+"\r\n";
		  }else if(newjob =="海盜"){
			 //主敏 副力
			   text +="力量："+parseInt(selEquip.getStr()+attributeComparison(equip.getDex(),newEquip.getDex()))+"        ";
			   text +="敏捷："+parseInt(selEquip.getDex()+attributeComparison(equip.getStr(),newEquip.getStr()))+"\r\n";
			   text +="智力："+parseInt(selEquip.getInt()+attributeComparison(equip.getInt(),newEquip.getInt()))+"        ";
			   text +="運氣："+parseInt(selEquip.getLuk()+attributeComparison(equip.getLuk(),newEquip.getLuk()))+"\r\n";
		  }else if(newjob =="戰士"){
			npc.say("戰士轉戰士？？？");
		  }
}else if(oldjob=="弓箭手" ){

	  	  if(newjob =="弓箭手"){
		  		npc.say("弓箭手轉弓箭手？？？");

			  }else if(newjob =="法師"){//主智力  副運氣
			   //敏捷轉智力，智力轉敏捷，力量轉運氣，運轉力量
			   text +="力量："+parseInt(selEquip.getStr()+attributeComparison(equip.getLuk(),newEquip.getLuk()))+"        ";
			   text +="敏捷："+parseInt(selEquip.getDex()+attributeComparison(equip.getInt(),newEquip.getInt()))+"\r\n";
			   text +="智力："+parseInt(selEquip.getInt()+attributeComparison(equip.getDex(),newEquip.getDex()))+"        ";
			   text +="運氣："+parseInt(selEquip.getLuk()+attributeComparison(equip.getStr(),newEquip.getStr()))+"\r\n";
			   changeflag =true;
			  }else if(newjob =="飛俠"){
			   text +="力量："+parseInt(selEquip.getStr()+attributeComparison(equip.getLuk(),newEquip.getLuk()))+"        ";
			   text +="敏捷："+parseInt(selEquip.getDex()+attributeComparison(equip.getStr(),newEquip.getStr()))+"\r\n";
			   text +="智力："+parseInt(selEquip.getInt()+attributeComparison(equip.getInt(),newEquip.getInt()))+"        ";
			   text +="運氣："+parseInt(selEquip.getLuk()+attributeComparison(equip.getDex(),newEquip.getDex()))+"\r\n";
			  }else if(newjob =="海盜"){//主敏 副力
			   text +="力量："+parseInt(selEquip.getStr()+attributeComparison(equip.getStr(),newEquip.getStr()))+"        ";
			   text +="敏捷："+parseInt(selEquip.getDex()+attributeComparison(equip.getDex(),newEquip.getDex()))+"\r\n";
			   text +="智力："+parseInt(selEquip.getInt()+attributeComparison(equip.getInt(),newEquip.getInt()))+"        ";
			   text +="運氣："+parseInt(selEquip.getLuk()+attributeComparison(equip.getLuk(),newEquip.getLuk()))+"\r\n";
			  }else if(newjob =="戰士"){ 
				text +="力量："+parseInt(selEquip.getStr()+attributeComparison(equip.getDex(),newEquip.getDex()))+"        ";
			   text +="敏捷："+parseInt(selEquip.getDex()+attributeComparison(equip.getStr(),newEquip.getStr()))+"\r\n";
			   text +="智力："+parseInt(selEquip.getInt()+attributeComparison(equip.getInt(),newEquip.getInt()))+"        ";
			   text +="運氣："+parseInt(selEquip.getLuk()+attributeComparison(equip.getLuk(),newEquip.getLuk()))+"\r\n";
			  }
}else if(oldjob=="法師"){	  
			  if(newjob =="弓箭手"){
				   text +="力量："+parseInt(selEquip.getStr()+attributeComparison(equip.getLuk(),newEquip.getLuk()))+"        ";
				   text +="敏捷："+parseInt(selEquip.getDex()+attributeComparison(equip.getInt(),newEquip.getInt()))+"\r\n";
				   text +="智力："+parseInt(selEquip.getInt()+attributeComparison(equip.getStr(),newEquip.getStr()))+"        ";
				   text +="運氣："+parseInt(selEquip.getLuk()+attributeComparison(equip.getDex(),newEquip.getDex()))+"\r\n";
				   changeflag =true;
			  }else if(newjob =="法師"){
			  	npc.say("法師轉法師？？？");
			  }else if(newjob =="飛俠"){
			  	//敏捷轉智力，智力轉敏捷，力量轉運氣，運轉力量
			   text +="力量："+parseInt(selEquip.getStr()+attributeComparison(equip.getStr(),newEquip.getStr()))+"        ";
			   text +="敏捷："+parseInt(selEquip.getDex()+attributeComparison(equip.getLuk(),newEquip.getLuk()))+"\r\n";
			   text +="智力："+parseInt(selEquip.getInt()+attributeComparison(equip.getDex(),newEquip.getDex()))+"        ";
			   text +="運氣："+parseInt(selEquip.getLuk()+attributeComparison(equip.getInt(),newEquip.getInt()))+"\r\n";
			   changeflag =true;
			  }else if(newjob =="海盜"){
			  	//敏捷轉智力，智力轉敏捷，力量轉運氣，運轉力量
			   text +="力量："+parseInt(selEquip.getStr()+attributeComparison(equip.getInt(),newEquip.getInt()))+"        ";
			   text +="敏捷："+parseInt(selEquip.getDex()+attributeComparison(equip.getLuk(),newEquip.getLuk()))+"\r\n";
			   text +="智力："+parseInt(selEquip.getInt()+attributeComparison(equip.getDex(),newEquip.getDex()))+"        ";
			   text +="運氣："+parseInt(selEquip.getLuk()+attributeComparison(equip.getStr(),newEquip.getStr()))+"\r\n";
			   changeflag =true;
			  }else if(newjob =="戰士"){
			  	 	//敏捷轉智力，智力轉敏捷，力量轉運氣，運轉力量
			   text +="力量："+parseInt(selEquip.getStr()+attributeComparison(equip.getInt(),newEquip.getInt()))+"        ";
			   text +="敏捷："+parseInt(selEquip.getDex()+attributeComparison(equip.getLuk(),newEquip.getLuk()))+"\r\n";
			   text +="智力："+parseInt(selEquip.getInt()+attributeComparison(equip.getDex(),newEquip.getDex()))+"        ";
			   text +="運氣："+parseInt(selEquip.getLuk()+attributeComparison(equip.getStr(),newEquip.getStr()))+"\r\n";
			   changeflag =true;
			  }
}else if(oldjob=="飛俠"){

	  	if(newjob =="弓箭手"){
		   text +="力量："+parseInt(selEquip.getStr()+attributeComparison(equip.getDex(),newEquip.getDex()))+"        ";
		   text +="敏捷："+parseInt(selEquip.getDex()+attributeComparison(equip.getLuk(),newEquip.getLuk()))+"\r\n";
		   text +="智力："+parseInt(selEquip.getInt()+attributeComparison(equip.getInt(),newEquip.getInt()))+"        ";
		   text +="運氣："+parseInt(selEquip.getLuk()+attributeComparison(equip.getStr(),newEquip.getStr()))+"\r\n";
		}else if(newjob =="法師"){
		   text +="力量："+parseInt(selEquip.getStr()+attributeComparison(equip.getStr(),newEquip.getStr()))+"        ";
		   text +="敏捷："+parseInt(selEquip.getDex()+attributeComparison(equip.getInt(),newEquip.getInt()))+"\r\n";
		   text +="智力："+parseInt(selEquip.getInt()+attributeComparison(equip.getLuk(),newEquip.getLuk()))+"        ";
		   text +="運氣："+parseInt(selEquip.getLuk()+attributeComparison(equip.getDex(),newEquip.getDex()))+"\r\n";
		   changeflag =true;
		}else if(newjob =="飛俠"){
			npc.say("飛俠轉飛俠？？？");
		}else if(newjob =="海盜"){
		   text +="力量："+parseInt(selEquip.getStr()+attributeComparison(equip.getLuk(),newEquip.getLuk()))+"        ";
		   text +="敏捷："+parseInt(selEquip.getDex()+attributeComparison(equip.getDex(),newEquip.getDex()))+"\r\n";
		   text +="智力："+parseInt(selEquip.getInt()+attributeComparison(equip.getInt(),newEquip.getInt()))+"        ";
		   text +="運氣："+parseInt(selEquip.getLuk()+attributeComparison(equip.getStr(),newEquip.getStr()))+"\r\n";
		}else if(newjob =="戰士"){
			text +="力量："+parseInt(selEquip.getStr()+attributeComparison(equip.getLuk(),newEquip.getLuk()))+"        ";
		   text +="敏捷："+parseInt(selEquip.getDex()+attributeComparison(equip.getDex(),newEquip.getDex()))+"\r\n";
		   text +="智力："+parseInt(selEquip.getInt()+attributeComparison(equip.getInt(),newEquip.getInt()))+"        ";
		   text +="運氣："+parseInt(selEquip.getLuk()+attributeComparison(equip.getStr(),newEquip.getStr()))+"\r\n"; 	 
		}
}else if(oldjob=="海盜"){
		  if(newjob =="弓箭手"){
			  //力量轉敏捷，敏捷轉力量，運氣智力不變
			  text +="力量："+parseInt(selEquip.getStr()+attributeComparison(equip.getDex(),newEquip.getDex()))+"        ";
			  text +="敏捷："+parseInt(selEquip.getDex()+attributeComparison(equip.getStr(),newEquip.getStr()))+"\r\n";
			  text +="智力："+parseInt(selEquip.getInt()+attributeComparison(equip.getInt(),newEquip.getInt()))+"        ";
			  text +="運氣："+parseInt(selEquip.getLuk()+attributeComparison(equip.getLuk(),newEquip.getLuk()))+"\r\n";
		  }else if(newjob =="法師"){
			 //力量轉智力，智力轉力量，敏捷轉運氣，運轉敏捷
			   text +="力量："+parseInt(selEquip.getStr()+attributeComparison(equip.getInt(),newEquip.getInt()))+"        ";
			   text +="敏捷："+parseInt(selEquip.getDex()+attributeComparison(equip.getLuk(),newEquip.getLuk()))+"\r\n";
			   text +="智力："+parseInt(selEquip.getInt()+attributeComparison(equip.getStr(),newEquip.getStr()))+"        ";
			   text +="運氣："+parseInt(selEquip.getLuk()+attributeComparison(equip.getDex(),newEquip.getDex()))+"\r\n";
			   changeflag =true;
		  }else if(newjob =="飛俠"){
			//力轉運，敏轉敏，運轉力，智轉智
			 text +="力量："+parseInt(selEquip.getStr()+attributeComparison(equip.getLuk(),newEquip.getLuk()))+"        ";
			   text +="敏捷："+parseInt(selEquip.getDex()+attributeComparison(equip.getDex(),newEquip.getDex()))+"\r\n";
			   text +="智力："+parseInt(selEquip.getInt()+attributeComparison(equip.getInt(),newEquip.getInt()))+"        ";
			   text +="運氣："+parseInt(selEquip.getLuk()+attributeComparison(equip.getStr(),newEquip.getStr()))+"\r\n";
		  }else if(newjob =="海盜"){
			npc.say("海盜轉海盜？？？");
		  }else if(newjob =="戰士"){
			 //主敏 副力
			   text +="力量："+parseInt(selEquip.getStr()+attributeComparison(equip.getStr(),newEquip.getStr()))+"        ";
			   text +="敏捷："+parseInt(selEquip.getDex()+attributeComparison(equip.getDex(),newEquip.getDex()))+"\r\n";
			   text +="智力："+parseInt(selEquip.getInt()+attributeComparison(equip.getInt(),newEquip.getInt()))+"        ";
			   text +="運氣："+parseInt(selEquip.getLuk()+attributeComparison(equip.getLuk(),newEquip.getLuk()))+"\r\n";
		  }else if(newjob =="戰士"){
			npc.say(equip.getTitle()+"戰士轉戰士？？？"+newEquip.getTitle());
		  }	  
}

	 if(changeflag){
		text +="攻擊："+parseInt(selEquip.getPad()+attributeComparison(equip.getMad(),newEquip.getMad()))+"        ";
		text +="魔攻："+parseInt(selEquip.getMad()+attributeComparison(equip.getPad(),newEquip.getPad()))+"\r\n";
	 }else{
		text +="攻擊："+parseInt(selEquip.getPad()+attributeComparison(equip.getPad(),newEquip.getPad()))+"        ";
		text +="魔攻："+parseInt(selEquip.getMad()+attributeComparison(equip.getMad(),newEquip.getMad()))+"\r\n";
	 }
	text +="強化次數："+equip.getCUC()+"\r\n";
	text +="星星等級："+equip.getCHUC()+"\r\n";
	text +="錘子次數："+equip.getIUC()+"\r\n";
	text +="破功："+equip.getLimitBreak()+"\r\n";
	text +="#r#g潛能完美繼承#k#n#r#e火花消失!!!!!\r\n";
	text +="您確定轉換嗎???此操作不可逆！！！！#k#n\r\n";
	if(false){
		text +="今天花費轉換裝備類型余額："+getConverRmb()+"\r\n由于您今日轉換超過3次，僅收您25余額！\r\n";
	}else{
		text +="花費0余額\r\n";
	}
	var selection = npc.askYesNo(text);
if(selection == 0){
	npc.say("考慮清楚再來找我吧！");
} else {
	equip =  player.getInventorySlot(1,1);
	equip2 =  player.getInventorySlot(1,2);
	if(null == equip){
		npc.say("您的裝備欄第一格是空的，需要放入你要轉換的裝備。");
	}
	if(null != equip2){
		npc.say("您的裝備欄第二格不是空的，這個位置是用來放置轉換好的武器的。");
	}	
	selEquip.setCUC(equip.getCUC());//強化次數
	selEquip.setCHUC(equip.getCHUC());//星星等級
	selEquip.setIUC(equip.getIUC());//錘子次數
	selEquip.setRUC(equip.getRUC());//剩余次數
	selEquip.setMaxHp(equip.getMaxHp());
	selEquip.setMaxMp(equip.getMaxMp());
	selEquip.setCraft(equip.getCraft());
	selEquip.setSpeed(equip.getSpeed());
	selEquip.setJump(equip.getJump()); 
	selEquip.setPdd(equip.getPdd()); 
	selEquip.setLimitBreak(equip.getLimitBreak());
	selEquip.setGrade(equip.getGrade());
	selEquip.setOption(1,equip.getOption(1,false),false);
	selEquip.setOption(2,equip.getOption(2,false),false);
	selEquip.setOption(3,equip.getOption(3,false),false);
	selEquip.setOption(1,equip.getOption(1,true),true);
	selEquip.setOption(2,equip.getOption(2,true),true);
	selEquip.setOption(3,equip.getOption(3,true),true);
	selEquip.setAttribute(equip.getAttribute());
	selEquip.setSocket(1,equip.getSocket(1));
	selEquip.setSocket(2,equip.getSocket(2));
	selEquip.setSocket(3,equip.getSocket(3));
	player.gainItem(selEquip);
	player.loseInvSlot(1, 1);
	player.gainMesos(-1030000000);
	npc.say("操作成功");
}


function snlog(newsn,oldsn){
	//java.lang.System.out.println("--"+getSN(oldsn));
	if(getSN(oldsn)){
		//java.lang.System.out.println("true");
		upSNLog(newsn,oldsn);
	}else{
		//java.lang.System.out.println("false");
		addSNLog(oldsn,newsn);
	}
}

function getSN(sn){
	var sql = " SELECT * from  zz_SN_log a where a.newSN = "+sn+" ";
	var resultList = cm.customSqlResult(sql);
	var oldSN=0;
	if(null!=resultList){
		for (var i = 0; i < resultList.size(); i++) {
	    var result = resultList.get(i);
	    if (result == null) {
	        break;
	    }
			oldSN = result.get("oldSN");
			break;
		}
	}
	//java.lang.System.out.println(oldSN);
	if(oldSN==0){
		return false;
	}else{
		return true;
	}
}

function upSNLog(newSN,oldsn){
	
	//java.lang.System.out.println("true");
	var sql = "update  zz_SN_log set newSN = "+newSN+"  where newSN = "+oldsn+" ";
	cm.customSqlUpdate(sql);
}


function addSNLog(oldsn,newsn){
	
	var sql = "insert into zz_SN_log(oldSN, newSN, paytime) values("+oldsn+","+newsn+",now())";
	cm.customSqlInsert(sql);
	
}

/*
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
}*/

function isJob(equipID,equiplevel) {
	if(equiplevel == 150){
		for(var i=0;i<weaponData.length;i++){
			if(equipID == weaponData[i][0]){
				return weaponData[i][1];
			} else {
				continue;
			}
		}
	} else if(equiplevel == 150){
		for(var i=0;i<weaponData1.length;i++){
			if(equipID == weaponData1[i][0]){
				return weaponData1[i][1];
			} else {
				continue;
			}
		}
	} else {
		return "???";
	}
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
  		npc.say(text);
		}else{
			npc.say(text);
		}
		//cm.dispose();
}

function askYesNo(text){
		if(cm.getQuestInfo(9601)==1){
  		cm.askYesNoE(text);
		}else{
			cm.askYesNo(text);
		}
}

function gainRMB(num,info){
	var myAccountName =getAccountName(player.getId());
	var sql = "insert into zz_trade(account, rmb, paytime,remark) values('"+myAccountName+"',"+num+",now(),'"+info+"')";
	cm.customSqlInsert(sql);
}


//余額
function getConverRmb(){
	var acct = getAccountName(player.getId());
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
	var acct = getAccountName(player.getId());
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
	var sql = "select subjob from characters where id = "+player.getId()+";";
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
