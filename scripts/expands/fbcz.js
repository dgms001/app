var resetCount = 1;
var bosslist=new Array(												//1點券,2抵用,3余額,4道具    為4時 後面參數為道具id , 數量
	Array("Populatus_EASY",1,"帕普拉圖斯[簡單]"						,1,10000),
	Array("Populatus_NORMAL",1,"帕普拉圖斯[普通]"					,1,10000),
	Array("Populatus_HARD",1,"帕普拉圖斯[困難]"						,1,10000),
	Array("Zakum_Normal",2,"扎昆：普通模式"							,2,10000),
	Array("Zakum_Chaos",2,"扎昆：進階模式"							,3,10),
	Array("Zakum_Easy",2,"扎昆：簡單模式"							,4,4000000,100),
	Array("Hontale",3,"暗黑龍王"									,1,10000),
	Array("Hontale_Chaos",1,"進階暗黑龍王"							,1,10000),
	Array("PinkBeen",1,"品克繽"										,1,10000),
	Array("PinkBeen_Chaos",1,"混沌品克繽"							,2,10000),
	Array("VonLeon_Easy",1,"班·雷昂[簡單]"							,1,10000),
	Array("VonLeon_Normal",1,"班·雷昂[普通]"						,1,10000),
	Array("VonLeon_Hard",1,"班·雷昂[困難]"							,1,10000),
	Array("Hillah",2,"希拉"											,1,10000),
	Array("Hillah_Hard",1,"希拉[困難]"								,1,10000),
	Array("Shinas",2,"希納斯"										,1,10000),
	Array("Fairy",1,"妖精女王：艾菲尼婭"							,1,10000),
	//Array("蝙蝠怪",30,"蝙蝠怪"										,1,10000),
	Array("Caoong",1,"卡雄"											,1,10000),
	Array("NLC",3,"強化鉆機"									,1,10000),
	Array("普通模式<貝倫>",3,"普通模式<貝倫>"						,1,10000),
	Array("進階模式<貝倫>",1,"進階模式<貝倫>"						,1,10000),
	Array("普通模式<半半>",3,"普通模式<半半>"						,1,10000),
	Array("進階模式<半半>",1,"進階模式<半半>"						,1,10000),
	Array("普通模式<皮埃爾>",3,"普通模式<皮埃爾>"					,1,10000),
	Array("進階模式<皮埃爾>",1,"進階模式<皮埃爾>"					,4,4000000,1000),
	Array("普通模式<血腥女王>",3,"普通模式<血腥女王>"				,1,10000),
	Array("進階模式<血腥女王>",1,"進階模式<血腥女王>"				,1,10000),
	Array("Beidler",2,"貝勒德"										,1,10000),
	Array("Siwu",2,"斯烏"											,1,10000),
	Array("Siwu_Chaos",1,"斯烏<困難>"								,1,10000),
	Array("濃姬",1,"濃姬"											,1,10000),
	Array("火焰狼",1,"火焰狼"										,1,10000),
	Array("烏魯斯",1,"霸王烏魯斯"								,1,10000),
	Array("Ranmaru_Crazy",3,"CRAZY蘭丸"									,1,10000),
	Array("深海龍王",1,"深海龍王"									,1,10000),
	Array("龍虎BOSS",1,"臥虎藏龍"									,1,10000),
	Array("Magnus",2,"麥格納斯"									,1,10000),
	Array("Magnus_Hard",1,"麥格納斯[困難]"						,1,10000),
	//Array("麥格納斯[地獄]",1,"麥格納斯[地獄]"						,1,10000),
	Array("桃樂絲",1,"桃樂絲"										,1,10000),
	//Array("桃樂絲[地獄]",1,"桃樂絲[地獄]"							,1,10000),
	Array("Demian",1,"戴米安"										,1,10000),
	Array("Demian_Hard",1,"戴米安<困難>"							,1,10000),
	Array("Will",2,"威爾"											,1,10000),
	Array("JinHillah",1,"覺醒希拉的幻影（210級）"		,1,10000),
	Array("JinHillah_Hard",5,"覺醒希拉（250級）"					,1,10000),
	Array("Dunkel",2,"敦凱爾"										,1,10000),
	Array("Dusk",2,"虛空之眼"									,1,10000)
)
var text = "請選擇你要增加BOSS次數的副本\r\n";
var pqname;
var costType;
var type;
var lengthT = false;
for(var i = 0;i<bosslist.length;i++){
	pqname = bosslist[i][2]; 
	costType= bosslist[i][3]; 
	//java.lang.System.out.println(costType);
	if(costType == 1){
		type = "消耗點券:"+bosslist[i][4]+"";
	}else if(costType == 2){
		type = "#b消耗抵用:"+bosslist[i][4]+"#k";
	}else if(costType == 3){
		type = "#r消耗余額:"+bosslist[i][4]+"#k";
	}else if(costType == 4){
		type = "消耗道具:#v"+bosslist[i][4]+"#x"+bosslist[i][5]+"";
	}
	if(parseInt(bosslist[i][1])-parseInt(player.getPQLog(bosslist[i][0]))==0){
		text +="#L"+i+"#"+nbspStrAdd(pqname,25)+" "+type+"#k#l\r\n";
		lengthT = true;
	}
	
}
if(!lengthT){
	npc.say("您全部的副本都剩余次數,此處只顯示可以重置BOSS。")
}else{
	
	var sel = npc.askMenu(text);
	pqname = bosslist[sel][2];
	costType= bosslist[sel][3]; 
	if(costType == 1){
		type = "消耗點券:"+bosslist[sel][4]+"";
	}else if(costType == 2){
		type = "#b消耗抵用:"+bosslist[sel][4]+"#k";
	}else if(costType == 3){
		type = "#r消耗余額:"+bosslist[sel][4]+"#k";
	}else if(costType == 4){
		type = "消耗道具:#v"+bosslist[sel][4]+"#x"+bosslist[sel][5]+"";
	}
	var ys = npc.askYesNo("您是否要將："+pqname+"副本重置?\r\n您將"+type +"\r\n");
	if(ys == 1){
		if(player.getPQLog("重置"+pqname)>=resetCount){
			npc.say("您今天已經重置過:"+player.getPQLog("重置"+pqname)+"次。");
		}else if(costType == 1){
			if(player.getCashShopCurrency(1)>=bosslist[sel][4]){
				player.modifyCashShopCurrency(1,-bosslist[sel][4]);
				player.resetPQLog(pqname);
				player.addPQLog("重置"+pqname);
				npc.say("重置成功!");
			}else{
				npc.say("您當前擁有點券為："+player.getCashShopCurrency(1)+".無法支付!");
			}
		}else if(costType == 2){
			if(player.getCashShopCurrency(2)>=bosslist[sel][4]){
				player.modifyCashShopCurrency(2,-bosslist[sel][4]);
				player.resetPQLog(pqname);
				player.addPQLog("重置"+pqname);
				npc.say("重置成功!");
			}else{
				npc.say("您當前擁有抵用券為："+player.getCashShopCurrency(2)+".無法支付!");
			}
		}else if(costType == 3){
			if(getHyPay(1)>=bosslist[sel][4]){
				gainHyPay(-bosslist[sel][4]);
				player.resetPQLog(pqname);
				player.addPQLog("重置"+pqname);
				npc.say("重置成功!");
			}else{
				npc.say("您當前擁有余額為："+getHyPay(1)+".無法支付!");
			}
		}else if(costType == 4){
			if(player.hasItem(bosslist[sel][4],bosslist[sel][5])){
				player.loseItem(bosslist[sel][4],bosslist[sel][5]);
				player.resetPQLog(pqname);
				player.addPQLog("重置"+pqname);
				npc.say("重置成功!");
			}else{
				npc.say("您當前擁有道具：#v"+bosslist[sel][4]+"#x"+player.getAmountOfItem(bosslist[sel][4])+".無法支付!");
			}
		}
	}
}



