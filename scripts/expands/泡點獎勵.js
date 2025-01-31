/**
 * 泡點獎勵
 **/

var pdnum = 1000; //普通泡點數量
var pdmap = 104000000 ; //日本神社大廳
var pdmap1 = 871100000 ; //基本小屋
var pdmap2 = 104000000 ; //弓箭手村
var pdmap3 = 871100017 ; //舒適的菇菇小屋
var pdmap4 = 871100020 ; //精緻的洋屋
var pdmap5 = 871100023 ; //海邊的陽台房屋
var pdmap6 = 871100026 ; //蓮花池庭園瓦屋
if (map.getId() == pdmap || map.getId() == pdmap1 || map.getId() == pdmap2 || map.getId() == pdmap3 || map.getId() == pdmap4 || map.getId() == pdmap5 || map.getId() == pdmap6) {

    player.modifyCashShopCurrency(2, pdnum);
    player.showSystemMessage("[泡點]: 你獲得 " + pdnum + " 楓點！");
	map.showTimer(60);

} else {

    //關閉泡點 不在pdmap裡面
    var event = npc.getEvent("paodian");
    var players = event.getVariable("players");

    var index = -1;
    for (var i = 0; i < players.length; i++) {
        if (players[i].getId() == player.getId()) {
            index = i;
            break;
        }
    }

    players.splice(i, 1);
    player.showSystemMessage("[泡點提醒]: 您未在泡點地圖內！");
}
