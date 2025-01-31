/**
 * 修煉中心  
 **/
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var d1 = "#fEffect/CharacterEff/1051366/0/0#"
var d2 = "#fEffect/CharacterEff/1051366/1/0#"
var d3 = "#fEffect/CharacterEff/1051366/2/0#"
var t1 = "#fUI/UIWindow.img/Quest/icon2/0#"
var rw = "#fUI/UIWindowString/Scenario/quest_info/scene/summary_icon/summary#"
var w1 = "#fUI/piggyBarMinigame/crunch/3#"
var w2 = "#fUI/piggyBarMinigame/crunch/4#"
var t2 = "#fUI/UIAuction/tab_complete/complete_list/bars/etc/btCollect/normal/0##"
/*Array("領取[250級]等級禮包","等級禮包9",1,false,"等級獎勵",true),
Array("製作140級新手獅心武器1次","140級武器製作",1,false,"140裝備製作",true),
Array("製作140級新手獅心防具1次","140級防具製作",1,false,"140防具製作",true),
Array("製作1次140級獅心武器潛能","140級潛能製作",1,false,"140防具製作",true),
Array("完成每日跑環20次","RINGQUSTION",20,true,"每日跑環",false),
Array("完成每日尋寶10次","尋寶任務",10,true,"每日尋寶",false),
Array("完成搬磚副本1次","完成搬磚副本",1,true,"搬磚整合",false),
Array("攻略[怪物公園]5次","mPark",5,false,"每日專區",false),
Array("完成[組隊一條龍]1次","一條龍組隊",1,true,"組隊中心"),
Array("攻略楓之高校2次","FSchool",2,false,"每日專區"),
Array("領取控制之神10層1星獎勵","控制之神5層1星",1,true,"控制之神獎勵"),
Array("收集100個#z4000016#","提交紅色蝸牛殼",1,true,"提交紅色蝸牛殼",true),
Array("完成公園跳跳2次","寵物公園跳跳",2,false,"跳跳遊戲"),
Array("完成玩具跳跳2次","玩具城跳跳",2,false,"跳跳遊戲"),
Array("女王庭院副本5次","金幣副本獎勵",5,true,"跳跳遊戲"),
Array("參與1次[航海之旅]","hhbw",1,false,"航海入口"),
Array("完成攀爬跳跳2次","攀爬城牆",2,false,"跳跳遊戲"),
Array("完成陷阱跳跳2次","透過陷阱",2,false,"跳跳遊戲"),
Array("參與2次普通關卡投骰大師","DiceMaster",2,false,"dicemaster_start"),
Array("攻略楓之高校2次","FSchool",2,false,"每日專區"),
Array("完成[組隊一條龍]1次","一條龍組隊",1,true,"組隊中心"),
Array("攻略[怪物公園]5次","mPark",5,false,"每日專區"),
Array("參與[沙漠貿易]1次","沙漠貿易",1,true,"每日專區"),
Array("完成[御魔龍]組隊5次","通關御魔龍",5,true,"組隊中心"),
Array("每日跑環5次",   "每日跑環",5,false,"每日跑環"),
Array("每日委託5次",   "每日委託",5,false,"每日委託"),
Array("參與1次無限火力","wxhl2019",1,false,"每日專區"),
Array("領取1次[420分鐘]的線上獎勵","線上獎勵4",1,true,"每日專區"),
Array("收集100個#z4000000#","提交藍色蝸牛殼",1,true,"提交藍色蝸牛殼",true)		*/
var taskList = [Array("" + t1 + "#b第1天任務",
    Array(
        //任務名 任務事件名 是否是賬號任務 總次數 點選開啟的腳本名 任務事件是否查詢永久記錄
        Array("領取[200級]等級禮包", "等級獎勵155", 1, false, "等級獎勵", true),
        Array("完成每日跑環3次", "RINGQUSTION", 3, true, "每日跑環", false),
        Array("總計完成組隊一條龍一次", "一條龍總次數", 1, true, "萬能傳送", false)
    )
),
Array("" + t1 + "#b第2天任務",
    Array(
        //任務名 任務事件名 是否是賬號任務 總次數 點選開啟的腳本名 任務事件是否查詢永久記錄

        Array("完成每日跑環5次", "RINGQUSTION", 5, true, "每日跑環", false),
        Array("完成每日尋寶3次", "尋寶任務", 3, true, "每日尋寶", false),
        Array("通關綠野仙蹤第7層", "起源7層通過", 1, false, "傳送起源之塔", true),
        Array("總計完成組隊一條龍兩次", "一條龍總次數", 2, true, "萬能傳送", false)
        //Array("攻略[怪物公園]5次","mPark",5,false,"每日專區",false)

    )
),
Array("" + t1 + "#b第3天任務",
    Array(
        //任務名 任務事件名 是否是賬號任務 總次數 點選開啟的腳本名
        Array("領取[220級]等級禮包", "等級獎勵157", 1, false, "等級獎勵", true),
        Array("完成每日跑環15次", "RINGQUSTION", 15, true, "每日跑環", false),
        Array("收集150個#z4000016#", "提交第三天材料", 1, true, "提交紅色蝸牛殼", true),
        Array("完成弓手跳跳1次", "寵物跳跳", 1, false, "傳送弓手跳跳"),
        Array("總計完成組隊一條龍三次", "一條龍總次數", 3, true, "萬能傳送", false)
    )
),
Array("" + t1 + "#b第4天任務",
    Array(
        //任務名 任務事件名 是否是賬號任務 總次數 點選開啟的腳本名
        Array("完成每日跑環20次", "RINGQUSTION", 20, true, "每日跑環", false),
        Array("收集150個#z4000000#", "提交第四天材料", 1, true, "提交藍色蝸牛殼", true),
        Array("完成每日尋寶3次", "尋寶任務", 3, true, "每日尋寶", false),
        Array("完成靈魂拯救者一次", "SpiritSaviorMax", 1, true, "靈魂拯救者入場", false),
        Array("總計完成組隊一條龍四次", "一條龍總次數", 4, true, "萬能傳送", false)
    )
),
Array("" + t1 + "#b第5天任務",
    Array(
        //任務名 任務事件名 是否是賬號任務 總次數 點選開啟的腳本名
        Array("領取[240級]等級禮包", "等級獎勵159", 1, false, "等級獎勵", true),
        Array("完成每日跑環20次", "RINGQUSTION", 20, true, "每日跑環", false),
        Array("完成每日尋寶3次", "尋寶任務", 3, true, "每日尋寶", false),
        Array("總計完成組隊一條龍五次", "一條龍總次數", 5, true, "萬能傳送", false)
    )
),
Array("" + t1 + "#b第6天任務",
    Array(
        //任務名 任務事件名 是否是賬號任務 總次數 點選開啟的腳本名
        Array("完成每日跑環25次", "RINGQUSTION", 20, true, "每日跑環", false),
        Array("完成每日尋寶3次", "尋寶任務", 3, true, "每日尋寶", false),
        Array("通過森蘭丸普通難度", "森蘭丸普通難度", 1, true, "森蘭丸進場", true),
        Array("通關啾啾島一次", "啾啾島通過", 2, true, "球球島入場", true),
        Array("總計完成組隊一條龍六次", "一條龍總次數", 6, true, "萬能傳送", false)
    )
),
Array("" + t1 + "#b第7天任務",
    Array(
        //任務名 任務事件名 是否是賬號任務 總次數 點選開啟的腳本名
        Array("領取[250級]等級禮包", "等級獎勵1510", 1, false, "等級獎勵", true),
        Array("完成每日跑環25次", "RINGQUSTION", 25, true, "每日跑環", false),
        Array("完成每日尋寶3次", "尋寶任務", 3, true, "每日尋寶", false),
        Array("收集150個#z4000016#", "提交第三天材料", 1, true, "提交紅色蝸牛殼", true),
        Array("收集150個#z4000000#", "提交第四天材料", 1, true, "提交藍色蝸牛殼", true),
        Array("總計完成組隊一條龍七次", "一條龍總次數", 7, true, "萬能傳送", false)
    )
)
];


