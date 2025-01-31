/*
 * NeroMS MapleStory server emulator written in Java
 * Copyright (C) 2017-2018  dgms
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 *
 * @author dgms
 */
var stage9_combo = Array("1", "2", "3", "4", "5", "6", "7", "8");

let mapId;
let player, map;
let mFoothold = [];
let endTime;
let EXIT_MAP = 992000000;
let FIELD_DIR = 992001000;
let PQLog = "aquaris_tower";

function init(attachment) {
    player = attachment;
    for (var i = 1; i <= 50; i++) { //init map
        let field = event.makeMap(992000000 + (i * 1000));
        event.setVariable("map" + i, field);

    }
    event.setVariable("map14_1", event.makeMap(992014001));
    event.setVariable("map14_2", event.makeMap(992014002));
    event.setVariable("stage", 1);
    for (var i = 1; i <= 50; i++) {
        event.setVariable("stage" + i + "_Damage", "0");
        event.setVariable("stage" + i + "_killed", "0");
        event.setVariable("stage" + i + "_Value", "0");
    }

    event.setVariable("stage4_cms", "0"); //
    event.setVariable("stage38_cms", String(0));

    for (var b = 0; b < stage9_combo.length; b++) { //stage6_001
        for (var y = 1; y <= 4; y++) { //stage number
            event.setVariable("stage9_" + stage9_combo[b] + "_" + y, "0");
        }
    }
    for (var b = 0; b < stage9_combo.length; b++) {
        var found = false;
        while (!found) {
            for (var x = 1; x <= 4; x++) {
                if (!found) {
                    var founded = false;
                    for (var z = 1; z <= 4; z++) { //check if any other stages have this value set already.
                        if (event.getVariable("stage9_" + stage9_combo[b] + "_" + (z)) == null) {
                            event.setVariable("stage9_" + stage9_combo[b] + "_" + (z), "0");
                        } else if (event.getVariable("stage9_" + stage9_combo[b] + "_" + (z)) == "1") {
                            founded = true;
                            break;
                        }
                    }
                    if (!founded && java.lang.Math.random() < 0.33) {
                        event.setVariable("stage9_" + stage9_combo[b] + "_" + (x), "1");
                        found = true;
                        break;
                    }
                }
            }
        }
    }

    var s12_0 = java.lang.Math.random() < 0.50;
    var s12_2 = java.lang.Math.random() < 0.50;
    event.setVariable("stage12_trap0", s12_0 ? "1" : "0");
    event.setVariable("stage12_trap1", s12_0 ? "0" : "1");

    event.setVariable("stage12_trap2", s12_2 & s12_0 ? "1" : "0");
    event.setVariable("stage12_trap3", s12_2 & !s12_0 ? "1" : "0");
    event.setVariable("stage12_trap4", !s12_2 & !s12_0 ? "1" : "0");

    event.setVariable("stage13_miss", "0");

    var s27_1 = parseInt(java.lang.Math.random() * 4) + 1;
    var s27_2 = parseInt(java.lang.Math.random() * 4) + 1;
    var s27_3 = parseInt(java.lang.Math.random() * 3) + 1;
    var s21_1 = parseInt(java.lang.Math.random() * 300) + 1;
    event.setVariable("stage21_trap", s21_1);
    event.setVariable("stage27_trap1", "0" + String(s27_1));
    event.setVariable("stage27_trap2", "0" + String(s27_2));
    event.setVariable("stage27_trap3", "0" + String(s27_3));
    event.setVariable("stage37_killed_1", "0");
    event.setVariable("stage37_killed_2", "0");
    event.setVariable("stage37_killed_3", "0");

    event.setVariable("stage38_check", "0");

    event.setVariable("stage42_killed_1", "0");
    event.setVariable("stage42_killed_2", "0");
    event.setVariable("stage42_killed_3", "0");
    event.setVariable("stage42_killed_4", "0");
    var s47 = parseInt(java.lang.Math.random() * 7);
    event.setVariable("stage47_Key", "pt0" + s47);

    //對時間進行設置
    player.loseItem(4009237);
    player.loseItem(4009238);
    player.loseItem(4000968);
    player.loseItem(4009236);
    player.loseItem(4034077);
    player.loseItem(4009232);
    player.loseItem(4009234);
    player.loseItem(4009235);
    player.loseItem(2432448);
    player.loseItem(2432459);
    player.loseItem(2432460);

    for (var i = 1; i <= 5; i++) {
        var sData = player.getQuestRecordEx(42000, "slot" + i);
        if (sData != null && sData != "0" && sData != "-1") {
            player.updateQuestRecordEx(42000, "slot" + i, "0");
        }
    }

    var rData = player.getQuestRecordEx(42011, "time");
    var tData = player.getQuestRecordEx(42011, "totalTime");
    if (rData == null || tData == null) {
        rData = "600000";
        tData = "600000";
        player.updateQuestRecordEx(42011, "time", rData);
        player.updateQuestRecordEx(42011, "totalTime", tData);
    }
    player.updateQuestRecordEx(42011, "start", String(java.lang.System.currentTimeMillis()));
    var time = parseInt(rData);
    var totalTime = parseInt(tData);
    event.startTimer("kick", time);
    endTime = new Date().getTime() + time;
    //player.showTimer(30*60);
    player.addPQLog(PQLog);
    player.setEvent(event);
    player.changeMap(event.getVariable("map1"));
}

