equip = player.getInventorySlot(1, 1);

if (player.getInventorySlot(1, 1) == null) {
	npc.say("第一格放上回真裝備");
} else {
	txt = "\r\n";
	txt += "#fs14##b";

	txt += "當前刻名裝備回真如下:\r\n";
	txt += "#v1052723#";
	txt += "\r\n";
	txt += "";
	txt += "";

	txt += "#L" + equip.getDataId() + "#回真滅龍盔甲#l\r\n";

	let sel = npc.askMenuS(txt);

	switch (equip.getDataId()) {  //抓贊助屬性 跟 強化中心屬性

		case 1052723:						//夢幻腰帶
			SATA4 = 400;	//4屬性    改屬
			ADAP = 400;	//攻擊 魔法攻擊
			HP = 5000;
			MP = 5000;
			BossD = 30;	//B商 
			IgnorePDR = 30;	//無視
			DamR = 0;	//傷害
			SATA4UPDATE = 0;	//強化屬性
			ADAPUPDATE = 0;	//
			BossDUPDATE = 0;
			IgnorePDRUPDATE = 0;	//無視
			DamRUPDATE = 0;	//傷害
			break;
		default:
			npc.broadcastPlayerNotice(16, "玩家" + player.getName() + "非常規回真,以記錄數據!");
			player.addEventValue("刻名裝備回真檢測", 1, 1000);
			npc.say("#fs14##b哈囉,別亂放沒有贊助的裝備,先行紀錄數據1次,目前已檢測" + player.getEventValue("刻名裝備回真檢測") + "次");

			break;
	}


	if (sel == equip.getDataId()) {
		equip = player.getInventorySlot(1, 1);

		if (equip.getBossDamageR() < BossD || equip.getIgnorePDR() < IgnorePDR || equip.getDamR() < DamR || equip.getPad() < ADAP || equip.getMad() < ADAP || equip.getStr() < SATA4 || equip.getDex() < SATA4 || equip.getInt() < SATA4 || equip.getLuk() < SATA4) {//篩選屬性
			player.addEventValue("刻名裝備回真檢測", 1, 1000);
			npc.broadcastPlayerNotice(16, "玩家" + player.getName() + "非常規回真,以記錄數據!");
			npc.say("#fs14##b此件裝備無任何贊助屬性,紀錄數據1次,目前已檢測" + player.getEventValue("刻名裝備回真檢測") + "次");
		} else {

			equip.setCHUC(equip.getCHUC());

			/*
			保留星力 強化+? 槌子  移除衝捲次數---------------------------------
			保留了潛在屬性
			*/
			equip.setBossDamageR(BossD);
			equip.setIgnorePDR(IgnorePDR);
			equip.setDamR(DamR);

			equip.setStr(SATA4);
			equip.setDex(SATA4);
			equip.setInt(SATA4);
			equip.setLuk(SATA4);
			equip.setPad(ADAP);
			equip.setMad(ADAP);
			equip.setMaxHp(HP);
			equip.setMaxMp(MP);
			equip.setRUC(equip.getRUC() + equip.getCUC());//回真捲數保留以敲捲數
			equip.setCUC(0);//卷軸已用歸零
			equip.setIUC(equip.getIUC());//黃金槌子
			equip.setIUC2(equip.getIUC2());//白金槌子
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