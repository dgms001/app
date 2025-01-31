/* This is a piece of code

 * author dgms

 * global player

 * Contact QQ 381991414 DC dgms#6650

 * function resetmobs

 */


let mapA = map.getId();
var timeStamp = java.lang.System.currentTimeMillis();
var min = 2 * 60; //一分鐘 這裏自己改時間
var time = parseInt(min - (((timeStamp - parseInt(player.getQuestRecordEx(100000001))) / 1000)));


if (time >= 0) {
    npc.askMenuA("#fs15##b使用頻率請不要超過1次/" + min / 60 + "分鐘,\r\n" + time + "秒後可再次使用。");
} else if (mapA == 980001701 || mapA == 980001601 || mapA == 910510400) { //這裏加入不可用地圖
    npc.askMenuA("#fs15##b當前地圖不可使用該功能!");
} else {
    resetmap();
}

function resetmap() {
    let mapB = map.getEventMobCount();
    let mobs = 10;//自選修改 建議大於5+
    if (mapB < mobs) {
        npc.askMenuA("\r\n\r\n\r\n\r\n\t\t\t\t#fs16##e#b當前地圖怪物數量:" + mapB + "\t不可使用本功能\r\n\r\n\t\t\t\t#r副本地圖使用本功能會導致無法通關");
    } else {
        //這裏執行地圖怪物刷新
        map.reset();
        player.updateQuestRecordEx(100000001, timeStamp);
        npc.askMenuA("#fs15##b已刷新地圖");
    }
}