function playerDisconnected(player) {
    event.destroyEvent();
}

function playerChangedMap(player, destination) {
    var check = destination.getId() >= 992001000 && destination.getId() <= 992050000;
    if (!check) {
        player.setEvent(null);
        event.destroyEvent();
    } else {
        switch (destination.getId()) {
            case 992007000:
                player.showTimer(60 * 2);
                break;
        }
        player.dropMessage(6, "目前你擁有的起源點數為：" + player.getIntQuestRecordEx(42003, "point"));
        player.showSystemMessage("你今天已經突破了" + player.getPQLog("aquaris_tower") + "層。");
    }
}

function mobDied(mob) {
    var stage = parseInt(event.getVariable("stage"));
    var map = event.getVariable("map" + stage);
    var mobID = mob.getDataId();
    var clear = false;
    switch (stage) {
        case 1:
            //殺死怪物計數
            var s1_killed = parseInt(event.getVariable("stage1_killed"));
            var s1_damage = parseInt(event.getVariable("stage1_Damage"));
            s1_killed += 1;
            event.setVariable("stage1_killed", String(s1_killed));
            // player.scriptProgressMessage("消滅古代綠水靈 " + s1_killed + "/ 100,  累積沖擊量 " + s1_damage + " / 5千萬");
            //player.showSystemMessage("消滅古代綠水靈 " + s1_killed + "/ 100,  累積沖擊量 " + s1_damage + " / 5千萬");
            if (s1_killed >= 100 && event.getVariable("stage1") != "clear") {
                //第一關 消滅 100只古代綠水靈  完成
                clear = true;
            }
            break;
        case 4:
            var s4_killed = parseInt(event.getVariable("stage4_killed"));
            var portal = parseInt(event.getVariable("stage4_portal"));
            var s4_junheng = parseInt(event.getVariable("stage4_cms"));
            var s4_damage = parseInt(event.getVariable("stage4_Damage"));
            var posX = player.getPosition().getX();
            if (s4_killed < 200) {
                if ("1".equals(event.getVariable("stage4_C"))) {
                    if (portal == 2 && posX > 634 || posX < 634) {
                        event.setVariable("stage4_C", "0");
                        event.setVariable("stage4_portal", portal == 1 ? "2" : "1");
                        portal == portal == 1 ? 2 : 1;
                    } else {
                        if (s4_killed > 0) {
                            s4_killed -= 5;
                            event.setVariable("stage4_killed", String(s4_killed));
                        }
                        s4_junheng += 1;
                        event.setVariable("stage4_cms", String(s4_junheng));
                        player.scriptProgressMessage("均衡點數" + s4_killed + " / 200");
                        map.blowWeatherEffectNotice("均衡點數已經被削弱" + s4_junheng + "次了，你這個笨蛋！趕快到對面去！", 147, 9000);
                        player.showSystemMessage("均衡點數已經被削弱" + s4_junheng + "次了，你這個笨蛋！趕快到對面去！");
                        break;
                    }
                }
                if (portal == 2 && posX < 634 || posX > 634) {
                    s4_killed += 5;
                    s4_damage += 5;
                    event.setVariable("stage4_Damage", String(s4_damage));
                    event.setVariable("stage4_killed", String(s4_killed));
                } else {
                    if (s4_killed > 0) {
                        s4_killed -= 5;
                        event.setVariable("stage4_killed", String(s4_killed));
                    }
                    s4_junheng += 1;
                    event.setVariable("stage4_cms", String(s4_junheng));
                    player.scriptProgressMessage("均衡點數" + s4_killed + " / 200");
                    map.blowWeatherEffectNotice("均衡點數已經被削弱" + s4_junheng + "次了，你這個笨蛋！趕快到對面去！", 147, 9000);
                    player.showSystemMessage("均衡點數已經被削弱" + s4_junheng + "次了，你這個笨蛋！趕快到對面去！");
                    break;
                }
                player.scriptProgressMessage("均衡點數" + s4_killed + " / 200");
                if (s4_killed == 200 && event.getVariable("stage4") != "clear") {
                    map.blowWeatherEffectNotice("現在已經大體平衡，你可以前往下一層了。", 147, 9000);
                    clear = true;
                } else if (s4_damage % 120 == 0) {
                    event.setVariable("stage4_C", "1");
                }
            }
            break;
        case 6:
            var s6_killed = parseInt(event.getVariable("stage6_killed"));
            var stage6_Value = parseInt(event.getVariable("stage6_Value"));
            if (mobID == 9309001) {
                event.setVariable("stage6_killed", String(s6_killed + 1));
                stage6_Value += 1;
            } else if (mobID == 9309127) {
                stage6_Value += 25;
            }
            stage6_Value = Math.min(stage6_Value, 300);
            event.setVariable("stage6_Value", String(stage6_Value));
            player.scriptProgressMessage("消滅綠水靈 " + stage6_Value + "/ 300");
            if (s6_killed % 25 == 0 && s6_killed > 0) {
                let boss = map.makeMob(9309127);
                map.spawnMob(boss, 953, -1162);
            }
            if (stage6_Value >= 300 && !"clear".equals(event.getVariable("stage6"))) {
                clear = true;
            }
            break;
        case 7:
            if (mobID == 9309124) {
                var rData = player.getQuestRecordEx(42011, "time");
                var tData = player.getQuestRecordEx(42011, "totalTime");
                var startData = player.getQuestRecordEx(42011, "start");
                if (rData == null || tData == null || startData == null) {
                    rData = "600000";
                    tData = "600000";
                    startData = String(java.lang.System.currentTimeMillis());
                    player.updateQuestRecordEx(42011, "time", rData);
                    player.updateQuestRecordEx(42011, "totalTime", tData);
                    player.updateQuestRecordEx(42011, "start", startData);
                }
                var time = parseInt(rData);
                var totalTime = parseInt(tData);
                player.showLobbyTimer(0, time, 3000, 42011);
                event.stopTimers();
                event.startTimer("kick", 3000);
                map.blowWeatherEffectNotice("任務失敗了。", 147, 15000);
            }
            break;
        case 8:
            //殺死怪物計數
            var s8_killed = parseInt(event.getVariable("stage8_killed"));
            s8_killed += 1;
            event.setVariable("stage8_killed", String(s8_killed));
            player.scriptProgressMessage("消滅火山蟲 " + s8_killed + "/ 100");
            player.showSystemMessage("獵殺了 " + s8_killed + " 只火山蟲");
            if (s8_killed >= 100 && !"clear".equals(event.getVariable("stage8"))) {
                //第一關 消滅 100只古代綠水靈  完成
                clear = true;
            }
            break;
        case 11:
            var s11_killed = parseInt(event.getVariable("stage11_killed"));
            s11_killed += 1;
            event.setVariable("stage11_killed", String(s11_killed));
            player.scriptProgressMessage("消滅石頭人 " + s11_killed + "/ 300");
            if (s11_killed >= 300 && !"clear".equals(event.getVariable("stage11"))) {
                clear = true;
            }
            break;
        case 13:
            if (mobID == 9309104 || mobID == 9309105) {
                var s13_miss = parseInt(event.getVariable("stage13_miss"));
                var s13_killed = parseInt(event.getVariable("stage13_killed"));
                if (mob.getHp() > 0) {
                    s13_miss += 1;
                    event.setVariable("stage13_miss", String(s13_miss));
                } else {
                    s13_killed += 1;
                    event.setVariable("stage13_killed", String(s13_killed));
                }
                var hinTip = "消滅怪物 " + s13_killed + "/ 80 ";
                if (s13_miss > 0) {
                    hinTip += " 已漏掉怪物:" + s13_miss;
                }
                player.scriptProgressMessage(hinTip);
                if (s13_miss > 5) {
                    if (event.getVariable("stage13_failure") == null) {
                        event.setVariable("stage13_failure", true);
                        event.stopTimers();
                        event.startTimer("kick", 3000);
                        player.showTimer(3);
                        map.blowWeatherEffectNotice("任務失敗了。", 147, 15000);
                    }
                } else if (s13_killed >= 75 && !"clear".equals(event.getVariable("stage13"))) {
                    clear = true;
                }
            }
            break;
        case 14:
            //射擊
            if (mobID == 9309116 || mobID == 9309117) {
                var s14_killed = parseInt(event.getVariable("stage14_killed"));
                s14_killed += 1;
                event.setVariable("stage14_killed", String(s14_killed));
                if (s14_killed >= 16 && !"clear".equals(event.getVariable("stage14"))) {
                    clear = true;
                    event.startTimer("warp14_clear", 3000);
                }
            }
            break;
        case 16:
            var s16_killed = parseInt(event.getVariable("stage16_killed"));
            s16_killed += 1;
            event.setVariable("stage16_killed", String(s16_killed));
            player.scriptProgressMessage("消滅鱷魚 " + s16_killed + "/ 200");
            player.showSystemMessage("獵殺了 " + s16_killed + " 只怪物");
            if (s16_killed > 200 && !"clear".equals(event.getVariable("stage16"))) {
                clear = true;
            }
            break;
        case 21:
            //需要消滅大量怪物 召喚 9309100 - 艾利杰
            if (mobID != 9309100) {
                var s21_killed = parseInt(event.getVariable("stage21_killed"));
                s21_killed += 1;
                event.setVariable("stage21_killed", String(s21_killed));
                player.showSystemMessage("獵殺了 " + s21_killed + " 只怪物");
                // player.scriptProgressMessage("消滅怪物 " + s21_killed + "/ 300");
            }
            if (s21_killed >= parseInt(event.getVariable("stage21_trap")) && !"1".equals(event.getVariable("stage21_Value"))) {
                event.setVariable("stage21_Value", "1");
                let boss = map.makeMob(9309100);
                map.spawnMob(boss, 562, 83);
                map.blowWeatherEffectNotice("艾利杰出現在了區域內。", 147, 15000);
            }
            if (mobID == 9309100 && !"clear".equals(event.getVariable("stage21"))) {
                player.scriptProgressMessage("消滅怪物 1 / 1");
                map.blowWeatherEffectNotice("你消滅了艾利杰。請前往下一層。", 147, 15000);
                clear = true;
            }
            break;
        case 26:
            var s26_killed = parseInt(event.getVariable("stage26_killed"));
            s26_killed += 1;
            event.setVariable("stage26_killed", String(s26_killed));
            player.scriptProgressMessage("消滅橙色古代水靈 " + s26_killed + "/ 80");
            if (s26_killed > 80) {
                clear = true;
            }
            break;
        case 28:
            if (mobID == 9309064) {
                var s28_killed = parseInt(event.getVariable("stage28_killed"));
                s28_killed += 1;
                event.setVariable("stage28_killed", String(s28_killed));
                player.scriptProgressMessage("消滅沙漠蛇先生 " + s28_killed + "/ 20");
                player.showSystemMessage("獵殺了 " + s28_killed + " 只怪物");
                if (s28_killed >= 20 && !"clear".equals(event.getVariable("stage28"))) {
                    clear = true;
                }
            }
            break;
        case 31:
            if (mobID == 9309040 || mobID == 9309041) {
                var s31_killed = parseInt(event.getVariable("stage" + stage + "_killed"));
                s31_killed += 1;
                event.setVariable("stage" + stage + "_killed", String(s31_killed));
                player.scriptProgressMessage("消滅食蟲水靈 " + s31_killed + "/ 200");
                player.showSystemMessage("獵殺了 " + s31_killed + " 只怪物");
                if (s31_killed >= 200 && !"clear".equals(event.getVariable("stage" + stage))) {
                    clear = true;
                }
            }
            break;
        case 32:
            if (mobID == 9309087) {
                var s32_killed = parseInt(event.getVariable("stage32_killed"));
                s32_killed += 1;
                event.setVariable("stage32_killed", String(s32_killed));
                player.scriptProgressMessage("消滅藍色古代水靈 " + s32_killed + "/ 9");
                if (s32_killed >= 9 && !"clear".equals(event.getVariable("stage32"))) {
                    clear = true;
                }
            }
            break;

        case 37:
            var s37_killed_1 = parseInt(event.getVariable("stage37_killed_1"));
            var s37_killed_2 = parseInt(event.getVariable("stage37_killed_2"));
            var s37_killed_3 = parseInt(event.getVariable("stage37_killed_3"));
            s37_killed_1 = Math.min(s37_killed_1, 99);
            var s37_kill_1_done = s37_killed_1 >= 100;

            s37_killed_2 = Math.min(s37_killed_2, 99);
            var s37_kill_2_done = s37_killed_2 >= 100;

            s37_killed_3 = Math.min(s37_killed_3, 99);
            var s37_kill_3_done = s37_killed_3 >= 100;
            if (mobID == 9309017) {
                s37_killed_1 += 1;
                event.setVariable("stage37_killed_1", String(s37_killed_1));
                player.scriptProgressMessage("消滅禿鷲先生 " + s37_killed_1 + "/ 100");
            }
            if (mobID == 9309018) {
                s37_killed_2 += 1;
                event.setVariable("stage37_killed_2", String(s37_killed_2));
                player.scriptProgressMessage("消滅沙漠土撥鼠 " + s37_killed_2 + "/ 100");
            }
            if (mobID == 9309019) {
                s37_killed_3 += 1;
                event.setVariable("stage37_killed_3", String(s37_killed_3));
                player.scriptProgressMessage("消滅沙漠毒蝎 " + s37_killed_3 + "/ 100");
            }
            if (s37_kill_1_done && s37_kill_2_done && s37_kill_3_done && !"clear".equals(event.getVariable("stage37"))) {
                clear = true;
            }
            break;
        case 38:
            var s38check = parseInt(event.getVariable("stage38_check"));
            var stage38_Value = parseInt(event.getVariable("stage38_Value"));
            switch (s38check) {
                case 1:
                    if (mobID == 9309020) {
                        stage38_Value += 10;
                        event.setVariable("stage38_Value", String(stage38_Value));
                        player.scriptProgressMessage("黑暗氣息： " + (200 - stage38_Value) + "");
                    }
                    break;
                case 2:
                    if (mobID == 9309021) {
                        stage38_Value += 10;
                        event.setVariable("stage38_Value", String(stage38_Value));
                        player.scriptProgressMessage("黑暗氣息： " + (200 - stage38_Value) + "");
                    }
                    break;
                case 3:
                    if (mobID == 9309022) {
                        stage38_Value += 10;
                        event.setVariable("stage38_Value", String(stage38_Value));
                        player.scriptProgressMessage("黑暗氣息： " + (200 - stage38_Value) + "");
                    }
                    break;
            }
            if (stage38_Value >= 500 && !"clear".equals(event.getVariable("stage38"))) {
                clear = true;
            }
            break;
        case 42:
            var s42_killed_1 = parseInt(event.getVariable("stage42_killed_1"));
            var s42_killed_2 = parseInt(event.getVariable("stage42_killed_2"));
            var s42_killed_3 = parseInt(event.getVariable("stage42_killed_3"));
            var s42_killed_4 = parseInt(event.getVariable("stage42_killed_4"));
            s42_killed_1 = Math.min(s42_killed_1, 29);
            s42_killed_2 = Math.min(s42_killed_2, 29);
            s42_killed_3 = Math.min(s42_killed_3, 29);
            s42_killed_4 = Math.min(s42_killed_4, 29);
            if (mobID == 9309023) {
                s42_killed_1 += 1;
                event.setVariable("stage42_killed_1", String(s42_killed_1));
                player.scriptProgressMessage("消滅橡木甲蟲 " + s42_killed_1 + "/ 30");
            }
            if (mobID == 9309024) {
                s42_killed_2 += 1;
                event.setVariable("stage42_killed_2", String(s42_killed_2));
                player.scriptProgressMessage("消滅金屬甲蟲 " + s42_killed_2 + "/ 30");
            }

            if (mobID == 9309025) {
                s42_killed_3 += 1;
                event.setVariable("stage42_killed_3", String(s42_killed_3));
                player.scriptProgressMessage("消滅哈維 " + s42_killed_3 + "/ 30");
            }
            if (mobID == 9309026) {
                s42_killed_4 += 1;
                event.setVariable("stage42_killed_4", String(s42_killed_4));
                player.scriptProgressMessage("消滅血腥哈維 " + s42_killed_4 + "/ 30");
            }
            var s42_kill_1_done = s42_killed_1 >= 29;
            var s42_kill_2_done = s42_killed_2 >= 29;
            var s42_kill_3_done = s42_killed_3 >= 29;
            var s42_kill_4_done = s42_killed_4 >= 29;
            if (s42_kill_1_done && s42_kill_2_done && s42_kill_3_done && s42_kill_4_done && !"clear".equals(event.getVariable("stage42"))) {
                clear = true;
            }
            break;
        case 43:
            if ((mobID == 9309027 || mobID == 9309028) && "1".equals(event.getVariable("stage43_cms"))) {
                var s43_killed = parseInt(event.getVariable("stage43_cms1"));
                s43_killed += 1;
                event.setVariable("stage43_cms1", String(s43_killed));
                player.scriptProgressMessage("消滅怪物 " + s43_killed + "/ 10");
                if (s43_killed >= 10 && "1".equals(event.getVariable("stage43_cms"))) {
                    event.setVariable("stage43_cms", String(0));
                    event.setVariable("stage43_cms1", String(0));
                    map.blowWeatherEffectNotice("好了好了。現在不要再往上來了。你不要下去一點嗎？", 147, 15000);
                }
            }
            break;
        case 46:
            if (mobID == 9309031 || mobID == 9309030 || mobID == 9309029) {
                var s46_killed = parseInt(event.getVariable("stage" + stage + "_killed"));
                s46_killed += 1;
                event.setVariable("stage" + stage + "_killed", String(s46_killed));
                player.scriptProgressMessage("消滅飛龍 " + s46_killed + "/ 200");
                if (s46_killed >= 200 && !"clear".equals(event.getVariable("stage" + stage))) {
                    clear = true;
                }
            }
            break;
        case 47:
            if (mobID == 9309128 && !"clear".equals(event.getVariable("stage" + stage))) {
                clear = true;
            }
            break;
        case 10:
            if (mobID == 9309201 && !"clear".equals(event.getVariable("stage10"))) {
                clear = true;
            }
            break;
        case 20:
            if (mobID == 9309205 && !"clear".equals(event.getVariable("stage20"))) {
                clear = true;
            }
            break;
        case 30:
            if (mobID == 9309200 && !"clear".equals(event.getVariable("stage30"))) {
                clear = true;
            }
            break;
        case 40:
            if (mobID == 9309203 && !"clear".equals(event.getVariable("stage40"))) {
                clear = true;
            }
            break;
        case 50:
            if (mobID == 9309207 && !"clear".equals(event.getVariable("stage50"))) {
                clear = true;
            }
            break;
    }
    if (clear) {
        stageClear(stage);
    }
}

