/**
 *
 *
 */

let sQuest;
// dec key
let QUEST = [["第1層共消滅了多少隻古代綠水靈？", "stage1_killed"],
    // new Array("第3層共拾取了多少烏龜蛋？", "stage3_Value"),
    ["第4層均衡點數已經被削弱多少次？", "stage4_cms"],
    ["第6層共消滅了多少隻綠水靈？", "stage6_killed"],
    ["第8層共消滅了多少隻火山蟲？", "stage8_killed"],
    ["第11層共消滅了多少隻石頭人？", "stage11_killed"],
    ["第13層共漏掉多少怪物？", "stage13_miss"],
    ["第16層共消滅了多少隻鱷魚？", "stage16_killed"],
    //new Array("第19層弗雷塔共受到多少傷害？", "stage19_Value"),
    ["第23層掉下去後重試了幾次？", "stage23_Value"],
    ["第24層回答錯誤了幾次？", "stage24_killed"],
    ["第26層共消滅了多少隻怪物？", "stage26_killed"],
    ["第29層是扔幾個沙晶？", "stage29_Value"],
    ["第31層共消滅了多少隻食蟲水靈？", "stage31_killed"],
    ["第33層共使用了多少把鑰匙？", "stage33_Value"],
    ["第38層黑暗氣息轉換了幾次？", "stage38_cms"],
    ["第39層回答錯誤了沉迷於問答的冒險家幾次？", "stage39_killed"]];

var event = npc.getEvent();
if (event != null) {
    if (event.getVariable("stage43_Tip") == null) {
        sQuest = getArrayItems(QUEST, 4);
        event.setVariable("stage43_Wrong", 0);
        event.setVariable("stage43_Quest", sQuest);
        event.setVariable("stage43_Tip", true);
        npc.sayNextNoEsc("想要到下一層，那麼需要透過我的4次測試。這也是為了你自己。那麼開始吧！");
    }
    sQuest = event.getVariable("stage43_Quest");
    if ("clear".equals(event.getVariable("stage43"))) {
        npc.sayNextNoEsc("你已經透過了我的考驗！可以進入下一箇階段了！");
    } else {
        var value = parseInt(event.getVariable("stage43_Value"));
        var str = "那麼,這是第#r" + (value + 1) + "次#k測試。\r\n#h0#，這次來到起源之塔探險時，發生的事情中....\r\n\r\n#e#r問題：#n#b你在";
        str += sQuest[value][0] + "\r\n\r\n ";
        let ans = npc.askTextNoEsc(str, "", 1, 10);
        if (ans.equals(event.getVariable(sQuest[value][1]))) {
            event.setVariable("stage43_Value", String(value + 1));
            if (value + 1 >= 4) {
                event.setVariable("stage43", "clear");
                player.screenEffect("quest/party/clear");
                map.blowWeatherEffectNotice("你現在可以前往下一層了。", 147, 15000);
                npc.sayNextNoEsc("你已經透過了我的考驗！可以進入下一箇階段了！");
            } else {
                npc.sayNextNoEsc("恭喜你透過了我的第#r" + (value + 1) + "次#k考驗！請準備好接受下一次考驗！");
            }
        } else {
            var wrong = parseInt(event.getVariable("stage43_Wrong")) + 1;
            event.setVariable("stage43_Wrong", wrong);
            npc.sayNextNoEsc("回答錯誤，這是你第" + wrong + "次回答錯誤，請再仔細想想！三次錯誤將被退場！");
            if (wrong >= 3) {
                player.changeMap(992000000);
            }
        }
    }
}

function getArrayItems(arr, num) {
    //新建一箇陣列,將傳入的陣列複製過來,用於運算,而不要直接操作傳入的陣列;
    var temp_array = [];
    for (var index in arr) {
        temp_array.push(arr[index]);
    }
    //取出的數值項,儲存在此陣列
    var return_array = [];
    for (var i = 0; i < num; i++) {
        //判斷如果陣列還有可以取出的元素,以防下標越界
        if (temp_array.length > 0) {
            //在陣列中產生一箇隨機索引
            var arrIndex = Math.floor(Math.random() * temp_array.length);
            //將此隨機索引的對應的陣列元素值複製出來
            return_array[i] = temp_array[arrIndex];
            //然後刪掉此索引的陣列元素,這時候temp_array變為新的陣列
            temp_array.splice(arrIndex, 1);
        } else {
            //陣列中資料項取完後,退出迴圈,比如陣列本來只有10項,但要求取出20項.
            break;
        }
    }
    return return_array;
}