txt= "\r\n";
txt+= "SP初始化\r\n";
txt+= "#L0#當前職業+10SP#l\r\n";
txt+= "#L1#分身SP歸零#l";





let sel = npc.askMenuS(txt,true);
if (sel==0) {
	if (player.getSp() < 10 ){
		player.gainSp​(10);
		player.loseItem(2436125,1);
	}else{
		npc.sayS("當前技能點數["+player.getSp()+"]，大於10不能使用",true);
	}
}else if (sel==1) {
	addextendSP(player.getAccountId());
	player.loseItem(2436125,1);
	npc.sayS("成功將分身角色SP歸零",true);
}



function addextendSP(AccountId) { //更新 資料庫 寫 欄位=X 條件 欄位=4//0,0,0,0,0,0,0,0,0,0,
    var sql = "update characters set extendSP='0,0,0,0,0,0,0,0,0,0,' where accounts_id='"+AccountId+"' AND extendSP<>'0,0,0,0,0,0,0,0,0,0,'";
    player.customSqlUpdate(sql);

}

/*player.gainSp(0,-500);
player.gainSp(1,-500);
player.gainSp(2,-500);
player.gainSp(3,-500);
player.gainSp(4,-500);
player.gainSp(5,-500);
player.gainSp(6,-500);
player.gainSp(7,-500);
player.gainSp(8,-500);
player.gainSp(9,-500);*/