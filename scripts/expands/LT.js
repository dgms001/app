var open = true;
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //獲得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //獲得月份
var day = ca.get(java.util.Calendar.DATE);//獲取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //獲得小時
var min = ca.get(java.util.Calendar.MINUTE);//獲得分鐘
var second = ca.get(java.util.Calendar.SECOND); //獲得秒
var Time = year + "年";
Time += month + "月";
Time += day + "日";
Time += hour + "時";
Time += min + "分";
Time += second + "秒";
var openitem = 4000539;//4034671
item3 = 0;//player.updateQuestRecordEx(15901, "stage", 1);
//map.clearMobs();map.reset();
var event = npc.getEvent("skylt");
//stage = parseInt(event.getVariable("stage"));
//player.updateQuestRecordEx(15901, "stage", stage);
if (event == null || open == false) {
	npc.say("#b未開啟,請確認你的頻道為一分流,否則聯繫管理員#b\r\n#k");
	if (player.isGm()) {
		var YN = npc.askYesNo("是否開啟樂透？")
		if (YN == 1) {
			if (npc.makeEvent("skylt", true, player) == null) {
				npc.say("設置成功");
			}
		}
	}
}

var event = npc.getEvent("skylt");
let ltitem = 4033441;//4033442-4033450
str = "#fs14##h0#，你好，歡迎使用#fc0xFFf2a100#【金楓樂透】#k#fs12#\t\r\n\r\n"

/**/
開獎1 = event.getVariable("Count1");
開獎2 = event.getVariable("Count2");
開獎3 = event.getVariable("Count3");
stage2 = parseInt(event.getVariable("stage"));
best = player.getQuestRecordEx(15901, "stage");
ITEM1 = ltitem + 開獎1; ITEM2 = ltitem + 開獎2; ITEM3 = ltitem + 開獎3;
loseee = 300;//消費 多少金楓
bang = Array(5000, 2000, 200);//大>中>小 獎項金楓數量

/* 自定義介面 */
str += " 當前狀態：#b";//自動判斷當前狀態
if (event.getVariable("state") == 1) {
	str += "正在開獎";
} else {
	if (best > stage2) {//購買期數>當前
		str += "#r你已經購買彩卷，請等待開獎。";
	} else if (event.getVariable("state") == 2) {//是否開獎兌換
		if (best == stage2) {//期數=當前 顯示符合條件道具
			str += "" + ((player.getAmountOfItem(ITEM1) == 1) ? "#v" + ITEM1 + "#" : "#rX ") + "#b(1)  ";
			str += "" + ((player.getAmountOfItem(ITEM2) == 1) ? "#v" + ITEM2 + "#" : "#rX ") + "#b(2)  ";
			str += "" + ((player.getAmountOfItem(ITEM3) == 1) ? "#v" + ITEM3 + "#" : "#rX ") + "#b(3)  ";
		} else {//期數!=當前 過期彩卷不可兌換
			str += "#r你上次購買的已過期。";
		}
	} else {//不是=2 所以等待開獎0
		str += "未開獎請#r購買彩卷#b，待公告開獎成功。";
	}
}

/*if (player.getAmountOfItem(ITEM1) == 1){
	str += " #v"+ITEM1+"#"
}if (player.getAmountOfItem(ITEM2) == 1){
	str += " #v"+ITEM2+"#"
}if (player.getAmountOfItem(ITEM3) == 1){
	str += " #v"+ITEM3+"#"
}*/
//}
str += "#k\r\n 你購買的期數：#fc0xFF47a21d# [ " + best + " ] 期#k，\r\n";
str += " #b當前#fc0xFF47a21d# [ " + stage2 + " ] 期#k  #b開獎道具#k：";
if (event.getVariable("state") == 1) {
	str += "正在開獎";
} else {
	str += "" + event.getVariable("Count1") + "｜" + event.getVariable("Count2") + "｜" + event.getVariable("Count3") + "#n#k";
}

