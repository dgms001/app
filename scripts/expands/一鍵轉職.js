
var status = -1
var txt;
/*------------------------- 表情符號 -------------------------*/
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"
var d1 = "#fUI/UIWindow2.img/Arbeit/2#"//补漏技能
var d2 = "#fUI/UIWindow2.img/Arbeit/13#"//快捷转职
var d3 = "#fUI/UIWindow2.img/Arbeit/37#"//一键满技
var d4 = "#fUI/UIWindow2.img/Arbeit/7#"//返回选单
txt = "Welcome to the special trip              " + a38 + "\r\n";

txt += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n";

if (player.getJob() == 10112) {
    txt += "#fs11#\t#b#L3##b" + f4 + "快捷轉職#l  #L4#" + f2 + "萌新七天樂#l #L2#" + f5 + "補學技能#l\r\n\r\n";
    txt += "#fs11#\t#L5##b" + f2 + "核心獲取#l   #L6##b" + f4 + "ARC獲取#l    #L7##b" + f5 + "AUT獲取#l\r\n\r\n";
} else {
    txt += "#fs11#\t#L1##b" + f4 + "快捷轉職#l   #L4##b" + f2 + "萌新七天樂#l #L2#" + f5 + "補學技能#l\r\n\r\n";
    txt += "#fs11#\t#L5##b" + f2 + "核心獲取#l   #L6##b" + f4 + "ARC獲取#l    #L7##b" + f5 + "AUT獲取#l\r\n\r\n";
}
let selection = npc.askMenuS(txt, true);

switch (selection) {
    case 1:
        if (player.getPQLog("是否五轉") > 0) {
            npc.say("你已經五轉過了!");
            player.maxSkills();
        } else {
            player.runScript("轉職");
        }
        break;
    case 2:
        player.runScript("一鍵補學技能");
        break;
    case 3://神之子五轉
        if (player.getPQLog("是否五轉") > 0 && player.getPQLog("神之子開任務") > 0) {
            npc.say("你已經五轉過了");
        } else if (player.getLevel() >= 200 && player.getPQLog("神之子開任務") > 0) {
            player.completeQuest(1465, 0);
            player.completeQuest(1484, 0);
            player.completeQuest(1466, 0);
            player.completeQuest(6500, 0);
            player.addPQLog("是否五轉", 1, 3000)
            player.gainItem(1712000, 1);
            npc.say("一鍵五轉成功!");
        } else if (player.getPQLog("神之子開任務") == 0) {
            player.addPQLog("神之子開任務", 1, 3000);
            player.completeQuest(40900, 0);
            player.completeQuest(40901, 0);
            player.completeQuest(40902, 0);
            player.completeQuest(40903, 0);
            player.completeQuest(40904, 0);
            player.completeQuest(40905, 0);
            player.completeQuest(40910, 0);
            player.completeQuest(40911, 0);
            player.completeQuest(40912, 0);
            player.completeQuest(40913, 0);
            player.completeQuest(40914, 0);
            player.completeQuest(40920, 0);
            player.completeQuest(40921, 0);
            player.completeQuest(40922, 0);
            player.completeQuest(40923, 0);
            player.completeQuest(40924, 0);
            player.completeQuest(40930, 0);
            player.completeQuest(40931, 0);
            player.completeQuest(40932, 0);
            player.completeQuest(40933, 0);
            player.completeQuest(40934, 0);
            player.completeQuest(40940, 0);
            player.completeQuest(40941, 0);
            player.completeQuest(40942, 0);
            player.completeQuest(40943, 0);
            player.completeQuest(40944, 0);
            player.completeQuest(40950, 0);
            player.completeQuest(40951, 0);
            player.completeQuest(40952, 0);
            player.completeQuest(40953, 0);
            player.completeQuest(40954, 0);
            player.completeQuest(40960, 0);
            player.completeQuest(40961, 0);
            player.completeQuest(40962, 0);
            player.completeQuest(40963, 0);
            player.completeQuest(40964, 0);
            player.completeQuest(40970, 0);
            player.completeQuest(40971, 0);
            player.completeQuest(40972, 0);
            player.completeQuest(40973, 0);
            player.completeQuest(40974, 0);
            player.completeQuest(40980, 0);
            player.completeQuest(6616, 0);
            player.completeQuest(14110, 0);
            player.completeQuest(14111, 0);
            player.completeQuest(14112, 0);
            player.completeQuest(14113, 0);
            player.completeQuest(14114, 0);
            player.completeQuest(14115, 0);
            player.completeQuest(14116, 0);
            player.completeQuest(14117, 0);
            player.completeQuest(15970, 0);
            player.completeQuest(16519, 0);
            player.completeQuest(32019, 0);
            player.completeQuest(40905, 0);
            player.maxSkills();
            npc.say("#fs18##e#b#r神之子#b前置任務成功完成,請在次五轉!");
        } else {
            npc.say("#fs18##e#b#r神之子#b任務已經完成過了!\r\n200等再來找我進行五轉吧!");
        }
        break;
    case 4:
        player.runScript("新手7天任務");
        break;
    case 5:
        player.runScript("核心傳送");
        break;
    case 6:
        player.runScript("ARC傳送");
        break;
    case 7:
        player.runScript("AUT傳送");
        break;
    case 10:
        player.runScript("本服菜單");
        break;
}