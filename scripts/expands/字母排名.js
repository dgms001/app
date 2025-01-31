/*  This is mada by dgms    
 *  This source is made by Funms Team
 *  
 *  功能：NPC 餌料商
 *  
 *  @Author dgms 

/* global cm */

var cal = java.util.Calendar.getInstance();

var month = cal.get(java.util.Calendar.MONTH) + 1; //獲得月份
var year = cal.get(java.util.Calendar.YEAR); //獲得年份
var day = cal.get(java.util.Calendar.DATE);


var weekday = cal.get(java.util.Calendar.DAY_OF_WEEK);

var fishArray = Array(
	3994059,3994060,3994061,3994062,3994063,
	3994064,3994065,3994066,3994067,3994068,
	3994069,3994070,3994071,3994072,3994073,
	3994074,3994075,3994076,3994077,3994078
)
var fishMap =  Array(
	Array(1,3994059,3994060,3994061,3994062,3994063,"A榜字母"),
	Array(2,3994064,3994065,3994066,3994067,3994068,"B榜字母"),
	Array(3,3994069,3994070,3994071,3994072,3994073,"C榜字母"),
	Array(4,3994074,3994075,3994076,3994077,3994078,"D榜字母")
)
var sel;
var weekSort = 0;
var shangjiao =0;
var ordinary = 500000;
var special = 1000000;
var buynum = 0;
var gailv = 0;
var sortSel = 0;
var ranColor= 0;
var fishNumber = 0;
let sel1;
let sel2;




			var	text ="#r#L5#上交和排行獎勵介紹#e(必看)#k#n#l\r\n";
				text+="#b#L1#A榜["+fishNum(1)+"]個,目前排名["+fishSort(1)+"],繼續上交.#l\r\n";
				text+="#b#L2#B榜["+fishNum(2)+"]個,目前排名["+fishSort(2)+"],繼續上交.#l\r\n";
				text+="#b#L3#C榜["+fishNum(3)+"]個,目前排名["+fishSort(3)+"],繼續上交.#l\r\n";
				text+="#b#L4#D榜["+fishNum(4)+"]個,目前排名["+fishSort(4)+"],繼續上交.#l\r\n";
				text +="#b#L7#1000個字母換混合染色卡(#r#enew~人氣爆棚#k#n)#k#n#l\r\n";
				text+="#r#L6#領取和查看上周排行獎勵(無當前排行,自己的排名只有自己知道哦)#l\r\n#k#n";
			let sel = npc.askMenu("您本周的上交如下：\r\n"+text+"");
			 
			if(sel<=4){
				var text = "請你輸入想要上交的數量\r\n";
				var sum = 0;
				var num = 0;
				for(var i = 0;i<5;i++){
					num = player.getAmountOfItem(fishMap[sel-1][i+1])
					sum += num;
					text+="#v"+fishMap[sel-1][i+1]+"##t"+fishMap[sel-1][i+1]+"# x "+num+"\r\n";
				}
				text +="您最大可以上交:"+sum+"個"+fishMap[sel-1][6]+"";
				shangjiao = npc.askNumber(text, sum, 1, sum);
				gailv = shangjiao+"%";
				var yesno = npc.askYesNo("#b您確定上交"+shangjiao+" x "+fishMap[sel-1][6]+"？\r\n#r您此次有#e["+gailv+"]#n概率獲得 1 5 10萬破功\r\n#b每次上交1個字母有1%概率獲得 1 5 10萬破功。\r\n如果上交50個就是50%概率\r\n如果一次性上交 500條魚，則獲得5次隨機 1 5 10萬破功 .\r\n上交時觸發。");
				if(yesno==1){
					
					/* 判斷小魚的數量 begin */
					var sum = 0;//******************************************************
					var num = 0;
					for(var i = 0;i<5;i++){
						num = player.getAmountOfItem(fishMap[sel-1][i+1]);
						sum += num;
					}
					/* 判斷小魚的數量 end */
					if(sum >= shangjiao){//************************************************
						//進行扣除小魚
						var kouchu = 0;
						var jnum = 0;
						for(var i = 0;i<5;i++){
							jnum = player.getAmountOfItem(fishMap[sel-1][i+1])
							if(jnum <= shangjiao-kouchu){
								//全部扣除
								player.loseItem(fishMap[sel-1][i+1],jnum);
								kouchu += jnum;
							}else{
								//扣除剩余數量
								player.loseItem(fishMap[sel-1][i+1],shangjiao-kouchu);
								kouchu += shangjiao-kouchu;
								break;
							}
						}
						if(shangjiao == kouchu){
							/* 上交獲得破功箱子 start */
							var channel =  parseInt(Math.floor(Math.random() * 100));//********************************
							var limitYs =  shangjiao%100;
							
							var limitCount = shangjiao/100;
							if(limitCount>0){
								player.gainItem(2437474,limitCount);
							}
							if(channel <= limitYs){
								player.gainItem(2437474,1);
							}
							/* 上交獲得破功箱子 end */
							
							//插入數據庫
							addFish(sel,shangjiao);//****************************************************
							npc.say("成功上交:"+shangjiao +" x " +fishMap[sel-1][6]+".");
						}else{
							npc.say("系統扣除:"+kouchu+",實際需要扣除:"+shangjiao);
						}
						
					}else{
						npc.say(fishMap[sel-1][6]+"數量不足"+shangjiao+",請核對後上交。");
					}
					
				}
			}else if(sel == 5){
				//排行獎勵說明
				var text ="每周一更新排行,請要上交的玩家在周日23.59之前上交。\r\n上交字母類總共分為4大類,每類排名前10都可以獲得獎勵。\r\n";
					text+="#r第一名：#v2435153#x3(用于星巖系統),破功x2000萬,自選勛章x1，24人團隊副本通行證x1\r\n";
					text+="第二~第六名：#v2435153#x1(用于星巖系統),破功x1000萬，24人團隊副本通行證x1\r\n";
					text+="第七~第十名：破功x1000萬\r\n";
					text+="#b每次上交1個字母有1%概率獲得 1 5 10萬破功。\r\n如果上交50個就是50%概率\r\n如果一次性上交 500個字母，則獲得5次隨機 1 5 10萬破功 .\r\n上交時觸發。\r\n"
					text+="新創建角色屬于【藍蝸牛分區】";
				npc.say(text);
			}else if(sel == 6){
				var text  = "#L1#第["+getWeekOfYear()+"]周A榜排行  ("+(player.getPQLog(getWeekOfYear()+"字母類型"+1+"獎勵領取")>0?"已領取":"可領取")+") #l\r\n";
					text += "#L2#第["+getWeekOfYear()+"]周B榜排行  ("+(player.getPQLog(getWeekOfYear()+"字母類型"+2+"獎勵領取")>0?"已領取":"可領取")+") #l\r\n";
					text += "#L3#第["+getWeekOfYear()+"]周C榜排行  ("+(player.getPQLog(getWeekOfYear()+"字母類型"+3+"獎勵領取")>0?"已領取":"可領取")+")#l\r\n";
					text += "#L4#第["+getWeekOfYear()+"]周D榜排行  ("+(player.getPQLog(getWeekOfYear()+"字母類型"+4+"獎勵領取")>0?"已領取":"可領取")+")#l\r\n";
				sortSel = npc.askMenu(text);
				
				weekSort = npc.askMenu(lastWeek(sortSel));
				
				if(weekSort<=10 && weekSort != 0){
					
					var log1 = getWeekOfYear()+"字母類型"+sortSel+"獎勵領取";
					if(fishNumber<200){
						npc.say("上交的字母低于200個，無法獲得獎勵。");
						//cm.dispose();
						//return;
					}else if(player.getPQLog(log1)==0){
						if(weekSort == 1){
							player.gainItem(2435153,3);
							player.gainItem(4034671,1);
							player.gainItem(2614057,2);//千萬破功
							player.gainItem(2431978,1);//自選稱號
						}else if(weekSort >= 2 && weekSort<=6){
							player.gainItem(2435153,1);
							player.gainItem(4034671,1);
							player.gainItem(2614057,1);
						}else if(weekSort){
							player.gainItem(2614057,1);
						}
						player.addPQLog(log1,1,3650);
						npc.broadcastWeatherEffectNotice(0x13, "〖字母排行系統〗 恭喜 玩家 " +player.getName() + "獲得第"+weekSort+"名，字母排行獎勵!",15000);
						npc.say("上周排名為："+weekSort+"\r\n獲得獎勵。注意查收！！");
					}else{
						npc.say("您第：【"+getWeekOfYear()+"】周已經領取過,此類型獎勵.");
					}
				}else{
					npc.say("上周的排名在10名以外，無法獲得獎勵。"+weekSort);
				}
				
			}else if(sel == 7){
				var text = "請選擇你要上交那種字母100個用于兌換:\r\n";
				var typed = 0;
				var num = 0;
				
				var flag = false;
				for(var i = 0 ;i<fishArray.length;i++){
					typed = fishArray[i];
					num = player.getAmountOfItem(typed);
					if(num>=100){
						flag =true;
						text += "#L"+(i+1)+"##v"+typed+"# #t"+typed+"# x "+num+"#l\r\n";
					}else{
						text += "#v"+typed+"# #t"+typed+"# x "+num+"\r\n";
					}
					
				}
				if(flag){
					//ask(text);
					 sel1 = npc.askMenu(text);
					 ranColor = sel1-1;
					 var yes  = npc.askYesNo("#b您確定上交#v"+fishArray[ranColor]+"# #t"+fishArray[ranColor]+"#x 100 ，用于兌換 混合染色卡 ?");
					 if(yes ==1){
						if(player.getAmountOfItem(fishArray[ranColor])>=100){
							player.loseItem(fishArray[ranColor],100);
							player.gainItem(2432946,1);
							npc.say("獲得混合染色劵一張。");
						}else{
							npc.say("您要上交的#t" +fishArray[ranColor]+"#不足100個 ");
						}
						
					 }
				}else{
					npc.say(text);
					//cm.dispose();
				}
			}


