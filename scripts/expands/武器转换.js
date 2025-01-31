/*
	名稱：運營員
	內容：快速轉職
*/

var status = -1;
var weaponData = new Array(
	Array(1542063,42051), // 法弗納皇刀正宗, // (無描述)
	Array(1552063,42052), // 法弗納煌扇藍姬, // (無描述)
	Array(1212063,42052), // 法弗納魔力源泉杖, // (無描述)
	Array(1222058,42052), // 法弗納天使手銃, // (無描述)
	Array(1252015,42052), // 法弗納北極星魔法棒, // (無描述)
	Array(1262016,42052),// 法弗納ESP限制器
	Array(1372177,42052), // 法弗納魔力奪取者, // (無描述)
	Array(1382208,42052), // 法弗納魔冠之杖, // (無描述)
	Array(1232057,42051), // 法弗納死亡使者, // (無描述)
	Array(1242060,42051), // 法弗納精神之刃, // 魯塔比斯套裝(飛俠)專用武器
	Array(1242061,42051), // 法弗納精神之刃, // 魯塔比斯套裝(海盜)專用武器
	Array(1302275,42051), // 法弗納銀槲之劍, // (無描述)
	Array(1312153,42051), // 法弗納雙刃切肉斧, // (無描述)
	Array(1412135,42051), // 法弗納戰鬥切肉斧, // (無描述)
	Array(1322203,42051), // 法弗納戈耳迪錘, // (無描述)
	Array(1332225,42051), // 法弗納大馬士革劍, // (無描述)
	Array(1342082,42051), // 法弗納急速之刃, // (無描述)
	Array(1362090,42051), // 法弗納洞察手杖, // (無描述)
	Array(1402196,42051), // 法弗納懺悔之劍, // (無描述)
	Array(1422140,42051), // 法弗納閃電錘, // (無描述)
	Array(1432167,42051), // 法弗納貫雷槍, // (無描述)
	Array(1442223,42051), // 法弗納半月寬刃斧, // (無描述)
	Array(1452205,42051), // 法弗納追風者, // (無描述)
	Array(1462193,42051), // 法弗納風翼弩, // (無描述)
	Array(1472214,42051), // 法弗納危險之手, // (無描述)
	Array(1482168,42051), // 法弗納巨狼之爪, // (無描述)
	Array(1492179,42051), // 法弗納左輪槍, // (無描述)
	Array(1522094,42051), // 法弗納雙風翼弩, // (無描述)
	Array(1532098,42051) // 法弗納榮耀炮, // (無描述)
); 


var weaponData1 = new Array(
Array(1262039,42052),//	神秘之影ESP限制器
Array(1272017,42052),//	神秘之影鎖鏈
Array(1282017,42052),//	神秘之影魔力手套 
Array(1212120,42052),//神秘之影雙頭杖
Array(1252098,42052),//神秘之影魔法槌
Array(1262039,42052),//神秘之影ESP限制器
Array(1552119,42052),// 神秘之影折扇 
Array(1372228,42052),//神秘之影短杖
Array(1382265,42052),//神秘之影長杖
Array(1222113,42051),//神秘之影靈魂手銃
Array(1232113,42051),//神秘之影亡命劍
Array(1242121,42051),//神秘之影能量劍
Array(1242122,42051),//神秘之影能量劍
Array(1302343,42051),//神秘之影單手劍
Array(1312203,42051),//神秘之影斧
Array(1322255,42051),//神秘之影錘
Array(1332279,42051),//神秘之影匕首
Array(1342104,42051),//神秘之影刃
Array(1362140,42051),//神秘之影手杖
Array(1402259,42051),//神秘之影雙手劍
Array(1412181,42051),//神秘之影雙手戰斧
Array(1422189,42051),//神秘之影雙手錘
Array(1432218,42051),//神秘之影長槍
Array(1442274,42051),//神秘之影矛
Array(1452257,42051),//神秘之影弓
Array(1462243,42051),//神秘之影弩
Array(1472265,42051),//神秘之影拳套
Array(1482221,42051),//神秘之影指節
Array(1492235,42051),//神秘之影短槍
Array(1522143,42051),//神秘之影雙弩槍
Array(1532150,42051),//神秘之影攻城炮
Array(1542117,42051),//神秘之影武士刀
Array(1582023,42051)//神秘之影機甲槍
); 

