
var minLevel = 200;
var maxLevel = 251;
var minPartySize = 1;
var maxPartySize = 6;
var maxenter = 100;
var PQLog = "隨機5個每日";

var arr26 = [];

//  創建一個隨機數  
    // var  r = new Random();  
//  創建一個集合用于存儲隨機數  
    var hs = new Array();  
//  設置個數為10  
    var count = 0 ;  
   
    var ys = npc.askYesNo("你好，你需要領取每日任務嗎？每天可以領取5個每日，只可以領取一次哦！");                      
    if(ys == 1){
		if(player.isQuestCompleted(1465)){
			if(player.getPQLog(PQLog)<1){
				 //cm.forceStartQuest(34129);
				get26();
				for(var i = 0;i<5;i++){
					//java.lang.System.out.println(arr26[i]);
					player.startQuest(parseInt(34138+parseInt(arr26[i])),0);
				}                  	
				player.addPQLog(PQLog);
				npc.say("領取任務了！！");
			}else{
				npc.say("你今天已經領取過5次任務了！！");
			}
		}else{
			npc.say("你還未完成5轉任務，無法領取每日！"); 
		}
	}  


//獲取隨機數
function get26(){
	var i = 0;
	var x = 1 + Math.floor(Math.random() * 12);
	while (i < 5)
	{
		if (-1 == arr26.indexOf(x)){
			arr26.push(x);	
			i++;			
		}
		x = 1 + Math.floor(Math.random() * 12);
	}
}


