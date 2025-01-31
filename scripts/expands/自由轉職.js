var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"
var sql = "SELECT skillid FROM characters_skills WHERE characters_id = ? and masterlevel >= 1 and skilllevel <= 5 and skillid > 80000000 and skillid < 80200000";
var push = player.customSqlResult(sql, player.getId());
var jobData = [
    //冒险家
	//Array("卡莉", 15411, 15412, 100, 0),
    Array("英雄", 112, 111, 100, 0),
    Array("聖騎士", 122, 121, 100, 0),
    Array("黑騎士", 132, 131, 100, 0),
    Array("大魔導士(火毒)", 212, 211, 100, 0),
    Array("大魔導士(冰雷)", 222, 221, 100, 0),
    Array("主教", 232, 231, 100, 0),
    Array("箭神", 312, 311, 100, 0),
    Array("神射手", 322, 321, 100, 0),
    Array("夜使者", 412, 411, 100, 0),
    Array("暗影神偷", 422, 421, 100, 0),
    //剑士
    Array("阿戴爾", 15112, 15111, 100, 0),
    Array("狂狼勇士", 2112, 2111, 100, 0),
    Array("惡魔殺手", 3112, 3111, 100, 0),
    Array("惡魔復仇者", 3122, 3121, 100, 0),
    Array("爆拳槍神", 3712, 3711, 100, 0),
    Array("米哈逸", 5112, 5111, 100, 0),
    Array("凱撒", 6112, 6111, 100, 0),
    Array("劍豪", 4112, 4111, 100, 3),
    //法師
    Array("伊利恩", 15212, 15211, 100, 0),
    Array("龍魔導士", 2217, 2214, 100, 0),
    Array("夜光", 2712, 2711, 100, 0),
    Array("煉獄巫師", 3212, 3211, 100, 0),
    Array("陰陽師", 4212, 4211, 100, 0),
    Array("凱內西斯", 14212, 14211, 100, 0),
    Array("拉拉", 16212, 16211, 100, 0),
    Array("幻獸師", 11212, 11211, 100, 0),
    //弓箭手
    Array("凱殷", 6312, 6311, 100, 0),
    Array("開拓者", 332, 331, 100, 3),
    Array("精靈遊俠", 2312, 2311, 100, 0),
    Array("狂豹獵人", 3312, 3311, 100, 0),

    //盗贼
    Array("虎影", 16412, 16411, 100, 0),
    Array("卡蒂娜", 6412, 6411, 100, 0),
    Array("影武者", 434, 433, 100, 1),
    Array("幻影俠盜", 2412, 2411, 100, 2),
    //海盗
    Array("墨玄", 17512, 17511, 100, 0),
    Array("亞克", 15512, 15511, 100, 0),
    Array("傑諾", 3612, 3611, 100, 0),
    Array("重砲指揮官", 532, 531, 100, 2),
    Array("拳霸", 512, 511, 100, 0),
    Array("槍神", 522, 521, 100, 0),
    Array("機甲戰神", 3512, 3511, 100, 0),
    Array("天使破壞者", 6512, 6511, 100, 0),
    Array("隱月", 2512, 2511, 100, 0),

    //雪吉拉or品克繽
    //Array("雪吉拉", 13500, 0, 10),
    //Array("皮卡啾", 13100, 0, 10),
    //Array("品克繽", 13100, 13000, 10),//如果轉職可以直接創建品克繽的話就開這裡,//上面的 否則就用新手

    /*騎士團聯盟-------------------*/
    Array("聖魂劍士", 1112, 1111, 100, 0),
    Array("烈焰巫師", 1212, 1211, 100, 0),
    Array("破風使者", 1312, 1311, 100, 3),
    Array("暗夜行者", 1412, 1411, 100, 0),
    Array("閃雷悍將", 1512, 1511, 100, 0)

];
var flag = false;
var needItem = 4310086; //需要物品
var needYE = 1; //需要物品數量
var needLevel = 200; //需要的等級
var free = false;
let toDrop1 = player.getInventorySlot(-1, -1300);
let toDrop2 = player.getInventorySlot(-1, -1302);
let toDrop3 = player.getInventorySlot(-1, -1305);
let toDrop4 = player.getInventorySlot(-1, -1306);
let toDrop5 = player.getInventorySlot(-1, -1307);
let toDrop6 = player.getInventorySlot(-1, -1308);
let toDrop7 = player.getInventorySlot(-1, -1304);
let toDrop8 = player.getInventorySlot(-1, -1301);
let toDrop9 = player.getInventorySlot(-1, -1309);
if(toDrop1 != null || toDrop2 != null || toDrop3 != null || toDrop4 != null || toDrop5 != null || toDrop6 != null || toDrop7 != null || toDrop8 != null || toDrop9 != null){
	npc.askMenu("#r檢測到你是天使破壞者職業,請你脫掉附屬點裝,在進行轉職!!");
}else{
var text = "#fs21##e#r你好,這裡是自由轉職中心\r\n";

text += "#fs16##e#b消耗[#v" + needItem + "# x " + needYE + "]\r\n";

text += "轉職請初始化快捷鍵位#b\r\n轉職請不要脫下ARC,AUT會自動幫你切換\r\n轉職後請馬上切換一下分流刷新ARC,AUT\r\n轉職前脫掉副武,卸掉五轉核心\r\n#r怪物公園製作技能,如果要保留請開通分身共享,不然會遺失\r\n";


text += "#r---------------------------------------------------------#b\r\n";
for (var i = 0; i <= 9; i++) {
    text += "#L" + i + "#" + jobData[i][0] + "#l\r\n"
}
text += "\r\n#r---------------------------------------------------------#b\r\n";
for (var i = 10; i <= 18; i++) {
    text += "#L" + i + "#" + jobData[i][0] + "#l\r\n"
}
text += "\r\n#r---------------------------------------------------------#b\r\n";
for (var i = 19; i <= 26; i++) {
    text += "#L" + i + "#" + jobData[i][0] + "#l\r\n"
}
text += "\r\n#r---------------------------------------------------------#b\r\n";
for (var i = 27; i <= 30; i++) {
    text += "#L" + i + "#" + jobData[i][0] + "#l\r\n"
}
text += "\r\n#r---------------------------------------------------------#b\r\n";
for (var i = 31; i <= 34; i++) {
    text += "#L" + i + "#" + jobData[i][0] + "#l\r\n"
}
text += "\r\n#r---------------------------------------------------------#b\r\n";
for (var i = 35; i <= 42; i++) {
    text += "#L" + i + "#" + jobData[i][0] + "#l\r\n"
}
text += "\r\n#r---------------------------------------------------------#b\r\n";
for (var i = 43; i <= 47; i++) {
    text += "#L" + i + "#" + jobData[i][0] + "#l\r\n"
}
text += "\r\n#r---------------------------------------------------------#b\r\n";
}
var selected = npc.askMenuA(text);
if (!player.hasItem(needItem, needYE) && !free) {
    npc.say("你沒有#v" + needItem + "# x " + needYE + "，如需轉職，請前往餘額商城購買#v" + needItem + "#");
} else if (player.getLevel() < needLevel) {
    npc.say("#b您的等級不足！需要" + needLevel + "級");
} else if (player.getFreeSlots(1) < 5 || player.getFreeSlots(2) < 5 || player.getFreeSlots(3) < 5 || player.getFreeSlots(4) < 5 || player.getFreeSlots(5) < 5) {
    npc.say("包裹空間不足，請確保包裹每個欄位有至少 " + 5 + " 格空間", 9010061);
} else {
    var YN = npc.askYesNo("#e#r\r#r是否轉職成為" + jobData[selected][0] + "?\r\n");
    if (YN == 1) {
        player.setSubJob(jobData[selected][4]);
        player.setJob(jobData[selected][1]);
        player.resetHyperSkill();
        player.resetHyperStatSkill();
        player.resetSkills();
        //player.resetStats(4, 4, 4, 4);
        player.resetVSkills();
        player.gainItem(2431305, 1);
        player.gainItem(2501001, 1);
        player.gainItem(2500000, 1);
        player.loseItem(needItem, needYE)
        //如果是異人 要學習技能
        player.maxSkills(); //滿技能
        if (push.size() > 0) {
            for (var i = 0; i < push.size(); i++) {
                player.setSkillLevel(Number(push.get(i).get("skillid")), 1, 1, false);
            }
        }
		npc.broadcastPlayerNotice(3, "[自由轉職]:玩家 " + player.getName() + " 透過自由轉職，轉職成為了" + jobData[selected][0] + "" );
        
        player.completeQuest(6000, 0);
        player.completeQuest(6800, 0);
        var ARC1 = player.getInventorySlot(-1, -1600);
        var ARC2 = player.getInventorySlot(-1, -1601);
        var ARC3 = player.getInventorySlot(-1, -1602);
        var ARC4 = player.getInventorySlot(-1, -1603);
        var ARC5 = player.getInventorySlot(-1, -1604);
        var ARC6 = player.getInventorySlot(-1, -1605);
        var AUT1 = player.getInventorySlot(-1, -1700);
        var AUT2 = player.getInventorySlot(-1, -1701);
        var AUT3 = player.getInventorySlot(-1, -1702);
        if (ARC1 != null) {
            ARC1.recalculateByJob(jobData[selected][1]);
            player.addPQLog("ARC轉換1", 1, 7);
        }
        if (ARC2 != null) {
            ARC2.recalculateByJob(jobData[selected][1]);
            player.addPQLog("ARC轉換2", 1, 7);
        }
        if (ARC3 != null) {
            ARC3.recalculateByJob(jobData[selected][1]);
            player.addPQLog("ARC轉換3", 1, 7);
        }
        if (ARC4 != null) {
            ARC4.recalculateByJob(jobData[selected][1]);
            player.addPQLog("ARC轉換4", 1, 7);
        }
        if (ARC5 != null) {
            ARC5.recalculateByJob(jobData[selected][1]);
            player.addPQLog("ARC轉換5", 1, 7);
        }
        if (ARC6 != null) {
            ARC6.recalculateByJob(jobData[selected][1]);
            player.addPQLog("ARC轉換6", 1, 7);
        }
        if (AUT1 != null) {
            AUT1.recalculateByJob(jobData[selected][1]);
            player.addPQLog("AUT轉換1", 1, 7);
        }
        if (AUT2 != null) {
            AUT2.recalculateByJob(jobData[selected][1]);
            player.addPQLog("AUT轉換2", 1, 7);
        }
        if (AUT3 != null) {
            AUT3.recalculateByJob(jobData[selected][1]);
            player.addPQLog("AUT轉換3", 1, 7);
        }
        player.addPQLog("轉職次數", 1, 3000);
        player.showSystemMessage("轉職成功!!!");

    }
}

