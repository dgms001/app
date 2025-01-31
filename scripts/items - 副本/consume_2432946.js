/*
混色 混染髮色
無函數
天破無法更改
神子-貝塔無法更改
*/

let res;
let isAngel = false;
let isBeta = false;
	
if (player.getBeginner() == 6001) {
	npc.sayS("#fs14##b普通模式正常套用\r\n\r\n#r變身模式無法套用",true);
    isAngel = npc.askAngelicBuster() != 0;
} else if (player.getBeginner() == 10000) {
    isBeta = npc.askMenu("請選擇：\r\n#b#L0#神之子：阿爾法#l\r\n\r\n#r神之子：蓓塔 無法套用") != 0;
    //isBeta = npc.askMenu("請選擇：\r\n#b#L0#神之子：阿爾法#l\r\n#L1#神之子：蓓塔#l") != 0;//askCustomMixHair
}
// let number = npc.askNumber("#b#fs18##e請輸入髮型代碼"+player.getHair()+"", 0, 20000, 61437);
// faces = [number];
// item = 0;
//res = npc.askAvatar("當前選中髮型為: #b#z" + faces + "##r\r\n\r\n請確認是否要變更為該髮型？", faces, item, isAngel, isBeta);
res = npc.askCustomMixHair("我能把你現在的頭髮換個顏色。慢慢挑選你想要的發色吧！", isAngel, isBeta);
sel = res[0];
buy = res[1];
buy2 = res[2];


if (player.getLevel() >= 1) {
    //player.loseItem(item, 1);
    //player.setHair(faces[selection]);
	modify();
    /*npc.sayNext("#b#fs18##e完成了，享受你的新髮型吧!!");
} else {
    npc.sayNext("呃……你好像沒有 #v" + item + "# 啊？很抱歉，沒有 #v" + item + "# 的話，我不能給你做頭髮。");*/
}




function modify() {
        if (isAngel) {
			player.modifiedDressUp();
			// player.setSubHair(faces[sel]);
			// player.setMixBaseHairColor(sel);
			// player.setMixAddHairColor(buy);
			// player.setMixHairBaseProb(buy2);
			npc.sayNext("天使變身模式無法更改");
        } else if (isBeta) {
		   // player.setSubHair(faces[sel]);
			// player.setMixBaseHairColor(sel);
			// player.setMixAddHairColor(buy);
			// player.setMixHairBaseProb(buy2);
			npc.sayNext("貝塔無法更改");
        } else {
			// player.setHair(faces[sel]);
			player.setMixBaseHairColor(sel);
			player.setMixAddHairColor(buy);
			player.setMixHairBaseProb(buy2);
        }
        player.zeroTag(isBeta);
        npc.sayNext("#b#fs18##e完成了，享受你的新髮型吧!!\r\n ");
		player.loseItem(2432946,1);
}


/*function add() { //更新 資料庫 寫 欄位=X 條件 欄位=
    var sql = "update characters_keyvalue set value=? where characters_id=(玩家id) and key=SUB_HAIR";
    player.customSqlUpdate(sql);

}*/