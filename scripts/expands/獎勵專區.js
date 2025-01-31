var status = -1
var txt;
/*------------------------------------------------------------*/

var ltz45 = "#fMap/MapHelper.img/weather/starPlanet2/5#";  //
var ltz47 = "#fMap/MapHelper.img/weather/starPlanet/4#";  //

var GC2 = "#fEffect/CharacterEff/1022223/2/0#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1112924/0/0#"; //"+z+"//小選項用
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var XD0 = "#fEffect/CharacterEff/1051366/0/0#";
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的

txt = "\t\t   " + SR3 + "#fs32##fc0xFF00caf2##e《領取獎勵》" + SR3 + "\r\n";
txt += "" + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + "\r\n";
txt += "#e#fs17##fc0xFFFFF300#";
txt += "#fs17##e     #L1#等級獎勵#l    #L2#簽到獎勵#l   #L3#領取個人獎勵#l\r\n";
txt += "\t #L6#全服補償#l    #L7#全服獎勵#l\r\n";
txt += "\t\t#L4#分享獎勵說明#l  #L5#前往分享文章#l\r\n";
txt += "\t\t\t\t  #fs20##r#L10#【返回】#l";
txt += "";
txt += "\t\t#b";


txt += "\t";
//txt += "#L944#" + ltz45 + " boss掉落#l#L945#" + ltz45 + " boss事件#l";
let selection = npc.askMenuA(txt, true);

switch (selection) {
	case 1:
		player.runScript("等級獎勵");
		break;
	case 2:
		player.runScript("在線獎勵");
		break;
	case 3:
		player.runScript("推文獎勵");
		break;
	case 4:
		npc.say("#fs18##b#e玩家只要前往指定的臉書社群，\r\n推廣圓夢谷並標記5個人，\r\n並回報給管理方，經審核通過，\r\n便可領取豐厚獎勵。\r\n\r\n#d獎勵如下:\r\n#r#v5062010##z5062010# #b* 50\r\n#r#v5062020##z5062020# #b* 50\r\n#r#v5062500##z5062500# #b* 50\r\n#r#v2472000##z2472000# #b* 30\r\n#r#v5060048##z5060048# #b* 50\r\n#r#v4032053##z4032053# #b* 1000\r\n#r#v2433615#自選乾淨深淵武器 #b* 1\r\n#r#v2433616#自選乾淨深淵防具 #b* 3\r\n");
		break;
	case 5:
		//player.openURL("https://web-hosts.net/%E7%9F%B3%E9%9D%88%E8%B0%B7.html");
		break;
	case 6:
		/*if(player.getLevel() <= 200){
		npc.say("需200等才能領取哦!");
		} else if (player.getEventValue("全服補償1") >= 1){
		npc.say("此帳號已領取過!");
		} else {
		player.gainItem(5060048,20);
		player.gainItem(2450175,5);	
		player.gainItem(5121059,1);
		player.addEventValue("全服補償1",1,1000);	
		npc.say("領取完成!!!");
		}*/

		player.runScript("全服補償");
		break;
	case 7:
		player.runScript("全服獎勵");
		break;
	case 10:
		player.runScript("本服菜單");
		break;

}

