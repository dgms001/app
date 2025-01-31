date = new Date();
let week = date.getDay();
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let mapA = map.getId();
if (mapA != 100000000 && mapA != 101000000 && mapA != 102000000 && mapA != 800000000 && mapA != 252000000 && mapA != 224000000 && mapA != 273000000 && mapA != 271010000) {
    npc.say("當前地圖神秘商人不會發揮神秘之力,無法使用");
} else if (hour >= 21) {
    putong();
} else {
    npc.say("只有21點後才可以找我買東西");
    player.changeMap(100000000);
}
function chuci() {
    var AS = Math.floor(Math.random() * 5); // 配合迴圈
    let pass = Math.floor(Math.random() * getMinAndMax(1000000, 9999999)); // 密碼
    selection = npc.askNumber("密碼為" + pass + "\r\n輸入密碼：", 1, 1, 9999999);
    if (pass != selection) {
        npc.say("密碼錯誤");
    } else if (selection == pass) {
        player.addEventValue("檢測一次限購", 1, 1);
        if (AS == 0) {
            player.runScript("全服限購隨機1")
        } else if (AS == 1) {
            player.runScript("全服限購隨機1")
        } else if (AS == 2) {
            player.runScript("全服限購隨機1")
        } else if (AS == 3) {
            player.runScript("全服限購隨機1")
        } else if (AS == 4) {
            player.runScript("全服限購隨機1")
        } else if (AS == 5) {
            player.runScript("全服限購隨機1")
        }
    }
}

function putong() {
    var AS = Math.floor(Math.random() * 5); // 配合迴圈
    if (AS == 0) {
        player.runScript("全服限購隨機1")
    } else if (AS == 1) {
        player.runScript("全服限購隨機1")
    } else if (AS == 2) {
        player.runScript("全服限購隨機1")
    } else if (AS == 3) {
        player.runScript("全服限購隨機1")
    } else if (AS == 4) {
        player.runScript("全服限購隨機1")
    } else if (AS == 5) {
        player.runScript("全服限購隨機1")
    }
}
function getMinAndMax(minVal, maxVal) { //隨機 最大值 最小值
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}
