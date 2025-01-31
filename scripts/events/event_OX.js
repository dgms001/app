//OX問答 by dgms qq:381991414


let time = 200 * 1000; //廣播後 給玩家幾秒的準備時間

let player;
let players = [];

let map, map1, map2;
let number = 30; //最多答題數
let killNumber = 10; //可以答錯多少次
let nowNumber = 0;
let nowAsk;

//題庫
let askArray = Array(
        //問題 答案（0=不是 1=是） 0是錯  1是對
        Array("幻象谷支持私下現金交易嗎? ", 0),
        Array("幻象谷支持斗內交易嗎? ", 1),
        Array("曾經有一個叫小熊的傻逼屢教不改的賣號? ", 1),
        Array("幻象谷支持腳本玩家生存嗎? ", 0),
        Array("幻象谷是不是有一個叫呆逼的GM? ", 1),
        Array("幻象谷是不是有一個帥逼GM? ", 1),
		
        Array("艾莉亞是死在奧爾卡手上嗎? ", 0),
        Array("龍神的龍叫米勒嗎？", 0),
        Array("冰鳳凰是神射手的召喚物嗎?", 0),
        Array("鉆石星塵是戰神的技能嗎？", 0),
        Array("傑諾是屬於單獨勢力嗎?", 0),
        Array("生命超越者是阿塔莎？", 0),
        Array("馬加提亞是黑魔法師研究黑暗魔法的場所？", 0),
        Array("獅子城堡城主班·雷昂是自愿成為軍團戰的？", 0),
        Array("黑暗龍王是被冒險家封印的？", 0),
        Array("想進入海底世界必需裝備空氣鈴？", 0),
        Array("九靈龍戰勝了黑暗龍王？", 0),
        Array("黑色翅膀是史烏成立的組織? ", 0),
        Array("盜賊職業都可以隱身?", 0),
        Array("幻象谷是魔森端嗎?", 0),
        Array("披頭四的樂團主唱是艾爾頓約翰?", 0),
        Array("番茄是水果類?", 0),
        Array("《新楓之谷》希拉為皇家騎士團的女皇", 0),
        Array("煉獄巫師教官的名字是貝爾?", 0),
        Array("[設定鍵盤]的熱鍵為[/]?", 0),
        Array("邱比特公園在奇幻村?", 0),
        Array("露塔必思裡總共有8扇封印之門、分別有8個Boss?", 0),
        Array("黑色翅膀的首領為阿卡伊農?", 0),
        Array("時間神殿中沒有過去之門?", 0),
        Array("塔蘭特系列以星力系統最高可強化至25星?", 0),
        Array("狂狼勇士不隸屬於英雄職業?", 0),
        Array("童話故事三隻小豬 最後小豬都被大野狼吃掉了?", 0),
        Array("希茲克利夫是血盟騎士團團長 也是100層的BOSS 還是茅場晶彥", 0),
        Array("卡利納手上拿的是蘋果 ?", 0),
        Array("殺人鯨與史烏是最晚加入的軍團長? ", 0),
        Array("瘋狂喵Z客是不夜城會出現的BOSS?", 0),
        Array("黃金寺廟的BOSS有八隻手?", 0),
        Array("黑魔法師與白魔法師為敵對關係?", 0),
        Array("凱內西斯擅長下象棋?", 0),
        Array("天空之島克里塞是小人族的國度?", 0),
        Array("天之星為耶雷弗女皇的信物?", 0),
        Array("E=mc平方是貝多芬提出的?", 0),
        Array("光速每秒30公里?", 0),
        Array("太陽系位於仙女星系?", 0),
        Array("假設人類造出光速飛船不考慮壽命 人類能否飛離本星系?", 0),
        Array("法師一轉等級為10級?", 1),
        Array("如果月亮正好在頭頂上方 那麼你的體重會稍微的減少。", 1),
        Array("蒙娜麗莎沒有眉毛?", 1),
        Array("零維空間是一個點?", 1),
        Array("一維空間是一條線", 1),
        Array("二維空間是平面?", 1),
        Array("三維空間是立體?", 1),
        Array("四維空間是時間?", 1),
        Array("太陽系位於拉尼亞凱亞超星系團?", 1),
        Array("銀河系有四個臂?", 1),
        Array("非洲的馬賽族族人視力可達8.0?", 1),
        Array("時間是可以被伸縮的嗎?", 1),
        Array("目前宇宙的膨脹速度大於光速嗎?", 1),
        Array("FaceBook已正式更名為Meta?", 1),
        Array("阿卡伊農是時間神官?", 1),
        Array("通往艾靈森林的傳送門在赫爾奧斯塔?", 1),
        Array("艾靈森林是過去的魔法森林?", 1),
        Array("屠龍手會計小姐過去不是負責戰地方面的服務?", 1),
        Array("末日反抗軍的成員大多為埃德爾斯坦的市民?", 1),
        Array("卡蒂娜曾經是龍族王室成員?", 1),
        Array("凱殷與卡蒂娜的主線劇情一開始在同一顆星球上?", 1),
        Array("夜使者的散式投擲會讓四飛閃附加四個方向?", 0),
        Array("威爾是因為渴求更多的知識才加入黑魔法師陣營?", 1),
        Array("冒險家職業的劍士總共有三種職業分歧。", 1),
        Array("桐人擺出星爆氣流斬姿勢是右手在上, 左手在下", 1),
        Array("蒙特鳩協會長為卡森，卡帕萊特協會長為麥德。", 1),
        Array("蠟筆小新的妹妹叫做小葵。", 1),
        Array("燕窩主要是由燕子的口水做成的?", 1),
        Array("《白雪公主》的作者是格林兄弟。", 1),
        Array("神之子職業的武器為成長型武器?", 1),
        Array("影武者目前歸類為冒險家職業群?", 1),
        Array("超新星的天使破壞者屬海盜職業?", 1),
        Array("超新星族所在的世界為格蘭帝斯?", 1),
        Array("幻獸師為法師系職業?", 1),
        Array("暗黑天堂為一艘巨大的飛行船?", 1),
        Array("軍團長阿卡伊農原為時間女神優伊娜身邊的神官之一?", 1),
        Array("軍團長希拉原本為阿旺斯的巫女?", 1),
        Array("狂狼勇士是封印黑魔法師的英雄之一?", 1),
        Array("梅格耐斯是超新星的戰士?", 1),
        Array("印度的人民多半不吃牛肉?", 1),
        Array("水果皮是廚餘?", 1),
        Array("神木村不在冰原雪域山派地區?", 1),
        Array("《新楓之谷》圖騰欄位為3個?", 1),
        Array("《新楓之谷》幻獸師的四個動物中，巨熊的名子是 波波 ?", 1),
        Array("聽說幻象谷之後會加開很多副本?", 1),
        Array("聽說幻象玩家都很友善?", 1),
        Array("聽說幻象谷沒有MVP裝備?", 1),
        Array("幻象谷大獎機率高嗎?", 1),
        Array("冒險家是為了救小乖和小強來到的楓之谷世界嗎？", 1),
        Array("戰神的矛叫摩訶嗎？", 1),
        Array("惡魔殺手是軍團長之一?", 1),
        Array("光之超越者就是黑魔法師？", 1),
        Array("神之子是時間超越者？", 1),
        Array("艾爾達是楓之谷世界的基礎？", 1),
        Array("阿卡伊勒是時間神官？", 1),
        Array("希拉曾經是阿斯旺的守護者？", 1),
        Array("楓之谷騎士團有5個職業？", 1),
        Array("惡魔獵手的家在神木村？", 1),
        Array("赫麗娜是希望之子？", 1),
        Array("《上古魔書》記載了強大的魔法？", 1),
        Array("雅典娜女神是天空之城的守護者？", 1),
        Array("吉格蒙特是反抗者的首領？", 1),
        Array("雪姬建立秘密組織“飛花院”是為了報殺父之仇？", 1),
        Array("隱月自我犧牲當了祭品所以被其他人遺忘？", 1),
        Array("隱月的名字是阿瑯幫他起的？", 1));

