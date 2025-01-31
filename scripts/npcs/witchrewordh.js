
var status = 0;
var GC2 = "#fEffect/CharacterEff/1022223/2/0#"; //藍色星星
var GC3 = "#fEffect/CharacterEff/1112924/0/0#"; //"+z+"//小選項用
var lq1 = "#fUI/UIWindow2.img/crossHunterUI/reward/button/normal/0#"
var lq2 = "#fUI/UIWindow2.img/crossHunterUI/reward/button/disabled/0#"

var GC2 = "#fEffect/CharacterEff/1022223/2/0#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1112924/0/0#"; //"+z+"//小選項用
var GC1 = "";
//var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var XD0 = "#fEffect/CharacterEff/1051366/0/0#";
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的
var p9 = "#fMap/MapHelper.img/weather/knitsWithWarmWinter/8#";
var zx50 = "#fMap/MapHelper.img/weather/lovelypartybear/7#";
var qq1 = "#fUI/EventShop/adventureShop/GradeBuyer/0#"
var qq2 = "#fUI/EventShop/adventureShop/GradeBuyer/1#"
var qq3 = "#fUI/EventShop/adventureShop/GradeBuyer/2#"
var qq4 = "#fUI/EventShop/adventureShop/GradeBuyer/3#"
var qq5 = "#fUI/EventShop/adventureShop/GradeBuyer/4#"
var qq6 = "#fUI/EventShop/adventureShop/GradeBuyer/5#"

var giftId = -1;
var giftToken = Array();
var gifts = null;
var txt = "";
//txt += ""+GC1+GC1+GC1+GC1+"\r\n";

