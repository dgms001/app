/*  This is mada by dgms    
 *  This source is made by Funms Team
 *  
 *  功能：Garden
 *  
 *  @Author dgms 
 */

/* global cm */

﻿var status = -1;
var icon1 = "#fEffect/CharacterEff/1042176/0/0#";
var icon3 = "#fEffect/CharacterEff/1082565/4/0#";
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";
var wi1 = "#fUI/SoulUI.img/DungeonMap/icon/dungeonItem/0#";  //星星圖標

var tz12 = "#fEffect/CharacterEff/1112924/0/0#"; //黃星
var tz13 = "#fEffect/CharacterEff/1112925/0/0#"; //藍星
var tz14 = "#fEffect/CharacterEff/1112926/0/0#"; //紅星
var epp = "#fEffect/CharacterEff/1082312/0/0#"; //彩光
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";
var icon2 = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var icon2 = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";

var gardenData = null;
var gardenFlowerPot = null;
var typed = -1;
var operationId = 0;
var buyFlower = null;
 
first();

function  first() {
    /* 花園信息 */
    typed = -1; 
    gardenData = getGardenInfo();
    var text = "\t" + epp + "  #r#e花園 - 培養之室  " + epp + "\r\n\r\n";
    text += "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "#k#k\r\n";
    text += "\t\t\t" + icon1 + " #e#d花園等級：#r[" + gardenData['level'] + "]#d 級  \r\n";
    //text += "\t\t\t" + icon1 + " #e#d活力：#r[" + player.getPlayerEnergy() + "]#d 點\r\n";
    //text += "\t\t\t" + icon1 + " #e#d積分：#r[" + player.getPlayerPoints() + "]#d 點\r\n";
    text += "\t\t\t" + icon1 + " #e#d經驗值：#r[" + gardenData['exp'] + "/" + calcLevelUp(gardenData['level']) + "]#k\r\n";
    text += "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "#k#k\r\n";
    text += "               " + "#b#L3#" + icon2 + "花園介紹" + icon2 + "#l\r\n\r\n";
    text += "  " + "#b#L0#" + icon2 + " 照顧花朵#l";
    text += "#b#L1#" + icon2 + " 擴建花園#l";
    text += "#b#L2#" + icon2 + " 購買種子#l\r\n\r\n";
	text += "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "#k#k\r\n";
    var selection = npc.askMenu(text);
	 switch (selection) {
        case 0:
            takeCareOfFlowers();
            break;
        case 1:
            expandGarden();
            break;
        case 2:
            buySeeds();
            break;
		case 3:
            var text = "\t每個角色初生花園技術等級為1級。可以擁有1個花盆，提升等級之後可以擴建花園增加花盆，花園技術等級決定你能的花種。每當收獲時可以獲得經驗和花的產物。任何的花只要超過一天沒有采摘就會枯萎。\r\n";
			text += "\t每天可以為的花進行一次澆水、施肥，澆水消耗10點活力值值，可以減少1小時的作物成長時間，施肥消耗20點活力值值，可以減少2小時的作物成長時間。";
			npc.askMenu(text);
        break;
    }
}


function expandGarden() {
   
          var yes =   npc.askYesNo("擴建花園需要#r" + (1 + player.getPQLog("擴建花壇")) * 2 + "億#k，擴建之後將會多出一個花盆，是否擴建？");
            
        
		if (yes == 1) {
			if (player.hasMesos((1 + player.getPQLog("擴建花壇")) * 200000000)) {
				if (addFlowerPot()) {
					player.gainMesos(-(1 + player.getPQLog("擴建花壇")) * 200000000);
					player.addPQLog("擴建花壇",1,3650);
					npc.askMenu("擴建成功！\r\n#L999##b" + icon2 + "點我返回#l");
				} else {
					npc.askMenu("擴建失敗！您的#r花園等級不足#k或花盆數量已達到#r6個#k，無法繼續擴建，請先提升花園等級。\r\n#L999##b" + icon2 + "點我返回#l");
				}
			} else {
				npc.askMenu("您沒有那麼多游戲幣！\r\n#L999##b" + icon2 + "點我返回#l");
			}
			first();
		} else {
			first();
		}
            
       
}