var taskReward = [Array(
    Array(5062026, 2, ""),  //唯一魔方
    Array(2049373, 5, ""),  //10星之力
    Array(5060048, 2, ""),  //蘋果
    Array(2633918, 5, ""),  //歐皇
    Array(4001714, 10, ""),   //金幣
    Array(5062017, 10, ""),//閃耀方塊
    Array(5062020, 10, ""),//閃炫方塊


),
//第2天
Array(
    Array(5062026, 5, ""),  //唯一魔方
    Array(5060048, 3, ""),  //蘋果
    Array(2432206, 5, ""),  //X卷
    Array(2633918, 5, ""),  //歐皇
    Array(4001714, 20, ""),   //金幣
    Array(5062017, 10, ""),//閃耀方塊
    Array(5062020, 10, ""),//閃炫方塊


),
//第3天
Array(
    Array(5062026, 5, ""),  //唯一魔方
    Array(5060048, 3, ""),  //蘋果
    Array(2049372, 2, ""),  //15星
    Array(5680503, 5, ""),  //魔法馬車
    Array(2633918, 5, ""),  //歐皇
    Array(4001714, 30, ""),   //金幣
    Array(5062017, 10, ""),//閃耀方塊
    Array(5062020, 10, ""),//閃炫方塊


),
//第4天
Array(

    Array(5062026, 5, ""),  //唯一魔方
    Array(5060048, 3, ""),  //蘋果
    Array(2049372, 3, ""),  //15星
    Array(5680503, 5, ""),  //魔法馬車
    Array(2633918, 5, ""),  //歐皇
    Array(4001714, 40, ""),   //金幣
    Array(5062017, 20, ""),//閃耀方塊
    Array(5062020, 20, ""),//閃炫方塊


),
//第5天
Array(

    Array(5062026, 5, ""),  //唯一魔方
    Array(5060048, 5, ""),  //蘋果
    Array(2435824, 5, ""),  //V卷
    Array(5680503, 10, ""),  //魔法馬車
    Array(2633918, 10, ""),  //歐皇
    Array(4001714, 50, ""),   //金幣
    Array(5062017, 20, ""),//閃耀方塊
    Array(5062020, 20, ""),//閃炫方塊
),


//第6天
Array(

    Array(5062026, 2, ""),  //唯一魔方
    Array(5060048, 5, ""),  //蘋果
    Array(2436527, 5, ""),  //B卷
    Array(5680503, 10, ""),  //魔法馬車
    Array(2633918, 10, ""),  //歐皇
    Array(4001714, 60, ""),   //金幣
    Array(5062017, 20, ""),//閃耀方塊
    Array(5062020, 20, ""),//閃炫方塊
),


//第7天
Array(

    Array(5062026, 5, ""),  //唯一魔方
    Array(5060048, 5, ""),  //蘋果
    Array(2644006, 3, ""),  //追加30%
    Array(1114400, 1, ""),  //饒紹
    Array(5680503, 10, ""),  //魔法馬車
    Array(2633918, 10, ""),  //歐皇
    Array(5062017, 30, ""),//閃耀方塊
    Array(5062020, 30, ""),//閃炫方塊
    Array(4001714, 70, "")   //金幣
)]


