/**
 * Event Manager
 * @author dgms
 * @description 專用事件管理器
 * QQ:381991414
 */
let date = new Date();
let sec = date.getSeconds();

//status == 0 關閉，1自動開啟（超時會關閉），2手動開啟（超時不會自動關閉。）
function init(attachment) {
    event.setVariable("pqs", 2); //跑旗賽的status
    event.setVariable("pqsRanking", {}); //跑旗賽的rank暫存
    //event.startTimer("checkEvent", (60 - sec) * 1000);
	event.startTimer("checkEvent", 1000);
}



function timerExpired(key) {
    //event.startTimer("checkEvent", (60 - sec) * 1000);
    date = new Date();
    sec = date.getSeconds();
    let week = date.getDay();
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    switch (key) {
        case "checkEvent":
            //closeAll();
            //if (/*(week == 5 || week == 6 || week == 0) && hour == 21 &&*/ min == 30) { //每周567晚上9點半自動啟動
                event.startTimer("pqs", 30 * 60 * 1000);//30分鐘後關閉
                event.setVariable("pqs", 1);
                let useItem = 0;
                switch (week) {
                    case 6: //周六不啟動道具賽
                        useItem = 0;
                        break;
                }
                let mapIndex = Math.floor(Math.random() * 3);
                let mapType = 0;
                let maxLap = 0;
                switch (mapIndex) {
                    case 1: //夕陽地圖mapType一定為1，圈數為5
                        mapType = 1;
                        maxLap = 5;
                        break;
                }
                event.setVariable("pqsItem", useItem);
                event.setVariable("pqsMapType", mapType);
                event.setVariable("pqsMapIndex", mapIndex);
                event.setVariable("pqsMaxLap", maxLap);
                //event.broadcastPlayerNotice(1, "[跑旗賽] 跑旗賽開始啦！請前往自由市場???加入。");
                //event.broadcastPlayerNotice(1, "[跑旗賽] 跑旗賽開始啦！請前往自由市場???加入。");
            //}

            break;
        case "pqs":
            event.setVariable("pqs", 0);
            break;
        case "bingo":
            break;
        default:
            if (event.getVariable(key) == 1) {
                event.setVariable(key, 0);
            } else {
                //event.broadcastPlayerNotice(1, "[Event Manager]Unexpected timer [" + key + "],please report GM.");
            }
            break;
    }
}


function deinit() {
    //do nothing
}