function takeCareOfFlowers() {
            gardenFlowerPot = getFlowerPot();
            var currentTimestamp = java.lang.System.currentTimeMillis();
            var text = "\t\t\t\t\t#d#e★ 我的花園 ★#n#k\r\n";
            for (var key in gardenFlowerPot) {
                var seedid = gardenFlowerPot[key]['seedid'];
                var flowerpotid = gardenFlowerPot[key]['id'];
                var expiration = gardenFlowerPot[key]['expiration'];
                if (seedid != 0) {
                    var tips = "";
                    var seconds = (expiration - currentTimestamp) / 1000;
                    if (seconds <= 0)
                        tips = "#g作物已經成熟#k";
                    else {
                        var DHM = toDHM(seconds);
                        tips = "#b剩余 " + DHM[0] + "天" + DHM[1] + "小時" + DHM[2] + "分";
                    }
                    text += "#L" + flowerpotid + "#" + icon1 + " #b[#i" + seedid + ":#]#k " + tips + "#l\r\n";
                } else {
                    text += "#L" + flowerpotid + "#" + icon1 + " #b[這是一個空的花盆，點擊栽種]\r\n";
                }
                text += "\r\n#L999##b" + icon2 + "點我返回#l";
            }
            var selection =  npc.askMenu(text);
          
            if (selection == 999) {
                first();
            } else {
                var currentTimestamp = java.lang.System.currentTimeMillis();
                var flowerpotid = selection;
                operationId = flowerpotid;
                var seedid = gardenFlowerPot[flowerpotid]['seedid'];
                var expiration = gardenFlowerPot[flowerpotid]['expiration'];
                var text = "\t\t\t\t\t#d#e★ 我的花園 ★#n#k\r\n";
				var selection=0;
                if (seedid != 0 && seedid != -1) {
                    var seconds = (expiration - currentTimestamp) / 1000;
                    var flag = false;
                    var tips = '';
                    if (seconds <= 0) {
                        flag = true;
                        var tips = "#g作物已經成熟，可以采摘#k";
                    } else {
                        var DHM = toDHM(seconds);
                        tips = "#b剩余 " + DHM[0] + "天" + DHM[1] + "小時" + DHM[2] + "分#k";
                    }
                    text += "#r#t" + seedid + "##k\r\n";
                    text += tips + "\r\n";
                    if (!flag) {
                        text += "#b#L0#" + icon2 + "澆水#l\t#L1#" + icon2 + "施肥#l\t#L2#" + icon2 + "挖除#l";
                    } else {
                        text += "#b#L4#" + icon2 + "采摘#l\t#L2#" + icon2 + "挖除#l";
                    }
                    selection = npc.askMenu(text);
                } else {
                    text += "#r這是一個空的花盆，您可以進行栽種。\r\n";
                    text += "#b#L5#" + icon2 + "栽種#l";
                    selection= npc.askMenu(text);

                }
				switch (selection) {
					case 0://澆水操作
						if (player.getPQLog("花園澆水" + operationId) > 0) {
							npc.askMenu("啊，好像澆過水了，不能拔苗助長！\r\n#L999##b" + icon2 + "點我返回#l");
						} else {
							if (player.getCashShopCurrency(1) >= 3000) {
								player.addPQLog("花園澆水" + operationId);
								//活力
								player.modifyCashShopCurrency(1, -3000);
								Operations(operationId, 0);
								npc.askMenu("消耗了3000點卷，縮短了1小時成長時間。\r\n好開心，花兒又長大了一點！\r\n#L999##b" + icon2 + "點我返回#l");
							} else {
								npc.askMenu("糟糕了，沒有點卷了！\r\n你目前點卷：" + player.getCashShopCurrency(1) + "\r\n#L999##b" + icon2 + "點我返回#l");
							}
						}
						break;
					case 1://施肥操作
						if (player.getPQLog("花園施肥" + operationId) > 0) {
							npc.askMenu("啊，好像施過肥了，不能拔苗助長！\r\n#L999##b" + icon2 + "點我返回#l");
						} else {
							if (player.getCashShopCurrency(1) >= 5000) {
								player.addPQLog("花園施肥" + operationId);
								player.modifyCashShopCurrency(1, -5000);
								Operations(operationId, 1);
								npc.askMenu("消耗了5000點卷，縮短了2小時成長時間。\r\n好開心，花兒又長大了一點！\r\n#L999##b" + icon2 + "點我返回#l");
							} else {
								npc.askMenu("糟糕了，沒有點卷了！\r\n你目前點卷：" + player.getCashShopCurrency(1) + "\r\n#L999##b" + icon2 + "點我返回#l");
							}
						}
						break;
					case 2://挖除操作
						clearFlowerPot(operationId);
						npc.askMenu("噢，挖好了，讓我來種上新的種子吧！\r\n#L999##b" + icon2 + "點我返回#l");
						break;
					case 4: //采摘果實
						var currentTimestamp = java.lang.System.currentTimeMillis();
						var seedid = gardenFlowerPot[operationId]['seedid'];
						if (player.getFreeSlots(Math.floor(seedid / 1000000)) < 2) {
							npc.say("你的包裹空間好像不夠呢，整理一下再來采摘吧！");
							break;
						}
						var expiration = gardenFlowerPot[operationId]['expiration'];
						var seconds = (expiration - currentTimestamp) / 1000;
						var flower = getFlower(seedid);
						var catchNum = Math.floor(Math.random() * (flower[5] - flower[4] + 1) + flower[4]);
						var flowerLevel = flower[1];
						var cash = flowerLevel * 20;
						if (seconds <= 0) {
							player.gainItem(seedid, catchNum);
							//清空花盆
							clearFlowerPot(operationId);
							//得到經驗
							var getExp = gainPlantExp(seedid);
							var levelStr = "";
							if (getExp == -1) {
								levelStr = "花園等級提升了#r1#k級！";
							} else {
								levelStr = "得到了#r" + getExp + "#k點花園經驗值";
							}
							player.modifyCashShopCurrency(1, cash);
							npc.sayS("好開心，終于到了收獲果實的季節！\r\n得到了#b" + catchNum + "#k個#v" + seedid + "##b#t" + seedid + "##k\r\n得到了#r" + cash + "#k點卷\r\n" + levelStr + "\r\n");//#L0##b" + icon2 + "點我返回#l
						} else {
							npc.say("騷年，你真的要強行采摘嗎？");
						}
						break;
					case 5:
						var seeds = getSeeds();
						var text = "#d#e選擇想要種下的種子：#n#k\r\n"
						if (seeds != '' && seeds != null && seeds != Array()) {
							for (var key in seeds) {
								text += "#b#L" + seeds[key][0] + "#[#v" + seeds[key][0] + "##t" + seeds[key][0] + "#種子] 數量：[" + seeds[key][1] + "]個#l\r\n";
							}
							var selection = npc.askMenu(text);
							
							plantFlower(selection, operationId);
							text = "種好咯！快快長大吧！\r\n#L999##b" + icon2 + "點我返回#l";
							npc.askMenu(text);
						} else {
							text = "啊哦，好像沒有種子了。得去買一些！\r\n#L999##b" + icon2 + "點我返回#l";
							npc.askMenu(text);
						}
						break;
					default:
						
						break;
				}
				first();
            }
}          
        

