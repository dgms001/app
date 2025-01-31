/* 圓夢谷 TMS 237 萬能菜單 */
var status = -1
var txt;
/*------------------------- 表情符號 -------------------------*/
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"
var a10 = "#fEffect/ItemEff.img/1102919/effect/default/0#" //小黄鸭车0-7
var f1 = "#fUI/CashShop/CSBeauty/hairColor/Enable/0#"
var qq1 = "#fUI/EventShop/adventureShop/GradeBuyer/0#"
var s1 = "#fUI/CashShop/CSBeauty/hairColor/Disable/0#"
var a23 = "#fEffect/ItemEff.img/1005254/effect/default/4#" //蓝色中小星星
txt = "#fs21##r#e你好,這裡是創世解封中心!!!\r\n#fs13#";


txt += "#fs16##b#e後續創世所有功能都將歸納在這邊\r\n";
txt += "#fs16##b#e創世自帶隱藏卷軸次數!!!\r\n";
txt += "#fs16##b#e創世不可回真!!!!不可使用恢復卡!!!\r\n";
txt += "\t\t\t#L0#創世解封#l     #L1#創世潛能解封#l\r\n";
txt += "\t\t\t#L2#創世武功攻擊#l #L3#創世武功魔攻#l\r\n";
txt += "\t\t\t#L4#創世技能創造#l #L5#創世技能破壞#l\r\n";
txt += "\t\t\t#L6#創世升星#l\r\n";



let selection = npc.askMenuA(txt, true);

switch (selection) {


    case 0:
        player.runScript("創世解封");
        break;
    case 1:
        player.runScript("創世潛能");
        break;
    case 2:
        player.runScript("創世武功1");
        break;
    case 3:
        player.runScript("創世武功2");
        break;
    case 4:
        player.runScript("創世創造");
        break;
    case 5:
        player.runScript("創世破壞");
        break;
    case 6:
        player.runScript("創世升星");
        break;
    case 8:
        player.runScript("收集掉落物");
        break;
    case 14:
        player.runScript("神秘兌換");
        break;
    case 15:
        player.runScript("漆黑兌換");
        break;
    case 50:
        player.runScript("本服菜單");
        break;
}
