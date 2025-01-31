/**
 * OXQuiz
 * @author Yukinoshita
 * @description OXQuiz
 */
let endTime;
let waitTime = 60000 * 10; //開始OX活動後等待報名的時間
let endOXQuizTime = 30 * 60 * 1000; //活動開始後自動銷毀活動的時間
let minSize = 0; //最小報名人數

let WAIT_FIELD = 910048000;
let EVENT_FIELD = 910048100;
let OUT_FIELD = 910048200;
let oxInfo = {
    //等待多少秒後開始活動
    waitTime: 10000,
    //使用問題列表中的多少個問題，輸入0為全部使用
    questionCount: 30,
    //答錯多少題目後被淘汰
    wrongCount: 8,
    //出示問題後等待多少毫秒公布答案
    questionWaitTime: 10000,
    //公布答案後等待多少毫秒出示下壹個問題
    nextQuestionWaitTime: 5000,
    //準備期間說的話
    says: [
        "是問題留下！還是我留下！",
        "左邊？右邊？在數字倒數結束之前，壹定要慎重選擇！",
        "大家都到下面來，仔細聽清楚問題。認為是對的話，就選O！錯的話，就選X！",
        "好的，現在馬上開始。激動人心的OX！",
        "壹定要好好選擇。如果在中間猶豫不決的話，就馬上會被淘汰！",
        "答對的問題越多，便可獲得越多的獎勵哦。妳的常識怎麽樣呢？",
        "即使中途被淘汰，在原地幫好友們加油的話，可以獲得額外獎勵！"
    ],
    //問題庫 ["問題", "答案文本", O為true, X為false]
    questions: [
        ["圓夢谷可以私下現金交易嗎。", "不能,私下交易必ban。", false],//	x
        ["圓夢谷可以代斗交易嗎。", "可以,找柯南開單。", true],//	x
        ["圓夢谷蘋果大獎機率高嗎。", "很高,只要你不是酋長。", true],//	x
        ["聽說圓夢玩家都很友善。", "是的,薩摩耶除外。", true],//	x
        ["柯南今年18歲。", "是的。", true],//	x
        ["柯南帥嗎。", "是的。", true],//	x
        ["彩虹有七種顏色第一個發聲的是牛頓。", "是的。", true],//	o
        ["美國第35任總統尼克森在1963年被刺身亡。", "不對。", false],//	o
        ["哈利皮特是英國女作家J.K.羅琳創作的系列小說。", "不對。", false],//	o
        ["柯南是狼牙棒嗎?。", "是的。", true],//	x
        ["耶誕節是為了紀念耶穌的誕辰。", "是的。", true],//	o
        ["在英國和日本，汽車都是靠左行駛的。", "是的。", true],//	x
        ["網球王子費德勒和他的宿敵納達爾都是右手持拍選手。", "不對。", false],//	x
        ["柯南是單身嗎。", "是的。", true],//	x
        ["熱火隊是美國佛羅里達州邁阿密的職業籃球隊。", "是的。", true],//	o
        ["人的眼部肌肉每天運動的次數高達10萬次。", "是的。", true],//	x
        ["上帝之手說的是馬拉多納的右手。", "不對。", false],//	x
        ["奢侈品牌路易威登於1854在巴黎誕生。", "是的。", true],//	o
        ["女子撐杆跳高的世界紀錄是5米.", "不對！", false],//	o
        ["沒有一張紙可對折超過6次。", "不對。", false],//	x
        ["文房四寶說的是筆、墨、書、硯。", "不對", false],//	o
        ["寶馬早期是製造飛機發動機的公司，藍白標誌代表螺旋槳。", "不對", false],//	x
        ["珍珠在醋中會溶掉。", "是的", true],//	x
        ["球王貝利參加了2012年倫敦奧運會閉幕式”。", "是的。", true],//	x
        ["NBA球星威爾特·張伯倫是被稱為“遠古四大前鋒”之一。", "不對。", false],//	o
        ["法國奢侈品牌愛馬仕最初是靠製造高級馬具而起家。", "是的。", true],//	x
        ["龍神的龍叫米勒嗎。", "不對。", false],//	o
        ["柯南是甲。", "不對。", false],//	o
        ["鉆石星塵是戰神的技能嗎。", "不對。", false],//	x
        ["傑諾是屬於單獨勢力嗎", "不對！", false],//	o
        ["生命超越者是阿塔莎", "不對！", false],//	o
        ["馬加提亞是黑魔法師研究黑暗魔法的場所。", "不對。", false],//	x
        ["黑暗龍王是被冒險家封印的。", "不對。", false],//	x
        ["想進入海底世界必需裝備空氣鈴。", "不對。", false],//	x
        ["九靈龍戰勝了黑暗龍王", "不對。", false],//	x
        ["黑色翅膀是史烏成立的組織。", "不對。", false],//	o
        ["盜賊職業都可以隱身。", "不對。", false],//	o
        ["番茄是水果類。", "不對。", false],//	x
        ["《新楓之谷》希拉為皇家騎士團的女皇。", "不對。", false],//	x
        ["煉獄巫師教官的名字是貝爾。", "不對。", false],//	o
        ["邱比特公園在奇幻村。", "不對。", false],//	x
        ["柯南一米八。", "不對。", false],//	o
        ["時間神殿中沒有過去之門。", "不對。", false],//	o
        ["塔蘭特系列以星力系統最高可強化至25星。", "不對。", false],//	o
        ["狂狼勇士不隸屬於英雄職業。", "不對。", false],//	o
        ["殺人鯨與史烏是最晚加入的軍團長", "不對", false],//	x
        ["黃金寺廟的BOSS有八隻手。", "不對。", false],//	o
        ["黑魔法師與白魔法師為敵對關係", "不對！", false],//	o
        ["蒙娜麗莎沒有眉毛", "是的", true],//	x
        ["FaceBook已正式更名為Meta。", "是的。", true],//	o
        ["阿卡伊農是時間神官。", "是的。", true],//	o
        ["通往艾靈森林的傳送門在赫爾奧斯塔。", "是的。", true],//	o
        ["艾靈森林是過去的魔法森林。", "是的。", true],//	o
        ["屠龍手會計小姐過去不是負責戰地方面的服務。", "是的。", true],//	o
        ["末日反抗軍的成員大多為埃德爾斯坦的市民。", "是的。", true],//	o
        ["神之子職業的武器為成長型武器。", "是的。", true],//	o
        ["影武者目前歸類為冒險家職業群。", "是的。", true],//	o
        ["超新星的天使破壞者屬海盜職業。", "是的。", true],//	o
        ["柯南帥嗎。", "是的。", true],//	x
        ["幻獸師為法師系職業", "是的", true],//	o
        ["《新楓之谷》圖騰欄位為3個", "是的！", true],//	x
        ["iOS是由蘋果公司開發的手持設備操作系統。", "是的。", true],//	x
        ["惡魔殺手是軍團長之一。", "是的。", true],//	x
        
    ]
}
let aggregate = [];
function init(attachment) {
    event.setVariable("Players", aggregate);
    event.setVariable("Closed", false);
    event.setVariable("Reward", []);
    endTime = new Date().getTime() + waitTime;
    event.setVariable("endTime", endTime);
    event.startTimer("StartOXQuiz", waitTime);
    event.startTimer("EndOXQuiz", endOXQuizTime);
}