//OK
function getWeekOfYear(){
  var today = new Date();
  var firstDay = new Date(today.getFullYear(),0, 1);
  var dayOfWeek = firstDay.getDay(); 
  var spendDay= 1;
  if (dayOfWeek !=0) {
    spendDay=7-dayOfWeek+1;
  }
  firstDay = new Date(today.getFullYear(),0, 1+spendDay);
  var d =Math.ceil((today.valueOf()- firstDay.valueOf())/ 86400000);
  var result =Math.ceil(d/7);
  return result+1;
};

//OK
/**
  * 判斷年份是否為潤年
  *
  * @param {Number} year
  */
 function isLeapYear(year) {//*****************************************************
     return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
 }
 //OK
 /**
  * 獲取某一年份的某一月份的天數
  *
  * @param {Number} year
  * @param {Number} month
  */ 
 function getMonthDays(year, month) {//************************************
     return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month] || (isLeapYear(year) ? 29 : 28);
 }
 /**
  * 獲取某年的某天是第幾周
  * @param {Number} y
  * @param {Number} m
  * @param {Number} d
  * @returns {Number}
  */
 //OK
 function getWeekNumber(y, m, d) {//***************************************
     var now = new Date(y, m - 1, d),
         year = now.getFullYear(),
         month = now.getMonth(),
         days = now.getDate();
     //那一天是那一年中的第多少天
     for (var i = 0; i < month; i++) {
         days += getMonthDays(year, i);
     }
 
     //那一年第一天是星期幾
     var yearFirstDay = new Date(year, 0, 1).getDay() || 7;
 
     var week = null;
     if (yearFirstDay == 1) {
         week = Math.ceil(days / yearFirstDay);
     } else {
         days -= (7 - yearFirstDay + 1);
         week = Math.ceil(days / 7) + 1;
     }
 
     return week;
 }

