/**
 * Gatekeeper, Sharenian: Door to the Sharenian Castle (990000500)
 *
 *
 */

let max_try = 7;
let event = npc.getEvent("guild_quest");
if (event != null) {
    let leader = event.getVariable("leader");
    let state = event.getVariable("state_s3");
    if (leader.equals(player.getName())) {
        if (state == null) {
            event.setVariable("state_s3", "0");
            makeCombo();
            npc.sayNext("歡迎來到第三關，我是通往祕密房間的守護人。 請貢獻出祭品放在石像前面， 石像會告訴你們它們會接受什麼祭品，如果放了錯誤的祭品，石像會發怒的。 你一共有7次機會來擺放這些祭品。祝你好運！");
        } else {
            if ("clear".equals(state)) {
                npc.sayNext("你已經完成了我對你們的考驗，請快進入下一箇地圖迎接挑戰吧！");
            } else {
                action();
            }
        }
    } else {
        npc.say("歡迎來到第三關，我是通往祕密房間的守護人。 請貢獻出祭品放在石像前面， 石像會告訴你們它們會接受什麼祭品，如果放了錯誤的祭品，石像會發怒的。 你一共有7次機會來擺放這些祭品。祝你好運！");
    }
} else {
    npc.say("發生未知錯誤，請離開後重新進入。");
}


function action() {
    let checkArea = true;
    let results = [0, 0, 0];
    let oblations = event.getVariable("oblation");
    for (let i = 1; i <= 4; i++) {
        let str = String(i);
        if (map.getNumItemsInArea(str) == 1) {
            let idx = i - 1;
            let oblation = oblations[idx];
            for (let item = 4001027; item <= 4001030; item++) {
                if (map.getNumItemsInArea(str, item) > 0) {
                    if (oblations.indexOf(item) > -1) {
                        if (item == oblation) {
                            results[0] += 1;
                        } else {
                            results[1] += 1;
                        }
                    } else {
                        results[2] += 1;
                    }
                }
            }
        } else {
            checkArea = false;
            break;
        }
    }
    if (checkArea) {
        let tryCount = parseInt(event.getVariable("oblation_try")) + 1;
        event.setVariable("oblation_try", tryCount);
        let clear = results[0] >= 4;
        if (clear) {
            event.setVariable("state_s3", "clear");
            map.setReactorState("watergate", 1, 0);
            map.soundEffect("Party1/Clear");
            map.screenEffect("quest/party/clear");
            player.gainGuildCommitment(200);
            npc.say("恭喜你們成功完成這個考驗，現在你可以進入下一箇關卡了。");
        } else if (tryCount > max_try) {
            makeCombo();
            npc.say("你沒有透過此項測試，請重新擺放祭品，做好準備後再跟我談話吧。");
        } else {
            let str = "\r\n#r";
            if (results[0] > 0) {
                str += results[0] + "個#k石像覺得祭品正確。\r\n#r";
            }
            if (results[1] > 0) {
                str += results[1] + "個#k石像收到了錯誤的祭品。\r\n#r";
            }
            if (results[2] > 0) {
                str += results[2] + "個#k石像收到了不認識的祭品。\r\n#r";
            }
            str += "\r\n#k這是你的第#e#r" + tryCount + "次#n#k嘗試。";
            npc.sayNext(str);
        }
    } else {
        npc.say("請確保所有的祭品都擺放在正確的位置後再試,請不要擺放不是祭品的物品。");
    }

}

function makeCombo() {
    event.setVariable("oblation_try", 0);
    let oblation = [];
    for (var i = 0; i < 4; i++) {
        let rnd = 4001027 + Math.floor(Math.random() * 4);
        oblation.push(rnd);
    }
    event.setVariable("oblation", oblation);
}