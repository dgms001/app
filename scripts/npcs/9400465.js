//一層檢測 時裝欄1 2格子
var equip1 = player.getInventorySlot(6, 1);//欄位檢測
var equip2 = player.getInventorySlot(6, 2);
let X = (Math.floor(equip1.getDataId()/10000));//第二層檢測 %10000需相等
let Y = (Math.floor(equip2.getDataId()/10000));

var newItem1 = player.makeItemWithId(equip1.getDataId());//第一格
var newItem2  = player.makeItemWithId(equip2.getDataId());//第二格
var zx24 = "#fMap/MapHelper.img/weather/nightMarket/5#";
var qq1 = "#fUI/EventShop/adventureShop/GradeBuyer/0#"
var qq2 = "#fUI/EventShop/adventureShop/GradeBuyer/1#"
var qq3 = "#fUI/EventShop/adventureShop/GradeBuyer/2#"
var qq4 = "#fUI/EventShop/adventureShop/GradeBuyer/3#"
var qq5 = "#fUI/EventShop/adventureShop/GradeBuyer/4#"
var qq6 = "#fUI/EventShop/adventureShop/GradeBuyer/5#"

txt = "#e#fs21##r你好,這裡是時裝屬性轉移\r\n";
txt += "#fs16##b只能同類型進行轉移[#r寵物裝備/戒指不可用#b]\r\n";

txt += "#fs16##b轉移費用50萬楓點\r\n";


txt += "\t   屬性提取裝備\t→\t屬性置入裝備\r\n";
txt += "\t\t   #r屬性\t           外型\r\n#b";
txt += "\t     【#i"+equip1.getDataId()+"#】   →   【#i"+equip2.getDataId()+"#】\r\n";

//txt += "  【"+equip1.getDataId()+"】    →    【"+equip2.getDataId()+"】\r\n";

txt += "\t\t#fs16#      #b#L0#進行轉移#l\r\n\r\n";

txt += "力量: "+equip1.getStr()+"\r\n";//提取數值顯示
txt += "敏捷: "+equip1.getDex()+"\r\n";
txt += "智慧: "+equip1.getInt()+"\r\n";
txt += "幸運: "+equip1.getLuk()+"\r\n";
txt += "物理攻擊: "+equip1.getPad()+"\r\n";
txt += "魔法攻擊: "+equip1.getMad()+"\r\n";
let sel = npc.askMenuA(txt);

var str1 = equip1.getTitle();
var get1 = str1.substring(3, 4);
var qhcs1 = Number(get1) ;

var str2 = equip2.getTitle();
var get2 = str2.substring(3, 4);
var qhcs2 = Number(get2) ;	

if(X==111||Y==180){ 
 npc.say("#r戒指,寵物裝備#k不能使用該功能");
}else if (player.getCashShopCurrency(2) < 500000) {
            player.showSystemMessage("楓點不足50萬!!!");
}else if(X==Y){
 //npc.say("通過");//通過
 player.modifyCashShopCurrency(2, -500000);
 player.loseInvSlot(6, 1);
 player.loseInvSlot(6, 2);
 
 newItem1.setStr(equip2.getStr()); //裝備力量
 newItem1.setDex(equip2.getDex()); //裝備敏捷
 newItem1.setInt(equip2.getInt()); //裝備智力
 newItem1.setLuk(equip2.getLuk()); //裝備運氣
 newItem1.setPad(equip2.getPad()); //物理攻擊
 newItem1.setMad(equip2.getMad()); //魔法攻擊
 
 
 newItem2.setStr(equip1.getStr()); //裝備力量
 newItem2.setDex(equip1.getDex()); //裝備敏捷
 newItem2.setInt(equip1.getInt()); //裝備智力
 newItem2.setLuk(equip1.getLuk()); //裝備運氣
 newItem2.setPad(equip1.getPad()); //物理攻擊
 newItem2.setMad(equip1.getMad()); //魔法攻擊
 
 player.gainItem(newItem1);
 player.gainItem(newItem2);
 player.showSystemMessage("成功");
}else{
 npc.say("兩件裝備不是同一類，不能使用該功能");
}