function lastWeekByWorld(typed,worldid){//少DUAL
	var daysql = " (select date_sub(curdate(),interval "+weekDayCount(weekday)+" day) from DUAL) ";
	var daysql1 = " (select date_sub(curdate(),interval "+(weekDayCount(weekday)+7)+" day) from DUAL) ";
	var sql = "  select a.*,b.`name`,c.`name` cname,SUM(num) znum from zz_fish_num a,zz_fish_type b,characters c where a.fish_type = b.id and a.worldid = "+worldid+" and a.characterId = c.id  AND a.paytime < "+daysql+ " and a.paytime > "+daysql1+" and a.fish_type  = "+ typed +" GROUP BY a.characterId  ORDER BY znum desc LIMIT 20 ";
	////java.lang.System.out.println(sql);
	var resultList = player.customSqlResult(sql);
	var characterId = 0;
	var character = player.getId();
	weekSort = 0;
	fishNumber = 0;
	var text = "";
	var null_ = true;
	if(null!=resultList){
		for (var i = 0; i < resultList.size(); i++) {
			var result = resultList.get(i);
			if (result == null) {
				break;
			}
			characterId = result.get("characterId");
			if(null == result.get("id")){
				text += "無上周記錄\r\n";
				null_ = false;
				break;
			}
			text += ""+ (i+1)+"   "+result.get("cname")+"   " + ""+result.get("znum")+"\r\n";
			
		}
	}
	return text;
}
 
function lastWeek(typed){//上周記錄
	var daysql = " (select date_sub(curdate(),interval "+weekDayCount(weekday)+" day) from DUAL) ";
	var daysql1 = " (select date_sub(curdate(),interval "+(weekDayCount(weekday)+7)+" day) from DUAL) ";
	var sql = "  select a.*,b.`name`,c.`name` cname,SUM(num) znum from zz_fish_num a,zz_fish_type b,characters c where a.fish_type = b.id and a.worldid = "+0+" and a.characterId = c.id  AND a.paytime < "+daysql+ " and a.paytime > "+daysql1+" and a.fish_type  = "+ typed +" GROUP BY a.characterId  ORDER BY znum desc LIMIT 20 ";
	////java.lang.System.out.println(sql);
	var resultList = player.customSqlResult(sql);
	var characterId = 0;
	var character = player.getId();
	weekSort = 0;
	fishNumber = 0;
	var text = "";
	var null_ = true;
	if(null!=resultList){
		for (var i = 0; i < resultList.size(); i++) {
			var result = resultList.get(i);
			if (result == null) {
				break;
			}
			characterId = result.get("characterId");
			if(null == result.get("id")){
				text += "無上周記錄\r\n";
				null_ = false;
				break;
			}
			text += ""+ (i+1)+"   "+result.get("cname")+"   " + ""+result.get("znum")+"\r\n";
			if(character == characterId){
				weekSort = (i+1);
				fishNumber = parseInt(result.get("znum"));
			}
		}
	}
	if(null_){
		text += "#L1#您上周排名為："+weekSort+",我要領獎#l\r\n";
	}
	return text;
}

