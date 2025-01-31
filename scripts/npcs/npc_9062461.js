//player.runScript("BOSS飾品強化");
//player.runScript("分解航海");
//player.runScript("夫尼爾系列");
//player.runScript("平民强化系统");
//player.runScript("裝備強化系統");
//player.runScript("副手兌換");


var status = -1
var txt;
/*------------------------------------------------------------*//*
var ltz45 = "#fMap/MapHelper.img/weather/starPlanet2/5#";
var ltz47 = "#fMap/MapHelper.img/weather/starPlanet/4#";
var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
//var GC2 = "#fEffect/CharacterEff/1022223/2/0#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1112924/0/0#"; //"+z+"//小選項用

txt = "\r\n";
txt += "\t\t\t\t\t#e#fs26##fc0xFFFF4EFF#【強化中心】\r\n#n";
//txt += "" + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + "\r\n";
txt += "#fs17##e#b";
txt += "#L1#" + GC3 + "#b深淵帽子強化#l #L2#" + GC3 + "#b深淵上衣強化#l #L3#" + GC3 + "#b深淵褲子強化#l\r\n";
txt += "#L4#" + GC3 + "#b深淵武器強化#l #L5#" + GC3 + "#bBOSS飾品強化#l #L6#" + GC3 + "#b航海防具強化#l\r\n";
txt += "#L7#" + GC3 + "#b航海武器強化#l #L8#" + GC3 + "#b神秘防具強化#l #L9#" + GC3 + "#b創世武器強化#l";
txt += "";

let selection = npc.askMenuA(txt, 9062461);

switch (selection) {
    case 1:
        player.runScript("深淵帽子強化");
        break;
    case 2:
        player.runScript("深淵上衣強化");
        break;
    case 3:
        player.runScript("深淵褲子強化");
        break;
    case 4:
        player.runScript("深淵武器強化");
        break;
    case 5:
        player.runScript("BOSS飾品強化");
        break;
    case 6:
        player.runScript("航海防具強化");
        break;
    case 7:
        player.runScript("航海武器強化");
        break;
    case 8:
        player.runScript("神秘防具強化");
        break;
    case 9:
        player.runScript("創世武器強化");
        break;		
}		