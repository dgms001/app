//排隊

function init(attachment) {
	event.setVariable("pqname","---");
    event.startTimer("notice", 60 * 1000);
}


function timerExpired(key) {
        switch (key) {
                case "notice":
				eventList();
				event.startTimer("notice", 60 * 1000);
			break;
        }
}



/*************
* 副本的隊列表
* 返回0沒任何信息
*/
function eventList(){
	var pqnames =event.getVariable("pqname");
	if(pqnames==null ||pqnames=="---" ){
		return 0;
	}else{
		var pqnames = eval("["+pqnames+"]");
		var exist = false;
		for(var i=0;i<pqnames.length;i++){ 
			//if(null==reactor.getEvent(pqnames[i].eventname)){
			
				
			//進行讀取這個副本的排隊序列
			var single =event.getVariable(pqnames[i].name);
			
			if(single!=null){
				//獲取排隊人信息.
				var singles = eval("["+single+"]");
				var modify = {}
				for(var j=0;j<singles.length;j++){
					if(j==0){
						modify.id = singles[j].id;
						modify.name = singles[j].name;
						var flag = singles[j].flag;
						//9說明第一的玩家正在副本中.
						if(flag != 9){
							if(flag==null || flag==undefined){
								event.broadcastPlayerNotice(7, "[排隊叫號] BOSS ："+ pqnames[i].name +" 下一位玩家【"+modify.name+"】：請帶領隊伍在2分鐘內入場。否則將移出排隊系統。");
								modify.flag = 1;
								singles.splice(0,1,modify);
							}else if(flag==1){
								event.broadcastPlayerNotice(7, "[排隊叫號] BOSS ："+ pqnames[i].name +" 下一位玩家【"+modify.name+"】：請帶領隊伍在1分鐘內入場。否則將移出排隊系統。");
								modify.flag = 2;
								singles.splice(0,1,modify);
							}else if(flag==2){
								singles.splice(0,1);
							}
							var jsontemp = JSON.stringify(singles);
							//java.lang.System.out.println(jsontemp);
								jsontemp = jsontemp.substr(1,jsontemp.length);
								jsontemp = jsontemp.substr(0,jsontemp.length-1);
							event.setVariable(pqnames[i].name,jsontemp);
						}
						
					}
				}
				
			}
		}
	}
}