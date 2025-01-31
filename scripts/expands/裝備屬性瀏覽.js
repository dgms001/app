var status = -1
var txt;
/*------------------------------------------------------------*/

var ltz45 = "#fMap/MapHelper.img/weather/starPlanet2/5#"; //
var ltz47 = "#fMap/MapHelper.img/weather/starPlanet/4#"; //
var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用
var RS1 = "#fEffect/ItemEff/1004985/effect/jump/0#"; //石靈-1
var RS2 = "#fEffect/ItemEff/1004985/effect/alert/0#"; //石靈-2
var RS3 = "#fEffect/ItemEff/1004985/effect/proneStab/2#"; //石靈-3
//var GC2 = "#fEffect/ItemEff/1070069/effect/walk1/2#"
txt = "\t" + GC1 + GC1 + GC1 + GC1 + "\r\n";
txt += "\t\t\t#fs26##L0##fc0xFF43EABE##v3015846##e石靈谷 - TMS V237.1#v3015846##l\r\n";
txt += "" + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + "";

var equip = player.getInventorySlot(1, 1);

txt += "#b#fs17##e";
txt += "力量:" + equip.getStr() + " 敏捷:" + equip.getDex() + " 智力:" + equip.getInt() + " 幸運:" + equip.getLuk() + "\r\n";
txt += "血量:" + equip.getMaxHp() + " 魔力:" + equip.getMaxMp() + " 物攻:" + equip.getPad() + " 魔攻:" + equip.getMad() + "\r\n";
txt += "防禦力:" + equip.getPdd() + " B傷:" + equip.getBossDamageR() + " 無視:" + equip.getIgnorePDR() + " 傷害:" + equip.getDamR() + "\r\n";
txt += "星力:" + equip.getCHUC() + " 卷數:" + equip.getRUC() + " 黃槌:" + equip.getIUC() + " 白槌:" + equip.getIUC2() + "\r\n";
txt += "淺能等級:" + equip.getGrade() + "\r\n";
txt += "主要淺能: 一:" + equip.getOption(1, false) + " 二:" + equip.getOption(2, false) + " 三:" + equip.getOption(3, false) + " \r\n";
txt += "附加淺能: 一:" + equip.getOption(1, true) + " 二:" + equip.getOption(2, true) + " 三:" + equip.getOption(3, true) + " \r\n";

//txt += "#L944#" + ltz45 + " boss掉落#l#L945#" + ltz45 + " boss事件#l";
let selection = npc.askMenuA(txt, true);

switch (selection) {
    case 0:
        player.runScript("帳戶中心");
        break;

}

function getLeiji() {
    var sql = "select leiji from hypay where accountid = ? ";
    var result = player.customSqlResult(sql, player.getAccountId());
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("leiji");
        }
    } else {
        return 0;
    }

}

function getHyPay() {

    var result = player.customSqlResult("select pay from hypay where accountId=?", player.getAccountId());

    return result.isEmpty() ? 0 : result[0].pay

}