function playerPickupItem(player, map, itemId) {
    //拾取道具時執行
    var stage = parseInt(event.getVariable("stage"));
    switch (stage) {
        case 3:
            if (itemId == 4009237 || itemId == 4009238) {
                if (event.getVariable("stage" + stage) != "clear") {
                    var count = player.getAmountOfItem(4009237) + player.getAmountOfItem(4009238);
                    player.scriptProgressMessage("收集到了" + count + "個烏龜蛋。");
                    player.showSystemMessage("收集到了" + count + "個烏龜蛋。");
                    event.setVariable("stage3_Value", count);
                    if (count >= 300) {
                        stageClear(stage);
                        player.loseItem(4009237);
                        player.loseItem(4009238);
                    }
                }
            }
            break;
        case 18:
            if (itemId == 4000968) {
                if (!"clear".equals(event.getVariable("stage" + stage))) {
                    var count = player.getAmountOfItem(4000968);
                    player.scriptProgressMessage("收集到了" + count + "個椰果。");
                    if (count >= 10) {
                        stageClear(stage);
                        player.loseItem(4000968);
                    }
                }
            }
            break;
        case 34:
            if (itemId == 4009235) {
                if (!"clear".equals(event.getVariable("stage" + stage))) {
                    var count = player.getAmountOfItem(4009235);
                    player.scriptProgressMessage("收集到了" + count + "個紫色皮革。");
                    if (count >= 10) {
                        stageClear(stage);
                        player.loseItem(4009235);
                    }
                }
            }
            break;
    }
}