str += " #v" + (開獎1 + ltitem) + "# #v" + (開獎2 + ltitem) + "# #v" + (開獎3 + ltitem) + "#\r\n"
str += " 數字9選3，請在頻道1進行兌獎操作。\r\n"
str += " 金楓購買彩卷:[ #r" + loseee + "#k ]\r\n"
str += " 獎項:[ #r大-" + bang[0] + "  中-" + bang[1] + "  小-" + bang[2] + " #k]\r\n";
str += "數字對應道具說明:#b#e\r\n#fs16#";

for (let i = 1; i < 10; i++) {
	str += "#v" + (ltitem + i) + "#(" + i + ")";
	if (i % 5 == 0) { str += "\r\n"; }
}
item3 = 0;
str += " #e#n\r\n";
//str +=" 購買三種道具 順序無影響\r\n"


str += "\r\n#b是為自動兌獎/購買彩卷，否為顯示獎項資料";
var ys = npc.askYesNoS(str);
if (ys == 1) {
	{
		if (best == stage2) {
			if (event.getVariable("state") == 2) {//兌獎系統
				player.scriptProgressMessage("兌換系統開始");
				if (player.getAmountOfItem(ltitem + 開獎1) == 1) {
					item3++;
				} if (player.getAmountOfItem(ltitem + 開獎2) == 1) {
					item3++;
				} if (player.getAmountOfItem(ltitem + 開獎3) == 1) {
					item3++;
				}
				for (let i = 1; i < 10; i++) {
					player.loseItem(ltitem + i);
				}
				if (item3 == 3) {
					player.gainItem(4032053, bang[0]);
					npc.broadcastPlayerNotice(12, "恭喜玩家 " + player.getName() + " | 喜獲大獎。");
				} else if (item3 == 2) {
					player.gainItem(4032053, bang[1]);
					npc.broadcastPlayerNotice(12, "恭喜玩家 " + player.getName() + " | 恭喜獲得中獎，血賺不虧。");
				} else if (item3 == 1) {
					player.gainItem(4032053, bang[2]);
					npc.broadcastPlayerNotice(12, "恭喜玩家 " + player.getName() + " | 獲得小獎，再接再厲。");
				} else {
					//npc.broadcastPlayerNotice(12,"玩家 " + player.getName() + " | 殘念阿...");
					npc.sayS("兌換系統完畢未檢測到你中獎");
					player.scriptProgressMessage("兌換系統完畢");
				}
			}
		} else {
			npc.sayS("期數錯誤，跳過兌獎");
		}
	}
	{
		flag = false;
		if (best == stage2 + 1) {//購買期數>當前
			npc.sayS("#r你已經購買彩卷，請等待開獎。");
			flag = false;
		} else if (best == stage2 || best != stage2) {
			for (let i = 1; i < 10; i++) {
				if (player.getAmountOfItem(ltitem + i) > 0) {
					npc.sayS("清空彩卷道具才能購買，點選確認清空彩卷道具");
					for (let i = 1; i < 10; i++) {
						player.loseItem(ltitem + i);
					}
				}
			}
			if (event.getVariable("state") == 2) {
				player.scriptProgressMessage("目前是兌獎時間，待兌獎完成開放購買");
				player.scriptProgressMessage("目前是兌獎時間，待兌獎完成開放購買");
				player.showSystemMessage("目前是兌獎時間，待兌獎完成開放購買");
			} else if (event.getVariable("state") == 1) {
				player.scriptProgressMessage("目前是開獎時間");
				player.scriptProgressMessage("目前是開獎時間");
				player.showSystemMessage("目前是開獎時間");
			} else if (event.getVariable("state") == 0) {
				player.scriptProgressMessage("販售介面開始，選擇你要的數字購買");
				str = "請挑選你要的幸運數[1]\r\n"; str += "請不要重複購買\r\n";
				for (let i = 1; i < 10; i++) {
					str += "#v" + (ltitem + i) + "#(" + i + ")";
					if (i % 5 == 0) { str += "\r\n"; }
				}
				str += "\r\n1-9選一個數字購買";
				var Number1 = npc.askNumberS(str, 1, 1, 9);
				str = "請挑選你要的幸運數[2]\r\n"; str += "請不要重複購買，已選#v" + (ltitem + Number1) + "#\r\n";
				for (let i = 1; i < 10; i++) {
					str += "#v" + (ltitem + i) + "#(" + i + ")";
					if (i % 5 == 0) { str += "\r\n"; }
				}
				str += "\r\n1-9選一個數字購買";
				var Number2 = npc.askNumberS(str, 1, 1, 9);
				str = "請挑選你要的幸運數[3]\r\n"; str += "請不要重複購買，已選#v" + (ltitem + Number1) + "##v" + (ltitem + Number2) + "#\r\n";
				for (let i = 1; i < 10; i++) {
					str += "#v" + (ltitem + i) + "#(" + i + ")";
					if (i % 5 == 0) { str += "\r\n"; }
				}
				str += "\r\n1-9選一個數字購買";
				var Number3 = npc.askNumberS(str, 1, 1, 9);
				player.gainItem(ltitem + Number1, 1);
				player.gainItem(ltitem + Number2, 1);
				player.gainItem(ltitem + Number3, 1);
				player.loseItem(4032053, loseee);//stage
				stage = parseInt(event.getVariable("stage"));
				//player.setEventValue("樂透期數",10,1);
				player.updateQuestRecordEx(15901, "stage", stage + 1);
				npc.broadcastPlayerNotice(18, "玩家 " + player.getName() + " | 購買了 【金楓樂透】彩卷");
				npc.broadcastPlayerNotice(18, "無情提示 : 沒期數通知是錯誤的，請至一分流購買。");
				str = "你購買了 #r#v" + (ltitem + Number1) + "#｜#v" + (ltitem + Number2) + "#｜#v" + (ltitem + Number3) + "# #k彩卷\r\n";
				str += "確認後，可以在樂透介面查看你購買的期數";
				npc.sayS(str);
			}
		}
	}
} else {
	if (player.isGm()) {
		gmui1();
	} else {
		str = "";
		str += "當前開獎 :#v" + (開獎1 + ltitem) + "# #v" + (開獎2 + ltitem) + "# #v" + (開獎3 + ltitem) + "#\r\n"
		str += "#b#e大獎: 符合條件3個\r\n";
		str += "  1:#v" + (開獎1 + ltitem) + "# #v" + (開獎2 + ltitem) + "# #v" + (開獎3 + ltitem) + "#\r\n";
		str += "#b#e中獎: 符合條件2個\r\n";
		str += "  1:#v" + (開獎1 + ltitem) + "# #v" + (開獎2 + ltitem) + "#\r\n";
		str += "  2:#v" + (開獎1 + ltitem) + "# #v" + (開獎3 + ltitem) + "#\r\n";
		str += "  3:#v" + (開獎2 + ltitem) + "# #v" + (開獎3 + ltitem) + "#\r\n";

		str += "#b#e小獎: 符合條件1個\r\n";
		str += "  1:#v" + (開獎1 + ltitem) + "#  2:#v" + (開獎2 + ltitem) + "#  3:#v" + (開獎3 + ltitem) + "#\r\n";
		str += "#r如:#k開獎為 1｜5｜4，\r\n"
		str += " 你有身上有 #v" + (ltitem + 1) + "# #v" + (ltitem + 5) + "# #v" + (ltitem + 4) + "# = 大獎\r\n"

		//str +=" 條件(獎項-對應數字 = 可獲得金楓)\r\n #r大獎-3 = 5000#k｜中獎-2 = 2000｜小獎-1 = 500\r\n"

		let sel = npc.sayS(str, true);
	}
}
//gmui1();
function ui() {//測試運行
	txxt = "#b服務器當前時間： #r" + Time + " #k\r\n\r\n#e#b開放時間：\r\n#n#k 測試開放\r\n#k 入場消耗待定\r\n";
	txxt += "#k 輔助功能測試\r\n#b";


	let sel = npc.sayS(txxt, true);
}