var weaponData2 = new Array(
Array(1212080,42052),//	特米納斯啟迪雙頭杖
Array(1222075,42052),//	特米納斯烈焰魂手銃
Array(1252066,42052),//	特米納斯動物魔法棒
Array(1262030,42052),//	特米納斯ESP限制器
Array(1272029,42052),//	特米納斯極限鎖鏈
Array(1282029,42052),//	特米納斯終點魔力手套
Array(1372189,42052),//	特米納斯附魔短杖
Array(1382223,42052),//	特米納斯催眠長杖
Array(1552068,42052),//	特米納斯召喚折扇
Array(1232075,42051),//	特米納斯亡命征服者
Array(1242081,42051),//	特米納斯狙擊能量劍
Array(1302290,42051),//	特米納斯分裂劍
Array(1312166,42051),//	特米納斯撕裂斧
Array(1322216,42051),//	特米納斯粉碎錘
Array(1332239,42051),//	特米納斯徘徊刀
Array(1342086,42051),//	特米納斯寂靜刃
Array(1362102,42051),//	特米納斯管弦樂手杖
Array(1402211,42051),//	特米納斯壓制巨劍
Array(1412148,42051),//	特米納斯破壞大斧
Array(1422153,42051),//	特米納斯爆破鈍器
Array(1432179,42051),//	特米納斯尖刺槍
Array(1442235,42051),//	特米納斯戰爭矛
Array(1452217,42051),//	特米納斯風暴弓
Array(1462205,42051),//	特米納斯疾風弩
Array(1472227,42051),//	特米納斯天罰拳套
Array(1482180,42051),//	特米納斯突擊指節
Array(1492191,42051),//	特米納斯暴徒短槍
Array(1522106,42051),//	特米納斯猛獸雙弩槍
Array(1532110,42051),//	特米納斯爆燃手炮
Array(1542068,42051),//	特米納斯一文字刀
Array(1582026,42051)	//特米納斯爆裂鐵拳
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
var selection;

	//if (status == 0) {
	var selStr = "#r#e花費【1億金幣】可以實現轉換武器\r\n";
      selStr += "轉換說明：\r\n";
      selStr +="①已經強化的屬性不變\r\n";
      selStr +="②強化次數不變\r\n";
      selStr +="③破功值不變\r\n";
      selStr +="④僅僅改變武器的初始化值\r\n";
      selStr +="⑤需要將轉換的武器放裝備欄第一格,第二格子空著：\r\n";
	  selStr +="⑥武器潛能轉換規則：\r\n";
	  selStr +="物理武器 轉換物理武器 時 潛能 原封不動\r\n";
	  selStr +="物理武器 轉換法系武器 時 潛能 12%攻擊 9%攻擊 自動轉換成 12%魔法攻擊 9%魔法攻擊 12%魔法攻擊 將變成 12%物理攻擊。（為了防止2條物理12%1條魔法12% 轉換成3條魔法12%）\r\n";
	  selStr +="同理\r\n";
	  selStr +="法系武器 轉法系武器 時  潛能 原封不動\r\n";
	  selStr +="法系武器 轉物理武器 時  潛能 12%魔法攻擊 9%魔法攻擊 自動轉換成 12%攻擊 9%攻擊 12%攻擊 將變成 12%魔法攻擊。（為了防止2條魔法12%1條物理12% 轉換成3條物理12%）\r\n";
	  selStr +="其他屬性不變 如無視防御 BOSS傷害 12%LUK DEX INT LUK 等雜屬性r\n";
      
      selStr +="#b火花屬性消失！！！！#k#n\r\n";
      selStr += "#r#L1#轉換武器#l\r\n";
    	npc.askMenu(selStr);
		
	//} else if (status == 1) {
		var rmb = parseInt(getRMB());
    if(!player.hasMesos(2000000000)){
		npc.say('您的金幣小于20E.');	
		//cm.dispose();
		//return;
   	}
		var equip =  player.getInventorySlot(1,1);
		var equip2 =  player.getInventorySlot(1,2);
		if(null == equip){
			npc.say("您的裝備欄第一格是空的，需要放入你要轉換的武器。");
			//cm.dispose();
			//return;
		}else if(null != equip2){
			npc.say("您的裝備欄第二格不是空的，這個位置是用來放置轉換好的武器的。");
			//cm.dispose();
			//return;
		}
		var reqLevel = equip.getReqLevel();
		
		var text = "請選擇您要轉換成為的武器：\r\n";
		if(reqLevel == 150){
			for(var i =0;i<weaponData.length;i++){
				text +="#L"+i+"# #i"+weaponData[i][0]+":##t"+weaponData[i][0]+"# #l \r\n";	
				if(weaponData[i][0]==equip.getDataId()){
					selLevel = 150;
				}
			}
		}else if(reqLevel == 160){
			for(var i =0;i<weaponData2.length;i++){
				text +="#L"+i+"# #i"+weaponData2[i][0]+":##t"+weaponData2[i][0]+"# #l\r\n";	
				if(weaponData2[i][0]==equip.getDataId()){
					selLevel = 160;
				}
			}
		}else{
			for(var i =0;i<weaponData1.length;i++){
				text +="#L"+i+"# #i"+weaponData1[i][0]+":##t"+weaponData1[i][0]+"# #l\r\n";	
				if(weaponData1[i][0]==equip.getDataId()){
					selLevel = 200;
				}
			}
		}
		if(selLevel == 0){
			npc.say("只轉法弗納，特米納斯,和神秘之影武器。");
			//cm.dispose();
		}else{
		selection = npc.askMenu(text);
		}
		
		
	//}  else if (status == 2) {
		selWeapon = selection;
		var itemid = 0;
		if(selLevel==200){
			itemid = weaponData1[selWeapon][0];
		}else if(selLevel==150){
			itemid = weaponData[selWeapon][0];
		}else if(selLevel==160){
			itemid = weaponData2[selWeapon][0];
		}
	  var equip =  player.getInventorySlot(1,1);
	  var newEquip = player.makeItemWithId(equip.getDataId()); 
	  var selEquip = player.makeItemWithId(itemid); 
	  var text ="#g#v"+equip.getDataId()+"# >>>>>>> #v"+itemid+"##k\r\n";
	  
	  text +="生成的轉換後數據如下：\r\n";
	  text +="力量："+parseInt(selEquip.getStr()+attributeComparison(equip.getStr(),newEquip.getStr()))+"        ";
	  text +="敏捷："+parseInt(selEquip.getDex()+attributeComparison(equip.getDex(),newEquip.getDex()))+"\r\n";
	  text +="智力："+parseInt(selEquip.getInt()+attributeComparison(equip.getInt(),newEquip.getInt()))+"        ";
	  text +="運氣："+parseInt(selEquip.getLuk()+attributeComparison(equip.getLuk(),newEquip.getLuk()))+"\r\n";
	 
	   var strengthen =0;
	  //判斷當前武器是否是法系武器
	  if(equip.getPad()>equip.getMad()){
		 strengthen = reducePad(newEquip.getPad(),equip.getPad(),equip.getCHUC());
	  }else{
		 strengthen = reducePad(newEquip.getMad(),equip.getMad(),equip.getCHUC());
	  }
	  ////java.lang.System.out.println("說明強化卷的攻擊為："+strengthen);
	  
	  var strengthenStar = 0;
	  //說明要轉法師武器
	  if(selEquip.getMad()>selEquip.getPad()){
		 strengthenStar = increasePad((selEquip.getMad() + strengthen),equip.getCHUC());
	     ////java.lang.System.out.println("上星攻擊："+"--"+increasePad((selEquip.getMad() + strengthen),equip.getCHUC()));
		 text +="攻擊："+selEquip.getPad()+" + "+strengthenStar+"("+parseInt(selEquip.getPad()+strengthenStar)+")        ";
	  	 text +="魔攻："+selEquip.getMad()+" + "+strengthen+" + "+strengthenStar+"("+parseInt(selEquip.getMad()+strengthen+strengthenStar)+")\r\n";
		
		//看看以前是什麼類型的
		if(newEquip.getMad()>newEquip.getPad()){
			//法師
			//不用做任何操作
		}else{
			//戰士 > 法師
			//text +="第1條潛能:"+equip.getOption(1,false)+",轉換後:"+zconvertf(equip.getOption(1,false))+"\r\n";
			//text +="第2條潛能:"+equip.getOption(2,false)+",轉換後:"+zconvertf(equip.getOption(2,false))+"\r\n";
			//text +="第3條潛能:"+equip.getOption(3,false)+",轉換後:"+zconvertf(equip.getOption(3,false))+"\r\n";
			//
			//text +="第4條潛能:"+equip.getOption(1,true)+",轉換後:"+zconvertf(equip.getOption(1,true))+"\r\n";
			//text +="第5條潛能:"+equip.getOption(2,true)+",轉換後:"+zconvertf(equip.getOption(2,true))+"\r\n";
			//text +="第6條潛能:"+equip.getOption(3,true)+",轉換後:"+zconvertf(equip.getOption(3,true))+"\r\n";
		}
	  }else{
		 strengthenStar = increasePad((selEquip.getPad() + strengthen),equip.getCHUC());
		 ////java.lang.System.out.println("上星攻擊："+"--"+increasePad((selEquip.getPad() + strengthen),equip.getCHUC()));
		 text +="攻擊："+selEquip.getPad()+" + "+strengthen+" + "+strengthenStar+"("+parseInt(selEquip.getPad()+strengthen+strengthenStar)+")        ";
	  	 text +="魔攻："+selEquip.getMad()+" + "+getPad(equip.getCHUC())+"("+parseInt(selEquip.getMad()+getPad(equip.getCHUC()))+")\r\n";
		 
		 
		 //看看以前是什麼類型的
		if(newEquip.getMad()>newEquip.getPad()){
			//法師
			//text +="第1條潛能:"+equip.getOption(1,false)+",轉換後:"+fconvertz(equip.getOption(1,false))+"\r\n";
			//text +="第2條潛能:"+equip.getOption(2,false)+",轉換後:"+fconvertz(equip.getOption(2,false))+"\r\n";
			//text +="第3條潛能:"+equip.getOption(3,false)+",轉換後:"+fconvertz(equip.getOption(3,false))+"\r\n";
			//
			//text +="第4條潛能:"+equip.getOption(1,true)+",轉換後:"+fconvertz(equip.getOption(1,true))+"\r\n";
			//text +="第5條潛能:"+equip.getOption(2,true)+",轉換後:"+fconvertz(equip.getOption(2,true))+"\r\n";
			//text +="第6條潛能:"+equip.getOption(3,true)+",轉換後:"+fconvertz(equip.getOption(3,true))+"\r\n";
		}else{
			//戰士 > 戰士 不用做任何操作
		
		}
	  } 
	  text +="強化次數："+equip.getCUC()+"\r\n";
	  text +="星星等級："+equip.getCHUC()+"\r\n";
	  text +="錘子次數："+equip.getIUC()+"\r\n";
	  
	  //text +="總傷："+equip.getDamRF()+"%\r\n";
	  //text +="BOSS傷害："+equip.getBossDamageRF()+"%\r\n";
	  //text +="無視防御："+equip.getIgnorePDRF()+"%\r\n";
	  //text +="全屬性："+equip.getStatRF()+"%\r\n";
	  text +="破功："+equip.getLimitBreak()+"\r\n";
	  text +="#r#g潛能完美繼承#k#n#r#e火花消失!!!!!\r\n";
	  text +="您確定轉換嗎???此操作不可逆！！！！#k#n\r\n";
	  npc.askYesNo(text);
	//}else if (status == 3) {
		
		/*if(selection!=1){
			npc.say("考慮清楚再來找我吧！");
			//cm.dispose();
			return;
		}*/
		var equip =  player.getInventorySlot(1,1);
		var equip2 =  player.getInventorySlot(1,2);
		if(null == equip){
			npc.say("您的裝備欄第一格是空的，需要放入你要轉換的裝備。");
			//cm.dispose();
			//return;
		}else if(null != equip2){
			npc.say("您的裝備欄第二格不是空的，這個位置是用來放置轉換好的武器的。");
			//cm.dispose();
			//return;
		}
		
		var itemid = 0;
		if(selLevel==200){
			itemid = weaponData1[selWeapon][0];
		}else if(selLevel==150){
			itemid = weaponData[selWeapon][0];
		}else if(selLevel==160){
			itemid = weaponData2[selWeapon][0];
		}
	  var equip =  player.getInventorySlot(1,1);
	  var newEquip = player.makeItemWithId(equip.getDataId()); 
	  var selEquip = player.makeItemWithId(itemid); 
	  selEquip.setStr(parseInt(selEquip.getStr()+attributeComparison(equip.getStr(),newEquip.getStr())));
	  selEquip.setDex(parseInt(selEquip.getDex()+attributeComparison(equip.getDex(),newEquip.getDex())));
	  selEquip.setInt(parseInt(selEquip.getInt()+attributeComparison(equip.getInt(),newEquip.getInt())));
	  selEquip.setLuk(parseInt(selEquip.getLuk()+attributeComparison(equip.getLuk(),newEquip.getLuk())));
	 
	 
	 
	    var strengthen =0;
	  //判斷當前武器是否是法系武器
	  if(equip.getPad()>equip.getMad()){
		 strengthen = reducePad(newEquip.getPad(),equip.getPad(),equip.getCHUC());
	  }else{
		 strengthen = reducePad(newEquip.getMad(),equip.getMad(),equip.getCHUC());
	  }
	  ////java.lang.System.out.println("說明強化卷的攻擊為："+strengthen);
	  
	  ////java.lang.System.out.println("強化卷加的攻擊力:"+strengthen);
	 
	  var strengthenStar = 0;
	  //說明要轉法師武器
	  if(selEquip.getMad()>selEquip.getPad()){
		 strengthenStar = increasePad((selEquip.getMad() + strengthen),equip.getCHUC());
	     ////java.lang.System.out.println("上星攻擊："+"--"+increasePad((selEquip.getMad() + strengthen),equip.getCHUC()));
		 selEquip.setPad(parseInt(selEquip.getPad()+strengthenStar));
	  	 selEquip.setMad(parseInt(selEquip.getMad()+strengthen+strengthenStar));
		
		 if(newEquip.getMad()>newEquip.getPad()){
			//法師
			//不用做任何操作
			selEquip.setGrade(equip.getGrade());
			selEquip.setOption(1,equip.getOption(1,false),false);
			selEquip.setOption(2,equip.getOption(2,false),false);
			selEquip.setOption(3,equip.getOption(3,false),false);
			selEquip.setOption(1,equip.getOption(1,true),true);
			selEquip.setOption(2,equip.getOption(2,true),true);
			selEquip.setOption(3,equip.getOption(3,true),true);
		}else{
			//戰士 > 法師
			selEquip.setGrade(equip.getGrade());
			selEquip.setOption(1,zconvertf(equip.getOption(1,false)),false);
			selEquip.setOption(2,zconvertf(equip.getOption(2,false)),false);
			selEquip.setOption(3,zconvertf(equip.getOption(3,false)),false);
			selEquip.setOption(1,zconvertf(equip.getOption(1,true)),true);
			selEquip.setOption(2,zconvertf(equip.getOption(2,true)),true);
			selEquip.setOption(3,zconvertf(equip.getOption(3,true)),true);
		}
	  }else{
		 strengthenStar = increasePad((selEquip.getPad() + strengthen),equip.getCHUC());
		 selEquip.setPad(parseInt(selEquip.getPad()+strengthen+strengthenStar));
		 selEquip.setMad(parseInt(selEquip.getMad()+getPad(equip.getCHUC())));
		 if(newEquip.getMad()>newEquip.getPad()){
			//法師
			selEquip.setGrade(equip.getGrade());
			selEquip.setOption(1,fconvertz(equip.getOption(1,false)),false);
			selEquip.setOption(2,fconvertz(equip.getOption(2,false)),false);
			selEquip.setOption(3,fconvertz(equip.getOption(3,false)),false);
			selEquip.setOption(1,fconvertz(equip.getOption(1,true)),true);
			selEquip.setOption(2,fconvertz(equip.getOption(2,true)),true);
			selEquip.setOption(3,fconvertz(equip.getOption(3,true)),true);
		}else{
			//戰士 > 戰士 不用做任何操作
			selEquip.setGrade(equip.getGrade());
			selEquip.setOption(1,equip.getOption(1,false),false);
			selEquip.setOption(2,equip.getOption(2,false),false);
			selEquip.setOption(3,equip.getOption(3,false),false);
			selEquip.setOption(1,equip.getOption(1,true),true);
			selEquip.setOption(2,equip.getOption(2,true),true);
			selEquip.setOption(3,equip.getOption(3,true),true);
		}
	  }
	  
	  selEquip.setCUC(equip.getCUC());//強化次數
	  selEquip.setCHUC(equip.getCHUC());//星星等級
	  selEquip.setIUC(equip.getIUC());//錘子次數
	  selEquip.setRUC(equip.getRUC());//剩余次數
	  
	  selEquip.setAttribute(equip.getAttribute());
	  
	  //selEquip.setDamRF(equip.getDamRF());//總傷
	  //selEquip.setBossDamageRF(equip.getBossDamageRF());//boss傷害
	  //selEquip.setIgnorePDRF(equip.getIgnorePDRF());//無視防御
	  //selEquip.setStatRF(equip.getStatRF());//全屬性
	  //selEquip.setExGradeOption(equip.getExGradeOption()) 
	  selEquip.setLimitBreak(equip.getLimitBreak());
	
		//星巖
		selEquip.setSocket(1,equip.getSocket(1));
		selEquip.setSocket(2,equip.getSocket(2));
		selEquip.setSocket(3,equip.getSocket(3));
		
		
	
		player.gainItem(selEquip);
		//player.updateItem(1,selEquip);
		//changeSN(equip.getSN(),selEquip.getSN())
		player.loseInvSlot(1, 1);
		var equip2 =  player.getInventorySlot(1,2);
		snlog(equip2.getSN(),equip.getSN());
		gainRMB(-0,"轉武器"+equip.getDataId()+">>>"+itemid+" 消耗 0 余額.oldSN:"+equip.getSN()+"newSN："+equip2.getSN());
		player.gainMesos(-2000000000);
		npc.say("操作成功");
		//cm.dispose();
	//}
//}


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
	var resultList = player.customSqlResult(sql);
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
	player.customSqlUpdate(sql);
}


