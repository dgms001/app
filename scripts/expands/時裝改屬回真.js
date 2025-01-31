equip = player.getInventorySlot(6, 1);
if (player.getInventorySlot(6, 1) == null) {
	npc.say("時裝第一格放上回真裝備");
} else {

	allstat = (equip.getPad() + equip.getMad() + equip.getStr() + equip.getDex() + equip.getInt() + equip.getLuk()) / 6;
	X = (Math.floor(equip.getDataId() / 10000));
	txt = "\r\n";
	txt += "#fs14##b時裝贊助屬性回真\r\n";

	txt += "#r條件 : \r\n";
	txt += "    時裝強化+9，平均數值250以上\r\n";
	txt += "    當前裝備屬性平均為 " + allstat + "\r\n";
	txt += "\r\n";
	txt += "";
	/*txt += "equip.getId() :"+equip.getId()+"\r\n";//不知名返回值
	txt += "equip.getDataId() :"+equip.getDataId()+"\r\n"; //道具ID
	txt += "equip.getMixColor() :"+equip.getMixColor()+"\r\n";//染色數值，不知名數值
	txt += "equip.getGrade() :"+equip.getGrade()+"\r\n";//潛能等級
	txt += "equip.getAnOption(1) :"+equip.getAnOption(1)+"\r\n";
	txt += "equip.getItemState() :"+equip.getItemState()+"\r\n";//524544 鎖定欄位
	txt += "equip.getExGradeOption() :"+equip.getExGradeOption()+"\r\n";//星火數值，不知名數值
	txt += "equip.getAttribute() :"+equip.getAttribute()+"\r\n";//1080 1次交換可能   40無法交換  0原生狀態*/
	/*txt += "刻名:"+equip.getTitle()+"\r\n";
	txt += "力量:"+equip.getStr()+" ";
	txt += "敏捷:"+equip.getDex()+" ";
	txt += "智慧:"+equip.getInt()+" ";
	txt += "幸運:"+equip.getLuk()+"\r\n";
	txt += "物理攻擊:"+equip.getPad()+" ";
	txt += "魔法攻擊:"+equip.getMad()+"\r\n";
	txt += "B傷害:"+equip.getBossDamageR()+" ";
	txt += "無視:"+equip.getIgnorePDR()+" ";
	txt += "傷害:"+equip.getDamR()+"\r\n";
	txt += "HP:"+equip.getMaxHp()+" ";
	txt += "MP:"+equip.getMaxMp()+"\r\n";
	txt += "星力 :"+equip.getCHUC()+"\r\n";//星力
	txt += "未使用卷軸數:"+equip.getRUC()+"\r\n";//可使用卷軸
	txt += "已使用卷軸數:"+equip.getCUC()+"\r\n";//卷軸已用
	txt += "黃金槌子:"+equip.getIUC()+"\r\n";//黃金槌子
	txt += "白金槌子:"+equip.getIUC2()+"\r\n";//白金槌子*/
	if (X == 103) {
		txt += "#fs14##r耳環#b被過濾掉了";
	} else if (X == 111) {
		txt += "#fs14##r戒指#b被過濾掉了";
	} else {
		txt += "#L1#回真贊助屬性裝備1#l\r\n";
	}
	let sel = npc.askMenuS(txt);

	switch (sel) {  //抓贊助屬性 跟 強化中心屬性
		case 1:
			SATA4 = 150;	//4屬性    改屬
			ADAP = 150;	//攻擊 魔法攻擊
			// BossD 		= 10;	//B商 
			// IgnorePDR	= 10;	//無視
			// DamR		= 10;	//傷害
			SATA4UPDATE = 11;	//強化屬性
			ADAPUPDATE = 11;	//
			// BossDUPDATE 	= 10;
			// IgnorePDRUPDATE	= 10;	//無視
			// DamRUPDATE		= 10;	//傷害
			break;

		default:
			// npc.broadcastPlayerNotice(16,"玩家" + player.getName() + "非常規回真,以記錄數據!");
			player.addEventValue("贊助裝備回真檢測", 1, 1000);
			npc.say("#fs14##b哈囉,別亂放沒有贊助的裝備,先行紀錄數據1次,目前已檢測" + player.getEventValue("贊助裝備回真檢測") + "次");

			break;
	}


	if (sel == 1) {
		equip = player.getInventorySlot(6, 1);

		if (equip.getTitle() == "") {
			equip.setTitle("強化+" + 0);
		}

		var str = equip.getTitle();
		var get = str.substring(3, 4);
		var qhcs = Number(get);
		equip.setTitle("強化+" + qhcs);

		if ((Math.floor(equip.getDataId() / 10000)) == 111) {
			npc.say();
		} else if (str != "強化+9") {
			npc.say("#fs14##b須達強化+9，才能使用該功能");
		} else if (allstat < 250) {
			player.addEventValue("贊助裝備回真檢測", 1, 1000);
			//npc.broadcastPlayerNotice(16,"玩家" + player.getName() + "非常規回真,以記錄數據!");
			npc.say("#fs14##b此件裝備無任何贊助屬性,紀錄數據1次,目前已檢測" + player.getEventValue("贊助裝備回真檢測") + "次\r\n如有疑慮請聯繫管理員");
		} else {

			// equip.setCHUC(equip.getCHUC());

			/*
			保留星力 強化+? 槌子  移除衝捲次數---------------------------------
			保留了潛在屬性
			*/
			// equip.setBossDamageR(BossD+(qhcs*BossDUPDATE));
			// equip.setIgnorePDR(IgnorePDR+(qhcs*IgnorePDRUPDATE));
			// equip.setDamR(DamR+(qhcs*DamRUPDATE));

			equip.setStr(SATA4);
			equip.setDex(SATA4);
			equip.setInt(SATA4);
			equip.setLuk(SATA4);
			equip.setPad(ADAP);
			equip.setMad(ADAP);
			// equip.setMaxHp(equip.getMaxHp());
			// equip.setMaxMp(equip.getMaxMp());
			equip.setTitle("強化+" + 0);
			// equip.setRUC(equip.getRUC()+equip.getCUC());//回真捲數保留以敲捲數
			// equip.setCUC(0);//卷軸已用歸零
			// equip.setIUC(equip.getIUC());//黃金槌子
			// equip.setIUC2(equip.getIUC2());//白金槌子
			// ---------------------------------------------------------

			// equip.setRUC(equip.getRUC());//可使用卷軸
			// equip.setCUC(equip.getCUC());//卷軸已用
			// equip.setIUC(equip.getIUC());//黃金槌子
			// equip.setIUC2(equip.getIUC2());//白金槌子


			player.updateItem(1, equip);
			player.showSystemMessage("通過檢測是屬於贊助裝備，一股神祕力量注入了");
		}
	}
}