function buySeeds() {
    
            var text = "#d#e以下是您的等級可以購買的種子：#n#k\r\n";
            var flowers = getFlowers();
            for (var key in flowers) {
                var tips = flowers[key][1] + "#n#b級";
                if (flowers[key][1] > gardenData['level'])
                    tips = "(需要" + flowers[key][1] + "級)#n#b";
                text += "#b#L" + key + "##i" + flowers[key][0] + ":# #t" + flowers[key][0] + "#種子 #r#e" + tips + " (產量：" + flowers[key][4] + "~" + flowers[key][5] + ")#l\r\n";
            }
            text += "#L999##b" + icon2 + "點我返回#l";
           var selection =  npc.askMenu(text);
            
     
            if (selection == 999) {
                first();
            } else {
                var flower = getFlowers();
                flower = flower[selection];
                buyFlower = flower;
                var ripeningTime = flower[3] * 3600;
                var DHM = toDHM(ripeningTime);
                var text = "\t\t\t\t\t#d#e★ 種子信息 ★#n#k\r\n";
                text += icon3 + "#r品種：#b#v" + flower[0] + "##t" + flower[0] + "#種子\r\n";
                text += icon3 + "#r產量：#b" + flower[4] + "~" + flower[5] + "\r\n";
                text += icon3 + "#r單價：#b" + flower[2] + " 游戲幣\r\n";
                text += icon3 + "#r成熟時間：#b" + DHM[0] + "天" + DHM[1] + "小時" + DHM[2] + "分#k\r\n\r\n";
                text += icon3 + "#d#e請輸入你要購買的數量：#n#k\r\n";
                var quantity = npc.askNumber(text, 0, 1, 100);
				
				var cost = buyFlower[2] * quantity;
				if (gardenData['level'] < buyFlower[1]) {
					npc.askMenu("您的花園等級不足，無法購買該種子。\r\n#L999##b" + icon2 + "點我返回#l");
				} else if (player.hasMesos(cost)) {
					player.gainMesos(-cost);
					gainSeed(buyFlower[0], quantity);
					npc.askMenu("購買成功！\r\n#L999##b" + icon2 + "點我返回#l");
				} else {
					npc.askMenu("游戲幣不足，購買失敗！\r\n#L999##b" + icon2 + "點我返回#l");
				}
				 first();
            }
        
             
}


