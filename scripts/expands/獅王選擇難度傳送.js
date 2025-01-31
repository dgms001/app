var sss = "慎重選擇,選擇錯誤則會沒有BOSS\r\n";
sss += "#L0##b返回普通模式#l  #L1##r返回困難模式#l\r\n";
let selection = npc.askMenu(sss);
switch (selection) {
	case 0:
		player.changeMap(211070102);
		break;
	case 1:
		player.changeMap(211070104);
		break;
}