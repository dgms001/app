var a = 0;
var text;
var selects; //記錄玩家的選項
var buynum = 0;
var itemlist = Array(
Array(5121087, 50),//蛙裡奧氣象效果			
Array(5121084, 50),//可妮兔氣象效果			
Array(5121083, 50),//布朗熊氣象效果						
Array(5011005, 250),//LINE FRIENDS貼紙特效 - 愛			
Array(5011002, 250),//LINE FRIENDS貼紙特效 - 反對			
Array(5011010, 250),//LINE FRIENDS貼紙特效 - 驚愕			
Array(5011008, 250),//LINE FRIENDS貼紙特效 - 疑問			
Array(5011004, 250),//LINE FRIENDS貼紙特效 - 道歉			
Array(5011007, 250),//LINE FRIENDS貼紙特效 - 稱贊			
Array(5011001, 250),//LINE FRIENDS貼紙特效 - 贊同			
Array(5011009, 250),//LINE FRIENDS貼紙特效 - 顯擺			
Array(5011006, 250),//LINE FRIENDS貼紙特效 - 憤怒			
Array(5011003, 250),//LINE FRIENDS貼紙特效 - 感謝			
Array(3018298, 400),// LINE FRIENDS長椅			
Array(3018297, 400),//人氣爆棚LINE FRIENDS椅子			
Array(3018299, 400),//LINE FRIENDS X 楓之谷椅子			
Array(3018300, 400),//可妮兔沙發			
Array(3018303, 400),//蛙裡奧沙發			
Array(3018301, 400),//布朗熊沙發			
Array(1115075, 300),//可妮兔聊天戒指			
Array(1115164, 300),//可妮兔名片戒指			
Array(1115074, 300),//布朗熊聊天戒指			
Array(1115163, 300),//布朗熊名片戒指			
Array(1115165, 300),//蛙裡奧名片戒指			
Array(1115076, 300),//蛙裡奧聊天戒指			
Array(3700532, 500),//我愛布朗熊稱號
Array(1143158, 500),//LINE FRIENDS 			
//Array(1143159, 800),//最愛可妮兔勛章			
Array(5000852, 300),//蛙裡奧含10回裝備			
Array(1005316, 300),//蛙裡奧玩偶帽			
Array(1053405, 300),//蛙裡奧玩偶服			
Array(1082737, 300),//蛙裡奧玩偶手套			
Array(1702896, 300),//蛙裡奧的葉子			
Array(1053403, 300),//可妮兔玩偶服			
Array(1005314, 300),//可妮兔玩偶帽			
Array(1082735, 300),//可妮兔玩偶手套			
Array(1103170, 300),//洞裡的可妮兔	
Array(1702898, 300),//可妮兔好開心！		
Array(1702894, 300)//可妮兔甜筒冰淇淋			

);
var buynum = 1;
 
					text = "#r#h0#,#e#k您可以在這裡兌換#e#r珍稀有趣道具#n#k,#r 請選擇你想要購買的物品 \r\n#r";
					for (var i=0; i<itemlist.length; i++) {
						var validtime = "";
						if (itemlist[i][2]!=null) {
							validtime="/ #e"+itemlist[i][2]+"天權#n";
						}
						text += "#L" + i + "##i" + itemlist[i] + ":##t" + itemlist[i] + "# "+validtime+" - #r"+itemlist[i][1]+"個#r#v4310143#首領金幣  \r\n";
						
					}
			selects = npc.askMenu(text);
         
          var yes =   npc.askYesNo("你想購買" + buynum + "個#r#i" + itemlist[selects][0] + "##k？\r\n你將使用掉" + (buynum * itemlist[selects][1]) + "首領金幣。");
       if(yes ==1){
		   if(!player.canGainItem(itemlist[selects][0], buynum)){
			   npc.say("背包空間不足");
		   }else if (player.hasItem(4310143,buynum * itemlist[selects][1])) {
				if (itemlist[selects][2]!=null) {
					var timeStamp = java.lang.System.currentTimeMillis();
					var expirationDate = timeStamp+itemlist[selects][2]*86400*1000;
					let newItem = player.makeItemWithId(itemlist[selects][0]);

					newItem.setExpiration(expirationDate);
					player.gainItem(newItem);
					player.loseItem(4310143,buynum * itemlist[selects][1]);   
					npc.say("購買成功了！"); 
				} else {   
					player.gainItem(itemlist[selects][0], buynum);
					var number = buynum * itemlist[selects][1];                                                        
					player.loseItem(4310143,number);                                               
					npc.say("恭喜您成功購買#i" + itemlist[selects][0] + ":# #r#t" + itemlist[selects][0] + "##k。");   																	   
				}
			} else {
				npc.say("對不起，你沒有足夠的首領金幣。");
			} 
	   }
            

function askNumber(str,def,min,max){
	if(cm.getQuestInfo(9601)==1){
		var number = npc.askNumberE(str,def,min,max);
	}else{
		var number = npc.askNumber(str,def,min,max);
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
		cm.askMenuA(selStr);
	}else{
		npc.askMenu(selStr,true);
	}
}


function sendOk(text){
		if(cm.getQuestInfo(9601)==1){
  		npc.sayE(text);
		}else{
			npc.say(text);
		}
		
}

function askYesNo(text){
		if(cm.getQuestInfo(9601)==1){
  		npc.askYesNoE(text);
		}else{
			npc.askYesNo(text);
		}
}