function gmui1() {
	if (player.isGm()) {
		str = ""
		str += "#b#eGM功能說明:#n#k\r\n"
		//str +=" #b 擊殺時 #k｜套用額外掉落機率金楓n%\r\n";
		str += " #k開骰道具" + event.getVariable("Count1") + "｜" + event.getVariable("Count2") + "｜" + event.getVariable("Count3") + "\r\n";
		str += " state值  0:購買等待骰 1:骰後檢測 2:成功開獎兌換\r\n 目前為#r " + event.getVariable("state") + "#k\r\n";
		str += " stage值期數設定｜目前為 #r" + event.getVariable("stage") + " \r\n";
		//str +="#b#e附加功能:#n#k\r\n";
		str += "#L1#手動開獎#l #L2#結束兌獎#l #L3#玩家介面#l #L7#返回介面#l\r\n";
		str += "#L4#購買通知#l #L5#兌換通知#l #L6#手動通知#l #L8#通知#l";
		var YN = npc.askMenuS(str, true);
		if (YN == 0) {
		}
		if (YN == 1) {
			event.startTimer("newopen", 1000);//scheduledTimeout  //newopen
			npc.broadcastPlayerNotice(7, "" + player.getName() + " 使用了手動開獎");
			gmui1();
		}
		if (YN == 2) {
			event.startTimer("scheduledTimeout", 1000);//scheduledTimeout  //newopen
			npc.broadcastPlayerNotice(7, "" + player.getName() + " 手動結束了兌獎");
			gmui1();
		}
		if (YN == 3) {
			ui2();
		}
		if (YN == 4) {
			npc.broadcastPlayerNotice(8, "" + player.getName() + "：趕快購買，下好離手");
			gmui1();
		}
		if (YN == 5) {
			npc.broadcastPlayerNotice(8, "" + player.getName() + "：趕快兌獎。");
			gmui1();
		}
		if (YN == 6) {
			npc.broadcastPlayerNotice(8, "" + player.getName() + "：金楓樂透 獎落誰手？");
			gmui1();
		}
		if (YN == 7) {
			player.runScript("LT");
		}
		if (YN == 8) {
		}
	}
}


