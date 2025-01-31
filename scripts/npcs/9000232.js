/**
 * Event : 跑旗賽 - rank
 * @author dgms
 * QQ:381991414
 */


let rankReward = [
    /*[1, 2431302, 150],//寶物箱子
    [1, 2431303, 120],//神秘寶物箱子
    [1, 2048717, 5],//永遠的涅槃火焰	
    [1, 5062024, 10],//閃炫魔方
    [1, 2431743, 3],//抵用券10000商品券
    [1, 2431048, 10],//卷軸箱
    [1, 3991006, 50000], //GP
    [1, 3991018, 1], //SP

    //[2,4034848,30],
    [2, 2048717, 3],//永遠的涅槃火焰
    [2, 5062024, 5],//閃炫魔方
    [2, 2431743, 2],//抵用券10000商品券
    [2, 2431302, 100],
    [2, 2431303, 100],
    [2, 2431048, 9],//卷軸箱
    [2, 3991006, 40000], //GP
    [2, 3991018, 1], //SP

    //[3,4034848,15],
    [3, 5062024, 5],
    [3, 2048717, 2],
    [3, 2431743, 1],
    [3, 2431302, 100],
    [3, 2431303, 80],
    [3, 2431048, 8],//卷軸箱
    [3, 3991006, 30000], //GP
    [3, 3991018, 1], //SP

    [4, 5062024, 3],
    [4, 2048717, 1],
    [4, 2048716, 1],
    [4, 2431743, 1],
    [4, 2431302, 80],
    [4, 2431303, 50],
    [4, 2431048, 7],//卷軸箱
    [4, 3991006, 20000], //GP

    [5, 5062024, 3],
    [5, 2431302, 50],
    [5, 2431303, 50],
    [5, 2431743, 1],
    [5, 2048716, 1], 
    [5, 2431048, 6],//卷軸箱
    [5, 3991006, 20000], //GP*/

    [1, 4001713, 100], //定居10萬
    [1, 4032053, 500], //楓點
    [1, 5062009, 120], //紅色方塊
    [1, 4310071, 20], //幣



    [2, 4001713, 80], //定居10萬
    [2, 4032053, 400],
    [2, 5062009, 100], //紅色方塊
    [2, 4310071, 15], //幣

    [3, 4001713, 60], //定居10萬
    [3, 4032053, 250],
    [3, 5062009, 80], //紅色方塊
    [3, 4310071, 12], //幣

    [4, 4001713, 50], //定居10萬
    [4, 4032053, 150],
    [4, 5062009, 60], //紅色方塊
    [4, 4310071, 10], //幣

    [5, 4001713, 40], //定居10萬
    [5, 4032053, 100],
    [5, 5062009, 40], //紅色方塊
    [5, 4310071, 8], //幣

];

let outOfRank = 5;
let outOfRankReward = [
    /*[2431302, 30],
    [2431303, 30],
    [2431048, 3],
    [3991006, 10000],*/ //GP
    [4001713, 30], //定居10萬
    [4032053, 70],
    [5062009, 30], //紅色方塊
    [4310071, 5], //幣
];

let unRankReward = [
    /*[2431303, 30],
    [2431048, 1],
    [3991006, 5000], //GP*/

    [4001713, 20], //定居10萬
    [4032053, 50],
    [5062009, 20], //紅色方塊
    [4310071, 3], //幣

]


