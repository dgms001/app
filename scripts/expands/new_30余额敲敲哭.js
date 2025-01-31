var a = 0;

var itemlist =new Array(
Array(1132308,30,1),//	夢幻腰帶
Array(1022278,30,1),//	失控機械標記
Array(1012632,30,1),//	夢幻腰帶
Array(2049387,60,1),//	18星之力
Array(2049384,200,1),//	15星之力
Array(2049389,30,1),//	20星之力
Array(1012438,50,1),//	漩渦文身
Array(1022211,50,1),//	漩渦眼鏡
Array(1012414,50,1),//	超越證明臉飾
Array(1022195,50,1),//	超越證明眼飾
Array(1032201,50,1),//	超越證明耳環
Array(!1122259取消,50,1),//	超越證明吊墜
Array(1113056,50,1),//	超越證明戒指
Array(1092113,60,1),//	特米納斯防御盾
Array(1212080,80,1),//	特米納斯啟迪雙頭杖
Array(1222075,100,1),//	特米納斯烈焰魂手銃
Array(1232075,30,1),//	特米納斯亡命征服者
Array(1242081,30,1),//	特米納斯狙擊能量劍
Array(1252066,100,1),//	特米納斯動物魔法棒
Array(1262030,80,1),//	特米納斯ESP限制器
Array(1302290,30,1),//	特米納斯分裂劍
Array(1312166,30,1),//	特米納斯撕裂斧
Array(1322216,30,1),//	特米納斯粉碎錘
Array(1332239,30,1),//	特米納斯徘徊刀
Array(1342086,30,1),//	特米納斯寂靜刃
Array(1362102,80,1),//	特米納斯管弦樂手杖
Array(1372189,80,1),//	特米納斯附魔短杖
Array(1382223,70,1),//	特米納斯催眠長杖
Array(1402211,30,1),//	特米納斯壓制巨劍
Array(1412148,30,1),//	特米納斯破壞大斧
Array(1422153,30,1),//	特米納斯爆破鈍器
Array(1432179,30,1),//	特米納斯尖刺槍
Array(1442235,50,1),//	特米納斯戰爭矛
Array(1452217,30,1),//	特米納斯風暴弓
Array(1462205,30,1),//	特米納斯疾風弩
Array(1472227,80,1),//	特米納斯天罰拳套
Array(1482180,50,1),//	特米納斯突擊指節
Array(1492191,80,1),//	特米納斯暴徒短槍
Array(1522106,30,1),//	特米納斯猛獸雙弩槍
Array(1532110,30,1),//	特米納斯爆燃手炮
Array(1542068,30,1),//	特米納斯一文字刀
Array(1552068,80,1),//	特米納斯召喚折扇
Array(1582026,80,1),//	特米納斯爆裂鐵拳      
Array(2613064,200,1),//	V單手武器攻擊力卷軸
Array(2613065,200,1),//	V單手武器魔力卷軸
Array(2612076,200,1),//	V雙手武器攻擊力卷軸
Array(2612077,200,1),//	V雙手武器魔力卷軸
Array(2616074,200,1),//	V防具攻擊力卷軸
Array(2616075,200,1),//	V防具魔力卷軸
Array(2615043,200,1),//	V飾品攻擊力卷軸
Array(2615044,200,1),//	V飾品魔力卷軸
Array(2048716, 500, 1), //-強大的涅槃火焰
Array(2048721, 200, 1), //- 永遠的涅槃火焰
Array(2048708, 500, 1), //涅槃火焰150級
Array(2048743, 300, 1), //涅槃火焰160級
Array(2612061, 500, 1), //X雙手武器攻擊力卷軸
Array(2612062, 100, 1), //X雙手武器魔力卷軸
Array(2613050, 500, 1), //X單手武器攻擊力卷軸
Array(2613051, 500, 1), //X單手武器魔力卷軸
Array(2615031, 500, 1), //X飾品攻擊力卷軸
Array(2615032, 100, 1), //X飾品魔力卷軸
Array(2616061, 500, 1), //X防具攻擊力卷軸
Array(2616062, 500, 1), //X防具魔力卷軸
Array(2048817, 500, 1), //X寵物裝備攻擊力卷軸
Array(2048818, 100, 1) //X寵物裝備魔力卷軸

);
  
		      	var text ="";
		      	for(var i =0;i<itemlist.length;i++){
		      		text +="#i" + itemlist[i] + ":#";
		      	}
				var getCoin0 = getCoin(0);
				var getCoin1 = getCoin(1);
		      	text+="\r\n#L1#30余額進行抽取 您當前的余額為：" + getCoin0+ " ,綁定余額:"+getCoin1+"#l\r\n";
		      	var sel = npc.askMenu(text);
				if(sel == 1){
					var yes = npc.askYesNo("是否花費30余額進行抽取獎勵。");
					if(yes == 1){
						if(player.getFreeSlots(1)<1||player.getFreeSlots(2)<1||player.getFreeSlots(3)<1||player.getFreeSlots(4)<1||player.getFreeSlots(5)<1){
							npc.say("背包每個欄位都要有1個空格。");
						}else{
								var meso = 30;
								if(getCoin0+getCoin1>=meso){
									var chance = Math.floor(Math.random() *500);
									var finalitem = Array();
									for (var i = 0; i < itemlist.length; i++) {
									  if (itemlist[i][1] >= chance) {
										  finalitem.push(itemlist[i]);
									  }
									}
									var random0 = new java.util.Random();
									var finalchance0 = random0.nextInt(finalitem.length);
									player.gainItem(finalitem[finalchance0][0],finalitem[finalchance0][2]);
									npc.broadcastPlayerNotice(0x15,"[2號余額抽獎]"+player.getName()+" 獲得 "+player.makeItemWithId(finalitem[finalchance0][0]).getItemName()+" 恭喜他/她。");
									var itemName = "30余額抽獎獲得："+player.makeItemWithId(finalitem[finalchance0][0]).getItemName()+" x "+finalitem[finalchance0][2];
									if(getCoin1>=meso){
										gainRMB(-meso,itemName,1);
									}else if(getCoin1<meso && getCoin1>0){
										var take = meso-getCoin1;
										gainRMB(-getCoin1,itemName,1);
										gainRMB(-take,itemName,0);
									}else{
										gainRMB(-meso,itemName,0);
									}
									npc.say("你獲得了 #r#t" + finalitem[finalchance0][0] + "##k " + finalitem[finalchance0][2] + "個。");   
								}else{
									npc.say("您的余額不足30。");		   
								}
						}
					}
				}  
  
  
 
