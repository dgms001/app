var a = 0;
var text;
var selects; //記錄玩家的選項
var buynum = 0;
var itemlist = Array(
			
			
Array(1592019, 200),//真挨蘇武器			
Array(1542108, 200),//真挨蘇武器			
Array(1252093, 200),//真挨蘇武器			
Array(1552110, 200),//真挨蘇武器			
Array(1582017, 200),//真挨蘇武器			
Array(1532144, 200),//真挨蘇武器			
Array(1522138, 200),//真挨蘇武器			
Array(1492231, 200),//真挨蘇武器			
Array(1482216, 200),//真挨蘇武器			
Array(1472261, 200),//真挨蘇武器			
Array(1372222, 200),//真挨蘇武器			
Array(1362135, 200),//真挨蘇武器			
Array(1342101, 200),//真挨蘇武器			
Array(1412177, 200),//真挨蘇武器			
Array(1402251, 200),//真挨蘇武器			
Array(1382259, 200),//真挨蘇武器			
Array(1332274, 200),//真挨蘇武器			
Array(1322250, 200),//真挨蘇武器			
Array(1312199, 200),//真挨蘇武器			
Array(1302333, 200),//真挨蘇武器			
Array(1282016, 200),//真挨蘇武器			
Array(1272016, 200),//真挨蘇武器			
Array(1262017, 200),//真挨蘇武器			
Array(1242120, 200),//真挨蘇武器			
Array(1242116, 200),//真挨蘇武器			
Array(1232109, 200),//真挨蘇武器			
Array(1222109, 200),//真挨蘇武器			
Array(1212115, 200)//真挨蘇武器			
			

		


);
var buynum = 1;
 
					text = "#r#h0#,#e#k您可以在這裡兌換#e#r航海師裝備#n#k,#r 請選擇你想要兌換的物品 \r\n#r";
					for (var i=0; i<itemlist.length; i++) {
						var validtime = "";
						if (itemlist[i][2]!=null) {
							validtime="/ #e"+itemlist[i][2]+"天權#n";
						}
						text += "#b#L" + i + "##i" + itemlist[i] + ":##t" + itemlist[i] + "# "+validtime+" - #r"+itemlist[i][1]+"個#r#v4310156#航海師硬幣  \r\n";
						
					}
			selects = npc.askMenuA(text);
         
          var yes =   npc.askYesNo("你想兌換" + buynum + "個#r#i" + itemlist[selects][0] + "##k？\r\n你將使用掉" + (buynum * itemlist[selects][1]) + "航海師硬幣。");
       if(yes ==1){
		   if(!player.canGainItem(itemlist[selects][0], buynum)){
			   npc.say("背包空間不足");
		   }else if (player.hasItem(4310156,buynum * itemlist[selects][1])) {
				if (itemlist[selects][2]!=null) {
					var timeStamp = java.lang.System.currentTimeMillis();
					var expirationDate = timeStamp+itemlist[selects][2]*86400*1000;
					let newItem = player.makeItemWithId(itemlist[selects][0]);

					newItem.setExpiration(expirationDate);
					player.gainItem(newItem);
					player.loseItem(4310156,buynum * itemlist[selects][1]);   
					npc.say("兌換成功了！"); 
				} else {   
					player.gainItem(itemlist[selects][0], buynum);
					var number = buynum * itemlist[selects][1];                                                        
					player.loseItem(4310156,number);                                               
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