let em = npc.getEvent("event_manager");
let event = npc.getEvent("event_pqs");
homePage:
while (true) {
    let text = "#e本次公會旗幟戰排行榜：#n#b\r\n";
    if (em != null) {
        if (em.getVariable("pqsRanking") != {}) {
            let ranking = em.getVariable("pqsRanking");
            let index = 0;
            let playerCount = 0;
            for (let player in ranking)
                playerCount++;
            let rankIndex = 0;
            for (let i = 0; i < playerCount; i++) {//至少循環人數遍
                for (let player in ranking) {
                    if (ranking[player] == null) {
                        continue;
                    }
                    if (ranking[player]["RANK"] == rankIndex) {//尋找完成的玩家的名次並排名
                        text += "#L" + rankIndex + "# 第 " + FormatString("0", 2, (rankIndex + 1)) + " 名 " + FormatString(" ", 12, player) + " TIME " + formatDuring(ranking[player]["PASTTIME"]) + "#l\r\n";
                        rankIndex++;
                        break;
                    }
                }
            }
            for (let player in ranking) {
                if (ranking[player] == null) {
                    continue;
                }
                if (ranking[player]["RANK"] == 99) {
                    text += "#L" + rankIndex + "# 未完成 " + player + " TIME: --: -- . --#l\r\n";
                }
            }
            text += "\r\n#d";
            if (ranking[player.getName()] != null) {
                if (ranking[player.getName()]["REWARDED"] == null) {
                    if (ranking[player.getName()]["RANK"] != -1) {
                        if (player.getEventValue("跑旗本週已領取") == 0) {
                            text += "#L100#領取排名獎勵。#l\r\n";
                        }
                    } else {
                        if (player.getEventValue("跑旗本週已領取") == 0) {
                            text += "#L101#領取安慰獎。#l\r\n";
                        }
                    }
                }

            }
            text += "#L104#查看歷史排名。#l\r\n";
            text += "#L102#查看各名次獎勵。#l\r\n";
            text += "#L103#出去。#l\r\n";

        }
    }

    let selection = npc.askMenuS(text);
    let playerRank = -2;
    if (em.getVariable("pqsRanking")[player.getName()] != null) {
        playerRank = em.getVariable("pqsRanking")[player.getName()]["RANK"];
    }


    text = "";
    switch (selection) {
        default:
            npc.say("這個功能還在坑裡。");
            break;
        case 100:
            if (playerRank < outOfRank && playerRank != -1) {
                text += "#e獲得了第" + (playerRank + 1) + "名的獎勵！#n\r\n";
                for (let i in rankReward) {
                    if ((rankReward[i][0] - 1) == playerRank) {
                        gainItem(rankReward[i][1], rankReward[i][2]);
                        text += "#v" + rankReward[i][1] + "##b#z" + rankReward[i][1] + "##k * " + rankReward[i][2] + "\r\n";
                    }
                    player.addEventValue("跑旗已領取", 1, 1)
                }
            } else if (playerRank >= outOfRank) {
                text += "#e獲得了鼓勵獎！下次再加把勁。#n\r\n";
                for (let i in outOfRankReward) {

                    gainItem(outOfRankReward[i][0], outOfRankReward[i][1]);
                    text += "#v" + outOfRankReward[i][0] + "##b#z" + outOfRankReward[i][0] + "##k * " + outOfRankReward[i][1] + "\r\n";

                }
            } else {
                npc.say("?");
            }
            em.getVariable("pqsRanking")[player.getName()]["REWARDED"] = true;
            npc.say(text);
            break;
        case 101:
            if (playerRank == -1) {
                text += "#e獲得了參與獎！多多練習吧。#n\r\n";
                for (let i in unRankReward) {
                    gainItem(unRankReward[i][0], unRankReward[i][1]);
                    text += "#v" + unRankReward[i][0] + "##b#z" + unRankReward[i][0] + "##k * " + unRankReward[i][1] + "\r\n";
                }
                player.addEventValue("跑旗已領取", 1, 1)
                em.getVariable("pqsRanking")[player.getName()]["REWARDED"] = true;
                npc.say(text);
            }
            break;
        case 102:
            viewReward:
            while (true) {
                text = "選擇想要查看的名次：\r\n#b";
                let viewIndex = 0;
                for (viewIndex = 0; viewIndex < outOfRank; viewIndex++) {
                    text += "#L" + viewIndex + "#查看第 #e" + (viewIndex + 1) + "#n 名的獎勵。#l\r\n";
                }
                //viewIndex++;
                text += "#L" + viewIndex + "#查看" + viewIndex++ + "之後排名的獎勵。#l\r\n";
                text += "#L" + viewIndex++ + "#查看安慰獎。#l\r\n";
                text += "#L" + viewIndex++ + "#返回首頁。#l";
                let selView = npc.askMenu(text);
                if (selView < outOfRank) {
                    text = "#e查看" + (selView + 1) + "名的獎勵：#n\r\n\r\n"
                    for (let i in rankReward) {
                        if ((rankReward[i][0] - 1) == selView) {
                            text += "#v" + rankReward[i][1] + "##b#z" + rankReward[i][1] + "##k * " + rankReward[i][2] + "\r\n";
                        }
                    }
                } else if (selView == outOfRank) {
                    text = "#e查看" + selView + "名後的獎勵：#n\r\n\r\n"
                    for (let i in outOfRankReward) {
                        text += "#v" + outOfRankReward[i][0] + "##b#z" + outOfRankReward[i][0] + "##k * " + outOfRankReward[i][1] + "\r\n";
                    }
                } else if (selView == outOfRank + 1) {
                    text = "#e查看參與獎的獎勵：#n\r\n\r\n"
                    for (let i in unRankReward) {
                        text += "#v" + unRankReward[i][0] + "##b#z" + unRankReward[i][0] + "##k * " + unRankReward[i][1] + "\r\n";
                    }
                } else {
                    break viewReward;
                }
                npc.sayNext(text);
            }
            break;
        case 103:
            //player.changeMap(932200001, 0);
            player.changeMap(105000000, 0);
            break homePage;
            break;
    }

}

function formatDuring(mss) {
    var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = (mss % (1000 * 60)) / 1000;
    return minutes + ": " + seconds + "";
}

function FormatString(c, length, str) {
    if (str.length < length) {
        let strlength = str.length;
        for (var i = str.length; i < length; i++) {
            //player.dropMessage(1,"!" + (i - strlength) + " is " + str[i - strlength]);
            if (str.charCodeAt(i - strlength) >= 0 && str.charCodeAt(i - strlength) <= 128 && (i - strlength) < strlength) {// && (strlength - i) < 0
                //player.dropMessage(1,"?" + (i - strlength) + " is " + str[i - strlength]);
                str += "　";
                str += " ";
            } else {
                str += "　";

            }
        }
    }
    return str;
}

function gainItem(itemId, qty) {
    if (itemId == 3991006) {
        if (player.getGuildId() > 0) {
            player.gainGP(qty);
        }
    } else if (itemId == 3991018) {
        if (player.getGuildId() > 0) {
            player.gainGuildSP(qty);
        }
    } else {
        player.gainItem(itemId, qty);
    }
}