/*
 *	自定義函數群
 */
/*
 得到種子
 */
function gainSeed(seedid, quantity) {
    if (quantity == null) {
        quantity = 1;
    }
    var charid = player.getId();
    var sql = "SELECT * FROM memory_seedpackage WHERE charid = ? and seedid = ?";
    var data = player.customSqlResult(sql, charid, seedid);

    if (data.size() > 0) {
        sql = "UPDATE memory_seedpackage SET quantity=quantity+? WHERE charid=? AND seedid=?";
        player.customSqlUpdate(sql, quantity, charid, seedid);
    } else {
        sql = "INSERT INTO memory_seedpackage(charid, seedid, quantity) VALUES(?,?,?)";
        player.customSqlInsert(sql, charid, seedid, quantity);
    }
    return true;
}
/*
 獲取背包種子
 */

function getSeeds() {
    var charid = player.getId();
    var sql = "SELECT * FROM memory_seedpackage WHERE charid = ? and quantity>0 order by seedid desc";
    var data = player.customSqlResult(sql, charid);

    var seeds = Array();
    for (var i = 0; i < data.size(); i++) {
        var result = data.get(i);
        if (null == result) {
            break;
        }
        seeds.push(Array(result.get('seedid'), result.get('quantity')));
    }
    return seeds;
}
/*
 是否允許擴建
 */
function isAllowUpgrade() {
    var charid = player.getId();
    var sql = "SELECT COUNT(id) as pn FROM memory_flowerpot WHERE charid = ?";
    var data = player.customSqlResult(sql, charid);

    var flag = true;
    if (data.size() > 0) {
        var result = data.get(0);
        var pn = result.get('pn');
        if (pn < gardenData['level'] && pn < 6) {
            flag = true;
        } else {
            flag = false;
        }
    }
    return flag;
}
/* 新增加花盆 */
function addFlowerPot() {
    var charid = player.getId();
    if (isAllowUpgrade()) {
        var sql = "INSERT INTO memory_flowerpot(charid, seedid, expiration) VALUES(?,0,-1)";
        player.customSqlInsert(sql, charid);
        return true;
    } else {
        return false;
    }
}
/*
 種花
 */
function plantFlower(flowerid, flowerpotid) {
    var charid = player.getId();
    var flower = getFlower(flowerid);
    var currentTimestamp = java.lang.System.currentTimeMillis();
    var expiration = flower[3] * 3600 * 1000 + currentTimestamp;
    var sql = "UPDATE memory_flowerpot p, memory_seedpackage s SET p.expiration=?, p.seedid=?, s.quantity=s.quantity-1 WHERE s.seedid=? and p.charid=s.charid and p.id=? and p.charid=?";

    player.customSqlUpdate(sql, expiration, flowerid, flowerid, flowerpotid, charid);
}

/*
 獲取花信息
 */
function getFlowers() {
    return Array(
            //物品ID，等級，價格，成熟時間(小時),產量最小值，產量最大值
            //恢復類
            Array(4001832, 1, 1000000, 5, 10, 50), // 咒語痕跡
            Array(2340000, 3, 5000000, 7, 1, 2), // 祝福卷軸
            Array(2049024, 5, 5000000, 13, 1, 1), // 白醫卷軸20%
            Array(2049750, 8, 20000000, 20, 1, 2), //S級潛能卷軸 80%
            Array(2049116, 10, 20000000, 20, 1, 2), // 強化混沌卷軸
            Array(2022530, 13, 40000000, 22, 1, 2), //迎春花花語
            Array(2049323, 16, 80000000, 22, 1, 2), //高級裝備強化卷軸 無損
            Array(4001839, 19, 104000000, 22, 300, 1000), //星星
            Array(2614014, 20, 500000000, 23, 1, 2)//突破百萬之石 50%

            );
}

