var status = 0;


var tz0 = "#fEffect/ItemEff/1070069/effect/walk1/0#";
var tz1 = "#fEffect/CharacterEff/1022223/8/0#"; 
var tz2 = "#fEffect/CharacterEff/1022223/6/0#"; 
var tz3 = "#fEffect/CharacterEff/1022223/9/0#";
var tz4 = "#fEffect/CharacterEff/1022223/7/0#";
var tz5 = "#fEffect/CharacterEff/1050312/3/0#";
var tz6 = "#fEffect/CharacterEff/1112906/0/1#";//粉紅心 
//var tz6 = "#fEffect/CharacterEff/1114000/1/0#";  //紅星花

//var tz6 = "#fEffect/CharacterEff/1112901/5/0#";//可以充當空格
var ntz1 = "#fEffect/CharacterEff/1102355/1/0#"; 
var ntz2 = "#fEffect/CharacterEff/1102355/2/0#"; 
var ntz3 = "#fEffect/CharacterEff/1102355/3/0#"; 
var ntz4 = "#fEffect/CharacterEff/1112901/5/0#";//可以充當空格
var ntz5 = "#fEffect/CharacterEff/1112901/5/0#";//可以充當空格


var peticon = "#fEffect/ItemEff/1003493/effect/default/1#"; //寵物
var xinicon = "#fEffect/CharacterEff/1051295/1/0#"; //愛心

var ca = java.util.Calendar.getInstance();
var p3 = "#fUI/Basic.img/BtCoin/normal/0#";
var year = ca.get(java.util.Calendar.YEAR); //獲得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //獲得月份
var day = ca.get(java.util.Calendar.DATE);//獲取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //獲得小時
var minute = ca.get(java.util.Calendar.MINUTE);//獲得分鐘
var second = ca.get(java.util.Calendar.SECOND); //獲得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var isAngel = false;
var isBeta = false;
var hairColorArray=null;
var hairArray = null;
var faceArray = null;
 
 
var skin = Array(0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13);
var hair = "免費美發3次";
var face = "免費美臉3次";
var meso = 103000000;
let isAngel = false;
let isBeta = false;
if (player.getBeginner() == 6001) {
    isAngel = npc.askAngelicBuster() != 0;
} else if (player.getBeginner() == 10000) {
    isBeta = npc.askMenu("請選擇：\r\n#b#L0#神之子：阿爾法#l\r\n#L1#神之子：蓓塔#l") != 0;
} 
	var qNum = player.getAmountOfItem(2430182)
	var text ="  "+tz1+tz3+tz4+tz1+tz2+tz3+tz4+tz1+tz2+tz3+tz4+tz1+tz2+tz3+tz4+tz1+tz2+tz3+tz4+tz1+tz2+tz4+"\r\n";
	text += "#r#L6#"+xinicon+"我是link號,我是聯盟號,我要直接升級到200級#l\r\n#l";
	text += "#r#L1#"+xinicon+"選擇需要的髮型(本地圖無限免費使用)#v1001103##l\r\n#l";
	text += "#r#L3#"+xinicon+"選擇需要的臉型(本地圖無限免費使用)#v1012597##l\r\n#l";
	//text += "#r#L4#"+xinicon+"染色(本地圖無限免費使用)#v5151000##l\r\n#l";
	text += "#r#L5#"+xinicon+"換膚(本地圖無限免費使用)#v5153015##l\r\n#l";
	text += "#r#L2#"+xinicon+"我已經裝扮完成,我要離開這裡#v5044011##l\r\n#l";
	text +="\r\n  "+tz1+tz3+tz4+tz1+tz2+tz3+tz4+tz1+tz2+tz3+tz4+tz1+tz2+tz3+tz4+tz1+tz2+tz3+tz4+tz1+tz2+tz4+"\r\n";
	var selects = npc.askMenu(text);
	if(selects==1){
		player.runScript("隨髮型123");
	}else if(selects==3){
		player.runScript("隨臉型123");
	}else if(selects==2){
		player.runScript("new_joinmxd")
	}else if(selects==4){
		var hairs = npc.getAllHairColors();
		if(undefined ==hairs[0]){
			npc.say("沒有這個發系的顏色");
		}else{
			var res = npc.askAvatar("我能把你現在的頭髮換個顏色。你對現在的發色不厭倦嗎? 只要你有#b#t5151036##k,我就幫你染發。慢慢挑選你想要的發色吧！", hairs, 5151036, isAngel, isBeta);
			var buy =  res[1];
			var sel =  res[0];
			if(buy != 1){
				npc.say("歡迎下次光臨!");
			}else if (isAngel) {
				player.modifiedDressUp();
				player.setSubHair(hairs[sel]);
				player.zeroTag(isBeta);
				npc.sayNext("完成了,享受你的新發色吧!");
			} else if (isBeta) {
				player.setSubHair(hairs[sel]);
				player.zeroTag(isBeta);
				npc.sayNext("完成了,享受你的新發色吧!");
			} else {
				player.setHair(hairs[sel]);
				player.zeroTag(isBeta);
				npc.sayNext("完成了,享受你的新發色吧!");
			}
		}
	}else if(selects==5){
		let skinColorChoices = npc.getAllSkinColors();
		var res = npc.askAvatar("用我們護膚中心開放的機械，可以查看護膚後的效果。你想要什麼樣的皮膚呢？請挑選一下～", skinColorChoices, 5153015, isAngel, isBeta);
		var selection = res[0];
		var buy = res[1];
		/*if(map.getId() == 867122300){
			player.gainItem(5153015,1);
		}*/
		if(selection<0){
			npc.say("出現錯誤!");
		}else if(!player.hasItem(5153015,1)){
			npc.say("您沒有#v5152053#,請購買後找我!");	
		}else if(buy == 0){
			if(player.getQuestRecordEx(9610)==0){
				player.updateQuestRecordEx(9610,"1");
			}
			player.loseItem(5153015,1);
			player.setSkin(skinColorChoices[selection]);
			npc.say("好了,讓朋友們贊嘆你的新皮膚吧!"); 
		}else{
			npc.say("歡迎下次光臨123!"+buy);	
		}
	}else if(selects==6){
		if(player.getLevel()>=200){
			npc.say("您已經大于200級了");
		}else{
			if(getMaxLevel()){
				for(var i=0;i<199;i++){
					player.gainExp(27000000000000);
				}
				npc.say("獲得經驗!");
			}else{
				npc.say("賬戶下沒有大于250級角色,無法使用該功能.");
				
			}
		}
		
	}
			
		
    

