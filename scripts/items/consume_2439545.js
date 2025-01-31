/* This is a piece of code

 * author dgms
 
  * global player
  
   * 脚本定制 技术支持 QQ 381991414
   
    */
var str = "輸入怪物ID即可查詢";
let Num = npc.askNumber(str, "1", 1, 9999999);
getMobDrop(Num);

function getMobDrop(Mobid) {
    var str = "#d當前怪物掉落道具為:#r[#o" + Mobid + "#]\r\n";
    str += "#d以下是怪物掉落查詢:\r\n"
    var sql = "select dropperid,itemid,chance,minimum,maximum from zdata_drop where dropperid='" + Mobid + "'";
    var push = player.customSqlResult(sql);
    for (let i = 0; i < push.size(); i++) {
        var result = push.get(i);
        str += "#k#r#o" + result.get("itemid").toString() + "# 掉落 #b#z" + result.get("itemid").toString().substring(0, 7) + "# - #k概率 " + result.get("chance").toString() / 10000 + "#l%數量[" + result.get("minimum").toString() + "," + result.get("maximum").toString() + "] \r\n";
    }
    npc.say(str);
}
