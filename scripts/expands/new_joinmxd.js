 
var reward = Array(
	Array(1002186, 1),//透明帽
	Array(1012057 , 1),//透明面具
	Array(1022048 , 1),//透明眼飾
	Array(1032024 , 1),//透明耳環
	Array(1092064 , 1),//透明盾牌
	Array(1702585 , 1),//透明劍
	Array(1082102 , 1),//透明手套
	//Array(1102039 , 1),//透明披風 
	Array(1072153 , 1),//透明鞋   
	Array(1102325, 1),//翅膀
	Array(5000060, 1),	 
	Array(1142070, 1)
	
);

var reward1 = Array(
	Array(5062009 , 200),//超級神奇魔方
	Array(5062500 , 200),//大師附加神奇魔方
	Array(5152053, 100),// 皇家整容
	Array(5150052, 10),// 萬能高級美發
	Array(5153015, 10),// 萬能護膚
	Array(5152057, 10),// 萬能高級整形
	Array(5074000, 50),// 高質地喇叭
	Array(5060000, 3),// 裝備刻名 X3
	Array(2120000, 200),	//藥水
	Array(2432628, 1),	//拍賣
	Array(2430013, 1),	//技改buff選擇
	Array(2000005, 999)	//藥水
);
var tz1 = "#fEffect/CharacterEff/1022223/8/0#"; 
var tz2 = "#fEffect/CharacterEff/1022223/6/0#"; 
var tz3 = "#fEffect/CharacterEff/1022223/9/0#";
var tz4 = "#fEffect/CharacterEff/1022223/7/0#";
var rewardIcon = "#fUI/UIWindowString/Scenario/quest_info/scene/summary_icon/reward#";
var summaryIcon= "#fUI/UIWindowString/Scenario/quest_info/scene/summary_icon/summary#";
var title = "#fMap/MapHelper.img/weather/starPlanet/2#";
var click = "#fUI/UIMiniGame/mapleOneCard/Effect/screeneff/click/3#";

 start();
 //執行的主方法
 function start(){
	var questObj = getQuest();
	if(questObj.questId >0||(questObj.questId ==1 && questObj.flag == 0)){
		leaveTrue();
	}else{
		leaveFalse(); 
	}
	
 
 }
 
 
 //不能離開
 function leaveFalse(){
	var text =summaryIcon+"\r\n   ";
	text+="請打開背包#r#e[消耗欄]#k#n#r#e#v2430154##k#n接受任務。\r\n\r\n";
	text+="#r#e只有接受了盛夏櫻花谷任務,才能離開這個地圖。\r\n\r\n#k#n";
	text+="完成盛夏櫻花谷特色任務可以獲得:\r\n#v2430182##v5680150##v2433961##v2435537##v2433802##v4001714##v1113084##v2614057##v2431938##k\r\n";
	if(!player.hasItem(2430154,1)){
		player.gainItem(2430154,1);
	}
	npc.say(text);
 }
 
 //可以離開
 function leaveTrue(){
	 var text ="           #v3994081##v3991069##v3994070##v3994061##v3994073##v3994071##v3991069#"+"\r\n";
	//text+=ui("Disable")+ui("Disable")+ui("Disable")+"\r\n";
	text+="              #r#e盛夏櫻花谷QQ群：123621755\r\n";
	 
	 
	text +="        "+tz1+tz3+tz4+tz1+tz2+tz3+tz4+tz1+tz2+tz3+tz4+tz1+tz2+tz3+tz4+"\r\n";
	text +="           #L1##b點擊領取祝您游戲愉快#l\r\n"
	text +="\r\n        "+tz1+tz3+tz4+tz1+tz2+tz3+tz4+tz1+tz2+tz3+tz4+tz1+tz2+tz3+tz4+"\r\n";
	text +="       #r透明時裝,品克繽寵物,反外掛勛章：\r\n";
	 

	for(var i = 0;i<reward.length;i++){
		text +="#v"+reward[i][0]+"#"
	}
	text +="\r\n          #r美容券,寵物藥水,超級藥水：\r\n";
	for(var i = 0;i<reward1.length;i++){
		text +="#v"+reward1[i][0]+"#"
	}
	let sel = npc.askMenu(text);
	if(sel == 1){
		//打開new_joinmxd
		//player.openURL("https://jq.qq.com/?_wv=1027&k=5jNnVXg");
		join();
	}else{
		
	}
	
 }

function ui(title){
	var str = "";
	for(var i = 0;i<8;i++){
		str+= "#fUI/CashShop/CSBeauty/hairColor/"+title+"/"+i+"#";
	}
	return str;
}