function addSNLog(oldsn,newsn){
	
	var sql = "insert into zz_SN_log(oldSN, newSN, paytime) values("+oldsn+","+newsn+",now())";
	player.customSqlInsert(sql);
	
}

//戰士轉法師,如果是法師的潛能 則轉換為戰士為了防止互轉導致潛能ok
function zconvertf(options){
	
	if(options == 42051 || options == 40051){
		return 40052;
	}else if(options == 30051 ){
		return 30052;
	}else if(options == 42052 || options == 40052){
		return 40051;
	}else if(options == 30052){
		return 30051;
	}
	return options;
}

function fconvertz(options){
	
	if(options == 42052|| options == 40052){
		return 40051;
	}else if(options == 30052){
		return 30051;
	}else if(options == 42051|| options == 40051){
		return 40052;
	}else if(options == 30051){
		return 30052;
	}
	return options;
}


//強化卷加的攻擊力
function reducePad(initPad,pad, count){
	var strengthen = reduce(pad,count);
	////java.lang.System.out.println("強化攻擊:["+pad+"]強化星星：["+count+"],沒有強化星星的時候武器攻擊為："+strengthen+",上星了多少攻擊："+(pad-strengthen));
	return strengthen-initPad;
}

//返回強化星星的攻擊數值
function increasePad(pad,count){
	var strengthen = increase(pad,count);
	////java.lang.System.out.println(pad+"強化後的屬性："+strengthen+",上星屬性："+(strengthen-pad));
	return (strengthen-pad);
}

