var status = -1
var txt;
/*------------------------------------------------------------*/
var ltz45 = "#fMap/MapHelper.img/weather/starPlanet2/5#";
var ltz47 = "#fMap/MapHelper.img/weather/starPlanet/4#";
var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用
//var GC2 = "#fEffect/ItemEff/1070069/effect/walk1/2#"
推文次數 = player.getEventValue("推文次數");
var XD0 = "#fEffect/CharacterEff/1051366/0/0#"
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的
txt = "\t\t\t  " + SR3 + "#fs32##fc0xFF00caf2##e《領取獎勵》" + SR3 + "\r\n";
txt += "" + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + "";
txt += "#e#fs17##fc0xFFFFF300#\r\n";
txt += "#fs17##e#b";

txt += "玩家帳號ID:[ #r" + player.getAccountId() + "#b ]  累積推文次數:[ #r" + 推文次數 + " #b]\r\n";
txt += "#fs17##e#b#L500#領取獎勵#l";
txt += "" + ((推文次數 >= 5 && player.getEventValue("推文累積獎勵1") <= 0) ? "\r\n#L10#推文次數已達5次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 10 && player.getEventValue("推文累積獎勵2") <= 0) ? "\r\n#L11#推文次數已達10次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 15 && player.getEventValue("推文累積獎勵3") <= 0) ? "\r\n#L12#推文次數已達15次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 20 && player.getEventValue("推文累積獎勵4") <= 0) ? "\r\n#L13#推文次數已達20次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 25 && player.getEventValue("推文累積獎勵5") <= 0) ? "\r\n#L14#推文次數已達25次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 30 && player.getEventValue("推文累積獎勵6") <= 0) ? "\r\n#L15#推文次數已達30次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 35 && player.getEventValue("推文累積獎勵7") <= 0) ? "\r\n#L16#推文次數已達35次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 40 && player.getEventValue("推文累積獎勵8") <= 0) ? "\r\n#L17#推文次數已達40次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 45 && player.getEventValue("推文累積獎勵9") <= 0) ? "\r\n#L18#推文次數已達45次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 50 && player.getEventValue("推文累積獎勵10") <= 0) ? "\r\n#L19#推文次數已達50次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 55 && player.getEventValue("推文累積獎勵11") <= 0) ? "\r\n#L20#推文次數已達55次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 60 && player.getEventValue("推文累積獎勵12") <= 0) ? "\r\n#L21#推文次數已達60次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 65 && player.getEventValue("推文累積獎勵13") <= 0) ? "\r\n#L22#推文次數已達65次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 70 && player.getEventValue("推文累積獎勵14") <= 0) ? "\r\n#L23#推文次數已達70次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 75 && player.getEventValue("推文累積獎勵15") <= 0) ? "\r\n#L24#推文次數已達75次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 80 && player.getEventValue("推文累積獎勵16") <= 0) ? "\r\n#L25#推文次數已達80次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 85 && player.getEventValue("推文累積獎勵17") <= 0) ? "\r\n#L26#推文次數已達85次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 90 && player.getEventValue("推文累積獎勵18") <= 0) ? "\r\n#L27#推文次數已達90次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 95 && player.getEventValue("推文累積獎勵19") <= 0) ? "\r\n#L28#推文次數已達95次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 100 && player.getEventValue("推文累積獎勵20") <= 0) ? "\r\n#L29#推文次數已達100次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 105 && player.getEventValue("推文累積獎勵21") <= 0) ? "\r\n#L30#推文次數已達105次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 110 && player.getEventValue("推文累積獎勵22") <= 0) ? "\r\n#L31#推文次數已達110次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 115 && player.getEventValue("推文累積獎勵23") <= 0) ? "\r\n#L32#推文次數已達115次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 120 && player.getEventValue("推文累積獎勵24") <= 0) ? "\r\n#L33#推文次數已達120次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 125 && player.getEventValue("推文累積獎勵25") <= 0) ? "\r\n#L34#推文次數已達125次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 130 && player.getEventValue("推文累積獎勵26") <= 0) ? "\r\n#L35#推文次數已達130次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 135 && player.getEventValue("推文累積獎勵27") <= 0) ? "\r\n#L36#推文次數已達135次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 140 && player.getEventValue("推文累積獎勵28") <= 0) ? "\r\n#L37#推文次數已達140次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 145 && player.getEventValue("推文累積獎勵29") <= 0) ? "\r\n#L38#推文次數已達145次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 150 && player.getEventValue("推文累積獎勵30") <= 0) ? "\r\n#L39#推文次數已達150次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 155 && player.getEventValue("推文累積獎勵31") <= 0) ? "\r\n#L40#推文次數已達155次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 160 && player.getEventValue("推文累積獎勵32") <= 0) ? "\r\n#L41#推文次數已達160次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 165 && player.getEventValue("推文累積獎勵33") <= 0) ? "\r\n#L42#推文次數已達165次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 170 && player.getEventValue("推文累積獎勵34") <= 0) ? "\r\n#L43#推文次數已達170次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 175 && player.getEventValue("推文累積獎勵35") <= 0) ? "\r\n#L44#推文次數已達175次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 180 && player.getEventValue("推文累積獎勵36") <= 0) ? "\r\n#L45#推文次數已達180次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 185 && player.getEventValue("推文累積獎勵37") <= 0) ? "\r\n#L46#推文次數已達180次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 190 && player.getEventValue("推文累積獎勵38") <= 0) ? "\r\n#L47#推文次數已達190次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 195 && player.getEventValue("推文累積獎勵39") <= 0) ? "\r\n#L48#推文次數已達190次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 200 && player.getEventValue("推文累積獎勵40") <= 0) ? "\r\n#L49#推文次數已達200次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 205 && player.getEventValue("推文累積獎勵41") <= 0) ? "\r\n#L50#推文次數已達205次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 210 && player.getEventValue("推文累積獎勵42") <= 0) ? "\r\n#L51#推文次數已達210次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 215 && player.getEventValue("推文累積獎勵43") <= 0) ? "\r\n#L52#推文次數已達215次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 220 && player.getEventValue("推文累積獎勵44") <= 0) ? "\r\n#L53#推文次數已達220次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 225 && player.getEventValue("推文累積獎勵45") <= 0) ? "\r\n#L54#推文次數已達225次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 230 && player.getEventValue("推文累積獎勵46") <= 0) ? "\r\n#L55#推文次數已達230次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 235 && player.getEventValue("推文累積獎勵47") <= 0) ? "\r\n#L56#推文次數已達235次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 240 && player.getEventValue("推文累積獎勵48") <= 0) ? "\r\n#L57#推文次數已達240次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 245 && player.getEventValue("推文累積獎勵49") <= 0) ? "\r\n#L58#推文次數已達245次[#r領取獎勵#b]#l" : "") + "";
txt += "" + ((推文次數 >= 250 && player.getEventValue("推文累積獎勵50") <= 0) ? "\r\n#L59#推文次數已達250次[#r領取獎勵#b]#l" : "") + "";
let selection = npc.askMenuA(txt, true);

switch (selection) {
	case 10:
		player.gainItem(4032053, 1000);//黃金楓葉
		player.gainItem(4001713, 200);//定居金
		player.gainItem(5060048, 30);//黃金蘋果
		player.gainItem(2048761, 20);//覺醒的輪迴星火
		player.gainItem(2472000, 20);//白金槌子
		player.addEventValue("推文累積獎勵1", 1, 1000);
		npc.say("#b領取成功，感謝玩家的5次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計5天推文獎勵");
		break;
	case 11:
		player.gainItem(4009411, 5);//永恆的雪花
		player.addEventValue("推文累積獎勵2", 1, 1000);
		player.getPlayer().updateWorldShareInfo(994683002, "count", 1, false);
		npc.say("#b領取成功，感謝玩家的10次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計10天推文獎勵");
		break;
	case 12:
		player.gainItem(4032053, 1000);//黃金楓葉
		player.gainItem(4001713, 200);//定居金
		player.gainItem(5060048, 30);//黃金蘋果
		player.gainItem(2048761, 20);//覺醒的輪迴星火
		player.gainItem(2472000, 20);//白金槌子
		player.addEventValue("推文累積獎勵3", 1, 1000);
		npc.say("#b領取成功，感謝玩家的15次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計15天推文獎勵");
		break;
	case 13:
		player.gainItem(4009411, 5);//永恆的雪花
		player.addEventValue("推文累積獎勵4", 1, 1000);
		npc.say("#b領取成功，感謝玩家的20次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計20天推文獎勵");
		break;
	case 14:
		player.gainItem(4032053, 1000);//黃金楓葉
		player.gainItem(4001713, 200);//定居金
		player.gainItem(5060048, 30);//黃金蘋果
		player.gainItem(2048761, 20);//覺醒的輪迴星火
		player.gainItem(2472000, 20);//白金槌子
		player.addEventValue("推文累積獎勵5", 1, 1000);
		npc.say("#b領取成功，感謝玩家的25次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計25天推文獎勵");
		break;
	case 15:
		player.gainItem(4009411, 5);//永恆的雪花
		player.addEventValue("推文累積獎勵6", 1, 1000);
		npc.say("#b領取成功，感謝玩家的30次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計30天推文獎勵");
		break;
	case 16:
		player.gainItem(4032053, 1000);//黃金楓葉
		player.gainItem(4001713, 200);//定居金
		player.gainItem(5060048, 30);//黃金蘋果
		player.gainItem(2048761, 20);//覺醒的輪迴星火
		player.gainItem(2472000, 20);//白金槌子
		player.addEventValue("推文累積獎勵7", 1, 1000);
		npc.say("#b領取成功，感謝玩家的35次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計35天推文獎勵");
		break;
	case 17:
		player.gainItem(4009411, 5);//永恆的雪花
		player.addEventValue("推文累積獎勵8", 1, 1000);
		npc.say("#b領取成功，感謝玩家的40次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計40天推文獎勵");
		break;
	case 18:
		player.gainItem(4032053, 1000);//黃金楓葉
		player.gainItem(4001713, 200);//定居金
		player.gainItem(5060048, 30);//黃金蘋果
		player.gainItem(2048761, 20);//覺醒的輪迴星火
		player.gainItem(2472000, 20);//白金槌子
		player.addEventValue("推文累積獎勵9", 1, 1000);
		npc.say("#b領取成功，感謝玩家的45次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計45天推文獎勵");
		break;
	case 19:
		player.gainItem(4009411, 5);//永恆的雪花
		player.addEventValue("推文累積獎勵10", 1, 1000);
		npc.say("#b領取成功，感謝玩家的50次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計50天推文獎勵");
		break;
	case 20:
		player.gainItem(4032053, 1000);//黃金楓葉
		player.gainItem(4001713, 200);//定居金
		player.gainItem(5060048, 30);//黃金蘋果
		player.gainItem(2048761, 20);//覺醒的輪迴星火
		player.gainItem(2472000, 20);//白金槌子
		player.addEventValue("推文累積獎勵11", 1, 1000);
		npc.say("#b領取成功，感謝玩家的55次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計55天推文獎勵");
		break;
	case 21:
		player.gainItem(4009411, 5);//永恆的雪花
		player.addEventValue("推文累積獎勵12", 1, 1000);
		npc.say("#b領取成功，感謝玩家的60次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計60天推文獎勵");
		break;
	case 22:
		player.gainItem(4032053, 1000);//黃金楓葉
		player.gainItem(4001713, 200);//定居金
		player.gainItem(5060048, 30);//黃金蘋果
		player.gainItem(2048761, 20);//覺醒的輪迴星火
		player.gainItem(2472000, 20);//白金槌子
		player.addEventValue("推文累積獎勵13", 1, 1000);
		npc.say("#b領取成功，感謝玩家的65次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計65天推文獎勵");
		break;
	case 23:
		player.gainItem(4009411, 5);//永恆的雪花
		player.addEventValue("推文累積獎勵14", 1, 1000);
		npc.say("#b領取成功，感謝玩家的70次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計70天推文獎勵");
		break;
	case 24:
		player.gainItem(4032053, 1000);//黃金楓葉
		player.gainItem(4001713, 200);//定居金
		player.gainItem(5060048, 30);//黃金蘋果
		player.gainItem(2048761, 20);//覺醒的輪迴星火
		player.gainItem(2472000, 20);//白金槌子
		player.addEventValue("推文累積獎勵15", 1, 1000);
		npc.say("#b領取成功，感謝玩家的75次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計75天推文獎勵");
		break;
	case 25:
		player.gainItem(4009411, 5);//永恆的雪花
		player.addEventValue("推文累積獎勵16", 1, 1000);
		npc.say("#b領取成功，感謝玩家的80次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計80天推文獎勵");
		break;
	case 26:
		player.gainItem(4032053, 1000);//黃金楓葉
		player.gainItem(4001713, 200);//定居金
		player.gainItem(5060048, 30);//黃金蘋果
		player.gainItem(2048761, 20);//覺醒的輪迴星火
		player.gainItem(2472000, 20);//白金槌子
		player.addEventValue("推文累積獎勵17", 1, 1000);
		npc.say("#b領取成功，感謝玩家的85次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計85天推文獎勵");
		break;
	case 27:
		player.gainItem(4009411, 5);//永恆的雪花
		player.addEventValue("推文累積獎勵18", 1, 1000);
		npc.say("#b領取成功，感謝玩家的90次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計90天推文獎勵");
		break;
	case 28:
		player.gainItem(4032053, 1000);//黃金楓葉
		player.gainItem(4001713, 200);//定居金
		player.gainItem(5060048, 30);//黃金蘋果
		player.gainItem(2048761, 20);//覺醒的輪迴星火
		player.gainItem(2472000, 20);//白金槌子
		player.addEventValue("推文累積獎勵19", 1, 1000);
		npc.say("#b領取成功，感謝玩家的95次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計95天推文獎勵");
		break;
	case 29:
		player.gainItem(4009411, 5);//永恆的雪花
		player.addEventValue("推文累積獎勵20", 1, 1000);
		npc.say("#b領取成功，感謝玩家的100次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計100天推文獎勵");
		break;
	case 30:
		player.gainItem(4032053, 1500);//黃金楓葉
		player.gainItem(4001713, 300);//定居金
		player.gainItem(5060048, 50);//黃金蘋果
		player.gainItem(2048761, 15);//覺醒的輪迴星火
		player.gainItem(2472000, 10);//白金槌子
		player.addEventValue("推文累積獎勵21", 1, 1000);
		npc.say("#b領取成功，感謝玩家的105次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計95天推文獎勵");
		break;
	case 31:
		player.gainItem(4009411, 3);//永恆的雪花
		player.addEventValue("推文累積獎勵22", 1, 1000);
		npc.say("#b領取成功，感謝玩家的110次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計100天推文獎勵");
		break;
	case 32:
		player.gainItem(4032053, 1500);//黃金楓葉
		player.gainItem(4001713, 300);//定居金
		player.gainItem(5060048, 50);//黃金蘋果
		player.gainItem(2048761, 15);//覺醒的輪迴星火
		player.gainItem(2472000, 10);//白金槌子
		player.addEventValue("推文累積獎勵23", 1, 1000);
		npc.say("#b領取成功，感謝玩家的115次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計95天推文獎勵");
		break;
	case 33:
		player.gainItem(4009411, 3);//永恆的雪花
		player.addEventValue("推文累積獎勵24", 1, 1000);
		npc.say("#b領取成功，感謝玩家的120次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計100天推文獎勵");
		break;
	case 34:
		player.gainItem(4032053, 1500);//黃金楓葉
		player.gainItem(4001713, 300);//定居金
		player.gainItem(5060048, 50);//黃金蘋果
		player.gainItem(2048761, 15);//覺醒的輪迴星火
		player.gainItem(2472000, 10);//白金槌子
		player.addEventValue("推文累積獎勵25", 1, 1000);
		npc.say("#b領取成功，感謝玩家的125次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計95天推文獎勵");
		break;
	case 35:
		player.gainItem(4009411, 3);//永恆的雪花
		player.addEventValue("推文累積獎勵26", 1, 1000);
		npc.say("#b領取成功，感謝玩家的130次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計100天推文獎勵");
		break;
	case 36:
		player.gainItem(4032053, 1500);//黃金楓葉
		player.gainItem(4001713, 300);//定居金
		player.gainItem(5060048, 50);//黃金蘋果
		player.gainItem(2048761, 15);//覺醒的輪迴星火
		player.gainItem(2472000, 10);//白金槌子
		player.addEventValue("推文累積獎勵27", 1, 1000);
		npc.say("#b領取成功，感謝玩家的135次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計95天推文獎勵");
		break;
	case 37:
		player.gainItem(4009411, 3);//永恆的雪花
		player.addEventValue("推文累積獎勵28", 1, 1000);
		npc.say("#b領取成功，感謝玩家的140次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計100天推文獎勵");
		break;
	case 38:
		player.gainItem(4032053, 1500);//黃金楓葉
		player.gainItem(4001713, 300);//定居金
		player.gainItem(5060048, 50);//黃金蘋果
		player.gainItem(2048761, 15);//覺醒的輪迴星火
		player.gainItem(2472000, 10);//白金槌子
		player.addEventValue("推文累積獎勵29", 1, 1000);
		npc.say("#b領取成功，感謝玩家的145次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計95天推文獎勵");
		break;
	case 39:
		player.gainItem(4009411, 3);//永恆的雪花
		player.addEventValue("推文累積獎勵30", 1, 1000);
		npc.say("#b領取成功，感謝玩家的150次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計100天推文獎勵");
		break;
	case 40:
		getitem();//
		player.addEventValue("推文累積獎勵31", 1, 1000);
		npc.say("#b領取成功，感謝玩家的155次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計95天推文獎勵");
		break;
	case 41:
		getitem2();
		player.addEventValue("推文累積獎勵32", 1, 1000);
		npc.say("#b領取成功，感謝玩家的160次推文!!");
		break;
	case 42:
		getitem();//
		player.addEventValue("推文累積獎勵33", 1, 1000);
		npc.say("#b領取成功，感謝玩家的165次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計95天推文獎勵");
		break;
	case 43:
		getitem2();
		player.addEventValue("推文累積獎勵34", 1, 1000);
		npc.say("#b領取成功，感謝玩家的170次推文!!");
		break;
	case 44:
		getitem();//
		player.addEventValue("推文累積獎勵35", 1, 1000);
		npc.say("#b領取成功，感謝玩家的175次推文!!");
		break;
	case 45:
		getitem2();
		player.addEventValue("推文累積獎勵36", 1, 1000);
		npc.say("#b領取成功，感謝玩家的180次推文!!");
		break;
	case 46:
		getitem();//
		player.addEventValue("推文累積獎勵37", 1, 1000);
		npc.say("#b領取成功，感謝玩家的185次推文!!");
		break;
	case 47:
		getitem2();
		player.addEventValue("推文累積獎勵38", 1, 1000);
		npc.say("#b領取成功，感謝玩家的190次推文!!");
		break;
	case 48:
		getitem();//
		player.addEventValue("推文累積獎勵39", 1, 1000);
		npc.say("#b領取成功，感謝玩家的195次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計95天推文獎勵");
		break;
	case 49:
		getitem2();
		player.addEventValue("推文累積獎勵40", 1, 1000);
		npc.say("#b領取成功，感謝玩家的200次推文!!");
		break;
	case 50:
		getitem();//
		player.addEventValue("推文累積獎勵41", 1, 1000);
		npc.say("#b領取成功，感謝玩家的205次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計95天推文獎勵");
		break;
	case 51:
		getitem2();
		player.addEventValue("推文累積獎勵42", 1, 1000);
		npc.say("#b領取成功，感謝玩家的210次推文!!");
		break;
	case 52:
		getitem();//
		player.addEventValue("推文累積獎勵43", 1, 1000);
		npc.say("#b領取成功，感謝玩家的215次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計95天推文獎勵");
		break;
	case 53:
		getitem2();
		player.addEventValue("推文累積獎勵44", 1, 1000);
		npc.say("#b領取成功，感謝玩家的220次推文!!");
		break;
	case 54:
		getitem();//
		player.addEventValue("推文累積獎勵45", 1, 1000);
		npc.say("#b領取成功，感謝玩家的225次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計95天推文獎勵");
		break;
	case 55:
		getitem2();
		player.addEventValue("推文累積獎勵46", 1, 1000);
		npc.say("#b領取成功，感謝玩家的230次推文!!");
		break;
	case 56:
		getitem();//
		player.addEventValue("推文累積獎勵47", 1, 1000);
		npc.say("#b領取成功，感謝玩家的235次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計95天推文獎勵");
		break;
	case 57:
		getitem2();
		player.addEventValue("推文累積獎勵48", 1, 1000);
		npc.say("#b領取成功，感謝玩家的240次推文!!");
		break;
	case 58:
		getitem();//
		player.addEventValue("推文累積獎勵49", 1, 1000);
		npc.say("#b領取成功，感謝玩家的235次推文!!");
		//player.worldSpouseMessage(0x07, "[推文獎勵] : 恭喜 " + player.getChar().getName() + " 領取累計95天推文獎勵");
		break;
	case 59:
		getitem2();
		player.addEventValue("推文累積獎勵50", 1, 1000);
		npc.say("#b領取成功，感謝玩家的250次推文!!");
		break;


	case 500:
		player.runScript("獎勵發送");
		break;
}

function getAccountName() {
	var i = -1;
	var sql = "select name,id from accounts where id=" + player.getAccountId() + " order by name limit 1;";
	var push = player.customSqlResult(sql);
	if (push.size() > 0) {
		var result = push.get(0);
		var name = result.get("name");
	}

	return name;
}
function getitem() {
	player.gainItem(4032053, 1500);//黃金楓葉
	player.gainItem(4001713, 300);//定居金
	player.gainItem(5060048, 30);//黃金蘋果
	player.gainItem(2048761, 15);//覺醒的輪迴星火
	player.gainItem(2472000, 10);//白金槌子
}
function getitem2() {
	player.gainItem(4009411, 3);//永恆的雪花
}