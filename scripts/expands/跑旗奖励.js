/* global cm */
 
var xxx=3;
var GP = Array(50, 500, 400, 300, 200, 100);//這裡設置獲得家族點數第一格代表不在前5名獲得的點數，之後從第一名到第五名依次類推，如果不給就填0
var rewarditem = Array(
    //Array(1,2430210,1*xxx),
	Array(1,2435467,1*xxx),
	Array(1,4001322,3*xxx),

	//Array(2,2430210,*xxx),
	Array(2,2435467,1*xxx),
	Array(2,4001322,2*xxx),

	//Array(3,2430210,1*xxx),
	Array(3,5062024,10*xxx),
	Array(3,4001322,1*xxx),

	Array(4,5062024,8*xxx),
	Array(4,4001322,1*xxx),

	Array(5,5062024,5*xxx),
	Array(5,4001322,1*xxx)

	//Array(5,5062503,8*xxx) //注意：最後一行括號後面不要加逗號。
        /*Array(1,5062024,50),//括號裡數字依次代表[名次，道具ID，道具數量]
         Array(1,5062009,15),//說明：第幾名要獎勵幾個物品你復制粘貼一下，只要保持括號第一格數字不變
         Array(1,4310014,30),
         Array(1,4310036,150),
         Array(1,2432328,1),
         Array(2,5062024,40),//括號裡數字依次代表[名次，道具ID，道具數量]
         Array(2,5062009,15),//說明：第幾名要獎勵幾個物品你復制粘貼一下，只要保持括號第一格數字不變
         Array(2,4310014,30),
         Array(2,4310036,150),
         Array(2,2432328,1),
         Array(3,5062024,30),//括號裡數字依次代表[名次，道具ID，道具數量]
         Array(3,5062009,15),//說明：第幾名要獎勵幾個物品你復制粘貼一下，只要保持括號第一格數字不變
         Array(3,4310014,30),
         Array(3,4310036,150),
         Array(3,2432347,1),
         Array(4,5062024,20),//括號裡數字依次代表[名次，道具ID，道具數量]
         Array(4,5062009,15),//說明：第幾名要獎勵幾個物品你復制粘貼一下，只要保持括號第一格數字不變
         Array(4,4310014,30),
         Array(4,4310036,150),
         Array(5,5062024,10),//括號裡數字依次代表[名次，道具ID，道具數量]
         Array(5,5062009,15),//說明：第幾名要獎勵幾個物品你復制粘貼一下，只要保持括號第一格數字不變
         Array(5,4310014,30),
         Array(5,4310036,150),*/
        //注意：最後一行括號後面不要加逗號。
        );
   
        var event = npc.getEvent("Event_CaptureTheFlag");
        var selStr = "#e           歡迎來到跑旗活動中心 \r\n";
        selStr += "#b此次活動排名:#k\r\n\r\n";
        for (var i = 1; i < 6; i++) {
            var name = event.getVariable("rank" + i);

            selStr += "第 " + i + " 名：#r" + (name == null ? "無" : name) + "#k\r\n\r\n";

        }
        for (var d = 1; d < 6; d++) {
            if (event.getVariable("rank" + d) == "" + player.getName()) {
                selStr += "#r#L0#領取獎勵#l\r\n";
                break;
            }
        }
        selStr += "#r#L1#查看獎勵#l\r\n";
		 
        var selection = npc.askMenu(selStr);
 
        if (selection == 0) {
             
           
            for (var b = 1; b < 6; b++) {
                if (event.getVariable("rank" + b) == player.getName()) {
                    for (var a = 0; a < rewarditem.length; a++) {
                        if (rewarditem[a][0] == b) {
                            player.gainItem(rewarditem[a][1], rewarditem[a][2]);
                        }
                    }
                    break;
                }
            }
            event.setVariable("rank" + b, player.getName() + " (已領取)");
            event.setVariable("Round" + player.getName(), "0");
            //cm.addGuildGP(GP[b]);  
            player.changeMap(104000000, 0);
        } else if (selection == 1) {
            var text = "\t\t              #r獎勵中心#k\r\n";
            for (var i = 1; i < 6; i++) {
                text += "#L" + i + "#查看#r第" + i + "名#k的物品獎勵\r\n\r\n";
            }
            var sel = npc.askMenu(text);
			var textt = "\t\t\t\t\t\t#b獎勵如下#k\r\n\r\n";
			for (var s = 0; s < rewarditem.length; s++) {
				if (rewarditem[s][0] == sel) {
					textt += "物品:#v" + rewarditem[s][1] + "# 數量：#r" + rewarditem[s][2] + "#k\r\n\r\n";
				}
			}
			npc.say(textt);
        } 
    