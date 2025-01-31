

/**
 *
 *
 */
let btl = [[20, 30, 50], //1
    [20, 30, 50], //2
    [20, 30, 50], //3
    [10, 30, 50], //4
    [20, 60, 100], //5
    [15, 45, 75], //6
    [30, 90, 180], //7
    [15, 45, 75], //8
    [20, 60, 100], //9
    [35, 105, 175], //10

    [30, 90, 150], //11
    [20, 30, 100], //12
    [25, 75, 125], //13
    [15, 45, 75], //14
    [15, 45, 75], //14
    [20, 60, 100], //16
    [20, 60, 100], //17
    [120, 200, 300], //18
    [40, 120, 200], //19
    [50, 150, 250], //20

    [30, 90, 150], //21
    [30, 90, 150], //22
    [30, 90, 150], //23
    [30, 90, 150], //24
    [40, 120, 200], //25
    [40, 120, 200], //26
    [60, 180, 300], //27
    [60, 180, 300], //28
    [35, 105, 175], //29
    [30, 90, 150], //30


    [30, 90, 150], //31
    [15, 45, 75], //32
    [60, 180, 300], //33
    [15, 45, 75], //34
    [60, 180, 300], //35
    [40, 120, 200], //36
    [40, 120, 200], //37
    [45, 135, 225], //38
    [35, 105, 175], //39
    [540, 570, 600]];

let stage = parseInt(player.getQuestEntryData(34502));

let questId = 18838 + stage;

let nowTime = new Date().getTime();

let event = npc.getEvent();
if (event != null) {
    let st = event.getVariable("st");
    let br = (nowTime - st) / 1000;
    let stc = btl[stage - 1];
    let cs = 0;
    if (br < stc[0]) {
        cs = 3;
    } else if (br < stc[1]) {
        cs = 2;
    } else if (br < stc[2]) {
        cs = 1;
    }
    player.updateQuestRecordEx(18838, "hack", "0");
    if (player.getIntQuestRecordEx(18838, "stage") < stage) {
        player.updateQuestRecordEx(18838, "stage", String(stage));
        player.updateQuestRecordEx(18838, "stageT", getMyDate(nowTime));
    }
    player.updateQuestRecordEx(18870, "timeSum", "0");
    player.updateQuestRecordEx(18870, "timeSumT", getMyDate(nowTime));

    player.updateQuestRecordEx(questId, "isClear", "1");
    player.updateQuestRecordEx(questId, "br", String(br));//時間
    player.updateQuestRecordEx(questId, "cs", String(cs));//星星
    if (!"1".equals(player.getQuestRecordEx(questId, "first"))) {
        player.updateQuestRecordEx(questId, "first", "1");
    }
    player.showPlatformerTimer(3, -1, 0, 34500);
    player.updateQuestRecordEx(34500, "time", "0");
    player.updateQuestRecordEx(34500, "type", "0");


    let starSum = 0;
    for (let i = 18839; i <= 18879; i++) {
        starSum += player.getIntQuestRecordEx(i, "cs");
    }
    player.updateQuestRecordEx(18869, "starSum", String(starSum));
    player.updateQuestRecordEx(18869, "starSumT", getMyDate(nowTime));

    player.setInGameCurNodeEventEnd(true);
    player.setStandAloneMode(true);
    player.setInGameDirectionMode(true, true, true, false);

    player.showScreenAutoLetterBox("monsterPark/clearF", 0);
    player.soundEffect("Sound/MiniGame.img/prize");
    player.showWeatherEffectNotice("已通關，前往大廳。", 212, 2000);
    npc.setDelay(100);
    player.setUserEmotionLocal(10, 3000);
    player.scriptProgressMessage(player.getName() + "以" + cs + "顆星通關！");
    player.soundEffect("Sound/MiniGame.img/Catch");

    player.showAvatarOriented("Effect/CharacterEff.img/12thMiniGame/getMesso2");
    npc.setDelay(2400);

    player.setInGameDirectionMode(false, true, false, false);
}
player.changeMap(993001000, 0);


function getMyDate(str) {
    var oDate = new Date(str),
        oYear = oDate.getFullYear(),
        oMonth = oDate.getMonth() + 1,
        oDay = oDate.getDate(),
        oHour = oDate.getHours(),
        oMin = oDate.getMinutes(),
        oSen = oDate.getSeconds(),
        oTime = oYear + addZero(oMonth) + addZero(oDay) + addZero(oHour) + addZero(oMin) + addZero(oSen);
    return (oTime + "").substr(2);
}

//補零操作
function addZero(num) {
    if (parseInt(num) < 10) {
        num = '0' + num;
    }
    return num;
}