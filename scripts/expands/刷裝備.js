
var status = -1
var txt;
/*------------------------------------------------------------*/
var ltz45 = "#fMap/MapHelper.img/weather/starPlanet2/5#";
var ltz47 = "#fMap/MapHelper.img/weather/starPlanet/4#";
var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用
//var GC2 = "#fEffect/ItemEff/1070069/effect/walk1/2#"

txt = "" + GC1 + GC1 + "\r\n";
txt += "\t\t#e#fs26##fc0xFF43EABE#【刷屬性】\r\n#n";
txt += "";
txt += "#fs17##e#b";

let sel1 = npc.askNumber("#fs16##b#e1.輸入物品代碼", 0, 0, 9999999);
//let sel2 = npc.askNumber("#fs16##b#e2.輸入數量", 0, 0, 9999);
/*let sel3 = npc.askNumber("#fs16##b#e3.輸入力量", 0, 0, 9999);
let sel4 = npc.askNumber("#fs16##b#e4.輸入敏捷", 0, 0, 9999);
let sel5 = npc.askNumber("#fs16##b#e5.輸入智力", 0, 0, 9999);
let sel6 = npc.askNumber("#fs16##b#e6.輸入幸運", 0, 0, 9999);
let sel7 = npc.askNumber("#fs16##b#e7.輸入血量", 0, 0, 9999);
let sel8 = npc.askNumber("#fs16##b#e8.輸入魔力", 0, 0, 9999);
let sel9 = npc.askNumber("#fs16##b#e9.輸入物攻", 0, 0, 9999);
let sel10 = npc.askNumber("#fs16##b#e10.輸入魔攻", 0, 0, 9999);

let sel11 = npc.askNumber("#fs16##b#e11.輸入防禦", 0, 0, 9999);
let sel12 = npc.askNumber("#fs16##b#e12.輸入BOSS傷害%", 0, 0, 9999);
let sel13 = npc.askNumber("#fs16##b#e13.輸入無視防禦%", 0, 0, 9999);
let sel14 = npc.askNumber("#fs16##b#e14.輸入總傷害%", 0, 0, 9999);
let sel15 = npc.askNumber("#fs16##b#e15.輸入星力", 0, 0, 9999);
let sel16 = npc.askNumber("#fs16##b#e16.輸入剩餘卷軸次數", 0, 0, 9999);
let sel17 = npc.askNumber("#fs16##b#e17.輸入黃金槌已使用次數", 0, 0, 9999);
let sel18 = npc.askNumber("#fs16##b#e18.輸入白金槌已使用次數", 0, 0, 9999);*/

/*let sel19 = npc.askNumber("#fs16##b#e19.輸入主要淺能(一)", 0, 0, 99999);
let sel20 = npc.askNumber("#fs16##b#e20.輸入主要淺能(二)", 0, 0, 99999);
let sel21 = npc.askNumber("#fs16##b#e21.輸入主要淺能(三)", 0, 0, 99999);
let sel22 = npc.askNumber("#fs16##b#e22.輸入附加淺能(一)", 0, 0, 99999);
let sel23 = npc.askNumber("#fs16##b#e23.輸入附加淺能(二)", 0, 0, 99999);
let sel24 = npc.askNumber("#fs16##b#e24.輸入附加淺能(三)", 0, 0, 99999);*/

//1132308
let newItem = player.makeItemWithId(sel1);
/*newItem.setStr(sel3);
newItem.setDex(sel4);
newItem.setInt(sel5);
newItem.setLuk(sel6);
newItem.setMaxHp(sel7);
newItem.setMaxMp(sel8);
newItem.setPad(sel9);
newItem.setMad(sel10);
newItem.setPdd(sel11);
newItem.setBossDamageR(sel12);
newItem.setIgnorePDR(sel13);
newItem.setDamR(sel14);*/
newItem.setCHUC(10);//星力
newItem.setRUC(99);//可使用的卷軸次數(最高127)
newItem.setCUC(127);//已經強化卷軸次數(最高127)
newItem.setIUC(1);//黃金槌子(最高1)
newItem.setIUC2(5);//白金槌子(最高5)

//newItem.setGrade(20);//傳說屬性
/*newItem.setOption(1, sel19, false);
newItem.setOption(2, sel20, false);
newItem.setOption(3, sel21, false);
newItem.setOption(1, sel22, true);
newItem.setOption(2, sel23, true);
newItem.setOption(3, sel24, true);*/


player.gainItem(newItem);





