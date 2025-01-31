var status = 0;


var GC2 = "#fEffect/CharacterEff/1022223/2/0#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1112924/0/0#"; //"+z+"//小選項用
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var XD0 = "#fEffect/CharacterEff/1051366/0/0#";
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/9/icon#"; //最上面的

txt ="\t\t\t "+SR3+"#fs32##fc0xFF00caf2##e《闇黑龍王》"+SR3+"\r\n";
txt +=""+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+"\r\n";
txt += "#e#fs17##fc0xFFFFF300#";
txt += "\t\t\t\t#L1##v1112433##z1112433#強化#l\r\n";
txt += "\t\t\t   #L2##v1113149##z1113149#強化#l\r\n";
txt += "\t\t\t  #L3##v1032241##z1032241#強化#l\r\n";
txt += "\t\t\t#L4##v1122076##z1122076#強化#l\r\n";

let selection = npc.askMenuA(txt, true);

switch (selection) {
	case 1:
		player.runScript("龍之戒強化");
        break;
	case 2:
		player.runScript("銀花戒指強化");
        break;
	case 3:
		player.runScript("戴雅希杜斯耳環強化");
        break;
	case 4:
		player.runScript("混沌闇黑龍王的項鍊強化");
        break;
	
	
}