//OK
function addFish(fish_type,num){
	var characterid = player.getId();
	var sql = "insert into zz_fish_num(characterId, fish_type, num,paytime,worldid) values("+characterid+","+fish_type+","+num+",now(),"+0+")";
	player.customSqlInsert(sql);


}//*****************************************
 
function fishNum(typed){//少DUAL
	
    //歷史的時候用到
	//var daysql = " (select date_sub(curdate(),interval "+weekDayCount(weekday)+" day) from DUAL) ";
	//var daysql1 = " (select date_sub(curdate(),interval "+(weekDayCount(weekday)+7)+" day) from DUAL) ";
	
	var daysql = " (select date_sub(curdate(),interval "+weekDayCount(weekday)+" day) from DUAL) ";
	
	//統計本周內的捐贈數量
	var sql = "  select a.*,b.`name`,SUM(num) znum from zz_fish_num a,zz_fish_type b where a.fish_type = b.id   and a.worldid = "+0+"  and characterId = "+player.getId()+"    AND a.paytime>= "+daysql+ " and a.fish_type  = "+ typed +" ";
	////java.lang.System.out.println(sql);
	var resultList = player.customSqlResult(sql);
	var count = 0;
	if(null!=resultList){
		for (var i = 0; i < resultList.size(); i++) {
	    var result = resultList.get(i);
	    if (result == null) {
	        break;
	    }
		count = result.get("znum");
		break;
		}
	}
	if(count==null){
		count =0;
	}
	return count;
}

//************************************************
function fishSort(typed){//少DUAL
	
    //歷史的時候用到
	//var daysql = " (select date_sub(curdate(),interval "+weekDayCount(weekday)+" day) from DUAL) ";
	//var daysql1 = " (select date_sub(curdate(),interval "+(weekDayCount(weekday)+7)+" day) from DUAL) ";
	
	var character = player.getId();
	var daysql = " (select date_sub(curdate(),interval "+weekDayCount(weekday)+" day) from DUAL) ";
	var sql = "  select a.*,b.`name`,SUM(num) znum from zz_fish_num a,zz_fish_type b where a.fish_type = b.id   and a.worldid = "+0+"  AND a.paytime>= "+daysql+ " and a.fish_type  = "+ typed +" GROUP BY characterId ORDER BY znum desc limit 20 ";
	////java.lang.System.out.println(sql);
	var resultList = player.customSqlResult(sql);
	var characterId = 0;
	var sort = "20以後";
	if(null!=resultList){
		for (var i = 0; i < resultList.size(); i++) {
			var result = resultList.get(i);
			if (result == null) {
				break;
			}
			characterId = result.get("characterId");
			if(character == characterId){
				sort = i+1;
			}
		}
	}
	 
	return sort;
}

//---------------------------------------OK---------------------------
function weekDayCount(weekday){
	switch(weekday){
		case 1://星期天
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

function askNumber(str,def,min,max){
	if(player.getQuestRecordEx(9601)==1){
		npc.askNumberS(str,def,min,max);
	}else{
		npc.askNumber(str,def,min,max);
	}
}


function sendNext(selStr){
 	if(player.getQuestRecordEx(9601)==1){
		npc.sayNextE(selStr);
	}else{
		npc.sayNext(selStr);
	}
}

function asktext(selStr,min,max){
	if(player.getQuestRecordEx(9601)==1){
		npc.askTextS(selStr,min,max);
	}else{
		npc.askText(selStr,min,max);
	}
}

function ask(selStr){
	if(player.getQuestRecordEx(9601)==1){
		selection = npc.askMenuA(selStr,true);
	}else{
		//selection = npc.askAccept(selStr,true);
		selection = npc.askMenu(selStr,true);
	}
}


function sendOk(text){
		if(player.getQuestRecordEx(9601)==1){
  		npc.say(text);
		}else{
			npc.say(text);
		}
		//cm.dispose();
}

function askYesNo(text){
		if(player.getQuestRecordEx(9601)==1){
  		npc.askYesNoE(text);
		}else{
			npc.askYesNo(text);
		}
}