function timerExpired(key) {
    switch (key) {
        case "StartOXQuiz": {
            let players = event.getVariable("Players");
            if (players.length >= minSize) {
                event.getMap(EVENT_FIELD).prepareStartOXQuizEvent(JSON.stringify(oxInfo), event);
                for (let i = 0; i < players.length; i++) {
                    players[i].changeMap(EVENT_FIELD);
                }
                event.setVariable("Closed", true);
                event.stopTimer("EndOXQuiz")
            } else {
                event.getMap(WAIT_FIELD).blowWeather(5120014, "人數不足" + minSize + ",活動取消。");
                event.destroyEvent();
            }
            break;
        }
        case "EndOXQuiz": {
            /*playercount = event.getVariable("Players");
            for (var i in playercount) {
                var players = playercount[i];
                if (players == null) continue;
                players.changeMap(OUT_FIELD);
            }
            event.destroyEvent();
            break;*/
            var maps = event.getMap(EVENT_FIELD);
            var mplayers = maps.getPlayers();
            for (var u in mplayers) {
                mplayers[u].changeMap(OUT_FIELD);
            }
            event.destroyEvent();
            break;
        }
    }
}

function playerChangedMap(player, destination) {
    switch (destination.getId()) {
        case WAIT_FIELD:
            player.showTimer((endTime - new Date().getTime()) / 1000);
            break;
        case EVENT_FIELD:
            break;
        default:
            removePlayer(player.getId());
            break;

    }
}


/**
 * OX活動結果
 * @typedef OXQuizResult
 * @type {Object}
 * @property {Object[]} result 
 * @property {string} result[].name 玩家名字
 * @property {number} result[].id 玩家ID
 * @property {number} result[].right 正確的數量
 * @property {number} result[].wrong 錯誤的數量
 * @property {boolean} result[].eliminate 是否被淘汰
 * @property {boolean} result[].leave 是否中途離場
 * @description 所有人都被淘汰或題目全部提問完畢時會調用此函數
 */


/**
 * OX活動結束
 * @param {String} resultJson
 * @description 所有人都被淘汰或題目全部提問完畢時會調用此函數
 */
function endOXQuiz(resultJson) {
    /**
     * @type {OXQuizResult}
     */
    let json = JSON.parse(resultJson)
    event.setGlobalVariable("OXResult", json)
    let result = json.result
    for (let idx in result) {
        let p = result[idx]
        let name = p.name
        let id = p.id
        let right = p.right
        let wrong = p.wrong
        let eliminate = p.eliminate
        let leave = p.leave
    }
    event.stopTimer("EndOXQuiz")
    event.startTimer("EndOXQuiz", 10000);
}

function removePlayer(playerId) {
    let players = event.getVariable("Players");
    for (let i in players) {
        if (players[i].getId() == playerId) {
            players[i].setEvent(null);
            players[i].closeTimer();
            players.splice(i, 1);
            break;
        }
    }
    if (players.length == 0) {
        event.destroyEvent();
    }
}

function deinit() {
    let players = event.getVariable("Players");
    for (let i = 0; i < players.length; i++) {
        players[i].closeTimer();
        players[i].setEvent(null);
    }
}
