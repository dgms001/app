/* This is a piece of code

 * author dgms

 * global player

 * 腳本定制 技術支持 QQ 381991414

 */
var a20 = "#fEffect/ItemEff.img/1005102/effect/default/3#" //粉色PB长3-5
var a21 = "#fEffect/ItemEff.img/1005103/effect/default/3#" //绿水灵长3-5
var status = 0;
var skill = Array(80000654, 80000655, 80000656, 80000657, 80000658, 80000659, 80000660, 80000661);
var itemPQ = Array(
    Array(
        Array(4310020, 100),),

    Array(
        Array(4310020, 100),),

    Array(
        Array(4310020, 100),),

    Array(
        Array(4310020, 100),),

    Array(
        Array(4310020, 100),),

    Array(
        Array(4310020, 100),),

    Array(
        Array(4310020, 100),),

    Array(
        Array(4310020, 100),));

var successrate = Array(100, 80, 60, 45, 35, 25, 15, 10);
var PQ = Array(0, 1, 2, 3, 4, 5, 6, 7);
var Name = Array("NEO力量 : 1階段", "NEO力量 : 2階段", "NEO力量 : 3階段", "NEO力量 : 4階段", "NEO力量 : 5階段", "NEO力量 : 6階段", "NEO力量 : 7階段", "NEO力量 : 8階段");
var idbans = -1;
var zhizuo = null;
text = "#fs21##e#r你好,這裡是NEO力量技能製作強化\r\n";
text += "#fs16##e#b請依次強化技能\r\n";
for (var i = player.getPQLog("Skills"); i < skill.length; i++) {
    var tips = "製作說明";
    text += "\t\t#b#L" + i + "#製作 #q" + skill[i] + "# #r[" + tips + "]#k#l\r\n\r\n";
}
let idbans = npc.askMenuA(text);

var text = "#fs21##e#r當前:#q" + skill[idbans] + "##n#b\r\n";
text += "#fs16##e#b#b擁有#z4310020#: [ #r#c4310020# #b]\r\n";
text += "#b當前強化次數: [ #r" + player.getPQLog("NEO力量保+" + idbans + "") + " #b][保底10次必成]\r\n";
zhizuo = itemPQ[idbans];
for (var i = 0; i < zhizuo.length; i++) {
    var itemId = zhizuo[i][0];
    var getItemQuantity = zhizuo[i][1];
    text += "#b#z4310020# #rx " + getItemQuantity + "\r\n成功率為:" + successrate[idbans] + "%\r\n";
}
text += "\r\n#d是否現在就升級該技能？#k\r\n\r\n";

if (player.getPQLog("Skills") != PQ[idbans])
    npc.say("當前升級等級錯誤,請逐一升級! 目前只能獲得:#r" + (player.getPQLog("skill") + 1) + " #k階段技能");
else
    var sel = npc.askYesNo(text);
if (sel == 1) {
    if (player.getFreeSlots(1) < 1) {
        npc.say("您的背包空間不足,請保證裝備欄至少1格的空間,以避免領取失敗。");
    } else {
        var jilu = 0;
        for (var i = 0; i < zhizuo.length; i++) {
            var itemId = zhizuo[i][0];
            var getItemQuantity = zhizuo[i][1];
            //if (player.hasItem(itemId, getItemQuantity)) {
            if (player.hasItem(itemId, getItemQuantity)) {
                jilu++;
            }
            if (jilu != zhizuo.length) {
                player.showProgressMessageFont("怪物公園幣硬幣不足", 4, 30, 4, 10 * 1000);
            } else {
                for (var i = 0; i < zhizuo.length; i++) {
                    var itemId = zhizuo[i][0];
                    var getItemQuantity = zhizuo[i][1];
                    player.loseItem(4310020, 100);
                }
                if (player.getPQLog("NEO力量保+" + idbans + "") >= 10) {
                    var Successrates = Math.floor(Math.random() * 1);
                } else {
                    var Successrates = Math.floor(Math.random() * 100);
                }
                if (Successrates <= successrate[idbans]) {
                    player.setSkillLevel((skill[idbans] - 1), 0, 1, false);
                    player.setSkillLevel(skill[idbans], 1, 1, false);
                    player.resetPQLog("Skills");
                    player.addPQLog("Skills", PQ[idbans] + 1, 3000);
                    if (player.getPQLog("Skills") == 8) {
                        player.addEventLog("NEO力量轉移", 1, 3000);
                    }
                    //npc.broadcastWeatherEffectNotice(214, "【NEO力量】玩家:" + player.getName() + "升級了" + Name[idbans] + "", 10000);
					npc.broadcastPlayerNotice(3, "[怪物公園]  玩家  " + player.getName() + "  升級" + Name[idbans] + "!!!");
                    npc.say("恭喜您,升級成功！快打開技能列表看看吧！");
                    player.runScript("neo");
                    break;
                } else {
                    player.addPQLog("NEO力量保+" + idbans + "", 1, 3000);
                    npc.say("升級失敗！");
                    player.runScript("neo");
                    break;
                }
            }
        }
    }
}
function getQuestPoint(questId) {
    return player.getIntQuestRecordEx(questId, "point");
}

function modifyQuestPoint(questId, num) {
    player.updateQuestRecordEx(questId, "point", String(getQuestPoint(questId) + num));
    //modifyQuestPoint(3887,-扣除);
}

function delskill() {
    if (player.getPQLog("首次刪除NEO技能") == 0) {
        player.setSkillLevel(80000654, 0, 1, false); //獲取新技能
        player.setSkillLevel(80000655, 0, 1, false); //獲取新技能
        player.setSkillLevel(80000656, 0, 1, false); //獲取新技能
        player.setSkillLevel(80000657, 0, 1, false); //獲取新技能
        player.setSkillLevel(80000658, 0, 1, false); //獲取新技能
        player.setSkillLevel(80000659, 0, 1, false); //獲取新技能
        player.setSkillLevel(80000660, 0, 1, false); //獲取新技能
        player.setSkillLevel(80000661, 0, 1, false); //獲取新技能
        player.addPQLog("首次刪除NEO技能", 1, 3000);
    } else { }
}
