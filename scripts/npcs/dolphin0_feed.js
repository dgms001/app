
var event = npc.getEvent("Gailou"); 
    	if (event == null) {
		   npc.say("請在第1頻道進行。");
        }else if(event != null && event.getVariable("state").equals("false")){
			 npc.say("#e#k活動還未開啟或者活動已經結束，活動結束後獎勵會立即發放   #r活動時間:每隔1小時的0-10分鐘\r\n請關注我們蓋樓活動，多多參加。\r\n活動分一等獎，二等獎和三等獎.\r\n#r一等獎：#r第一個到達建樓高度的玩家獲得一等獎。#g      (1W抵用卷和郵票#i4002000#x1)\r\n#r二等獎：#r2-11名玩家為二等獎#g(3000-5000抵用卷,500點券)\r\n#r三等獎：#r隨機抽取一名活動參與者獲得#g(5000抵用卷)\r\n#e#r安慰獎：搶樓雙數時獎勵#v4021041#x1");
        }else if (player.getChannel() != 1) { 
        	npc.say("搶樓調整頻道,固定在1線!");
        } else if (event != null && event.getVariable("state").equals("true")) {
          npc.askYesNo("親愛的#r#h ##k您好，我是蓋樓活動員，本次活動時間為10分鐘.\r\n#r#e那就看你運氣啦 開始吧？");
        } else {
			npc.say("走到這裡不科學.");
		}
		        if (event != null && event.getVariable("state").equals("true")) {
		            event.setVariable("check", "" + (parseInt(event.getVariable("check")) + 1)); //設置點擊次數+1
		            var count = parseInt(event.getVariable("check")); //獲得總點擊次數
		            var max = parseInt(event.getVariable("maxCheck"));
		            var dj = rand(3000, 5000);
		            var dj3 = rand(4900, 5000);
					var randx =Math.random() * 100;
					
					if (count == max) {
		                player.modifyCashShopCurrency(2, + 10000);
		                player.gainItem(4002000, 1);
		                npc.broadcastPlayerNotice(0x3,"[搶樓活動]： 恭喜玩家 " + cm.getPlayer().getName() + " 在搶樓活動中獲得一等獎 10000抵用卷 郵票x1.[改造通知：搶樓雙層可以獲得混沌刀刃x1]");
		                npc.say("[搶樓活動] 恭喜你獲得了搶樓活動一等獎。\r\n獎金10000點抵用。");
		            } else if (count > max && count <= (max + 10)) {
		                player.modifyCashShopCurrency(2, + dj);
		                player.modifyCashShopCurrency(1, 500);
										//cm.gainItem(4002000, 1);
		                npc.broadcastPlayerNotice(0x3,"[搶樓活動]： 恭喜玩家 " + cm.getPlayer().getName() + " 在搶樓活動中獲得二等獎 " + dj + "抵用卷和500點券[改造通知：搶樓雙層可以獲得混沌刀刃x1]");
		                npc.say("恭喜你獲得了搶樓活動二等獎。\r\n獎金 3000 - 5000 點抵用不等。");
		            } else if (count > (max + 10)) {
		                player.modifyCashShopCurrency(2, + dj3);
		                player.gainItem(4032933, 1);
		                event.setVariable("state", "false");
		                event.setVariable("endEvent", "true");
		                npc.broadcastPlayerNotice(0x3,"[搶樓活動]： 恭喜玩家 " + cm.getPlayer().getName() + " 在搶樓活動中獲得三等獎 " + dj3 + "抵用卷.一朵玫瑰x1 本次搶樓活動已經結束...[改造通知：搶樓雙層可以獲得混沌刀刃x1]");
		                npc.say("恭喜你獲得了搶樓活動三等獎。\r\n獎金 5000 點抵用 一朵玫瑰x1 \r\n本次搶樓活動已經結束...");
		            }else if(randx<=10){
						//cm.dispose();
						player.runScript("new_validate");
						//cm.openNpc(1002009,"new_validate");
					}else if(parseInt(event.getVariable("check"))%2==0){
		            	 player.gainItem(4021041, 1);
		            	 npc.say("當前樓層: " + parseInt(event.getVariable("check")) + " 樓。為雙數樓層：獎勵#v4021041#x1");
		            } else {
		                npc.say("當前樓層: " + parseInt(event.getVariable("check")) + " 樓。");
		            }
		        } 
        



function rand(lbound, ubound) {
    return Math.floor(Math.random() * (ubound - lbound)) + lbound;
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
  		cm.sendOkE(text);
		}else{
			cm.sendOk(text);
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