function getMaxLevel(){
	var text = "";
	var sql = " select MAX(`level`) alevel from characters a where a.accounts_id = "+player.getAccountId();
	var alevel = -1;
	var resultList = player.customSqlResult(sql);
	for (var i = 0; i < resultList.size(); i++) {
		var rs = resultList.get(i);
		alevel = rs.get("alevel");
	}
	if(isNaN(alevel)){
		return false;
	}else{
		if(alevel>200){
			return true;
		}else{
			return false;
		}
	}
	return true;
} 

function newPop(){
	player.loseItem(2430241, 1);
	var equip = player.makeItemWithId(1112422);//1級25星星戒指
	equip.setCHUC(25);
	player.gainItem(equip);
		  
	player.gainItem(1002186, 1); //透明帽
	player.gainItem(1012057 , 1);//透明面具
	player.gainItem(1022048 , 1);//透明眼飾
	player.gainItem(1032024 , 1);//透明耳環
	player.gainItem(1092064 , 1);//透明盾牌
	player.gainItem(1702585 , 1);//透明劍
	player.gainItem(1082102 , 1);//透明手套
	player.gainItem(1102039 , 1);//透明披風 
	player.gainItem(1072153 , 1);//透明鞋
	
	//player.gainItem(2431935 , 10);//能手冊20
	//player.gainItem(2431936 , 10);//能手冊30
	
	player.gainItem(2430182 , 2);//自選髮型卡
	
	player.gainItem(5150040, 100);// 皇家理發
	
	
	
	var isAngel = false;
	var isBeta = false;
	  if (player.getBeginner() == 6001) {
		isAngel = 0 != 0;
	} else if (player.getBeginner() == 10000) {
		isBeta = 0 != 0;
	}
	
	var hair_Colo_new = []; 
	if(player.getPlayerStat("GENDER") ==0){//男
		player.gainItem(1050454, 1);// 郊游男裝
		 hair_Colo_new[0] = 35550;//頭
		player.setRandomAvatar(5150040, hair_Colo_new, isAngel, isBeta)
		player.safeDispose();
		hair_Colo_new[0] = 23028;
		player.setRandomAvatar(5150040, hair_Colo_new, isAngel, isBeta); 
		player.setAvatar(5150040, 3, isAngel, isBeta);
		player.safeDispose();
	}else{
		player.gainItem(1051521, 1);// 郊游女裝 
		hair_Colo_new[0] = 38680;
		player.setRandomAvatar(5150040, hair_Colo_new, isAngel, isBeta)
		player.safeDispose();
		hair_Colo_new[0] = 24024;
		player.setRandomAvatar(5150040, hair_Colo_new, isAngel, isBeta)
		player.safeDispose();
		player.setAvatar(5150040, 3, isAngel, isBeta);
	}
	player.gainItemP(2433510, 1);//新手武器
	player.gainItem(1115127, 1);//小雞名片
	player.gainItem(1142477, 1);//楓之谷新人勛章
	player.gainItem(1702755, 1);//面包武器
		
	player.gainItem(5062009 , 200);//超級神奇魔方
	player.gainItem(5062500 , 200);//大師附加神奇魔方
	 
	
	player.gainItem(5152053, 100);// 皇家整容
	player.gainItem(5150052, 10);// 萬能高級美發
	player.gainItem(5153015, 10);// 萬能護膚
	player.gainItem(5152057, 10);// 萬能高級整形
	player.gainItemPeriod(5211060, 1, 6 * 60 * 60 * 1000);// 三倍經驗
	player.gainItemPeriod(5360015, 1, 6 * 60 * 60 * 1000);// 雙爆 
//	player.gainItem(5074000, 50);// 高質地喇叭
	player.gainItem(5060000, 3);// 裝備刻名 X3
	
	if(second <= 20){
		player.gainItem(5000375,1); // 粉企鵝
	}else if(second <= 40){
		player.gainItem(5000376,1); // 紫企鵝
	}else{
		player.gainItem(5000377,1); // 藍企鵝
	}

	player.addPQLog(rewardType);
	//player.gainItem(2434354, 1);//星座椅子箱子
	player.gainItem(2120000, 200);	//藥水
	player.gainItem(2000005, 300);	//藥水 

	player.gainItem(5030001, 1);
	player.gainItemPeriod(1112918, 1, 2);// 回歸戒指 X1 24小時 

}