function getFlowerLevel(flowerid) {
    var flowers = getFlowers();
    for (var key in flowers) {
        if (flowers[key][0] == flowerid)
            return flowers[key][1];
    }
}

function getFlower(flowerid) {
    var flowers = getFlowers();
    for (var key in flowers) {
        if (flowers[key][0] == flowerid)
            return flowers[key];
    }
}

/*
 升級經驗計算
 */
function calcLevelUp(level) {
    var base = 10 + level * level * 5;
    return base;
}
/*
 得到經驗
 */
function gainPlantExp(flowerid) {
    var expNum = getFlowerLevel(flowerid) * 10;
    var charid = player.getId();
    var pstmt = null;
    if ((gardenData['exp'] * 1 + expNum) >= calcLevelUp(gardenData['level'])) {
        var lastExp = (gardenData['exp'] * 1 + expNum) - calcLevelUp(gardenData['level']);
        var sql = "UPDATE memory_garden SET exp=?, level=level+1 WHERE charid=?";
        player.customSqlUpdate(sql, lastExp, charid);
        return -1;
    } else {
        var sql = "UPDATE memory_garden SET exp=exp+? WHERE charid=?";
        player.customSqlUpdate(sql, expNum, charid);
        return expNum;
    }
    return 0;
}

/*
 挖除操作
 */
function clearFlowerPot(flowerpotid) {
    var charid = player.getId();
    var sql = "UPDATE memory_flowerpot SET expiration=-1, seedid=0 WHERE id=? and charid=?";
    player.resetPQLog("花園施肥" + flowerpotid);
    player.resetPQLog("花園澆水" + flowerpotid);

    player.customSqlUpdate(sql, flowerpotid, charid);

}
/*
 澆水施肥操作
 */
function Operations(flowerpotid, type) {
    var growUp = (type + 1) * 60 * 60 * 1000;
    var charid = player.getId();
    var sql = "UPDATE memory_flowerpot SET expiration=expiration-? WHERE id=? and charid=?";

    player.customSqlUpdate(sql, growUp, flowerpotid, charid);
}

/*
 得到花園數據
 */
function getGardenInfo() {
    var charid = player.getId();
    var sql = "SELECT * FROM memory_garden WHERE charid = ? limit 1";
    var data = player.customSqlResult(sql, charid);

    if (data.size() > 0) {
        var info = {};
        var result = data.get(0);
        info['level'] = result.get('level');
        info['exp'] = result.get('exp');
        return info;
    } else {
        sql = "INSERT INTO memory_garden(charid, level, exp) VALUES(?,1,0)";
        player.customSqlInsert(sql, charid);
        return getGardenInfo();
    }
}

/*
 得到花盆數據
 */
function getFlowerPot() {
    var charid = player.getId();
    var sql = "SELECT * FROM `memory_flowerpot` WHERE `charid` = ?";

    var data = player.customSqlResult(sql, charid);

    var results = {};
    for (var i = 0; i < data.size(); i++) {
        var result = data.get(i);
        if (null == result) {
            break;
        }
        var info = {};
        info['id'] = result.get('id');
        info['seedid'] = result.get('seedid');
        info['expiration'] = result.get('expiration');
        results[info['id']] = info;
    }
    if (isEmptyObject(results)) {
        sql = "INSERT INTO memory_flowerpot(charid, seedid, expiration) VALUES(?,0,-1)";
        player.customSqlInsert(sql, charid);
        return getFlowerPot();
    }
    return results;
}

/*
 時間轉換
 */
function toDHM(seconds) {
    var days = Math.floor(seconds / 86400);
    var hour = Math.floor(seconds % 86400 / 3600);
    var minute = Math.floor(seconds % 86400 % 3600 / 60);
    return Array(days, hour, minute);
}
function isEmptyObject(e) {
    var t;
    for (t in e)
        return !1;
    return !0
}  