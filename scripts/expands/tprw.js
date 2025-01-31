/*  This is mada by dgms    
 *  This source is made by Funms Team
 *  
 *  功能:Day Quest
 *  
 *  @Author dgms 
 */

/* global java, cm */

var status = -1;
var ip=""
var mac=getmac();
var cal = new Date();
var Day_Of_Week = cal.getDay();

var dayInfo = Array(
	"周一的特別任務",
	"周二的特別任務",
	"周三的特別任務",
	"周四的特別任務",
	"周五的特別任務",
	"周六的特別任務",
	"周日的特別任務"
);

var macCount =player.getEventValue​("");


var str = "";
if(Day_Of_Week == 0) {
	Day_Of_Week = 7;
}
str += "\r\n#e小子,我手頭上有巨量你想要的東西！\r\n#i" + 3800157 + ":#~#i" + 3800163 + ":#之間都會發布危險的任務\r\n今天是#r#e" + getDayDes(Day_Of_Week) + "#k#n 如果你能幫我找到需要的東西，那麼我將可以給分你一些好東西！請打開地圖#i" + 3800529 + ":#，搜索關鍵詞想去哪裡點哪裡~\r\n";
str+="#r目前識別你的IP，電腦當天已經完成的次數為："+macCount+"\r\n";
str += "#e#r#L0#開始今天的任務#l\r\n";
str += "#e#b#L1#查看今天任務報酬#l\r\n\r\n ";
let selection = npc.askMenu(str);
if(selection == 0) {

	str = "#b                  #r" + dayInfo[Day_Of_Week - 1] + " #b\r\n";

	switch(Day_Of_Week) {
		case 1:
			str += "#b玩家【#h #】你好，今天是 #k合作的周一 #b，能夠把風獨眼獸之尾給我送來的話我可以給你#r50個主潛能#v5062009#和50個副潛能#k#v5062500#\r\n";
			str += "#e#b#i" + 4000013	 + ":# #z" + 4000013	 + "# x1000個\r\n";
			str += "#e#r注意：物品你可以通過怪物：風獨眼獸獲取：\r\n";
			str += "魔法密林周邊\r\n";
			str += "當前擁有#i" + 4000013	 + ":#數量：" + player.getAmountOfItem(4000013	) + " / 1000個\r\n";
			str += "#e#b你是否要兌換呢？";
			break;
		case 2:
			str += "#b玩家【#h #】你好，今天是 #k合作的周二 #b，能夠把白狼之尾給我送來的話我可以給你#r1顆珍珠#k#v4033821#\r\n";
			str += "#e#b#i" + 4000052	 + ":# #z" + 4000052	 + "# x1000個\r\n";
			str += "#e#r注意：物品你可以通過怪物：白狼獲取：\r\n";
			str += "雪域高原周邊\r\n";
			str += "當前擁有#i" + 4000052	 + ":#數量：" + player.getAmountOfItem(4000052	) + " / 1000個\r\n";
			str += "#e#b你是否要兌換呢？";
			break;
		case 3:
			str += "#b玩家【#h #】你好，今天是 #k合作的周三 #b，能夠把火焰半人馬的火花給我送來的話我可以給你#r1顆楓葉珠#k#v4031456#\r\n";
			str += "#e#b#i" + 4000232	 + ":# #z" + 4000232	 + "# x1000個\r\n";
			str += "#e#r注意：物品你可以通過怪物：火焰半人馬獲取：\r\n";
			str += "米納爾森林周邊\r\n";
			str += "當前擁有#i" + 4000232	 + ":#數量：" + player.getAmountOfItem(4000232	) + " / 1000個\r\n";
			str += "#e#b你是否要兌換呢？";
			break;
		case 4:
			str += "#b玩家【#h #】你好，今天是 #k合作的周四 #b，能夠把大海賊王的帽子給我送來的話我可以給你#r1顆神秘之影精華#k#v4310217#\r\n";
			str += "#e#b#i" + 4000135	 + ":# #z" + 4000135	 + "# x1000個\r\n";
			str += "#e#r注意：物品你可以通過怪物：大海賊王獲取：\r\n";
			str += "扭曲時間<4>隱藏地圖\r\n";
			str += "當前擁有#i" + 4000135	 + ":#數量：" + player.getAmountOfItem(4000135	) + " / 1000個\r\n";
			str += "#e#b你是否要兌換呢？";
			break;
		case 5:
			str += "#b玩家【#h #】你好，今天是 #k合作的周五 #b，能夠把綠色高帽給我送來的話我可以給你#r1顆500萬突破石頭#k#v2614078#\r\n";
			str += "#e#b#i" + 4000445	 + ":# #z" + 4000445	 + "# x1000個\r\n";
			str += "#e#r注意：物品你可以通過怪物：追憶的神官獲取：\r\n";
			str += "赫裡希安周邊\r\n";
			str += "當前擁有#i" + 4000445	 + ":#數量：" + player.getAmountOfItem(4000445	) + " / 1000個\r\n";
			str += "#e#b你是否要兌換呢？";
			break;
		case 6:
			str += "#b玩家【#h #】你好，今天是 #k合作的周六 #b，能夠把蟠桃核給我送來的話我可以給你#r10個六角魔方#k#v5062024#\r\n";
			str += "#e#b#i" + 4000282	 + ":# #z" + 4000282	 + "# x1000個\r\n";
			str += "#e#r注意：物品你可以通過怪物：猿公獲取：\r\n";
			str += "赫裡希安周邊\r\n";
			str += "當前擁有#i" + 4000282	 + ":#數量：" + player.getAmountOfItem(4000282	) + " / 1000個\r\n";
			str += "#e#b你是否要兌換呢？";
			break;
		case 7:
			str += "#b玩家【#h #】你好，今天是 #k合作的周日 #b，能夠把幽靈劇毒給我送來的話我可以給你#rX卷#k#v2431295\r\n";
			str += "#e#b#i" + 4000731 + ":# #z" + 4000731 + "# x1000個\r\n";
			str += "#e#r注意：物品你可以通過怪物：幽靈猩猩獲取：\r\n";
			str += "赫裡希安周邊\r\n";
			str += "當前擁有#i" + 4000731 + ":#數量：" + player.getAmountOfItem(4000731) + " / 1000個\r\n";
			str += "#e#b你是否要兌換呢？";
			break;
	}
	let sel = npc.askYesNo(str);
	if(sel == 1) {
		if(player.getLevel() < 200) {
			npc.say("#e#b注意：你的等級不夠200，請加油升級後再來提交任務吧！！！");
		} else if(player.getAccountEventValue("Day_Quest") > 0) {
			npc.say("#e#b注意：你今天已經完成過該任務了！！");
		} else if(player.getFreeSlots(2) < 5 || player.getFreeSlots(5) < 5) {
			npc.say("#e#r注意：你的 消耗欄 和 特殊欄 的空間不足 5 個空位！！！");
		}else if(macCount>=1){
			npc.say("#e#r 一個IP地址一天只能做一次突破任務哦。");
		} else {
			
			if(Day_Of_Week == 1) {
				if(player.hasItem(4000013, 1000)) {
					player.addAccountEventValue("Day_Quest",1);
					player.checkAccountEventValue("mac",9999);
					player.loseItem(4000013, 1000);
					player.gainItem(5062009, 5);
					player.gainItem(5062500, 5);					
					player.modifyCashShopCurrency(1, 5000);
					npc.broadcastPlayerNotice(0x01, " 公告 : 恭喜玩家[ " + player.getName() + " ]完成【大俠至尊寶】任務●ω●");
					npc.say("恭喜你完成了至尊寶的突破任務");
				}else{
					npc.say("請檢查材料是否足夠");
				}
			} else if(Day_Of_Week == 2) {
				if(player.hasItem(4000052, 1000)) {
					player.addAccountEventValue("Day_Quest",1);
					player.checkAccountEventValue("mac",9999);
					player.loseItem(4000052, 1000);
					player.gainItem(4033821, 1);
					player.modifyCashShopCurrency(1, 5000);
					npc.broadcastPlayerNotice(0x01, " 公告 : 恭喜玩家[ " + player.getName() + " ]完成【大俠至尊寶】任務●ω●");
					npc.say("恭喜你完成了至尊寶的突破任務");
				}else{
					npc.say("請檢查材料是否足夠");
				}
			} else if(Day_Of_Week == 3) {
				if(player.hasItem(4000232, 1000)) {
					player.addAccountEventValue("Day_Quest",1);
					player.checkAccountEventValue("mac",9999);
					player.loseItem(4000182,  1000);
					player.gainItem(4031456, 1);
					player.modifyCashShopCurrency(1, 5000);
					npc.broadcastPlayerNotice(0x01, " 公告 : 恭喜玩家[ " + player.getName() + " ]完成【大俠至尊寶】任務●ω●");
					npc.say("恭喜你完成了至尊寶的突破任務");
				}else{
					npc.say("請檢查材料是否足夠");
				}
			} else if(Day_Of_Week == 4) {
				if(player.hasItem(4000135, 1000)) {
					player.addAccountEventValue("Day_Quest",1);
					player.checkAccountEventValue("mac",9999);
					player.loseItem(4000135,  1000);
					player.gainItem(4310217, 1);
					player.modifyCashShopCurrency(1, 5000);
					npc.broadcastPlayerNotice(0x01, " 公告 : 恭喜玩家[ " + player.getName() + " ]完成【大俠至尊寶】任務●ω●");
					npc.say("恭喜你完成了至尊寶的突破任務");
				}else{
					npc.say("請檢查材料是否足夠");
				}
			} else if(Day_Of_Week == 5) {
				if(player.hasItem(4000445, 1000)) {
					player.addAccountEventValue("Day_Quest",1);
					player.checkAccountEventValue("mac",9999);
					player.loseItem(4000445,  1000);
					player.gainItem(2614078, 1);
					player.modifyCashShopCurrency(1, 5000);
					npc.broadcastPlayerNotice(0x01, " 公告 : 恭喜玩家[ " + player.getName() + " ]完成【大俠至尊寶】任務●ω●");
					npc.say("恭喜你完成了至尊寶的突破任務");
				}else{
					npc.say("請檢查材料是否足夠");
				}
			} else if(Day_Of_Week == 6) {
				if(player.hasItem(4000282, 1000)) {
					player.addAccountEventValue("Day_Quest",1);
					player.checkAccountEventValue("mac",9999);
					player.loseItem(4000282, 1000);
					player.gainItem(5062024, 10);
					player.modifyCashShopCurrency(1, 10000);
					npc.broadcastPlayerNotice(0x01, " 公告 : 恭喜玩家[ " + player.getName() + " ]完成【大俠至尊寶】任務●ω●");
					npc.say("恭喜你完成了至尊寶的突破任務");
				}else{
					npc.say("請檢查材料是否足夠");
				}
			}else if(Day_Of_Week == 7) {
				if(player.hasItem(4000731, 1000)) {
					player.addAccountEventValue("Day_Quest",1);
					player.checkAccountEventValue("mac",9999);
					player.loseItem(4000731, 1000);
					player.gainItem(2431295, 1);
					player.modifyCashShopCurrency(1, 10000);
					npc.broadcastPlayerNotice(0x01, " 公告 : 恭喜玩家[ " + player.getName() + " ]完成【大俠至尊寶】任務●ω●");
					npc.say("恭喜你完成了至尊寶的突破任務");
				}else{
					npc.say("請檢查材料是否足夠");
				}
			}
			/*
			else if(Day_Of_Week == 6) {

				if(player.getLevel() < 220) {
					npc.say("#e#b需要等級220級以上哦~");
				}else if(player.getOnlineTime()<200){
						npc.say("#e#b需要在線200分鐘哦~");
				} else {
						var item =player.getInventorySlot(-1,-11);
						if(item==null){
							npc.say("請裝備武器");
						}else{
							item.setLimitBreak(item.getLimitBreak() + 1000000);
							player.updateItem(-11,item);
							player.addAccountEventValue("Day_Quest",1);
							//player.gainItem(2437474, 2);
							npc.say("#e#b領取成功！！");
						}
						
				}
			} */
			
				
			
		}
	}
} else {
	var detial = "";
	switch(Day_Of_Week) {
		case 1: //星期1
			detial += "#e#r【周一的特別任務】\r\n";
			detial += "#e#b收集指定的物品後，你可以獲取：\r\n";
			detial += "主潛能#v5062009#50個和副潛能#v5062500#50個";
			break;
		case 2:
			detial += "#e#r【周二的特別任務】\r\n";
			detial += "#e#b收集指定的物品後，你可以通過兌換來得到：\r\n";
			detial += "珍珠（強化徽章和機器人）#v4033821#1個";
			break;
		case 3:
			detial += "#e#r【周三的特別任務】\r\n";
			detial += "#e#b收集指定的物品後，你可以通過兌換來得到：\r\n";
			detial += "楓葉珠（強化小暴君和漩渦臉眼）#v4031456#1個";
			break;
		case 4:
			detial += "#e#r【周四的特別任務】\r\n";
			detial += "#e#b收集指定的物品後，你可以通過兌換來得到：\r\n";
			detial += "神秘之影精華（強化暴君和埃蘇）#v4310217#1個";
			break;
		case 5:
			detial += "#e#r【周五的特別任務】\r\n";
			detial += "#e#b收集指定的物品後，你可以通過兌換來得到：\r\n";
			detial += "500萬突破石#v2614078#1個";
			break;
		case 6:
			detial += "#e#r【周六的特別任務】\r\n";
			detial += "#e#b收集指定的物品後，你可以通過兌換來得到：\r\n";
			detial += "六角魔方#v5062024#10個";
			break;
		case 7: //星期天
			detial += "#e#r【周日的特別任務】\r\n";
			detial += "#e#b收集指定的物品後，你可以通過兌換來得到：\r\n";
			detial += "X自選#v2431295#1個";
			break;
	}
	npc.say(detial);
}