let whileStage = true;
while (whileStage) {
    var now = player.getEventValue("萌新任務");
    var selStr = "";
    selStr = "Welcome to the special trip              " + a38 + "\r\n";

    selStr += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n"

    selStr += "" + rw + "\r\n#r當天任務需要當天完成#k並領取獎勵才算完成1天任務，若沒領取獎勵可能會要重新做一遍哦\r\n#b每天只能領取1次天數任務獎勵哦";

    selStr += "#fn宋體#"
    for (var i = 0; i < taskList.length; i++) {
        if (i % 2 == 0) selStr += "\r\n"
        selStr += "#L" + i + "#" + taskList[i][0] + "#l";
    }

    selStr += "#fn方正粗黑宋簡體#"
    selStr += "\r\n\r\n\r\n\r\n            						[已完成第" + now + "天]"
    let selected = npc.askMenuS(selStr);

    selStr = "第" + (selected + 1) + "天任務\r\n";

    selStr += "\r\n#b #L10089# 【點選對應任務可以跳轉任務介面】#l#r\r\n"
    var PD = 0;
    for (var i = 0; i < taskList[selected][1].length; i++) {
        var task = taskList[selected][1][i];
        if (task[3]) {
            //賬號任務
            if (player.getEventValue(task[1]) >= task[2]) {
                selStr += "#r#L" + i + "#" + task[0] + " 今日次數 <" + player.getEventValue(task[1]) + "/" + task[2] + ">#b (賬號繫結)#l\r\n"
            } else {
                selStr += "#r#L" + i + "#" + task[0] + " 今日次數 #g<" + player.getEventValue(task[1]) + "/" + task[2] + ">#b (賬號繫結)#l\r\n"
                PD++;
            }
        } else {
            //角色任務
            if (player.getPQLog(task[1]) >= task[2]) {
                selStr += "#r#L" + i + "#" + task[0] + " 今日次數 <" + player.getPQLog(task[1]) + "/" + task[2] + ">#d (角色繫結)#l\r\n"
            } else {
                selStr += "#r#L" + i + "#" + task[0] + " 今日次數 #g<" + player.getPQLog(task[1]) + "/" + task[2] + ">#d (角色繫結)#l\r\n"
                PD++;
            }
        }
    }
    selStr += "\r\n #L10088#" + t2 + "我已完成任務,領取獎勵#l"

    selected1 = npc.askMenuS(selStr);
    if (selected1 == 10086) {

    } else if (selected1 == 10089) {
        selStr = "#r第" + (selected + 1) + "天#d萌新任務獎勵:\r\n";
        for (var i = 0; i < taskReward[selected].length; i++) {
            selStr += "#d#v" + taskReward[selected][i][0] + "##z" + taskReward[selected][i][0] + "# x " + taskReward[selected][i][1] + " #r<" + taskReward[selected][i][2] + ">\r\n "
        }
        npc.say(selStr)
    } else if (selected1 == 10088) {
        if (now != selected) {
            if (now > taskList.length) {
                npc.sayS("#d我已經做完了所有萌新任務！");
            } else {
                npc.sayS("#d現在不能做這個任務,應該做#r第" + (now + 1) + "天#d任務！");
            }
        } else if (player.getEventValue("今天的萌新任務") > 0) {
            npc.sayS("#d今天的萌新任務已經完成了哦！請明天再來！");
        } else if (PD != 0) {
            npc.sayS("#d今日任務還沒有完成哦，不能提交任務！");
        } else {
            if (player.getFreeSlots(1) < taskReward[selected].length || player.getFreeSlots(2) < taskReward[selected].length || player.getFreeSlots(3) < taskReward[selected].length || player.getFreeSlots(4) < taskReward[selected].length || player.getFreeSlots(5) < taskReward[selected].length) {
                npc.sayS("包裹空間不足，請確保包裹每個欄位有至少 " + taskReward[selected].length + " 格空間");
            } else {
                player.addEventValue("萌新任務", 1, 3000);
                player.addEventValue("今天的萌新任務", 1, 1);
                selStr = "#d恭喜你獲得#r第" + (selected + 1) + "天#d萌新任務獎勵:\r\n";
                for (var i = 0; i < taskReward[selected].length; i++) {
                    player.gainItem(taskReward[selected][i][0], taskReward[selected][i][1]);
                    selStr += "#v" + taskReward[selected][i][0] + "##z" + taskReward[selected][i][0] + "# x " + taskReward[selected][i][1] + " #r<" + taskReward[selected][i][2] + ">\r\n "
                }
                npc.broadcastPlayerNotice(15, "==萌新7日任務== : 恭喜冒險家 " + player.getName() + " 完成了 第< " + (selected + 1) + " >天新手任務！獲得獎勵！ ");
                npc.broadcastWeatherEffectNotice(228, "==萌新7日任務== : 恭喜冒險家 " + player.getName() + " 完成了 第< " + (selected + 1) + " >天新手任務！獲得獎勵！", 10000);
                npc.say(selStr);
            }
        }
    } else {
        whileStage = false;
        player.runScript(taskList[selected][1][selected1][4])
    }
}

