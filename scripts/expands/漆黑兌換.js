var a = 0;
var text;
var selects; //記錄玩家的選項
var buynum = 0;
var itemlist = Array(
			
			
Array(1162080, 50),//真挨蘇武器			
Array(1162081, 50),//真挨蘇武器			
Array(1162082, 50),//真挨蘇武器			
Array(1162083, 50),//真挨蘇武器			
Array(1032316, 50),//真挨蘇武器			
Array(1132308, 50),//真挨蘇武器			
Array(1012632, 50),//真挨蘇武器			
Array(1022278, 50),//真挨蘇武器			
Array(1122430, 50),//真挨蘇武器			
Array(1113306, 50),//真挨蘇武器			
Array(1182285, 50)//真挨蘇武器			
//Array(1190555, 200),//真挨蘇武器			
//Array(1190556, 200),//真挨蘇武器			
//Array(1190557, 200),//真挨蘇武器			
//Array(1190558, 200),//真挨蘇武器			
//Array(1190559, 200)//真挨蘇武器			
		
			

		


);
var buynum = 1;
 
					text = "#r#h0#,#e#k您可以在這裡兌換#e#r漆黑裝備#n#k,#r 請選擇你想要兌換的物品 \r\n#r";
					for (var i=0; i<itemlist.length; i++) {
						var validtime = "";
						if (itemlist[i][2]!=null) {
							validtime="/ #e"+itemlist[i][2]+"天權#n";
						}
						text += "#b#L" + i + "##i" + itemlist[i] + ":##t" + itemlist[i] + "# "+validtime+" - #r"+itemlist[i][1]+"個#r#v4310330#閃耀硬幣  \r\n";
						
					}
			selects = npc.askMenuA(text);
         
          var yes =   npc.askYesNo("你想兌換" + buynum + "個#r#i" + itemlist[selects][0] + "##k？\r\n你將使用掉" + (buynum * itemlist[selects][1]) + "閃耀硬幣。");
       if(yes ==1){
		   if(!player.canGainItem(itemlist[selects][0], buynum)){
			   npc.say("背包空間不足");
		   }else if (player.hasItem(4310330,buynum * itemlist[selects][1])) {
				if (itemlist[selects][2]!=null) {
					var timeStamp = java.lang.System.currentTimeMillis();
					var expirationDate = timeStamp+itemlist[selects][2]*86400*1000;
					let newItem = player.makeItemWithId(itemlist[selects][0]);

					newItem.setExpiration(expirationDate);
					player.gainItem(newItem);
					player.loseItem(4310330,buynum * itemlist[selects][1]);   
					npc.say("兌換成功了！"); 
				} else {   
					player.gainItem(itemlist[selects][0], buynum);
					var number = buynum * itemlist[selects][1];                                                        
					player.loseItem(4310330,number);                                               
					npc.say("恭喜您成功兌換#i" + itemlist[selects][0] + ":# #r#t" + itemlist[selects][0] + "##k。");   																	   
				}
			} else {
				npc.say("對不起，你沒有足夠的郵票。");
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