function updateDate() {
	cal = java.util.Calendar.getInstance();
	Day_Of_Week = cal.get(java.util.Calendar.DAY_OF_WEEK) - 1;
}

function getDayDes(weekday) {
	switch(weekday) {
		case 1:
			return "周一";
		case 2:
			return "周二";
		case 3:
			return "周三";
		case 4:
			return "周四";
		case 5:
			return "周五";
		case 6:
			return "周六";
		case 7:
			return "周日";
		default:
			return "N/A";
	}
}

function getmac(){
	var sql = "select recentmacs from accounts where id =?";
	var result = player.customSqlResult(sql,player.getAccountId());
	
	mac =result.get(0).get("recentmacs");
	
	return mac;
}

function getCount(mac){
	var sql = "select sum(value) macCount from accounts_event where `event`='Day_Quest' and mac =?";
	var result = player.customSqlResult(sql,mac);
	macCount =result.get(0).get("macCount");
	if(macCount==null){
		macCount= 0;
	}
	return macCount;
}




function getEventCount(eventName) {

	var sql = "select value,time from accounts_event where accounts_id = ? and event =? ";

	var result = player.customSqlResult(sql, player.getAccountId(), eventName);

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("value");
		}
	} else {
		var sql = "insert into  accounts_event (accounts_id,world,event,type,value) values(?,?,?,?,?)";

		var result = player.customSqlInsert(sql, player.getAccountId(), player.getWorld(), eventName, 0, 0);
		return 0;
	}

}

function setEventCount(eventName, type, value) {
	
	var sql = "update accounts_event set type=?,value=value+?,mac=? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type, value, mac,player.getAccountId(), eventName);

}