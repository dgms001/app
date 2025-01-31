var status = -1
var txt;
/*------------------------------------------------------------*/
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"

txt = "#fs21##e#r你好,這裡是清理背包中心!!!\r\n";

txt += "#b可選定格數清理,請確定好格數,可清理#r1-128#b格\r\n"
txt += "\t  #fs16##L1##b裝備欄#l  #L2#消耗欄#l  #L3#裝飾欄#l\r\n\r\n\r\n";
txt += "\t\t#fs16##L4##b其他欄#l  #L5#特殊欄#l  #L6#時裝欄#l\r\n\r\n";
txt += "";







let selection = npc.askMenuA(txt, true);

switch (selection) {
	case 1:
		selection1 = npc.askNumber("#fs36##e#r當前為:裝備欄\r\n#b#fs36#請輸入從第幾格開始清理", 1, 1, 128);
		selection2 = npc.askNumber("#fs36##e#r當前為:裝備欄\r\n#b#fs36#請輸入清理到哪一格", 1, 1, 128);
		queren();
		for (var i = selection1; i <= selection2; i++) {
			var item = player.getInventorySlot(1, i);
			if (item == null) {
				i++;
			} else if (item.getTitle() != "") {
				//i++;
			} else if (item.getPad() > 3000 || item.getMad() > 3000 || item.getStr() > 1600 || item.getLuk() > 1060 || item.getInt() > 1060 || item.getDex() > 1600) {
			} else {

				player.loseInvSlot(parseInt(1), i);
			}
		}
		npc.askMenuA("#fs21##b已經幫你清理裝備欄" + selection1 + "-" + selection2 + "格");

		break;

	case 2:
		selection3 = npc.askNumber("#fs36##e#r當前為:消耗欄\r\n#b#fs36#請輸入從第幾格開始清理", 1, 1, 128);
		selection4 = npc.askNumber("#fs36##e#r當前為:消耗欄\r\n#b#fs36#請輸入清理到哪一格", 1, 1, 128);
		queren1();
		for (var i = selection3; i <= selection4; i++) {
			player.loseInvSlot(parseInt(2), i);
		}
		npc.askMenuA("#fs21##b已經幫你清理消耗欄" + selection3 + "-" + selection4 + "格");
		break;
	case 3:
		selection5 = npc.askNumber("#fs36##e#r當前為:裝飾欄\r\n#b#fs36#請輸入從第幾格開始清理", 1, 1, 128);
		selection6 = npc.askNumber("#fs36##e#r當前為:裝飾欄\r\n#b#fs36#請輸入清理到哪一格", 1, 1, 128);
		queren2();
		for (var i = selection5; i <= selection6; i++) {
			player.loseInvSlot(parseInt(3), i);
		}
		npc.askMenuA("#fs21##b已經幫你清理裝飾欄" + selection5 + "-" + selection6 + "格");
		break;
	case 4:
		selection7 = npc.askNumber("#fs36##e#r當前為:其他欄\r\n#b#fs36#請輸入從第幾格開始清理", 1, 1, 128);
		selection8 = npc.askNumber("#fs36##e#r當前為:其他欄\r\n#b#fs36#請輸入清理到哪一格", 1, 1, 128);
		queren3();
		for (var i = selection7; i <= selection8; i++) {
			player.loseInvSlot(parseInt(4), i);
		}
		npc.askMenuA("#fs21##b已經幫你刪除其他欄" + selection7 + "-" + selection8 + "格");
		break;
	case 5:
		selection9 = npc.askNumber("#fs36##e#r當前為:特殊欄\r\n#b#fs36#請輸入從第幾格開始清理", 1, 1, 128);
		selection10 = npc.askNumber("#fs36##e#r當前為:特殊欄\r\n#b#fs36#請輸入清理到哪一格", 1, 1, 128);
		queren4();
		for (var i = selection9; i <= selection10; i++) {
			player.loseInvSlot(parseInt(5), i);
		}
		npc.askMenuA("#fs21##b已經幫你刪除特殊欄" + selection9 + "-" + selection10 + "格");
		break;
	case 6:
		selection11 = npc.askNumber("#fs36##e#r當前為:時裝欄\r\n#b#fs36#請輸入從第幾格開始清理", 1, 1, 128);
		selection12 = npc.askNumber("#fs36##e#r當前為:時裝欄\r\n#b#fs36#請輸入清理到哪一格", 1, 1, 128);
		queren5();
		for (var i = selection11; i <= selection12; i++) {
			var item = player.getInventorySlot(6, i);
			if (item == null) {
				i++;
			} else if (item.getTitle() != "") {
				//i++;
			} else if (item.getPad() > 200 || item.getMad() > 200 || item.getStr() > 200 || item.getLuk() > 200 || item.getInt() > 200 || item.getDex() > 200) {
			} else {
				player.loseInvSlot(parseInt(6), i);
			}
		}
		npc.askMenuA("#fs21##b已經幫你刪除時裝欄" + selection11 + "-" + selection12 + "格");
		break;
	case 50:
		player.runScript("本服菜單");
		break;

}
function queren() {
	var txtA = "#fs21##e#r你好,下面是你要清理的裝備\r\n\r\n"

	txtA += "#fs16##b確定要清理#r  " + selection1 + "#b  到  #r" + selection2 + "#b  欄位的物品嗎?\r\n";

	for (var iA = selection1; iA <= selection2; iA++) {
		if (player.getInventorySlot(1, iA) == null) {
		} else {
			var itemA = player.getInventorySlot(1, iA).getDataId();
			txtA += "#i" + itemA + "#";
		}
	}
	//txtA += "\r\n確定要刪除以上的的物品嗎?";

	txtA += "\r\n#b如果你確定清理請輸入[#r確定#b]";
	sel = npc.askText(txtA, "", 1, 20);
	if (sel == "確定") {
	} else {
		npc.askMenuA("看來你還沒有想好,請想好再來!");
		return;
	}
}
function queren1() {
	var txtA = "#fs21##e#r你好,下面是你要清理的裝備\r\n\r\n"

	txtA += "#fs16##b確定要清理#r  " + selection3 + "#b  到  #r" + selection4 + "#b  欄位的物品嗎?\r\n";

	for (var iA = selection3; iA <= selection4; iA++) {
		if (player.getInventorySlot(2, iA) == null) {
		} else {
			var itemA = player.getInventorySlot(2, iA).getDataId();
			txtA += "#i" + itemA + "#";
		}
	}
	txtA += "\r\n#b如果你確定清理請輸入[#r確定#b]";
	sel = npc.askText(txtA, "", 1, 20);
	if (sel == "確定") {
	} else {
		npc.askMenuA("看來你還沒有想好,請想好再來!");
		return;
	}
}
function queren2() {
	var txtA = "#fs21##e#r你好,下面是你要清理的裝備\r\n\r\n"

	txtA += "#fs16##b確定要清理#r  " + selection5 + "#b  到  #r" + selection6 + "#b  欄位的物品嗎?\r\n";

	for (var iA = selection5; iA <= selection6; iA++) {
		if (player.getInventorySlot(3, iA) == null) {
		} else {
			var itemA = player.getInventorySlot(3, iA).getDataId();
			txtA += "#i" + itemA + "#";
		}
	}
txtA += "\r\n#b如果你確定清理請輸入[#r確定#b]";
	sel = npc.askText(txtA, "", 1, 20);
	if (sel == "確定") {
	} else {
		npc.askMenuA("看來你還沒有想好,請想好再來!");
		return;
	}
}
function queren3() {
	var txtA = "#fs21##e#r你好,下面是你要清理的裝備\r\n\r\n"

	txtA += "#fs14##b確定要清理#r  " + selection7 + "#b  到  #r" + selection8 + "#b  欄位的物品嗎?\r\n";

	for (var iA = selection7; iA <= selection8; iA++) {
		if (player.getInventorySlot(4, iA) == null) {
		} else {
			var itemA = player.getInventorySlot(4, iA).getDataId();
			txtA += "#i" + itemA + "#";
		}
	}
txtA += "\r\n#b如果你確定清理請輸入[#r確定#b]";
	sel = npc.askText(txtA, "", 1, 20);
	if (sel == "確定") {
	} else {
		npc.askMenuA("看來你還沒有想好,請想好再來!");
		return;
	}
}
function queren4() {
	var txtA = "#fs21##e#r你好,下面是你要清理的裝備\r\n\r\n"

	txtA += "#fs14##b確定要清理#r  " + selection9 + "#b  到  #r" + selection10 + "#b  欄位的物品嗎?\r\n";

	for (var iA = selection9; iA <= selection10; iA++) {
		if (player.getInventorySlot(5, iA) == null) {
		} else {
			var itemA = player.getInventorySlot(5, iA).getDataId();
			txtA += "#i" + itemA + "#";
		}
	}
txtA += "\r\n#b如果你確定清理請輸入[#r確定#b]";
	sel = npc.askText(txtA, "", 1, 20);
	if (sel == "確定") {
	} else {
		npc.askMenuA("看來你還沒有想好,請想好再來!");
		return;
	}
}
function queren5() {
	var txtA = "#fs21##e#r你好,下面是你要清理的裝備\r\n\r\n"

	txtA += "#fs14##b確定要清理#r  " + selection11 + "#b  到  #r" + selection12 + "#b  欄位的物品嗎?\r\n";

	for (var iA = selection11; iA <= selection12; iA++) {
		if (player.getInventorySlot(6, iA) == null) {
		} else {
			var itemA = player.getInventorySlot(6, iA).getDataId();
			txtA += "#i" + itemA + "#";
		}
	}
txtA += "\r\n#b如果你確定清理請輸入[#r確定#b]";
	sel = npc.askText(txtA, "", 1, 20);
	if (sel == "確定") {
	} else {
		npc.askMenuA("看來你還沒有想好,請想好再來!");
		return;
	}
}