function ui2() {
	let ltitem = 4033441;//4033442-4033450
	開獎1 = event.getVariable("Count1");
	開獎2 = event.getVariable("Count2");
	開獎3 = event.getVariable("Count3");
	str = "";
	str += "當前開獎 :#v" + (開獎1 + ltitem) + "# #v" + (開獎2 + ltitem) + "# #v" + (開獎3 + ltitem) + "#\r\n"
	str += "#b#e大獎: 符合條件3個\r\n";
	str += "  1:#v" + (開獎1 + ltitem) + "# #v" + (開獎2 + ltitem) + "# #v" + (開獎3 + ltitem) + "#\r\n";
	str += "#b#e中獎: 符合條件2個\r\n";
	str += "  1:#v" + (開獎1 + ltitem) + "# #v" + (開獎2 + ltitem) + "#\r\n";
	str += "  2:#v" + (開獎1 + ltitem) + "# #v" + (開獎3 + ltitem) + "#\r\n";
	str += "  3:#v" + (開獎2 + ltitem) + "# #v" + (開獎3 + ltitem) + "#\r\n";

	str += "#b#e小獎: 符合條件1個\r\n";
	str += "  1:#v" + (開獎1 + ltitem) + "#  2:#v" + (開獎2 + ltitem) + "#  3:#v" + (開獎3 + ltitem) + "#\r\n";
	str += "#r如:#k開獎為 1｜5｜4，\r\n"
	str += " 你有身上有 #v" + (ltitem + 1) + "# #v" + (ltitem + 5) + "# #v" + (ltitem + 4) + "# = 大獎\r\n"

	//str +=" 條件(獎項-對應數字 = 可獲得金楓)\r\n #r大獎-3 = 5000#k｜中獎-2 = 2000｜小獎-1 = 500\r\n"
	let sel = npc.say(str, true);
}