txt = "\t      #fs32##fc0xFFE508F3##e" + zx50 + "全服補償" + zx50 + "\r\n#n";
txt += "" + p9 + p9 + p9 + p9 + p9 + p9 + p9 + p9 + p9 + p9 + p9 + p9 + p9 + p9 + p9 + "\r\n";
txt += "#fs14##b";
/*if(player.getEventValue("0325補償開通")<2){
txt += "#L1#0325主機問題補償\r\n";	
}*/
/*if(player.getEventValue("0408補償開通")<2){
txt += "#L2#0408補償\r\n";	
}
if(player.getEventValue("0411補償開通")<2){
txt += "#L3#0411補償\r\n";	
}
if(player.getEventValue("0412補償開通")<2){
txt += "#L4#0412補償\r\n";	
}*/
/*if(player.getAccountId() == 2363 && player.getEventValue("0501補償開通")<1){
txt += "#L21#0501-0514補償(2)\r\n";	
}*/
/*
if(player.getAccountId() <=2442 && player.getEventValue("0501補償開通")<1){
txt += "#L5#0501-0514補償(1)\r\n";	
}
if(player.getAccountId() > 2442 && player.getAccountId() <=2495 && player.getEventValue("0501補償開通")<1){
txt += "#L6#0501-0514補償(2)\r\n";	
}
if(player.getAccountId() > 2495 && player.getAccountId() <=2605 && player.getEventValue("0501補償開通")<1){
txt += "#L7#0501-0514補償(3)\r\n";	
}
if(player.getAccountId() > 2605 && player.getAccountId() <=2704 && player.getEventValue("0501補償開通")<1){
txt += "#L8#0501-0514補償(4)\r\n";	
}
if(player.getAccountId() > 2704 && player.getAccountId() <=2758 && player.getEventValue("0501補償開通")<1){
txt += "#L9#0501-0514補償(5)\r\n";	
}





let giftId = npc.askMenuS(txt,true);
if(giftId==21){
	if(player.getLevel() < 240 ){
		npc.say("#fs14##b玩家等級不足260等");
	}else {
		player.gainItem(4032053,16000);//黃金楓葉200W
		player.gainItem(4009411,8);//
		player.addEventValue("0501補償開通",1,1000);
		npc.broadcastNotice("玩家" + player.getName() + "領取0501-0514補償");
	}
	
}
if(giftId==5){
	if(player.getLevel() < 260 ){
		npc.say("#fs14##b玩家等級不足260等");
	}else {
		player.gainItem(4032053,20000);//黃金楓葉200W
		player.gainItem(4009411,10);//
		player.addEventValue("0501補償開通",1,1000);
		npc.broadcastNotice("玩家" + player.getName() + "領取0501-0514補償");
	}
	
}

if(giftId==6){
	if(player.getLevel() < 240 ){
		npc.say("#fs14##b玩家等級不足240等");
	}else {
		player.gainItem(4032053,16000);//黃金楓葉200W
		player.gainItem(4009411,8);//
		player.addEventValue("0501補償開通",1,1000);
		npc.broadcastNotice("玩家" + player.getName() + "領取0501-0514補償");
	}
	
}

if(giftId==7){
	if(player.getLevel() < 235 ){
		npc.say("#fs14##b玩家等級不足235等");
	}else {
		player.gainItem(4032053,12000);//黃金楓葉200W
		player.gainItem(4009411,6);//
		player.addEventValue("0501補償開通",1,1000);
		npc.broadcastNotice("玩家" + player.getName() + "領取0501-0514補償");
	}
	
}

if(giftId==8){
	if(player.getLevel() < 230 ){
		npc.say("#fs14##b玩家等級不足230等");
	}else {
		player.gainItem(4032053,8000);//黃金楓葉200W
		player.gainItem(4009411,4);//
		player.addEventValue("0501補償開通",1,1000);
		npc.broadcastNotice("玩家" + player.getName() + "領取0501-0514補償");
	}
	
}

if(giftId==9){
	if(player.getLevel() < 225 ){
		npc.say("#fs14##b玩家等級不足225等");
	}else {
		player.gainItem(4032053,4000);//黃金楓葉200W
		player.gainItem(4009411,2);//
		player.addEventValue("0501補償開通",1,1000);
		npc.broadcastNotice("玩家" + player.getName() + "領取0501-0514補償");
	}
	
}

if(giftId==1){
	
	if(player.getLevel() < 260 ){
		player.addEventValue("0325補償開通",0,1000);
		if(player.getEventValue("0325補償開通")>=1){
		player.gainItem(4032053,1000);//黃金楓葉200W
		player.gainItem(5062010,100);//黑色方塊
		player.gainItem(2023742,10);//領路者2階段
		player.addEventValue("0325補償開通",1,1000);
		npc.broadcastNotice("玩家" + player.getName() + "領取0325補償");
		open=false;
		npc.say("#fs14##b成功領取\r\n#r#v4032053##z4032053#*1000個\r\n#v5062010##z5062010#*100個\r\n#v2023742##z2023742#*10個\r\n");
				}
				
		
		if(open=false){
			
		} else {
			npc.say("#fs14##b玩家等級不足260等");
		}
		
	} else {
		player.gainItem(4032053,1000);//黃金楓葉200W
		player.gainItem(5062010,100);//黑色方塊
		player.gainItem(2023742,10);//領路者2階段
		player.addEventValue("0325補償開通",2,1000);
		npc.broadcastNotice("玩家" + player.getName() + "領取0325補償");
		npc.say("#fs14##b成功領取\r\n#r#v4032053##z4032053#*1000個\r\n#v5062010##z5062010#*100個\r\n#v2023742##z2023742#*10個\r\n");
	}
	
	
}
if(giftId==2){
	
	if(player.getLevel() < 250 ){
		player.addEventValue("0408補償開通",0,1000);
		if(player.getEventValue("0408補償開通")>=1){
			player.gainItem(4032053,3000);//黃金楓葉300W
			player.gainItem(4009411,5);//
			player.addEventValue("0408補償開通",1,1000);
			npc.broadcastNotice("玩家" + player.getName() + "領取0408補償");
			open=false;
			npc.say("#fs14##b成功領取\r\n#r#v4032053##z4032053#*3000個\r\n#v4009411##z4009411#*5個\r\n");
		}
		
		if(open=false){
			
		} else {
			npc.say("#fs14##b玩家等級不足250等");
		}
		
	} else {
		player.gainItem(4032053,3000);//黃金楓葉300W
		player.gainItem(4009411,5);//
		player.addEventValue("0408補償開通",2,1000);
		npc.broadcastNotice("玩家" + player.getName() + "領取0408補償");
		npc.say("#fs14##b成功領取\r\n#r#v4032053##z4032053#*3000個\r\n#v4009411##z4009411#*5個\r\n");
	}
	
	
}

if(giftId==3){
	
	if(player.getLevel() < 250 ){
		player.addEventValue("0411補償開通",0,1000);
		if(player.getEventValue("0411補償開通")>=1){
			player.gainItem(4032053,3000);//黃金楓葉300W
			player.gainItem(4009411,5);//
			player.addEventValue("0411補償開通",1,1000);
			npc.broadcastNotice("玩家" + player.getName() + "領取0411補償");
			open=false;
			npc.say("#fs14##b成功領取\r\n#r#v4032053##z4032053#*3000個\r\n#v4009411##z4009411#*5個\r\n");
		}
		
		if(open=false){
			
		} else {
			npc.say("#fs14##b玩家等級不足250等");
		}
		
	} else {
		player.gainItem(4032053,3000);//黃金楓葉300W
		player.gainItem(4009411,5);//
		player.addEventValue("0411補償開通",2,1000);
		npc.broadcastNotice("玩家" + player.getName() + "領取0411補償");
		npc.say("#fs14##b成功領取\r\n#r#v4032053##z4032053#*3000個\r\n#v4009411##z4009411#*5個\r\n");
	}
	
	
}

if(giftId==4){
	
	if(player.getLevel() < 250 ){
		player.addEventValue("0412補償開通",0,1000);
		if(player.getEventValue("0412補償開通")>=1){
			player.gainItem(4032053,3000);//黃金楓葉300W
			player.addEventValue("0412補償開通",1,1000);
			npc.broadcastNotice("玩家" + player.getName() + "領取0412補償");
			open=false;
			npc.say("#fs14##b成功領取\r\n#r#v4032053##z4032053#*3000個\r\n");
		}
		
		if(open=false){
			
		} else {
			npc.say("#fs14##b玩家等級不足250等");
		}
		
	} else {
		player.gainItem(4032053,3000);//黃金楓葉300W
		player.addEventValue("0412補償開通",2,1000);
		npc.broadcastNotice("玩家" + player.getName() + "領取0412補償");
		npc.say("#fs14##b成功領取\r\n#r#v4032053##z4032053#*3000個\r\n");
	}
	
	
}
