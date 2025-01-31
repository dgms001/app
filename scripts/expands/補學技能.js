var GC2 = "#fEffect/CharacterEff/1022223/2/0#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1112924/0/0#"; //"+z+"//小選項用
//var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var GC1 = "";
var XD0 = "#fEffect/CharacterEff/1051366/0/0#";
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的

txt ="\t\t   "+SR3+"#fs32##fc0xFF00caf2##e《補學技能》"+SR3+"\r\n";
txt +=""+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+"\r\n";
txt += "#e#fs17##fc0xFFFFF300#";
txt += "\t\t\t   #L1#" + GC1 + "全職業補學技能#l\r\n";
txt += "\t\t\t\t  #fs20##r#L10#【返回】#l";

let selection = npc.askMenuA(txt, true);

switch (selection) {
    case 1:
	if(player.getJob() == 15500 || player.getJob() == 15510 || player.getJob() == 15511 || player.getJob() == 15512) {
        player.setSkillLevel(155101006, 1, 1, false);
        npc.say("#fs18##e#b#r[二轉-侵蝕控制]#b技能補學完成!");
        break;
	} else if(player.getJob() == 2500 || player.getJob() == 2510 || player.getJob() == 2511 || player.getJob() == 2512) {
	    player.completeQuest(38077, 0);
		player.changeMap(103000000);
        npc.say("點頭上燈泡跑劇情就能進化超技能囉");        
        break;
	} else if(player.getJob() == 17500 || player.getJob() == 17510 || player.getJob() == 17511 || player.getJob() == 17512) {
	    player.setSkillLevel(170001000, 1, 1, false);
	    player.setSkillLevel(170000001, 10, 10, false);
	    player.setSkillLevel(170001005, 1, 1, false);
	    player.setSkillLevel(175000006, 20, 20, false);
        player.setSkillLevel(175001003, 10, 10, false);		
        npc.say("#fs18##e#b#r[墨玄]#b技能補學習完成!");
        break;
	} else if(player.getJob() == 2700 || player.getJob() == 2710 || player.getJob() == 2711 || player.getJob() == 2712) {
	    player.setSkillLevel(27001100, 20, 20, false);
	    player.setSkillLevel(27001201, 20, 20, false);
	    player.setSkillLevel(27000106, 5, 5, false);
	    player.setSkillLevel(27000207, 5, 5, false);
	    player.setSkillLevel(20041005, 1, 1, false);
        npc.say("#fs18##e#b#r[夜光]#b技能補學習完成!");
        break;
	} else if(player.getJob() == 16400 || player.getJob() == 16410 || player.getJob() == 16411 || player.getJob() == 16412) {
	    player.setSkillLevel(164001004, 1, 1, false);	
		player.setSkillLevel(160001005, 1, 1, false);	
		player.setSkillLevel(160000076, 10, 10, false);	
        npc.say("#fs18##e#b#r[虎影]#b技能補學習完成!");
        break;
	} else if(player.getJob() == 15200 || player.getJob() == 15210 || player.getJob() == 15211 || player.getJob() == 15212) {
	    player.setSkillLevel(150001016, 1, 1, false);
        player.setSkillLevel(150000079, 1, 1, false);		
        npc.say("#fs18##e#b#r[伊利恩]#b技能補學習完成!");
        break;
	} else if(player.getJob() == 4100 || player.getJob() == 4110 || player.getJob() == 4111 || player.getJob() == 4112) {
	    player.setSkillLevel(40011291, 5, 5, false);
        player.setSkillLevel(40011292, 5, 5, false);		
        npc.say("#fs18##e#b#r[劍豪]#b技能補學習完成!");
        break;	
	} else if(player.getJob() == 3700 || player.getJob() == 3710 || player.getJob() == 3711 || player.getJob() == 3712) {
	    player.setSkillLevel(37000010, 1, 1, false);		
        npc.say("#fs18##e#b#r[爆拳槍神]#b技能補學習完成!");
        break;
	} else if(player.getJob() == 1100 || player.getJob() == 1110 || player.getJob() == 1111 || player.getJob() == 1112) {
	    player.setSkillLevel(10001245, 1, 1, false);
	    player.setSkillLevel(11121000, 30, 30, false);
		npc.say("#fs18##e#b#r[聖魂劍士]#b技能補學習完成!");
        break;
	} else if(player.getJob() == 1200 || player.getJob() == 1210 || player.getJob() == 1211 || player.getJob() == 1212) {
	    player.setSkillLevel(10001245, 1, 1, false);
	    player.setSkillLevel(12121000, 30, 30, false);
		npc.say("#fs18##e#b#r[烈焰巫師]#b技能補學習完成!");
        break;
    } else if(player.getJob() == 1300 || player.getJob() == 1310 || player.getJob() == 1311 || player.getJob() == 1312) {
	    player.setSkillLevel(10001245, 1, 0, false);
	    player.setSkillLevel(13121000, 30, 30, false);
		npc.say("#fs18##e#b#r[破風使者]#b技能補學習完成!");
        break;
    } else if(player.getJob() == 1400 || player.getJob() == 1410 || player.getJob() == 1411 || player.getJob() == 1412) {
	    player.setSkillLevel(10001245, 1, 1, false);
	    player.setSkillLevel(14121000, 30, 30, false);
		npc.say("#fs18##e#b#r[暗夜行者]#b技能補學習完成!");
        break;
	}else if(player.getJob() == 1500 || player.getJob() == 1510 || player.getJob() == 1511 || player.getJob() == 1512) {
	    player.setSkillLevel(10001245, 1, 1, false);
	    player.setSkillLevel(15121000, 30, 30, false);
		npc.say("#fs18##e#b#r[閃雷悍將]#b技能補學習完成!");
        break;
	} else if(player.getJob() == 15100 || player.getJob() == 15110 || player.getJob() == 15111 || player.getJob() == 15112) {
	    player.setSkillLevel(150020079,1,1,false);
		player.setSkillLevel(151000005,20,20,false);
		player.setSkillLevel(151001004,20,20,false);
		player.setSkillLevel(150021000,20,20,false);
		player.setSkillLevel(150021005,20,20,false);
		player.setSkillLevel(150020006,20,20,false);
		npc.say("#fs18##e#b#r[阿戴爾]#b技能補學習完成!");
        break;
    }else if(player.getJob() == 5100 || player.getJob() == 5110 || player.getJob() == 5111 || player.getJob() == 5112) {
	    player.setSkillLevel(50001245, 1, 1, false);
	    player.setSkillLevel(51121005, 30, 30, false);
		npc.say("#fs18##e#b#r[米哈逸]#b技能補學習完成!");
        break;
	} else if(player.getJob() == 6100 || player.getJob() == 6110 || player.getJob() == 6111 || player.getJob() == 6112) {
	    player.setSkillLevel(60001005, 1, 1, false);
		npc.say("#fs18##e#b#r[凱薩]#b技能補學習完成!");
        break;
	} else if(player.getJob() == 16212) {
	    player.setSkillLevel(160011075, 1, 1, false);
	    player.setSkillLevel(160010000, 1, 1, false);
	    player.setSkillLevel(160011074, 1, 1, false);
	    player.setSkillLevel(160010001, 2, 2, false);
		npc.say("#fs18##e#b#r[菈菈]#b技能補學習完成!");
        break;
	} else {
		npc.say("如有其他缺少技能請聯繫管理員");
		break;
	} 
	case 10:
		player.runScript("一鍵轉職");
        break;
}