function getPad(count){
	var starMap =new Array(
		Array(25, 23),
		Array(24, 21),
		Array(23, 19),
		Array(22, 17),
		Array(21, 15),
		Array(20, 13),
		Array(19, 12),
		Array(18, 11),
		Array(17, 10),
		Array(16, 9)
	)
	var pad = 0;
	for(var i =count;i>15;i--){
		
		for(var j = 0;j<starMap.length;j++){
			if(i == starMap[j][0]){
				pad = pad + starMap[j][1];
			}
		}
	}
	return pad;
}

function reduce( pad, count){
		var star = count;
		var starMap =new Array(
			Array(25, 23),
			Array(24, 21),
			Array(23, 19),
			Array(22, 17),
			Array(21, 15),
			Array(20, 13),
			Array(19, 12),
			Array(18, 11),
			Array(17, 10),
			Array(16, 9)
		)
		
		for(var i = 0;i<count;i++){
			
			if(star>15){
				for(var j = 0;j<starMap.length;j++){
					if(star == starMap[j][0]){
						pad = pad - starMap[j][1];
						break;
					}
				}
				star--;
				////java.lang.System.out.println("☆"+(star)+",攻擊："+pad);
			}else{
				//小于等于15星 按攻擊力計算 攻擊力
				if((pad - 8) >=400){
					pad = pad - 9;
				}else if((pad-8)>=350&&(pad-8)<=399){
					pad = pad - 8;
				}else if((pad-7)>=300&&(pad-7)<=349){
					pad = pad - 7;
				}else if((pad-6)>=250&&(pad-6)<=299){
					pad = pad - 6;
				}else if((pad-5)>=200&&(pad-5)<=249){
					pad = pad - 5;
				}else if((pad-4)>=150&&(pad-4)<=199){
					pad = pad - 4;
				}else if((pad-3)>=100&&(pad-3)<=149){
					pad = pad - 3;
				}else if((pad-2)>=50&&(pad-2)<=99){
					pad = pad - 2;
				}else if((pad-1)>=1&&(pad-1)<=49){
					pad = pad - 1;
				}
				star--;
				////java.lang.System.out.println("☆"+(star)+",攻擊："+pad);
			}
			
		}
		return pad;
	}