function getHyPay(type) {
    var i = -1;
    var sql = "select * from hypay where accname = '" + getAccountName() + "'";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        if (type == 1) {
            var pay = result.get("pay");
        } else if (type == 2) {
            var pay = result.get("payUsed");
        } else if (type == 3) {
            var pay = result.get("payReward");
        }
    } else {
        player.customSqlInsert("INSERT INTO `hypay` (`accname`, `name`) VALUES ('" + getAccountName() + "', '" + player.getName() + "')");
        return getHyPay(1);
    }

    return pay;
}
function getAccountName() {
    var i = -1;
    var sql = "select name,id from accounts where id=" + player.getAccountId() + " order by name limit 1;";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        var name = result.get("name");
    }

    return name;
}
function gainHyPay(count) {
    var sql = "update hypay set pay =pay+? where accname = '" + getAccountName() + "';";   
    player.customSqlUpdate(sql, count);
}


function nbspStrAdd(str,len){
	var str = str+"";
	var nbspStr = "";
	if(chkstrlen(str)<len){
		for(var i=0;i<len-chkstrlen(str);i++){
			nbspStr += " ";
		}
	}
	
	return str+nbspStr;
}
function chkstrlen(str){
　var strlen = 0;
　for(var i = 0;i < str.length; i++){
　	if(str.charCodeAt(i) > 255) //如果是漢字，則字符串長度加2
　　	strlen += 2;
　　else
　　　　strlen++;
　}
　return strlen;
}