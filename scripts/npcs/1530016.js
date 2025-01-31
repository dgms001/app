var status = 0;


var GC2 = "#fEffect/CharacterEff/1022223/2/0#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1112924/0/0#"; //"+z+"//小選項用
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var XD0 = "#fEffect/CharacterEff/1051366/0/0#";
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/9/icon#"; //最上面的

txt ="\t\t\t "+SR3+"#fs32##fc0xFF00caf2##e《西格諾斯》"+SR3+"\r\n";
txt +=""+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+XD0+"\r\n";
txt += "#e#fs17##fc0xFFFFF300#";
txt += "\t\t\t#L1##v1112597##z1112597#強化#l\r\n";


let selection = npc.askMenuA(txt, true);

switch (selection) {
	case 1:
		player.runScript("西格諾斯的克希努爾強化");
        break;

	
	
}