function init(attachment) {
    player = attachment;
    map = event.getMap(910048000);
    map1 = event.getMap(910048100);
    map2 = event.getMap(910048200);
    map.showTimer(time / 1000);
    event.setVariable("canPut", "1");
    event.startTimer("canPut0", time);
    event.setVariable("players", players);

    map.blowWeather(5120199, "開始報名參賽，點擊<根迪>報名吧");
}

function removePlayer(playerId, changeMap) {
    event.destroyEvent();
}

function playerDisconnected(player) {
    removePlayer(player.getId(), false);
}

function playerChangedMap(player, destination) {}

function partyMemberDischarged(party, player) {
    removePlayer(player.getId(), false);
}

function timerExpired(key) {
    switch (key) {

    case "canPut0":
        event.setVariable("canPut", "0");
        map.showTimer(5);
        map.blowWeather(5120000, "停止報名，5秒後傳送到問答地圖！");
        event.startTimer("start", 5);
        break;

    case "start":
        players = event.getVariable("players");

        for (var i = 0; i < players.length; i++) {
            try {
                players[i].changeMap(910048100);
            } catch (e) {}
        }
        //map1 = event.getMap(910048100);
        map1.showTimer(30);
        /*var selStr = "#fn微軟正黑體#【OX問答】:總共 <"+number+"> 題\r\n每題只有 15 秒時間作答！\r\n20秒後開始答題!!";
        players[i].addPopupSay(9111001, 15000, selStr, "");*/
        map1.blowWeather(5120199, "20秒後開始問答啦！");

        event.startTimer("wd", 20 * 1000);

        break;

    case "wd":

        //隨機題目
        var ran = Math.floor(Math.random() * askArray.length);
        var askA = (askArray.splice(ran, 1) + "").split(",");
        nowAsk = askA[1];
        //event.setVariable("nowAsk", nowAsk[0]);

        nowNumber++;
        event.setVariable("nowNumber", nowNumber);
        map1.blowWeather(5120199, "第" + nowNumber + "題:" + askA[0]);

        for (var i = 0; i < players.length; i++) {
            try {
                var playerKill = event.getVariable(players[i].getName() + "Kill"); //錯誤次數
                if (playerKill >= killNumber) {}
                else {
                    var selStr = "題目" + nowNumber + " :" + askA[0] + "\r\n";
                    players[i].addPopupSay(9111001, 15000, selStr, "");
                    //players[i].scriptProgressMessage("【OX問答】:總共 <"+number+"> 題，當前第 <"+nowNumber+"> 題 :");
                    //players[i].scriptProgressMessage("【OX問答】:你只有 15 秒時間作答！請趕快！");
                    //players[i].showSystemMessage("題目:" + askA[0]);
                    //players[i].scriptProgressMessage("【OX問答】:如果你認為是正確的請到<O區域> 否則請前往<X區域>");
                    players[i].scriptProgressMessage("如果你認為是正確的請到<O區域> 否則請前往<X區域>");
                    players[i].scriptProgressMessage("如果你認為是正確的請到<O區域> 否則請前往<X區域>");
                    players[i].scriptProgressMessage("如果你認為是正確的請到<O區域> 否則請前往<X區域>");
                }
            } catch (e) {}
        }

        map1.showTimer(15);
        event.startTimer("end", 15 * 1000);
        break;

    case "end":
        var maxY = 575;
        var minY = -20;

        //橫坐標分割線
        var splitX = -664;

        for (var i = 0; i < players.length; i++) {
            try {

                var playerKill = event.getVariable(players[i].getName() + "Kill"); //錯誤次數
                var playerGrade = event.getVariable(players[i].getName() + "Grade");
                var playerReward = event.getVariable(players[i].getName() + "Reward");

                if (playerKill >= killNumber) {
                    //players[i].showSystemMessage("【OX問答】:你已經輸了哦，無法再進行答題了!你的最終積分為："+parseInt(playerGrade));
                } else {
                    //玩家坐標獲取
                    var playerX = players[i].getPosition().getX();
                    var playerY = players[i].getPosition().getY();

                    if (playerY > maxY || playerY < minY) {
                        players[i].showSystemMessage("【OX問答】:你已經失敗了，或者你所處位置不對，本題無效!");
                    } else if (playerX > splitX && nowAsk == "0") {
                        playerGrade++;
                        event.setVariable(players[i].getName() + "Grade", playerGrade); //分數
                        players[i].showSystemMessage("【OX問答】:回答正確，當前積分為 " + parseInt(playerGrade));
                        players[i].showSystemMessage("【OX問答】:回答正確，當前積分為 " + parseInt(playerGrade));
                        players[i].showSystemMessage("【OX問答】:回答正確，當前積分為 " + parseInt(playerGrade));

                    } else if (playerX <= splitX && nowAsk == "1") {
                        playerGrade++;
                        event.setVariable(players[i].getName() + "Grade", playerGrade); //分數
                        players[i].showSystemMessage("【OX問答】:回答正確，當前積分為 " + parseInt(playerGrade));
                        players[i].showSystemMessage("【OX問答】:回答正確，當前積分為 " + parseInt(playerGrade));
                        players[i].showSystemMessage("【OX問答】:回答正確，當前積分為 " + parseInt(playerGrade));
                    } else {
                        playerKill++;
                        if (playerKill >= killNumber) {
                            players[i].showSystemMessage("【OX問答】:很遺憾，你已經失敗" + killNumber + "次，無法繼續答題了。你的最終積分為：" + parseInt(playerGrade));
                            players[i].showSystemMessage("【OX問答】:很遺憾，你已經失敗" + killNumber + "次，無法繼續答題了。你的最終積分為：" + parseInt(playerGrade));
                            players[i].showSystemMessage("【OX問答】:很遺憾，你已經失敗" + killNumber + "次，無法繼續答題了。你的最終積分為：" + parseInt(playerGrade));
                            if (playerReward == 0)
                                players[i].runScript("OX獎勵");
                        } else {
                            players[i].showSystemMessage("【OX問答】:回答錯誤,你已失敗" + playerKill + "次，還有" + (killNumber - playerKill) + "次機會！當前積分為：" + parseInt(playerGrade));
                            players[i].showSystemMessage("【OX問答】:回答錯誤,你已失敗" + playerKill + "次，還有" + (killNumber - playerKill) + "次機會！當前積分為：" + parseInt(playerGrade));
                            players[i].showSystemMessage("【OX問答】:回答錯誤,你已失敗" + playerKill + "次，還有" + (killNumber - playerKill) + "次機會！當前積分為：" + parseInt(playerGrade));
                        }
                        event.setVariable(players[i].getName() + "Kill", playerKill); //分數
                    }
                }
            } catch (e) {}
        }

        if (nowNumber >= number) {
            for (var i = 0; i < players.length; i++) {
                try {
                    var playerReward = event.getVariable(players[i].getName() + "Reward");
                    //players[i].changeMap(910048200);
                    if (playerReward == 0)
                        players[i].runScript("OX獎勵");
                } catch (e) {}
            }
            map1.blowWeather(5120000, "活動結束，獎勵已發");
            event.startTimer("return", 5 * 1000);
        } else {
            event.startTimer("wd", 15 * 1000);
            map1.blowWeather(5120000, "15秒後開始下一題")
        }
        map1.showTimer(5);
        break;
    case "return":
        map2.showTimer(5);
        map2.blowWeather(5120000, "請自行離開地圖哦");
        event.startTimer("kick", 5 * 1000);
        break;
    case "kick":

        /*for(var i = 0; i<players.length ;i++){
        try{
        players[i].changeMap(910048200);
        }catch(e){

        }
        }*/

        event.destroyEvent();
        break;

    }
}

function deinit() {
    removePlayer(player.getId(), true);
}