function stageClear(stage) {
    event.setVariable("stage" + stage, "clear");
    player.screenEffect("quest/party/clear");
    event.getVariable("map" + stage).blowWeatherEffectNotice("你現在可以前往下一層了。", 147, 15000);
}

function timerExpired(key) {
    switch (key) {
        case "kick":
            kick();
            break;
        case "s7_time":
            var stage = parseInt(event.getVariable("stage"));
            stageClear(stage);
            break;
        case "spawnMob":
            spawnMob();
            break;
        case "warp14_clear":
            player.changeMap(event.getVariable("map14_2"));
            break;
        case "changeMobS38":
            changeMobS38();
            break;
        case "S40_bosscheck":
            var s40Map = event.getVariable("map40");
            if (s40Map != null) {
                let s40Boss = s40Map.getMobById(9309203);
                if (s40Boss != null) {
                    if (s40Boss.checkNearby(new java.awt.Point(150, 154), 180)) {
                        s40Boss.hurt(20000000);
                    }
                    event.startTimer("S40_bosscheck", 1000);
                }
            }
            break;
        case "S13_SetObstacle":
            let map_13 = event.getVariable("map13");
            map_13.createObtacleAtom(0, 5, 1, 8, -1200, 269);
            if (map_13.getPlayerCount() > 0) {
                event.startTimer("S13_SetObstacle", 1000);
            }
            break;
    }
}