function getByteLen(val) {
					if(null == val){
					return 0;
					}
            var len = 0;
            for (var i = 0; i < val.length; i++) {
               var length = val.charCodeAt(i);
               if(length>=0&&length<=128)
                {
                    len += 1;
                }
                else
                {
                    len += 2;
                }
            }
            return len;
        }
        


function weekdayItem(weekday){
	
	switch(weekday){
		case 1:
			return "3800163";//周日
		break;
		case 2:
			return "3800157";//周一
		break;
		case 3:
			return "3800158";
		break;
		case 4:
			return "3800159";
		break;
		case 5:
			return "3800160";
		break;
		case 6:
			return "3800161";
		break;
		case 7:
			return "3800162";
		break;
	} 
	
}


function  getZZVIP() {
	var account = getAccountName(player.getId());
	var sql = " select *  from zz_vip where account ='"+account+"'  and characters_id =  "+player.getId();
	var resultList = player.customSqlResult(sql);
	var type=0;
	var endDate=null;
	for (var i = 0; i < resultList.size(); i++) {
    var result = resultList.get(i);
    if (result == null) {
        break;
    }
		type = result.get("type");
		endDate = result.get("endtime");
	}
	return endDate;
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


//累計
function getSRMB(){
	var acct = getAccountName(player.getId());
	var sql = "select SUM(rmb) rmb from zz_trade a where a.account='"+acct+"' and a.rmb >0 and type=0";
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
//余額
function getRMB(){
	var acct = getAccountName(player.getId());
	var sql = "select SUM(rmb) rmb from zz_trade a where a.account='"+acct+"'";
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
    if (result == null) {
        break;
    }
		var accountName = result.get("name");
	}
	return accountName;
}




function gainRMB(num){
	var myAccountName =getAccountName(player.getId());
	var sql = "insert into zz_trade(account, rmb, paytime,remark) values('"+myAccountName+"',"+num+",now(),'使用了"+num+"余額')";
	player.customSqlInsert(sql);
}

function nbsp(str){
	var txt ='';
	for(var i =0;i<str;i++){
  	txt +=" ";
  }
  return txt;
}






function weekDayCount(weekday){
	switch(weekday){
		case 1:
			return 6;
		break;
		case 2:
			return 0;
		break;
		case 3:
			return 1;
		break;
		case 4:
			return 2;
		break;
		case 5:
			return 3;
		break;
		case 6:
			return 4;
		break;
		case 7:
			return 5;
		break;
	} 
	
}

function weekdayC(weekday){
	switch(weekday){
		case 1:
			return "星期日";
		break;
		case 2:
			return "星期一";
		break;
		case 3:
			return "星期二";
		break;
		case 4:
			return "星期三";
		break;
		case 5:
			return "星期四";
		break;
		case 6:
			return "星期五";
		break;
		case 7:
			return "星期六";
		break;
	} 
	
}

function nbsp(str){
	var txt ='';
	for(var i =0;i<str;i++){
  	txt +=" ";
  }
  return txt;
}
