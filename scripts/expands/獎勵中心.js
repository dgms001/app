var status = -1
var txt;
/*------------------------------------------------------------*/

var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"

txt = "Welcome to the special trip              " + a38 + "\r\n";

txt += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n"
txt += "\t\t\t#fs11##L1#" + f4 + "#b在線福利#l#L2#" + f2 + "等級獎勵#l\r\n\r\n";
txt += "\t\t\t#fs11##L4#" + f4 + "#b推文累計#l#L3#" + f2 + "獎勵領取#l\r\n\r\n";
txt += "\t\t\t\t\t#fs11##L5#" + f4 + "#bCDK兌換#l\r\n\r\n";
txt += "\t\t\t\t  #fs14##e#fc0xFF66CCCC##L50#返回選單#l\r\n\r\n";

let selection = npc.askMenuS(txt, true);

switch (selection) {
    case 1:
        player.runScript("在線獎勵");
        break;
    case 2:
        player.runScript("等級獎勵");
        break;
    case 3:
        player.runScript("推文領取");
        break;
    case 4:
        player.runScript("累計推文獎勵");
        break;
    case 5:
        player.runScript("cdk");
        break;
    case 50:
        player.runScript("本服菜單");
        break;
}
function updatepassword(password) {
    var sql = "update accounts SET spw = " + password + " where id = '" + player.getAccountId() + "';";
    player.customSqlUpdate(sql);
}