function spawnMob() {
    var stage = parseInt(event.getVariable("stage"));
    switch (stage) {
        case 13:
            var Map = event.getVariable("map" + stage);
            var stage13_Value = parseInt(event.getVariable("stage13_Value"));
            for (var i = 0; i < 5; i++) {
                let mob1 = Map.makeMob(9309104);
                Map.spawnMob(mob1, -698 + (java.lang.Math.random() * 100), 270);

                let mob2 = Map.makeMob(9309105);
                Map.spawnMob(mob2, -698 + (java.lang.Math.random() * 100), 270);
            }
            stage13_Value += 1;
            event.setVariable("stage13_Value", String(stage13_Value));
            if (stage13_Value < 8 && !"clear".equals(event.getVariable("stage13"))) {
                event.startTimer("spawnMob", 3000);
            }
            break;
    }
}

function changeMobS38() {
    var stage = parseInt(event.getVariable("stage"));
    var Map = event.getVariable("map" + stage);
    if (Map != null) {
        if (!"clear".equals(event.getVariable("stage38"))) {
            var rand = parseInt(java.lang.Math.random() * 3) + 1; //第幾個圖案
            event.setVariable("stage38_check", String(rand));
            var s38_heian = parseInt(event.getVariable("stage38_cms"));
            s38_heian += 1;
            event.setVariable("stage38_cms", String(s38_heian));
            player.showSystemMessage("一共更換了 " + s38_heian + " 次黑暗氣息");
            Map.blowWeatherEffectNotice("現在請消滅這個怪物獲取黑暗點！。", 153, 3000);
            player.showScreenAutoLetterBox("Map/Effect2.img/aquaris/38F_" + rand, 0);
            event.startTimer("changeMobS38", 25000);
        }
    }
}