function increase(pad ,count){
		var star = 0;
		var starMap =new Array(
			Array(25, 23),
			Array(24, 21),
			Array(23, 19),
			Array(22, 17),
			Array(21, 15),
			Array(20, 13),
			Array(19, 12),
			Array(18, 11),
			Array(17, 10),
			Array(16, 9)
		)
		
		for(var i = 0;i<count;i++){
			star++;
			if(star>15){
				for(var j = 0;j<starMap.length;j++){
					if(star == starMap[j][0]){
						pad = pad + starMap[j][1];
						break;
					}
				}
			}else{
				if(pad  >=400){
					pad = pad + 9;
				}else if(pad>=350&&pad<=399){
					pad = pad + 8;
				}else if(pad>=300&&pad<=349){
					pad = pad + 7;
				}else if(pad>=250&&pad<=299){
					pad = pad + 6;
				}else if(pad>=200&&pad<=249){
					pad = pad + 5;
				}else if(pad>=150&&pad<=199){
					pad = pad + 4;
				}else if(pad>=100&&pad<=149){
					pad = pad + 3;
				}else if(pad>=50&&pad<=99){
					pad = pad + 2;
				}else if((pad)>=1&&(pad)<=49){
					pad = pad + 1;
				}
			}	
		}
		return pad;
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
	var myAccountName =getAccountName(player.getId());
	var sql = "insert into zz_coin(account, rmb, paytime,remark) values('"+myAccountName+"',"+num+",now(),'"+info+"')";
	cm.customSqlInsert(sql);
}

//余額
function getRMB(){
	var acct = getAccountName(player.getId());
	var sql = "select SUM(coin) rmb from zz_coin a where a.account='"+acct+"'";
	var resultList = player.customSqlResult(sql);
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

function  getSubJob() {
	var sql = "select subjob from characters where id = "+player.getId()+";";
	var resultList = player.customSqlResult(sql);
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
