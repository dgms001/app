/**                                                                                                                                                                                                                         (4310218,5);//幻影幣
 * Shuang (NPC 9040000)                                                                                                                                                                                                     (2630846,20);//火花
 * Victoria Road: Excavation Site <Camp> (Map 101030104)                                                                                                                                                                    (4021029,166);//基礎強化材料
 *                                                                                                                                                                                                                          (4032657,3);//傷害面板抽獎
 * Starts the guild quest.
 *
 *
 */
var a1 = "#fUI/CashShop/CSDiscount/bonus#"
var a2 = "#fUI/UIWindowString/Scenario/quest_info/scene/summary_icon/summary#"
let gqItems = [1032033, 4001024, 4001025, 4001026, 4001027, 4001028, 4001029, 4001030, 4001031, 4001032, 4001033, 4001034, 4001035, 4001036, 4001037];

let selection = npc.askMenuA("#e<BOSS： 勇士家族任務[家族周本]>#n\r\n" + a2 + "\r\n 每週可挑戰次數不上限 領獎次數#r[1]#k次" + a1 + "每次通關可以獲得:\r\n#r#v2432290# #z2432290# x #r[1]  #v4000928# #z4000928# x #r[80]\r\n#v4001715# #z4001715# x #r[10]  #v4310218# #z4310218# x #r[5]\r\n#v2630846# #z2630846# x #r[20]  #v4021029# #z4021029# x #r[166]#b\r\n#b"
    + "#L0#[#r家族管理]#b開啟家族任務#l"
    + "#L1#[#r家族成員]#b加入家族任務#l");
switch (selection) {
    case 0:
        if (player.getGuildId() <= 0 || player.getGuildRank() >= 3) { //no guild or not guild master/jr. master
            npc.sayNext("只有族長或者副族長才可以開始家族任務。");
        } else {
            //no true requirements, make an instance and start it up
            let event = npc.getEvent("guild_quest");
            if (event == null) {
                //start GQ
                let guildId = player.getGuildId();
                //makeEvent
                event = npc.makeEvent("guild_quest", true, [guildId, player]);
                if (event == null) {
                    npc.say("現在家族任務還沒有開放，請稍後再試。");
                } else {
                    //remove all GQ items from player entering
                    for (let i = 0; i < gqItems.length; i++) {
                        player.loseItem(gqItems[i]);
                    }
                    npc.broadcastGuildMessage(guildId, "[家族任務] 家族任務已開啟，請成員前往[頻道-" + player.getChannel() + "]的遺蹟發掘地參與家族任務！");

                }
            } else {
                let openGId = event.getVariable("GuildId");
                if (openGId > 0) {
                    if (openGId == player.getGuildId()) {
                        npc.say("你的家族已經開啟了家族任務挑戰，無法再次開啟！");
                    } else {
                        npc.say("已經有家族在執行任務了，請更換頻道後再試。");
                    }
                }
            }
        }
        break;
    case 1:
        if (player.getGuildId() <= 0) { //no guild or not guild master/jr. master
            npc.sayNext("如果你想進入家族任務的話，你必須要加入一箇家族。");
        } else {
            let event = npc.getEvent("guild_quest");
            if (event == null) {
                npc.say("當前頻道並沒有家族任務在進行，請稍後再試。");
            } else {
                let openGId = event.getVariable("GuildId");
                let canEnter = event.getVariable("canEnter");
                let members = event.getVariable("members");
                if (openGId > 0) {
                    if (openGId == player.getGuildId()) {
                        if (canEnter) {
                            npc.sayNext("那麼我現在就送你進去！");
                            for (let i = 0; i < gqItems.length; i++) {
                                player.loseItem(gqItems[i]);
                            }
                            player.setEvent(event);
                            members.push(player);
                            player.changeMap(990000000, 0);
                        } else {
                            npc.say("家族任務已經正式開啟了，當前無法在進行申請進入！");
                        }
                    } else {
                        npc.say("正在舉行家族任務的不是您的家族，請檢查後再試。");
                    }
                }
            }
        }
        break;
}