function getHyPay(type) {
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

//flag = true 查總的不重置
//flag = false 查當天的
function getEventValue(event1, flag) {
    var charInfo = getCharInfo();
    if (flag) {
        var sql = "select sum(value) as numbe from zz_xr_event where accounts_id = " + parseInt(charInfo.accounts_id) + " and event = '" + event1 + "' and world =" + parseInt(charInfo.world) + " ";
    } else {
        var sql = "select sum(value) as numbe from zz_xr_event where accounts_id = " + parseInt(charInfo.accounts_id) + " and event = '" + event1 + "' and world =" + parseInt(charInfo.world) + " AND DATE_FORMAT(time, '%Y-%m-%d') = DATE_FORMAT(NOW(), '%Y-%m-%d') ";
    }
    var resultList = player.customSqlResult(sql);
    var count = 0;
    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        count = result.get("numbe");
        if (count == null) {
            count = 0;
        }
    }
    return parseInt(count);
}

function setEventValue(event1, value1) {
    var charInfo = getCharInfo();
    var sql = "insert into zz_xr_event(accounts_id, world, `event`,`value`,time) values(" + charInfo.accounts_id + "," + charInfo.world + ",'" + event1 + "'," + value1 + ",now())";
    player.customSqlInsert(sql);
}

function getCharInfo() {
    var sql = "SELECT accountid accounts_id,world FROM characters where id = " + player.getId() + "";
    var resultList = player.customSqlResult(sql);
    var charInfo = {};
    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        charInfo.accounts_id = result.get("accounts_id");
        charInfo.world = result.get("world");
    }
    return charInfo;
}
