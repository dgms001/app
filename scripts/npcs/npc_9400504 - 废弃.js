/*
 * NeroMS MapleStory server emulator written in Java
 * Copyright (C) 2017-2018  dgms
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* global npc, player */

/**
 * V核心大師
 * NpcId 1540945
 * @author dgms 
 */
 var tz1 = "#fEffect/CharacterEff/1022223/8/0#"; 
var tz2 = "#fEffect/CharacterEff/1022223/6/0#"; 
var tz3 = "#fEffect/CharacterEff/1022223/9/0#";
var tz4 = "#fEffect/CharacterEff/1022223/7/0#";
var rewardIcon = "#fUI/UIWindowString/Scenario/quest_info/scene/summary_icon/reward#";
var summaryIcon= "#fUI/UIWindowString/Scenario/quest_info/scene/summary_icon/summary#";
var title = "#fMap/MapHelper.img/weather/starPlanet/2#";
var click = "#fUI/UIMiniGame/mapleOneCard/Effect/screeneff/click/3#";

 

var text ="           #v3994081##v3991069##v3994070##v3994061##v3994073##v3994071##v3991069#"+"\r\n";
	//text+=ui("Disable")+ui("Disable")+ui("Disable")+"\r\n";
	text+=ui("Enable")+ui("Enable")+ui("Enable")+"\r\n";
	text+="      #v3013002##r#L1#進入游戲領取〖豪華禮包〗#l #v3013002#\r\n";
	text+="      #v3013002##r#L2#游戲特色設置〖萌新必看〗#l #v3013002#\r\n";
	text+="      #v3013002##r#L3#加入QQ群聊天〖交流攻略〗#l #v3013002#\r\n";
	text+="      #v3013002##r#L4#領取萌新禮包〖游戲官網〗#l #v3013002#\r\n";
	text+=ui("Enable")+ui("Enable")+ui("Enable")+"\r\n";

    if(!player.hasItem(2430154,1)){
		player.gainItem(2430154);
	}
	var response =npc.askMenu(text)
	if(response==1){
		player.runScript("new_joinmxd");
	}else if(response==2){
		
	}else if(response==3){
		player.openURL("https://jq.qq.com/?_wv=1027&k=5jNnVXg");
	}else if(response==4){
		
	}
function ui(title){
	var str = "";
	for(var i = 0;i<8;i++){
		str+= "#fUI/CashShop/CSBeauty/hairColor/"+title+"/"+i+"#";
	}
	return str;
}

function date(){
		
	var ca = java.util.Calendar.getInstance();
	var p3 = "#fUI/Basic.img/BtCoin/normal/0#";
	var year = ca.get(java.util.Calendar.YEAR); //獲得年份
	var month = ca.get(java.util.Calendar.MONTH) + 1; //獲得月份
	var day = ca.get(java.util.Calendar.DATE);//獲取日
	var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //獲得小時
	var minute = ca.get(java.util.Calendar.MINUTE);//獲得分鐘
	var second = ca.get(java.util.Calendar.SECOND); //獲得秒
	var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);

	var yeari = "#fUI/UIWindowString/Scenario/quest_info/clear/year#";
	var monthi = "#fUI/UIWindowString/Scenario/quest_info/clear/month#";
	var dayi ="#fUI/UIWindowString/Scenario/quest_info/clear/day#";
	var houri ="#fUI/UIWindowString/Scenario/quest_info/clear/hour#";
	var danceBattleTimer = "#fUI/UIWindow8/danceBattleTimer/icon#";
	var dian = "#fUI/CashShop/CSCoodination/number/.#";
	


	var NoticeIcon = "#fUI/UIWindowBT/WorldMap/NoticeIcon/0#";
	var win = "#fEffect/TwEff/violeta_hope/win/0#";
	var KnockDown0 = "#fEffect/PvPEff/KnockDown#fEffect/0#";

	var text =" ";
	text += "#fUI/UIPVP/MiniMapIcon/revenge#";
	//if(year.toString().length==4){
	//	text = icon(year.toString().substr(0,1))+icon(year.toString().substr(1,1))+icon(year.toString().substr(2,1))+icon(year.toString().substr(3,1))+yeari;
	//}
	if(month.toString().length==2){
		text += icon(month.toString().substr(0,1))+icon(month.toString().substr(1,1))+monthi;
	}else{
		text += icon(month.toString().substr(0,1))+monthi;
	}
	if(day.toString().length==2){
		text += icon(day.toString().substr(0,1))+icon(day.toString().substr(1,1))+dayi;
	}else{
		text += icon(day.toString().substr(0,1))+dayi;
	}
	text += " ";
	if(hour.toString().length==2){
		text += icon(hour.toString().substr(0,1))+icon(hour.toString().substr(1,1))+houri;
	}else{
		text += icon(hour.toString().substr(0,1))+houri;
	}
	
	if(minute.toString().length==2){
		text += icon(minute.toString().substr(0,1))+icon(minute.toString().substr(1,1));
	}else{
		text += icon(minute.toString().substr(0,1));
	}
	text +=" ";
	//switch(weekday){
	//	case 1:
	//		text +=  "#v3800163#";//周日
	//	break;
	//	case 2:
	//		text +=  "#v3800157#";//周一
	//	break;
	//	case 3:
	//		text +=  "#v3800158#";
	//	break;
	//	case 4:
	//		text +=  "#v3800159#";
	//	break;
	//	case 5:
	//		text +=  "#v3800160#";
	//	break;
	//	case 6:
	//		text +=  "#v3800161#";
	//	break;
	//	case 7:
	//		text +=  "#v3800162#";
	//	break;
	//} 
	
	return text+"\r\n";
}

 

function icon(number){
	
	return "#fUI/UIWindowString/Scenario/quest_info/clear/number/"+number+"#";
	//return "#fUI/UIWindow8/HundredShooting/number/"+number+"#"
	//return "#fUI/UIWindow8/restaurantREDmini/stackNo/"+number+"#";
}