function join(){ 
	// for (let i = 1; i <= 128; i++) {
	//	var equip = player.loseInvSlot(1, i);
	//	var equip = player.loseInvSlot(2, i);
	//	var equip = player.loseInvSlot(3, i);
	//	var equip = player.loseInvSlot(4, i);
	//	var equip = player.loseInvSlot(5, i);
	//}
	player.gainEquipInventorySlots(128);//裝備欄
	player.gainUseInventorySlots(128);//道具欄
	player.gainSetupInventorySlots(128);//設置欄
	player.gainEtcInventorySlots(128);//其他欄
	player.gainCashInventorySlots(128);//特殊欄
	player.gainExp(14000);
	player.gainExp(14000);
	player.gainExp(14000);
	player.gainExp(14000);
	player.gainExp(14000);
	player.gainExp(14000);
	player.gainExp(14000);
	player.gainExp(14000);
	player.gainExp(14000);
	player.changeMap(104000000);
	
	if(player.getPQLog("新手禮包")==0){
		player.addPQLog("新手禮包",1,3650);
		let text = "";
		for(var i =0;i<reward.length;i++){
			if(reward[i][0]==1702768){
				let newItem = player.makeItemWithId(1702768);
				newItem.setMaxHp(9999);
				newItem.setMaxMp(9999);
				player.gainItem(newItem);
			}else{
				player.gainItem(reward[i][0],reward[i][1]);
				text+="#i"+reward[i][0]+"#"
			}
		}
		for(var i =0;i<reward1.length;i++){
			player.gainItem(reward1[i][0],reward1[i][1]);
			text+="#i"+reward1[i][0]+"#"
		} 
		//歡迎〖"+player.getName()+"〗加入〖盛夏櫻花谷〗有你的世界更精彩, QQ群：632669383 
		//npc.broadcastPlayerNotice(1, "1 綠色")
		//npc.broadcastPlayerNotice(2, "2 粉紅")
		//npc.broadcastPlayerNotice(3, "3 淡黃") 
		//npc.broadcastPlayerNotice(4, "4 淡紅")
		//npc.broadcastPlayerNotice(5, "5 淡綠")
		//npc.broadcastPlayerNotice(6, "6 暗色提示")
		//npc.broadcastPlayerNotice(7, "7 黃色的")
		//npc.broadcastPlayerNotice(8, "8 黃色的")
		//npc.broadcastPlayerNotice(9, "9 藍色的")
		//npc.broadcastPlayerNotice(10, "10 出生的提示")
		//npc.broadcastPlayerNotice(11, "11")
		//npc.broadcastPlayerNotice(12, "12")
		//npc.broadcastPlayerNotice(13, "13")
		//npc.broadcastPlayerNotice(14, "14")
		npc.broadcastPlayerNotice(10, "系統公告：歡迎玩家〖"+player.getName()+"〗加入盛夏櫻花谷,有你的冒險更精彩.")
		npc.broadcastPlayerNotice(10, "游戲QQ群：123621755,幫助 #help 解卡 @ea")
		
			 
		//進行廣播
		
		npc.say(summaryIcon+"\r\n   歡迎#r#he##k來到盛夏櫻花谷,接下來您打開背包中#v2430154#進行盛夏櫻花谷的主線任務吧。\r\n  使用拍賣#v2432628#可以更快暢玩盛夏櫻花谷,放置鍵盤上效果更佳！\r\n"+rewardIcon+"\r\n   "+text);
	}else{
		npc.say("您已經領取過新手禮包。")
	}
 }
 
function  getQuest() {
	var charid =player.getId();
	var sql = "SELECT a.questId,questmsg,reward,a.flag,`CONDITION` con from zz_quest a LEFT JOIN zz_questinfo b on a.questId = b.questId where characterId= "+charid+" ";
	
	var resultList = player.customSqlResult(sql);
	var questObject = {};
	if (resultList.size()>0){
		var result = resultList.get(0);
	    if (result != null) {
			questObject.questId = result.get("questId");
			questObject.flag = result.get("flag");
			questObject.questmsg = result.get("questmsg");
			questObject.reward = result.get("reward");
			questObject.condition =result.get("con");
			questObject.frist = false;
		}
	}else{
		//說明是第一條
		 var sql = "SELECT questId,questmsg,reward,`condition` con from zz_questinfo a  where questId= 1 ";
		 var resultList1 = player.customSqlResult(sql);
		 if (resultList1.size()>0){
			var result = resultList1.get(0);
			if (result != null) {
				questObject.questId = 0;
				questObject.flag = 0;
				questObject.questmsg = 0;
				questObject.reward = 0;
				questObject.condition =0;
				questObject.frist = true;
			}
		 }
	}
	return questObject;
}