function gainRMB(num,item,type){
	var myAccountName =getAccountName();
	var sql = "insert into zz_coin(account, coin, paytime,remark,type) values('"+myAccountName+"',"+num+",now(),'"+item+"',"+type+")";
	player.customSqlInsert(sql);
}


//查詢當前賬戶下非當前角色以外角色開通VIP的數量
function getCoin(type){
	var sql = " select (case WHEN SUM(coin) is NULL THEN 0 ELSE SUM(coin) end )  coin  from zz_coin where `type` = "+type+" and account =  '"+getAccountName()+"' ";
	var resultList = player.customSqlResult(sql);
	var coin=0;
	if(null!=resultList){
		for (var i = 0; i < resultList.size(); i++) {
	    var result = resultList.get(i);
	    if (result == null) {
	        break;
	    }
			coin = result.get("coin");
			break;
		}	
	}
	if(coin==null){
		coin =0;
	}	
	return coin;
}

//獲得帳號
function  getAccountName() {
	var sql = "select name from accounts where id =  "+player.getAccountId()+" ";
	var resultList = player.customSqlResult(sql);
	var accountName=0;
	for (var i = 0; i < resultList.size(); i++) {
    var result = resultList.get(i);
    if (result == null) {
        break;
    }
		accountName = result.get("name");
	}
	return accountName;
}
 