function kick() {
    player.setEvent(null);
    player.changeMap(EXIT_MAP);
    event.destroyEvent();
}

function deinit() {
    for (var i = 1; i <= 50; i++) { //init map
        let field = event.getVariable("map" + i);
        event.destroyMap(field);
    }
    event.destroyMap(event.getVariable("map14_1"));
    event.destroyMap(event.getVariable("map14_2"));
    player.setEvent(null);
}

function friendlyMobHurt(mob, damage) {
    var mobID = mob.getDataId();
    switch (mobID) {
        case 9309124:
            //記錄受傷
            var s19_hurt = parseInt(event.getVariable("stage19_Value"));
            s19_hurt += damage;
            event.setVariable("stage19_Value", String(s19_hurt));
            break;

    }
}

function mobHit(player, mob, damage) {
    var stage = parseInt(event.getVariable("stage"));
    switch (stage) {
        case 1:
            //累計傷害
            var s1_damage = parseInt(event.getVariable("stage1_Damage"));
            var s1_killed = parseInt(event.getVariable("stage1_killed"));
            s1_damage += damage;
            event.setVariable("stage1_Damage", String(s1_damage));
            player.scriptProgressMessage("消滅古代綠水靈 " + s1_killed + "/ 100,  累積沖擊量 " + parseInt(s1_damage / 10000) + "萬 / 5千萬");
            player.showSystemMessage("消滅古代綠水靈 " + s1_killed + "/ 100,  累積沖擊量 " + parseInt(s1_damage / 10000) + "萬 / 5千萬");
            if (s1_damage >= 50000000 && !"clear".equals(event.getVariable("stage1"))) {
                //第一關 傷害大于 50000000 完成
                stageClear(stage);
            }
            break;

        case 7:
            //受到傷害次數
            if (mob.getDataId() == 9309124) {
                var stage7_Damage = parseInt(event.getVariable("stage7_Damage"));
                stage7_Damage += 1;
                event.setVariable("stage7_Damage", String(stage7_Damage));
                player.scriptProgressMessage("請保護好受傷的探險家，他已經受到了" + stage7_Damage + "次傷害了。");
                player.showSystemMessage("請保護好受傷的探險家，他已經受到了" + stage7_Damage + "次傷害了。");
            }
            break;
        case 30:
            //受到傷害次數
            var s1_damage = parseInt(event.getVariable("stage30_Damage"));
            if (damage > s1_damage) {
                event.setVariable("stage30_Damage", String(damage));
                player.scriptProgressMessage("目前你的最大傷害值為：" + damage);
            }
            break;
    }
}

function escortDone(mob, map) {
    var stage = parseInt(event.getVariable("stage"));
    switch (stage) {
        case 19:
            stageClear(19);
            break;
        case 48:
            stageClear(48);
            break;
    }
}
