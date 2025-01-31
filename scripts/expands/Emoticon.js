/*
	if (player.getInventorySlot(2,1) == null){
		npc.say("請確認消耗欄位第一格為你要使用的表情組",true);
	}else{
	player.runScript("Emoticon");
	}
*/
A = player.getInventorySlot(2,1);
let AA = A.getDataId() ;//npc.​getItemId()
let BB ;
let C ;

	   if (AA == 2631080){ BB = 10000000; C = 9;
} else if (AA == 2631081){ BB = 10010001; C = 6;
} else if (AA == 2631082){ BB = 10020001; C = 4;
} else if (AA == 2631083){ BB = 10030001;
} else if (AA == 2631084){ BB = 10030002;
} else if (AA == 2631085){ BB = 10030003;
} else if (AA == 2631086){ BB = 10030004;
} else if (AA == 2631087){ BB = 10030005;
} else if (AA == 2631088){ BB = 10030006;
} else if (AA == 2631089){ BB = 10040001;
} else if (AA == 2631195){ BB = 10040002;
} else if (AA == 2631196){ BB = 10040003;
} else if (AA == 2631197){ BB = 10040004;
} else if (AA == 2631198){ BB = 10040005;
} else if (AA == 2631199){ BB = 10040006;
} else if (AA == 2631200){ BB = 10050001;
} else if (AA == 2631201){ BB = 10050002;
} else if (AA == 2631202){ BB = 10050003;
} else if (AA == 2631203){ BB = 10050004;
} else if (AA == 2631204){ BB = 10060001;
} else if (AA == 2631205){ BB = 10060002;
} else if (AA == 2631206){ BB = 10060003;
} else if (AA == 2631207){ BB = 10060004;
} else if (AA == 2631208){ BB = 10070001;
} else if (AA == 2631209){ BB = 10070002;
} else if (AA == 2631210){ BB = 10070003;
} else if (AA == 2631211){ BB = 10070004;
} else if (AA == 2631212){ BB = 10070005;
} else if (AA == 2631237){ BB = 10010001;
} else if (AA == 2631238){ BB = 10010002;
} else if (AA == 2631239){ BB = 10010003;
} else if (AA == 2631240){ BB = 10010004;
} else if (AA == 2631241){ BB = 10010005;
} else if (AA == 2631242){ BB = 10010006;
} else if (AA == 2631243){ BB = 10020001;
} else if (AA == 2631244){ BB = 10020002;
} else if (AA == 2631245){ BB = 10020003;
} else if (AA == 2631246){ BB = 10020004;
} else if (AA == 2631429){ BB = 10050001; C = 3;
} else if (AA == 2631430){ BB = 10060001; C = 3;
} else if (AA == 2631529){ BB = 10030001; C = 5;
} else if (AA == 2631530){ BB = 10040001; C = 5;
} else if (AA == 2631670){ BB = 10080001; 
} else if (AA == 2631671){ BB = 10080002;
} else if (AA == 2631672){ BB = 10080003;
} else if (AA == 2631673){ BB = 10080004;
} else if (AA == 2631674){ BB = 10080005;
} else if (AA == 2632071){ BB = 10140001;
} else if (AA == 2632072){ BB = 10140002;
} else if (AA == 2632073){ BB = 10140003;
} else if (AA == 2632074){ BB = 10140004;
} else if (AA == 2632075){ BB = 10140005;
} else if (AA == 2632142){ BB = 10140006;
} else if (AA == 2632386){ BB = 10170001;
} else if (AA == 2632387){ BB = 10170002;
} else if (AA == 2632388){ BB = 10170003;
} else if (AA == 2632389){ BB = 10170004;
} else if (AA == 2632390){ BB = 10170005;
} else if (AA == 2632391){ BB = 10170006;
} else if (AA == 2632689){ BB = 10160001;
} else if (AA == 2632690){ BB = 10160002;
} else if (AA == 2632691){ BB = 10160003;
} else if (AA == 2632692){ BB = 10150001;
} else if (AA == 2632693){ BB = 10150002;
} else if (AA == 2632694){ BB = 10150003;
} else if (AA == 2632703){ BB = 10170001; C = 5;
} else if (AA == 2632753){ BB = 10150001; C = 2;
} else if (AA == 2632754){ BB = 10160001; C = 2;
} else if (AA == 2632979){ BB = 10180001;
} else if (AA == 2632980){ BB = 10180002;
} else if (AA == 2632981){ BB = 10180003;
} else if (AA == 2632982){ BB = 10180004;
} else if (AA == 2632983){ BB = 10180005;
} else if (AA == 2632984){ BB = 10180006;
} else if (AA == 2632985){ BB = 10180007;
} else if (AA == 2632986){ BB = 10180008;
} else if (AA == 2632988){ BB = 10180003; C = 1;
} else if (AA == 2632989){ BB = 10180005; C = 1;
} else if (AA == 2633279){ BB = 10190001;
} else if (AA == 2633280){ BB = 10190002;
} else if (AA == 2633281){ BB = 10190003;
} else if (AA == 2633282){ BB = 10190004;
} else if (AA == 2633283){ BB = 10190005;
} else if (AA == 2633284){ BB = 10190006;
} else if (AA == 2633737){ BB = 10200001;
} else if (AA == 2633738){ BB = 10200002;
} else if (AA == 2633739){ BB = 10200003;
} else if (AA == 2633740){ BB = 10200004;
} else if (AA == 2633741){ BB = 10200005;
} else if (AA == 2633742){ BB = 10200006;
} else if (AA == 2634067){ BB = 10210001;
} else if (AA == 2634068){ BB = 10210002;
} else if (AA == 2634069){ BB = 10210003;
} else if (AA == 2634070){ BB = 10210004;
} else if (AA == 2634071){ BB = 10210005;
} else if (AA == 2634072){ BB = 10210006;

}

if(C == null){ C = 0;
}
if (AA == 2631100){//聊天貼圖欄位1格擴充券
	player.gainChatEmoticonSlots(1)​;
	player.loseItem(AA, 1);
} else if (AA == 2630293){//LINE FRIENDS 貼圖特效(永久)交換券
	item = [5011001,5011002,5011003,5011004,5011005,5011006,5011007,5011008,5011009,5011010];
	SS = Math.floor(Math.random() * item.length);
	player.gainItem(item[SS],1);
	player.loseItem(AA, 1);
} else if(BB == undefined){
		npc.say("#r消耗欄第一格放置你要使用的聊天貼圖\r\n");
	}else{
		txt = "嗨! #h0# ,\r\n";
		txt += "想獲得表情#e #z"+AA+"# #n嗎?\r\n";
		txt += "案'是'獲得該表情組.\r\n";
		txt += "#r請確認消耗欄第一格為你要使用的表情組\r\n";

		if (player.isGm()) {txt += "#kGM: "+AA+"  "+BB+"  "+C+"";}

		var ys = npc.askYesNoS(txt,true);
		if(ys == 1){
			for (var i = 0; i <= C; i++) {
				player.gainChatEmoticon(BB+i);
			}
		player.loseItem(AA, 1);
		}
	} 